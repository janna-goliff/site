import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
// import ElementAvoid from './ElementAvoid.js';
import ColorController from './ColorController';
import Piece from './Piece';

import { colors, colorsRGBA, pieces } from './colors.js';

class Home extends React.Component {
  componentDidUpdate() {}

  render() {
    return <div id='maindiv'></div>;
  }
}

export default withRouter(Home);
