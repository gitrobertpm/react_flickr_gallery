/*jshint esversion: 6 */

import React from 'react';

const GalleryItem = (props) => {
    return (
        <li id={(props.heading === "Search") ? "comingSoon" : "none" }>
            <img src={props.imgSrc} alt={props.alt} key={props.Key} />

        </li>

    );
}

export default GalleryItem;