import Sidebar from "../components/Sidebar"; // Import Sidebar component
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import {getDoc , doc } from "firebase/firestore"
import Header from "../components/Header";

function TeamPage() {
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

  },[]) // State to manage sidebar visibility

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-white to-slate-100 min-h-screen">
      {/* Sidebar component with toggle functionality */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />



      <main className="flex-1 p-6 md:p-8 bg-slate-50">
      <Header toggleSidebar={toggleSidebar} userCredential={userCredential} />
        {/* Search bar and user controls */}
        {/*  */}

        {/* Welcome message */}
        

        {/* Main content: Team members, tasks needing review, and completed tasks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Team Members section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-black">Team Members</h2>
            <div className="space-y-4">
              {[
                "Faraday John",
                "Enitan Akin",
                "Catherine Eredi",
                "Mechi Avelli",
                "Salmah Akinwale",
                "Humble Smith",
              ].map((name, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-slate-50 rounded shadow"
                >
                  <img
                    src="https://placehold.co/40x40"
                    alt="User avatar"
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="text-gray-700">{name}</div>
                    <div className="text-gray-500 text-sm">Online - 08:20:11</div>
                  </div>
                  <i className="fas fa-ellipsis-v ml-auto text-gray-500"></i>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks that need review */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-black">Need Review</h2>
            <div className="space-y-4">
              {[
                "Support/IT",
                "Product Development",
                "Website Development",
                "Content/Marketing",
              ].map((task, index) => (
                <div key={index} className="p-4 bg-white rounded shadow">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-black">{task}</div>
                    <i className="fas fa-ellipsis-v text-black"></i>
                  </div>
                  <div className="text-black text-sm mb-2">
                    Troubleshoot technical issues, provide solutions
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <i className="fas fa-comments mr-2"></i> 8
                    <i className="fas fa-paperclip ml-4 mr-2"></i> 10
                  </div>
                </div>
              ))}
              <button className="w-full bg-blue-600 text-white py-2 rounded">
                + Add New Task
              </button>
            </div>
          </div>

          {/* Completed tasks */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-black">Done</h2>
            <div className="space-y-4">
              {["Sales", "Operations", "Graphic Design", "Technical Support"].map(
                (task, index) => (
                  <div key={index} className="p-4 bg-white rounded shadow">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-gray-700">{task}</div>
                      <i className="fas fa-ellipsis-v text-gray-500"></i>
                    </div>
                    <div className="text-gray-500 text-sm mb-2">
                      Develop and implement sales tactics
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <i className="fas fa-comments mr-2"></i> 8
                      <i className="fas fa-paperclip ml-4 mr-2"></i> 10
                    </div>
                  </div>
                )
              )}
              <button className="w-full bg-blue-600 text-white py-2 rounded">
                + Add New Task
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TeamPage;
