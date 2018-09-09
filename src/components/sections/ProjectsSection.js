import React from 'react';

import Profile from '../Profile';
import ProjectBox from '../ProjectBox';

const projects = [{
    name: 'CallBell',
    description: 'An IoT based Call Bell system. It includes a locally hosted Express.js server with a single POST endpoint, and a physical circuit with an Arduino MKR1000.The Arduino connects to the local network and sends a POST request to the server, causing a toast notification to appear on the server\'s host.',
    badges: ['NodeJS', 'Arduino']
}];

const ProjectsSection = (props) => (
    <div className="section section--projects">
        <h1 className="section__header">{props.sectionName}</h1>
        <div className="section__body">
            {projects.map((project) => <ProjectBox projectName={project.name} projectDescription={project.description} badges={project.badges}/>)}
        </div>
    </div>
);

export default ProjectsSection;