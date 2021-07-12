import React from "react";
import Separator from "../../common/separator";
import "./work.css";
import { WorkData } from "../../data/work";
import WorkCard from "./work-card";

function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work &amp; Education</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
