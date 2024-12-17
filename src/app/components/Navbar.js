"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, provider, signInWithPopup } from "../firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error("Error during Google sign-in: ", error);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error("Error signing out: ", error));
  };

  const navigateToHome = () => {
    router.push("/");
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <nav className="py-2 bg-gradient-to-r from-red-300 to-blue-400 text-white">
      {/* Flexbox to align buttons horizontally */}
      <div className="flex flex-row items-center justify-center space-x-0">
        <button
          onClick={navigateToHome}
          className="text-xl font-black py-1 px-4 rounded-md hover:bg-white hover:text-black"
        >
          Home
        </button>
        <button
          onClick={() => (window.location.href = "/about")}
          className="text-xl font-black py-1 px-4 rounded-md hover:bg-white hover:text-black"
        >
          About
        </button>
        <button
          onClick={() => (window.location.href = "/contact")}
          className="text-xl font-black py-1 px-4 rounded-md hover:bg-white hover:text-black"
        >
          Contact Us
        </button>
        <button
          onClick={() => (window.location.href = "/artists")}
          className="text-xl font-black py-1 px-4 rounded-md hover:bg-white hover:text-black"
        >
          Artists
        </button>
        <button
          onClick={() => (window.location.href = "/events")}
          className="text-xl font-black py-1 px-4 rounded-md hover:bg-white hover:text-black"
        >
          Events
        </button>
        <button
          onClick={() => (window.location.href = "/forum")}
          className="text-xl font-black py-1 px-4 rounded-md hover:bg-white hover:text-black"
        >
          Blog
        </button>
      </div>

      {/* Conditional Rendering for Login and User Info */}
      
    </nav>
  );
}
