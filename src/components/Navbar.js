import React from 'react';
import '../App.css';
import './Navbar.css';
import {
  colors,
  colorsDark,
  textColorHover,
  textColorHoverRet,
} from '../colors.js';

function updateNavbarColors(modeNum) {
  // gets reference number for current color of page

  // makes dropdown content have a color relational to background color
  const dropdownContentLinks = document.getElementById('dropdownContent')
    .childNodes;
  for (let i = 0; i < dropdownContentLinks.length; i++) {
    dropdownContentLinks[i].style.backgroundColor = colors[modeNum];
    dropdownContentLinks[i].addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = colorsDark[modeNum];
      e.target.style.color = 'white';
    });
    dropdownContentLinks[i].addEventListener('mouseleave', (e) => {
      e.target.style.backgroundColor = colors[modeNum];
      e.target.style.color = textColorHoverRet[modeNum];
    });
  }

  // makes portfolio navigation have hover states
  const portfolioNav = document.getElementById('portfolioNav');
  portfolioNav.style.color = textColorHoverRet[modeNum];
  portfolioNav.addEventListener('mouseenter', (e) => {
    e.target.style.color = 'white';
  });

  // makes navoptions have relational color hover state
  const navoptions = document.getElementsByClassName('navoption');
  for (let i = 0; i < navoptions.length; i++) {
    navoptions[i].style.backgroundColor = colors[modeNum];
    navoptions[i].addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = colorsDark[modeNum];
      e.target.style.color = 'white';
      // e.target.style.color = textColorHover[modeNum];
    });
    navoptions[i].addEventListener('mouseleave', (e) => {
      e.target.style.backgroundColor = colors[modeNum];
      // e.target.style.color = textColorHoverRet[modeNum];
      e.target.style.color = textColorHoverRet[modeNum];
      portfolioNav.style.color = textColorHoverRet[modeNum];
    });
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange() {
    let modeNum = this.props.color ? 1 : 0;
    document.getElementById('navbarOuter').style.backgroundColor =
      colors[modeNum];
    updateNavbarColors(modeNum);
  }

  componentDidUpdate() {
    this.handleColorChange();
    // console.log('navbar updated');
  }

  componentDidMount() {
    this.handleColorChange();
  }
  render() {
    return (
      <div className='navbarWrapper'>
        <nav className='mainNav' id='navbarOuter'>
          <a href='/' id='nameNav'>
            JANNA GOLIFF
          </a>
          <div id='dropdownWrapper'>
            <div id='dropdownMain' className='navoption'>
              <p id='portfolioNav'>PORTFOLIO</p>
              <div id='dropdownContent'>
                <a href='/portfolio/biennialredesign'>IDENTITY REDESIGN</a>
                <a href='/portfolio/treehouse'>WEB APP DEVELOPMENT</a>
                <a href='/portfolio/bookshare'>WEB DESIGN</a>
                <a href='/portfolio/logo'>LOGO FOR GRACE'S ORGANICS</a>
                <a href='/portfolio/eventtracker'>APP DESIGN</a>
                {/* <a href='/portfolio/artlog'>APP DESIGN 2</a> */}
                <a href='/portfolio/spiralqlanding'>LANDING PAGE</a>
              </div>
            </div>
            <a href='/funwork' className='navoption singleoption'>
              FUN WORK
            </a>
            <a href='/about' className='navoption singleoption'>
              ABOUT
            </a>
            {/* <a href='/contact' className='navoption singleoption'>
              CONTACT
            </a> */}
          </div>
        </nav>
        <div id='line' />
      </div>
    );
  }
}

export default Navbar;
