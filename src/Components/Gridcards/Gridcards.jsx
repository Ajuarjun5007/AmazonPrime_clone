import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";
import { Link } from 'react-router-dom';
import { useEffect, useState ,useContext} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import {addtoWatchlist,getWatchlist} from '../WatchList/WatchlistService' 
import { BiSolidRightArrow } from "react-icons/bi";
import {BiCheck} from "react-icons/bi";

import { MovieContext } from "../LandingPageSignIn/MoviesProvider";

import { FiPlus} from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import { BsThreeDotsVertical } from "react-icons/bs";
import bluetick from "../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import "./Gridcards.css"

function Gridcards(props){
 
  
  const {cardsInfo} = props;

  const movieContext = useContext(MovieContext);

    const addMovieToWatchList = (movie) => {
      addtoWatchlist(movie._id).then(response=> {
        movieContext.setUserWatchList(response.data.data.shows.map((item)=>{
          return item._id;
         }))
        setIsWatchListClicked(!isWatchListClicked);
      })
      .catch(err=>{
        console.log("error",err)
      })
    }
   const location = useLocation();
   console.log("location",location);
  let searchResult=[];


  
   if(location.pathname!=="/SearchPage"){
      searchResult=location.state.data;
   }else{
      searchResult = cardsInfo;
   }


  return(
    <>
   <div style={{backgroundColor:"#00050d",
   paddingBottom:"200px"} }>
   <div className="gridcards-container">
        {
        searchResult
            // .filter((item)=> item.type===`${type}`)
            // .slice(0,20)
            .map((item,index) => (
              
              <div className="card-items" key={item._id}>
                
              <Link key={`${item._id}&${index}`} to={`/videodetails/${item._id}`}>
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
                    onClick={
                      ()=> addMovieToWatchList(item) 
                    }
                    id="watchlist-icon-button">
                       {/* <BiCheck id="plus-icon"/>  */}
                       {movieContext?.userWatchList && movieContext?.userWatchList.includes(item._id)?(<BiCheck id="plus-icon"/>):(
                    <FiPlus id="check-icon" />
                  )}
                    </button>
                    <span className="watchlist-tooltip">Watchlist</span>
                    <button id="more-icon-button">
                      <BsThreeDotsVertical id="threedots-icon" />
                    </button>
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
                {/* <div className="responsive-title">
                  <span>{item.title}</span>
                </div> */}
            </div>
            ))}
        </div>
   </div>

   <FooterForSignIn/>
   </>
  )
}
export {Gridcards};