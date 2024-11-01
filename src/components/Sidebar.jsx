import highTaskLogo from "../assets/hitask_logo.png";
import { FaTimes, FaHome, FaInbox, FaTasks, FaUsers, FaStickyNote, FaProjectDiagram, FaBell, FaChartLine, FaPlug, FaCog, FaUser   } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import {getDoc , doc } from "firebase/firestore"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Sidebar({ isOpen, toggleSidebar }) {
  const [userCredential, setUserCredential] = useState(null);
  const navigate = useNavigate();

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

  },[]);

  async function HandleLogOut (){
    try {
      await auth.signOut();
      setUserCredential(null);
      toast.success("Logged Out sucessfully")
      navigate("/login")
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }


  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-[700px] w-60 bg-white border-r-2 shadow-md p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:static md:translate-x-0`}
      >
        {/* Close Button (Visible on Mobile) */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <img src={highTaskLogo} alt="HITask Logo" className="mr-2" width="40" height="40" />

          <button
            className="text-2xl text-gray-700 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Logo (Visible on Desktop) */}
        <div className="hidden md:flex items-center mb-8">
          <img src={highTaskLogo} alt="HITask Logo" className="mr-2" width="40" height="40" />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul>
            <li className="mb-6">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-800`
                }
              >
                <FaHome className="mr-2" /> Home
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink
                to="/inbox"
                className={({ isActive }) =>
                  `flex items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-800`
                }
              >
                <FaInbox className="mr-2" /> Inbox
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink
                to="/task"
                className={({ isActive }) =>
                  `flex items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-800`
                }
              >
                <FaTasks className="mr-2" /> Task
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  `flex items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-800`
                }
              >
                <FaUsers className="mr-2" /> Team
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink
                to="/note"
                className={({ isActive }) =>
                  `flex items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-800`
                }
              >
                <FaStickyNote className="mr-2" /> Note
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `flex items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-800`
                }
              >
                <FaProjectDiagram className="mr-2" /> Project
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink
                to="/reminder"
                className={({ isActive }) =>
                  `flex items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-800`
                }
              >
                <FaBell className="mr-2" /> Reminders
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink
                to="/analytics"
                className={({ isActive }) =>
                  `flex items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-800`
                }
              >
                <FaChartLine className="mr-2" /> Analytics
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink
                to="/integration"
                className={({ isActive }) =>
                  `flex items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-800`
                }
              >
                <FaPlug className="mr-2" /> Integrations
              </NavLink>
            </li>
            <li className="mb-10">
              <NavLink
                to="/setting"
                className={({ isActive }) =>
                  `flex items-center ${isActive ? "text-blue-600" : "text-gray-600"} hover:text-blue-800`
                }
              >
                <FaCog className="mr-2" /> Settings
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center mb-10">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex flex-col items-center justify-center m-2">
          {userCredential && userCredential.photo ? (<img src={userCredential.photo} alt="profile" className="rounded-full m-2" />) :  (<FaUser  className="text-gray-500 m-2" size={40} />)} 
          </div>
          <div>
            <div className="text-gray-800 text-[0.7rem]"> {userCredential ?  ` ${userCredential.fname }` : (<span>Loading...</span> ) }
            </div>
            <div onClick={HandleLogOut} className="text-gray-600 text-sm">
              Logout
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
