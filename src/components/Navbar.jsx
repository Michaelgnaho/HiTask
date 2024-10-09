// src/components/Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import highTaskLogo from "../assets/hitask_logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-6 bg-white">
      <div className="flex items-center">
        <img src={highTaskLogo} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8">
        <div className="relative group">
          <button className="text-gray-700 bg-white font-medium">Features</button>
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Feature 1</Link>
            <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Feature 2</Link>
          </div>
        </div>

        <div className="relative group">
          <button className="text-gray-700 bg-white font-medium">Resources</button>
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 1</Link>
            <Link to="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 2</Link>
          </div>
        </div>

        <Link to="#" className="text-gray-700 font-medium pt-2">Pricing</Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link to="/login" className="text-gray-700 pt-2">Log In</Link>
        <Link to="/register" className="px-4 py-2 bg-blue-900 text-white rounded-md">
          Get Started
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden p-6 bg-white border-t border-gray-200">
          <div className="space-y-4">
            <Link to="/features" className="block text-gray-700">Features</Link>
            <Link to="/resources" className="block text-gray-700">Resources</Link>
            <Link to="/pricing" className="block text-gray-700">Pricing</Link>
            <div className="space-y-4 mt-4">
              <Link to="/login" className="block text-gray-700">Log In</Link>
              <Link to="/register" className="block px-4 py-2 bg-blue-900 text-white rounded-md">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
