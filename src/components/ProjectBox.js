import React from 'react';

import SkillBadge from './SkillBadge';

export default class ProjectBox extends React.Component {

    state = {
        opened: false,
    };

    toggleOpen = () => {
        console.log(`On Click called! Opened=${!this.state.opened}`);

        this.setState((prevState) => ({ opened: !prevState.opened }));
    };

    componentDidMount() {
        this.refs.spinner
    }

    render() {
        return (
            <div className="project-box box">
                <div className="project-box__header-container">
                    <h1 className="project-box__header box-header">{this.props.projectName}</h1>
                    <div className="project-box__header-strike">
                        <img
                            src={"/images/projects/" + this.props.projectName + "-icon.png"}
                            ref='spinner'
                            className={this.state.opened ? "project-box__image project-box__image--opened" : "project-box__image project-box__image--closed"}
                            onClick={this.toggleOpen}
                        />
                    </div>
                </div>

                <div className="project-box__container">
                    <p className="project-box__desc">{this.props.projectDescription}</p>
                    <div className="project-box__badges">
                        {this.props.badges.map((badge) => <SkillBadge badgeName={badge} />)}
                    </div>
                </div>

                <div className="project-box__button-container">
                    <button>Show Me!</button>
                    <button>GitHub</button>
                </div>
            </div>
        );
    }
}
