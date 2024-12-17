"use client";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import Footer from "../components/Footer";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import Navbar from '../components/Navbar';

export default function ForumPage() {
  const [threads, setThreads] = useState([]); // Stores all threads
  const [newTitle, setNewTitle] = useState(""); // New thread title
  const [newContent, setNewContent] = useState(""); // New thread content
  const [error, setError] = useState("");

  // Fetch threads in real time
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "threads"), (snapshot) => {
      const threadsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setThreads(threadsData);
    });
    return () => unsubscribe();
  }, []);

  // Add a new thread
  const addThread = async (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) {
      setError("Both title and content are required!");
      return;
    }
    try {
      await addDoc(collection(db, "threads"), {
        title: newTitle,
        content: newContent,
        comments: [],
        createdAt: new Date(),
      });
      setNewTitle("");
      setNewContent("");
      setError("");
    } catch (err) {
      console.error("Error adding thread: ", err);
      setError("Failed to create a thread.");
    }
  };

  // Add a comment to a thread
  const addComment = async (threadId, comment) => {
    if (!comment) return;
    const threadRef = doc(db, "threads", threadId);
    try {
      await updateDoc(threadRef, {
        comments: arrayUnion(comment),
      });
    } catch (err) {
      console.error("Error adding comment: ", err);
    }
  };

  return (
    <>
    <header
  className="bg-gradient-to-r from-red-300 to-blue-400 text-white text-center py-6 bg-cover bg-center"
  style={{ backgroundImage: "https://images.squarespace-cdn.com/content/v1/53ea55d2e4b02ced560ce44e/1409241495754-U34EOGETEF8PG37MFR8O/MainGalleryShot.jpeg" }}
>    
  <h1 className="text-4xl md:text-6xl font-black text-black">Blog</h1>
  <p className="mt-4 text-lg md:text-xl text-purple-900 font-bold">
    Write blogs related to Art anonymously
  </p>
</header>
<Navbar/>

    <div className="p-6 max-w-5xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-6">Start a Blog</h1>

      {/* New Thread Form */}
      <div className="bg-white p-6 mb-8 shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-700 mb-4"> New Blog</h2>
        <form onSubmit={addThread} className="space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
          />
          <textarea
            placeholder="Blog Content"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-blue-300"
            rows="4"
          ></textarea>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-300"
          >
            Post
          </button>
        </form>
      </div>

      {/* Threads */}
      {threads.map((thread) => (
        <div
          key={thread.id}
          className="bg-white p-6 mb-6 shadow-md rounded-lg border border-gray-200"
        >
          <h2 className="text-6xl font-black text-purple-600 mb-2">{thread.title}</h2>
          <p className="text-xl mb-4 mt-4 font-bold">{thread.content}</p>
          <h3 className="font-black text-3xl mb-2">Comments:</h3>

          {/* Comments */}
          <ul className="mb-4 mb-6 space-y-2">
            {thread.comments &&
              thread.comments.map((comment, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-100 rounded border-l-4 border-blue-500 text-gray-700 bold"
                >
                  {comment}
                </li>
              ))}
          </ul>

          {/* Add Comment */}
          <AddCommentForm
            onSubmit={(comment) => addComment(thread.id, comment)}
          />
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
}

// Component for adding comments
function AddCommentForm({ onSubmit }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(comment);
    setComment("");
  };

  return (
    
    <form onSubmit={handleSubmit} className="flex items-center rounded">
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-l focus:ring focus:ring-green-300"
      />
      <button
        type="submit"
        className="bg-purple-600 text-white px-4 py-2 rounded-r hover:bg-green-700 transition duration-300 ml-2"
      >
        Comment
      </button>
    </form>
  );
}
