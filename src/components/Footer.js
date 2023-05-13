import React from "react";
import "../css/footer.css";
// import call from "../images/call.png";
// import mail from "../images/mail.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <h2> Contact Details</h2>
      <div className="mydetails">
        <a href="tel:+918233180717" className="contact-link">
          <FontAwesomeIcon icon={faMobile} />
          8233180717
        </a>
      </div>
      <div className="mydetails">
        <a href="mailto:lokeshtraders.btp@gmail.com " className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} />
          lokeshtraders.btp@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
