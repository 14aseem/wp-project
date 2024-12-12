import Navbar from "../components/Navbar";
import { useState } from "react";

export default function PostArt() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "image") {
      setImagePreview(value); // Update the image preview when the image URL is entered
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.title || !formData.description || !formData.price || !formData.image) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Art Submitted:", formData);
    // You can handle form submission here (e.g., sending data to an API)
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Post Your Art</h1>
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
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Price (USD)</label>
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
              <div className="mt-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-md"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}