
function ProjectOverview() {
	return (
		<div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
			<h2 className="text-xl font-semibold mb-4">Project Overview</h2>
			<div className="flex">
				<ul className="space-y-2 flex-1">
					<li>Deploy major software update</li>
					<li>Fix critical bug</li>
					<li>Explore new UI design pattern</li>
					<li>Address major software issue</li>
					<li>Meet new clients</li>
					<li>Develop new project plan</li>
					<li>Mobile App Developer</li>
				</ul>
				<div className="w-1/2">
					<img src="https://placehold.co/200x200" alt="Pie chart showing project distribution" />
				</div>
			</div>
		</div>
	);
}

export default ProjectOverview