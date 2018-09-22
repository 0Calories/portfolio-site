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
                    offset={-20}
                    onClick={this.handleClick} 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                >
                    <i className={this.props.iconClass}></i>
                    &emsp;
                    <span className='navbar-button__text'>{this.props.heading}</span>
                </Link>
            </div>
        );
    }

}