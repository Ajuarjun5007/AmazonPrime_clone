import React, { useRef, useState, useEffect } from "react";

import { Link, useLocation, useParams } from "react-router-dom";
import { P, DefaultPlayer as Video } from "react-html5video";
import "./VideoInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import bluetick from "../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiConfettiBold } from "react-icons/pi";
import { FiShare2 } from "react-icons/fi";
import { BiVolumeMute } from "react-icons/bi";
import { BiVolumeFull } from "react-icons/bi";
import { movieDetail } from "../ApiFetch";
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";
import ReactPlayer from "react-player";
import {getDetailsByTypeOrCategory} from "../CategorySelected/CategorySelectedService"
import { CarouselComponent } from "../Carousel/Carousel";

function VideoInfo(props) {
  const [showImage, setShowImage] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const [isMuted, setIsMuted] = useState(true);
  
  const [fullVideoShow, setFullVideoShow] = useState(false);

  const [loaded, setLoaded] = useState(false);

  // from csb
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
const location = useLocation();
  const [isLiked,setIsLiked] = useState(false);
  const  [isDisLiked,setIsDisLiked]=useState(false);
  const [ movieList,setMovieList] = useState([]);
  function likeHandler(){
    setIsLiked(!isLiked);
    if(isDisLiked){
      setIsDisLiked(false);
    }
  }

  function dislikeHandler(){
    setIsDisLiked(!isDisLiked);
    if(isLiked){
      setIsLiked(false);
    }
  }
  const params = useParams();

  const { NavBarControl } = props;

  const[detailShow,setDetailShow] = useState(true);
  const[relatedShow,setRelatedShow] = useState(false);
  const[isLoggedIn,setIsLoggedIn]= useState(false);
 


  const movieDetailHandler=()=>{
    setDetailShow(true);
    setRelatedShow(false);

  }
  const movieRelatedHandler=()=>{
    setRelatedShow(true);
    setDetailShow(false);

  }

 
  useEffect(() => {
    
    if(localStorage.getItem("userInfo")){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
    if(loaded && localStorage.getItem("userInfo")){
      console.log(showImage,showVideo);
      setShowImage(true);
      setShowVideo(false);
    const imageTimeout = setTimeout(() => {
      setShowImage(false);
      setShowVideo(true);
    }, 5000);

    return () => clearTimeout(imageTimeout);
  }else{
    setShowImage(true);
  }
  }, [loaded]);

  useEffect(() => {
    setLoaded(false);
    if (params.id !== undefined) {
      movieDetail(params.id).then((res) => {
        console.log("parma",res.data.keywords);
        setMovieInfo(res.data);
        loadMovieListByGenre(res.data.keywords,res.data.type);
        setLoaded(true);
      });
    }
  }, [params]);
  
const loadMovieListByGenre = (keywords,type) =>{
getDetailsByTypeOrCategory("keywords",keywords[0]).then((res)=>{
  setMovieList(res.data.data);
  console.log("res",res.data);

  
})
}
  // mute?unmute functionality
  const handleToggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };
  // handle video ended
  const handleVideoEnded = () => {
    setShowImage(true);
    setShowVideo(false);
  };
  // set Full video
  const videoSizeHandler = () => {
    setFullVideoShow(true);
    NavBarControl(true);
  };

  return loaded ? (
    <div  style={{ backgroundColor: "#00050d" }}>

      <div className="visual-container">
        &&{" "}
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
          {showVideo && !fullVideoShow && (
            <div style={{ opacity: isVideoLoaded ? 1 : 0 }}>

            <ReactPlayer 
              url={movieInfo.video_url}
               muted={isMuted}
              fullScreen={true}
              onEnded={handleVideoEnded}
              playing={true}
              controls={true}
              loop={false}
              onReady={onLoadedData}
              className="react-video"
            />
            
          </div>
          )}
        
        </div>
            <div className="video-details">
              <div className="speaker">
                <button className="volume-off" onClick={handleToggleMute}>
                  {isMuted ? (
                    <BiVolumeMute
                      className={`volume-off-icon ${isMuted ? "muted" : ""}`}
                    />
                  ) : (
                    <BiVolumeFull className="volume-on-icon" />
                  )}
                </button>
              </div>
              <div className="video-details-info ">
                <div className="video-title">
                  <h1>{movieInfo?.title}</h1>
                </div>
                <div className="video-description">
                  <p>{movieInfo?.description}</p>
                </div>

                <div className="genre-section">
                  {movieInfo.keywords.map((keyword) => (
                    <p>{keyword}</p>
                  ))}
                </div>

                <div className="prime-slogan">
                  <img src={bluetick} alt="" />
                  <p>Included with Prime</p>
                </div>
                <div className="play-container">


                 { isLoggedIn?(
                  <div className="play-btn-content">
                    <Link 
                    key={movieInfo._id} 
                    to={`/FullVideo/${movieInfo._id}`}
                    >
                   <button className="play-button" onClick={videoSizeHandler}>
                  <BiSolidRightArrow className="play-icon" />
                  </button>
                    </Link>
                  <span className="play-text">play</span>
                  </div>
                  ):(
                    <Link to={""}>
                    <div className="free-trial-content">
                        <img src={bluetick} alt="" />
                        <p>Watch with a free Prime trial</p>
                      </div>
                    </Link>
                  )
                 }


                  <div className="video-access-button ">
                    <div className="access-btn-container">
                      <span className="btn-msg">Watchlist</span>
                      <button className="grey-icon">
                        <FiPlus className="react-plus-icon" />
                      </button>
                    </div>

                    <div className="access-btn-container">
                      <span className="btn-msg">Like</span>
                      <button className="grey-icon">
                        
                        <FontAwesomeIcon
              icon={faThumbsUp}
           style={{ color: isLiked ? "#000000" : "#fff" }}
          className="react-like-icon"
          onClick={likeHandler}
                      />
                      </button>
                        
                    </div>

                    <div className="access-btn-container">
                      <span className="btn-msg">Not for me</span>
                      <button className="grey-icon">
                        <FontAwesomeIcon
              icon={faThumbsDown}
           style={{ color: isDisLiked ? "#000000" : "#fff" }} 
          className="react-like-icon"
          onClick={dislikeHandler}
                      />
                      </button>
                    </div>
                    <div className="access-btn-container">
                      <span className="btn-msg">Watch party</span>
                      <Link to={"/comingsoon"}>
                      <button className="grey-icon">
                        <PiConfettiBold className="react-confetti-icon" />
                      </button>
                      </Link>
                    </div>
                    <div className="access-btn-container">
                      <span className="btn-msg">Share</span>
                      <Link to={"/comingsoon"}>
                      <button className="grey-icon">
                        <FiShare2 className="react-share-icon" />
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>

       <div className="cast-heading">
        <span onClick={movieRelatedHandler}  className="cast-heading-child">Related</span>
        <span onClick={movieDetailHandler} className="cast-heading-child">Details</span>

        </div>
      
        {relatedShow && movieList.length>0 && <CarouselComponent moviesInfo={movieList} type={movieDetail.type}/>

        }


      { detailShow && (
        <div className="cast-section">
          <span>Director</span>
          <p>{movieInfo.director}</p>
          <span>Cast</span>
          {movieInfo.cast.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}
      <FooterForSignIn />
    </div>
  ) : null;
}

export default VideoInfo;
