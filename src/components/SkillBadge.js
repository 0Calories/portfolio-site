import React from 'react';

const SkillBadge = (props) => (
    <div>
        <img 
            src={"/images/" + props.badgeName + ".png"}
            className="skill-badge"
        />
    </div>
);

export default SkillBadge;