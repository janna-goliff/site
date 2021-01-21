import React from 'react';
import '../App.css';
import './ToggleLightDark.css';
import { colors, colorsDark, colorsRGBA } from '../colors.js';

class ToggleLightDark extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lightMode: true };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      lightMode: !this.state.lightMode,
    });
    const modeNum = this.state.lightMode ? 0 : 1;
    this.props.sendData(modeNum);
    console.log('clicked!');
    const toggleBackground = document.getElementsByClassName(
      'toggleBackground'
    )[0];
    const toggleSwitch = document.getElementsByClassName('toggleSwitch')[0];
    if (this.state.lightMode) {
      toggleSwitch.style.float = 'left';
      toggleSwitch.style.backgroundColor = 'white';
      toggleBackground.style.backgroundColor = '#c4c4c4';
    } else {
      toggleSwitch.style.float = 'right';
      toggleSwitch.style.backgroundColor = '#656565';
      toggleBackground.style.backgroundColor = 'black';
    }
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
    // this.handleColorChange();
    // // outerWrapper.style.backgroundColor = colors[this.state.selected];
    // for (let i = 0; i < colors.length; i++) {
    //   const currColorSelector = document.getElementById('colorOuter' + `${i}`);
    //   currColorSelector.style.backgroundColor = colors[i];
    //   currColorSelector.style.border = `3px solid ${colors[i]}`;

    //   currColorSelector.addEventListener('click', (e) =>
    //     this.handleClick(e, i)
    //   );
    //   currColorSelector.addEventListener('mouseenter', (e) =>
    //     this.handleMouseEnter(e, i)
    //   );
    //   currColorSelector.addEventListener('mouseleave', (e) =>
    //     this.handleMouseLeave(e, i)
    //   );
    // }
  }

  componentDidUpdate() {
    this.handleColorChange();
  }

  render() {
    return (
      <div className='outerWrapper'>
        <p className='colorFormLabel'>mode</p>
        <div className='toggleBackground'>
          <div className='toggleSwitch'></div>
        </div>
      </div>
    );
  }
}

export default ToggleLightDark;
