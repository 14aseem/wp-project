"use client";

import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function About() {
  const router = useRouter();

  const handleExploreNow = () => {
    router.push("/"); // Navigate to the Home page
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to The Art Emporium</h1>
        <p className="mt-4 text-lg md:text-xl">
          Celebrating creativity, individuality, and the power of art.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Our mission is simple:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>To provide a platform for artists of all levels to share their creativity with the world.</li>
            <li>To connect art lovers with unique, inspiring, and breathtaking pieces of artwork.</li>
            <li>To make art accessible and enjoyable for everyone.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-purple-700">For Artists</h3>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li>A user-friendly platform to showcase your art to a global audience.</li>
                <li>Tools to post, price, and describe your artwork effortlessly.</li>
                <li>Opportunities to connect with potential buyers and fellow artists.</li>
              </ul>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold text-purple-700">For Art Lovers</h3>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li>A diverse collection of artworks, from paintings to sculptures.</li>
                <li>Seamless browsing with detailed descriptions and images.</li>
                <li>Secure purchasing options to bring your favorite pieces home.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            The Art Emporium began with a vision: to bridge the gap between artists and art enthusiasts. 
            Founded by a group of art lovers, our platform has grown into a thriving community where 
            creativity is celebrated and cherished.
          </p>
          <p className="text-gray-700 mt-2 text-lg leading-relaxed">
            Over the years, we’ve partnered with numerous artists and collectors, showcasing 
            their incredible talent and helping them reach a broader audience. Join us in this 
            artistic journey and be part of a community that values passion, imagination, and originality.
          </p>
        </section>

        <section className="text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Join Us</h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Whether you’re an artist eager to share your work or an art lover searching for inspiration, 
            The Art Emporium welcomes you to become part of our journey.
          </p>
          <button
            onClick={handleExploreNow}
            className="mt-6 px-6 py-3 bg-purple-500 text-white font-bold rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
          >
            Explore Now
          </button>
        </section>
      </main>
    </div>
  );
}
