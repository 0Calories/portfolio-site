import React from 'react';

const SkillBadge = (props) => (
    <div>
        <img 
            src={"/images/" + props.imageName + ".png"}
            className="skill-badge"
        />
    </div>
);

export default SkillBadge;