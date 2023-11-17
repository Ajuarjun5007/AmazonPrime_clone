import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
export const UserContext = React.createContext(null);
import { getWatchlist } from "../WatchList/WatchlistService";
function SignInProvider(props) {

  const [username, setUsername] = useState(undefined);
  const [status, setStatus] = useState(undefined);
  const [userWatchList, setUserWatchList] = useState([])
  const context = {
    username,
    setUsername,
    status,
    setStatus,
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

  return (
    <>
      <UserContext.Provider value={context}>
        <SignIn NavBarControl={props.NavBarControl}/>
      </UserContext.Provider>
    </>
  );
}
export { SignInProvider};
