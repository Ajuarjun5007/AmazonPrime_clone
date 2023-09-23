import React,{useEffect,useState} from "react";
import FooterForSignIn from "../FooterforSignIn/FooterForSIgnIn";
import CardsCarousel from "./CardsCarousel/CardsCarousel";
import TopCarousel from "./TopCarousel/TopCarousel";
import ApiFetch from "../ApiFetch";
import NavbarforSignIn from "../NavbarForSignIn/NavbarForSignIn";

function LandingPageSignIn() {

const typeArray =["video song","web series","tv show",
"short film","movie","documentary","trailer"]

const [moviesInfo, setMoviesInfo] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await ApiFetch();
      setMoviesInfo(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, []);
  return (
    <>
      <TopCarousel />

      {typeArray.map((type)=>{
        return  <CardsCarousel key={type} moviesInfo={moviesInfo} type={type}/>
      })}
    
      
      <FooterForSignIn/>

    </>
  );
}
export default LandingPageSignIn;
