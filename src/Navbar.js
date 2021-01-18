import React from 'react';
import './App.css';
import './Navbar.css';
import { colors, colorsDark } from './colors.js';

function updateNavbarColors(num) {
  // gets reference number for current color of page
  const currColorNum = num; //this.props.color;
  // makes dropdown content have a color relational to background color
  const dropdownContentLinks = document.getElementById('dropdownContent')
    .childNodes;
  for (let i = 0; i < dropdownContentLinks.length; i++) {
    dropdownContentLinks[i].style.backgroundColor = colors[currColorNum];
    dropdownContentLinks[i].addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = colorsDark[currColorNum];
    });
    dropdownContentLinks[i].addEventListener('mouseleave', (e) => {
      e.target.style.backgroundColor = colors[currColorNum];
    });
  }

  // makes navoptions have relational color hover state
  const navoptions = document.getElementsByClassName('navoption');
  for (let i = 0; i < navoptions.length; i++) {
    navoptions[i].style.backgroundColor = colors[currColorNum];
    navoptions[i].addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = colorsDark[currColorNum];
    });
    navoptions[i].addEventListener('mouseleave', (e) => {
      e.target.style.backgroundColor = colors[currColorNum];
    });
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange() {
    document.getElementById('navbarOuter').style.backgroundColor =
      colors[this.props.color];
    updateNavbarColors(this.props.color);
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
                <a href='/portfolio/traditional'>TRADITIONAL</a>
              </div>
            </div>
            <a href='/about' className='navoption singleoption'>
              ABOUT
            </a>
            {/* <a href='/contact' className='navoption singleoption'>
              CONTACT
            </a> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
