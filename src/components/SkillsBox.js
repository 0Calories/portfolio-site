import React from 'react';

import SkillBadge from './SkillBadge';

const SkillsBox = () => (
    <div className="skills-box box">
        <h1 className="skills-box__header box-header">My Skills</h1>

        <div className="skills-box__container">
            <SkillBadge badgeName="Java" link="https://www.oracle.com/java/" animated={true} />
            <SkillBadge badgeName="C++" link="https://isocpp.org/" animated={true} />
            <SkillBadge badgeName="JavaScript" link="https://www.javascript.com/" animated={true} />
            <SkillBadge badgeName="HTML5" link="https://en.wikipedia.org/wiki/HTML5" animated={true} />
            <SkillBadge badgeName="CSS3" link="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" animated={true} />
            <SkillBadge badgeName="NodeJS" link="https://nodejs.org/en/" animated={true} />
            <SkillBadge badgeName="React" link="https://reactjs.org/" animated={true} />
            <SkillBadge badgeName="Webpack" link="https://webpack.js.org/" animated={true} />
            <SkillBadge badgeName="MongoDB" link="https://www.mongodb.com/" animated={true} />
            <SkillBadge badgeName="Mocha" link="https://mochajs.org/" animated={true} />
            <SkillBadge badgeName="Bootstrap" link="https://getbootstrap.com/" animated={true} />
            <SkillBadge badgeName="jQuery" link="https://jquery.com/" animated={true} />
        </div>
        
    </div>
);

export default SkillsBox;