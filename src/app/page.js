import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-800">
        Welcome to Recipe App
      </h1>
      <Link
        href="/recipe-list"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
      >
        Explore Recipes
      </Link>
    </div>
  );
}