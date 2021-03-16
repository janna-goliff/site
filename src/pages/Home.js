import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
// import Navbar from '../components/Navbar.js';
// // import ElementAvoid from './ElementAvoid.js';
// import ColorController from '../components/ColorController';
// import Piece from '../components/Piece';

// import { colors, colorsRGBA, pieces } from '../colors.js';
// import ResponsiveSquare from '../components/ResponsiveSquare';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    const hand = document.getElementById('wavingHand');
    hand.setAttribute('src', 'https://i.imgur.com/qXPxJrj.gif/');
  }

  handleMouseLeave() {
    const hand = document.getElementById('wavingHand');
    hand.setAttribute('src', 'https://i.imgur.com/kRoQDOo.png');
  }

  componentDidUpdate() {}

  render() {
    return (
      <div id='maindiv'>
        <div className='bumper'></div>
        {/* <div className='welcomeBanner'>
          <h1 id='exBigText'>
            Hi! <div id='wavingHand'>👋</div>
          </h1>
          <h1>Thanks for visiting.</h1>
          <h1>Hope you have a good time!</h1>
        </div> */}

        <img
          id='welcomeGif'
          src='https://i.imgur.com/NPiFTHT.gif'
          alt='nature scene with flying bird'
        />
        <div id='welcomeText'>
          <h1 id='exBigText'>
            Welcome!{' '}
            <img
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              id='wavingHand'
              src='https://i.imgur.com/kRoQDOo.png'
              alt='waving hand animation'
            />
          </h1>
          {/* <h1>Thanks for visiting.</h1>
          <h1>Hope you have a good time!</h1> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
