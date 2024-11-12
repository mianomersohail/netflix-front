import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Header({backgroundstyle,buttonname,onClick,loading}) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage:backgroundstyle
          // "linear-gradient(to bottom, rgba(0, 0, 0, 1.2), rgba(0, 0, 0, 1.2), rgba(0, 0, 0, 0))",
      
      }}
      className="absolute top-0 left-0 w-full z-10 flex items-center justify-between py-4 px-6 "
    >
      <img
        className="w-56"
        alt="netflix-logo"
        src="https://raw.githubusercontent.com/srujanjapthi/Netflix-Clone-Project---codewithharry/9f48ac863d7b02aaf3fd000457a658b432c0bcba/assets/images/logo.svg"
      />
      <div className="flex items-center">
        <IoIosArrowDropdown size="24px" color="white" />
        <h1 className="text-lg font-medium text-white ml-2">OMER SOHAIL MERN STACK</h1>
        <div className="ml-4">
          <button
            className="bg-[#E50914] rounded text-white px-2 py-1"
            onClick={onClick}
          >
            
              {loading && (
                <div className="ml-2 animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
              )}
            {buttonname}
          </button>
        </div>
      </div>
    </div>
  );
}
