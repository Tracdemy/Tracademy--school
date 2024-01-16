import React from "react";
import image1 from "./assets/Fileimage1.png";
import { Link } from "react-router-dom";
import image2 from "./assets/cuateimage2.png";
import logo from "./assets/Group 67logo.png";
import "./NewLandingPage.css"
const NewLandingPage = () => {
  return (
    <div>
      <div className=" newLandingPage-wrapper flex flex-col items-center">
        <div className="newLandingPage-contents flex items-end justify-between">
        <div className="best flex flex-col">
          <p className="schools-option">Your <span className="schools">schools best option</span></p>
          <p className="schools-management">FOR SAFE RECORD MANAGEMENT</p>
          </div>
          <img src={image1} alt="img" className="image1" />
        </div>
        <div className="startsHere flex items-start justify-between">
          <div className="flex flex-col items-center justify-between">
            <Link className="starts">Starts Here</Link>
            <img src={image2} alt="img" className="" />
          </div>
          <div className="flex flex-col items-center">
            <img src={logo} alt="img" className="logo" />
            <div className="flex flex-col">
              <div className="btnsFlex flex items-b justify-between">
                <button className="btns px-5 rounded-lg" id="btns1">Sign In</button>
                <button className="btns px-5 rounded-lg" id="btns2">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLandingPage;
