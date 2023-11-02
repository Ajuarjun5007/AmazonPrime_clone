import { useEffect } from "react";
import "./SubscriptionPage.css";
import { useLocation } from "react-router-dom";
// import { RiTriangleFill } from "react-icons/ri"; // Import the correct component
import { BiSolidDownArrow } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";

function SubscriptionPage(props) {
  const location = useLocation();

  console.log("location", location.pathname);
  const { NavBarControl } = props;
  useEffect(() => {
    NavBarControl(location.pathname);
  }, []);

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
        <div className="mb-box-1">
          <p>Prime</p>
        </div>
          <BiSolidDownArrow className="down-arrow-1" /> 
        <div className="mb-box-2">
          <p>Prime Video</p>
          <p>Mobile</p>
          <p>Edition</p>
        </div>
        <BiSolidDownArrow className="down-arrow-2" /> 
      </div>
      {/* plan container */}
      <div className="mb-plan-container">
        <div className="plan-header">
            <p> Get VIDEO + SHOPPING + MUSIC benefits</p>
        </div>
        {/* item-container */}
        <div className="mb-item-container">
            <div className="mb-tick-container">
                <BsCheckLg className="mb-tick"/>
                <BsCheckLg className="mb-tick"/>
                <BsCheckLg className="mb-tick"/>

            </div>
            <div className="plan-content-container">
           <div className="mb-plan-content">
                Watch Prime Video on <strong> any five screens ad-free </strong>
                in <strong> 4k UHD</strong> (2160p)
                </div>

                <div className="mb-plan-content">
               Get unlimited  <strong>FREE Same-Day and One-Day delivery</strong> on Amazon
                </div>
                <div className="mb-plan-content">
                Enjoy <strong>ad-free music </strong> on Amazon music
                </div>
            </div>
        </div>
        {/* plan  type */}
        <div className="plan-type-container">
            
        </div>
      </div>
    </>
  );
}

export default SubscriptionPage;
