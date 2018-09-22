import React from 'react';
import Bounce from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import Profile from '../Profile';
import SkillsBox from '../SkillsBox';

const AboutSection = (props) => (
    <div className="section about-section">
        <Flip left>
            <h1 className="section__header">{props.sectionName}</h1>
        </Flip>
        
        <div className="section__body">
            
            <Bounce left>
                <div className="profile-wrapper">
                    <Profile />
                </div>
            </Bounce>
            
            <Bounce right>
                <div className="skills-box-wrapper">
                    <SkillsBox />
                </div>
            </Bounce>
        
        </div>
    </div>
);

export default AboutSection;