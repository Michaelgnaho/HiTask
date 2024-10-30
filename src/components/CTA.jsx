import highpic6 from "../assets/about_img.png";

function CTA() {
    return (
        <div className="flex py-0 bg-slate-100 justify-center items-center animate  px-2 sm:px-2 lg:px-4" id="aboutUs">
            <div className="bg-white  shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row bottom-0 pb-0  w-full animate">
                <img 
                    src={highpic6} 
                    alt="A group of people in a meeting, shaking hands and smiling" 
                    className="w-full md:w-1/2 object-cover h-56 sm:h-auto" 
                    loading="lazy" 
                />
                <div className=" sm:p-2 w-full h-full md:w-full bg-[#f5f5ff]">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl text-black font-bold mb-4 p-2">About Us</h1>
                    <p className="text-gray-700 p-0 m-0 text-lg sm:text-base lg:text-lg mb-1 p-2 ">
                        With Hi Task, managing your daily to-dos and long-term projects has never been easier. Prioritize tasks, set reminders, and track your progress—all in one place. Whether you're juggling personal errands or professional deadlines, Hi Task helps you stay organized and productive, so you can focus on what matters most.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CTA;
