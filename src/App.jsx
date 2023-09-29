import { useState } from 'react'
import './App.css'
import LandingPageSignout from './Components/LandingPageSignout/LandingPageSignout.jsx'
import LandingPageSignIn from './Components/LandingPageSignIn/LandingPageSignIn'
import VideoInfo from './Components/VideoInfo/VideoInfo.jsx'
import CategoryPage from './Components/CategoryPage/CategoryPage'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavbarforSignIn from './Components/NavbarForSignIn/NavbarForSignIn'
import FooterForSignIn from './Components/FooterforSignIn/FooterForSIgnIn'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'

function App() {

  return (
    <>
    
     <NavbarforSignIn/>
    <Routes>
      {/* <LandingPageSignout /> */}
      <Route path='/' element={<LandingPageSignout/>}/>
      {/* <LandingPageSignIn/> */}
      <Route path='/home' element={<LandingPageSignIn/>}/>
      <Route path='/videodetails/:id' element={<VideoInfo/>}/>

      {/* <VideoInfo/> */}
      {/* <Signup/> */}
      {/* <CategoryPage/> */}
      <Route path='/categorypage' element={<CategoryPage/>}/> 
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
      {/* <SignIn/>
      <SignUp/> */}
            {/* <ApiFetch/> */}
      {/* <CategoryPage/> */}
      {/* <Footer/> */}
      {/* <FooterForSignIn/> */}
      </>
  )
}

export default App;
