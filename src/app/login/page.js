"use client";

import { useState } from "react";
import { auth } from "firebase/auth"; // Adjust path based on your project structure
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration successful!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? "Register" : "Login"}
        </h1>
        {error && (
          <p className="text-red-600 text-sm mb-4">{error}</p>
        )}
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">
            {isRegistering
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              className="text-blue-500 font-bold hover:underline"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? "Login" : "Register"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
