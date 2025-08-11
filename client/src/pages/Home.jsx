import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-5xl font-bold text-gray-800 mb-4">
        Welcome to Home Page
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Discover our services and products. Sign up to get started or log in to continue where you left off.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/signup")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
        >
          Sign Up
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-md shadow-md transition"
        >
          Login
        </button>
      </div>
    </section>
  );
}
