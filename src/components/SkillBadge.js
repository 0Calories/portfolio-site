import React from 'react';

const SkillBadge = (props) => (
    <div>
        <img 
            src={"/images/skills/" + props.badgeName + ".png"}
            className="skill-badge"
        />
    </div>
);

export default SkillBadge;