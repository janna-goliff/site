import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import { colors, pieces, motion } from '../colors.js';
import Piece from '../components/Piece.js';
import './Portfolio.css';

class LogoDesign1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <div className='projectContainer headerContainer centeredContainer'>
          <h2 className='projectName'>GRACE'S ORGANIC PET FOOD LOGO</h2>
          <div className='projectTwoElements'>
            <img
              src='https://i.imgur.com/w88nCe3.png'
              alt={`logo of Grace's Organic pet food`}
              style={{ height: '400px', width: 'auto' }}
            />
            <p className='projectIntroMainText'>
              Grace's Organic Pet Food is a family-run business that makes pet
              food using locally-sourced, organic ingredients. I was put into
              contact with them through Penn Student Design.
              <br />
              <br />
              They were looking for fairly detailed logo design, and requested I
              incorporate an image of a dog with their ingredients.
              <br />
              <br />
              Visit their site{' '}
              <a className='inlineLink' href='https://www.gracesorganic.com/'>
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LogoDesign1);
