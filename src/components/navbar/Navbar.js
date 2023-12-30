import React, { useState } from "react";
import Logo from "../../components/logo/Logo.jsx";
import SearchIcon from "../../assets/svg/search-icon.svg";
import Message from "../../assets/svg/message_blue.svg";
import Notification from "../../assets/svg/blue-notification.svg";
import Principal from "../../assets/images/hairgirl.png";
import Hamburger from "../../assets/svg/blue_hamburger.svg";
import "./navbar.css";
import Sidebar from "../sidebar/Sidebar.jsx";
import NoticeBar from "../noticeboard/NoticeBar.jsx";
import Logout from "../studentLogout/Logout.jsx";

// import logoImg from "./assets/Group 67.png";

function Navbar() {
  const [searchBar, setSearchBar] = useState("");
  const [showNavbar, setShowNavbar] = useState(false);

  const handleSearch = (e) => {
    setSearchBar(e.target.value);
  };

  return (
    <div>
      {/* extra large screens */}
      <div className="md:flex justify-between items-center my-4 lg:mx-5 hidden showbig_navbar">
        <Logo />
        <form className="relative">
          <input
            type="text"
            value={searchBar}
            onChange={() => handleSearch}
            placeholder="Search Here"
            className=" lg:w-[400px] xl:w-[600px] shadow-[0px_4px_4px_0px_#CACACA40] rounded px-4 py-2 outline-none"
          />
          <img
            src={SearchIcon}
            alt="search-Icon"
            className="absolute top-[10px] right-[14px]"
          />
        </form>
        <div className="flex gap-4 items-center px-3">
          <img
            src={Message}
            alt="message"
            className=" rounded-3xl shadow px-2 py-2 hidden md:block hover:transition hover:translate-y-[-4px] hover:ease-in-out hover:duration:300 hover:delay-300"
          />
          <img
            src={Notification}
            alt="notification"
            className=" rounded-3xl shadow px-2 py-2 hidden md:block hover:transition hover:translate-y-[-4px] hover:ease-in-out hover:duration:300 hover:delay-300"
          />
          <img
            src={Principal}
            alt="principal-img"
            className="max-h-[32px] hover:transition hover:translate-y-[-4px] hover:ease-in-out hover:duration:300 hover:delay-300"
          />
          <div>
            <h3 className="font-bold">Mrs Juliet</h3>
            <p className="text-[12px]">Principal</p>
          </div>
        </div>
      </div>

      {/* large screen */}
      <div className="md:flex justify-between items-center my-4 lg:mx-5 hidden show_navbar">
        <div className="flex items-center">
          <Logo />
          <div
            className={`flex  items-center ${showNavbar ? "hidden" : "block"}`}
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <img src={Hamburger} alt="hamburger" className="w-[35px]" />
          </div>
        </div>
        {showNavbar && (
          <div className="bg-white min-h-screen w-[354px] absolute top-0 left-0 px-4 z-10 ml-[-2px]">
            <div
              className="flex justify-end mt-5"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              ❌
            </div>
            <Sidebar />
            <NoticeBar />
            <Logout />
          </div>
        )}
        <form className="relative">
          <input
            type="text"
            value={searchBar}
            onChange={() => handleSearch}
            placeholder="Search Here"
            className=" lg:w-[400px] xl:w-[600px] shadow-[0px_4px_4px_0px_#CACACA40] rounded px-4 py-2 outline-none"
          />
          <img
            src={SearchIcon}
            alt="search-Icon"
            className="absolute top-[10px] right-[14px]"
          />
        </form>
        <div className="flex gap-4 items-center px-3">
          <img
            src={Message}
            alt="message"
            className=" rounded-3xl shadow px-2 py-2 hidden md:block hover:transition hover:translate-y-[-4px] hover:ease-in-out hover:duration:300 hover:delay-300"
          />
          <img
            src={Notification}
            alt="notification"
            className=" rounded-3xl shadow px-2 py-2 hidden md:block hover:transition hover:translate-y-[-4px] hover:ease-in-out hover:duration:300 hover:delay-300"
          />
          <img
            src={Principal}
            alt="principal-img"
            className="max-h-[32px] hover:transition hover:translate-y-[-4px] hover:ease-in-out hover:duration:300 hover:delay-300"
          />
          <div>
            <h3 className="font-bold">Mrs Juliet</h3>
            <p className="text-[12px]">Principal</p>
          </div>
        </div>
      </div>

      {/* small screens */}
      <div>
        <div className="flex justify-between md:hidden my-4 small-width relative px-3">
          <Logo />
          <div
            className={`flex  items-center ${showNavbar ? "hidden" : "block"}`}
            onClick={() => setShowNavbar(!showNavbar)}
          >
            <img src={Hamburger} alt="hamburger" className="w-[35px]" />
          </div>
          {showNavbar && (
            <div className="bg-white min-h-screen w-[354px] absolute top-0 left-0 px-4 z-10 ml-[-2px]">
              <div
                className="flex justify-end mt-5"
                onClick={() => setShowNavbar(!showNavbar)}
              >
                ❌
              </div>
              <Sidebar />
              <NoticeBar />
              <Logout />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
