import React from 'react';

const SkillBadge = (props) => (
    <div>
        <a href={props.link} target="_blank">
            <img
                src={"/images/skills/" + props.badgeName + ".png"}
                className="skill-badge"
            />
        </a>
    </div>
);

export default SkillBadge;