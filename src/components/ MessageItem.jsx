
function MessageItem({ name, message }) {
	return (
		<li className="flex items-center justify-between">
			<div className="flex items-center space-x-4">
				<img src="https://placehold.co/40x40" alt={`Profile picture of ${name}`} className="rounded-full" />
				<div>
					<div className="font-semibold">{name}</div>
					<div className="text-gray-500">{message}</div>
				</div>
			</div>
			<i className="fas fa-check text-green-500"></i>
		</li>
	);
}
export default  MessageItem