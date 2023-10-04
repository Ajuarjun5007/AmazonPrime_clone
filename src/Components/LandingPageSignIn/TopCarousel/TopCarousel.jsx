import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bluetick from "../../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import "./TopCarousel.css";
import { useState, useEffect } from "react";

import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BiInfoCircle } from "react-icons/bi";
import { movieList } from "../../ApiFetch";

function TopCarousel() {
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
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const [moviesInfo, setMoviesInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await movieList();
        setMoviesInfo(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
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
          {moviesInfo &&
            moviesInfo.slice(0, 10)
            .map((item, index) => (
              <div className="poster-items">
                <div className="poster-content">
                  <div className="poster-title">
                    <h2>{item.title}</h2>
                  </div>
                  <div className="prime-details">
                    <img src={bluetick} alt="" />
                    <p>Included with Prime</p>
                  </div>
                  <div className="poster-buttons">
                    <div className="poster-button-play">
                      <button className="play">
                        <BiSolidRightArrow className="play-arrow-icon" />
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
                <img src={item.thumbnail} alt="" />
              </div>
            ))}

       
        </Carousel>
      </div>
    </>
  );
}
export default TopCarousel;
