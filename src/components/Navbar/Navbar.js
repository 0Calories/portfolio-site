import React from 'react';

import NavbarButton from './NavbarButton';

export default class Navbar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <NavbarButton heading={'Test1'} />
                <NavbarButton heading={'Test2'} />
                <NavbarButton heading={'Test3'} />
                <NavbarButton heading={'Test4'} />
            </div>
        );
    }

}