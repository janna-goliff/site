import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';

class AppDesign1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <div className='projectContainer'>
          <h2 className='projectName'>EVENT TRACKER</h2>
          <div className='projectTwoElements'>
            <img
              src='https://i.imgur.com/qJcJv1C.gif'
              alt='gif of app mockup'
              className='phoneGif'
            />
            <p className='projectIntroMainText'>
              A conceptual project and design exercise using Figma to mock
              behavior for a college event tracking app. I was inspired by my
              own need of managing the constant flood of events coming from my
              university.
              <br />
              <br />
              See the Figma project{' '}
              <a
                className='inlineLink'
                href='https://www.figma.com/file/iw4imoufBH70V8fBmg4Xuy/EventTracker-(color)?node-id=0%3A1'
              >
                here
              </a>
              .
            </p>
          </div>
          <div className='projectTwoElements'>
            <div className='projectGrid'>
              <p className='gridDescription'>initial black and white mockups</p>
              <img
                src='https://i.imgur.com/2tSNaN5.png'
                alt='upcoming events screen in black and white'
              />
              <img
                src='https://i.imgur.com/0tPupH9.png'
                alt='event preview in black and white'
              />
              <img
                src='https://i.imgur.com/ZnQQN1X.png'
                alt='event detail in black and white'
              />
              <img
                src='https://i.imgur.com/4ZfJ66J.png'
                alt='calendar view in black and white'
              />
              <img
                src='https://i.imgur.com/JkDSiA3.png'
                alt='search results in black and white'
              />
              <img
                src='https://i.imgur.com/4ZfJ66J.png'
                alt='search screen in black and white'
              />

              <p className='gridDescription'>final colors and designs</p>
              <img
                src='https://i.imgur.com/ftahclj.png'
                alt='upcoming events screen in color'
              />
              <img
                src='https://i.imgur.com/fEmFVuX.png'
                alt='event preview in color'
              />
              <img
                src='https://i.imgur.com/8faeZxG.png'
                alt='event detail in color'
              />
              <img
                src='https://i.imgur.com/TfWAXck.png'
                alt='calendar view in color'
              />
              <img
                src='https://i.imgur.com/CwZ2GGe.png'
                alt='search results in color'
              />
              <img
                src='https://i.imgur.com/ncWHlNg.png'
                alt='search screen in color'
              />
            </div>
            {/* <p className='projectIntroMainText'>filler text</p> */}
          </div>
          <img
            src='https://i.imgur.com/PtaubZ6.png'
            alt='final compilation of event tracker'
            className='fullSpreadImage'
          />
        </div>
      </div>
    );
  }
}

export default withRouter(AppDesign1);
