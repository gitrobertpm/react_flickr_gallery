/*jshint esversion: 6 */

import React from 'react';
import comingSoon from '../img/comingsoon.jpg';

const Home = (props) => {
    return (
        <div className="home">
            <h2>{props.heading}</h2>

            <p><strong>Well, what are you witing for?</strong></p>
            <p><strong>In the navigation menu above, you can search for something of your liking.</strong></p>
            <p><strong>Or check out some of the "Cool Stuff" I queued up for you. </strong><span role="img" aria-label="Search Icon">&#x1F60E;</span></p>
            <br />

            <img src={comingSoon} alt="Coming Soon" />           
        </div>
    );    
}

export default Home;