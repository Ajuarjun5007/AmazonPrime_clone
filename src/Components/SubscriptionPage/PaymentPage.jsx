import "./SubscriptionPage.css"
import React, { useState, useEffect } from 'react';
import {  Link, json, useLocation } from "react-router-dom";
import {BiSolidInfoCircle} from "react-icons/bi"
import blueprime from "../../assets/loginassets/blueprime.png"
import creditcard from "../../assets/loginassets/creditcardimage.png"
import FooterForSignOut from "../LandingPageSignout/FooterForSIgnOut/FooterForSIgnOut";
function PaymentPage(props){
  
    const location = useLocation();
    const plan = location.state.value;
    const [message,setMessage] = useState("");
    const [subscriptionMessage,setSubscriptionMessage] = useState(false);
    console.log("location",location.state.value);


    useEffect(()=>{
      if(plan == 1499){
        setMessage("you have subscribed prime plan for ₹ 1499 / year");
      }else if(plan == 599){
        setMessage("you have subscribed prime plan for ₹ 599 / 3 months");
      }else if(plan == 299){
        setMessage("you have subscribed prime plan for ₹ 299 / month");
      }else if(plan == "599-mobile"){
        setMessage("you have subscribed prime plan- Mobile Editon for ₹599 / year");
      }
    },[])



    const { NavBarControl } = props;
    useEffect(() => {
      NavBarControl(location.pathname);
    }, []);
    
    const [formErrorStatus,setFormErrorStatus] = useState({name:true,cardNumber:true,cvvNumber:true,month:true,year:true
    })
   

  
    const handleNameChange = (e) => {      
      if(e.target.value.trim().length===0){
        setFormErrorStatus({...formErrorStatus,name:true});
      }else{
      setFormErrorStatus({...formErrorStatus,name:false});
      }
    };
  
    const handleCardNumberChange = (e) => {
     
      if(e.target.value.trim().length===0 || e.target.value.trim().length!==16 ){
        setFormErrorStatus({...formErrorStatus,cardNumber:true});
      }else{
      setFormErrorStatus({...formErrorStatus,cardNumber:false});
      }
    };
    const handleCVVNumberChange = (e) => {
     
      if(e.target.value.trim().length===0 || e.target.value.trim().length!==3){
        setFormErrorStatus({...formErrorStatus,cvvNumber:true});
      }else{
      setFormErrorStatus({...formErrorStatus,cvvNumber:false});
      }
    };
    const handleMonthChange = (e) => {
      const month =parseInt(e.target.value) || 0;
      if( month>12 || month<1){
        setFormErrorStatus({...formErrorStatus,month:true});
      }else{
      setFormErrorStatus({...formErrorStatus,month:false});
      }
      console.log("event",month);
    };
    const handleYearChange = (e) => {
      const year =parseInt(e.target.value) || 0;
      
      if(year<2023){
        setFormErrorStatus({...formErrorStatus,year:true});
      }else{
      setFormErrorStatus({...formErrorStatus,year:false});
      }
    };

    let msg = "hi";
    const payNowHandler = ()=>{
      setSubscriptionMessage(true);
      const SubscriptionDetails =[];
      const userDetails= {};
       userDetails.SusbscriptionStatus = JSON.stringify(msg);
       
    }

    return(
        <>
      {/* prime container */}
      <div className="mb-prime-top-container">
      <img src={blueprime} alt="prime" />
      </div>
      {/* {Payment method container} */}
      <div className="payment-header">
        <p>Select a payment method</p>
      </div>
      <div className="card-detail-container">
        {/* card container */}
        <div className="card-container">
          <div className="card-header">
            <p>CREDIT & DEBIT CARDS</p>
          </div>
          <div className="card-slct-container">
            <p>Credit / Debit card</p>
            <img src={creditcard} alt="" />
            <div className="payment-card-details">
              <BiSolidInfoCircle className="info-circle"/>
              <div>Please ensure your card is enabled for online transactions.</div>
            </div>
             
          <div className="card-user-details">
      <label htmlFor="name">Enter your name</label>
      <input
        className="card-name-input"
        type="text"
        placeholder="name"
        onChange={handleNameChange}
      />
      {formErrorStatus.name &&
      <p id="input-condtn">please enter a valid name</p>
      }
      <label htmlFor="cardNumber">Enter your card number</label>
      <input
        className="card-nmbr-input"
        type="text"
        placeholder="card number"
        maxLength={16}
        onChange={handleCardNumberChange}
      />
      {
        formErrorStatus.cardNumber &&
      <p id="input-condtn">please enter a  valid card number</p>
      }

      <input
        className="card-cvv-input"
        type="text"
        placeholder="cvv number"
        maxLength={3}
        onChange={handleCVVNumberChange}
      />
      {
        formErrorStatus.cvvNumber &&
      <p id="input-condtn">please enter a  valid cvv number</p>
      }
      <div className="card-expiry-container">
      <p htmlFor="">Expiration date</p>
      <input
        className="card-mnth-input"
        type="number"
        placeholder="month"
        min={1}
        max={12}
        onChange={handleMonthChange}
      />
       {
        formErrorStatus.month &&
      <p id="input-condtn">please enter a  valid month</p>
      }
      <input
          className="card-year-input"
          type="number"
          placeholder="year"
          min={2023}
          max={2040}
          step={1}
          onChange={handleYearChange}
        />
          {
        formErrorStatus.year &&
        <p id="input-condtn">please enter a  valid year</p>
      }
      </div>
        
    </div>
        </div>
        <div className="pay-btn-container">
          <button disabled={ Object.values(formErrorStatus).find(errorStatus=> errorStatus === true) == true}
          onClick={payNowHandler}
           id="pay-btn">PAY NOW</button>
        </div>
          </div>
      </div>

    {  subscriptionMessage &&
      <div className="plan-alert-container">
          <div className="plan-alert-box">
            <p>Congratulations..!!!</p>
            <p>{message}</p>
            <p>Welcome to Amazon Prime</p>
          </div>
          <button
           id="go-bck-btn"
          onClick={()=>setSubscriptionMessage(false)}
           > Go Back</button>
          <Link to={'/home'}>
          <button id="enjoy-prime-btn">Enjoy Prime</button>
          </Link>
        </div>
        }

        <FooterForSignOut/>
        </>
    )
}
export default PaymentPage;