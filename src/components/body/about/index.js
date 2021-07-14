import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there 👋, I'm
          <br /> <span className="info-name">Rayna Mecham</span>.
          <br />
          Software engineer. RPG conqueror. Avid reader.{" "}
          <span className="no-break">TV enthusiast.</span>
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.png").default}
            alt="coding girl"
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
