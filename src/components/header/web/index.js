import React from "react";
import "./web.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSplotch } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <FontAwesomeIcon
            icon={faSplotch}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "6px",
            }}
          />
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <FontAwesomeIcon
            icon={faLaptopCode}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "6px",
            }}
          />
          Skills
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <FontAwesomeIcon
            icon={faBriefcase}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "6px",
            }}
          />
          Work &amp; Education
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <FontAwesomeIcon
            icon={faUserCircle}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "6px",
            }}
          />
          Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
