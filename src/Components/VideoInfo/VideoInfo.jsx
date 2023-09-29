import React, { useRef, useState, useEffect } from "react";

import {useParams} from "react-router-dom"
import { DefaultPlayer as Video } from "react-html5video";
import johnwicktrailer from "../../assets/videoinfoassets/johnwicktrailer.mp4";
import johnwickposter from "../../assets/videoinfoassets/johnwick.webp";
import "./VideoInfo.css";
import bluetick from "../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import image from "../../assets/videoinfoassets/image.jpg";
import video from "../../assets/videoinfoassets/contagion.mp4";
import {movieDetail} from '../ApiFetch'
function VideoInfo() {
  const [showImage, setShowImage] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const [loaded, setLoaded] = useState(false);


  const params = useParams()
  // console.log("pea",params) 

  useEffect(() => {
    const imageTimeout = setTimeout(() => {
      setShowImage(false);
      setShowVideo(true);
    }, 5000);

    return () => clearTimeout(imageTimeout);
  }, []);

  useEffect(()=>{
if(params.id !== undefined){

movieDetail(params.id).then(res=> {
  setMovieInfo(res.data);
  console.log("res.data",res.data.cast);
  setLoaded(true)
})
}
  },[params])

  return (
    loaded ? 
    <div className="container">
      <div className="visual-container">
        <div
          className={`media ${showImage ? "show" : ""}`}
          style={{ display: showImage ? "block" : "none" }}
        >
          <img src={movieInfo.thumbnail} alt="Image" />
        </div>

        <div
          className={`media ${showVideo ? "show" : ""}`}
          style={{ display: showVideo ? "block" : "none" }}
        >
          {showVideo && (
            <Video autoPlay muted loop controls>
              <source src={movieInfo.video_url} type="video/mp4" />
            </Video>
          )}
        </div>
        {/* video-details */}

        <div className="video-details">
          <div className="video-details-info">
            <div className="video-title">
              <h1>{movieInfo?.title}</h1>
            </div>
            <div className="video-description">
              <p>
                {movieInfo?.description}
              </p>
            </div>
            <div className="genre-section">
              <button className="genre-1">Suspense</button>
              <span className="dot">.</span>
              <button className="genre-2">Thriller</button>
            </div>
          </div>
          <div className="prime-slogan">
            <img src={bluetick} alt="" />
            <p>Included with Prime</p>
          </div>
          <div className="play-container">
            <button className="play-button">
              <BiSolidRightArrow className="play-icon" />
            </button>
            <div className="watchlist-button">
              <button className="watchlist-icon">
                <FiPlus className="plus-ikon" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="cast-heading">Details</div>
      <div className="cast-section">
        <span>Director</span>
        <p>{movieInfo.director}</p>
        <span>Cast</span>
      { movieInfo.cast.map((item,index)=>(
        <div key={index}>
          <p>{item}</p>
        </div>
      )) 
      }
      </div>
    </div>:null
  );
}

export default VideoInfo;
