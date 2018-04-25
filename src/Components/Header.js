import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h1>My Cool React Flickr Gallery Project </h1>

      <nav className="header-nav">
          <ul>
              <li><Link to="/">Search</Link></li>
              <li><Link to="/beaches">Beaches</Link></li>
              <li><Link to="/waterfalls">Waterfalls</Link></li>
              <li><Link to="rainbows">Rainbows</Link></li>
          </ul>
      </nav>   
    </header>
  );
}

export default Header;