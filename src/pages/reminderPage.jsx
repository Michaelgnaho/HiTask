import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaBars} from "react-icons/fa";
import remind1 from "../assets/remind1.png"



function ReminderPage() {
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
      <main className="flex-1 p-4 md:p-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <header className="flex justify-between items-center mb-8">
          {/* Hamburger Menu (Visible on Mobile) */}
          <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
          <FaBars/>
          </button>

          {/* Greeting */}
          <div>
            <h1 className="text-xl sm:text-2xl text-black font-bold">Hello John</h1>
            <p className="text-sm sm:text-base text-black">View and manage projects</p>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          {/* User Info */}
          <div className="hidden sm:flex items-center space-x-4">
            <i className="fas fa-bell text-gray-400"></i>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              <div>
                <p className="text-black">John Thompson</p>
                <p className="text-black text-sm">Developer</p>
              </div>
              <i className="fas fa-chevron-down ml-2 text-gray-400"></i>
            </div>
          </div>
        </header>

        {/* Activity Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
          <div className="p-8">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold">Activity</h1>
                        <div className="flex space-x-2 border rounded-full p-1 bg-white shadow">
                            <button className="px-4 py-1 rounded-full bg-white text-gray-700">Week</button>
                            <button className="px-4 py-1 rounded-full bg-gray-200 text-gray-500">Month</button>
                        </div>
                    </div>
                    <div className="flex items-end space-x-4">
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-400 w-12 h-32 rounded-t-lg"></div>
                            <span className="mt-2 text-sm text-gray-600">3:00PM</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-600 w-12 h-24 rounded-t-lg"></div>
                            <span className="mt-2 text-sm text-gray-600">3:30PM</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-red-500 w-12 h-40 rounded-t-lg"></div>
                            <span className="mt-2 text-sm text-gray-600">5:00AM</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-200 w-12 h-8 rounded-t-lg flex items-center justify-center text-xs text-gray-500">Day off</div>
                            <span className="mt-2 text-sm text-gray-600">7:00AM</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-800 w-12 h-12 rounded-t-lg"></div>
                            <span className="mt-2 text-sm text-gray-600">1:00PM</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-800 w-12 h-24 rounded-t-lg"></div>
                            <span className="mt-2 text-sm text-gray-600">3:00PM</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-800 w-12 h-20 rounded-t-lg"></div>
                            <span className="mt-2 text-sm text-gray-600">4:30PM</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-200 w-12 h-8 rounded-t-lg flex items-center justify-center text-xs text-gray-500">Day off</div>
                            <span className="mt-2 text-sm text-gray-600">6:00PM</span>
                        </div>
                    </div>
                </div>
          </div>

          {/* Reminders Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-black">Reminders</h3>
              <button className="text-blue-600">Manage</button>
            </div>
            <div className="space-y-4">
              {["9:40AM", "11:40AM", "12:40PM", "4:40PM"].map((time, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div>
                    <p className="text-xl font-bold text-black">{time}</p>
                    <p className="text-black">Task description</p>
                  </div>
                  <span className="text-red-600">High</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Schedule Section */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold text-black mb-4">My schedule</h3>
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-4">
            {["Mon", "Tue", "Wed", "Thu"].map((day, idx) => (
              <div key={idx} className="col-span-1">
                <p className="text-black">{day}</p>
                <div className="space-y-2">
                  <button className="w-full py-2 bg-gray-200 rounded">Task 1</button>
                  <button className="w-full py-2 bg-gray-200 rounded">Task 2</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ReminderPage;
