import React from 'react';

import Profile from '../Profile';
import ProjectBox from '../ProjectBox';

const ProjectsSection = (props) => (
    <div className="section section--projects">
        <h1 className="section__header">{props.sectionName}</h1>
        <div className="section__body">
            <ProjectBox projectName="CallBell" />
        </div>
    </div>
);

export default ProjectsSection;