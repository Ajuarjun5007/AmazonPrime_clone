
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ManageProfilePage.css";
import {addProfileImage,updateUser} from "./UpdateProfileImageService"
import FooterForSignOut from "../../Components/LandingPageSignout/FooterForSIgnOut/FooterForSIgnOut"
function ManageProfilePage(props){

  const location = useLocation();

  const { NavBarControl } = props;
  useEffect(() => {
    NavBarControl(location.pathname);
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user",user);
  const defaultUrl = user.profileImage !== "" ? user.profileImage : "https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
const [profileImage,setProfileImage] = useState();
const [profileUrl,setProfileUrl] = useState(defaultUrl);

const profileImageHandler =async () => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mzc2NjhlOWZiNzc1NDRkOWVmY2NlNiIsImlhdCI6MTY5ODEyOTU1MCwiZXhwIjoxNzI5NjY1NTUwfQ.CMWx2Tb7kDLy9QgtbrPr4LEsKx4gxIkh5ceM6M_RvEM");
  myHeaders.append("projectId", "p7nvgrsg3fdf");

  var formdata = new FormData();
  formdata.append("profileImage", profileImage);

  var requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  const response = await fetch("https://academics.newtonschool.co/api/v1/user/updateProfileImage", requestOptions)
  if (response.ok) {
    const result = await response.json();  
    const user  = result.data.user;
    console.log("result",result.data.user.profileImage);
    localStorage.setItem("user", JSON.stringify(result.data.user));

      setProfileUrl(result.data.user.profileImage);
      updateUser({profileImage:user.profileImage})
      .then(response=>{
        console.log("respnse",response);
      })
  }

};




  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    console.log("sf",selectedFile);
    if (selectedFile) {
    setProfileImage(selectedFile);
    }
}
console.log("img",profileImage);

    return(
    <>
      <div className="manage-profile-container">
 
 {/* Manage Profile header  */ }    
        <div className="manage-profile-container-header">
            <span>  
            prime video
            </span>
        </div>

        {/* Manage-profile-content */}
         <div className="profile-content">
            <div className="profile-content-child">
            <div className="profile-content-header">
            <span>Manage Profile</span>
            </div>
            {/* image-handler */}

            <div className="image-handle-container">
           <img src={profileUrl} alt="" />
                <input 
                onChange={handleFileChange}
                id="file-input"type="file"/>
                <button
                onClick={()=>profileImageHandler()}
                 className="upload-btn">UPLOAD IMAGE</button>
            </div>
            <div className="password-handle-container">
                <label htmlFor="">Current Paassword</label>
                <input id="curnt-password" type="password" placeholder="Enter your current password"/>
                <label htmlFor="">Update Paassword</label>
                <input id="update-password" type="password" placeholder="Enter your new password"/>
            </div>
            </div>
         </div>
        {/*  */}
      </div>
      <FooterForSignOut/>
    </>
    )
}
export default ManageProfilePage;