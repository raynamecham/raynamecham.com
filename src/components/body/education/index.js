import React from "react";
import Separator from "../../common/separator";
import "./education.css";
import { EducationData } from "../../data/education";
import EducationCard from "./education-card";

function Education() {
  const data = EducationData;
  return (
    <div className="education">
      <Separator />
      <label className="section-title">Education</label>
      <div className="education-list">
        {data.map((item) => {
          return <EducationCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Education;
