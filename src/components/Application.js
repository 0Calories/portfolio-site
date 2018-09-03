import React from 'react';

import StarrySky from './StarrySky';
import Navbar from './Navbar/Navbar';

export default class Application extends React.Component {

    render() {
        return (
            <div>
                <StarrySky />
                <Navbar />
            </div>
        );
    }

}