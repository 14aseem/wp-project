export default function EventDetails() {
    return (
      <section className="max-w-4xl mx-auto mt-8 px-6 py-10 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">🎨 Event Details</h2>
  
        {/* Overview */}
        <div className="mb-6">
          <p className="text-gray-700 leading-7">
            Step into a world of creativity and expression at our **Art Exhibition 2024**. 
            From captivating paintings to intricate sculptures, this event brings together 
            talented artists showcasing breathtaking masterpieces. Witness the intersection 
            of ideas, imagination, and cultures in a visually stunning experience.
          </p>
        </div>
  
        {/* Highlights */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">✨ Highlights</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>🎭 Showcase of Local and Emerging Artists</li>
            <li>🖌️ Live Art Creation & Installations</li>
            <li>🤝 Artist Meet-and-Greet Sessions</li>
            <li>🎨 Interactive Displays & Immersive Experiences</li>
          </ul>
        </div>
  
        {/* Details */}
        <div className="mt-6 space-y-3">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">📅 Event Details</h3>
          <p><strong>Date:</strong> March 23, 2024</p>
          <p><strong>Time:</strong> 10:00 AM - 6:00 PM</p>
          <p><strong>Venue:</strong> The Grand Art Gallery, XYZ Campus</p>
          <p><strong>Entry Fee:</strong> Free</p>
        </div>
  
        {/* Call to Action */}
        <div className="mt-8 text-center">
          <a
            href="https://docs.google.com/forms/d/1dm36fD874lR91JM-8535gigU7fPxH9C2AeOVPL-GK7c/viewform?edit_requested=true"
            target="_blank"
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-200"
          >
            Register Now
          </a>
        </div>
      </section>
    );
  }
  