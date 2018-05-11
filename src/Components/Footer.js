import React from 'react';

const Footer = (props) => {
    return (
        <footer className="footer">
            <img src={props.bonusImage} className="bonusImg" alt="Yin Yang Smiley Thinker" />
            <p>My Cool React Flicker Project (from scratch, uh thank you!  <span role="img" aria-label="Smiley Face with Sunglasses">&#x1F60E;</span>)</p>
            <img src={props.bonusImage} className="bonusImg" alt="Yin Yang Smiley Thinker" />
        </footer>
    );
}

export default Footer;