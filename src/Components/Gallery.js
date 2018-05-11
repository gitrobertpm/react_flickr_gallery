/*jshint esversion: 6 */

import React from 'react';
import GalleryItem from './Gallery-item';
import NoResults from './NoResults';
import comingSoon from '../img/comingsoon.jpg';

const Gallery = (props) => {  
    let galleryItems;
    
    // conditionally show list of images from flickr or coming soon image
    if (props.data && props.data !== undefined && props.data.length > 0) {
        galleryItems = props.data.map((image, i) => {
            
            // dynamic filckr url
            let url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;

            return <GalleryItem imgSrc={url} alt="Flickr Image" key={image.id} />;
        });
    } else {
        galleryItems = <GalleryItem heading={props.heading} imgSrc={comingSoon} alt="coming soon" key="No Key Needed" />   
    }    

    return (
        <div className="gallery">
            <h2 id={`${props.heading}_heading`}>{(props.heading === "Search") ? props.subject : props.heading}</h2>

                {   
                    (!props.loading && props.data.length < 1) && 
                    <NoResults />
                }

            <ul>
                {galleryItems}
            </ul>

        </div>
    );
}

export default Gallery;