import React from "react";
import Footer from "../components/Footer";  // Assuming you have a Footer component
import Navbar from "../components/Navbar";

// Mock artist data
const artistData = [
  {
    id: 1,
    name: "Vincent van Gogh",
    profilePicture: "https://cdn.britannica.com/36/69636-050-81A93193/Self-Portrait-artist-panel-board-Vincent-van-Gogh-1887.jpg",
    description: "Dutch Post-Impressionist painter, known for his bold colors and emotional impact.",
  },
  {
    id: 2,
    name: "Leonardo da Vinci",
    profilePicture: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg",
    description: "Italian polymath of the Renaissance, known for 'Mona Lisa' and 'The Last Supper'.",
  },
  {
    id: 3,
    name: "Pablo Picasso",
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Portrait_de_Picasso%2C_1908_%28background_retouched%29.jpg",
    description: "Spanish painter, sculptor, printmaker, and one of the most influential artists of the 20th century.",
  },
  {
    id: 4,
    name: "Frida Kahlo",
    profilePicture: "https://cdn.britannica.com/75/190175-050-DF798A2E/Self-portrait-oil-canvas-Thorn-Necklace-Hummingbird-Frida.jpg",
    description: "Mexican artist known for her unique self-portraits and works inspired by nature and Mexican culture.",
  },
 
];

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gradient-to-r from-green-300 to-blue-400 text-white p-6 text-center mb">
        <h1 className="text-6xl font-bold font-black">Meet the Artists</h1>
        <p className="mt-4 text-xl text-purple-700 font-bold">Discover the genius behind the masterpieces.</p>
      </header>
      <Navbar/>

      <main className="p-6">
        <h2 className="text-3xl font-black text-center mb-8">Explore Our Featured Artists</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artistData.map((artist) => (
            <div key={artist.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105">
              <img
                src={artist.profilePicture}
                alt={artist.name}
                className="w-full h-30 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{artist.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{artist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
