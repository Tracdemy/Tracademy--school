import Logo from "../../assets/svg/barca_logo.svg";
import "./navbar.css";
import Hamburger from "../../assets/svg/blue_hamburger.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function LandingNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(() => !showMenu);
  };

  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-between items-center navbar px-3">
        <div className="flex gap-2 items-center">
          <img src={Logo} alt="logo" />
          <h3 className="text-black">Barca</h3>
        </div>
        <div>
          <ul className="flex gap-8 cursor-pointer">
            <li className="hover:text-[#5956E9]">Home</li>
            <li className="hover:text-[#5956E9]">Courses</li>
            <li className="hover:text-[#5956E9]">Mentors</li>
            <li className="hover:text-[#5956E9]">About Us</li>
          </ul>
        </div>
        <div className="flex gap-3">
          <Link to="/sign-in" className="hover:text-[#5956E9] mt-3">Sign in</Link>
          <button className="text-[white] bg-[#5956E9] py-2 px-4 rounded-md hover:text-black hover:bg-[white]">
            Register
          </button>
        </div>
      </div>
      <div className="small_screen">
        <div className="small-navbar">
          <div className="flex gap-2 items-center">
            <img src={Logo} alt="logo" />
            <h3 className="text-black">Barca</h3>
          </div>

          <div onClick={handleShowMenu}>
            {!showMenu ? (
              <img src={Hamburger} alt="hamburger" className="w-[40px]" />
            ) : (
              <p onClick={handleShowMenu}>✖</p>
            )}
          </div>
        </div>
        {showMenu && (
          <div className="w-[100%] h-screen py-5 text-center bg-white flex  flex-col ">
            <ul>
              <li className="hover:text-[#5956E9]">Home</li>
              <li className="hover:text-[#5956E9]">Courses</li>
              <li className="hover:text-[#5956E9]">Mentors</li>
              <li className="hover:text-[#5956E9]">About Us</li>
            </ul>
            <div className="flex gap-5 my-4 auth">
              <button className="hover:text-[#5956E9] mx-3">Sign in</button>
              <button className="mx-3 text-[white] bg-[#5956E9] py-2 px-4 rounded-md hover:text-black hover:bg-[white]">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default LandingNavbar;
