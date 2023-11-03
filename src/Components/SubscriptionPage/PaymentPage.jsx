import "./SubscriptionPage.css"
import React, { useState, useEffect } from 'react';
import {  useLocation } from "react-router-dom";
import {BiSolidInfoCircle} from "react-icons/bi"
import blueprime from "../../assets/loginassets/blueprime.png"
import creditcard from "../../assets/loginassets/creditcardimage.png"

function PaymentPage(props){
    const location = useLocation();

    console.log("location",location);
    const { NavBarControl } = props;
    useEffect(() => {
      NavBarControl(location.pathname);
    }, []);
  
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvvNumber, setCVVNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleCardNumberChange = (e) => {
      setCardNumber(e.target.value);
    };
    const handleCVVNumberChange = (e) => {
      setCVVNumber(e.target.value);
    };
    const handleMonthChange = (e) => {
      setMonth(e.target.value);
    };
    const handleYearChange = (e) => {
      setYear(e.target.value);
    };




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
        value={name}
        onChange={handleNameChange}
      />
      <p id="input-condtn">please enter a valid name</p>

      <label htmlFor="cardNumber">Enter your card number</label>
      <input
        className="card-nmbr-input"
        type="text"
        placeholder="card number"
        maxLength={16}
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      <p id="input-condtn">please enter a  valid card number</p>

      <input
        className="card-cvv-input"
        type="text"
        placeholder="cvv number"
        maxLength={3}
        value={cvvNumber}
        onChange={handleCVVNumberChange}
      />
      <p id="input-condtn">please enter a  valid cvv number</p>
    
      <div className="card-expiry-container">
      <p htmlFor="">Expiration date</p>
      <input
        className="card-mnth-input"
        type="number"
        placeholder="month"
        min={1}
        max={12}
        value={month}
        onChange={handleMonthChange}
      />
      <input
          className="card-year-input"
          type="number"
          placeholder="year"
          min={2023}
          max={2040}
          step={1}
          value={year}
          onChange={handleYearChange}
        />
      </div>
        
    </div>
        </div>
        <div className="pay-btn-container">
          <button id="pay-btn">PAY NOW</button>
        </div>
          </div>
      </div>
        </>
    )
}
export default PaymentPage;