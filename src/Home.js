import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
// import ElementAvoid from './ElementAvoid.js';
import ColorController from './ColorController';

import { colors, colorsRGBA } from './colors.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 4 };
    this.getData = this.getData.bind(this);
  }

  getData(num) {
    // do not forget to bind getData in constructor
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
        <p>HOME</p>

        <div id='avoidContainer'>
          {/* <ElementAvoid
            height='20px'
            width='20px'
            borderRadius='20px'
            left='20vw'
          />
          <ElementAvoid
            height='20px'
            width='20px'
            borderRadius='5px'
            left='60vw'
          /> */}
        </div>
        <ColorController sendData={this.getData} />
      </div>
    );
  }
}

export default withRouter(Home);
