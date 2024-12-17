import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-pink-200 text-black py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Art Emporium */}
        <div>
          <h3 className="text-xl font-bold mb-3">About Art Emporium</h3>
          <p className="text-sm leading-relaxed">
            Art Emporium is a platform celebrating creativity and individuality.
            Discover, showcase, and support incredible artists and their
            masterpieces. Join us in our mission to connect art lovers worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/artists" className="hover:underline">
                Artists
              </a>
            </li>
            <li>
              <a href="/events" className="hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="/forum" className="hover:underline">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-3">Contact Us</h3>
          <p className="text-sm mb-2">
            Email:{" "}
            <a
              href="mailto:support@artemporium.com"
              className="hover:underline"
            >
              support@artemporium.com
            </a>
          </p>
          <p className="text-sm mb-4">Phone: +91 1234567890</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="https://x.com/?lang=en" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="https://in.linkedin.com/" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm border-t border-black-500 pt-4">
        <p>&copy; {new Date().getFullYear()} Art Emporium. All rights reserved.</p>
        <p className="text-xs mt-1">Made with ❤️ by Aseem,Abraar,Nithil.</p>
      </div>
    </footer>
  );
}
