import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';

class Contact extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
        <p>CONTACT</p>
      </div>
    );
  }
}

export default withRouter(Contact);
