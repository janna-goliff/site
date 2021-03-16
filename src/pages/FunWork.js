import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import { /*colors,*/ pieces, motion } from '../colors.js';
import Piece from '../components/Piece.js';
import './Portfolio.css';

class LogoDesign1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <div className='outerWrapperPieces'>
          <div id='column1' className='displayColumn'>
            <Piece
              imgaddress={pieces[0]}
              description={
                'A poster design inspired by 70s rock band posters, particularly Pink Floyd'
              }
            />
            <Piece
              imgaddress={pieces[2]}
              description={'A park promotional poster'}
            />
          </div>
          <div id='column2' className='displayColumn'>
            <Piece
              imgaddress={pieces[1]}
              description={'A cat, reimagined as a movie villain'}
            />
            <Piece imgaddress={pieces[3]} description={'Conceptual poster'} />
          </div>
        </div>

        <div className='outerWrapperPieces'>
          <div id='column1' className='displayColumn'>
            <Piece imgaddress={motion[0]} description={'Phenakistiscope '} />
            <Piece imgaddress={motion[2]} description={'Frog animation'} />
          </div>
          <div id='column2' className='displayColumn'>
            <Piece imgaddress={motion[1]} description={'Cat animation'} />
            <Piece
              imgaddress={motion[3]}
              description={'Self portrait animation'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LogoDesign1);
