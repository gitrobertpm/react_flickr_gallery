import React from 'react';

function Header(props) {
  return (
    <header className="header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h1>My Cool React Flickr Gallery Project </h1>

      <nav className="header-nav">
          <ul>
              <li><a href="">Search</a></li>
              <li><a href="">Beaches</a></li>
              <li><a href="">Waterfalls</a></li>
              <li><a href="">Rainbows</a></li>
          </ul>
      </nav>   
    </header>
  );
}

export default Header;