import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CardsCarousel.css";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import bluetick from "../../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import { Link } from "react-router-dom";

function CardsCarousel({moviesInfo,type}) {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };


  
  let array=[];
 

  // for(let item of moviesInfo){
  //   if(item.keywords.includes('romance') && item.type==='movie'){
  //     console.log("item : ",item);
  //   }
  // }


  return (
    <>
      <div  className="Carousel-header">
        <div className="Carousel-header-prime">Prime</div>
        {type}
      </div>
        <Carousel
          responsive={responsive}
          showDots={true}
          centerMode={true}
          renderButtonGroupOutside={true}
        >
          {moviesInfo && moviesInfo
            .filter((item)=> item.type===`${type}`)
            .map((item) => (
              <div className="card-items" key={item._id}>
                
                <Link to={'/videodetails'}>
                <img src={item.thumbnail} alt="" className="image-item" />
                </Link>
                <div className="card-details">
                  <div className="prime-content">
                    <img src={bluetick} alt="" />
                    <p>Included with Prime</p>
                  </div>
                  <div className="item-title">
                    <h1>{item.title}</h1>
                  </div>
                  <div id="play-control">
                    <button id="play-btn">
                      <BiSolidRightArrow id="play-btn-icon" />
                    </button>
                    <p>Watch Now</p>
                    <div id="watchlist-icon">
                      <button id="watchlist-icon-button">
                        <FiPlus id="plus-icon" />
                      </button>
                      <button id="watchlist-icon-button">
                        <BsThreeDotsVertical id="threedots-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Carousel>
        ;
    </>
  );
}
export default CardsCarousel;
