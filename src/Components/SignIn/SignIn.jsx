import React, { useState } from "react";
import "./SignIn.css";
import { SiPrimevideo } from "react-icons/si";
import logo from "../../assets/loginassets/primevideoLogo.png";
import { Link } from "react-router-dom";
import { RxTriangleDown } from "react-icons/rx"
const SignIn = () => {
  return (
    <>
      {/* prime logo */}
      <div className="primevideoIcon">
        {/* <SiPrimevideo size={200}/> */}
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt="SignInimg"
        />
      </div>

      {/* prime form */}
      <div className="login-parent">
      <div className='loginpageformContainer'>
              <form className='loginpageform'>
                <p className='formtitle'>Sign in</p>
                <div className='emailinput'>
                  <label>Email or mobile phone number</label>
                  <input type='email' placeholder='Enter your email or mobile phone' />
                </div>
                <div className='passwordinput'>
                  <div className='passwordtitle'>
                    <label>Password</label>
                    <Link to="">Change Password</Link>
                  </div>
                  <input type='password' placeholder='Enter your password'/>
                 
                </div>
                <div className='formsubmitBtn'>
                  <button >Sign in</button>
                </div>
              </form>
              <div className='termsandCons'>
                <p>By continuing, you agree to Amazon's <Link to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940">Conditions of Use</Link> and <Link to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380">Privacy Notice</Link>.</p>
              </div>
              <div className='checkboxverify'>
                <input type='checkbox' ></input>
                <p> Keep me signed in. <Link>Details</Link> <RxTriangleDown/></p>
              </div>
              <div className='newformtitle'>
                <p>New to Amazon?</p>
              </div>
              <div className='newformbutton'>
                <button >Create your Amazon account</button>
              </div>
          </div>
   {/* footer */}
          <div className='loginpagefooter'>
            <div className='loginpagesupport'>
              <Link onClick={()=>alert("The Page your Re-Directing is not a source of Amazon Music Clone.")} target='_blank' to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940">Conditions of Use</Link>
              <Link onClick={()=>alert("The Page your Re-Directing is not a source of Amazon Music Clone.")} target='_blank' to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380">Privacy Notice</Link>
              <Link onClick={()=>alert("The Page your Re-Directing is not a source of Amazon Music Clone.")} target='_blank' to="https://www.amazon.in/help">Help</Link>
            </div>
            <div className='loginpagecopyright'>
              &copy; 1996-2023, AmazonClone.com, Inc. or its affiliates
            </div>
          </div>
          </div>
    
    </>
  );
};

export default SignIn;
