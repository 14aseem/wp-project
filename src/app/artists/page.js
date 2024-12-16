import React from "react";
import Footer from "../components/Footer";  // Assuming you have a Footer component
import Navbar from "../components/Navbar";

// Mock artist data
const artistData = [
  {
    id: 1,
    name: "Vincent van Gogh",
    profilePicture: "https://www.biography.com/.image/t_share/MTQ1MDE3NjE2NzQ0NzI3NzEw/vincent-van-gogh.jpg",
    description: "Dutch Post-Impressionist painter, known for his bold colors and emotional impact.",
  },
  {
    id: 2,
    name: "Leonardo da Vinci",
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Leonardo_da_Vinci.jpg",
    description: "Italian polymath of the Renaissance, known for 'Mona Lisa' and 'The Last Supper'.",
  },
  {
    id: 3,
    name: "Pablo Picasso",
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/3/35/Pablo_Picasso_1937.jpg",
    description: "Spanish painter, sculptor, printmaker, and one of the most influential artists of the 20th century.",
  },
  {
    id: 4,
    name: "Frida Kahlo",
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/0/05/Frida_Kahlo_1932.jpg",
    description: "Mexican artist known for her unique self-portraits and works inspired by nature and Mexican culture.",
  },
  {
    id: 5,
    name: "Claude Monet",
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Claude_Monet_1899.jpg",
    description: "French painter, a founder of Impressionism, and is famous for his series of water lilies paintings.",
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
                className="w-full h-56 object-cover"
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
