import React from 'react';

export default class LinkBadge extends React.Component {

    render() {
        return (
            <a className='link-badge' href={this.props.link} target="_blank">
                <icon className={this.props.iconClass} />
            </a>
        );
    }

}
