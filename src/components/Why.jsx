import highpic2 from "../assets/highPic2.png"
import highpic3 from "../assets/highpic3.png"
import highpic4 from "../assets/highPic4.png"

function Why() {
	return (
        <div className="text-center bg-white py-12">
            <h1 className="text-3xl text-gray-600 font-semibold mb-4">Why HiTask</h1>
            <p className=" text-gray-600 mb-12">
                Hi Task Management helps you stay organized, focused, and productive. With easy task tracking, seamless collaboration, 
                and smart reminders, you will achieve more in less time.
            </p>
            <div className="bg-purple-100 py-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6   ">
                    <div className="bg-white rounded-lg shadow-md mb-20 pb-5">
                        <div className="rounded-t-lg mb-4 bg-gray-200" >
                            <img src={highpic2}/>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 ">Smart Task Prioritization</h2>
                        <p className="text-gray-600">
                            Boost your productivity with smart task prioritization that automatically ranks your tasks based on urgency and importance.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md  mt-10 mb-10 pb-5">
                        <div className="rounded-t-lg mb-4 bg-gray-200" >  <img src={highpic3}/> </div>
                        <h2 className="text-xl font-semibold mb-2">Automated Reminders</h2>
                        <p className="text-gray-600">
                            Stay on track with automated reminders that keep you updated on upcoming tasks and deadlines, so you never miss a beat.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md  mt-20">
                        <div className="rounded-t-lg mb-4 bg-gray-200" ><img src={highpic4}/></div>
                        <h2 className="text-xl font-semibold mb-2">Seamless Integration</h2>
                        <p className="text-gray-600">
                            Connect your favourite tools on Hi-task and enhance project.
                        </p>
                    </div>
                </div>
                <div className="mt-6">
                    <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                        Explore all features
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Why