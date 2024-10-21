import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function AnalyticPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex  md:flex-row bg-gradient-to-r from-white to-slate-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        {/* Header */}
        <header className="flex justify-between items-center ">
          {/* Hamburger Menu (Visible on Mobile) */}
          <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <FaBars />
          </button>

          {/* Page Title */}
          {/* <div>
            <h1 className="text-xl sm:text-2xl text-black font-bold">Analytics Dashboard</h1>
          </div> */}
        </header>

        {/* Main Analytics Content */}
        <MainContent />
      </div>
    </div>
  );
}

export default AnalyticPage;
