import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

class Launch extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.history.push({
      pathname: '/site/home',
    });
  }

  render() {
    return (
      // STARTING PROMPT
      <div id='startContainer'>
        <h1 id='introText'>welcome to my site</h1>
        <div>
          <button
            className='contButton'
            type='button'
            onClick={this.handleButtonClick}
          >
            start!
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Launch);
