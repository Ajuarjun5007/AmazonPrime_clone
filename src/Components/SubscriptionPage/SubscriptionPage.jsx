import {useState, useEffect } from "react";
import "./SubscriptionPage.css";
import { Link, useLocation } from "react-router-dom";
// import { RiTriangleFill } from "react-icons/ri"; // Import the correct component
import { BiSolidDownArrow } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai"
import FooterForSignOut from "../LandingPageSignout/FooterForSIgnOut/FooterForSIgnOut";

function SubscriptionPage(props) {
  const location = useLocation();

  const { NavBarControl } = props;
  useEffect(() => {
    NavBarControl(location.pathname);
  }, []);

  const [planDetail,setPlanDetail] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [mobileEdition,setMobileEdition] = useState(false);
  const [primeEdition,setPrimeEdition] = useState(true);

  const mobileEditionHandler = ()=>{
    setMobileEdition(true);
    setPrimeEdition(false);
  }
  const primeEditionHandler = ()=>{
    setPrimeEdition(true);
    setMobileEdition(false);
  }
  console.log("prime",primeEdition);
  console.log("mobile",mobileEdition);

  const handleToggle = (option,rentValue) => {
    setPlanDetail(rentValue);
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
}
  return (
    <>
      {/* prime container */}
      <div className="mb-prime-top-container">
        <img src="src/assets/loginassets/blueprime.png" alt="" />
      </div>
      {/* prime plan container */}
      <div className="mb-prime-plan-container">
        <strong className="mb-prime-plan">Choose a Prime plan,</strong>
        <span className="mb-prime-plan-normal">Change or cancel anytime</span>
      </div>
      {/* box container */}
      <div className="mb-box-container">
        <div className={primeEdition?"mb-box mb-box-1":"mb-box-1"} onClick={primeEditionHandler}>
          <p>Prime</p>
        </div>
          <BiSolidDownArrow className={primeEdition?"down-arrow-1 down-arrow-active":"down-arrow-1"} /> 
        <div 
        className={mobileEdition?"mb-box mb-box-2":"mb-box-2"}
        onClick={mobileEditionHandler}>
          <p>Prime Video</p>
          <p>Mobile</p>
          <p>Edition</p>
        </div>
        <BiSolidDownArrow 
        className={mobileEdition?"down-arrow-2 down-arrow-active":"down-arrow-2"} /> 
      </div>
      {/* plan container */}
      <div className="mb-plan-container">
        <div className="plan-header">
          { primeEdition &&
            <p> Get VIDEO + SHOPPING + MUSIC benefits</p>
          }
          { mobileEdition &&
            <p> Get mobile only VIDEO benefit</p>
          }
        </div>
        {/* item-container */}
        <div className="mb-item-container">
            <div className="mb-tick-container">
                <BsCheckLg className="mb-tick"/>
               {primeEdition && <BsCheckLg className="mb-tick"/>} 
               {primeEdition && <BsCheckLg className="mb-tick"/>} 
            </div>
            <div className="plan-content-container">

            {primeEdition && 
           <div className="mb-plan-content">
                Watch Prime Video on <strong> any five screens ad-free </strong>
                in <strong> 4k UHD</strong> (2160p)
                </div>
              }

             { primeEdition && <div className="mb-plan-content">
               Get unlimited  <strong>FREE Same-Day and One-Day delivery</strong> on Amazon
                </div>
            }
            { mobileEdition && <div className="mb-plan-content">
               Watch Prime Video on  <strong>one mobile screen with ads 
                </strong> in <strong>SD </strong>(480p)
                </div>
            }

              { primeEdition && <div className="mb-plan-content">
                Enjoy <strong>ad-free music </strong> on Amazon music
                </div>
                }
            </div>
        </div>

        {/* plan  type */}
<div className="plan-type-container">

      { primeEdition &&
      <div className="plan-type">
        <div className={`input-circle ${selectedOption === "option1" ? "checked" : ""}`} 
        onClick={() => handleToggle("option1","1499")} />

        <div className="plan-type-content">
          <p className="blue-plan">Try Prime Free</p>
          <p>₹ 1499/year auto charged post trial</p>
        </div>
      </div>}

      { mobileEdition &&
      <div className="plan-type">
        <div className={`input-circle ${selectedOption === "option2" ? "checked" : ""}`}
         onClick={() => handleToggle("option2","599-mobile")} />
        <div className="plan-type-content">
        <p className="blue-plan">₹599 / year</p>
          <p>effectively ₹ 50 a month when paid annually</p>
        </div>
      </div>
        }






      { primeEdition &&
      <div className="plan-type">
        <div className={`input-circle ${selectedOption === "option2" ? "checked" : ""}`} 
        onClick={() => handleToggle("option2","1499")} />
        <div className="plan-type-content">
          <strong className="plan-type-header"> ₹ 1499 / year</strong>
          <p>effectively ₹ 125 a month when paid annually</p>
        </div>
      </div>
        }
        { primeEdition &&
      <div className="plan-type">
        <div className={`input-circle ${selectedOption === "option3" ? "checked" : ""}`}
        onClick={() => handleToggle("option3","599")} />
        <div className="plan-type-content">
          <strong className="plan-type-header"> ₹ 599 / 3 months</strong>
          <p>effectively ₹ 200 a month when paid quarterly</p>
        </div>
      </div>
      }
      { primeEdition &&
      <div className="plan-type">
        <div className={`input-circle ${selectedOption === "option4" ? "checked" : ""}`} 
        onClick={() => handleToggle("option4","299")} />
        <div className="plan-type-content">
          <strong className="plan-type-header"> ₹ 299 / month</strong>
          <p>automatically renews monthly until canceled</p>
        </div>
      </div>
  }
    </div>
      </div>
      {/* payments button styles*/}
      <div className="payment-container">
        <Link to={"PaymentPage"}
          state={{value:planDetail}}
        >
        <button disabled={planDetail==0?true:false}> Continue Payment
            <AiOutlineArrowRight className="right-arrow"/>
        </button>
        </Link>
    </div>

    <FooterForSignOut />
  
    </>
  );
}

export default SubscriptionPage;
