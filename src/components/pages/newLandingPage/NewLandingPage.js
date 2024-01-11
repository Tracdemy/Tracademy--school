import React from "react";
import image1 from "./assets/Fileimage1.png";
import { Link } from "react-router-dom";
import image2 from "./assets/cuateimage2.png";
import logo from "./assets/Group 67logo.png";

const NewLandingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between">
        <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <p>Your schools best option</p>
          <p>FOR SAFE RECORD MANAGEMENT</p>
          </div>
          <img src={image1} alt="img" className="" />
        </div>
        <div className="flex items-start justify-between">
          <div className="flex flex-col items-center justify-between">
            <Link>Starts Here</Link>
            <img src={image2} alt="img" className="" />
          </div>
          <div>
            <img src={logo} alt="img" className="" />
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <button className="px-5 py-1 rounded-lg">Sign In</button>
                <button className="px-5 py-1 rounded-lg">Sign Up</button>
              </div>
              <div>Two</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLandingPage;
