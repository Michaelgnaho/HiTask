import Header from "./Header";
import ProjectOverview from "./ProjectOverview";
import RecentMessages from "./RecentMessages";
import StatsCard from "./StatsCard";
import { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import {getDoc , doc } from "firebase/firestore"
import Sidebar from "./Sidebar";


function MainContent() {
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
		<div className="flex-1  w-full  sm:p-2  sm:flex sm:w-full pl-0"> {/* Reduced padding on mobile */}
		      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

			<div className="flex-col">
		     <Header toggleSidebar={toggleSidebar} userCredential={userCredential} />

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"> {/* Responsive grid */}
				<StatsCard number="110" label="Total Projects" />
				<StatsCard number="60" label="On Going Projects" />
				<StatsCard number="25" label="Completed Projects" />
				<StatsCard number="18" label="Upcoming Projects" />
			</div>
			<div className="grid grid-cols-1 sm:flex mt-8 gap-2"> {/* Responsive grid */}
				<ProjectOverview />
				<RecentMessages />
			</div>
			</div>
		</div>
	);
}

export default MainContent;
