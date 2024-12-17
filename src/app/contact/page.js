"use client";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !message) {
      setError("All fields are required!");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error sending message:", err);
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
<header
  className="bg-gradient-to-r from-red-300 to-blue-400 text-white text-center py-6 bg-cover bg-center"
  style={{ backgroundImage: "https://images.squarespace-cdn.com/content/v1/53ea55d2e4b02ced560ce44e/1409241495754-U34EOGETEF8PG37MFR8O/MainGalleryShot.jpeg" }}
>    
  <h1 className="text-4xl md:text-6xl font-black text-black">Contact</h1>
  <p className="mt-4 text-lg md:text-xl text-purple-900 font-bold">
    Celebrating creativity, individuality, and the power of art.
  </p>
</header>
    <Navbar/>
    <div className="flex flex-col items-center  min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-20">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-8">
        <h1 className="text-3xl font-black text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-sm text-purple-800 text-center mb-8">
          Have any questions or need support? Reach out to us using the form
          below.
        </p>
        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}
        {success && (
          <p className="text-green-500 text-center text-sm mb-4">{success}</p>
        )}
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Your Message
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Write your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-purple-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
          <Footer/>
    </>
  );
}
