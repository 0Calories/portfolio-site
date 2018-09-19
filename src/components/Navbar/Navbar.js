import React from 'react';

import NavbarButton from './NavbarButton';

export default class Navbar extends React.Component {

    render() {
        return (
            <div>
                <div className="navbar">
                    <NavbarButton heading={'About'} />
                    <NavbarButton heading={'Projects'} />
                    <NavbarButton heading={'Work Experience'} />
                    <NavbarButton heading={'Contact'} />
                </div>
            </div>
        );
    }

}