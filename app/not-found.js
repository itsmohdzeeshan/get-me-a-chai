import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-black text-white flex flex-col items-center justify-center px-4">
      
      {/* 404 Text */}
      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        404
      </h1>

      {/* Message */}
      <p className="mt-4 text-xl text-gray-300 text-center">
        Oops! The page you're looking for doesn’t exist 😕
      </p>

      <p className="text-sm text-gray-500 mt-2 text-center">
        Maybe the link is broken or the user doesn't exist.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
}