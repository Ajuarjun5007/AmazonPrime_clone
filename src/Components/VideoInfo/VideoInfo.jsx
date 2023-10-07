import React, { useRef, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { P, DefaultPlayer as Video } from "react-html5video";
import "./VideoInfo.css";
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
function VideoInfo() {
  const [showImage, setShowImage] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});
  const [isMuted, setIsMuted] = useState(true);

  const [loaded, setLoaded] = useState(false);

  const params = useParams();
  // console.log("pea",params)

  useEffect(() => {
    const imageTimeout = setTimeout(() => {
      setShowImage(false);
      setShowVideo(true);
    }, 5000);

    return () => clearTimeout(imageTimeout);
  }, []);

  useEffect(() => {
    if (params.id !== undefined) {
      movieDetail(params.id).then((res) => {
        setMovieInfo(res.data);
        setLoaded(true);
      });
    }
  }, [params]);

  // mute?unmute functionality
  const handleToggleMute = () => {
    setIsMuted(prevMuted => !prevMuted);
  };
  // handle video ended
  const handleVideoEnded = () => {
    setShowImage(true);
    setShowVideo(false);
    console.log("hi 123")
  };
  return loaded ? (
    <div className="container" style={{ backgroundColor: "#00050d" }}>
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
            <Video autoPlay 
            muted={isMuted}
            loop={false}
            fullScreen={true}
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              onEnded={handleVideoEnded}
            >
              <source src={movieInfo.video_url} type="video/mp4" />
            </Video>
          )}
        </div>
        {/* video-details */}

        <div className="video-details">
          <div className="speaker">
            <button className="volume-off"
            onClick={handleToggleMute}
            >
               {isMuted ? (
                <BiVolumeMute className={`volume-off-icon ${isMuted ? 'muted' : ''}`} />
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
              <button className="play-button">
                <BiSolidRightArrow className="play-icon" />
              </button>
              <span className="play-text">play</span>
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
                    <BiLike className="react-like-icon" />
                  </button>
                </div>

                <div className="access-btn-container">
                  <span className="btn-msg">Not for me</span>
                  <button className="grey-icon">
                    <BiDislike className="react-dislike-icon" />
                  </button>
                </div>
                <div className="access-btn-container">
                  <span className="btn-msg">Watch party</span>
                  <button className="grey-icon">
                    <PiConfettiBold className="react-confetti-icon" />
                  </button>
                </div>
                <div className="access-btn-container">
                  <span className="btn-msg">Share</span>
                  <button className="grey-icon">
                    <FiShare2 className="react-share-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cast-heading">Details</div>
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
      <FooterForSignIn />
    </div>
  ) : null;
}

export default VideoInfo;
