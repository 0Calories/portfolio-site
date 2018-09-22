import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

import Profile from '../Profile';
import SkillsBox from '../SkillsBox';

const ContactSection = (props) => (
    <div id="contact-section" className="section">
        <Flip right>
            <h1 id="contact-section__header" className="section__header">{props.sectionName}</h1>
        </Flip>
        
        <div className="section__body">
            
        
        </div>
    </div>
);

export default ContactSection;