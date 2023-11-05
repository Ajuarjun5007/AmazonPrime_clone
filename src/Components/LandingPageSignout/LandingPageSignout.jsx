import { useEffect } from "react";
import NavbarforSignIn from "../NavbarForSignIn/NavbarForSignIn";
import FooterForSignOut from "./FooterForSIgnOut/FooterForSIgnOut";
import FrontpagecardsSignout from "./FrontpagecardsSignout/FrontpagecardsSignout";
import { NavLink, useLocation } from "react-router-dom";

function LandingPageSignout() {



  return (
    <>
      <NavLink to="/">
        <div
          style={{
            position: "sticky",
            top: "10px",
            backgroundColor: "rgba(0, 5, 13, 0)",
            background: "red",
            zIndex: "1",
            width: "100%",
          }}
        ></div>
        <FrontpagecardsSignout />
        <FooterForSignOut/>
      </NavLink>
    </>
  );
}
export default LandingPageSignout;
