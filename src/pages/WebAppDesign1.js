import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import Expandable from '../components/Expandable';

class WebAppDesign1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <div className='projectContainer'>
          <h2 className='projectName'>BOOKSHARE</h2>
          <div className='projectTwoElements'>
            <Expandable
              style={{ height: '400px', width: 'auto' }}
              imgaddress={'https://i.imgur.com/qEFZZhy.png'}
              description={'gif of app mockup'}
              classes={''}
            />

            <p className='projectIntroMainText'>
              A conceptual project and design exercise using Figma to mock
              behavior for a platform used to connect users reading the same
              books to enable interesting conversation.
              <br />
              <br />
              See the Figma project{' '}
              <a
                className='inlineLink'
                href='https://www.figma.com/file/jpFSBRqgkuUobMRRV4FMEx/Bookshare?node-id=0%3A1'
              >
                here
              </a>
              .
            </p>
          </div>
          <div className='projectGridDesktop'>
            <Expandable
              imgaddress='https://i.imgur.com/qEFZZhy.png'
              description='book view for web in light mode'
              classes={''}
            />
            <Expandable
              imgaddress='https://i.imgur.com/Okh5Zpp.png'
              description='book view for web in dark mode'
              classes={''}
            />
            <Expandable
              imgaddress='https://i.imgur.com/WFPfjt2.png'
              description='messaging view for web in light mode'
              classes={''}
            />
            <Expandable
              imgaddress='https://i.imgur.com/k8vDe6N.png'
              description='messaging view for web in dark mode'
              classes={''}
            />
            <Expandable
              imgaddress='https://i.imgur.com/uLGr5N7.png'
              description='main view for web in light mode'
              classes={''}
            />

            <Expandable
              imgaddress='https://i.imgur.com/l0vQaiL.png'
              description='main view for web in dark  mode'
              classes={''}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(WebAppDesign1);
