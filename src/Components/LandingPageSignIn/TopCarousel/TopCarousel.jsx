import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import poster_1 from "../../../assets/LandingPageSignInImages/TopCarousel/jailerposter.webp";
import poster_2 from "../../../assets/LandingPageSignInImages/TopCarousel/wheelofimage.webp";
import poster_3 from "../../../assets/LandingPageSignInImages/TopCarousel/sittinginbar.webp";
import poster_4 from "../../../assets/LandingPageSignInImages/TopCarousel/ranveeralia.webp";
import poster_5 from "../../../assets/LandingPageSignInImages/TopCarousel/lovekills.webp";
import poster_6 from "../../../assets/LandingPageSignInImages/TopCarousel/kolai.webp";
import bluetick from "../../../assets/LandingPageSignInImages/TopCarousel/bluetick.png"
import "./TopCarousel.css";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BiInfoCircle } from "react-icons/bi";
function TopCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter:100
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className="App">
        <Carousel
          responsive={responsive}
          showDots={true}
          // centerMode={true}
          partialVisible={true}
          renderDotsOutside={true}
          renderButtonGroupOutside={true}
          autoPlay={false}
          infinite={true}
          autoPlaySpeed={3000}
        >
          {/* item-1 */}
          <div className="poster-items">
            
          <div className="poster-content">
            
                <div className="poster-title">
                  <h2>JAILER</h2>
                </div>
                <div className="prime-details">
              <img src={bluetick} alt=""/>
              <p>Included with Prime</p>
                </div>
                <div className="poster-buttons">
                  <div className="poster-button-play">
                    <button className="play">
                      <BiSolidRightArrow className="play-icon" />
                    </button>
                    <p>Play</p>
                    <div className="poster-icons">
                    
                    <button className="watchList poster-icons-button">
                      <FiPlus className="plus" />
                    </button>
                    <button className="details poster-icons-button">
                      <BiInfoCircle className="info" />
                    </button>
                    </div>
                  </div>
                
                </div>
              </div> 
           <img src={poster_1} alt=""/>
          </div>



          {/* item 2 */}
          <div className="poster-items">
          <div className="poster-content">
                <div className="poster-title">
                  <h2>Wheels Of Time</h2>
                </div>
                <div className="prime-details">
              <img src={bluetick} alt=""/>
              <p>Included with Prime</p>
                </div>
                <div className="poster-buttons">
                  <div className="poster-button-play">
                    <button className="play">
                      <BiSolidRightArrow className="play-icon" />
                    </button>
                    <p>Play</p>
                    <div className="poster-icons">
                    
                    <button className="watchList poster-icons-button">
                      <FiPlus className="plus" />
                    </button>
                    <button className="details poster-icons-button">
                      <BiInfoCircle className="info" />
                    </button>
                    </div>
                  </div>
                
                </div>
              </div> 
              <img src={poster_2} alt="" />
          </div>
          {/* item 3 */}
          <div className="poster-items">
          <div className="poster-content">
                <div className="poster-title">
                  <h2>Sitting in Bars with Cake </h2>
                </div>
                <div className="prime-details">
              <img src={bluetick} alt=""/>
              <p>Included with Prime</p>
                </div>
                <div className="poster-buttons">
                  <div className="poster-button-play">
                    <button className="play">
                      <BiSolidRightArrow className="play-icon" />
                    </button>
                    <p>Play</p>
                    <div className="poster-icons">
                    
                    <button className="watchList poster-icons-button">
                      <FiPlus className="plus" />
                    </button>
                    <button className="details poster-icons-button">
                      <BiInfoCircle className="info" />
                    </button>
                    </div>
                  </div>
                
                </div>
              </div> 
              <img src={poster_3} alt="" />
          </div>
          <div className="poster-items">
          <div className="poster-content">
                <div className="poster-title">
                  <h2>Rocky Aur Rani Ki Prem Kahani</h2>
                </div>
                <div className="prime-details">
              <img src={bluetick} alt=""/>
              <p>Included with Prime</p>
                </div>
                <div className="poster-buttons">
                  <div className="poster-button-play">
                    <button className="play">
                      <BiSolidRightArrow className="play-icon" />
                    </button>
                    <p>Play</p>
                    <div className="poster-icons">
                    
                    <button className="watchList poster-icons-button">
                      <FiPlus className="plus" />
                    </button>
                    <button className="details poster-icons-button">
                      <BiInfoCircle className="info" />
                    </button>
                    </div>
                  </div>
                
                </div>
              </div> 
              <img src={poster_4} alt="" />
          </div>
          <div className="poster-items">
          <div className="poster-content">
                <div className="poster-title">
                  <h2>Love kills</h2>
                </div>
                <div className="prime-details">
              <img src={bluetick} alt=""/>
              <p>Included with Prime</p>
                </div>
                <div className="poster-buttons">
                  <div className="poster-button-play">
                    <button className="play">
                      <BiSolidRightArrow className="play-icon" />
                    </button>
                    <p>Play</p>
                    <div className="poster-icons">
                    
                    <button className="watchList poster-icons-button">
                      <FiPlus className="plus" />
                    </button>
                    <button className="details poster-icons-button">
                      <BiInfoCircle className="info" />
                    </button>
                    </div>
                  </div>
                
                </div>
              </div>
              <img src={poster_5} alt="" />
          </div>
          <div className="poster-items">
          <div className="poster-content">
                <div className="poster-title">
                  <h2>kolai</h2>
                </div>
                <div className="prime-details">
              <img src={bluetick} alt=""/>
              <p>Included with Prime</p>
                </div>
                <div className="poster-buttons">
                  <div className="poster-button-play">
                    <button className="play">
                      <BiSolidRightArrow className="play-icon" />
                    </button>
                    <p>Play</p>
                    <div className="poster-icons">
                    
                    <button className="watchList poster-icons-button">
                      <FiPlus className="plus" />
                    </button>
                    <button className="details poster-icons-button">
                      <BiInfoCircle className="info" />
                    </button>
                    </div>
                  </div>
                </div>
              </div>
              <img src={poster_6} alt="" />
          </div>
        </Carousel>
      </div>
    </>
  );
}
export default TopCarousel;
