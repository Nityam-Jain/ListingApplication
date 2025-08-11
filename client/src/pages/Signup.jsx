import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm flex flex-col">
        <h1 className="text-3xl font-bold mb-8 text-center">Sign up</h1>

        {/* Name input */}
        <label className="text-sm font-semibold mb-1" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your full name"
          className="border border-gray-300 rounded-md w-full py-2 px-3 mb-6 focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
        />

        {/* Email input */}
        <label className="sr-only" htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md w-full py-2 px-3 mb-4 focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
        />

        {/* Password input with toggle icon */}
        <div className="relative w-full mb-6">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border border-gray-300 rounded-md w-full py-2 px-3 pr-10 focus:outline-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              // Eye icon (visible)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            ) : (
              // Eye off icon (hidden)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.965 9.965 0 012.273-3.634m1.318-1.316a9.97 9.97 0 0112.25 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
              </svg>
            )}
          </button>
        </div>

        {/* Sign Up button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md mb-4 transition"
        >
          Sign Up
        </button>

        {/* Already have account link */}
        <p className="text-center text-gray-500 mb-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>

        {/* Divider with "or" */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign up button */}
        <button
          type="button"
          className="flex items-center justify-center border border-gray-400 rounded-md py-2 px-4 hover:bg-gray-100 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            alt="Google logo"
            className="w-5 h-5 mr-3"
          />
          Sign up with Google
        </button>
      </form>
    </section>
  );
}
