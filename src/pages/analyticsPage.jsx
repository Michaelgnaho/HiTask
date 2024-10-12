import Sidebar from "../components/Sidebar";
import { useState } from "react";

function AnalyticPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
	<div  className="flex flex-col md:flex-row bg-gradient-to-r from-white to-slate-100 min-h-screen">
  <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  
  </div>
  )


}
export default AnalyticPage;