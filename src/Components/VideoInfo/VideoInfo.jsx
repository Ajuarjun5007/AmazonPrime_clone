import React, { useRef, useState, useEffect } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import johnwicktrailer from "../../assets/videoinfoassets/johnwicktrailer.mp4";
import johnwickposter from "../../assets/videoinfoassets/johnwick.webp";
import "./VideoInfo.css";
import bluetick from "../../assets/LandingPageSignInImages/TopCarousel/bluetick.png";
import { BiSolidRightArrow } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import image from "../../assets/videoinfoassets/image.jpg";
import video from "../../assets/videoinfoassets/contagion.mp4";
function VideoInfo() {
  const [showImage, setShowImage] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const imageTimeout = setTimeout(() => {
      setShowImage(false);
      setShowVideo(true);
    }, 5000);

    return () => clearTimeout(imageTimeout);
  }, []);

  return (
    <div className="container">
      <div className="visual-container">
        <div
          className={`media ${showImage ? "show" : ""}`}
          style={{ display: showImage ? "block" : "none" }}
        >
          <img src={johnwickposter} alt="Image" />
        </div>

        <div
          className={`media ${showVideo ? "show" : ""}`}
          style={{ display: showVideo ? "block" : "none" }}
        >
          {showVideo && (
            <Video autoPlay muted loop controls>
              <source src={johnwicktrailer} type="video/mp4" />
            </Video>
          )}
        </div>
        {/* video-details */}

        <div className="video-details">
          <div className="video-details-info">
            <div className="video-title">
              <h1>john Wick 4</h1>
            </div>
            <div className="video-description">
              <p>
                John Wick (Keanu Reeves) uncovers a path to defeating The High
                Table. But before he can earn his freedom, Wick must face off
                against a new enemy with powerful alliances across the globe and
                forces that turn old friends into foes.
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
        <p>Mani rathnam</p>
        <span>Cast</span>
        <p>Keanu Reeves</p>
        <p> Ana de Armas </p>
        <p>Robert De Niro</p>
      </div>
    </div>
  );
}

export default VideoInfo;
