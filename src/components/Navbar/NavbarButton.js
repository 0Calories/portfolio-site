import React from 'react';

import Scroll from 'react-scroll';

const Link = Scroll.Link;

export default class NavbarButton extends React.Component {

    render() {
        return (
            <div className="navbar-button">
                <Link 
                    to={this.props.heading} 
                    activeClass="navbar-button--active" 
                    className="navbar-button__link"
                    onClick={this.handleClick} 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                >
                    {this.props.heading}
                </Link>
            </div>
        );
    }

}