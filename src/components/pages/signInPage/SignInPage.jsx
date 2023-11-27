import React, { useState } from "react";
import signInImg from "./assets/cuate.png";
import "./SignInPage.css";
import logoImg from "./assets/Group 67.png";
import googleImg from "./assets/image 19 (1).png";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithPopup,
  getAuth,
  provider,
} from "../../firebase";
const SignInPage = () => {

  const navigate = useNavigate()
  //States
  const [error, setError] = useState("")
  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    await signInWithPopup(auth, provider)
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in:", user);
        navigate("/student-dashboard")
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error("Error signing in:", error);
        setError(error)
      });
  };

  return (
    <div className="signUpPage-wrapper">
      <div className="signUpPage-flex_row">
        <div className="left-content">
       
          <img src={logoImg} alt="logo" className="signUp-logo" />
          <h2 className="signUpPage-title">Welcome back</h2>
          <p className="signUpPage-details">Please enter your details</p>
          <button type="button" className="submit-btn" onClick={handleGoogleSignIn}>
            <img src={googleImg} alt="Google" className="googleImg" />
            Sign In with Google
          </button>
          <label className="container">
            By continuing, you agree with our Terms & Conditions
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <p className="signIn">
            Are you an Admin?{" "}
            <Link to="/admin-sign-in" className="signUpPage-sign_btn">
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
          <img src={signInImg} alt="school records" className="school-records-img" />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
