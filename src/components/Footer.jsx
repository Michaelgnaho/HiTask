
function Footer() {
	return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
            <div className="flex flex-col items-start w-full max-w-4xl px-4">
                <h1 className="text-2xl font-bold mb-2">HiTask</h1>
                <p className="mb-8">Your all-in-one management platform.</p>
                <div className="flex flex-col items-start mb-8">
                    <p className="mb-2">Want to be well informed about our updates and services?</p>
                    <h2 className="text-xl font-bold mb-4">Subscribe to our newsletter</h2>
                    <div className="flex items-center">
                        <input type="email" placeholder="Input Email Address" className="px-4 py-2 rounded-l-full border border-white bg-transparent text-white placeholder-white focus:outline-none" />
                        <button className="px-4 py-2 bg-white text-blue-900 rounded-r-full">Subscribe</button>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between w-full">
                    <div className="flex flex-col mb-4">
                        <a href="#" className="mb-2">Features</a>
                        <a href="#" className="mb-2">Resources</a>
                        <a href="#">Pricing</a>
                    </div>
                    <div className="flex flex-col mb-4">
                        <a href="#" className="mb-2">About Us</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="flex flex-col mb-4">
                        <a href="#" className="mb-2">Legal</a>
                        <a href="#" className="mb-2">Settings</a>
                        <a href="#">Terms Of Use</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer