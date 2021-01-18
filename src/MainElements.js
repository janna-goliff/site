import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
// import ElementAvoid from './ElementAvoid.js';
import ColorController from './ColorController';
import Piece from './Piece';

import { colors, colorsRGBA, pieces } from './colors.js';

class MainElements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 4 };
    this.getData = this.getData.bind(this);
  }

  getData(num) {
    // changes website color when a new state is provided
    console.log(`updated in home component: ${num}`);
    this.setState({
      selected: num,
    });
    document.body.style.backgroundColor = colors[num];
    // changes link colors depending on color selected
    const listA = document.getElementsByTagName('A');
    const listButtons = document.getElementsByTagName('BUTTON');
    if (num === 0) {
      // if a light background is chosen, make text darker
      document.body.style.color = '#4d4d4d';
      for (let i = 0; i < listA.length; i++) {
        listA[i].style.color = '#4d4d4d';
      }
      for (let i = 0; i < listButtons.length; i++) {
        listButtons[i].style.color = '#4d4d4d';
        listButtons[i].style.borderColor = '#4d4d4d';
      }
    } else {
      document.body.style.color = 'white';
      for (let i = 0; i < listA.length; i++) {
        listA[i].style.color = 'white';
      }
      for (let i = 0; i < listButtons.length; i++) {
        listButtons[i].style.color = 'white';
        listButtons[i].style.borderColor = 'white';
      }
    }
  }

  componentDidUpdate() {}

  render() {
    return (
      <div id='mainWrapper'>
        <Navbar color={this.state.selected} />

        <ColorController sendData={this.getData} color={this.state.selected} />
      </div>
    );
  }
}

export default MainElements;
