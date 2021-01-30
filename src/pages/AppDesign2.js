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
          <h2 className='projectName'>ARTLOG</h2>
          <div className='projectTwoElements'>
            <img
              src='https://i.imgur.com/g8RghNb.png'
              alt='main screen of app mockup'
              className='appPage'
            />
            <p className='projectIntroMainText'>
              A conceptual project and design exercise using Figma to mock
              behavior for an app to log the artmkaing process. Users can add
              tags to their pieces to sort by, create and edit descriptions, and
              set final images to be displayed.
              <br />
              <br />
              See the Figma project{' '}
              <a
                className='inlineLink'
                href='https://www.figma.com/file/RZq03oEjJQGFJybE8YFe4J/ArtLog?node-id=0%3A1'
              >
                here
              </a>
              .
            </p>
          </div>
          <div className='projectThreeElements'>
            <img
              src='https://i.imgur.com/sTFf4qK.png'
              alt='example of ad page'
              className='appPage'
            />
            <img
              src='https://i.imgur.com/TMppFrR.png'
              alt='example of project page'
              className='appPage'
            />
            <img
              src='https://i.imgur.com/lLHgwmg.png'
              alt='example of project description page'
              className='appPage'
            />
          </div>
          {/* <div className='projectTwoElements'>
            <div className='projectGrid'>
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
              <img src='https://i.imgur.com/1UVtb1m.png' alt='image mockup 1' />
            </div>
            <p className='projectIntroMainText'>filler text</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default withRouter(AppDesign1);
