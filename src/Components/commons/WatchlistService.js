import { instance, headers } from "../ApiFetch";

const token = "Bearer " + localStorage.getItem("token");
headers["Authorization"] = token;
function addtoWatchlist(movieId) {
  console.log("headers",headers)
  const suffix = `social_media/watchlist/`+movieId;
  return instance.patch(suffix, 
    {
        showId: movieId
    },
    {headers} );
}
function getWatchlist() {
  console.log("headers",headers)
  const suffix =`ott/watchlist/like`;
  return instance.get(suffix, 
    {headers} );
}
export { addtoWatchlist,getWatchlist };
