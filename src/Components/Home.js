/*jshint esversion: 6 */

import React from 'react';
import comingSoon from '../img/comingsoon.jpg';

const Home = (props) => {
    return (
        <div className="home">
            <h2>{props.heading}</h2>

            <p><strong>Well, what are you waiting for?</strong></p>
            <p><strong>In the navigation menu above, you can <span id="searchSpan">Search</span> for something of your liking.</strong></p>
            <p><strong>Or check out some of the <span id="coolStuffSpan">Cool Stuff</span> I queued up for you. </strong><span role="img" aria-label="Search Icon">&#x1F60E;</span></p>
            <br />

            <img src={comingSoon} alt="Coming Soon" />           
        </div>
    );    
}

export default Home;