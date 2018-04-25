import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h1>My Cool React Flickr Gallery Project </h1>

      <nav className="header-nav">
          <ul>
              <li><NavLink exact to="/">Search</NavLink></li>
              <li><NavLink to="/beaches">Beaches</NavLink></li>
              <li><NavLink to="/waterfalls">Waterfalls</NavLink></li>
              <li><NavLink to="/rainbows">Rainbows</NavLink></li>
          </ul>
      </nav>   
    </header>
  );
}

export default Header;