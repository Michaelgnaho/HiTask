import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
 import { Link } from "react-router-dom"
 import g50 from '../assets/g50.png';

function registerPage() { return ( <div className="relative bg-gradient-to-r from-slate-100 to-white min-h-screen flex items-center justify-center m-0 p-0 ">



  <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
    <div className="flex item-start justify-start">
      <img
        src="https://storage.googleapis.com/a1aa/image/hY10kdLYH2JNKlYZltWPAJf2F71MdVIgqri0bCjLwPtTKtxJA.jpg"
        alt="HITask Logo"
        className="mr-2"
        width="40"
        height="40"
      />
      <span className="text-2xl text-black font-bold">HITask</span>
    </div>
    <nav className="flex ">
    <div className='flex bg-transparent gap-3 rounded-lg border-2 border-blue  mr-[400px] ml-4'>

      <div className="relative group">
        <button className="text-gray-700 bg-transparent font-medium">
          Features <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-transparent border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Feature 1
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Feature 2
          </a>
        </div>
      </div>

      <div className="relative group">
        <button className="text-gray-700  bg-transparent font-medium">
          Resources <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Resource 1
          </a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Resource 2
          </a>
        </div>
      </div>

      <a href="#" className="text-gray-700  bg-transparent font-medium pt-2 pr-4">
        Pricing
      </a>
      </div>


      <Link to="/login" className="text-gray-700 text-[20px] font-bold mr-5 pt-2">
        Log In
      </Link>
      <Link href="/register" className="bg-blue-600 text-white px-4 py-1 rounded-md mr-5">
        Get Started
      </Link>
    </nav>
  </div>
  <div className=" pl-0 p-10 flex flex-col shadow-lg w-full   mt-[100px] mb-4">
    <h1 className="text-2xl text-black font-bold mb-4 text-center">Welcome to HITask</h1>
    <p className="text-gray-600 mb-8 text-center">
      Securely update your personal details, manage your preferences, and ensure your profile is always up to date.
    </p>

    <div className='flex '>
    <img src={g50} alt="svg" className='flex w-[200px] z-2' />

    <form className='w-[500px] ml-auto'>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Enter your name</label>
        <input
          type="text"
          className="w-full text-black bg-white px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="mb-4">
        <label className="block   text-gray-700 mb-2">Enter your email</label>
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
        <label className="block  text-gray-700 mb-2">Username</label>
        <input
          type="text"
          className="w-full px-4 py-2 text-black bg-white border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Enter your Occupation</label>
        <input
          type="text"
          className="w-full px-4 py-2 text-black bg-white  border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
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
); }

export default registerPage