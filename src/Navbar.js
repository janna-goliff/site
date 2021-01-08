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
        <a href='/site/home' id='nameNav'>
          JANNA GOLIFF
        </a>
        <div>
          <a href='/site/portfolio'>PORTFOLIO</a>
          <a href='/site/about'>ABOUT</a>
          <a href='/site/contact'>CONTACT</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
