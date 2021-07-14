import React from "react";
import "./education-card.css";

function EducationCard({ item }) {
  return (
    <div className="education-card">
      <img
        src={item.companyLogo}
        className="education-logo"
        alt="company logo"
      />
      <div className="education-info">
        <label className="school-name">{item.company}</label>
        <div className="education-dates">
          <label>{item.dateJoined}</label> - <label>{item.dateEnd}</label>
        </div>
        <div className="education-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
