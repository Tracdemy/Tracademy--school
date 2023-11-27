import React from "react";
import signInImg from "./assets/cuate.png";
import "./SignInPage.css";
import logoImg from "./assets/Group 67.png";
import { Link } from "react-router-dom";
import googleImg from "./assets/image 19 (1).png"

const SignInPage = () => {
  return (
    <div className="signUpPage-wrapper">
      <div className="signUpPage-flex_row">
        <div className="left-content">
          <img src={logoImg} alt="logo" className="signUp-logo" />
          <h2 className="signUpPage-title">Welcome back</h2>
          <p className="signUpPage-details">Please enter your details</p>
        <button type="submit" className="submit-btn">
         <img src={googleImg} alt="img" className="googleImg" /> Sign In with Google
        </button>
        <label class="container">
          By continuing, you agree with our Terms & Conditions
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <p className="signIn">
          Are you an Admin?{" "}
          <Link to="/sign-in" className="signUpPage-sign_btn">
            Sign In
          </Link>
        </p>
        </div>
      </div>
      <div className="right-content">
        <div className="right-content-inner">
          <h2 className="right-content-title1">
            Your <span className="schoolRecords">School records</span>
          </h2>
          <p className="right-content-title2">
            All in <span className="onePlace">one place</span>
          </p>
          <img
            src={signInImg}
            alt="school records"
            className="school-records-img"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
