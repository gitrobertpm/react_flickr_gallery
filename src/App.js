/*jshint esversion: 6 */

import React, { Component } from 'react';
import './css/App.css';
import axios from 'axios';
import apiKey from './config';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Form from './Components/Form';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';

import yinyang_thinker from './img/yinyang_thinker.png';
import logo from './img/logo.svg';


class App extends Component {

  constructor() {
    super();
    this.state = {
      // These are the main three topics - changing these will change the nav, headings and images in cool stuff section
      topics: ['Pink Floyd', 'Hunter S. Thompson', 'Sunsets'],
      firstTopicsImgs: [],
      secondTopicsImgs: [],
      thirdTopicsImgs: [],
      searchImgs: [],
      searchTopic: 'Search',
      isNavToggled: false,
      loading: true
    };

    this.handleNavActiveStates = this.handleNavActiveStates.bind(this);
    this.getImages = this.getImages.bind(this);
  }

  // handle active state of drop down nav menu
  handleNavActiveStates(e) { 
    e.preventDefault();
    
    const dropdown = document.querySelector('.dropdown-navmenu');
    this.setState((prevState, props) => {
      return {isNavToggled: !prevState.isToggled};
    });

    if ([...e.target.classList].indexOf("dropdown-navlink-a") !== -1) {
      dropdown.classList.add('activeToggle');
    } else if (e.target.id === "nav-home" || e.target.id === "nav-search") {
      dropdown.classList.remove('activeToggle');
    }
  }
  
  // get images - default images and searched images are grabbed with this function
  getImages(subject) {
    let searchString = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${subject}&per_page=12&format=json&nojsoncallback=1`;

    axios.get(searchString)
      .then((response) => {
        this.setState((prevState, props) => {
          if (subject === this.state.topics[0]) {
            return {firstTopicsImgs: response.data.photos.photo};
          } else if (subject === this.state.topics[1]) {
            return {secondTopicsImgs: response.data.photos.photo};
          } else if (subject === this.state.topics[2]) {
            return {thirdTopicsImgs: response.data.photos.photo};
          } else {
            return {loading: false, searchImgs: response.data.photos.photo, searchTopic: subject};
          }
        });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  }

  // call three default topics when app loads
  componentDidMount() {
    this.getImages(this.state.topics[0]);
    this.getImages(this.state.topics[1]);
    this.getImages(this.state.topics[2]);
  }

  render() {
    return (
      <HashRouter basename="/react_flickr_gallery">
      
        <div>
        
          <Header logo={logo} handleNavActiveStates={this.handleNavActiveStates} linkNames={this.state.topics} />

          <Switch>
            <Route exact path="/" render={ () => <Home heading="Home" /> } />
            
            <Route path="/search" render={ () => 
              <div>
                <Form getImages={this.getImages} loading={this.state.loading} />
                <Gallery heading="Search" getImages={this.getImages} data={this.state.searchImgs} loading={this.state.loading} subject={this.state.searchTopic} />
              </div>   
            } />

            <Route path={`/${this.state.topics[0]}`} render={ () => 
              <Gallery heading={this.state.topics[0]} data={this.state.firstTopicsImgs} /> 
            } />

            <Route path={`/${this.state.topics[1]}`} render={ () => 
              <Gallery heading={this.state.topics[1]} data={this.state.secondTopicsImgs} /> 
            } />

            <Route path={`/${this.state.topics[2]}`} render={ () => 
              <Gallery heading={this.state.topics[2]} data={this.state.thirdTopicsImgs} /> 
            } />

            <Route component={NotFound} />
          </Switch>

          <Footer bonusImage={yinyang_thinker} />
        </div>
      </HashRouter>
    );
  }
}

export default App;