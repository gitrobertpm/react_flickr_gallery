/*jshint esversion: 6 */

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props, {match}) => {
  let mainTopicLinks;
  // dynamically produce nav links based on state.topics in App.js
  if (props.linkNames) {
    mainTopicLinks = props.linkNames.map((linkName, i) => {

      // limit size of link name to prevent word wrap
      let onScreenLinkName = (linkName.length > 10) ? linkName.substring(0, 9) : linkName;

      return <li className="dropdown-navlink" key={i}><NavLink to={`/${linkName}`} id={`nav_dropdown_${i}`} className="dropdown-navlink-a">{onScreenLinkName}</NavLink></li>
    });
  }   

  return (
    <nav className="header-nav">
        <ul onClick={props.handleNavActiveStates}>
            <li><NavLink exact to="/" id="nav-home">Home</NavLink></li>
            <li><NavLink to="/Search" id="nav-search">Search</NavLink></li>
            <li className="dropdown-navmenu" id="nav-dropdown">Cool Stuff
              <ul className="dropdown-list">
                {mainTopicLinks}
              </ul>
            </li> 
        </ul>
    </nav>   
  );
}

export default Nav;