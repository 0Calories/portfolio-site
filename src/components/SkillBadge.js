import React from 'react';
import Bounce from 'react-reveal/Bounce';

const SkillBadge = (props) => (
    <div>
        <Bounce right>
            <div>
                <a href={props.link} target="_blank">
                    <img
                        src={"/images/skills/" + props.badgeName + ".png"}
                        className="skill-badge"
                    />
                </a>
            </div>
        </Bounce>
    </div>
);

export default SkillBadge;