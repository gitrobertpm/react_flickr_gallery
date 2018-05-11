/*jshint esversion: 6 */

import React from 'react';

const NoResults = (props) => {
    return (
        <div className="not-found">
            <h3>Oops! That search produced no results.  Try again.
                <span role="img" aria-label="Smiley Face with Sunglasses">&#x1F60E;</span>
            </h3>
        </div>
    );    
}

export default NoResults;