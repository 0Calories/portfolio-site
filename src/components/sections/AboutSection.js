import React from 'react';

import Profile from '../Profile';
import SkillsBox from '../SkillsBox';

const AboutSection = (props) => (
    <div className="section about-section">
        <h1 className="section__header">{props.sectionName}</h1>
        <div className="section__body">
            <Profile />
            <SkillsBox />
        </div>
    </div>
);

export default AboutSection;