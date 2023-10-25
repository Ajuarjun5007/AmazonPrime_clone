import { movieList } from "../ApiFetch";
import { useState,useEffect } from "react";
import TopCarousel from "../LandingPageSignIn/TopCarousel/TopCarousel";
function CategoryTypePage() {

  const [filteredMoviesInfo, setFilteredMoviesInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await movieList();

        let filteredMovieList=[];
        setFilteredMoviesInfo(data.data.map((item) => {
        if (item.type === 'movie') {
            filteredMovieList.push(item);
        }
        }));
        setFilteredMoviesInfo(filteredMovieList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

console.log("movies",filteredMoviesInfo);
    return(
    <div style={{ backgroundColor: "#00050d" }} >
      <TopCarousel/>
       
    </div>
    )
}
export default CategoryTypePage;