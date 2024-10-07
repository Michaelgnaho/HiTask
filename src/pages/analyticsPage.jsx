import PropTypes from 'prop-types';

function NavItem({ icon, label, active }) {
	return (
	  <div className={`flex items-center space-x-4 p-2 rounded-lg ${active ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
		<i className={`${icon} text-lg`}></i>
		<span>{label}</span>
	  </div>
	);
  }
  NavItem.propTypes = {
	icon: PropTypes.string.isRequired,   // icon should be a string
	label: PropTypes.string.isRequired,  // label should be a string
	active: PropTypes.bool.isRequired,   // active should be a boolean
  };
  
  function MainContent() {
	return (
	  <div className="flex-1 p-8">
		<Header />
		<Stats />
		<div className="flex mt-8 space-x-8">
		  <ProjectOverview />
		  <RecentMessages />
		</div>
	  </div>
	);
  }
  
  function Header() {
	return (
	  <div className="flex justify-between items-center mb-8">
		<div>
		  <h1 className="text-2xl font-semibold">Hello Thompson</h1>
		  <p className="text-gray-500">View and manage all project tasks and milestones from one convenient location.</p>
		</div>
		<div className="flex items-center space-x-4">
		  <div className="relative">
			<input type="text" placeholder="Search" className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
			<i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
		  </div>
		  <i className="fas fa-bell text-gray-500"></i>
		  <i className="fas fa-cog text-gray-500"></i>
		  <div className="flex items-center space-x-2">
			<img src="https://placehold.co/40x40" alt="User  profile" className="rounded-full" />
			<div>
			  <div className="font-semibold">John Thompson</div>
			  <div className="text-sm text-gray-500">Software Developer</div>
			</div>
		  </div>
		</div>
	  </div>
	);
  }
  
  function Stats() {
	return (
	  <div className="grid grid-cols-4 gap-4">
		<StatCard number="110" label="Total Projects" />
		<StatCard number="60" label="On Going Projects" />
		<StatCard number="25" label="Completed Projects" />
		<StatCard number="18" label="Upcoming Projects" />
	  </div>
	);
  }
  
  function StatCard({ number , label}) {
	return (
	  <div className="bg-white p-4 rounded-lg shadow">
		<div className="text-2xl font-semibold">{number}</div>
		<div className="text-gray-500">{label}</div>
	  </div>
	);
  }

  StatCard.propTypes = {
	number: PropTypes.number.isRequired,
	label: PropTypes.string.isRequired,
  };
  
  function ProjectOverview() {
	return (
	  <div className="w-2/3 bg-white p-6 rounded-lg shadow">
		<h2 className="text-xl font-semibold mb-4">Project Overview</h2>
		<div className="flex">
		  <ul className="space-y-2 w-1/2">
			<li>Deploy major software update</li>
			<li>Fix critical bug</li>
			<li>Explore new UI design pattern</li>
			<li>Address major software issue</li>
			<li>Meet new clients</li>
			<li>Develop new project plan</li>
			<li>Mobile App Developer</li>
		  </ul>
		  <div className="w-1/2 flex justify-center items-center">
			<img src="https://placehold.co/200x200" alt="Pie chart showing project distribution" />
		  </div>
		</div>
	  </div>
	);
  }
  
  function RecentMessages() {
	return (
	  <div className="w-1/3 bg-white p-6 rounded-lg shadow">
		<div className="flex justify-between items-center mb-4">
		  <h2 className="text-xl font-semibold">Recent Messages</h2>
		  <a href="#" className="text-blue-600">See All</a>
		</div>
		<ul className="space-y-4">
		  <MessageItem name="Faraday John" message="Stray update" />
		  <MessageItem name="Erit an Akin" message="Hello,Thompson.How are you doing" />
		  <MessageItem name="Catherine Ezeodi" message="Hello,please check your mail" />
		  <MessageItem name="Machi Avelli" message="Hello, any update on the design" />
		  <MessageItem name="Salmah Akin" message="Good day. Please when can I call you" />
		  <MessageItem name="Humble Smith" message="Please check your mail" />
		</ul>
	  </div>
	);
  }
  
  function MessageItem({ name, message }) {
	return (
	  <li className="flex items-center space-x-4">
		<img src="https://placehold.co/40x40" alt={`${name}'s profile picture`} className="rounded-full" />
		<div>
		  <div className="font-semibold">{name}</div>
		  <div className="text-gray-500">{message}</div>
		</div>
		<i className="fas fa-check text-green-500 ml-auto"></i>
	  </li>
	);
  }

  MessageItem.propTypes = {
	name: PropTypes.string.isRequired,    // name should be a string
	message: PropTypes.string.isRequired, // message should be a string
  };
  
  function Sidebar() {
	return (
	  <div className="w-1/5 bg-white shadow-lg p-4">
		<div className="flex items-center mb-8">
		  <div className="text-lg font-lg text-blue-600">H</div>
		</div>
		<nav className="space-y-4">
		  <NavItem icon="fas fa-home" label="Home" />
		  <NavItem icon="fas fa-inbox" label="Inbox" />
		  <NavItem icon="fas fa-tasks" label="Task" />
		  <NavItem icon="fas fa-users" label="Team" />
		  <NavItem icon="fas fa-sticky-note" label="Note" />
		  <NavItem icon="fas fa-folder" label="Project" />
		  <NavItem icon="fas fa-chart-bar" label="Analytics" active />
		  <NavItem icon="fas fa-bell" label="Reminder" />
		  <NavItem icon="fas fa-cog" label="Settings" />
		  <NavItem icon="fas fa-plug" label="Integrations" />
		</nav>
		<div className="mt-auto">
		  <div className="flex items-center space-x-4">
			<img src="https://placehold.co/40x40" alt="User  profile" className="rounded-full" />
			<div>
			  <div className="font-semibold">John Thompson</div>
			  <div className="text-sm text-gray-500">Software Developer</div>
			</div>
		  </div>
		  <div className="mt-4">
			<button className="flex items-center space-x-2 text-red-600">
			  <i className="fas fa-sign-out-alt"></i>
			  <span>Logout</span>
			</button>
		  </div>
		</div>
	  </div>
	);
  }
  
  function analyticsPage() {
	return (
	  <div className="flex">
		<Sidebar />
		<MainContent />
	  </div>
	);
  }
  
  export default analyticsPage;