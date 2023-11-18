import ReactPlayer from "react-player";
import { Link, useLocation,useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import { movieDetail } from "../ApiFetch";
import './FullVideo.css'
import { AiOutlineClose } from "react-icons/ai";

function FullVideo(){
 const location = useLocation();
  const params = useParams();
  const [movieURL, setMovieURL] = useState(undefined);
  const [movieId,setMovieId] = useState(undefined);
  

  console.log("fvl",location.pathname.split('/')[1]);
  console.log("pr",params);

    useEffect(() => {
        // setLoaded(false);
        if (params.id !== undefined) {
          movieDetail(params.id).then((res) => {
            console.log("parma",res.data.video_url);
            setMovieURL(res.data.video_url);
            setMovieId(res.data._id);
            // setLoaded(true);
          });
        }
      }, [params]);



    return(
        <>
        <div className="full-video-container">
        <ReactPlayer
              url={movieURL}
              fullScreen={true}
              playing={true}
              controls={true}
              loop={false}
              width='100%'
              height='100%'
              className="react-player"
            />
            <div className="back-btn-container">
                <Link to={`/videodetails/${movieId}`}>
            <AiOutlineClose className="close-btn" />
                </Link>
            </div>
        </div>
        </>
    )
}
export default FullVideo;