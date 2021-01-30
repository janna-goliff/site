import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import { colors, pieces, motion } from '../colors.js';
import Piece from '../components/Piece.js';
import './Portfolio.css';

class WebDev1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <div className='projectContainer headerContainer centeredContainer'>
          <h2 className='projectName'>TREEHOUSE VIDEO AND MESSAGING APP</h2>
          <div className='projectTwoElements'>
            <div>
              <img
                src='https://i.imgur.com/7FEpttv.png'
                alt={`treehouse logo designed by Ann Wang`}
                style={{ height: '400px', width: 'auto' }}
              />
              <p className='caption'>logo designed by Ann Wang</p>
            </div>
            <div className='projectIntroMainText'>
              <p>
                Treehouse is a made-from-scratch web app made using React. It
                allows users to add friends, message them, and even make video
                calls with them! Main features include:
              </p>
              <ul>
                <li>User authentication and password encryption</li>
                <li>User registration</li>
                <li>Text, image, and video messaging</li>
                <li>User status feed</li>
                <li>Live video calling</li>
              </ul>

              <p>Made with Serena Ghandi and Ann Wang</p>
              <p>
                Visit the live site{' '}
                <a
                  className='inlineLink'
                  href='https://tranquil-depths-82554.herokuapp.com/'
                >
                  here
                </a>
                .
              </p>

              <p>Contact for access to Github repo.</p>
            </div>
          </div>
          <div className='projectGridSquare'>
            <img src='https://i.imgur.com/eTL6Rxd.png' alt='login page' />
            <img
              src='https://i.imgur.com/X8qYXqQ.png'
              alt='main home page after user login'
            />
            <img
              src='https://i.imgur.com/WH99wLe.png'
              alt='status feed of friend statues'
            />
            <img src='https://i.imgur.com/WJmVn70.png' alt='messaging view' />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(WebDev1);
