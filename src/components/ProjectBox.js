import React from 'react';

import SkillBadge from './SkillBadge';

const ProjectBox = (props) => (
    <div className="project-box box">
        <div className="project-box__header-container">
            <h1 className="project-box__header box-header">{props.projectName}</h1>
            <div className="project-box__header-strike">
                <img
                    src={"/images/projects/" + props.projectName + "-icon.png"}
                    className="project-box__image"
                />
            </div>
        </div>

        <div className="project-box__container">
            <p className="project-box__desc">{props.projectDescription}</p>
            <div className="project-box__badges">
                {props.badges.map((badge) => <SkillBadge badgeName={badge}/>)}
            </div>
        </div>

        <div className="project-box__button-container">
            <button>Show Me!</button>
            <button>GitHub</button>
        </div>
    </div>
);

export default ProjectBox;