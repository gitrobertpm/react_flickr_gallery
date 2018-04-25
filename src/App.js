import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

import './css/App.css';

import comingSoon from './img/comingsoon.jpg';
import yinyang_thinker from './img/yinyang_thinker.png';
import logo from './img/logo.svg';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header logo={logo} imgSrc={comingSoon} />

          <Route exact path="/" render={ () => <Section heading="Search" imgSrc={comingSoon} /> } />
          <Route path="/beaches" render={ () => <Section heading="Beaches" imgSrc={comingSoon} /> } />
          <Route path="/waterfalls" render={ () => <Section heading="Waterfalls" imgSrc={comingSoon} /> } />
          <Route path="/rainbows" render={ () => <Section heading="Rainbows" imgSrc={comingSoon} /> } /> 

          <Footer bonusImage={yinyang_thinker} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;