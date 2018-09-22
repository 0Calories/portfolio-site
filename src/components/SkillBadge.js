import React from 'react';
import Bounce from 'react-reveal/Bounce';

export default class SkillBadge extends React.Component {

    render() {
        if (this.props.animated) {
            return (
                <Bounce right>
                    <div>
                        <a href={this.props.link} target="_blank">
                            <img
                                src={"/images/skills/" + this.props.badgeName + ".png"}
                                className="skill-badge"
                            />
                        </a>
                    </div>
                </Bounce>
            );
        } 
        
        return (
            <a href={this.props.link} target="_blank">
                <img
                    src={"/images/skills/" + this.props.badgeName + ".png"}
                    className="skill-badge"
                />
            </a>
        );
    }

}
