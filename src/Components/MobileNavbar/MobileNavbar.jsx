import "./MobileNavbar.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { BiSearch } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { categories,types } from "../CategoryConstants";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import {PiFolderPlusDuotone} from "react-icons/pi"
import { LuLayoutGrid } from "react-icons/lu";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

import { GoHome } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { movieTitles } from "../commons/movieList";

function MobileNavbar() {
  const [arrowRotate, setArrowRotate] = useState(false);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [movieResult, setMovieResult] = useState([]);

  const toggleSearchBar = () => {
    setIsOpen((prevIsopen) => !prevIsopen);
  };

  const arrowHandler = () => {
    setArrowRotate((prevRotate) => !prevRotate);

    console.log("ar", arrowRotate);
  };

  const searchMovie = (event) => {
    const input = event.target.value;
    if (input.length === 2) {
      const result = movieTitles.filter((movieTitle) =>
        movieTitle.toLowerCase().includes(input.toLowerCase())
      );
      setMovieResult(result);
      console.log("rs", result);
    } else if (input.length == 0) {
      setMovieResult([]);
    }
  };

  const clearValue = () => {
    setMovieResult([]);
    const inputField = document.querySelector(".search-input");
    if (inputField) {
      inputField.value = "";
    }
  };
  // get data from local storage
  let storedValue = [];
  const [userName, setUserName] = useState(" ");
  const [idLogged, setIdLogged] = useState(false);

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

        {arrowRotate && (
          <div className="menu-content" style={{backgroundColor:"#191e25"}}>

            {/* HOME CONTENT */}

            <div className="home-content">
              <GoHome className="home-icon" />
              <span> Home</span>
            </div>

            {/* STORE CONTENT */}

            <div className="store-content">
              <BiShoppingBag className="store-icon" />
              <span>Store</span>
            </div>

            {/* LIVE TV CONTENT */}

            <div className="livetv-content">
              <PiTelevisionSimpleBold className="menu-icon" />

              <span>Live TV</span>
            </div>

            {/* CATEGORIES CONTENT */}

            <div className="categories-content">
    
              {/* ACCORDION */}
              <Accordion alwaysOpen={true}>
                <AccordionItem>
                {({ open }) => (
                        <>
                  <AccordionHeader>
                    <div
                      className="categories-content"
                    >
                      <div className="categories-content-header">
                      <LuLayoutGrid className="category-icon" />
                      <span> Categories</span>
                      <FontAwesomeIcon
                              icon={open ? faAngleUp : faAngleDown}
                              className={classNames("icon", { open:open })}
                              style={{marginLeft:"10px",color:"#aaa"}}
                            />
                            </div>
                    </div>
                  </AccordionHeader>

                  <AccordionBody>

                    {/* item 1 */}

                    <AccordionItem>
                      {({ open }) => (
                        <>
                          <AccordionHeader className="acc-sub-head">
                            <h3>Genres</h3>
                            <FontAwesomeIcon
                              icon={open ? faAngleUp : faAngleDown}
                              className={classNames("icon", { open: open })}
                              style={{marginLeft:"10px",color:"#aaa",paddingTop:"3px"}}
                            />
                          </AccordionHeader>

                          <AccordionBody >
                            <div className="accordion-body">
                              {
                                categories.map((category)=>(
                                  <p>{category}</p>
                                ))
                              }
                            </div>
                          </AccordionBody>
                        </>
                      )}
                    </AccordionItem>

                    {/* item 2 */}
                    <AccordionItem>
                      {({ open }) => (
                        <>
                          <AccordionHeader className="acc-sub-head">
                            <h3 className={`accordion-title`}>Types</h3>
                            <FontAwesomeIcon
                              icon={!open ? faAngleUp : faAngleDown}
                              className={classNames("icon", { open: open })}
                              style={{marginLeft:"10px",color:"#aaa",paddingTop:"3px"}}
                            />
                          </AccordionHeader>

                          <AccordionBody>
                            <div className="accordion-body">
                            {
                                types.map((type)=>(
                                  <p>{type}</p>
                                ))
                              }
                            </div>
                          </AccordionBody>
                        </>
                      )}
                    </AccordionItem>
                  </AccordionBody>
                  </>
                      )}
                </AccordionItem>
              </Accordion>
            </div>
                            
            {/* STUFF CONTENT */}
            <div className="stuff-content">
            < PiFolderPlusDuotone className="stuff-icon"/>
              <span>My Stuff</span>

            </div>

          </div>
        )}

        <div className="mb-prime-container">prime video</div>
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
              {movieResult.map((item) => (
                <Link
                  to="/SearchPage"
                  state={{ data: movieResult }}
                  style={{ color: "#fff" }}
                >
                  <div className="search-result">
                    <p>{item}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-user-logo">
            <img
              src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default MobileNavbar;
