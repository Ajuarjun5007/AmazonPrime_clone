import "./PrimeBenefits.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  topCarouselcards,
  PrimeShippingBenefitscards,
  PrimeMusicCards,
  PrimeReadingCards,
  PrimeVideoCards,
  AmazonPaycards,
} from "../PrimeBenefitsConstant";
import Footer from "../Footer/Footer";
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter:100,
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

<>
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
          {topCarouselcards
            .map((item) => (
              
              // <Link key={`${item._id}&${index}`} to={`/videodetails/${item._id}`}>
              <div className="poster-items">
                <div className="poster-content ">
                 
                </div>
               
                <img 
                src={item}
                // src={"https://i.pinimg.com/originals/17/c5/6b/17c56b759c8b2e9a95cfcd70e9878b72.jpg"}

                 alt="" />
              </div>
              // </Link>
            ))}
        

       
        </Carousel>







    
    <div class="Prime-ben">

      <div className="Prime-Shipping-benefits-header">
        Prime Shipping benefits
      </div>

      <div className="Prime-Shipping-benefits-container">
        {PrimeShippingBenefitscards.map((item) => (
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
        ))}
      </div>
      <div className="Amazon-pay-header">
        Amazon Pay ICICI card benefits
      </div>
      <div className="Amazon-pay-container">
        {AmazonPaycards.map((item) => (
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
        ))}
      </div>
      <div className="prime-music-header">
        Amazon Pay ICICI card benefits
      </div>
      <div className="prime-music-container">
        {PrimeMusicCards.map((item) => (
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
        ))}
      </div>
      <div className="prime-reading-header">
        Prime Reading benefits
      </div>
      <div className="prime-reading-container">
        {PrimeReadingCards.map((item) => (
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
        ))}
      </div>
      <div className="prime-video-header">
        Prime Video benefits
      </div>
      <div className="prime-video-container">
        {PrimeVideoCards.map((item) => (
          <div className="prime-benefits-card">
            <img src={item} alt="" key={item} />
          </div>
        ))}
      </div>
      <FooterForSignIn/>
    </div>
    </> 
  );
}
export { PrimeBenefits };
