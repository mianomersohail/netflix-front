import { IoIosArrowDropdown } from "react-icons/io";
export default function Header() {

  return (
    <>
      <div className="absolute px-6 z-10 flex w-[100vw] px-6 items-center justify-between bg-gradient-to-b from-black ">
        <img
          className="w-56"
          alt="netflix-logo"
          src="https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98393d75ff281d_580b57fcd9996e24bc43c529.png"
        />
        <div className="flex items-center ">
        <IoIosArrowDropdown size="24px" color="white"/>
          <h1 className="text-lg font-medium text-white">OMER SOHAIL MERN STACK</h1>
          <div className="ml-4">
            <button className="bg-red-800 text-white px-4 py-2">Logout</button>
            <button className="bg-red-800 text-white px-4 py-2 ml-2">Search movie</button>
          </div>
        </div>
      </div>
    </>
  );
}
