import React from 'react';
import Scroll from 'react-scroll';

import StarrySky from './StarrySky';
import Navbar from './Navbar/Navbar';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import WorkSection from './sections/WorkSection';

const Link = Scroll.Link;
const Events = Scroll.Events;
const Element = Scroll.Element;
const scrollSpy = Scroll.scrollSpy;
const scroll = Scroll.animateScroll;

export default class Application extends React.Component {

    render() {
        return (
            <div>
                <StarrySky />
                <Navbar breakpoint={this.refs.skyEnd} />
                <Element name="sky-end" id="sky-end" />

                <Element name="About">
                    <AboutSection sectionName="About" />
                </Element>

                <Element name="Projects">
                    <ProjectsSection sectionName="Projects" />
                </Element>

                <Element name="Work Experience">
                    <WorkSection sectionName="Work Experience" />
                </Element>
            </div>
        );
    }

}