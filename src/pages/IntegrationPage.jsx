import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import {getDoc , doc } from "firebase/firestore"
import Header from "../components/Header";
import Group1  from "../assets/Group1.png"
import Group2 from "../assets/Group2.png"
import Group3 from "../assets/Group3.png"
import Group4 from "../assets/Group4.png"
import Group5 from "../assets/Group5.png"
import Group6 from "../assets/Group6.png"
import Group7 from "../assets/Group7.png"
import Group8 from "../assets/Group8.png"
import Group9 from "../assets/Group9.png"
import Group10 from "../assets/Group10.png"
import Group11 from "../assets/Group11.png"
import Group12 from "../assets/Group12.png"


function IntegrationPage() {
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
    <div className="flex w-full  text-black md:flex-row bg-gradient-to-r from-white to-slate-100  min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main className="flex-1 flex-col p-2 md:p-8 w-full" >
       <Header toggleSidebar={toggleSidebar} userCredential={userCredential} />

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          {/* Title and Search */}
          <div className="flex flex-col mt-4 px-2 ">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4">Connect your favourite tools</h1>
          </div>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for tools"
              className="hidden sm:block px-4 py-2 border rounded-md mr-4"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">+ Create Integration</button>
          </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex mb-8 overflow-x-auto">
          <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600">All Integrations</button>
          <button className="px-4 py-2 border-b-2 border-transparent text-gray-600 ml-4">Active Integrations</button>
          <button className="px-4 py-2 border-b-2 border-transparent text-gray-600 ml-4">Most Used</button>
          <button className="px-4 py-2 border-b-2 border-transparent text-gray-600 ml-4">Inactive Integrations</button>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <img src={Group1} alt="logo" className=" mx-2"/>
        <img src={Group2} alt="logo" className=" mx-2"/>
        <img src={Group3} alt="logo" className=" mx-2"/>
        <img src={Group4} alt="logo" className=" mx-2"/>
        <img src={Group5} alt="logo" className=" mx-2"/>
        <img src={Group6} alt="logo" className=" mx-2"/>
        <img src={Group7} alt="logo" className=" mx-2"/>
        <img src={Group8} alt="logo" className=" mx-2"/>
        <img src={Group9} alt="logo" className=" mx-2"/>
        <img src={Group10} alt="logo" className=" mx-2"/>
        <img src={Group11} alt="logo" className=" mx-2"/>
        <img src={Group12} alt="logo" className=" mx-2"/>
       


        


        
        
        
        
          {/* {[
            { name: 'Framer', description: 'Send and receive notifications from channels.', img: 'https://placehold.co/50x50', alt: 'Framer logo' },
            { name: 'Slack', description: 'Send and receive notifications from channels.', img: 'https://placehold.co/50x50', alt: 'Slack logo' },
            { name: 'Microsoft Teams', description: 'Send and receive notifications from channels.', img: 'https://placehold.co/50x50', alt: 'Microsoft Teams logo' },
            { name: 'Gmail', description: 'Send automated emails from your gmail account.', img: 'https://placehold.co/50x50', alt: 'Gmail logo' },
            { name: 'Paypal', description: 'Collect payment using your paypal account.', img: 'https://placehold.co/50x50', alt: 'Paypal logo' },
            { name: 'Wordpress', description: 'Send and receive notifications from channels.', img: 'https://placehold.co/50x50', alt: 'Wordpress logo' },
            { name: 'LinkedIn', description: 'Send and receive notifications from channels.', img: 'https://placehold.co/50x50', alt: 'LinkedIn logo' },
            { name: 'Azure', description: 'Send and receive notifications from channels.', img: 'https://placehold.co/50x50', alt: 'Azure logo' },
            { name: 'Behance', description: 'Send and receive notifications from channels.', img: 'https://placehold.co/50x50', alt: 'Behance logo' },
            { name: 'Miro', description: 'Send and receive notifications from channels.', img: 'https://placehold.co/50x50', alt: 'Miro logo' },
            { name: 'Dropbox', description: 'Send and receive notifications from channels.', img: 'https://placehold.co/50x50', alt: 'Dropbox logo' },
            { name: 'Zoom', description: 'Send and receive notifications from channels.', img: 'https://placehold.co/50x50', alt: 'Zoom logo' },
          ].map((tool, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
              <div className="flex items-center">
                <img src={tool.img} alt={tool.alt} className="w-10 h-10 mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{tool.name}</h2>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              </div>
              <div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          ))} */}
        </div>
      </main>
    </div>
  );
}

export default IntegrationPage;
