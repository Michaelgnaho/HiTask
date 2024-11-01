import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import {getDoc , doc } from "firebase/firestore"
function InboxPage() {
 
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
<div className="flex  bg-gradient-to-r from-white to-slate-100">
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    <div className="p-4 flex flex-col w-full">
    <Header toggleSidebar={toggleSidebar} userCredential={userCredential} />

  
                    <div className="flex  flex-col justify-between items-center mb-4">
                    <div className="flex items-center space-x-4 ml-auto">
                    <button
            className="md:hidden text-2xl text-slate-700 bg-white size-12 text-center items-center focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            &#9776;
          </button>
                          
                            
                 
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