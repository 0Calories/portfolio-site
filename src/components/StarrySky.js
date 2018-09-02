import React from 'react';

import GreetingSign from './GreetingSign';

export default class StarrySky extends React.Component {

    render() {
        return (
            <div className="starry-sky">
                <GreetingSign />
            </div>
        );
    }

}