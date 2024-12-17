import { db } from "../firebase"; // Adjust path as needed
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function PostArt() {
  const [arts, setArts] = useState([]); // To store artworks fetched from Firestore
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Fetch arts from Firestore on page load
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "artworks"), (snapshot) => {
      const fetchedArts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched arts:", fetchedArts); // Log fetched data
      setArts(fetchedArts);
    }, (error) => {
      console.error("Error fetching arts: ", error);
    });
    return () => unsubscribe();
  }, []);
  
   

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "image") {
      setImagePreview(value);
    }
  };

  // Submit data to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.price || !formData.image) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "artworks"), {
        title: formData.title,
        description: formData.description,
        price: formData.price,
        image: formData.image,
        createdAt: new Date(),
      });

      setSubmissionStatus("Art submitted successfully!");

      // Reset form fields
      setFormData({
        title: "",
        description: "",
        price: "",
        image: "",
      });
      setImagePreview("");
    } catch (error) {
      console.error("Error submitting art: ", error);
      setSubmissionStatus("Failed to submit art. Try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Post Your Art</h1>

      {submissionStatus && (
        <div className="bg-green-100 text-green-800 p-3 rounded-md mb-4">
          {submissionStatus}
        </div>
      )}

      {/* Form for posting art */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 mt-4 object-cover rounded-md"
            />
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {/* Display Submitted Art */}
      <h2 className="text-xl font-bold mt-8 mb-4">Submitted Artworks</h2>
      <div className="space-y-4">
        {arts.map((art) => (
          <div
            key={art.id}
            className="p-4 bg-gray-100 rounded-md shadow-sm flex items-center space-x-4"
          >
            <img
              src={art.image}
              alt={art.title}
              className="w-24 h-24 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-semibold">{art.title}</h3>
              <p className="text-gray-600">{art.description}</p>
              <p className="text-blue-500 font-medium">${art.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
