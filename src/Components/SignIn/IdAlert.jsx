import './IdAlert.css'
import {LiaExclamationTriangleSolid} from 'react-icons/lia';

function IdAlert(props){
    const {usernameType, isLoginSuccess} = props
    return (
        <>
        <div className="error-box">
        <div className="error-alert-container">
            <LiaExclamationTriangleSolid className="error-icon"/>
            <div className="error-msg">
              <p className="problem-text">There was a problem</p>
             {isLoginSuccess !== true ? <p className="error-text">we cannot find an account with that {usernameType}</p> 
             : <p className="error-text">Your password is incorrect</p>} 
            </div>
        </div>
        </div>
        </>
    )
}
export {IdAlert};