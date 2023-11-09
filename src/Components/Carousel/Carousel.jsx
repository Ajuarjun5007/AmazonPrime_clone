import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
import { useNavigate } from "react-router-dom";

import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import {BiCheck} from "react-icons/bi";
import { useEffect, useState } from "react";

import {addtoWatchlist} from "../../Components/WatchList/WatchlistService"

import { BsThreeDotsVertical } from "react-icons/bs";
import bluetick from "../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import { Link, useLocation } from "react-router-dom";
import { getWatchlist } from "../../Components/WatchList/WatchlistService";
const CarouselComponent= (props) => {
  const { moviesInfo,type } = props;
  
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
  console.log("loc",location);
  const navigate = useNavigate();

    const [isLocationWatchList,setIsLocationWatchList] = useState(false);
    useEffect(()=>{
      
      setIsLocationWatchList(true);
    },[location])



  const [isItemAdded,setIsItemAdded] = useState(false);
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  
  const addMovieToWatchList = (movie) => {
    if (localStorage.getItem("userInfo")) {
      setIsItemAdded(!isItemAdded);
      setIsLoggedIn(true);
      addtoWatchlist(movie._id)
        .then((response) => {
          console.log("repo", response);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } else {
      setIsLoggedIn(false);
      navigate("/SignIn");
    }
  };
  let watchListId=[];
  useEffect(()=>{ 
    // if(!isLoaded){
    getWatchlist()
    .then(response=>{
       const watchListItems = response.data.data.shows;
       console.log("watchList",watchListItems);
       watchListId = watchListItems.map((item)=>{
        return item._id;
       })
       console.log("watchId",watchListId);
       watchListId.map((item)=>{
      if(item==="64cffee700bad552e8dcd507" ){
          console.log("id found");
      }
     })
      })

// }
},[isItemAdded])

const filteredMovies = moviesInfo.filter((item) => item.type === type);
console.log("fm",filteredMovies);

  return (
    < div className="carousel-container">

    <div  className="Carousel-header">
      {/* {
        isLocationWatchList && <div className="Carousel-header-prime">WatchList-{type}</div>
      } */}
        <div className="Carousel-header-prime">Prime</div>
        {type}
      </div>

    <Carousel
      className="cards-carousel"
      responsive={responsive}
      showDots={true}
      centerMode={true}
      renderButtonGroupOutside={true}
    >
      {moviesInfo &&
        moviesInfo.map((item, index) => (
          <div className="card-items"
           key={item._id}
           >
                
          <Link 
          key={`${item._id}&${index}`} 
          to={{
            pathname: `/videodetails/${item._id}`,
          }}
         >
          <img src={item.thumbnail} alt="" className="image-item" />
          </Link>

          <div className="card-details">
            <div className="prime-content">
              <img src={bluetick} alt="" />
              <p>Included with Prime</p>
            </div>
          
            <div id="play-control">
              <button id="play-btn">
                <BiSolidRightArrow id="play-btn-icon" />
              </button>
              <p>Watch Now</p>
              <div id="watchlist-icon">
                
                <button 
                onClick={()=> {addMovieToWatchList(item)}} 
                id="watchlist-icon-button">
                 {/* {console.log("idavail",watchListId.includes(item._id))}
                 {console.log("id",item._id)} */}
                 {/* {console.log("idavailpart",watchListId.includes(64cffee700bad552e8dcd507))} */}

                  {watchListId && watchListId.includes(item._id)?(<BiCheck id="plus-icon"/>):(
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
