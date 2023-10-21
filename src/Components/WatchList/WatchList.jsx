import './WatchList.css'
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import {addtoWatchlist,getWatchlist} from '../commons/WatchlistService' 
import { Link } from 'react-router-dom';
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import bluetick from "../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
function WatchList(){

    const [isArrowRotated, setIsArrowRotated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [watchlist,setWatchList]=useState([]);
    useEffect(()=>{ 
        if(!isLoaded){
        getWatchlist()
        .then(response=>{
            setWatchList(response.data.data.shows)
            console.log("watch",response.data.data.shows);
            setIsLoaded(true);
        })
    }
    },[isLoaded])

  
    const handleArrowRotation = () => {
    setIsArrowRotated(!isArrowRotated);
    };
    const addMovieToWatchList = (movie) => {
        addtoWatchlist(movie._id).then(response=> {
          console.log("repo",response)
          setIsLoaded(false);
        })
        .catch(err=>{
          console.log("error",err)
        })
      }
    return(
        <div className='watchList-parent'>
        <div className="WatchList-header">
            Watchlist
        </div>
        <div className="WatchList-btn-container">
            <div className="WatchList-filter-btn-cotainer">
            <button className='WatchList-filter-btn'>
                All
            </button>
            <button className='WatchList-filter-btn'>
                Movies
            </button>
            <button className='WatchList-filter-btn'>
                Tv shows
            </button>
            </div>
            <div className="recent-btn-container">
            <button
      className='WatchList-filter-btn recent-btn'
      onClick={handleArrowRotation}
    >
      Most Recent Addition
      <IoIosArrowDown className={`down-arrow-icon ${isArrowRotated ? 'rotate-arrow' : ''}`} />
    </button>
            </div>
        </div>
        <div className="watchList-cards">
        {watchlist && watchlist
            // .filter((item)=> item.type===`${type}`)
            .map((item,index) => (
              
              <div className="card-items" key={item._id}
                style={{margin:"0px 10px"}}
              >
                
                <Link key={`${item._id}&${index}`} to={`/videodetails/${item._id}`}>
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
                      <button onClick={()=> {addMovieToWatchList(item)}} id="watchlist-icon-button">
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
        </div>
        </div>
    )
}
export {WatchList};