import React from "react";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>
            Want to get in touch? Contact me on LinkedIn, GitHub, or at{" "}
            <a href="mailto: rayna.mecham@gmail.com">rayna.mecham@gmail.com</a>
          </p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            download
            href={require("../../../assets/Rayna_Mecham_Resume.pdf").default}
          >
            <FontAwesomeIcon
              icon={faCloudDownloadAlt}
              style={{ fontSize: "24px", marginRight: "6px", color: "white" }}
            />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
