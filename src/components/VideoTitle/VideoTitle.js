import { CiCircleInfo, CiPlay1 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import './VideoTitle.css'

export default function VideoTitle() {
    return (
        <div className="absolute w-screen aspect-video text-white pt-[18%] p-12">
            <h1 className="min-lg:text-3xl max-lg:text-sm min-lg:font-bold "></h1>
            <p className="mt-4 max-lg:xs max-lg:hidden">
                NOW COMING AVATAR
            </p>
            <div className="mt-8 flex">
                <button className="flex items-center px-3 min-lg:px-6 min-lg:py-2 bg-white text-black rounded-md hover:bg-opacity-80">
                    <FaPlay size="24px" className="icon" />
                    <span className="ml-1 text-black">Play</span>
                </button>

                <button className="flex items-center px-6 py-2 bg-gray-500 bg-opacity-50 text-white rounded-md mx-2 hover:bg-opacity-80">
                    <CiCircleInfo size="24px" />
                    <span className="ml-1">Watch More</span>
                </button>
            </div>
        </div>
    );
}
