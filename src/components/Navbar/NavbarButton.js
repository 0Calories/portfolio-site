import React from 'react';

export default class NavbarButton extends React.Component {

    render() {
        return (
            <div>
                <button className="navbar-button">{this.props.heading}</button>
            </div>
        );
    }

}