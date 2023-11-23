import "./MobileMenuContent.css";

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

const MobileMenuContent = (handleMobileNavbar) => {

 const menuDisplayHandler=()=>{
    handleMobileNavbar(false);
  }
  return (
    <>
      <div className="menu-content" style={{ backgroundColor: "#191e25" }}>
        {/* HOME CONTENT */}
        <div className="home-content">
          <GoHome className="home-icon" />
          <Link to={"home"} onClick={menuDisplayHandler}>
          <span> Home</span>
          </Link>
        </div>
        {/* STORE CONTENT */}
          <AccordionItem>
                      {({ open }) => (
                        <>
                          <AccordionHeader className="store-accord">
                          <div className="store-content">
                <BiShoppingBag className="store-icon" />
                     <span>Store</span>
                       </div> 
                            <FontAwesomeIcon
                              icon={!open ? faAngleDown : faAngleUp}
                              className={classNames("icon", { open: open })}
                              style={{
                                marginLeft: "10px",
                                color: "#aaa",
                                paddingTop: "3px",
                                fontSize: "16px"
                              }}
                            />
                          </AccordionHeader>

                        <AccordionBody>
                        <Link to={`/categorytypepage?type=documentary`} onClick={menuDisplayHandler}>
                          <p className="store-acc-item">Documentary</p>
                          </Link>

                        <Link to={`/categorytypepage?type=trailer`} onClick={menuDisplayHandler}>
                          <p className="store-acc-item">Trailer</p>
                          </Link>
                        </AccordionBody>
                        </>
                      )}
                    </AccordionItem>
        {/* LIVE TV CONTENT */}
        <Link to={"comingsoon"} onClick={menuDisplayHandler}>
        <div className="livetv-content">
          <PiTelevisionSimpleBold className="menu-icon" />
          <span>Live TV</span>
        </div>
        </Link>
        {/* CATEGORIES CONTENT */}
        <div className="categories-content">
          <Accordion alwaysOpen={true}>
            <AccordionItem>
              {({ open }) => (
                <>
                  <AccordionHeader>
                    <div className="categories-content">
                      <div className="categories-content-header">
                        <LuLayoutGrid className="category-icon" />
                        <span> Categories</span>
                        <FontAwesomeIcon
                          icon={open ? faAngleUp : faAngleDown}
                          className={classNames("icon", { open: open })}
                          style={{ marginLeft: "10px", color: "#aaa" }}
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
                              icon={!open ? faAngleUp : faAngleDown}
                              className={classNames("icon", { open: open })}
                              style={{
                                marginLeft: "10px",
                                color: "#aaa",
                                paddingTop: "3px",
                              }}
                            />
                          </AccordionHeader>

                          <AccordionBody>
                            <div className="accordion-body">
                              {categories.map((category) => (
                                  <Link to={`/CategorySelected?value=${category}&key=keywords`} onClick={menuDisplayHandler}>
                                <p>
                                  {category}
                                  </p>
                                </Link>
                              ))}
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
                              style={{
                                marginLeft: "10px",
                                color: "#aaa",
                                paddingTop: "3px",
                              }}
                            />
                          </AccordionHeader>

                          <AccordionBody>
                            <div className="accordion-body">
                              {types.map((type) => (
                                <Link to={`/categorytypepage?type=${type}`} onClick={menuDisplayHandler}>
                                <p>{type}</p>
                                </Link>
                              ))}
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
          <PiFolderPlusDuotone className="stuff-icon" />
          <Link to="/Watchlist" onClick={menuDisplayHandler}>
          <span>My Stuff</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenuContent;
