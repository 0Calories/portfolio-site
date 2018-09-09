import React from 'react';

import SkillBadge from './SkillBadge';

const SkillsBox = () => (
    <div className="skills-box box">
        <h1 className="skills-box__header box-header">My Skills</h1>
        <div className="skills-box__container">
            <SkillBadge badgeName="HTML5" />
            <SkillBadge badgeName="CSS3" />
            <SkillBadge badgeName="NodeJS" />
        </div>
    </div>
);

export default SkillsBox;