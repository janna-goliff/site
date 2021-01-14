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
    const list = document.getElementsByTagName('A');
    if (num === 0) {
      document.body.style.color = '#4d4d4d';

      for (let i = 0; i < list.length; i++) {
        list[i].style.color = '#4d4d4d';
      }
    } else {
      document.body.style.color = 'white';
      for (let i = 0; i < list.length; i++) {
        list[i].style.color = 'white';
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
