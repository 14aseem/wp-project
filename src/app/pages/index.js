import ArtCard from "../components/ArtCard";
import Navbar from "../components/Navbar";

export default function Home() {
  // Sample data for art
  const artData = [
    {
      id: 1,
      image: "/sunset.jpg",
      title: "Sunset Over Mountains",
      description: "A beautiful painting of a sunset over mountains.",
      price: 50,
    },
    {
      id: 2,
      image: "/abstract.jpg",
      title: "Abstract Art",
      description: "A modern abstract art piece.",
      price: 75,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artData.map((art) => (
          <ArtCard key={art.id} art={art} />
        ))}
      </div>
    </div>
  );
}
