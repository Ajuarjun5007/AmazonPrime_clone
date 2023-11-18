import React,{useContext, useEffect,useState} from "react";
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";
import CardsCarousel from "./CardsCarousel/CardsCarousel";
import TopCarousel from "./TopCarousel/TopCarousel";
import {movieList} from "../ApiFetch";
import { useLocation } from "react-router-dom";
import { MovieContext } from "../LandingPageSignIn/MoviesProvider";

function LandingPageSignIn() {
  const movieContext = useContext(MovieContext);
const typeArray =["video song","web series","tv show",
"short film","movie","documentary","trailer"]

const [moviesInfo, setMoviesInfo] = useState([]);

const location  = useLocation();

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await movieList();
      setMoviesInfo(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, []);

  return (
  < div style ={{backgroundColor:"#00050d"}}>

    <div className="carousels-container" 
      style={{paddingBottom:"300px"}}  
    >

      <TopCarousel  moviesInfo={moviesInfo} />
      {
        moviesInfo?(
      typeArray.map((type)=>{
        return  <CardsCarousel key={type} 
        moviesInfo={moviesInfo} type={type}
          />
      })):(
        console.log("no data")
      )
      }
    </div>
      
      <FooterForSignIn/>

    </ div>
  );
}
export default LandingPageSignIn;
