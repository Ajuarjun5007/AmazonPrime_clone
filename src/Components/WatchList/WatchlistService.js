import { instance, headers } from "../ApiFetch";

let key = JSON.parse(localStorage.getItem("userInfo")) || [];

const token = "Bearer " + key[0];
headers["Authorization"] = token;

function addtoWatchlist(movieId){
  const suffix = `social_media/watchlist/`+movieId;
  return instance.patch(suffix, 
    {
        showId: movieId
    },
    {headers} );
}
function getWatchlist() {
  const suffix =`ott/watchlist/like`;
  return instance.get(suffix, 
    {headers} );
}
export { addtoWatchlist,getWatchlist };
