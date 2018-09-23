import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import Profile from '../Profile';
import WorkBox from '../WorkBox';

const jobs = [{
    company: 'Cheetah Networks',
    date: 'March 2018 - Present',
    description: 'During my time at Cheetah Networks, I contributed to the development of a system for preventing distracted driving. I was responsible for writing code for an Android application, as well as the firmware of a custom Bluetooth device. I facilitated the core Bluetooth features of the system by designing and implementing the wireless communication system between the application and custom device. I was also responsible for the creation and management of the source code repository, and made various additions and bugfixes to the software.',
    badges: ['C++', 'Java']
}, {
    company: 'Cision Canada',
    date: 'September 2017 - December 2017',
    description: 'I assisted in the maintenance and development of a REST web API used for scraping and distributing information from news sources. My tasks ranged from working on simple features and bugfixes, as well as the development of scripts used to aid the workflow of other members of the team. I also researched new technologies and demonstrated their viability for internal usage to the team.',
    badges: ['Java']
}, {
    company: 'Ross Video',
    date: 'January 2017 - April 2017',
    description: 'During this work-term, I created new features for the UI of the \'OverDrive\' software, as well as migrated the UI software platform to the latest version.',
    badges: ['Java', 'JavaScript', 'HTML5', 'CSS3']
}, {
    company: 'Agriculture and Agri-Food Canada',
    date: 'June 2016 - December 2017',
    description: 'During the Summer, I created a dashboard tool from scratch for monitoring the status of various server computers in the IT branch. I also worked part-time for the HR department after my placement; I managed and developed new features for their SharePoint site.',
    badges: ['Java', 'JavaScript', 'HTML5', 'CSS3'] 
}];

const WorkSection = (props) => (
    <div className="section" id="work-section">
        <Flip left>
            <h1 id="work-section__header" className="section__header">{props.sectionName}</h1>
        </Flip>
        
        <div className="section__body" id="work-section__body">
            {jobs.map((job, index) => (
                <div className="work-box-wrapper">
                    <Fade left={index % 2 ? false : true} right={index % 2 ? true : false}>
                        <WorkBox companyName={job.company} dateRange={job.date} description={job.description} badges={job.badges} />
                    </Fade>
                </div>
            ))}
        </div>
    </div>
);

export default WorkSection;