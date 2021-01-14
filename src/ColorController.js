import React from 'react';
import './App.css';
import './ColorController.css';
import { colors, colorsRGBA } from './colors.js';

class ColorController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 4 };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleClick(e, num) {
    e.preventDefault();
    this.setState({
      selected: num,
    });
    this.props.sendData(this.state.selected);
  }

  handleMouseEnter(e, num) {
    e.preventDefault();
    const currColorSelector = document.getElementById('colorOuter' + `${num}`);
    currColorSelector.style.boxShadow = `0 0 2px 2px ${colorsRGBA[num]}`;
  }

  handleMouseLeave(e, num) {
    e.preventDefault();
    const currColorSelector = document.getElementById('colorOuter' + `${num}`);
    currColorSelector.style.boxShadow = `0 2px 4px 0 rgba(0, 0, 0, 0.15)`;
  }

  handleColorChange() {
    document.getElementById('outerWrapper').style.backgroundColor =
      colors[this.props.color];
  }

  componentDidMount() {
    const outerWrapper = document.getElementById('outerWrapper');
    this.handleColorChange();
    // outerWrapper.style.backgroundColor = colors[this.state.selected];
    for (let i = 0; i < colors.length; i++) {
      const currColorSelector = document.getElementById('colorOuter' + `${i}`);
      currColorSelector.style.backgroundColor = colors[i];

      currColorSelector.addEventListener('click', (e) =>
        this.handleClick(e, i)
      );
      currColorSelector.addEventListener('mouseenter', (e) =>
        this.handleMouseEnter(e, i)
      );
      currColorSelector.addEventListener('mouseleave', (e) =>
        this.handleMouseLeave(e, i)
      );
    }
  }

  componentDidUpdate() {
    this.handleColorChange();
  }

  render() {
    return (
      <div id='outerWrapper'>
        <p id='colorFormLabel'>choose a different color!</p>
        <div id='colorFormWrapper'>
          <div
            className='colorFormOutline'
            id='colorOuter0'
            // onClick={(e) => this.handleClick(e, 0)}
            // onMouseEnter={(e) => this.handleMouseEnter(e, 0)}
            // onMouseLeave={(e) => this.handleMouseLeave(e, 0)}
          >
            {/* <div className='colorFormInner' /> */}
          </div>
          <div
            className='colorFormOutline'
            id='colorOuter1'
            // onClick={(e) => this.handleClick(e, 1)}
            // onMouseEnter={(e) => this.handleMouseEnter(e, 1)}
            // onMouseLeave={(e) => this.handleMouseLeave(e, 1)}
          >
            {/* <div className='colorFormInner' /> */}
          </div>
          <div
            className='colorFormOutline'
            id='colorOuter2'
            // onClick={(e) => this.handleClick(e, 2)}
            // onMouseEnter={(e) => this.handleMouseEnter(e, 2)}
            // onMouseLeave={(e) => this.handleMouseLeave(e, 2)}
          >
            {/* <div className='colorFormInner' /> */}
          </div>
          <div
            className='colorFormOutline'
            id='colorOuter3'
            // onClick={(e) => this.handleClick(e, 3)}
            // onMouseEnter={(e) => this.handleMouseEnter(e, 3)}
            // onMouseLeave={(e) => this.handleMouseLeave(e, 3)}
          >
            {/* <div className='colorFormInner' /> */}
          </div>
          <div
            className='colorFormOutline'
            id='colorOuter4'
            // onClick={(e) => this.handleClick(e, 4)}
            // onMouseEnter={(e) => this.handleMouseEnter(e, 4)}
            // onMouseLeave={(e) => this.handleMouseLeave(e, 4)}
          >
            {/* <div className='colorFormInner' /> */}
          </div>
          <div
            className='colorFormOutline'
            id='colorOuter5'
            // onClick={(e) => this.handleClick(e, 5)}
            // onMouseEnter={(e) => this.handleMouseEnter(e, 5)}
            // onMouseLeave={(e) => this.handleMouseLeave(e, 5)}
          >
            {/* <div className='colorFormInner' /> */}
          </div>
          <div
            className='colorFormOutline'
            id='colorOuter6'
            // onClick={(e) => this.handleClick(e, 6)}
            // onMouseEnter={(e) => this.handleMouseEnter(e, 6)}
            // onMouseLeave={(e) => this.handleMouseLeave(e, 6)}
          >
            {/* <div className='colorFormInner' /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ColorController;
