
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./ManageProfilePage.css";
import FooterForSignOut from "../../Components/LandingPageSignout/FooterForSIgnOut/FooterForSIgnOut"
function ManageProfilePage(props){
    const location = useLocation();

  const { NavBarControl } = props;
  useEffect(() => {
    NavBarControl(location.pathname);
  }, []);
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
                <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt="" />
                <input id="file-input"type="file"/>
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