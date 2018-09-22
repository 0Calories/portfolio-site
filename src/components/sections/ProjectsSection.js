import React from 'react';
import Flip from 'react-reveal/Flip';

import Profile from '../Profile';
import ProjectBox from '../ProjectBox';

const projects = [{
    name: 'CallBell',
    description: 'An IoT based Call Bell system. It is composed of a circuit with an Arduino and push-button, and a script running off a computer. The Arduino is programmed to connect to the IP of the server\'s host computer. When the button is pressed, it sends a request to the server, which causes a pop-up notification to appear on the host computer. In more technical terms, the computer is running an Express.js server with a single POST endpoint, and the Arduino fires off a POST request to the server when the button is pressed.',
    badges: ['NodeJS', 'Arduino'],
    github: 'https://github.com/0Calories/iot-express-callbell'
}, {
    name: 'BottleIt',
    description: 'Bottle up your thoughts and cast them out to sea. A web application that allows users to post anonymous messages and fetch random messages posted by others. I\'m currently working on the front-end of the application before I release it to the public. More to come soon!',
    badges: ['NodeJS', 'MongoDB', 'Mocha'],
    github: 'https://github.com/0Calories/bottle-it'
}];

const ProjectsSection = (props) => (
    <div className="projects-section section">
        <Flip right>
            <h1 className="section__header">{props.sectionName}</h1>
        </Flip>
        
        <div className="section__body">
            {projects.map((project) => <ProjectBox projectName={project.name} projectDescription={project.description} badges={project.badges} github={project.github}/>)}
        </div>
    </div>
);

export default ProjectsSection;