function Header() {
	return (
		<div className="flex flex-col sm:flex-row justify-between items-center p-4"> {/* Stack elements on mobile */}
			<div className="mb-4 sm:mb-0"> {/* Margin bottom on mobile */}
				<h1 className="text-xl sm:text-2xl font-semibold">Hello Thompson</h1> {/* Adjust text size */}
				<p className="text-gray-500 text-sm sm:text-base"> {/* Adjust text size */}
					View and manage all project tasks and milestones from one convenient location.
				</p>
			</div>
			<div className="flex items-center space-x-4">
				<div className="relative flex-1"> {/* Allow input to grow */}
					<input
						type="text"
						placeholder="Search"
						className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" // Full width
					/>
					<i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
				</div>
				<i className="fas fa-bell text-gray-400"></i>
				<i className="fas fa-cog text-gray-400"></i>
				<div className="flex items-center space-x-2">
					<img
						src="https://placehold.co/40x40"
						alt="User profile picture"
						className="rounded-full"
					/>
					<div className="hidden sm:block"> {/* Hide on small screens */}
						<div className="font-semibold">John Thompson</div>
						<div className="text-sm text-gray-500">Software Developer</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
