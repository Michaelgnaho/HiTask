import { Link } from "react-router-dom"
import highTaskLogo from "../assets/hitask_logo.png"
import highpic1 from "../assets/hitask_pic1.png"


 export default function Hero() {
	return(
		<>
			<div className="min-h-screen min-w-full flex flex-col">
                    <header className="flex justify-between items-center p-6">
                        <div className="flex items-center size-6">
                           <img src={highTaskLogo} alt="logo" />
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <div className="relative group">
                                <button className="text-gray-700  bg-transparent font-medium">Features</button>
                                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Feature 1</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Feature 2</a>
                                </div>
                            </div>
                            <div className="relative group">
                                <button className="text-gray-700  bg-transparent font-medium">Resources</button>
                                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 1</a>
                                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resource 2</a>
                                </div>
                            </div>
                            <a href="#" className="text-gray-700  bg-transparent font-medium pt-2">Pricing</a>
                        </nav>
                        <div className="hidden md:flex space-x-4">
                        <Link to="/login" className="text-gray-700 pt-2">  Log In
</Link>
                           <Link to="/register" className="px-4 py-2 bg-blue-900 text-white rounded-md">
                        Get Started
                           </Link>
                        </div>
                    </header>
                    <main className="flex flex-1 flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-white">
                        <div className="max-w-lg mb-8 md:mb-0">
                            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Your All-in-one Task Management Tool Designed To Revolutionize Your Daily Workflow</h1>
                            <p className="text-gray-600 mb-8">Enhance your productivity with innovative task management platform</p>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <button className="px-6 py-3 bg-blue-900 text-white rounded-md">How it works</button>
                                <button className="px-6 py-3 bg-blue-900 text-white rounded-md">Get Started For Free</button>
                            </div>

                            <p className="text-gray-600 mt-8">Trusted by credible companies globally</p>
                            
                            <div className="flex flex-wrap  mt-4 pt-14 px-0">
                                <img src="https://placehold.co/100x40?text=Netflix" alt="Netflix logo" className="size-16  mx-2"/>
                                <img src="https://placehold.co/100x40?text=Hulu" alt="Hulu logo" className="size-16 mx-2"/>
                                <img src="https://placehold.co/100x40?text=ASUS" alt="ASUS logo" className="size-16 mx-2"/>
                                <img src="https://placehold.co/100x40?text=Adidas" alt="Adidas logo" className="size-16 mx-2"/>
                                <img src="https://placehold.co/100x40?text=Sony" alt="Sony logo" className="size-16 mx-2"/>
                                <img src="https://placehold.co/100x40?text=EA" alt="EA logo" className="size-16 mx-2"/>
                            </div>
                            
                        </div>
                        <div className="size-[500px] bg-purple-100 rounded-lg overflow-hidden">
                            <img src={highpic1} alt="Three people collaborating in an office setting" className="w-full h-full object-cover "/>
                        </div>
                    </main>
                </div>
		</>
	)
	
}