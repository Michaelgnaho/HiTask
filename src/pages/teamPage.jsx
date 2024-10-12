import Sidebar from "../components/Sidebar";
import { useState } from "react";

function TeamPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
	<div  className="flex flex-col md:flex-row bg-gradient-to-r from-white to-slate-100 min-h-screen">
  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  <main className="flex-1 p-6 bg-slate-50">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
        <div className="flex items-center w-full md:w-auto">
            <input type="text" placeholder="Search" className="border rounded-full py-2 px-4 w-full md:w-64"/>
            <i className="fas fa-search ml-2 text-white-500"></i>
        </div>
        <div className="flex items-center space-x-4">
            <i className="fas fa-bell text-gray-500"></i>
            <i className="fas fa-cog text-gray-500"></i>
            <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full"/>
        </div>
    </div>
    <div className="mb-6">
        <h1 className="text-2xl text-black font-semibold">Hello Thompson</h1>
        <p className="text-gray-600  text-black">Update your work to ensure everyone stays aligned and productive, making teamwork more efficient and streamlined</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
            <h2 className="text-lg  font-semibold mb-4  text-black">Team Members</h2>
            <div className="space-y-4">
                {['Faraday John', 'Enitan Akin', 'Catherine Eredi', 'Mechi Avelli', 'Salmah Akinwale', 'Humble Smith'].map((name, index) => (
                    <div key={index} className="flex items-center p-4 bg-slate rounded shadow">
                        <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full mr-3"/>
                        <div>
                            <div className="text-gray-700">{name}</div>
                            <div className="text-gray-500 text-sm">Online - 08:20:11</div>
                        </div>
                        <i className="fas fa-ellipsis-v ml-auto text-gray-500"></i>
                    </div>
                ))}
            </div>
        </div>
        <div>
            <h2 className="text-lg  text-black  font-semibold mb-4">Need Review</h2>
            <div className="space-y-4">
                {['Support/IT', 'Product Development', 'Website Development', 'Content/Marketing'].map((task, index) => (
                    <div key={index} className="p-4 bg-white rounded shadow">
                        <div className="flex justify-between items-center mb-2">
                            <div className=" text-black">{task}</div>
                            <i className="fas fa-ellipsis-v  text-black"></i>
                        </div>
                        <div className=" text-black text-sm mb-2">Troubleshoot technical issues, provide solutions</div>
                        <div className="flex items-center text-gray-500 text-sm">
                            <i className="fas fa-comments mr-2"></i> 8
                            <i className="fas fa-paperclip ml-4 mr-2"></i> 10
                        </div>
                    </div>
                ))}
                <button className="w-full bg-blue-600  text-black py-2 rounded">+ Add New Task</button>
            </div>
        </div>
        <div>
            <h2 className="text-lg  text-black font-semibold mb-4">Done</h2>
            <div className="space-y-4">
                {['Sales', 'Operations', 'Graphic Design', 'Technical Support'].map((task, index) => (
                    <div key={index} className="p-4 bg-white rounded shadow">
                        <div className="flex justify-between items-center mb-2">
                            <div className="text-gray-700">{task}</div>
                            <i className="fas fa-ellipsis-v text-gray-500"></i>
                        </div>
                        <div className="text-gray-500 text-sm mb-2">Develop and implement sales tactics</div>
                        <div className="flex items-center text-gray-500 text-sm">
                            <i className="fas fa-comments mr-2"></i> 8
                            <i className="fas fa-paperclip ml-4 mr-2"></i> 10
                        </div>
                    </div>
                ))}
                <button className="w-full bg-blue-600 text-white py-2 rounded">+ Add New Task</button>
            </div>
        </div>
    </div>
</main>

  </div>
  )
}


export default TeamPage;