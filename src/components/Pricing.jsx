import highpic5 from "../assets/highPuc5.png"

export default function Pricing() {
	return (
		<div className="text-center">
			<div className="bg-white py-12">
				<h1 className="text-2xl text-black font-semibold">Clear, affordable pricing</h1>
				<p className="mt-4 text-gray-600">We offer flexible plans to fit your productivity needs. Whether you are an individual looking to streamline tasks or a team aiming for seamless collaboration, we have got you covered.</p>
			</div>
			<div className="bg-indigo-50 py-12">
				<div className="flex justify-center items-center">
					<img src={highpic5} alt="Two smartphones displaying pricing plans" className="w-1/3 mx-4"/>
					<div className="w-1/3 mx-4">
						<p className="text-gray-600">Choose the perfect plan to fit your goals, whether you are just starting or scaling up. Our pricing options are designed to offer flexibility, affordability, and maximum value. With two tailored packages, you will have the freedom to pick the one that suits your needs without compromising on the features that matter most.</p>
					</div>
				</div>
			</div>
		</div>
	);
}