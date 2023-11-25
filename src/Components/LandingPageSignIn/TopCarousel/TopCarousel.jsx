import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bluetick from "../../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import "./TopCarousel.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BiCheck } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";

// import { movieList } from "../../ApiFetch";
import { addtoWatchlist, getWatchlist } from "../../WatchList/WatchlistService";

import { Link } from "react-router-dom";
import "animate.css";
import image_default from "../../../assets/TopCarouselDefaultImages/topcarousel_Default_1.webp"
function TopCarousel(props) {
  const { moviesInfo } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 100,
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

  const navigate = useNavigate();

  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [localWatchlist, setLocalWatchlist] = useState([]);
  const user = localStorage.getItem("userInfo");
  
  useEffect(() => {
    getWatchlist().then((response) => {
      const watchListItems = response.data.data.shows;
      setLocalWatchlist(
        watchListItems.map((item) => {
          return item._id;
        })
      );
      
      if(localStorage.getItem("userInfo")){
        setIsLoggedIn(true);
      }
    });
  }, [user]);


  const addMovieToWatchList = (movie, event) => {
    event.preventDefault();
    if (localStorage.getItem("userInfo")) {
      setIsItemAdded(!isItemAdded);
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      if (localWatchlist.includes(movie._id)) {
        setLocalWatchlist((prevWatchlist) =>
          prevWatchlist.filter((id) => id !== movie._id)
        );
      }else{
        setLocalWatchlist((prevWatchlist)=>[...prevWatchlist, movie._id]);
      }

      addtoWatchlist(movie._id)
        .then((response) => {
        })
        .catch((err) => {
          console.log("error", err);
        });


    } else {
      navigate("/SignIn");
    }
  };


  return (
    <>
      <div className="App">
        <Carousel
          responsive={responsive}
          showDots={true}
          partialVisible={true}
          renderDotsOutside={true}
          renderButtonGroupOutside={true}
          autoPlay={false}
          infinite={true}
          autoPlaySpeed={3000}
        >
          {/* item-1 */}
          {moviesInfo &&
            moviesInfo.slice(0, 10).map((item, index) => (
              <Link
                key={`${item._id}&${index}`}
                to={`/videodetails/${item._id}`}
              >
                <div className="poster-items">
                  <div className="poster-content ">
                    <div className="poster-title">
                      <p>{item.title}</p>
                    </div>
                    {isLoggedIn && (
                      <div className="prime-details">
                        <img src={bluetick} alt="" />
                        <p>Included with Prime</p>
                      </div>
                    )}
                    <div className="poster-buttons">
                      <div className="poster-button-play">
                        {isLoggedIn ? (
                          <div className="logged-in-play">
                            <Link to={`/FullVideo/${item._id}`}>
                            <button className="play">
                              <BiSolidRightArrow className="play-arrow-icon" />
                            </button>
                            </Link>
                            <p>Play</p>
                          </div>
                        ) : (
                            <Link to={"/SignIn"}>
                          <div className="free-trial-content">
                            <img src={bluetick} alt="" />
                            <p>Watch with Prime</p>
                          </div>
                            </Link>
                        )}
                        <div className="poster-icons">
                          <button
                            onClick={(event) => {
                              addMovieToWatchList(item, event);
                            }}
                            className="watchList poster-icons-button"
                          >
                            {localWatchlist && localWatchlist.includes(item._id) ? (
                              <BiCheck className="plus" />
                            ) : (
                              <FiPlus className="plus" />
                            )}
                          </button>
                          <span className="poster-watchlist-tooltip">
                            Watchlist
                          </span>
                          <Link
                            key={`${item._id}&${index}`}
                            to={`/videodetails/${item._id}`}
                          >
                            <button className="details poster-icons-button">
                              <BiInfoCircle className="info" />
                            </button>
                            <span className="poster-details-tooltip">
                              Details
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <img
                    src={image_default}
                    // src={"https://i.pinimg.com/originals/17/c5/6b/17c56b759c8b2e9a95cfcd70e9878b72.jpg"}

                    alt=""
                  />
                </div>
              </Link>
            ))}
        </Carousel>
      </div>
    </>
  );
}
export default TopCarousel;
