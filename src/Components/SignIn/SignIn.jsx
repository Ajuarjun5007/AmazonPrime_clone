import React, { useState, useEffect, useContext, useRef } from "react";
import "./SignIn.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IdAlert } from "./IdAlert";
import { UserContext } from "./SignInProvider";
import { login } from "./SigninService";

const PHONE_NUMBER_EXPRESSION =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const EMAIL_EXPRESSION =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const SignIn = () => {
  const formRef = useRef();
  const { search } = useLocation();
  const location = useLocation();
  const params = new URLSearchParams(search);
  const key = params.get("status");
  const user = useContext(UserContext);

  const [hasCompletedFirstStep, setHasCompletedFirstStep] = useState(false);
  const [usernameType, setUsernameType] = useState(null);
  const [errorMessage, setErrorMessage] = useState(" ");
  
  useEffect(() => {
    if (key === null) {
      setHasCompletedFirstStep(false);
    }
  }, [key]);
  const navigate = useNavigate();

  const navigateToValidation = (event) => {
    let username = undefined;
    let password = undefined;
    if (!hasCompletedFirstStep) {
      username = event.target[0].value;
    } else {
      password = event.target[1].value;
    }
    event.preventDefault();

    let idInfo=[];
    if (user.status === undefined && user.username === undefined) {
      const usernameTypeForValidation = isNaN(username)
        ? "email"
        : "phone number";
      setUsernameType(usernameTypeForValidation);
      const isValidUsername =
        usernameTypeForValidation === "email" 
          ? EMAIL_EXPRESSION.test(username)
          : PHONE_NUMBER_EXPRESSION.test(username);
      if (isValidUsername) {
        user.setUsername(username);
        user.setStatus("usernameCompleted");
        navigate("/SignIn?status=completed");
        setHasCompletedFirstStep(true);
        SetErrorAlert(false);
      } else {
        SetErrorAlert(true);
        setErrorMessage("Enter your email or mobile number");
      }
    } else if (user.username !== undefined && hasCompletedFirstStep) {
      login(user.username, password)
        .then((response) => {
          idInfo.push(response.data.token);
          idInfo.push(response.data.data);
          localStorage.setItem("userInfo", JSON.stringify(idInfo));
          localStorage.setItem("user", JSON.stringify(response.data.data));
          navigate("/");
          navigate(0);
        })
        .catch((error) => {
          console.log("err", error.response.data.message);
          setErrorMessage(error.response.data.message);
          SetErrorAlert(true);
          setLoginFailed(true);
        });
    }
  };
  const resetLogin = ()=>{
    user.setUsername(undefined);
    user.setStatus(undefined);
    navigate("/Signin")
  }
  const [errorAlert, SetErrorAlert] = useState(false);
  const [loginFailed, setLoginFailed] = useState(undefined);
  console.log("errormsg",errorMessage);

  return (
    <>
    <div className="SignContainer-parent">
      <div className="primevideoblackIcon">
      <Link to='/'>
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png"
          alt="SignInimg"
        />
      </Link>
      </div>
      {errorAlert && (
        <IdAlert
          isLoginSuccess={loginFailed}
          usernameType={usernameType}
          errorMessage={errorMessage}
        />
      )}

      {/* prime form */}
      <div className="login-parent">
        <div className="loginpageformContainer">
          <form
            ref={formRef}
            className="loginpageform"
            onSubmit={navigateToValidation}
          >
            <p className="formtitle">Sign in</p>

            {/* email input */}
            {!hasCompletedFirstStep && (
              <div className="emailinput">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
            )}
            {user.status !== undefined && hasCompletedFirstStep && (
              <div className="loginsecondpageContainer">
                <div className="id-creds" >
                  <p>{user.username}</p>
                  <button className="anchor-tag" onClick={resetLogin}>
                    Change
                  </button>
                </div>
                <div className="passwordinput">
                  <div className="passwordtitle">
                    <label>Password</label>
                    <Link className="anchor-tag" to="/comingsoon">
                      Forgot your Password?
                    </Link>
                  </div>
                  <input type="password" placeholder="Enter your password" />
                </div>
              </div>
            )}
            <div className="formsubmitBtn">
              <button type="submit">Continue</button>
            </div>
          </form>

          {user.status === undefined && !hasCompletedFirstStep && (
            <div className="termsandCons">
              <p>
                By continuing, you agree to Amazon's{" "}
                <Link
                  onClick={() =>
                    alert(
                      "The Page your Re-Directing is not a source of prime video Clone."
                    )
                  }
                  to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"
                >
                  Conditions of Use
                </Link>{" "}
                and{" "}
                <Link
                  onClick={() =>
                    alert(
                      "The Page your Re-Directing is not a source of prime video Clone."
                    )
                  }
                  to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"
                >
                  Privacy Notice
                </Link>
                .
              </p>
            </div>
          )}
          {/* <div className="checkboxverify">
            <input type="checkbox"></input>
            <p>
              Keep me signed in. <Link className="anchor-tag">
                Details
              </Link>{" "}
              <RxTriangleDown />
            </p>
          </div> */}
          {user.status === undefined && !hasCompletedFirstStep && (
            <div>
              <div className="newformtitle">
                <p>New to Amazon?</p>
              </div>
              <div className="newformbutton">
                <Link to={"/SignUp"}>
                  <button>Create your Amazon account</button>
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* footer */}
      </div>
        <div className="loginpagefooter">
          <div className="loginpagesupport">
            <Link
              className="anchor-tag"
              onClick={() =>
                alert(
                  "The Page your Re-Directing is not a source of prime video Clone."
                )
              }
              target="_blank"
     to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"
   >
              Terms and Privacy Notice
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
            >
              Send us feedback
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
          <div className="loginpagecopyright">
            &copy; 1996-2023, AmazonClone.com, Inc. or its affiliates
          </div>
        </div>
    </div>
    </>
  );
};

export default SignIn;