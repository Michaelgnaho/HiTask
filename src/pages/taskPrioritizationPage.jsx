import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import {getDoc , doc } from "firebase/firestore"
import { FaBars} from "react-icons/fa";
import Header from "../components/Header";

function TaskPrioritizationPage() {
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
    <div className="flex flex-col md:flex-row bg-white min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 bg-gradient-to-r from-gray-100 to-gray-200">
        {/* Header */}
        <header className="flex flex-col  mb-8">
        <Header toggleSidebar={toggleSidebar} userCredential={userCredential} />


          {/* Search and Filters (Visible on larger screens) */}
          <div className="hidden sm:flex items-center space-x-4">
            <button className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 text-black">
              <i className="fas fa-search mr-2"></i> Search
            </button>
            <button className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 text-black">
              <i className="fas fa-filter mr-2"></i> Filter
            </button>
            <button className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 text-black">
              <i className="fas fa-sort mr-2"></i> Sort
            </button>
            <button className="bg-blue-600 text-white rounded-full px-4 py-2">+ Create Task</button>
          </div>
        </header>

        {/* Task Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* TO DO Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-black">TO DO</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <h3 className="font-semibold text-black">Fix critical bug</h3>
              <p className="text-sm text-black">In design system</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-black text-sm">
                  <i className="fas fa-tag mr-2"></i> Personal
                </div>
                <div className="flex items-center text-black text-sm">
                  <i className="fas fa-comments mr-2"></i> 8
                  <i className="fas fa-paperclip ml-4 mr-2"></i> 10
                </div>
              </div>
              <div className="text-right text-sm text-black mt-2">2 days left</div>
            </div>

            {/* Additional Tasks in TO DO */}
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <h3 className="font-semibold text-black">Design landing page</h3>
              <p className="text-black text-sm">For client XYZ</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-black text-sm">
                  <i className="fas fa-tag mr-2"></i> Work
                </div>
                <div className="flex items-center text-black text-sm">
                  <i className="fas fa-comments mr-2"></i> 4
                  <i className="fas fa-paperclip ml-4 mr-2"></i> 5
                </div>
              </div>
              <div className="text-right text-sm text-black mt-2">3 days left</div>
            </div>
          </div>

          {/* IN PROGRESS Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-black">IN PROGRESS</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <h3 className="font-semibold text-black">Develop API endpoint</h3>
              <p className="text-sm text-black">For mobile app</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-black text-sm">
                  <i className="fas fa-tag mr-2"></i> Work
                </div>
                <div className="flex items-center text-black text-sm">
                  <i className="fas fa-comments mr-2"></i> 2
                  <i className="fas fa-paperclip ml-4 mr-2"></i> 1
                </div>
              </div>
              <div className="text-right text-sm text-black mt-2">5 days left</div>
            </div>
          </div>

          {/* DONE Column */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-black">DONE</h2>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <h3 className="font-semibold text-black">Test user authentication</h3>
              <p className="text-sm text-black">With OAuth2 integration</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-black text-sm">
                  <i className="fas fa-tag mr-2"></i> Work
                </div>
                <div className="flex items-center text-black text-sm">
                  <i className="fas fa-comments mr-2"></i> 3
                  <i className="fas fa-paperclip ml-4 mr-2"></i> 6
                </div>
              </div>
              <div className="text-right text-sm text-black mt-2">Completed 1 day ago</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TaskPrioritizationPage;
