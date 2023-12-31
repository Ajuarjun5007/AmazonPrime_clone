import React, {useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import "./VideoInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { MovieContext } from "../LandingPageSignIn/MoviesProvider";
import bluetick from "../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { PiConfettiBold } from "react-icons/pi";
import { addtoWatchlist } from "../WatchList/WatchlistService";
import { FiShare2 } from "react-icons/fi";
import { BiVolumeMute } from "react-icons/bi";
import { BiVolumeFull } from "react-icons/bi";
import { movieDetail } from "../ApiFetch";
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";
import ReactPlayer from "react-player";
import { BiCheck } from "react-icons/bi";
import { getDetailsByTypeOrCategory } from "../CategorySelected/CategorySelectedService";
import { CarouselComponent } from "../Carousel/Carousel";

function VideoInfo() {
  const [showImage, setShowImage] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const [isMuted, setIsMuted] = useState(true);

  const navigate = useNavigate();

  const movieContext = useContext(MovieContext);
  const [fullVideoShow, setFullVideoShow] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisLiked] = useState(false);
  const [movieList, setMovieList] = useState([]);
  
  function likeHandler() {
    setIsLiked(!isLiked);
    if (isDisLiked) {
      setIsDisLiked(false);
    }
  }

  function dislikeHandler() {
    setIsDisLiked(!isDisLiked);
    if (isLiked) {
      setIsLiked(false);
    }
  }
  const params = useParams();

  const addMovieToWatchList = (movie) => {
    if (localStorage.getItem("userInfo")) {
      setIsLoggedIn(true);
      addtoWatchlist(movie._id)
        .then((response) => {
          movieContext.setUserWatchList(
            response.data.data.shows.map((item) => {
              console.log("watchListaddedItem",item._id);
              return item._id;
            })
          );
        })
        .catch((err) => {
          console.log("error", err);
        });

      console.log("true");
    } else {
      setIsLoggedIn(false);
      navigate("/SignIn");
      console.log("false");
    }
  };

  const [detailShow, setDetailShow] = useState(true);
  const [relatedShow, setRelatedShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const movieDetailHandler = () => {
    setDetailShow(true);
    setRelatedShow(false);
  };
  const movieRelatedHandler = () => {
    setRelatedShow(true);
    setDetailShow(false);
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    if (loaded && localStorage.getItem("userInfo")) {
      console.log(showImage, showVideo);
      setShowImage(true);
      setShowVideo(false);
      const imageTimeout = setTimeout(() => {
        setShowImage(false);
        setShowVideo(true);
      }, 5000);

      return () => clearTimeout(imageTimeout);
    } else {
      setShowImage(true);
    }
  }, [loaded]);

  useEffect(() => {
    setLoaded(false);
    if (params.id !== undefined) {
      movieDetail(params.id).then((res) => {
        setMovieInfo(res.data);
        loadMovieListByGenre(res.data.keywords, res.data.type);
        setLoaded(true);
      });
    }
  }, [params]);

  const loadMovieListByGenre = (keywords, type) => {
    getDetailsByTypeOrCategory("keywords", keywords[0]).then((res) => {
      setMovieList(res.data.data);
    });
  };
  const handleToggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };
  const handleVideoEnded = () => {
    setShowImage(true);
    setShowVideo(false);
  };
  const videoSizeHandler = () => {
    setFullVideoShow(true);
  };

  return loaded ? (
    <div style={{ backgroundColor: "#00050d" }}>
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
              {isLoggedIn ? (
                <div className="play-btn-content">
                  <Link key={movieInfo._id} to={`/FullVideo/${movieInfo._id}`}>
                    <button className="play-button" onClick={videoSizeHandler}>
                      <BiSolidRightArrow className="play-icon" />
                    </button>
                  </Link>
                  <span className="play-text">play</span>
                </div>
              ) : (
                <Link to={"/SignIn"}>
                  <div className="free-trial-content">
                    <img src={bluetick} alt="" />
                    <p>Watch with Prime </p>
                  </div>
                </Link>
              )}

              <div className="video-access-button ">
                <div className="access-btn-container">
                  <span className="btn-msg">Watchlist</span>
                  <button
                    className="grey-icon"
                    onClick={() => {
                      addMovieToWatchList(movieInfo);
                    }}
                  >
                    {movieContext?.userWatchList &&
                    movieContext?.userWatchList.includes(movieInfo._id) ? (
                      <BiCheck className="react-check-icon" />
                    ) : (
                      <FiPlus className="react-plus-icon" />
                    )}
                  </button>
                </div>

                <div className="access-btn-container">
                  <span className="btn-msg">Like</span>
                  <button className="grey-icon">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className={`react-like-icon ${
                        isLiked ? "clicked" : "unclicked"
                      }`}
                      onClick={likeHandler}
                    />
                  </button>
                </div>

                <div className="access-btn-container">
                  <span className="btn-msg">Not for me</span>
                  <button className="grey-icon">
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      className={`react-like-icon ${
                        isDisLiked ? "clicked" : "unclicked"
                      }`}
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
        <span onClick={movieRelatedHandler} className="cast-heading-child">
          Related
        </span>
        <span onClick={movieDetailHandler} className="cast-heading-child">
          Details
        </span>
      </div>

      {relatedShow && movieList.length > 0 && (
        <CarouselComponent moviesInfo={movieList} type={movieDetail.type} />
      )}

      {detailShow && (
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
