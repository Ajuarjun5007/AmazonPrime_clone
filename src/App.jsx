import { useState, useEffect } from "react";
import "./App.css";
import LandingPageSignout from "./Components/LandingPageSignout/LandingPageSignout.jsx";
import { WatchList } from "./Components/WatchList/WatchList";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarforSignIn from "./Components/NavbarForSignIn/NavbarForSignIn";
import SignUp from "./Components/SignUp/SignUp";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import { PrimeBenefits } from "./Components/PrimeBenefits/PrimeBenefits";
import { SignInProvider } from "./Components/SignIn/SignInProvider";
import WatchListAll from "./Components/WatchList/WatchListAll";
import MobileNavbar from "./Components/MobileNavbar/MobileNavbar";
import { useScreenSize } from "./Components/useScreenSize";
import MobileMenuContent from "./Components/MobileNavbar/MobileMenuContent";
import ManageProfilePage from "./Components/SubscriptionPage/ManageProfilePage.jsx";
import SubscriptionPage from "./Components/SubscriptionPage/SubscriptionPage";
import PaymentPage from "./Components/SubscriptionPage/PaymentPage";
import FullVideo from "./Components/VideoInfo/FullVideo.jsx";
import { Gridcards } from "./Components/Gridcards/Gridcards.jsx";
import { MoviesProvider } from "./Components/LandingPageSignIn/MoviesProvider.jsx";
function App() {
  const [isNavBarShow, SetIsNavBarShow] = useState(true);

  const [mobileNavBar, setMobileNavBar] = useState(false);
  const location = useLocation();
  const hideNavbarFor = [
    "SignIn",
    "SignUp",
    "SubscriptionPage",
    "FullVideo",
    "ManageProfilePage",
  ];

  useEffect(() => {
    if (hideNavbarFor.includes(location.pathname.split("/")[1])) {
      SetIsNavBarShow(false);
    } else {
      SetIsNavBarShow(true);
    }
  }, [location]);

  const handleMobileNavbar = (value) => {
    setMobileNavBar(value);
  };

  const screenSize = useScreenSize();

  let isMobile = screenSize < 880;

  return (
    <>
      {mobileNavBar && (
        <div className="mobileNavBarStyle">
          <MobileMenuContent handleMobileNavbar={handleMobileNavbar} />
        </div>
      )}
      {isNavBarShow && <NavbarforSignIn />}

      {isMobile && isNavBarShow && (
        <div className={`${mobileNavBar ? "active" : ""}`}>
          <MobileNavbar handleMobileNavbar={handleMobileNavbar} />
        </div>
      )}
      <Routes>
        <Route path="/" element={<LandingPageSignout />} />
        <Route path="/home" element={<MoviesProvider type="home" />} />
        <Route path="/SubscriptionPage" element={<SubscriptionPage />} />
        <Route path="/SubscriptionPage/PaymentPage" element={<PaymentPage />} />
        <Route path="/FullVideo/:id" element={<FullVideo />} />
        <Route
          path="/videodetails/:id"
          element={<MoviesProvider type="/videodetails/:id" />}
        />
        <Route
          path="/CategorySelected"
          element={<MoviesProvider type="categorySelected" />}
        />
        <Route path="/ManageProfilePage" element={<ManageProfilePage />} />
        <Route path="/Gridcards" element={<Gridcards />} />
        <Route path="/SignIn" element={<SignInProvider />} />
        <Route
          path="/SearchPage"
          element={<MoviesProvider type="SearchPage" />}
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/PrimeBenefits" element={<PrimeBenefits />} />
        <Route path="/Watchlist" element={<WatchList/>} />
        <Route path="/categorypage" element={<CategoryPage />} />
        <Route
          path="/categorytypepage"
          element={<MoviesProvider type="categorytypepage" />}
        />
        <Route path="/WatchListAll" element={<WatchListAll />} />
      </Routes>
    </>
  );
}

export default App;
