import React from 'react';
import ReactDOM from 'react-dom';

import NavbarButton from './NavbarButton';

let navbarOff = undefined;

export default class Navbar extends React.Component {

    state = {
        active: false
    };

    updateNavbarOff = () => {
        navbarOff = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
    };

    componentDidMount() {
        navbarOff = ReactDOM.findDOMNode(this).getBoundingClientRect().top;

        // When window is resized, we want to recalculate navbarOff
        window.addEventListener('resize', this.updateNavbarOff)

        window.onscroll = () => {
            console.log(navbarOff);
            if (window.pageYOffset >= navbarOff) {
                this.setState({ active: true });
            } else {
                this.setState({ active: false });
            }
        };
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateNavbarOff);
    }

    render() {
        return (
            <div>
                <div className={this.state.active ? "navbar navbar--sticky" : "navbar"}>
                    <NavbarButton heading={'About'} />
                    <NavbarButton heading={'Projects'} />
                    <NavbarButton heading={'Work Experience'} />
                    <NavbarButton heading={'Contact'} />
                </div>
            </div>
        );
    }

}