"use client";
import EventDetails from "../../components/EventDetails";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ArtExhibition() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      

      {/* Hero Section */}
      <section className=" bg-gradient-to-r from-red-300 to-blue-400 bg-cover bg-center text-purple-700 h-[100px] flex items-center  justify-center">
        <h1 className="text-5xl font-extrabold  px-6 py-2 rounded-md">
          Modern Art Fair
        </h1>
      </section>
      <Navbar />

      {/* Event Details Section */}
      <EventDetails />

      {/* Footer */}
      <Footer />
    </div>
  );
}
