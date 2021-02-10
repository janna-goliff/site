import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import Expandable from '../components/Expandable';

class AppDesign1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  constructor(props) {
    super(props);
    this.handleClickPiece = this.handleClickPiece.bind(this);
  }

  handleClickPiece(e, imgaddress, description) {
    e.preventDefault();
    console.log('clicked');
  }

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
              . Or see the lo-fi prototype{' '}
              <a href='https://www.figma.com/file/nx1FMAU2KMrDkNY2P8b9Lo/EventTracker-lo-fideilty?node-id=0%3A1'>
                here
              </a>
              .
            </p>
          </div>
          <div className='projectTwoElements'>
            <div className='projectGrid'>
              <p className='gridDescription'>initial black and white mockups</p>
              {/* <img
                src='https://i.imgur.com/2tSNaN5.png'
                alt='upcoming events screen in black and white'
                onClick={(e) => {
                  this.handleClickPiece(
                    e,
                    'https://i.imgur.com/2tSNaN5.png',
                    'upcoming events screen in black and white'
                  );
                }}
              /> */}
              <Expandable
                imgaddress={'https://i.imgur.com/2tSNaN5.png'}
                description={'upcoming events screen in black and white'}
                classes={''}
              />
              <Expandable
                imgaddress='https://i.imgur.com/0tPupH9.png'
                description='event preview in black and white'
                classes={''}
              />
              <Expandable
                imgaddress='https://i.imgur.com/ZnQQN1X.png'
                description='event detail in black and white'
                classes={''}
              />
              <Expandable
                imgaddress='https://i.imgur.com/4ZfJ66J.png'
                description='calendar view in black and white'
                classes={''}
              />
              <Expandable
                imgaddress='https://i.imgur.com/JkDSiA3.png'
                description='search results in black and white'
                classes={''}
              />
              <Expandable
                imgaddress='https://i.imgur.com/4ZfJ66J.png'
                description='search screen in black and white'
                classes={''}
              />

              <p className='gridDescription'>final colors and designs</p>
              <Expandable
                imgaddress='https://i.imgur.com/ftahclj.png'
                description='upcoming events screen in color'
              />
              <Expandable
                imgaddress='https://i.imgur.com/fEmFVuX.png'
                description='event preview in color'
              />
              <Expandable
                imgaddress='https://i.imgur.com/8faeZxG.png'
                description='event detail in color'
              />
              <Expandable
                imgaddress='https://i.imgur.com/TfWAXck.png'
                description='calendar view in color'
              />
              <Expandable
                imgaddress='https://i.imgur.com/CwZ2GGe.png'
                description='search results in color'
              />
              <Expandable
                imgaddress='https://i.imgur.com/ncWHlNg.png'
                description='search screen in color'
              />
            </div>
          </div>
          {/* <img
            src='https://i.imgur.com/PtaubZ6.png'
            alt='final compilation of event tracker'
            className='fullSpreadImage'
          /> */}
        </div>
      </div>
    );
  }
}

export default withRouter(AppDesign1);
