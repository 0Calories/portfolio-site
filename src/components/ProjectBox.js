import React from 'react';

const ProjectBox = (props) => (
    <div className="project-box box">
        <h1 className="project-box__header box-header">{props.projectName}</h1>
        <div className="project-box__container">
        </div>
    </div>
);

export default ProjectBox;