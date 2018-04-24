import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import comingSoon from './img/comingsoon.jpg';
import logo from './img/logo.svg';

class App extends Component {
  render() {
    return (

      <div>
        <Header logo={logo} imgSrc={comingSoon} />

        <Section heading="Search" imgSrc={comingSoon} />
        <Section heading="Beaches" imgSrc={comingSoon} />
        <Section heading="Waterfalls" imgSrc={comingSoon} />
        <Section heading="Rainbows" imgSrc={comingSoon} />

      </div>
    );
  }
}

export default App;