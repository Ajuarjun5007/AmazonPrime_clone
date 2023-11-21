import './FooterForSignIn.css';
import {Link} from "react-router-dom";
function FooterForSignIn() {
  return (
    <>
    <div className="footer-container">

      <div className="logo-container">
        <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt="" />
      </div>
<div className='footer-text-container'>
<div id="footer-content">
        <Link
              className="footer-tag"
              onClick={() =>
                alert(
                  "The Page your Re-Directing is not a source of prime video Clone."
                )
              }
              target="_blank"
     to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"
   >
          <span className="footerspan">
          Terms and Privacy Notice
            </span>
            </Link>

            <Link
              className="footer-tag"
              onClick={() =>
                alert(
                  "The Page your Re-Directing is not a source of prime video Clone."
                )
              }
              target="_blank"
              to="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940"
            >
          <span className="footerspan">
        Send us feedback
        </span>
        </Link>
        <Link
              className="footer-tag"
              onClick={() =>
                alert(
                  "The Page your Re-Directing is not a source of prime video Clone."
                )
              }
              target="_blank"
              to="https://www.amazon.in/help"
            >
          <span className="footerspan">
        Help
        </span>
        </Link>
      </div>
      <div className="license-container">
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
</div>
      
    </div>
    </>
  );
}
export default FooterForSignIn;
