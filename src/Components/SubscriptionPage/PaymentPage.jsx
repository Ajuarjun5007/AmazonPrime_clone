import "./SubscriptionPage.css"
import React, { useEffect } from 'react';
import {  useLocation } from "react-router-dom";

function PaymentPage(props){
    const location = useLocation();

    console.log("location",location);
    const { NavBarControl } = props;
    useEffect(() => {
      NavBarControl(location.pathname);
    }, []);
  
    return(
        <>
      <div className="mb-prime-top-container">
        <img src="src/assets/loginassets/blueprime.png" alt="prime" />
      </div>
        </>
    )
}
export default PaymentPage;