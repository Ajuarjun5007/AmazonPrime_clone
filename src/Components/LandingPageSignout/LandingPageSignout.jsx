import { useEffect } from "react";
import FooterForSignOut from "./FooterForSIgnOut/FooterForSIgnOut";
import FrontpagecardsSignout from "./FrontpagecardsSignout/FrontpagecardsSignout";
import { NavLink, useLocation } from "react-router-dom";

function LandingPageSignout() {
  return (
    <>
      <NavLink to="/">
        <FrontpagecardsSignout />
        <FooterForSignOut/>
      </NavLink>
    </>
  );
}
export default LandingPageSignout;
