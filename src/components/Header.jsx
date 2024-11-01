import { FaBars, FaUser } from "react-icons/fa";

function Header({ toggleSidebar, userCredential }) {
  return (
    <header className="flex justify-between items-center mb-8">
          {/* Hamburger Menu (Visible on Mobile) */}
          <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>

             {/* Search Bar */}
          
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="Search for something"
              className="border text-black bg-white rounded-full px-4 py-2"
            />
          </div>

          {/* Greeting */}
          <div className="flex flex-row-reverse">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex flex-col items-center justify-center m-2">
          {userCredential && userCredential.photo ? (<img src={userCredential.photo} alt="profile" className="rounded-full m-2" />) : (<FaUser  className="text-gray-500 m-2" size={40} /> )} 
          </div>
          
          <div className="flex flex-col pt-2">
          <h1 className="text-xl sm:text-2xl text-black font-bold">
              {userCredential ?` Welcome ${userCredential.fname}` : "Loading..."}
            </h1>
            <p className="text-sm sm:text-base text-gray-600">How can we help you today?</p>
            </div>
          </div>

         
          
        </header>
  );
}

export default Header;
