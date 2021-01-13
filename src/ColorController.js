import React from 'react';
import './App.css';
import './ColorController.css';

const colors = [
  'black',
  '#E73333',
  '#FB881E',
  '#E5BA21',
  '#43704D',
  '#25498E',
  '#8E2571',
];

class ColorController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, num) {
    e.preventDefault();
    // console.log('was clicked.');
    // console.log(num);
    for (let i = 0; i < colors.length; i++) {
      const currColorSelector = document.getElementById('colorOuter' + `${i}`);
      if (i === num) {
        // changes to correct color
        currColorSelector.style.backgroundColor = colors[i];
      } else {
        // resets all others
        currColorSelector.style.backgroundColor = 'white';
      }
    }
  }

  render() {
    return (
      <div id='colorFormWrapper'>
        <div
          className='colorFormOutline'
          id='colorOuter0'
          onClick={(e) => this.handleClick(e, 0)}
        >
          {/* <div className='colorFormInner' /> */}
        </div>
        <div
          className='colorFormOutline'
          id='colorOuter1'
          onClick={(e) => this.handleClick(e, 1)}
        >
          {/* <div className='colorFormInner' /> */}
        </div>
        <div
          className='colorFormOutline'
          id='colorOuter2'
          onClick={(e) => this.handleClick(e, 2)}
        >
          {/* <div className='colorFormInner' /> */}
        </div>
        <div
          className='colorFormOutline'
          id='colorOuter3'
          onClick={(e) => this.handleClick(e, 3)}
        >
          {/* <div className='colorFormInner' /> */}
        </div>
        <div
          className='colorFormOutline'
          id='colorOuter4'
          onClick={(e) => this.handleClick(e, 4)}
        >
          {/* <div className='colorFormInner' /> */}
        </div>
        <div
          className='colorFormOutline'
          id='colorOuter5'
          onClick={(e) => this.handleClick(e, 5)}
        >
          {/* <div className='colorFormInner' /> */}
        </div>
        <div
          className='colorFormOutline'
          id='colorOuter6'
          onClick={(e) => this.handleClick(e, 6)}
        >
          {/* <div className='colorFormInner' /> */}
        </div>
      </div>
    );
  }
}

export default ColorController;
