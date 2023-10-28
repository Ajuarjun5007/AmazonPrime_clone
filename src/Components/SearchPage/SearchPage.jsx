import './Searchpage.css'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function SearchPage(){

const location = useLocation();
console.log("loc",location.state.data);
    return(
        <>
        <div className="search-page-container" style={{backgroundColor:"#00050d",paddingBottom:"300px"}}>
        
            <div className="search-page-btn-container">
                <div className="search-btn-container">
                <button className="search-filter-btn">Genre
                <FontAwesomeIcon icon={faAngleDown} className="arrow-icon"/>
                </button>
                </div>
                <div className="search-btn-container">
                <button className="search-filter-btn">Content type
                <FontAwesomeIcon icon={faAngleDown} className="arrow-icon"/>
                </button>
                </div>

            </div>
        </div>
        </>
    )
}
export {SearchPage};