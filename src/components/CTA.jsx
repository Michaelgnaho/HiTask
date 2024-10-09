import highpic6 from "../assets/highPic6.png";

function CTA() {
    return (
        <div className="flex justify-center items-center h-screen px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                <img src={highpic6} alt="A group of people in a meeting, shaking hands and smiling" className="w-full md:w-1/2 object-cover" />
                <div className="p-8 w-full md:w-1/2 bg-[#f5f5ff]">
                    <h1 className="text-2xl text-black font-bold mb-4">Stay on Top of Your Goals</h1>
                    <p className="text-gray-700 mb-4">
                        With Hi Task, managing your daily to-dos and long-term projects has never been easier. Prioritize tasks, set reminders, and track your progress—all in one place. Whether you are juggling personal errands or professional deadlines, Hi Task helps you stay organized and productive, so you can focus on what matters most.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CTA;
