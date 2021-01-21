import React from 'react';
import '../App.css';
import './Piece.css';
import { colors, colorsRGBA } from '../colors.js';

class Piece extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 4 };
    this.handleClickPiece = this.handleClickPiece.bind(this);
    this.handleMouseEnterPiece = this.handleMouseEnterPiece.bind(this);
    this.handleMouseLeavePiece = this.handleMouseLeavePiece.bind(this);
    this.handleRemoveOverlay = this.handleRemoveOverlay.bind(this);
  }

  handleClickPiece(e) {
    e.preventDefault();
    // console.log('clicked pic!');
    // adds overlay
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'divOverlay');
    newDiv.setAttribute('class', 'divOverlay');
    newDiv.addEventListener('click', (e) => this.handleRemoveOverlay(e));
    document.body.append(newDiv);

    //creates image
    const image = document.createElement('img');
    image.setAttribute('src', this.props.imgaddress);
    image.setAttribute('id', 'pieceImage');

    // creates description
    const description = document.createElement('p');
    description.innerHTML = this.props.description;

    // creates container
    const newDivColumns = document.createElement('div');
    newDivColumns.setAttribute('class', 'imageOverlayDisplay');
    newDivColumns.append(image);
    newDivColumns.append(description);

    newDiv.append(newDivColumns);
  }

  handleMouseEnterPiece(e) {
    e.preventDefault();
    const image = e.target;
    image.style.opacity = '.35';
    const text = image.previousSibling;
    text.style.display = 'inline-block';
  }

  handleMouseLeavePiece(e, num) {
    e.preventDefault();
    const image = e.target;
    image.style.opacity = '1';
    const text = image.previousSibling;
    text.style.display = 'none';
  }

  handleRemoveOverlay(e) {
    // removes overlay
    const overlay = document.getElementById('divOverlay');
    overlay.remove();
  }

  componentDidUpdate() {
    // console.log(`${this.state.selected}`);
  }

  render() {
    return (
      <div id='mainPieceWrapper'>
        <div className='pieceDescription' id='pieceDescIndivid'>
          {this.props.description}
        </div>
        <img
          src={this.props.imgaddress}
          alt='portfolio_img'
          onMouseEnter={(e) => this.handleMouseEnterPiece(e)}
          onMouseLeave={(e) => this.handleMouseLeavePiece(e)}
          onClick={this.handleClickPiece}
        />
      </div>
    );
  }
}

export default Piece;
