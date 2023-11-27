import React, { useEffect, useState } from "react";
export const MovieContext = React.createContext(null);
import { getWatchlist } from "../WatchList/WatchlistService";
import LandingPageSignIn from "./LandingPageSignIn";
import CategorySelected from "../CategorySelected/CategorySelected";
import CategoryTypePage from "../CategoryTypePage/CategoryTypePage";
import SearchPage from "../SearchPage/SearchPage";
import VideoInfo from "../VideoInfo/VideoInfo";
function MoviesProvider(props) {

 
  const [userWatchList, setUserWatchList] = useState([])
  const context = {
    userWatchList,
    setUserWatchList
    
  };
  useEffect(()=>{
    if(userWatchList.length === 0){
      getWatchlist()
    .then(response=>{
       const watchListItems = response.data.data.shows;
       setUserWatchList(watchListItems.map((item)=>{
        return item._id;
       }))
  
      })
    }
  }, [userWatchList])

  const RenderComponent = ()=> {
    if(props.type==="home") {
       return  <MovieContext.Provider value={context}>
        <LandingPageSignIn />
      </MovieContext.Provider> } 
      else if(props.type==="categorySelected"){
        return   <MovieContext.Provider value={context}>
          <CategorySelected/>
        </MovieContext.Provider>
      }else if(props.type==="categorytypepage"){
        return  <MovieContext.Provider value={context}>
          <CategoryTypePage/>
        </MovieContext.Provider>
      }else if(props.type==="SearchPage"){
        return  <MovieContext.Provider value={context}>
          <SearchPage/>
        </MovieContext.Provider>
      }else if(props.type==="/videodetails/:id"){
        return  <MovieContext.Provider value={context}>
          <VideoInfo/>
        </MovieContext.Provider>
      }
  }
  return (<RenderComponent/>)
}
export { MoviesProvider};
