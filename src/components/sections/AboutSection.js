import React from 'react';

import Profile from './../Profile';

const AboutSection = (props) => (
    <div className="section">
        <h1 className="section__header">{props.sectionName}</h1>
        <div className="section__body">
            <Profile />
            <div>Test</div>
        </div>
    </div>
);

export default AboutSection;