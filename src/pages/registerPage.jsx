import { Link } from "react-router-dom";
import g50 from '../assets/g50.png';
import highTaskLogo from "../assets/hitask_logo.png";

function RegisterPage() {
  return (
    <div className="relative bg-gradient-to-r from-slate-100 to-white min-h-screen flex items-center justify-center m-0 p-0">
      
      {/* Mobile background */}
      <div className=" absolute ml-[100px] sm:hidden" style={{ backgroundImage: `url(${g50})` }}></div>
      
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
        <div className="flex item-start justify-start">
          <img
            src={highTaskLogo}
            alt="HITask Logo"
            className="mr-2"
            width="40"
            height="40"
          />
          <span className="text-2xl text-black font-bold">HITask</span>
        </div>
        <nav className="flex">
          <Link to="/login" className="text-gray-700 text-[20px] font-bold mr-5 pt-2">
            Log In
          </Link>
        </nav>
      </div>

      <div className="p-10 flex flex-col shadow-lg w-full mt-[100px] mb-4">
        <h1 className="text-2xl text-black font-bold mb-4 text-center">Welcome to HITask</h1>
        <p className="text-gray-600 mb-8 text-center">
          Securely update your personal details, manage your preferences, and ensure your profile is always up to date.
        </p>

        <div className="flex">
          {/* Hide g50 image on mobile */}
          <img src={g50} alt="svg" className="hidden sm:flex w-[200px] z-2" />
          
          <form className="w-full sm:w-[500px] ml-auto">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your name</label>
              <input
                type="text"
                className="w-full text-black bg-white px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your email</label>
              <input
                type="email"
                className="w-full px-4 py-2 text-black bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 text-black bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-black bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your Occupation</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-black bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <Link to="/login">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md">
                Sign Up
              </button>
            </Link>
          </form>
        </div>
        
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
