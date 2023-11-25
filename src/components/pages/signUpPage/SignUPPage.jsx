import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import signUpImg from "./assets/cuate.png";
import "./SignUPPage.css"
import logoImg from "./assets/Group 67.png";
import { Link } from "react-router-dom";

const SignUPPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="signUpPage-wrapper">
      <div className="signUpPage-flex_row">
        <div className="left-content">
          <img src={logoImg} alt="logo" className="signUp-logo" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="signUp-form">
                <h2 className="signUpPage-title">Welcome</h2>
                <p className="signUpPage-details">Please, sign up here</p>
                <div className="form-group">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="input-field"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group">
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="input-field"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? "Signing Up..." : "Sign Up"}
                </button>
                <div>
                  <input type="checkbox" className="checkbox"/>
                  By continuing, you agree with our Terms & Conditions
                </div>
                <p className="signIn">
                  Do have an account?{" "}
                  <Link to="/sign-in" className="signUpPage-sign_btn">
                    Sign in
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
        <div className="right-content">
          <div className="right-content-inner">
            <h2 className="right-content-title1">
              Your <span className="schoolRecords">School records</span>
            </h2>
            <p className="right-content-title2">All in <span className="onePlace">one place</span></p>
            <img
              src={signUpImg}
              alt="school records"
              className="school-records-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUPPage;
