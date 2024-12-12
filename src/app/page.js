'use client';

import React, { useState } from 'react';
import ArtCard from './components/ArtCard';
import Navbar from './components/Navbar';

// Mock data for art listings
const artData = [
  {
    id: 1,
    title: 'Starry Night',
    description: 'A beautiful starry night painting by Van Gogh.',
    price: 500,
    image: 'https://smarthistory.org/wp-content/uploads/2021/12/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpeg',
  },
  {
    id: 2,
    title: 'Mona Lisa',
    description: 'The iconic portrait by Leonardo da Vinci.',
    price: 1000,
    image: "https://static.displate.com/270x380/displate/2023-07-04/8bdb31c1949b22406cb2a9c257dae6f4_45fcb4a5a3d57eab739d4a610fb77ab2.jpg",
  },
  {
    id: 3,
    title: 'The Scream',
    description: 'An expressionist masterpiece by Edvard Munch.',
    price: 700,
    image: 'https://smarthistory.org/wp-content/uploads/2021/12/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpeg',
  },
  {
    id: 4,
    title: 'The Scream',
    description: 'An expressionist masterpiece by Edvard Munch.',
    price: 700,
    image: 'https://smarthistory.org/wp-content/uploads/2021/12/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpeg',
  },
];

export default function Home() {
  const [arts] = useState(artData);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-red-300 to-blue-400 text-black py-12 text-center">
        <h1 className="text-6xl font-bold text-black-500">Welcome to The Art Emporium</h1>
        <p className="mt-4 text-2xl text-red font-bold">Explore and buy stunning artwork from talented artists.</p>
       <br></br>
       <br></br>
       
       <hr></hr>
      </header>

      {/* Art Listings */}
      <main className="p-6 bg-gradient-to-r from-red-300 to-blue-400 h-64 ">
        <h2 className="text-5xl text-black-900 font-bold mb-6">Available Artworks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {arts.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))}
        </div>
      </main>
    </div>
  );
}
