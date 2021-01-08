import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
import ElementAvoid from './ElementAvoid.js';

class Home extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
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
      </div>
    );
  }
}

export default withRouter(Home);
