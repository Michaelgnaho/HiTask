import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import highTaskLogo from "../assets/hitask_logo.png"

function Navbar() {
  return (
	<div> <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
	<div className="flex item-start justify-start">
	<div className="flex items-center size-6">
                           <img src={highTaskLogo} alt="logo" />
                        </div>
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


	  <Link to="/register" className="text-gray-700 text-[20px] font-bold mr-5 pt-2">
		Sign Up
	  </Link>
	  <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded-md mr-5">
		Log In
	  </Link>
	</nav>
  </div></div>
  )
}

export default Navbar