import MessageItem from "./ MessageItem";
function RecentMessages() {
	return (
		<div className="bg-white p-6 rounded-lg shadow-lg">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-xl font-semibold">Recent Messages</h2>
				<a href="#" className="text-blue-600">See All</a>
			</div>
			<ul className="space-y-4">
				<MessageItem name="Faraday John" message="Stray update" />
				<MessageItem name="Eritan Akin" message="Hello,Thompson.How are you doing" />
				<MessageItem name="Catherine Ezeodi" message="Hello,please check your mail" />
				<MessageItem name="Machi Avelli" message="Hello, any update on the design" />
				<MessageItem name="Salmah Akin" message="Good day. Please when can I call you" />
				<MessageItem name="Humble Smith" message="Please check your mail" />
			</ul>
		</div>
	);
}

export default RecentMessages