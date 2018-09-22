import React from 'react';
import ReactDOM from 'react-dom';

import NavbarButton from './NavbarButton';

let navbarOff = undefined;

export default class Navbar extends React.Component {

    state = {
        active: false
    };

    checkNavbarPosition = () => {
        if (window.pageYOffset >= navbarOff) {
            this.setState({ active: true });
        } else {
            this.setState({ active: false });
        }
    };

    componentWillMount() {
        // Scroll to the top to prevent breaking the sticky navbar
        window.onbeforeunload = () => window.scrollTo(0, 0);
    }

    componentDidMount() {
        navbarOff = document.getElementById('sky-end').getBoundingClientRect().top;

        // When window is resized, we want to recalculate navbarOff
        window.addEventListener('resize', this.checkNavbarPosition)

        window.onscroll = this.checkNavbarPosition;
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkNavbarPosition);
    }

    render() {
        return (
            <div>
                <div className={this.state.active ? "navbar navbar--sticky" : "navbar"}>
                    <NavbarButton heading={'About'} iconClass={'fas fa-id-card'} />
                    <NavbarButton heading={'Projects'} iconClass={'fas fa-lightbulb'} />
                    <NavbarButton heading={'Work Experience'} iconClass={'fas fa-briefcase'} />
                    <NavbarButton heading={'Contact'} iconClass={'fas fa-envelope'} />
                </div>
            </div>
        );
    }

}