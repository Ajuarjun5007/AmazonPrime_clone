import "./MobileNavbar.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { BiSearch } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { movieTitles } from "../commons/movieList";
import { searchSuggestionResults } from "../SearchPage/SearchPageService";

function MobileNavbar({ handleMobileNavbar }) {
  const [arrowRotate, setArrowRotate] = useState(false);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [userState, setUserState] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setIsLoggedIn(true);
    }
  }, []);

  const [movieResult, setMovieResult] = useState([]);

  const toggleSearchBar = () => {
    setIsOpen((prevIsopen) => !prevIsopen);
    setArrowRotate(false);
    setUserState(false);
  };

  const arrowHandler = () => {
    setArrowRotate((prevRotate) => !prevRotate);
    setUserState(false);
    setIsOpen(false);
  };

  const userHandler = () => {
    setUserState(!userState);
    setArrowRotate(false);
    setIsOpen(false);
  };
  // const searchMovie = (event) => {
  //   const input = event.target.value;
  //   if (input.length === 2) {
  //     const result = movieTitles
  //       .filter((movieTitle) =>
  //         movieTitle.toLowerCase().includes(input.toLowerCase())
  //       )
  //       .slice(0, 10);

  //     setMovieResult(result);
  //     console.log("rs", result);
  //   } else if (input.length == 0) {
  //     setMovieResult([]);
  //   }
  // };

  const searchMovie = async (event) => {
    const input = event.target.value;
    if (input.length === 2) {
      try {
        const result = await searchSuggestionResults(input);
        setMovieResult(result.data.slice(0, 40));
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    } else if (input.length === 0) {
      setMovieResult([]);
    }
  };

  console.log("movieresult",movieResult);

  const handleItemClick = (itemName) => {
    if(itemName==="Signout"){
      localStorage.removeItem("userInfo");
      localStorage.removeItem("user");
      console.log("sign");
    window.location.reload(false);

    }
    setUserState(false);
    setActiveItem(activeItem === itemName ? null : itemName);
  };
  let storedValue = [];
  const [userName, setUserName] = useState(" ");
  const [idLogged, setIdLogged] = useState(false);
  handleMobileNavbar(arrowRotate);
  const [activeItem, setActiveItem] = useState(null);

  console.log("islogegedIn",isLoggedIn);

  const clearValue = () => {
    setMovieResult([]);
    const inputField = document.querySelector(".search-input");
    console.log("input",inputField.value);
    if (inputField) {
      inputField.value = "";
      console.log("mb-clear butn clicked");
    }
};
  


  // console.log("inputfield",document.querySelector(".search-input").value);
  return (
    <>
      <div
        className="mb-navbar-container"
        style={{ backgroundColor: "#00050d" }}
      >
        <div
          className="mb-menu-container"
          style={{ background: arrowRotate ? "#191e25" : "initial" }}
          onClick={arrowHandler}
        >
          <p>Menu</p>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={`mb-arrow-icon ${arrowRotate ? "rotate" : ""}`}
          />
          {/* MENU BAR CONTAINER */}
        </div>

        

        <Link to={"/"}>
          <div className="mb-prime-container">prime video</div>
        </Link>
        {/* SEARCH CONTAINER */}

        <div className="mb-search-container">
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

          {/* SEARCH BAR RESULT */}
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
                  state={{ data: movieResult, result:item.title}}
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
          {/* User  */}
          <div
            className="mb-user-logo"
            style={{ background: userState ? "#191e25" : "initial" }}
          >
            <img
              onClick={userHandler}
              src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
              alt=""
            />
            {userState
            && isLoggedIn &&
              <div className="mb-user-logout-container">
                <Link to="/">
                  <p
                    onClick={() => handleItemClick("Signout")}
                    className={`mb-user-container-item ${
                      activeItem === "Signout" ? "white-background" : ""
                    }`}
                  >
                    Sign out
                  </p>
                </Link>
                <p
                  onClick={() => handleItemClick("Help")}
                  className={`mb-user-container-item ${
                    activeItem === "Help" ? "white-background" : ""
                  }`}
                >
                  Help
                </p>


                <Link to="https://www.primevideo.com/region/eu/splash/watchAnywhere/">
                <p
                  onClick={() => handleItemClick("WatchAnywhere")}
                  className={`mb-user-container-item ${
                    activeItem === "WatchAnywhere" ? "white-background" : ""
                  }`}
                >
                  Watch Anywhere
                </p>
                </Link>

                <Link/>
                <Link to="/PrimeBenefits">
                <p
                  onClick={() => handleItemClick("Prime Benefits")}
                  className={`mb-user-container-item ${
                    activeItem === "Prime Benefits" ? "white-background" : ""
                  }`}
                  >
                  Prime benefits
                </p>
                  </Link>
                <p
                  onClick={() => handleItemClick("Manage Profile")}
                  className={`mb-user-container-item ${
                    activeItem === "Manage Profile" ? "white-background" : ""
                  }`}
                >
                  Manage Profile
                </p>
              </div>
}
      {userState
            && !isLoggedIn &&
              <div className="mb-user-login-container"
              // style={{zIndex:"2"}}
              >
                <Link to="SignIn">
                  <p
                    onClick={() => handleItemClick("SignIn")}
                    className={`mb-user-container-item ${
                      activeItem === "SignIn" ? "white-background" : ""
                    }`}
                  >
                    Sign In
                  </p>
                </Link>
                <p
                  onClick={() => handleItemClick("Help")}
                  className={`mb-user-container-item ${
                    activeItem === "Help" ? "white-background" : ""
                  }`}
                >
                  Help
                </p>
                <Link to="https://www.primevideo.com/region/eu/splash/watchAnywhere/">
                <p
                  onClick={() => handleItemClick("WatchAnywhere")}
                  className={`mb-user-container-item ${
                    activeItem === "WatchAnywhere" ? "white-background" : ""
                  }`}
                >
                  Watch Anywhere
                </p>
                </Link>
              </div>
             } 
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileNavbar;
