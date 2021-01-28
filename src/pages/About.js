import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import Navbar from '../components/Navbar.js';

class About extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <div className='projectContainer centeredContainer'>
          <div className='projectTwoElements'>
            <img
              src='https://i.imgur.com/YIWvuqn.png'
              alt='profile picture of Janna with a squiggly decoration'
            />
            <p className='projectIntroMainText'>
              I'm a student at the University of Pennsylvania studying design
              and computer science.
              <br />
              <br />
              I've recently been doing work in web design, including [].
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(About);
