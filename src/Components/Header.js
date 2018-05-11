/*jshint esversion: 6 */

import React from 'react';
import Nav from './Nav';

const Header = (props) => {
  return (
    <header className="header">
      <img src={props.logo} className="App-logo" alt="logo" />
      <h1>My Cool React Flickr Gallery Project </h1>

      <Nav handleNavActiveStates={props.handleNavActiveStates} linkNames={props.linkNames}/>

    </header>
  );
}

export default Header;