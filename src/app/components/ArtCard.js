export default function ArtCard({ art,user }) {
    return (
      <div className="bg-gradient-to-r from-blue-100 to-pink-200 shadow-md rounded-sm p-5 mt-5">
        <img
          src={art.image}
          alt={art.title}
          className="w-60 h-30 object-cover rounded-md text-center"
        />
        <h2 className=" text-2xl text-black font-bold mt-5">{art.title}</h2>
        <p className=" text-purple-800 font-bold mt-2 ">{art.description}</p>
        <p className="text-green-900 font-bold mt-4">Price: ${art.price}</p>
        

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Buy
        </button>
      </div>
    );
  }
  