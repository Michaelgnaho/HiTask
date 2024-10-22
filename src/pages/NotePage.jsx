import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaBars} from "react-icons/fa";


function NotePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row text-black bg-slate-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 bg-gray-50">
        <header className="flex justify-between items-center mb-6">
          {/* Hamburger Menu (Visible on Mobile) */}
          <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
          <FaBars/>
          </button>

          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <i className="fas fa-search absolute top-3 right-4 text-gray-400"></i>
          </div>

          {/* Add Note Button */}
          <div className="hidden md:flex items-center">
            <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">
              + Add Note
            </button>
            <img
              src="https://placehold.co/40x40"
              alt="User profile"
              className="w-10 h-10 rounded-full ml-4"
            />
          </div>
        </header>

        {/* Greeting Section */}
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-semibold mb-2">Hello Thompson</h1>
          <p className="text-gray-600">
            Keep track of important details and ideas here. Organize your thoughts and ensure
            nothing slips through the cracks.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center mb-4">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-full mr-2 mb-2">
            ALL
          </button>
          <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-full mr-2 mb-2">
            PERSONAL
          </button>
          <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-full mb-2">
            TEAM
          </button>
          <div className="flex items-center ml-auto">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-600">Show only completed notes</span>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Note Card */}
          {[
            { category: 'Home', title: 'Change Filters', date: '18.9.2024' },
            { category: 'Personal', title: 'Gym Session', date: '4.9.2024' },
            { category: 'Team', title: 'Team meeting', date: '24.9.2024' },
            { category: 'Home', title: 'Home Security', date: '14.9.2024' },
            { category: 'Personal', title: 'Laundry', date: '13.9.2024' },
            { category: 'Team', title: 'Project Deadline', date: '14.10.2024' },
            { category: 'Home', title: 'Household Budget', date: '1.11.2024' },
            { category: 'Personal', title: 'Grocery Shopping', date: '17.10.2024' },
            { category: 'Team', title: 'Task Assignment', date: '24.10.2024' },
          ].map((note, index) => (
            <div key={index} className="p-4 bg-white border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-1 text-xs text-white rounded ${note.category === 'Home' ? 'bg-blue-600' : note.category === 'Personal' ? 'bg-gray-600' : 'bg-green-600'}`}>
                  {note.category}
                </span>
                <div className="flex items-center">
                  <i className="fas fa-check text-gray-400 mr-2"></i>
                  <i className="fas fa-edit text-gray-400 mr-2"></i>
                  <i className="fas fa-trash text-gray-400"></i>
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-2">{note.title}</h2>
              <p className="text-gray-600 mb-2">Details about {note.title}</p>
              <p className="text-gray-400">{note.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotePage;
