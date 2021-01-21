import React from 'react';
import '../App.css';
import './Navbar.css';
import { colors, colorsDark } from '../colors.js';

function updateNavbarColors(modeNum) {
  // gets reference number for current color of page
  //const currColorNum = num; //this.props.color;
  // makes dropdown content have a color relational to background color
  // console.log('inside update navbar colors');
  // console.log(modeNum);
  const dropdownContentLinks = document.getElementById('dropdownContent')
    .childNodes;
  for (let i = 0; i < dropdownContentLinks.length; i++) {
    dropdownContentLinks[i].style.backgroundColor = colors[modeNum];
    dropdownContentLinks[i].addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = colorsDark[modeNum];
    });
    dropdownContentLinks[i].addEventListener('mouseleave', (e) => {
      e.target.style.backgroundColor = colors[modeNum];
    });
  }

  // makes navoptions have relational color hover state
  const navoptions = document.getElementsByClassName('navoption');
  for (let i = 0; i < navoptions.length; i++) {
    navoptions[i].style.backgroundColor = colors[modeNum];
    navoptions[i].addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = colorsDark[modeNum];
    });
    navoptions[i].addEventListener('mouseleave', (e) => {
      e.target.style.backgroundColor = colors[modeNum];
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
