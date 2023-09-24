import React, { useState } from "react";
import "./SignIn.css";
import { SiPrimevideo } from "react-icons/si";
import logo from "../../assets/loginassets/primevideoLogo.png";

const Signup = () => {
  return (
    <>
      {/* prime logo */}
      <div className="primevideoIcon">
        {/* <SiPrimevideo size={200}/> */}
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt="signupimg"
        />
      </div>

      {/* prime form */}
      <section>
        <div className="sign_container">
          <div className="sign_header">
            {/* <img src="./blacklogoamazon.png" alt="signupimg" /> */}
          </div>
          <div className="sign_form">
            <form>
              <h1>Create account</h1>
              <div className="form_data">
                <div className="form_data_label">
                  <label htmlFor="name">Your name</label>
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First and last name"
                />
              </div>
              <div className="form_data">
                <div className="form_data_label">
                  <label htmlFor="email">Email</label>
                </div>
                <input type="email" name="email" id="email" />
              </div>

              <div className="form_data">
                <div className="form_data_label">
                  <label htmlFor="password">Password</label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="At least 6 characters"
                />
                <div className="password-info">
                  <i className="a-icon a-icon-alert"></i>
                  Passwords must be at least 6 characters.
                </div>
              </div>
              <div className="form_data">
                <div className="form_data_label">
                  <label htmlFor="password">Re-enter password</label>
                </div>
                <input type="password" name="repassword" id="passwordg" />
              </div>
              <button type="submit" className="signin_btn">
                Create your Amazon account
              </button>

              <div className="terms">
                By creating an account, you agree to the amazon
                <a href=""> Conditions of Use and Privacy Notice.</a>
              </div>

              {/* <div className="sign_in_container"> */}
                <div className="signin_info">
                  <p> 
                  Already have an account?
                      </p>
                  <a href="">Sign In</a>
                </div>
              {/* </div> */}
            </form>
           
          </div>
        </div>
      <div className="footer">
              <div className="footer-links">
              <a href=""> Terms and Privacy Notice </a>
              <a href=""> Send us feedback</a>
              <a href="">Help</a>
              </div>
              © 1996-2023, Amazon.com, Inc. or its affiliates
            </div>
      </section>
    </>
  );
};

export default Signup;
