import Link from "next/link";

export default function Navbar() {
  return (

    <nav className="bg-gradient-to-r from-blue-200 to-pink-700 text-black p-4 ">
      <div className=" ">
        <h1 className="text-6xl mb-5 font-bold text-center">Art Emporium</h1>
        </div>
        <div className="text-center ">
          <Link href="/" legacyBehavior>
            Home 
          </Link>
          <Link href="src/pages/post-art">Post Art</Link>
        </div>
      
    </nav>
    
  );
}
