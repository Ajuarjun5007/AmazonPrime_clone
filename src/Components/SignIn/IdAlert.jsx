import './IdAlert.css'
import {LiaExclamationTriangleSolid} from 'react-icons/lia';
import { useLocation } from 'react-router-dom';
function IdAlert(props){
    const {usernameType, isLoginSuccess,errorMessage,errormsg} = props ;
    console.log("IdAlerterrorMsg",errorMessage);
    console.log("msgcheck",errorMessage!==null);
    const location = useLocation();
    console.log("loca",location);    
    return (
        <>
        <div className="error-box">
        <div className="error-alert-container">
            <LiaExclamationTriangleSolid className="error-icon"/>
            <div className="error-msg">
              <p className="problem-text">There was a problem</p>
             {isLoginSuccess!==true && location.pathname!=="/SignIn" && errormsg.map((msg)=>(
                 <p className="error-text">
                    {msg}
                 </p> 
             )
             ) 
            } 
            <p className="error-text">{errorMessage}</p>
            </div>
        </div>
        </div>
        </>
    )
}
export {IdAlert};