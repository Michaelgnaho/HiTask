
function StatsCard({number, label}) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-lg text-center">
			<div className="text-3xl font-bold">{number}</div>
			<div className="text-gray-500">{label}</div>
		</div>
	);
}

export default StatsCard