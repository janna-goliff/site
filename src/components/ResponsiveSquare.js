import React from 'react';
import '../App.css';
import './ResponsiveSquare.css';
import { colors, colorsRGBA } from '../colors.js';

class ResponsiveSquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = { borderRadius: '0px' };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.respondToMouse = this.respondToMouse.bind(this);
    // this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleClick(e, num) {
    e.preventDefault();
    // this.setState({
    //   selected: num,
    // });
    // this.props.sendData(this.state.selected);
  }

  handleMouseEnter(e) {
    e.preventDefault();
    let currRadius = e.target.style.borderRadius;
    if (currRadius === '') {
      currRadius = 0;
    } else {
      currRadius = currRadius.substr(0, currRadius.length - 2);
    }

    console.log(currRadius);
  }

  handleMouseLeave(e, num) {
    e.preventDefault();
  }

  handleColorChange() {
    // document.getElementById('outerWrapper').style.backgroundColor =
    //   colors[this.props.color];
  }

  respondToMouse(event) {
    event = event || window.event;
    const xMousePos = event.clientX;
    const yMousePos = event.clientY;

    const responsiveEle = document.getElementById('resEle');
    const eleWidth =
      responsiveEle.getBoundingClientRect().right -
      responsiveEle.getBoundingClientRect().left;

    const xElePos = responsiveEle.getBoundingClientRect().left + eleWidth / 2;
    const yElePos = responsiveEle.getBoundingClientRect().top + eleWidth / 2;

    //console.log(xElePos + ' ' + yElePos);

    const distance = Math.sqrt(
      (xMousePos - xElePos) ^ (2 + (yMousePos - yElePos)) ^ 2
    );

    let newRadius = Math.round(distance * 5);
    if (newRadius === NaN) {
      newRadius = 0;
    }
    responsiveEle.style.borderRadius = newRadius + 'px';
  }

  componentDidMount() {
    //document.addEventListener('mousemove', (e) => this.respondToMouse(e));
  }

  // componentDidUpdate() {
  //   this.handleColorChange();
  // }

  render() {
    return (
      <div id='resEle' onMouseEnter={(e) => this.handleMouseEnter(e)}></div>
    );
  }
}

export default ResponsiveSquare;
