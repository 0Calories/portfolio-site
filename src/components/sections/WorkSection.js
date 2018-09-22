import React from 'react';
import Flip from 'react-reveal/Flip';

import Profile from '../Profile';
import WorkBox from '../WorkBox';

const jobs = [{
    company: 'Cheetah Networks',
    date: 'March 2018 - Present',
    description: 'During my time at Cheetah Networks, I contributed to the development of a system for preventing distracted driving. I was responsible for writing code for an Android application, as well as the firmware of a custom Bluetooth device. I facilitated the core Bluetooth features of the system by designing and implementing the wireless communication system between the application and custom device.',
    badges: ['C++', 'Java']
}, {
    company: 'Cision Canada',
    date: 'September 2017 - December 2017',
    description: 'Placeholder',
    badges: ['Java']
}, {
    company: 'Ross Video',
    date: 'January 2017 - April 2017',
    description: 'Placeholder',
    badges: ['Java', 'HTML5', 'CSS3', 'JavaScript']
}, {
    company: 'Agriculture and Agri-Food Canada',
    date: 'June 2016 - December 2017',
    description: 'Placeholder',
    badges: ['Java', 'JavaScript', 'HTML5', 'CSS3'] 
}];

const WorkSection = (props) => (
    <div className="section" id="work-section">
        <Flip left>
            <h1 className="section__header">{props.sectionName}</h1>
        </Flip>
        
        <div className="section__body" id="work-section__body">
            {jobs.map((job) => <WorkBox companyName={job.company} dateRange={job.date} description={job.description} badges={job.badges}/>)}
        </div>
    </div>
);

export default WorkSection;