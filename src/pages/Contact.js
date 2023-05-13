import React, { useRef } from "react";

import "../css/contact.css";
import { useInView } from "framer-motion";
const Contact = () => {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true });
  return (
    <div className="contact">
      <div id="content">
        <h1>Get In Touch</h1>
        <br />
        <h2>Location</h2>
        <p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443.4529364758668!2d77.48571014447859!3d27.230968376610466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973a39a748c2307%3A0xed42c77a332448a9!2sLOKESH%20TRADERS!5e0!3m2!1sen!2sin!4v1682761165984!5m2!1sen!2sin"
            width="600"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </p>
      </div>
      <div
        className="formdiv"
        ref={formRef}
        style={{
          transform: formInView ? "none" : "translateX(200px)",
          opacity: formInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <form name="contact-lokeshtraders" method="post" onSubmit="submit">
          <h2>Contact us</h2>
          <input type="hidden" name="form-name" value="contact-lokeshtraders" />
          <div className="input-group">
            <input required type="text" name="name" className="input" />
            <label class="user-label">Name</label>
          </div>
          <div className="input-group">
            <input type="email" name="email" className="input" required />
            <label class="user-label">Email</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="message"
              id="message"
              className="input"
              required
            />
            <label class="user-label">Message</label>
          </div>
          <button type="submit" id="submitbutton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
