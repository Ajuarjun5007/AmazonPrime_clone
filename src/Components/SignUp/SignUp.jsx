import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SignUp.css";
import { SiPrimevideo } from "react-icons/si";
import logo from "../../assets/loginassets/primevideoLogo.png";
import { signup } from "./SignUpService";
import { IdAlert } from "../SignIn/IdAlert";
const SignUp = (props) => {
  const [nameCheck, setNameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [statusCheck,setStatusCheck] =useState(false)
  const [validCredentials, setValidCredentials] = useState(false);
  const [errormsg, setErrormsg] = useState("null");
  const [errorShow,setErrorShow]=useState(false);

  const location = useLocation();
  const { NavBarControl } = props;
  const register = (event) => {

    event.preventDefault();

    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const confirmPassword = event.target[3].value;

    if (name !== "") {
      setNameCheck(true);
    }
    console.log('name',name);
    if (email.includes("@") && ".com") {
      setEmailCheck(true);
    }
    console.log('mail',email);

    if (password !== "") {
      setPasswordCheck(true);
    }
    console.log('password',password);

    if(password===confirmPassword){
      setPasswordCheck(true);
    }
    if (passwordCheck==true && emailCheck==true && nameCheck==true){
      setValidCredentials(true);
    }
    else {
      setValidCredentials(false);
      setErrorShow(true);
    }
    console.log('val',validCredentials);
    let signupRequest = [];

    console.log(passwordCheck,+"--- ",nameCheck,+"--- ",emailCheck)
     if(validCredentials==true){
    signupRequest = {
      name: name,
      email: email,
      password: password,
      appType: "ott",
    };
    console.log("done");

    signup(signupRequest)
      .then((response) => {
        console.log("response", response.data.data);
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response.data.data.user)
        );
        console.log("res", response.data.data.user.email);
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      })
      .catch((error) => {
        setErrormsg(error.response.data.message);
        console.log('status',error.response.data.status);
        console.log("err", error.response.data.message);
      });
    }

  };
  useEffect(()=>{
   register();
  },[validCredentials])

  useEffect(() => {
    NavBarControl(location.pathname);
  }, []);
  return (
    <>
      {/* prime logo */}
      <div className="primevideoblackIcon">
        {/* <SiPrimevideo size={200}/> */}
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt="signupimg"
        />
      </div>

      {errorShow && <IdAlert errormsg={errormsg} />}

      {/* prime form */}
      <section>
        <div className="sign_container">
          <div className="sign_header">
            {/* <img src="./blacklogoamazon.png" alt="signupimg" /> */}
          </div>

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
                <input type="email" name="email" id="email" required/>
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

              {/* <div className="sign_in_container"> */}
              <div className="signin_info">
                <p>Already have an account?</p>
                <Link to={"/SignIn"}>
                  <a href="#">Sign In</a>
                </Link>
              </div>
              {/* </div> */}
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="footer-links">
            <a href="#"> Terms and Privacy Notice </a>
            <a href="#"> Send us feedback</a>
            <a href="#">Help</a>
          </div>
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
      </section>
    </>
  );
};

export default SignUp;
