import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import {getDoc , doc } from "firebase/firestore"
import { FaBars } from "react-icons/fa";
import Header from "../components/Header";


function ProjectPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userCredential, setUserCredential] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) =>{
      console.log(user);
      const docRef = doc(db,"users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserCredential(docSnap.data());
        console.log(docSnap.data());
        console.log(userCredential)
      } else {
        setUserCredential("No data available");
        console.log(userCredential)
      }


    }

    )
    
  }

  useEffect(()=>{
    fetchUserData()

  },[])

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col text-black md:flex-row bg-gradient-to-r from-white to-slate-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        {/* Header */}
        <header className="flex flex-col mb-8">
          {/* Hamburger Menu (Visible on Mobile) */}
          <Header toggleSidebar={toggleSidebar} userCredential={userCredential} />

          <div>
            <h1 className="text-xl sm:text-2xl text-black font-bold">Project Overview</h1>
            <p className="text-sm sm:text-base text-gray-600">Manage your projects efficiently</p>
          </div>

          {/* Search Bar */}
          
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
