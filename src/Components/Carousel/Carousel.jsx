import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import {BiCheck} from "react-icons/bi";
import { useEffect, useState,useContext } from "react";
import {addtoWatchlist,getWatchlist} from "../../Components/WatchList/WatchlistService"
import { BsThreeDotsVertical } from "react-icons/bs";
import bluetick from "../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import { Link, useLocation } from "react-router-dom";
import { MovieContext } from "../LandingPageSignIn/MoviesProvider";

const CarouselComponent= (props) => {
  const { moviesInfo,type } = props;
  const movieContext = useContext(MovieContext);

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
      slidesToSlide:1,
    },
  };
 
  const location = useLocation();
  const navigate = useNavigate();

    const [isLocationWatchList,setIsLocationWatchList] = useState(false);
    useEffect(()=>{
      
      setIsLocationWatchList(true);
    },[location])



  const [isItemAdded,setIsItemAdded] = useState(false);
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  
  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      setIsLoggedIn(true);
    }
  },[])
  

  const addMovieToWatchList = (movie) => {
    if (localStorage.getItem("userInfo")) {
      setIsItemAdded(!isItemAdded);
      setIsLoggedIn(true);
        addtoWatchlist(movie._id)
        .then((response) => {
          movieContext.setUserWatchList(response.data.data.shows.map((item)=>{
              return item._id;
             }))
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      setIsLoggedIn(false);
      navigate("/SignIn");
    }
  };
  
console.log("mc",movieContext);



  return (
    < div className="carousel-container">

    <div  className="Carousel-header">
        <div className="Carousel-header-prime">Prime</div>
        {type}
      </div>

    <Carousel
      className="cards-carousel"
      responsive={responsive}
      // showDots={true}
      centerMode={true}
      renderButtonGroupOutside={true}
    >
      {moviesInfo && moviesInfo.length > 0 &&
        moviesInfo.map((item, index) => (
          <div className="card-items"
           key={item._id}
           >           
          <Link 
          key={`${item._id}&${index}`} 
          to={{
            pathname: `/videodetails/${item._id}`,
          }}
          onClick={()=>{console.log("clicked")}}
         >
          <img 
           src={item.thumbnail} alt="" className="image-item" 
           />
          </Link>

          <div className="card-details">
            <div className="prime-content">
              <img src={bluetick} alt="" />
              <p>Included with Prime</p>
            </div>
          
            <div id="play-control">
                  { isLoggedIn ?(
                  <Link to={`/FullVideo/${item._id}`}>
                  <button id="play-btn">
                    <BiSolidRightArrow id="play-btn-icon" />
                  </button>
                  </Link>
                  ):(
                    <p className="start-with-prime">Start With Prime</p>
                  )
                  }
              <p>Watch Now</p>
              <div id="watchlist-icon">
                
                <button 
                onClick={()=> {addMovieToWatchList(item)}} 
                id="watchlist-icon-button">
{movieContext?.userWatchList && movieContext?.userWatchList.includes(item._id)?(<BiCheck id="plus-icon"/>):(
                    <FiPlus id="check-icon" />
                  )}
                </button>
                <span className="watchlist-tooltip">Watchlist</span>
                <Link
                  key={`${item._id}&${index}`}
                  to={`/videodetails/${item._id}`}
                >
                <button id="more-icon-button">
                  <BsThreeDotsVertical id="threedots-icon" />
                </button>
                </Link>
                <span className="more-tooltip">More</span>
              </div>
            </div>

            <div className="item-title">
              <p>{item.title}</p>
            </div>


            <div className="item-content">
              <p>{item.description}</p>
            </div>
          </div>
         
        </div>
        ))}
    </Carousel>
    </div>
  );
};
export { CarouselComponent };
