import Sidebar from "../components/Sidebar";
import { useState } from "react";
function InboxPage() {
 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

  return (
<div className="flex  bg-gradient-to-r from-white to-slate-100">
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    <div className="p-4 flex flex-col w-full">
                    <div className="flex  flex-col justify-between items-center mb-4">
                    <div className="flex items-center space-x-4 ml-auto">
                            <div className="relative">
                                <input type="text" placeholder="Search" className="border rounded-full py-1 px-4" />
                                <i className="fas fa-search absolute right-3 top-2 text-white-500 "></i>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                                <i className="fas fa-user bg-transparent"></i>
                            </div>
                        </div>
                        <div className="flex space-x-4 mr-auto">
                            <button className="text-black font-semibold bg-transparent">Activity</button>
                            <button className="text-black font-semibold bg-transparent">Archive</button>
                            <button className="text-black font-semibold bg-transparent">Messages I've Sent</button>
                        </div>
                        
                    </div>
                    <div className="border rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-image text-2xl"></i>
                        </div>
                    </div>
                    {/* <div className="flex justify-center items-center mt-20">
                        <i className="fas fa-spinner fa-spin text-2xl"></i>
                    </div> */}
                </div>
                </div>
  )
}

export default InboxPage