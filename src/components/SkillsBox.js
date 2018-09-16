import React from 'react';

import SkillBadge from './SkillBadge';

const SkillsBox = () => (
    <div className="skills-box box">
        <h1 className="skills-box__header box-header">My Skills</h1>
        <div className="skills-box__container">
            <SkillBadge badgeName="Java" link="https://www.oracle.com/java/" />
            <SkillBadge badgeName="C++" link="https://isocpp.org/" />
            <SkillBadge badgeName="JavaScript" link="https://www.javascript.com/" />
            <SkillBadge badgeName="HTML5" link="https://en.wikipedia.org/wiki/HTML5" />
            <SkillBadge badgeName="CSS3" link="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" />
            <SkillBadge badgeName="NodeJS" link="https://nodejs.org/en/" />
            <SkillBadge badgeName="React" link="https://reactjs.org/" />
            <SkillBadge badgeName="Webpack" link="https://webpack.js.org/" />
            <SkillBadge badgeName="MongoDB" link="https://www.mongodb.com/" />
            <SkillBadge badgeName="Mocha" link="https://mochajs.org/" />
            <SkillBadge badgeName="Bootstrap" link="https://getbootstrap.com/" />
            <SkillBadge badgeName="jQuery" link="https://jquery.com/" />
        </div>
    </div>
);

export default SkillsBox;