import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
// import ElementAvoid from './ElementAvoid.js';
import ColorController from './components/ColorController';
import Piece from './components/Piece';

import { colors, colorsRGBA, pieces } from './colors.js';

class Home extends React.Component {
  componentDidUpdate() {}

  render() {
    return (
      <div id='maindiv'>
        <div className='bumper'></div>
        <div className='fullSpread'>
          <h1>
            Welcome to my portfolio!
            <br />
            <br />
            Thanks for visiting.
          </h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
