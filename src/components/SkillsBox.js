import React from "react";

import SkillBadge from "./SkillBadge";

const SkillsBox = () => (
  <div className="skills-box box">
    <h1 className="skills-box__header box-header">My Skills</h1>

    <div className="skills-box__container">
      <SkillBadge badgeName="JavaScript" animated={true} />
      <SkillBadge badgeName="HTML5" animated={true} />
      <SkillBadge badgeName="CSS3" animated={true} />
      <SkillBadge badgeName="NodeJS" animated={true} />
      <SkillBadge badgeName="React" animated={true} />
      <SkillBadge badgeName="Java" animated={true} />
      <SkillBadge badgeName="C++" animated={true} />
      <SkillBadge badgeName="Webpack" animated={true} />
      <SkillBadge badgeName="MongoDB" animated={true} />
      <SkillBadge badgeName="Mocha" animated={true} />
      <SkillBadge badgeName="Bootstrap" animated={true} />
      <SkillBadge badgeName="jQuery" animated={true} />
    </div>
  </div>
);

export default SkillsBox;
