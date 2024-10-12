import Sidebar from "../components/Sidebar";
import { useState } from "react";

function NotePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
	<div className="flex bg-slate-50">
  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 bg-gray-50">
                        <div className="flex items-center justify-between mb-6">
                            <div className="relative w-1/2">
                                <input type="text" placeholder="Search" className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"/>
                                <i className="fas fa-search absolute top-3 right-4 text-gray-400"></i>
                            </div>
                            <div className="flex items-center">
                                <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">+ Add Note</button>
                                <img src="https://placehold.co/40x40" alt="User profile picture" className="w-10 h-10 rounded-full ml-4"/>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold mb-2">Hello Thompson</h1>
                            <p className="text-gray-600 mb-6">Keep track of important details, ideas here. Organize your thoughts and ensure nothing slips through the cracks.</p>
                            <div className="flex items-center mb-4">
                                <button className="px-4 py-2 text-white bg-blue-600 rounded-full mr-2">ALL</button>
                                <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-full mr-2">PERSONAL</button>
                                <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-full">TEAM</button>
                                <div className="flex items-center ml-auto">
                                    <input type="checkbox" className="mr-2"/>
                                    <span className="text-gray-600">Show only completed notes</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="p-4 bg-white border rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Home</span>
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-gray-400 mr-2"></i>
                                            <i className="fas fa-edit text-gray-400 mr-2"></i>
                                            <i className="fas fa-trash text-gray-400"></i>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Change Filters</h2>
                                    <p className="text-gray-600 mb-2">Change air filters in the HVAC system</p>
                                    <p className="text-gray-400">18.9.2024</p>
                                </div>
                                <div className="p-4 bg-white border rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-2 py-1 text-xs text-white bg-gray-600 rounded">Personal</span>
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-gray-400 mr-2"></i>
                                            <i className="fas fa-edit text-gray-400 mr-2"></i>
                                            <i className="fas fa-trash text-gray-400"></i>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Gym Session</h2>
                                    <p className="text-gray-600 mb-2">Gym session scheduled at 10am</p>
                                    <p className="text-gray-400">4.9.2024</p>
                                </div>
                                <div className="p-4 bg-white border rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-2 py-1 text-xs text-white bg-green-600 rounded">Team</span>
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-gray-400 mr-2"></i>
                                            <i className="fas fa-edit text-gray-400 mr-2"></i>
                                            <i className="fas fa-trash text-gray-400"></i>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Team meeting</h2>
                                    <p className="text-gray-600 mb-2">Team meeting by 4pm</p>
                                    <p className="text-gray-400">24.9.2024</p>
                                </div>
                                <div className="p-4 bg-white border rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Home</span>
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-gray-400 mr-2"></i>
                                            <i className="fas fa-edit text-gray-400 mr-2"></i>
                                            <i className="fas fa-trash text-gray-400"></i>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Home Security</h2>
                                    <p className="text-gray-600 mb-2">Check if all alarms are functioning.</p>
                                    <p className="text-gray-400">14.9.2024</p>
                                </div>
                                <div className="p-4 bg-white border rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-2 py-1 text-xs text-white bg-gray-600 rounded">Personal</span>
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-gray-400 mr-2"></i>
                                            <i className="fas fa-edit text-gray-400 mr-2"></i>
                                            <i className="fas fa-trash text-gray-400"></i>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Laundry</h2>
                                    <p className="text-gray-600 mb-2">Do laundry on Thursday evening</p>
                                    <p className="text-gray-400">13.9.2024</p>
                                </div>
                                <div className="p-4 bg-white border rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-2 py-1 text-xs text-white bg-green-600 rounded">Team</span>
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-gray-400 mr-2"></i>
                                            <i className="fas fa-edit text-gray-400 mr-2"></i>
                                            <i className="fas fa-trash text-gray-400"></i>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Project Deadline</h2>
                                    <p className="text-gray-600 mb-2">Final deadline for the project by 6pm</p>
                                    <p className="text-gray-400">14.10.2024</p>
                                </div>
                                <div className="p-4 bg-white border rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded">Home</span>
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-gray-400 mr-2"></i>
                                            <i className="fas fa-edit text-gray-400 mr-2"></i>
                                            <i className="fas fa-trash text-gray-400"></i>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Household Budget</h2>
                                    <p className="text-gray-600 mb-2">Review and update the budget</p>
                                    <p className="text-gray-400">1.11.2024</p>
                                </div>
                                <div className="p-4 bg-white border rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-2 py-1 text-xs text-white bg-gray-600 rounded">Personal</span>
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-gray-400 mr-2"></i>
                                            <i className="fas fa-edit text-gray-400 mr-2"></i>
                                            <i className="fas fa-trash text-gray-400"></i>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Grocery Shopping</h2>
                                    <p className="text-gray-600 mb-2">Buy groceries after work on Friday</p>
                                    <p className="text-gray-400">17.10.2024</p>
                                </div>
                                <div className="p-4 bg-white border rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="px-2 py-1 text-xs text-white bg-green-600 rounded">Team</span>
                                        <div className="flex items-center">
                                            <i className="fas fa-check text-gray-400 mr-2"></i>
                                            <i className="fas fa-edit text-gray-400 mr-2"></i>
                                            <i className="fas fa-trash text-gray-400"></i>
                                        </div>
                                    </div>
                                    <h2 className="text-lg font-semibold mb-2">Task Assignment</h2>
                                    <p className="text-gray-600 mb-2">Sarah will work on the budget analysis</p>
                                    <p className="text-gray-400">24.10.2024</p>
                                </div>
                            </div>
                        </div>
                    </main>
  
  
  </div>
  )
}


export default NotePage;