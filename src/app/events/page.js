"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function EventsPage() {

   
  return (
    <>
      {/* Header */}
      <header className="text-center py-8 bg-gradient-to-r from-yellow-200 to-red-300">
        <h1 className="text-4xl md:text-6xl font-black text-gray-800">
          Art Events
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Discover, participate, and celebrate creativity through exclusive art
          events and exhibitions.
        </p>
      </header>

      <Navbar />

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Upcoming Events */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Upcoming Events
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* Upcoming Event Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-red-500 mb-2">
                Art Exhibition 2024
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Date:</strong> January 20, 2025
              </p>
              <p className="text-gray-700 mb-4">
                Explore curated artworks from emerging artists worldwide. A
                celebration of innovation and artistry.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => window.open("https://docs.google.com/forms/d/1dm36fD874lR91JM-8535gigU7fPxH9C2AeOVPL-GK7c/edit")}>
                Register Now
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 ml-5" onClick={() => (window.location.href = "../events/artexhibition")}>
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Past Event Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Modern Art Fair
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Date:</strong> September 15, 2024
              </p>
              <p className="text-gray-700 mb-4">
                A showcase of bold and modern art styles that inspire creativity
                and individuality.
              </p>
              <button className="text-blue-600 font-semibold hover:underline" onClick={() => (window.location.href = "../events/modernart")} >
                View Details
              </button>
            </div>

            {/* Past Event Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Sculpting Workshop
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Date:</strong> August 5, 2024
              </p>
              <p className="text-gray-700 mb-4">
                A hands-on workshop exploring the art of sculpting with clay and
                stone.
              </p>
              <button className="text-blue-600 font-semibold hover:underline" onClick={() => (window.location.href = "../events/sculpting")}>
                View Details
              </button>


            </div>

            {/* Past Event Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Portrait Art Meetup
              </h3>
              <p className="text-gray-600 mb-1">
                <strong>Date:</strong> July 10, 2024
              </p>
              <p className="text-gray-700 mb-4">
                Connect with fellow portrait artists and share techniques and
                styles.
              </p>
              <button className="text-blue-600 font-semibold hover:underline" onClick={() => (window.location.href = "../events/modernart")} >
                View Details
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}
