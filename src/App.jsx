import { useLayoutEffect, useState } from "react";
import "./App.css";
import LandingPageSignout from "./Components/LandingPageSignout/LandingPageSignout.jsx";
import LandingPageSignIn from "./Components/LandingPageSignIn/LandingPageSignIn";
import VideoInfo from "./Components/VideoInfo/VideoInfo.jsx";
import { WatchList } from "./Components/WatchList/WatchList";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import Footer from "./Components/Footer/Footer";
import CategorySelected from "./Components/CategorySelected/CategorySelected";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavbarforSignIn from "./Components/NavbarForSignIn/NavbarForSignIn";
import FooterForSignIn from "./Components/FooterforSignIn/FooterForSIgnIn";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import ComingSoon, {} from "../src/Components/Coming Soon/ComingSoon"
import {SearchPage} from './Components/SearchPage/SearchPage'
import { PrimeBenefits } from "./Components/PrimeBenefits/PrimeBenefits";
import { SignInProvider } from "./Components/SignIn/SignInProvider";

function App() {
  const [isNavBarShow, SetIsNavBarShow] = useState(true);

  const NavBarControl = (value) => {
    if (value == "/SignIn" || value == "/SignUp" || value) {
      SetIsNavBarShow(false);
    }
  };

  return (
    <>
      {isNavBarShow && <NavbarforSignIn />}

      <Routes>
        {/* <LandingPageSignout /> */}

        <Route path="/" element={<LandingPageSignout/>} />
        {/* <LandingPageSignIn/> */}

        <Route path="/home" element={<LandingPageSignIn/>} />
        <Route path="/videodetails/:id" element={<VideoInfo NavBarControl={NavBarControl}/>} />
        <Route path="/CategorySelected" element={<CategorySelected/>} />
        
        {/* <VideoInfo/> */}
        <Route
          path="/SignIn"
          element={<SignInProvider NavBarControl={NavBarControl}  />}
        />
        <Route path="/SearchPage" element={<SearchPage/>}/>
        <Route
          path="/SignUp"
          element={<SignUp NavBarControl={NavBarControl} />}
        />
        <Route path="/comingsoon" element={<ComingSoon/>}/>
        <Route path="/PrimeBenefits" element={<PrimeBenefits />} />
        <Route path="/Watchlist" element={<WatchList />} />
        {/* <SignIn/> */}
        {/* <CategoryPage/> */}
        <Route path="/categorypage" element={<CategoryPage />} />
        {/* <Footer/> */}
      </Routes>

      {/* <div
        style={{
          position: "sticky",
          top: "10px",
          backgroundColor: "rgba(0, 5, 13, 0)",
          background: "red",
          zIndex: "1",
          width: "100%",
        }}
      >
        <NavbarforSignIn/>
      </div>

      <LandingPageSignout /> */}
      {/* <LandingPageSignIn/> */}
      {/* <VideoInfo/> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <ApiFetch/> */}
      {/* <CategoryPage/> */}
      {/* <Footer/> */}
      {/* <FooterForSignIn/> */}
    </>
  );
}

export default App;
