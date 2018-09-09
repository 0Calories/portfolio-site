import React from 'react';

import SkillBadge from './SkillBadge';

const SkillsBox = () => (
    <div className="skills-box">
       <h1 className="skills-box__header">My Skills</h1>
       <SkillBadge imageName="HTML5" />
    </div>
);

export default SkillsBox;