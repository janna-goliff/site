import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';

class IdentityDesign1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div id='projectHeader'>
          <h2>FIFTH URAL INDUSTRIAL BIENNIAL REDESIGN</h2>
          <div id='projectContainer'>
            <a href='biennialredesign#poster'>
              <button>poster</button>
            </a>
            <a href='biennialredesign#motion'>
              <button>motion</button>
            </a>
            <a href='biennialredesign#publication'>
              <button>publication</button>
            </a>
            <a href='biennialredesign#website'>
              <button>website</button>
            </a>
          </div>
          <hr />
          <article className='individualProject'>
            <a name='poster'>
              <button className='projectName'>poster</button>
            </a>
            <div className='projectIntro'></div>
            <p>filler stuff</p>
            <div>filler div</div>
          </article>
          <article className='individualProject'>
            <a name='motion'>
              <button className='projectName'>motion</button>
            </a>
            <div className='projectIntro'></div>
            <p>filler stuff</p>
            <div>filler div</div>
          </article>
          <article className='individualProject'>
            <a name='publication'>
              <button className='projectName'>publication</button>
            </a>
            <div className='projectIntro'></div>
            <p>filler stuff</p>
            <div>filler div</div>
          </article>
          <article className='individualProject'>
            <a name='website'>
              <button className='projectName'>website</button>
            </a>
            <div className='projectIntro'></div>
            <p>filler stuff</p>
            <div>filler div</div>
          </article>
        </div>
      </div>
    );
  }
}

export default withRouter(IdentityDesign1);
