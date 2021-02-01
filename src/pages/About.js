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
              I've recently been doing work in web design, including a video and
              chat web app I made in a team with two of my classmates!
              <br />
              <br />I also coded this site myself using React! Find
              documentation of it on my Github{' '}
              <a class='inlineLink' href='https://github.com/janna-goliff/site'>
                here
              </a>
              . Deployed using AWS Amplify.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(About);
