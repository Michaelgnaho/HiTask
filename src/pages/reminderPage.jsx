import Sidebar from "../components/Sidebar";
import { useState } from "react";

function ReminderPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
	<div  className="flex flex-col md:flex-row bg-gradient-to-r from-white to-slate-100 min-h-screen">
  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  <main className="flex-1 p-8 bg-gradient-to-r from-purple-50 to-blue-50">
    <header className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-black">Hello John</h2>
            <p className="text-black">View and manage projects</p>
        </div>
        <div className="flex items-center space-x-4">
            <div className="relative">
                <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
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
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-black">Activity</h3>
                <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-gray-200 rounded-full">Week</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-full">Month</button>
                </div>
            </div>
            <div className="flex space-x-4">
                <div className="w-1/6 bg-blue-600 h-24 rounded"></div>
                <div className="w-1/6 bg-pink-600 h-32 rounded"></div>
                <div className="w-1/6 bg-blue-600 h-16 rounded"></div>
                <div className="w-1/6 bg-blue-600 h-20 rounded"></div>
                <div className="w-1/6 bg-blue-600 h-12 rounded"></div>
                <div className="w-1/6 bg-blue-600 h-16 rounded"></div>
            </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-black">Reminders</h3>
                <button className="text-blue-600">Manage</button>
            </div>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xl font-bold text-black">9:40AM</p>
                        <p className="text-black">Review daily goals</p>
                    </div>
                    <span className="text-red-600">High</span>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xl font-bold text-black">11:40AM</p>
                        <p className="text-black">Prepare meeting agendas</p>
                    </div>
                    <span className="text-red-600">High</span>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xl font-bold text-black">12:40PM</p>
                        <p className="text-black">Review clients feedback</p>
                    </div>
                    <span className="text-red-600">High</span>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xl font-bold text-black">4:40PM</p>
                        <p className="text-black">Monitor deadlines</p>
                    </div>
                    <span className="text-red-600 ">High</span>
                </div>
            </div>
        </div>
    </section>
    <section className="mt-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-bold text-black mb-4">My schedule</h3>
        <div className="grid grid-cols-7 gap-4">
            <div className="col-span-1">
                <p className="text-black">Mon</p>
                <div className="space-y-2">
                    <button className="w-full py-2 bg-gray-200 rounded">Clear critical bug</button>
                    <button className="w-full py-2 bg-gray-200 rounded">Dinner</button>
                </div>
            </div>
            <div className="col-span-1">
                <p className="text-black">Tue</p>
                <div className="space-y-2">
                    <button className="w-full py-2 bg-gray-200 rounded">Meet with team members</button>
                    <button className="w-full py-2 bg-gray-200 rounded">Meet new clients</button>
                </div>
            </div>
            <div className="col-span-1">
                <p className="text-black">Wed</p>
                <div className="space-y-2">
                    <button className="w-full py-2 bg-gray-200 rounded">Develop new project plans</button>
                </div>
            </div>
            <div className="col-span-1">
                <p className="text-black">Thu</p>
                <div className="space-y-2">
                    <button className="w-full py-2 bg-gray-200 rounded">Explore new UI design</button>
                </div>
            </div>
            <div className="col-span-3"></div>
        </div>
    </section>
</main>
  
  </div>
  )
}


export default ReminderPage;