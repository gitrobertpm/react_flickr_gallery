import React from 'react';
import Form from './Form';
import ListItem from './List-item';

class Section extends React.Component {
    render() {
        return (
            <div className="section">
                <h2>{this.props.heading}</h2>

                {this.props.heading === 'Search' &&
                    <Form />
                }

                <div>
                    <ul>
                        <ListItem src={this.props.imgSrc} alt="coming soon" />
                    </ul>
                </div>
            </div>
        );
    }
}

export default Section;