import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';

class PortfolioTraditional extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <div className='projectContainer'>
          <div className='projectTwoElements'>
            <img
              src='https://i.imgur.com/qJcJv1C.gif'
              alt='gif of app mockup'
              className='phoneGif'
            />
            <p className='projectIntroMainText'>filler text</p>
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

export default withRouter(PortfolioTraditional);
