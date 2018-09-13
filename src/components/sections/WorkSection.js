import React from 'react';

import Profile from '../Profile';
import WorkBox from '../WorkBox';

const jobs = [{
    company: 'Cheetah Networks',
    date: 'March 2018 - Present',
    description: 'Placeholder',
    badges: []
}, {
    company: 'CNW Canada Newswire',
    date: 'September 2017 - December 2017',
    description: 'Placeholder',
    badges: []
}, {
    company: 'Ross Video',
    date: 'January 2017 - April 2017',
    description: 'Placeholder',
    badges: []
}, {
    company: 'Agriculture and Agri-Food Canada',
    date: 'June 2016 - December 2017',
    description: 'Placeholder',
    badges: [] 
}];

const WorkSection = (props) => (
    <div className="section work-section">
        <h1 className="section__header">{props.sectionName}</h1>
        <div className="section__body">
            {jobs.map((job) => <WorkBox companyName={job.company} dateRange={job.date} description={job.description} badges={job.badges}/>)}
        </div>
    </div>
);

export default WorkSection;