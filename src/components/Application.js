import React from 'react';

import StarrySky from './StarrySky';
import Navbar from './Navbar/Navbar';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';

export default class Application extends React.Component {

    render() {
        return (
            <div>
                <StarrySky />
                <Navbar />
                <AboutSection sectionName="About"/>
                <ProjectsSection sectionName="Projects" />
            </div>
        );
    }

}