import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

class Navbar extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <nav className='mainNav'>
        <a href='/home' id='nameNav'>
          JANNA GOLIFF
        </a>
        <div>
          <a href='/portfolio'>PORTFOLIO</a>
          <a href='/about'>ABOUT</a>
          <a href='/contact'>CONTACT</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
