import React from 'react';

import Profile from '../Profile';
import ProjectBox from '../ProjectBox';

const projects = [{
    name: 'CallBell',
    description: 'An IoT based Call Bell system. It includes a locally hosted Express.js server with a single POST endpoint, and a physical circuit with an Arduino MKR1000. The Arduino connects to the local network and sends a POST request to the server, causing a toast notification to appear on the server\'s host.',
    badges: ['NodeJS', 'Arduino'],
    github: 'https://github.com/0Calories/iot-express-callbell'
}, {
    name: 'BottleIt',
    description: 'Bottle up your thoughts and cast them out to sea. A webapp that allows users to post anonymous messages and fetch random messages posted by others.',
    badges: ['NodeJS', 'MongoDB', 'Mocha'],
    github: 'https://github.com/0Calories/bottle-it'
}];

const ProjectsSection = (props) => (
    <div className="projects-section section">
        <h1 className="section__header">{props.sectionName}</h1>
        <div className="section__body">
            {projects.map((project) => <ProjectBox projectName={project.name} projectDescription={project.description} badges={project.badges} github={project.github}/>)}
        </div>
    </div>
);

export default ProjectsSection;