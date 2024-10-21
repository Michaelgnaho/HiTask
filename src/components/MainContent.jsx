import Header from "./Header";
import ProjectOverview from "./ProjectOverview";
import RecentMessages from "./RecentMessages";
import StatsCard from "./StatsCard";

function MainContent() {
	return (
		<div className="flex-1 p-4 md:p-8"> {/* Reduced padding on mobile */}
			<Header />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"> {/* Responsive grid */}
				<StatsCard number="110" label="Total Projects" />
				<StatsCard number="60" label="On Going Projects" />
				<StatsCard number="25" label="Completed Projects" />
				<StatsCard number="18" label="Upcoming Projects" />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-8"> {/* Responsive grid */}
				<ProjectOverview />
				<RecentMessages />
			</div>
		</div>
	);
}

export default MainContent;
