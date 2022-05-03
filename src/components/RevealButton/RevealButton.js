import React from 'react';
import './revealbutton.scss';

class RevealButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickPiece = this.handleClickPiece.bind(this);
    this.handleRemoveOverlay = this.handleRemoveOverlay.bind(this);
  }

  handleClickPiece(e) {
    e.preventDefault();
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'divOverlay');
    newDiv.setAttribute('class', 'divOverlay');
    newDiv.addEventListener('click', (e) => this.handleRemoveOverlay(e));
    document.body.append(newDiv);

    //creates image
    const image = document.createElement('img');
    image.setAttribute('src', this.props.imgaddress);
    image.setAttribute('id', 'pieceImage');

    // creates container
    const newDivColumns = document.createElement('div');
    newDivColumns.setAttribute('class', 'imageOverlayDisplay');
    newDivColumns.append(image);

    newDiv.append(newDivColumns);
  }

  handleRemoveOverlay(e) {
    // removes overlay
    const overlay = document.getElementById('divOverlay');
    overlay.remove();
  }

  render() {
    return (
        <div
          onClick={this.handleClickPiece}
          className={this.props.className + ' revealButton'}
        >
          View original
        </div>
    );
  }
}

export default RevealButton;
