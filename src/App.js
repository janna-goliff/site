//import logo from './logo.svg';
import './App.css';
import React from 'react';
import MainElements from './components/MainElements.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Home from './pages/Home.js';
// import Portfolio from './pages/Portfolio.js';
import IdentityDesign1 from './pages/IdentityDesign1.js';
import LogoDesign1 from './pages/LogoDesign1.js';
import LandingPageDesign1 from './pages/LandingPageDesign1';
import AppDesign1 from './pages/AppDesign1.js';
import AppDesign2 from './pages/AppDesign2.js';
import WebAppDesign1 from './pages/WebAppDesign1.js';
import WebDev1 from './pages/WebDev1.js';
import FunWork from './pages/FunWork.js';
import MapProject1 from './pages/MapProject1';
import WordGenerator from './pages/WordGenerator.js';

import DataViz1 from './pages/DataViz1.js';
// import ElementAvoid from './ElementAvoid.js';

// import { colors, colorsDark } from './colors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  function getDataFromMainElements() {}

  // if (boolean === null) {
  //   localStorage.setItem('boolean', true);
  // } else {
  //   localStorage.setItem('boolean', !boolean);
  // }
  // return <div className='App' onLoad={onLoad()}></div>;
  // sendDataToApp={getDataFromMainElements}

  return (
    <div>
      <MainElements />
      <Router>
        <Switch>
          {/* <Route path='/home'>
            <Home />
          </Route> */}
          <Route path='/portfolio/biennialredesign'>
            <IdentityDesign1 />
          </Route>
          <Route path='/portfolio/logo'>
            <LogoDesign1 />
          </Route>
          <Route path='/portfolio/eventtracker'>
            <AppDesign1 />
          </Route>
          <Route path='/portfolio/bookshare'>
            <WebAppDesign1 />
          </Route>
          <Route path='/portfolio/artlog'>
            <AppDesign2 />
          </Route>
          <Route path='/portfolio/spiralqlanding'>
            <LandingPageDesign1 />
          </Route>
          <Route path='/portfolio/treehouse'>
            <WebDev1 />
          </Route>
          <Route path='/portfolio/wordgen'>
            <WordGenerator />
          </Route>
          <Route path='/portfolio/dataviz1'>
            <DataViz1 />
          </Route>
          <Route path='/portfolio/mapproject1'>
            <MapProject1 />
          </Route>
          <Route path='/funwork'>
            <FunWork />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
