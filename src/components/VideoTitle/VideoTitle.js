import { CiCircleInfo, CiPlay1 } from "react-icons/ci";

export default function VideoTitle() {
    return (
        <div className="absolute w-screen aspect-video text-white pt-[18%] p-12">
            <h1 className="text-3xl font-bold">UMER SOHAIL MERNSTACK</h1>
            <p className="mt-4">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <div className="mt-8 flex">
                <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80">
                    <CiPlay1 size="24px"  />
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
