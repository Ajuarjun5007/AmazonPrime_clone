import "./PrimeBenefits.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  PrimeShippingBenefitscards,
  PrimeMusicCards,
  PrimeReadingCards,
  PrimeVideoCards,
  AmazonPaycards,
} from "../PrimeBenefitsConstant";
import { Link } from "react-router-dom";
import top_1 from "../../assets/PrimeBenefitsImages/top-1.webp"
import top_2 from "../../assets/PrimeBenefitsImages/top-2.webp"
import top_3 from "../../assets/PrimeBenefitsImages/top-3.webp"
import top_4 from "../../assets/PrimeBenefitsImages/top-4.webp"
import top_5 from "../../assets/PrimeBenefitsImages/top-5.webp"
import content_img_2 from "../../assets/PrimeBenefitsImages/pm-postercontent-2.webp"
import content_img_3 from "../../assets/PrimeBenefitsImages/pm-postercontent-3.webp"
import content_img_4 from "../../assets/PrimeBenefitsImages/pm-postercontent-4.webp"
import content_img_5 from "../../assets/PrimeBenefitsImages/pm-postercontent-5.webp"

import Footer from "../Footer/Footer";
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
    // partialVisibilityGutter:100,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, 
  },
};




function PrimeBenefits() {
  return (

<div style={{backgroundColor:"#00050d"}}>

    {/* <Carousel
          responsive={responsive}
          showDots={true}
          partialVisible={true}
          renderDotsOutside={true}
          renderButtonGroupOutside={true}
          autoPlay={false}
          infinite={true}
          autoPlaySpeed={3000}
        >
          
              
              <div className="pm-items">
                
                <div className="pm-poster-content ">
                <Link to={"/comingsoon"}>
                 <button className="pm-button">More Details</button>
                </Link>
                </div>
                <img 
                src={top_1}
                 alt="prime-top-carousel-image" />
              </div>
            

        <div className="pm-items">
                <div className="pm-poster-content ">
                <div className="pm-image-container">
                <img src={content_img_2} alt="" />
                </div>
                <Link to={"/comingsoon"}>
                 <button className="pm-button">More Details</button>
                 </Link>
                </div>
                <img 
                src={top_2}
                 alt="prime-top-carousel-image" />
              </div>


        <div className="pm-items">
                <div className="pm-poster-content ">
                <div className="pm-image-container">
                <img src={content_img_3} alt="" />
                </div>
                <Link to={"/comingsoon"}>
                 <button className="pm-button">More Details</button>
                 </Link>
                </div>
                <img 
                src={top_3}
                 alt="prime-top-carousel-image" />
              </div>


        <div className="pm-items">
                <div className="pm-poster-content ">
                <div className="pm-image-container">
                <img src={content_img_4} alt="" />
                </div>
                <Link to={"/comingsoon"}>
                 <button className="pm-button">More Details</button>
                 </Link>
                </div>
                <img 
                src={top_4}
                 alt="prime-top-carousel-image" />
              </div>


        <div className="pm-items">
                <div className="pm-poster-content ">
                <div className="pm-image-container">
                <img src={content_img_5} alt="" />
                </div>
                <Link to={"/comingsoon"}>
                 <button className="pm-button">More Details</button>
                 </Link>
                </div>
                <img 
                src={top_5}
                 alt="prime-top-carousel-image" />
              </div>

        </Carousel> */}

    
    <div class="Prime-ben">

      <div className="Prime-Shipping-benefits-header">
        Prime Shipping benefits
      </div>

      <div className="Prime-Shipping-benefits-container">
        {PrimeShippingBenefitscards.map((item) => (
                <Link to={"/comingsoon"}>
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
          </Link>
        ))}
      </div>
      <div className="Amazon-pay-header">
        Amazon Pay ICICI card benefits
      </div>
      <div className="Amazon-pay-container">
        {AmazonPaycards.map((item) => (
                <Link to={"/comingsoon"}>

          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
          </Link>
        ))}
      </div>
      <div className="prime-music-header">
        Amazon Pay ICICI card benefits
      </div>
      <div className="prime-music-container">
        {PrimeMusicCards.map((item) => (
                <Link to={"/comingsoon"}>
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
          </Link>
        ))}
      </div>
      <div className="prime-reading-header">
        Prime Reading benefits
      </div>
      <div className="prime-reading-container">
        {PrimeReadingCards.map((item) => (
                <Link to={"/comingsoon"}>
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
          </Link>
        ))}
      </div>
      <div className="prime-video-header">
        Prime Video benefits
      </div>
      <div className="prime-video-container">
        {PrimeVideoCards.map((item) => (
                <Link to={"/comingsoon"}>
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
          </Link>
        ))}
      </div>
      <FooterForSignIn/>
    </div>
    </div> 
  );
}
export { PrimeBenefits };
