import "./FooterForSignOut.css";
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
  <a href="https://www.primevideo.com/help/ref=atv_ftr_ter?nodeId=202064890" target="_blank">
    <span>
    Terms and Privacy Notice
    </span>
    </a> <a href="https://example.com/feedback">Send us feedback</a>
  <a href="https://example.com/help">Help</a>
</div>

      <div className="license">
        <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
    </>
  );
}
export default FooterForSignOut;
