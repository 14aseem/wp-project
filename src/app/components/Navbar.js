'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for the new app directory
import { auth, provider, signInWithPopup } from "../firebase"; // Import Firebase functions
import { signOut } from "firebase/auth"; // Firebase sign-out function

export default function Navbar() {
  const [user, setUser] = useState(null); // Track user login state
  const [isClient, setIsClient] = useState(false); // Track whether component is mounted

  const router = useRouter(); // Initialize router from next/navigation

  // Function to handle Google sign-in
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user); // Store user details on successful login
    } catch (error) {
      console.error("Error during Google sign-in: ", error);
    }
  };

  // Function to handle sign-out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null)) // Reset user state after sign-out
      .catch((error) => console.error("Error signing out: ", error));
  };

  // Navigate to home page
  const navigateToHome = () => {
    router.push('/'); // Navigate to home page
  };

  // Client-side check: only use router after component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render router-related components until client-side
  if (!isClient) {
    return null; // Or a loading spinner can be shown here
  }

  return (
    <nav className="p-4 bg-gradient-to-r from-red-300 to-blue-400 text-white">
    <div className="flex flex-col items-center space-y-4">
      {/* Home and About Buttons */}
      <button
        onClick={navigateToHome}
        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
      >
        Home
      </button>
      <button
        onClick={() => (window.location.href = "/about")}
        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
      >
        About
      </button>
    </div>
  
    {/* Conditional Rendering for Login and User Info */}
    <div className="mt-4 text-center">
      {!user ? (
        <button
          onClick={handleGoogleLogin}
          className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600"
        >
          Login with Google
        </button>
      ) : (
        <div>
          <span className="mr-4">Hello, {user.displayName}</span>
          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  </nav>
  

  );
}
