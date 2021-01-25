import React from 'react';
import '../App.css';
import './ToggleLightDark.css';
import { colors, colorsDark, colorsRGBA } from '../colors.js';

function toggle() {
  const lightMode = localStorage.getItem('lightMode');
  if (lightMode === null || lightMode === 'false') {
    localStorage.setItem('lightMode', 'true');
  } else {
    localStorage.setItem('lightMode', 'false');
  }

  // console.log('local storage toggle');
  // console.log(localStorage);
}

function updateSwitch(lightMode) {
  const toggleBackground = document.getElementsByClassName(
    'toggleBackground'
  )[0];
  const toggleSwitch = document.getElementsByClassName('toggleSwitch')[0];
  if (/*this.state.lightMode*/ lightMode || lightMode === null) {
    toggleSwitch.style.float = 'left';
    toggleSwitch.style.backgroundColor = 'white';
    toggleSwitch.innerHTML = '☀️';
    toggleBackground.style.backgroundColor = '#c4c4c4';
  } else {
    toggleSwitch.style.float = 'right';
    toggleSwitch.style.backgroundColor = '#656565';
    toggleSwitch.innerHTML = '🌙';
    toggleBackground.style.backgroundColor = 'black';
  }
}

class ToggleLightDark extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { lightMode: true };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    toggle();
    const lightModeString = localStorage.getItem('lightMode');
    let lightMode = false;
    if (lightModeString === 'true') {
      lightMode = true;
    }

    this.props.update();
    updateSwitch(lightMode);
  }

  handleMouseEnter(e, num) {
    e.preventDefault();
    //const currColorSelector = document.getElementById('colorOuter' + `${num}`);
    //currColorSelector.style.boxShadow = `0 0 2px 2px ${colorsRGBA[num]}`;
    //currColorSelector.style.border = '3px solid white';
  }

  handleMouseLeave(e, num) {
    e.preventDefault();
    //const currColorSelector = document.getElementById('colorOuter' + `${num}`);
    //currColorSelector.style.boxShadow = `0 2px 4px 0 rgba(0, 0, 0, 0.15)`;
    //currColorSelector.style.border = `3px solid ${colors[num]}`;
  }

  handleColorChange() {
    // document.getElementById('outerWrapper').style.backgroundColor =
    //   colors[this.props.color];
  }

  componentDidMount() {
    const outerWrapper = document.getElementById('outerWrapper');
    const toggleBackground = document.getElementsByClassName(
      'toggleBackground'
    )[0];
    toggleBackground.addEventListener('click', (e) => this.handleClick(e));

    let modeNum = this.props.currMode;
    let mode = false;
    if (modeNum === 0) {
      mode = true;
    }
    updateSwitch(mode);
  }

  componentDidUpdate() {
    this.handleColorChange();
    let modeNum = this.props.currMode;
    let mode = false;
    if (modeNum === 0) {
      mode = true;
    }
    updateSwitch(mode);
  }

  render() {
    return (
      <div className='outerWrapper'>
        <div className='toggleBackground'>
          <div className='toggleSwitch'></div>
        </div>
      </div>
    );
  }
}

export default ToggleLightDark;
