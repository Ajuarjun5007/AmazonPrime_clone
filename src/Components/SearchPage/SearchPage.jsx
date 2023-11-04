import "./Searchpage.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { types, categories } from "../CategoryConstants";
import { Gridcards } from "../Gridcards/Gridcards";



function SearchPage() {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [selectedValue,setSelectedValue] = useState(undefined);
  const [selectedType,setSelectedType] = useState(undefined);
  const [GenreDisplay,setGenreDisplay] = useState("Genre");
  const [TypeDisplay,setTypeDisplay] = useState("Content type");

  const movieList = location.state.data;
  console.log("res",location.state.result);

  function dataFetchByGenre(category){
    setSelectedValue(category);
  console.log("value1",selectedValue);
  }
  function dataFetchByType(type){
    setSelectedType(type)
  }
  useEffect(() => {
    if (selectedValue === undefined || selectedType === undefined) {
      setSearchResults(movieList);
    }
    if(selectedValue!==undefined){
      setGenreDisplay(selectedValue);
      const filteredResult = movieList.filter((item) => {
        let formattedSelectedValue = selectedValue.toLowerCase();  
        console.log("fo",formattedSelectedValue);
        return  item.keywords.includes(formattedSelectedValue);
      });
      setSearchResults(filteredResult);
    }
    if(selectedType!==undefined){
      setTypeDisplay(selectedType);
      const filteredResult = movieList.filter((item) => {
        let formattedSelectedValue = selectedType.toLowerCase();  
        console.log("ty",formattedSelectedValue);
        return  item.type === formattedSelectedValue;
      });
      setSearchResults(filteredResult);
    }
  }, [selectedValue,movieList,selectedType]);
  


  console.log("selectedValue2",selectedValue);


  console.log("searchresult",searchResults);

  const [isOpenGenre, setIsOpenGenre] = useState(false);
  const [isOpenType, setIsOpenType] = useState(false);

  function handleGenreDisplay() {
    setIsOpenGenre(!isOpenGenre);
  }

  function handleTypeDisplay() {
    setIsOpenType(!isOpenType);
  }



  return (
    <>
      <div
        className="search-page-container"
        style={{ backgroundColor: "#00050d" }}
      >
         
        <div className="search-page-btn-container">
          <div className="search-btn-container">
            <button
              onClick={handleGenreDisplay}
              className={`search-filter-btn ${isOpenGenre ? "br" : ""}`}
            >
              {GenreDisplay}
              <FontAwesomeIcon icon={faAngleDown}
               className={` ${isOpenGenre ? "arrow-icon rotate" : "arrow-icon"}`}
               />
            </button>
            <div className={`genre-container ${isOpenGenre ? "open" : ""}`}>
              <ul className="category-items">
                {categories.map((category) => (
                  <li key={category} 
                  id="category"
                  onClick={()=>dataFetchByGenre(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="search-btn-container">
            <button
              onClick={handleTypeDisplay}
              className={`search-filter-btn ${isOpenType ? "br" : ""}`}
            >
             {TypeDisplay}
              <FontAwesomeIcon icon={faAngleDown} 
               className={` ${isOpenType? "arrow-icon rotate" : "arrow-icon"}`}
               />
            </button>

            <div
              className={`content-type-container ${isOpenType ? "open" : ""}`}
            >
              <ul className="content-type-items">
                {types.map((type) => (
                  <li
                   key={type} 
                   id="type"
                  onClick={()=>dataFetchByType(type)}

                   >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="result-container">
            <p className="result">Results for "{location.state.result}" .</p>
          </div>
        <Gridcards cardsInfo={searchResults} />
      </div>
    </>
  );
}
export default SearchPage;
