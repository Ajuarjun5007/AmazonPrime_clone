import "./NavbarForSignIn.css";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { categories, types } from "../CategoryConstants";
import { movieTitles } from "../commons/movieList";
import { searchSuggestionResults } from "../SearchPage/SearchPageService";

function NavbarforSignIn() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSearchBar = () => {
    setIsOpen((prevIsopen) => !prevIsopen);
  };
  // border
  const [isHomeListClicked, setIsHomeListClicked] = useState(false);
  const [isStoreListClicked, setIsStoreListClicked] = useState(false);
  const [isMyStuffListClicked, setIsMyStuffListClicked] = useState(false);
  const [movieResult, setMovieResult] = useState([]);

  const handleHomeNavItemClick = () => {
    setIsHomeListClicked(true);
    setIsStoreListClicked(false);
    setIsMyStuffListClicked(false);
  };

  const handleStoreNavItemClick = () => {
    setIsStoreListClicked(true);
    setIsHomeListClicked(false);
    setIsMyStuffListClicked(false);
  };

  const handleMyStuffNavItemClick = () => {
    setIsMyStuffListClicked(true);
    setIsHomeListClicked(false);
    setIsStoreListClicked(false);
  };

  const handleListHover = () => {
    setIsHomeListClicked(false);
    setIsStoreListClicked(false);
    setIsMyStuffListClicked(false);
  };

  const searchMovie = async (event) => {
    const input = event.target.value;

    if (input.length === 2) {
      try {
        const result = await searchSuggestionResults(input);
        setMovieResult(result.data.slice(0, 40));
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    } else if(input.length === 0) {
      setMovieResult([]);
    }
  };

  // clear value
  const clearValue = () => {
    setMovieResult([]);
    const inputField = document.querySelector(".search-input");
    console.log("input",inputField.value);
    if (inputField) {
      inputField.value = "";
    }
    console.log("clear butn clicked");
};
  // get data from local storage
  let storedValue = [];
  const [userName, setUserName] = useState(" ");
  const [idLogged, setIdLogged] = useState(false);

  useEffect(() => {
    storedValue = JSON.parse(localStorage.getItem("userInfo")) || [];

    //  console.log(storedValue[1].name);

    if (storedValue.length !== 0) {
      setUserName(storedValue[1].name);
      setIdLogged(true);
    }
    setIsOpen(false);
    clearValue();
  }, [location.pathname]);

  const navigate = useNavigate();
  const clearStorage = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload(false);
    console.log("clear");
  };

  return (
    <>
      <div className="navbar-parent">
        <div className="navbar-container">
          <NavLink to="/">
            <div className="title" style={{ fontWeight: "bold" }}>
              prime video
            </div>
          </NavLink>

          <ul className="navbarlist">
            <li className="list home" onMouseEnter={handleListHover}>
              <div
                className={`navbar-items ${
                  isHomeListClicked ? "border-bottom-white" : ""
                }`}
              >
                <p>Home</p>
                <FontAwesomeIcon icon={faAngleDown} className="arrow-icon" />
              </div>
              <div className="home-container">
                <ul className="home-dropdown">
                  <NavLink to="/home">
                    <li
                      className="nav-bar-items-list home-dropdown-items"
                      onClick={handleHomeNavItemClick}
                    >
                      All
                    </li>
                  </NavLink>

                  <NavLink to={`/categorytypepage?type=movie`}>
                    <li
                      className="nav-bar-items-list home-dropdown-items"
                      onClick={handleHomeNavItemClick}
                    >
                      Movies
                    </li>
                  </NavLink>

                  <NavLink to={`/categorytypepage?type=tv show`}>
                    <li
                      className="nav-bar-items-list home-dropdown-items"
                      onClick={handleHomeNavItemClick}
                    >
                      Tv shows
                    </li>
                  </NavLink>
                </ul>
              </div>
            </li>

            <li className="list store" onMouseEnter={handleListHover}>
              <div
                className={`navbar-items ${
                  isStoreListClicked ? "border-bottom-white" : ""
                }`}
              >
                <p>Store</p>
                <FontAwesomeIcon icon={faAngleDown} className="arrow-icon" />
              </div>
              <div className="store-container">
                <ul className="store-dropdown">
                  <NavLink to={`/categorytypepage?type=documentary`}>
                    <li
                      className="nav-bar-items-list store-dropdown-items"
                      onClick={handleStoreNavItemClick}
                    >
                      Documentary
                    </li>
                  </NavLink>
                  <NavLink to={`/categorytypepage?type=trailer`}>
                    <li
                      className="nav-bar-items-list store-dropdown-items"
                      onClick={handleStoreNavItemClick}
                    >
                      Trailer
                    </li>
                  </NavLink>
                  <NavLink to={"comingsoon"}>
                  <li
                    className="nav-bar-items-list store-dropdown-items"
                    onClick={handleStoreNavItemClick}
                  >
                    Channels
                  </li>
                  </NavLink>

                </ul>
              </div>
            </li>
            <NavLink to="comingsoon">
              <li className="list">
                <div className="navbar-items">
                  <p>Live TV</p>
                </div>
              </li>
            </NavLink>
            {/* categories */}

            <li className="list category">
              <NavLink to="categorypage">
                <div className="navbar-items">
                  <p>Categories</p>
                  <FontAwesomeIcon icon={faAngleDown} className="arrow-icon" />
                </div>
              </NavLink>

              <div className="navbar-categories">
                <div className="categories">
                  <div className="genres-content">
                    <div className="content-title-1">
                      <h2>Genres</h2>
                    </div>
                    <ul className="genre-items">
                      {categories.map((category) => (
                        <Link
                          to={`/CategorySelected?value=${category}&key=keywords`}
                        >
                          <li className="genre">{category}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>

                  <div className="type-content">
                    <div className="content-title-2">
                      <h2>Types </h2>
                    </div>
                    <ul className="type-items">
                      {types.map((item) => (
                        <Link to={`/categorytypepage?type=${item}`}>
                          <li className="genre">{item}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="list my-stuff" onMouseEnter={handleListHover}>
              <div
                className={`navbar-items ${
                  isMyStuffListClicked ? "border-bottom-white" : ""
                }`}
              >
                <p>My Stuff</p>
                <FontAwesomeIcon icon={faAngleDown} className="arrow-icon" />
              </div>
              <div className="myStuff-container">
                <ul className="myStuff-dropdown">
                  <NavLink to="WatchlistAll">
                    <li
                      className="nav-bar-items-list myStuff-dropdown-items"
                      onClick={handleMyStuffNavItemClick}
                    >
                      All
                    </li>
                  </NavLink>

                  <NavLink to="Watchlist">
                    <li
                      className="nav-bar-items-list myStuff-dropdown-items"
                      onClick={handleMyStuffNavItemClick}
                    >
                      Watchlist
                    </li>
                  </NavLink>

                  <NavLink to="comingsoon">
                    <li
                      className="nav-bar-items-list myStuff-dropdown-items"
                      onClick={handleMyStuffNavItemClick}
                    >
                      Rentals
                    </li>
                  </NavLink>
                </ul>
              </div>
            </li>
          </ul>

          <div className="navbar-icons">
            {/* search bar */}
            <div
              onClick={toggleSearchBar}
              className="navbar-icons-item hover-down-search"
              style={{ background: isOpen ? "#191e25" : "initial" }}
            >
              {isOpen ? (
                <AiOutlineClose className="close-icon" />
              ) : (
                <BiSearch className="search-icon" />
              )}
            </div>

            {/* <div className="search-bar-result"> */}
            <div className={`search-bar-container ${isOpen ? "open" : ""}`}>
              <div className="search-bar">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="search-icon-small"
                />

                <input
                  onChange={searchMovie}
                  type="text"
                  className="search-input"
                  placeholder="Search"
                />

                <div className="clear-btn-container">
                  <button onClick={clearValue} className="clear-btn">
                    {" "}
                    clear
                  </button>
                </div>
              </div>

              <div className="search-results">
                {movieResult.slice(0, 10).map((item) => (
                  <Link
                    to="/SearchPage"
                    state={{ data: movieResult, result: item.title }}
                    style={{ color: "#fff" }}
                    onClick={()=>setIsOpen(false)}
                  >
                    <div className="search-result">
                      <p>{item.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* </div> */}

            {/* <div className="navbar-items"> */}
            <div className="navbar-icons-item hover-down-user">
              <img
                src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
                alt=""
              />
              {idLogged ? (
                <div className="user-details-container">
                  <div className="user-details">
                    <div className="user-details-header">Your Account</div>
                    <NavLink to="comingsoon">
                      <p>Help</p>
                    </NavLink>

                    <NavLink to="comingsoon">
                      <p>Watch Anywhere</p>
                    </NavLink>
                    <NavLink to="SignIn">
                      <p>Account & Settings</p>
                    </NavLink>

                    <NavLink to="PrimeBenefits">
                      <p className="prime-benefits">Prime Benefits</p>
                    </NavLink>

                    <NavLink to="/">
                      <p className="signout" onClick={() => clearStorage()}>
                        Sign out
                      </p>
                    </NavLink>
                  </div>
                  {/* manage profile */}

                  <div className="profile-container">
                    <div className="profile-header">Profiles</div>
                    <div className="profile-info">
                      <img
                        id="profile-icon"
                        src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
                        alt=""
                      />
                      <div className="user-name">{userName}</div>
                    </div>
                    <Link to="/comingsoon">
                      <button className="manage-btn">Manage Profile</button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="normal-container">
                  <NavLink to="SignIn">
                    <p>Sign In</p>
                  </NavLink>

                  <NavLink to="comingsoon">
                    <p>Help</p>
                  </NavLink>

                  <NavLink to="https://www.primevideo.com/region/eu/splash/watchAnywhere/">
                    <p>Watch Anywhere</p>
                  </NavLink>
                </div>
              )}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default NavbarforSignIn;
