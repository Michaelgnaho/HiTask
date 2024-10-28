import highTaskLogo from "../assets/hitask_logo.png";
import { FaTimes, FaHome, FaInbox, FaTasks, FaUsers, FaStickyNote, FaProjectDiagram, FaBell, FaChartLine, FaPlug, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
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
          <img src="https://placehold.co/40x40" alt="User profile" className="rounded-full mr-2 " />
          <div>
            <div className="text-gray-800">John Thompson</div>
            <NavLink to="/" className="text-gray-600 text-sm">
              Logout
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
