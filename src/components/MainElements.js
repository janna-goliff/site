import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar.js';
// import ElementAvoid from './ElementAvoid.js';
// import ColorController from './ColorController';
import ToggleLightDark from './ToggleLightDark';
import Piece from './Piece';

import { colors, colorsRGBA, pieces } from '../colors.js';

class MainElements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lightMode: 0 };
    this.updateMainElements = this.updateMainElements.bind(this);
  }

  updateMainElements() {
    // changes website color when a new state is provided
    const lightMode = localStorage.getItem('lightMode');
    let mode = 1;
    if (lightMode === 'true' || lightMode === null) {
      mode = 0;
    }
    this.setState({
      lightMode: mode,
    });
    document.body.style.backgroundColor = colors[mode];
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

  componentDidMount() {
    this.updateMainElements();
  }

  render() {
    return (
      <div id='mainWrapper'>
        <Navbar color={this.state.lightMode} />

        {/* <ColorController sendData={this.getData} color={this.state.selected} /> */}
        <ToggleLightDark
          update={this.updateMainElements}
          currMode={this.state.lightMode}
        />
      </div>
    );
  }
}

export default MainElements;
