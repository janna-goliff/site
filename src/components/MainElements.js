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
    this.getData = this.getData.bind(this);
  }

  getData(mode) {
    // changes website color when a new state is provided
    console.log(`updated in home component: ${mode}`);
    this.setState({
      lightMode: mode,
    });
    this.props.sendDataToApp(mode);
  }

  componentDidUpdate() {}

  render() {
    return (
      <div id='mainWrapper'>
        <Navbar color={this.state.lightMode} />

        {/* <ColorController sendData={this.getData} color={this.state.selected} /> */}
        <ToggleLightDark sendData={this.getData} />
      </div>
    );
  }
}

export default MainElements;
