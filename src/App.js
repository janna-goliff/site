//import logo from './logo.svg';
import './App.css';
import Launch from './Launch.js';
import MainElements from './MainElements.js';
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import Portfolio from './Portfolio.js';
import PortfolioProjects from './PortfolioProjects.js';
import PortfolioPosters from './PortfolioPosters.js';
import PortfolioTraditional from './PortfolioTraditional.js';
import ElementAvoid from './ElementAvoid.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // return <div className='App' onLoad={onLoad()}></div>;
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
