import './WatchList.css'
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

function WatchList(){

    const [isArrowRotated, setIsArrowRotated] = useState(false);

    const handleArrowRotation = () => {
    setIsArrowRotated(!isArrowRotated);
    };
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
        </div>
    )
}
export {WatchList};