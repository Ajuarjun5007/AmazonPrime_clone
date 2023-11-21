import React, { useContext, useEffect, useState } from "react";
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";
import CardsCarousel from "./CardsCarousel/CardsCarousel";
import TopCarousel from "./TopCarousel/TopCarousel";
import { movieList } from "../ApiFetch";
import { GoHome } from "react-icons/go";
import { useLocation } from "react-router-dom";
import Loader from "../Loader"
import { MovieContext } from "../LandingPageSignIn/MoviesProvider";
import { Link } from "react-router-dom";
import "./LandingPageSignIn.css";

function LandingPageSignIn() {
  const movieContext = useContext(MovieContext);
  const typeArray = [
    "video song",
    "web series",
    "tv show",
    "short film",
    "movie",
    "documentary",
    "trailer",
  ];

  const [moviesInfo, setMoviesInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await movieList();
        setMoviesInfo(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setLoading(true);
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "#00050d" }}>
      <div className="carousels-container" style={{ paddingBottom: "300px" }}>
        <div className="mb-home-options">
          <div className="home-icon-container">
            <Link to="/home">
              <GoHome className="mb-home-icon" />
            </Link>
          </div>
          <div className="Movies-icon-container">
            <Link to={`/categorytypepage?type=movie`}>
              <span className="mb-home-option">Movies</span>
            </Link>
          </div>
          <div className="tv-shows-icon-container">
            <Link to={`/categorytypepage?type=tv show`}>
              <span className="mb-home-option">Tv shows</span>
            </Link>
          </div>
        </div>

        {loading ? (
          // <div style={{color:"#fff"}}>Loading...</div>
          <Loader loading={loading}/>
            // <Demo/>
        ) : (
          <>
            <TopCarousel moviesInfo={moviesInfo} />
            {moviesInfo
              ? typeArray.map((type) => {
                  return (
                    <CardsCarousel
                      key={type}
                      moviesInfo={moviesInfo}
                      type={type}
                    />
                  );
                })
              : console.log("no data")}
          </>
        )}
      </div>

      <FooterForSignIn />
    </div>
  );
}
export default LandingPageSignIn;
