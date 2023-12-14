import React from "react";
import GooglePlay from "../../../assets/svg/playstore_logo.svg";
import AppleStore from "../../../assets/svg/apple_logo.svg";
import BarCode from "../../../assets/images/Barcode scanner.png";
import OrangeBoard from "../../../assets/images/brown.png";
import Phone from "../../../assets/images/iphone.png";
import "./learningfun.css";

function LearningFun() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-[#F0EDFF] rounded-md my-20 pt-4 px-9 flex justify-between relative flex-col md:flex-row min-h-screen learn_fun">
        <div className="my-5 ">
          <h3 className="font-bold text-[20px] my-3">
            Learning should be <span className="text-[#5956E9]">fun</span> don't
            you think?
          </h3>
          <div className="flex gap-4 flex-col md:flex-row">
            <img src={BarCode} alt="" />
            <div className="md:w-[500px]">
              <p>
                Download the barca learn app to enjoy a new learning experience
                like never before!
              </p>
              <div className="flex my-5 flex-wrap store">
                <button className="py-2 px-4 rounded-xl text-[white] bg-[#5956E9] mx-3 w-[150px] my-3">
                  <span className="flex items-center">
                    <img src={GooglePlay} alt="google-play" />
                    <p className="leading-4 text-[12px] md:text-[20px]">
                      {" "}
                      Download Google Play{" "}
                    </p>
                  </span>
                </button>
                <button className="py-2 px-4 rounded-2xl text-[white] bg-[#5956E9] mx-3 w-[150px] my-3">
                  <span className="flex items-center ">
                    <img src={AppleStore} alt="apple-store" />
                    <p className="leading-4 text-[12px] md:text-[20px]">
                      Download App Store
                    </p>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:hidden">
          <img
            src={Phone}
            alt="phone"
            // className="absolute bottom-0 right-[15px]"
          />
        </div>
        <div className="absolute bottom-0 right-0 hidden md:block">
          <img src={OrangeBoard} alt="orange-board" />

          <img
            src={Phone}
            alt="phone"
            className="absolute bottom-0 right-[15px]"
          />
        </div>
      </div>
    </div>
  );
}

export default LearningFun;
