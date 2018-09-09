import React from 'react';

import SkillBadge from './SkillBadge';

const SkillsBox = () => (
    <div className="skills-box box">
        <h1 className="skills-box__header box-header">My Skills</h1>
        <div className="skills-box__container">
            <SkillBadge badgeName="Java" />
            <SkillBadge badgeName="C++" />
            <SkillBadge badgeName="JavaScript" />
            <SkillBadge badgeName="HTML5" />
            <SkillBadge badgeName="CSS3" />
            <SkillBadge badgeName="NodeJS" />
            <SkillBadge badgeName="React" />
            <SkillBadge badgeName="Webpack" />
            <SkillBadge badgeName="MongoDB" />
            <SkillBadge badgeName="Mocha" />
            <SkillBadge badgeName="Bootstrap" />
            <SkillBadge badgeName="jQuery" />
        </div>
    </div>
);

export default SkillsBox;