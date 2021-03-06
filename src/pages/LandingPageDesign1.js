import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import './Portfolio.css';
import Expandable from '../components/Expandable';

class LandingPageDesign1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <div className='projectContainer headerContainer centeredContainer'>
          <h2 className='projectName'>LANDING PAGE CONCEPT FOR SPIRAL Q</h2>
          <div className='projectOneElement'>
            <Expandable
              imgaddress='https://i.imgur.com/yYAI8Rc.png'
              description={`landing page design for Spiral Q; rowhouses line a street with a sunset glowing overtop`}
              classes={'bigImg'}
            />
            <p className='projectIntroMainText centeredBelow'>
              This is a conceptual landing page design for Spiral Q, a community
              arts non-profit based in West Philadelphia.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPageDesign1);
