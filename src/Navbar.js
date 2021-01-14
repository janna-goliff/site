import React from 'react';
import './App.css';
import './Navbar.css';
import { colors } from './colors.js';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange() {
    document.getElementById('navbarOuter').style.backgroundColor =
      colors[this.props.color];
  }

  componentDidUpdate() {
    this.handleColorChange();
  }

  componentDidMount() {
    this.handleColorChange();
  }

  render() {
    return (
      <div>
        <nav className='mainNav' id='navbarOuter'>
          <a href='/' id='nameNav'>
            JANNA GOLIFF
          </a>
          <div id='dropdownWrapper'>
            <div id='dropdownMain' className='navoption'>
              <p id='portfolioNav'>PORTFOLIO</p>
              <div id='dropdownContent'>
                <a href='/portfolio/projects'>PROJECTS</a>
                <a href='/portfolio/posters'>POSTERS</a>
                <a href='/portfolio/projects'>TRADITIONAL</a>
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
