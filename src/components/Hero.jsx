import { useState } from "react";
import { Link } from "react-router-dom";
import highTaskLogo from "../assets/hitask_logo.png";
import highpic1 from "../assets/hitask_pic1.png";
import companyLogo from "../assets/companyLogo.png"

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen min-w-full flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center p-6 bg-white">
          <div className="flex items-center">
            <img src={highTaskLogo} alt="logo" />
          </div>
          {/* Desktop Menu */}
          <nav className="hidden md:flex border-xl rounded-lg p-3 border-2 border-slate-200 space-x-8">
            <div className="relative group">
              <a  href="#features" className="text-gray-700 bg-white font-medium">Features</a>
              
            </div>
            <div className="relative group">
              <a href ="#aboutUs" className="text-gray-700 bg-white font-medium">About Us</a>
             
            </div>
            <a href="#pricing" className="text-gray-700 font-medium ">Pricing</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
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
        </header>

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

        {/* Hero Section */}
        <main className="flex flex-1 flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-white">
          <div className="max-w-lg mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Your All-in-one Task Management Tool Designed To Revolutionize Your Daily Workflow
            </h1>
            <p className="text-gray-600 mb-8">
              Enhance your productivity with innovative task management platform
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Link to="/register"><button className="px-6 py-3 bg-blue-900 text-white rounded-md">How it works</button></Link>
              <Link to="/register"><button className="px-6 py-3 bg-blue-900 text-white rounded-md">Get Started For Free</button></Link>
            </div>
            <p className="text-gray-600 mt-8">Trusted by credible companies globally</p>
            <div className="flex flex-wrap mt-2 pt-2 px-0">
              <img src={companyLogo} alt="Netflix logo" className=" mx-2"/>
             
            </div>
          </div>
          <div className="w-full md:w-[500px] bg-purple-100 rounded-lg overflow-hidden">
            <img src={highpic1} alt="Three people collaborating in an office setting" className="w-full h-full object-cover" />
          </div>
        </main>
      </div>
    </>
  );
}
