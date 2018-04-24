import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <li>
                <img src={this.props.src} alt={this.props.alt} />
            </li>
        );
    }
}

export default ListItem;