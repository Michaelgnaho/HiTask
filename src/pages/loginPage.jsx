import { Link } from "react-router-dom";
import g50 from '../assets/g50.png';
import highTaskLogo from "../assets/hitask_logo.png";

function LoginPage() {
  return (
    <div className="relative bg-gradient-to-r from-slate-100 to-white min-h-screen flex items-center justify-center m-0 p-0">

      {/* Mobile background */}
      <div className="absolute z-0  sm:hidden" style={{ backgroundImage: `url(${g50})` }}></div>

      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
        <div className="flex item-start justify-start">
          <img
            src={highTaskLogo}
            alt="HITask Logo"
            className="mr-2"
            width="40"
            height="40"
          />
        </div> 
        <nav className="flex">
          <div className='flex'>           
            <span className='text-black px-2 pt-1'>have no account?</span>
            <Link to="/register" className="bg-blue-600 text-white px-2 py-1 rounded-md text-center mr-5"> 
              Sign up
            </Link>
          </div>
        </nav>
      </div>

      <div className=" p-10 pb-0 h-[620px] flex flex-col shadow-lg w-full mt-[100px]  justify-center  " >
        <h1 className="text-2xl text-black font-bold mb-4 text-center">Welcome to HITask</h1>
        <p className="text-gray-600 mb-8 text-center">
          Log in to your account to access your dashboard.
        </p>
        {/* <img src={g50} alt="svg" className='hidden sm:flex w-[200px] z-0' /> */}


        <div className='flex items-center justify-center'>
          {/* Hide g50 image on mobile */}
          <form className='w-[500px] text-black items-center justify-center z-50' >
          <div className="mb-4">
              <label className="block mb-2">Enter your email</label>
              <input
                type="email"
                className="w-full bg-white px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter your Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <Link to="/dashboard">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md">
                Sign In
              </button>
            </Link>
          </form>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Do not have an account? <Link to="/register" className="text-blue-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
