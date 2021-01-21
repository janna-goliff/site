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
