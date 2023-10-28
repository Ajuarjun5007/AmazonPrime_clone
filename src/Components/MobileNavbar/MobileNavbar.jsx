import "./MobileNavbar.css"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



function MobileNavbar(){

    const [arrowRotate,setArrowRotate] = useState(false);
    const arrowHandler = ()=>{
        setArrowRotate((prevRotate)=>!prevRotate);
        console.log("ar",arrowRotate)
    }


    return(
        <>
        <div className="mb-navbar-container" style={{backgroundColor:"#00050d" }} >
            <div 
            className="mb-menu-container"
            onClick={arrowHandler}
            >
                <p>
                Menu
                </p>
                <FontAwesomeIcon icon={faAngleDown} 
                // className="mb-arrow-icon"

                className={`mb-arrow-icon ${
                    arrowRotate? "rotate" : ""
                  }`}
                />
            </div>
            <div className="mb-prime-container">
                prime video
            </div>

            <div className="mb-search-container">
                <div className="mb-search-logo">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="mb-search-icon"
                />
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
    )
}
export default MobileNavbar;