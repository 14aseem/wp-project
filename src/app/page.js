"use client";

import React, { useState } from "react";
import ArtCard from "./components/ArtCard";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Link from "next/link"; // Use Next.js Link to navigate between pages

// Mock data for art listings
const artData = [
  {
    id: 1,
    title: "Starry Night",
    description: "A beautiful starry night painting by Van Gogh.",
    price: 500,
    image: "https://smarthistory.org/wp-content/uploads/2021/12/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpeg",
  },
  {
    id: 2,
    title: "Mona Lisa",
    description: "The iconic portrait by Leonardo da Vinci.",
    price: 1000,
    image: "https://static.displate.com/270x380/displate/2023-07-04/8bdb31c1949b22406cb2a9c257dae6f4_45fcb4a5a3d57eab739d4a610fb77ab2.jpg",
  },
  {
    id: 3,
    title: "The Scream",
    description: "An expressionist masterpiece by Edvard Munch.",
    price: 700,
    image: "https://smarthistory.org/wp-content/uploads/2021/12/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpeg",
  },
  {
    id: 4,
    title: "The Scream",
    description: "An expressionist masterpiece by Edvard Munch.",
    price: 700,
    image: "/images/the-scream.jphttps://smarthistory.org/wp-content/uploads/2021/12/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpeg",
  },
  {
    id: 5,
    title: "The Scream",
    description: "An expressionist masterpiece by Edvard Munch.",
    price: 700,
    image: "/images/the-scream.jphttps://smarthistory.org/wp-content/uploads/2021/12/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpeg",
  },
  {
    id: 6,
    title: "The Scream",
    description: "An expressionist masterpiece by Edvard Munch.",
    price: 700,
    image: "/images/the-scream.jphttps://smarthistory.org/wp-content/uploads/2021/12/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpeg",
  },
  {
    id: 7,
    title: "The Scream",
    description: "An expressionist masterpiece by Edvard Munch.",
    price: 700,
    image: "/images/the-scream.jphttps://smarthistory.org/wp-content/uploads/2021/12/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpeg",
  },
];

export default function Home() {
  const [arts, setArts] = useState(artData); // State to store artworks
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const addArt = (newArt) => {
    setArts((prevArts) => [...prevArts, newArt]);
    setIsModalOpen(false); // Close modal after submission
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-300 to-blue-400 text-black pt-6 text-center mb-0">
        <h1 className="text-5xl font-black text-black-500">Welcome to The Art Emporium</h1>
        <p className="mt-4 text-xl text-purple-900 font-bold">Explore and buy stunning artwork from talented artists.</p>
        <br />
        <hr></hr>
        <br />
      </header>

      <Navbar />

      {/* Add New Artwork Button */}
      <div className="text-center mb-0 bg-gradient-to-r from-red-300 to-blue-400">
        <button
          onClick={() => setIsModalOpen(true)}
          className=" text-2xl font-black bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 mb-10 mt-6"
        >
          Post Your Art
        </button>
      </div>

      {/* Art Listings */}
      <main className="p-6 bg-gradient-to-r from-red-300 to-blue-400 h-auto mt-0 flex-1">
        <h2 className="text-5xl text-purple-900 font-black mb-6">Available Artworks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {arts.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))}
        </div>
      </main>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Post Your Art</h2>
            <ArtForm onSubmit={addArt} />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-800"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

function ArtForm({ onSubmit }) {
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
    if (!formData.title || !formData.description || !formData.price || !formData.image) {
      alert("Please fill in all fields.");
      return;
    }

    // Submit the new artwork
    const newArt = { ...formData, id: Math.random() }; // Add a random ID for the new artwork
    onSubmit(newArt); // Call the parent function to add the artwork
  };

  return (
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
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
