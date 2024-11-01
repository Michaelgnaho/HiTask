import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import {getDoc , doc } from "firebase/firestore"
import Header from "../components/Header";
import {FaUser } from "react-icons/fa";

function SettingPage() {
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
      <main className="flex-1 p-4 md:p-8">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} userCredential={userCredential} />

        <header className="flex justify-between items-center mb-8">

        </header>

        <h1 className="text-2xl font-semibold mb-4">{userCredential ? ` ${userCredential.fname}` : "Loading..."}
</h1>
        <p className="text-gray-600 mb-8">Customize your accounts settings to tailor your task management experience.</p>

        <div className="space-y-8">
          {/* Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
              {userCredential ? <img src={userCredential.photo} alt="User profile" className="rounded-full mr-4" /> : (<FaUser className="rounded-full mr-4"/>)}       
                <div>
                  <h2 className="text-lg font-semibold"> {userCredential ? ` ${userCredential.fname}` : "Loading..."}
</h2>
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
                <p className="text-gray-500">Full Name</p>
                <p className="font-semibold">{userCredential ?`${userCredential.fname}` : "Loading..."}
</p>
              </div>
              
              <div>
                <p className="text-gray-500">Email address</p>
                <p className="font-semibold">{userCredential ?` ${userCredential.email}` : "Loading..."}
</p>
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
