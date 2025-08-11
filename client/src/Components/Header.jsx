import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderBox() {
  return (
    <header className="navbar bg-white shadow">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <NavLink to="/" className="brand text-2xl font-bold">
          MySite
        </NavLink>

        <div className="flex items-center space-x-6">
          {/* Left side links */}
          <NavLink
            to="/services"
            className="hover:text-blue-600 transition"
          >
            Services
          </NavLink>
          <NavLink
            to="/products"
            className="hover:text-blue-600 transition"
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-blue-600 transition"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-blue-600 transition"
          >
            Contact Us
          </NavLink>

          {/* Gap before auth buttons */}
          <div className="border-l h-6 border-gray-300 mx-4"></div>

          {/* Right side auth buttons grouped in colored box */}
          <div className="flex space-x-2 bg-blue-600 text-white rounded px-3 py-1">
            <NavLink
              to="/signup"
              className="hover:text-gray-300 transition"
            >
              SignUp /
            </NavLink>
            <NavLink
              to="/login"
              className="hover:text-gray-300 transition"
            >
            Login
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
