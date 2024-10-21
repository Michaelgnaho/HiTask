import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function SettingPage() {
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
      <main className="flex-1 p-4 md:p-8">
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

          {/* Search Bar */}
          <div className="relative w-full hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-10 border rounded-full"
            />
            <i className="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
          </div>

          {/* Notification and Profile Icons */}
          <div className="flex items-center space-x-4">
            <i className="fas fa-bell text-gray-600"></i>
            <i className="fas fa-cog text-gray-600"></i>
            <img src="https://placehold.co/40x40" alt="User profile" className="rounded-full" />
          </div>
        </header>

        <h1 className="text-2xl font-semibold mb-4">Hello Thompson</h1>
        <p className="text-gray-600 mb-8">Customize your accounts settings to tailor your task management experience.</p>

        <div className="space-y-8">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src="https://placehold.co/60x60" alt="User profile" className="rounded-full mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">John Thompson</h2>
                  <p className="text-gray-500">Software Developer, Lagos, Nigeria</p>
                </div>
              </div>
              <button className="text-blue-600 hover:underline">Edit</button>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Personal information</h2>
              <button className="text-blue-600 hover:underline">Edit</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">First Name</p>
                <p className="font-semibold">John</p>
              </div>
              <div>
                <p className="text-gray-500">Last Name</p>
                <p className="font-semibold">Thompson</p>
              </div>
              <div>
                <p className="text-gray-500">Email address</p>
                <p className="font-semibold">john@examplemail.com</p>
              </div>
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-semibold">09034567895</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-500">Bio</p>
                <p className="font-semibold">Software Developer</p>
              </div>
            </div>
          </div>

          {/* Password and Security */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Password and Security</h2>
              <button className="text-blue-600 hover:underline">Edit</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-500">Change Password</p>
                <button className="text-blue-600 hover:underline">Edit</button>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500">Allow private notes</p>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500">Manage blocked users</p>
                <button className="text-blue-600 hover:underline">MANAGE BLOCKED USERS</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SettingPage;
