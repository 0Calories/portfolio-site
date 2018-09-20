import React from 'react';
import ReactDOM from 'react-dom';

import NavbarButton from './NavbarButton';

let navbarOff = undefined;

export default class Navbar extends React.Component {

    state = {
        active: false
    };

    checkNavbarPosition = () => {
        console.log(navbarOff);
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
        navbarOff = ReactDOM.findDOMNode(this).getBoundingClientRect().top;

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
                    <NavbarButton heading={'About'} />
                    <NavbarButton heading={'Projects'} />
                    <NavbarButton heading={'Work Experience'} />
                    <NavbarButton heading={'Contact'} />
                </div>
            </div>
        );
    }

}