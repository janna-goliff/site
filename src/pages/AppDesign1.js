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
              EVENT TRACKER: A conceptual project and design exercise using
              Figma to mock behavior for a college event tracking app. I was
              inspired by my own need of managing the constant flood of events
              coming from my university.
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
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
            </div>
            <p className='projectIntroMainText'>filler text</p>
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
