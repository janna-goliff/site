import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

class PortfolioProjects extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div id='projectHeader'>
          <h2>PROJECTS</h2>
          <div id='projectContainer'>
            <a href='projects#treehouse'>
              <button>treehouse video and chat app</button>
            </a>
            <a href='projects#biennial'>
              <button>biennial redesign</button>
            </a>
            <button>social media design</button>
          </div>
          <hr />
          <article className='individualProject'>
            <a name='treehouse'>
              <button className='projectName'>
                treehouse video and chat app
              </button>
            </a>
            <div className='projectIntro'></div>
            <p>filler stuff</p>
            <div>filler div</div>
          </article>
          <article className='individualProject'>
            <a name='biennial'>
              <button className='projectName'>biennial</button>
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

export default withRouter(PortfolioProjects);
