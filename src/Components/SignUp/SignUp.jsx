import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { SiPrimevideo } from "react-icons/si";
import logo from "../../assets/loginassets/primevideoLogo.png";
import { signup } from "./SignUpService";
import { IdAlert } from "../SignIn/IdAlert";

const SignUp = () => {
  const [nameCheck, setNameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [statusCheck,setStatusCheck] =useState(false)
  const [validCredentials, setValidCredentials] = useState(false);
  const [errormsg, setErrormsg] = useState("null");
  const [errorShow,setErrorShow]=useState(false);
  const navigate = useNavigate();
  const [validationErrors,setValidationErrors]=useState([]);

  const location = useLocation();

  const register = (event) => {

    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const confirmPassword = event.target[3].value;
    const password = event.target[2].value;

    const errors=[];

    if (name === "") {
      errors.push('name must not be empty');
    }
    console.log('name',name);
    if(email===''){
      errors.push('email should not be empty');
    }
    else if(!email.includes("@")) {
      errors.push('invalid email address');
    }
    console.log('mail',email);

    if (password === "") {
      errors.push('password should not be empty');
    } else if(password.length<5){
      errors.push('password length should be atleast 6 characters');
    }
     else if(password!==confirmPassword){
      errors.push('confirm password did not match');
    }
    console.log('error',errors);
    setValidationErrors(errors);
   
  

    if(errors.length===0){
     setErrorShow(false)
     const signupRequest = {
      name: name,
      email: email,
      password: password,
      appType: "ott",
    }
      signup(signupRequest)
       .then((response) => {
        //  console.log("response", response.data.data);
        //  localStorage.setItem(
        //    "userInfo",
        //    JSON.stringify(response.data.data.user)
        //  );
        //  console.log("res", response.data.data.user.email);
        //  localStorage.setItem("token", response.data.token);
         navigate("/SignIn");
       })
       .catch((error) => {
        if(error.response){
          setValidationErrors([error.response?.data?.message])
          setErrorShow(true)
        }
      });
   }else{
     setErrorShow(true)
   }

  };
 

 

  return (
    <>
    <div className="SignUpContainer">

      {/* prime logo */}
      <div className="primevideoblackIcon">
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt="signupimg"
        />
      </div>

      {errorShow && <IdAlert errormsg={validationErrors} />}

      {/* prime form */}
      <section id="section-container">
        <div className="sign_container">
          <div className="sign_form">
            <form onSubmit={(event)=>register(event)}>
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
                <input type="text" name="email" id="email" />
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
                <a href="https://www.primevideo.com/help/ref=av_auth_te?nodeId=202064890">
                  {" "}
                  Conditions of Use and Privacy Notice.
                </a>
              </div>

              <div className="signin_info">
                <p>Already have an account?</p>
                <Link to={"/SignIn"}>
                  <a href="#">Sign In</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="footer-links">
            <Link
              className="anchor-tag"
              onClick={() =>
                alert(
                  "The Page your Re-Directing is not a source of prime video Clone."
                )
              }
              target="_blank"
              to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"
            >Terms and Privacy Notice 
            </Link>
            <Link
              className="anchor-tag"
              onClick={() =>
                alert(
                  "The Page your Re-Directing is not a source of prime video Clone."
                )
              }
              target="_blank"
              to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940"
            >Send us feedback
            </Link>
         <Link
         className="anchor-tag"
              onClick={() =>
                alert(
                  "The Page your Re-Directing is not a source of prime video Clone."
                )
              }
              target="_blank"
              to="https://www.amazon.in/help"
            >
          Help
          </Link>
          </div>
       <span>
       © 1996-2023, Amazon.com, Inc. or its affiliates
        </span>   
        </div>


        
      </section>

    </div>

    </>
  );
};

export default SignUp;
