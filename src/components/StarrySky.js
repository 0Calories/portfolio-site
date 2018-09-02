import React from 'react';

import GreetingSign from './GreetingSign';

export default class StarrySky extends React.Component {

    render() {
        return (
            <div className="starry-sky">
                <canvas ref="canvas" className="starry-sky__canvas" />
                <GreetingSign />
            </div>
        );
    }

}