import React from 'react';

import SkillBadge from './SkillBadge';

const WorkBox = (props) => (
    <div className="work-box box">
        <h1 className="work-box__header box-header">{props.companyName}</h1>
        <p className="work-box__date">{props.dateRange}</p>
        <p className="work-box__desc">{props.description}</p>
        <div className="work-box__container">
            <img 
                src={"/images/work/" + props.companyName + ".png"} 
                className="work-box__image"
            />
            <div className="work-box__badges">
                {props.badges.map((badge) => <SkillBadge badgeName={badge}/>)}
            </div>
        </div>
    </div>
);

export default WorkBox;