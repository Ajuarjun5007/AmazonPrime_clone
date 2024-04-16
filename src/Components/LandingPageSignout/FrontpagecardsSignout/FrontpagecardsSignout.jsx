import { Link } from "react-router-dom";
import "./FrontpagecardsSignout.css";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

import poster1 from "../../../assets/LandingPageSignoutimages/LandingPageSignOut.jpg";
import poster2 from "../../../assets/LandingPageSignoutimages/Landingpagesignoutposter-2.jpg"
import poster3 from "../../../assets/LandingPageSignoutimages/amazonromote.jpg";
import poster4 from "../../../assets/LandingPageSignoutimages/amazoncartoon.jpg";

import gridImg1 from  "../../../assets/LandingPageSignoutimages/LionsgatePlay.jpg"
import gridImg2 from  "../../../assets/LandingPageSignoutimages/Discovery.jpg"
import gridImg3 from  "../../../assets/LandingPageSignoutimages/Erosnow.jpg"
import gridImg4 from  "../../../assets/LandingPageSignoutimages/MANORAMAMAX.jpg"
import gridImg5 from  "../../../assets/LandingPageSignoutimages/hoichoi.jpg"
import gridImg6 from  "../../../assets/LandingPageSignoutimages/Vrott.png"
import gridImg7 from  "../../../assets/LandingPageSignoutimages/Amc.png"
import gridImg8 from  "../../../assets/LandingPageSignoutimages/Docubay.jpg"
import gridImg9 from  "../../../assets/LandingPageSignoutimages/Mubi.jpg"
import gridImg10 from  "../../../assets/LandingPageSignoutimages/iWonder.png"
import gridImg11 from  "../../../assets/LandingPageSignoutimages/Stingray.png"
import gridImg12 from  "../../../assets/LandingPageSignoutimages/Curiosity.png"



import { useEffect, useState } from "react";
function FrontpagecardsSignOut() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);

  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      setIsLoggedIn(true);
    }
  },[])

  console.log("login",isLoggedIn);

  return (
    <>
    {/* top two cards */}
      <div className="container-1">

        <div className="Signoutposter-1">
          <img
            src={poster1}
            alt="image-1"
          />
          <div className="Ad-1">
            <div className="heading-1">
              <h1>Welcome to Prime Video</h1>
            </div>
            <p>
              Watch the latest movies, TV shows, and award-winning Amazon
              Originals
            </p>
              {
                isLoggedIn?(
                  <Link to='SubscriptionPage'>
                    <button className="frontpage-btn">
                  Join prime
                 </button>
              </Link>
                ):(
                  <Link to='SignIn'>
                  <button className="frontpage-btn">
                  Sign In to Join prime
               </button>
            </Link>
                )
              }
          </div>

        </div>

        <div className="Signoutposter-2">
          <img
            src={poster2}
            alt="image-2"
          />
          <div className="Ad-2">
            <div className="heading-2">
              <h1>Movie rentals on Prime Video</h1>
            </div>
            <p>Early access to new movies,before digital subscription</p>
            {
                isLoggedIn?(
                  <Link to='comingsoon'>
                  <button className="frontpage-btn">Rent now</button>
                  </Link>
                ):(
                  <Link to='SignIn'>
            <button className="frontpage-btn">Rent now</button>
            </Link>
                )
              }
           
          </div>
        </div>
      </div>
        {/* grid cards */}
      <div className="secondDiv">
        <div className="secondDiv-content">
          <p className="yourfavouritediv">
            Your favorite channels all in one place
          </p>
          <p className="firstptag">
            With Prime Video Channels, find shows and movies from your favorite
            channels all in one place. Enjoy with an add-on subscription to
            Channels of your choice
          </p>
        </div>
        <div className="gridcontainer">
            <Link to='comingsoon'>
          <div className="grid-item">
            <img src={gridImg1}></img>
          </div>
            </Link>
            <Link to='comingsoon'>
          <div className="grid-item">
            <img src={gridImg2}></img>
          </div>
          </Link>
          <Link to='comingsoon'>
          <div className="grid-item">
            <img src={gridImg3} alt="" />
          </div>
          </Link>
          <Link to='comingsoon'>
          <div className="grid-item">
            <img src={gridImg4} alt="image-3" />
          </div>
          </Link>
          <Link to='comingsoon'>
          <div className="grid-item">
            <img src={gridImg5}></img>
          </div>
          </Link>
          <Link to='comingsoon'>
          <div className="grid-item">
            <img src={gridImg6}></img>
          </div>
          </Link>
          <Link to='comingsoon'>
          <div className="grid-item">
            <img src={gridImg7} alt="" />
          </div>
          </Link>
          <Link to='comingsoon'>
          <div className="grid-item">
            <img src={gridImg8}></img>
          </div>
          </Link>
          <Link to='comingsoon'>
          <div className="grid-item">
            <img src={gridImg9}></img>
          </div>
          </Link>
          <Link to='comingsoon'>
          <div className="grid-item">
            <img src={gridImg10}></img>
          </div>
          </Link>

          <Link to='comingsoon'>

          <div className="grid-item">
            <img src={gridImg11}></img>
          </div>
          </Link>

          <Link to='comingsoon'>
          <div className="grid-item">
            <img src={gridImg12}></img>
          </div>
          </Link>

        </div>
      </div>
      {/* bottom two cards */}
      <div className="container-2">
        <div className="Signoutposter-3">
          <img
            src={poster3}
            alt=""
          />
          <div className="Ad-3">
            <div className="heading-3">
              <h2>Even better with Fire TV Stick</h2>
            </div>
            <p>
            The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote 
            and say the name of the title you want to watch to find it in seconds.
            </p>
            <Link to='comingsoon'>
            <button className="getStarted">Get Started</button>
            </Link>
          </div>
        </div>

        <div className="Signoutposter-4">
          <img
            src={poster4}
            alt=""
          />
          <div className="Ad-4">
            <div className="heading-4">
              <h1>Family Friendly</h1>
            </div>
            <p>With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
              </p>
            <Link to='comingsoon'>
            <button className="getStarted">Get started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default FrontpagecardsSignOut;
