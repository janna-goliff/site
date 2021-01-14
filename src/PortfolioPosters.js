import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import { colors, pieces, motion } from './colors.js';
import Piece from './Piece.js';
import './Portfolio.css';

class PortfolioPosters extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='outerWrapperPieces'>
          <div id='column1' className='displayColumn'>
            <Piece imgaddress={pieces[0]} description={'filler description1'} />
            <Piece imgaddress={pieces[2]} description={'filler description2'} />
          </div>
          <div id='column2' className='displayColumn'>
            <Piece imgaddress={pieces[1]} description={'filler description5'} />
            <Piece imgaddress={pieces[3]} description={'filler description6'} />
          </div>
        </div>

        <div className='outerWrapperPieces'>
          <div id='column1' className='displayColumn'>
            <Piece imgaddress={motion[0]} description={'filler description1'} />
            <Piece imgaddress={motion[2]} description={'filler description2'} />
          </div>
          <div id='column2' className='displayColumn'>
            <Piece imgaddress={motion[1]} description={'filler description5'} />
            <Piece imgaddress={motion[3]} description={'filler description6'} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PortfolioPosters);
