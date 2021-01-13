import React from 'react';
import './App.css';
import './Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className='mainNav'>
          <a href='/home' id='nameNav'>
            JANNA GOLIFF
          </a>
          <div id='dropdownWrapper'>
            <div id='dropdownMain' className='navoption'>
              <p id='portfolioNav'>PORTFOLIO</p>
              <div id='dropdownContent'>
                <a>PROJECTS</a>
                <a>POSTERS</a>
                <a>TRADITIONAL</a>
              </div>
            </div>
            <a href='/about' className='navoption singleoption'>
              ABOUT
            </a>
            <a href='/contact' className='navoption singleoption'>
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
