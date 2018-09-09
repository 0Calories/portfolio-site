import React from 'react';

import SkillBadge from './SkillBadge';

const ProjectBox = (props) => (
    <div className="project-box box">
        <h1 className="project-box__header box-header">{props.projectName}</h1>
        <div className="project-box__container">
            <img 
                src={"/images/projects/" + props.projectName + ".png"} 
                className="project-box__image"
            />
            <p className="project-box__desc">{props.projectDescription}</p>
            <div className="project-box__badges">
                {props.badges.map((badge) => <SkillBadge badgeName={badge}/>)}
            </div>
        </div>
    </div>
);

export default ProjectBox;