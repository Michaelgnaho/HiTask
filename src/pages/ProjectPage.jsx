import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function ProjectPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-white to-slate-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          {/* Hamburger Menu (Visible on Mobile) */}
          <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>

          {/* Greeting */}
          <div>
            <h1 className="text-xl sm:text-2xl text-black font-bold">Project Overview</h1>
            <p className="text-sm sm:text-base text-gray-600">Manage your projects efficiently</p>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:block">
            <input
              type="text"
              placeholder="Search projects"
              className="border text-black bg-white rounded-full px-4 py-2"
            />
          </div>
        </header>

        {/* Project Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <button className="bg-white text-black shadow-sm border rounded-lg p-2">Create New Project</button>
          <button className="bg-white text-black shadow-sm border rounded-lg p-2">View Completed</button>
          <button className="bg-white text-black shadow-sm border rounded-lg p-2">Upload Files</button>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Example Project */}
          <div className="bg-white border rounded-lg p-4">
            <h2 className="font-bold mb-4">Project Alpha</h2>
            <p className="text-gray-600">Status: In Progress</p>
            <p className="text-gray-600">Deadline: 2024-12-01</p>
            <div className="mt-4">
              <button className="bg-purple-600 text-white rounded-lg px-4 py-2">View Details</button>
            </div>
          </div>

          {/* Example Project */}
          <div className="bg-white border rounded-lg p-4">
            <h2 className="font-bold mb-4">Project Beta</h2>
            <p className="text-gray-600">Status: Pending Approval</p>
            <p className="text-gray-600">Deadline: 2024-11-15</p>
            <div className="mt-4">
              <button className="bg-purple-600 text-white rounded-lg px-4 py-2">View Details</button>
            </div>
          </div>

          {/* Example Project */}
          <div className="bg-white border rounded-lg p-4">
            <h2 className="font-bold mb-4">Project Gamma</h2>
            <p className="text-gray-600">Status: Completed</p>
            <p className="text-gray-600">Completed On: 2024-10-01</p>
            <div className="mt-4">
              <button className="bg-purple-600 text-white rounded-lg px-4 py-2">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
