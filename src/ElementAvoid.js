import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

const objects = ['obj1'];
function avoid(event) {
  //event.target.style.backgroundColor = 'green';
  let curr = event.target;
  curr.classList.add('greenClass');
  //let leftPos =
  let leftPosValue = curr.getBoundingClientRect().left; //leftPos.substring(0, leftPos.indexOf('px'));
  // console.log(`starting value: ${leftPosValue}`);
  let interval = setInterval(moving, 3);
  const original = leftPosValue;
  let hasAvoided = false;
  function moving() {
    // move away
    if (leftPosValue >= original + 50) {
      hasAvoided = true;
      clearInterval(interval);
    } else {
      leftPosValue++;
      curr.style.left = leftPosValue + 'px';
      //console.log(leftPosValue);
    }
    //console.log(`hasAvoided: ${hasAvoided}`);
    if (hasAvoided) {
      let curr = event.target;
      let leftPosValue = curr.getBoundingClientRect().left;
      let interval2 = setInterval(moving2, 3);
      const original2 = original;
      function moving2() {
        if (leftPosValue <= original2) {
          clearInterval(interval2);
        } else {
          leftPosValue--;
          curr.style.left = leftPosValue + 'px';
          //console.log(leftPosValue);
        }
      }
    }
  }
}

// function reset(event) {
//   let curr = event.target;
//   let leftPosValue = curr.getBoundingClientRect().left;
//   let interval = setInterval(moving, 3);
//   const original = 10;
//   function moving() {
//     if (leftPosValue <= original) {
//       clearInterval(interval);
//     } else {
//       leftPosValue--;
//       curr.style.left = leftPosValue + 'px';
//       // console.log(leftPosValue);
//     }
//   }
// }

class ElementAvoid extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const obj1 = document.getElementById('obj1');
    obj1.addEventListener('mouseenter', avoid, false);
    //obj1.addEventListener('mouseleave', reset, false);
  }

  render() {
    return (
      <div
        className='movingObj'
        id='obj1'
        style={{
          width: this.props.width,
          height: this.props.height,
          left: this.props.left,
          position: 'relative',
          borderRadius: this.props.borderRadius,
          borderWidth: '3px',
          borderColor: 'white',
          borderStyle: 'solid',
        }}
      ></div>
    );
  }
}

export default ElementAvoid;
