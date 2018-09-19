import React from 'react';
import ReactDOM from 'react-dom';

import NavbarButton from './NavbarButton';

export default class Navbar extends React.Component {

    state = {
        active: false
    };

    componentDidMount() {
        let navbarOff = ReactDOM.findDOMNode(this).getBoundingClientRect().top;

        window.onscroll = () => {
            console.log(navbarOff);
            if (window.pageYOffset >= navbarOff) {
                this.setState({ active: true });
            } else {
                this.setState({ active: false });
            }
        };
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