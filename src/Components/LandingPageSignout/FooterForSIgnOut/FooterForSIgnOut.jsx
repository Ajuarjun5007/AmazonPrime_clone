import "./FooterForSignOut.css";
import {Link} from "react-router-dom";

function FooterForSignOut() {
  return (
    <>
    <div className="footer-items">

      <div className="prime-logo">
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"
          alt=""
        />
      </div>

      <div className="footer-text">
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
    <span>
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
      <span>
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
  <span>
    Help
</span>
</Link>
   </div>

      <div className="license">
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
    </>
  );
}
export default FooterForSignOut;
