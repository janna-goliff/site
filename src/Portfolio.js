import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';

class Portfolio extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
        <p>portfolio</p>
      </div>
    );
  }
}

export default withRouter(Portfolio);
