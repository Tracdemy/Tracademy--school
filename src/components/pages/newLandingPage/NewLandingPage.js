import React from "react";
import image1 from "./assets/Fileimage1.png";
import { Link } from "react-router-dom";
import image2 from "./assets/cuateimage2.png";
import logo from "./assets/Group 67logo.png";
import "./NewLandingPage.css";
const NewLandingPage = () => {
  return (
    <div>
      <div className=" newLandingPage-wrapper flex flex-col items-center checkheight">
        <div className="newLandingPage-contents flex  justify-around">
          <div className="best flex flex-col">
            <p className="schools-option pt-[48px]">
              Your <span className="schools">schools best option</span>
            </p>
            <p className="schools-management">FOR SAFE RECORD MANAGEMENT</p>
          </div>
          <img
            src={image1}
            alt="img"
            className="image1 max-w-[280px] checkmax-height"
          />
        </div>
        <div className="flex justify-center">
          <Link to="/sign" className="starts">
            Starts Here
          </Link>
        </div>
        <div className="startsHere flex items-start justify-between gap_check xl:gap-[400px] align_center">
          <div className="flex flex-col items-center justify-between ">
            <img
              src={image2}
              alt="img"
              className="image_size checkmax-height"
            />
          </div>
          <div className="flex flex-col items-center">
            <img src={logo} alt="img" className="logo" />
            <div className="flex flex-col">
              <div className="btnsFlex flex items-b justify-between">
                <Link to="/sign" className="btns px-5 rounded-lg" id="btns1">
                  Sign In
                </Link>
                <Link to="/sign" className="btns px-5 rounded-lg" id="btns2">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLandingPage;
