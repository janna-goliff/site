//import logo from './logo.svg';
import './App.css';
import MainElements from './components/MainElements.js';
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import Portfolio from './pages/Portfolio.js';
import PortfolioProjects from './pages/PortfolioProjects.js';
import PortfolioPosters from './pages/PortfolioPosters.js';
import PortfolioTraditional from './pages/PortfolioTraditional.js';
import ElementAvoid from './ElementAvoid.js';

import { colors, colorsDark } from './colors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  function getDataFromMainElements(mode) {
    console.log('sent data to app level');
    document.body.style.backgroundColor = colors[mode];
    console.log(`background color should be: ${colors[mode]}`);
    // changes link colors depending on color selected
    const listA = document.getElementsByTagName('A');
    const listButtons = document.getElementsByTagName('BUTTON');
    if (mode === 0) {
      // if a light background is chosen, make text darker
      document.body.style.color = '#656565';
      for (let i = 0; i < listA.length; i++) {
        listA[i].style.color = '#656565';
      }
      for (let i = 0; i < listButtons.length; i++) {
        listButtons[i].style.color = '#656565';
        listButtons[i].style.borderColor = '#656565';
      }
    } else {
      document.body.style.color = '#C4C4C4';
      for (let i = 0; i < listA.length; i++) {
        listA[i].style.color = '#C4C4C4';
      }
      for (let i = 0; i < listButtons.length; i++) {
        listButtons[i].style.color = '#C4C4C4';
        listButtons[i].style.borderColor = '#C4C4C4';
      }
    }
  }

  // return <div className='App' onLoad={onLoad()}></div>;
  return (
    <div>
      <MainElements sendDataToApp={getDataFromMainElements} />
      <Router>
        <Switch>
          {/* <Route path='/home'>
            <Home />
          </Route> */}
          <Route path='/portfolio/projects'>
            <PortfolioProjects />
          </Route>
          <Route path='/portfolio/posters'>
            <PortfolioPosters />
          </Route>
          <Route path='/portfolio/traditional'>
            <PortfolioTraditional />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
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
