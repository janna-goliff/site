import React from 'react';
import './expandable.scss';

class Expandable extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickPiece = this.handleClickPiece.bind(this);
    this.handleMouseLeavePiece = this.handleMouseLeavePiece.bind(this);
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

  handleMouseLeavePiece(e, num) {
    e.preventDefault();
    const image = e.target;
    image.style.opacity = '1';
  }

  handleRemoveOverlay(e) {
    // removes overlay
    const overlay = document.getElementById('divOverlay');
    overlay.remove();
  }

  render() {
    return (
      <div className='expandable'>
        <img
          src={this.props.imgaddress}
          alt={this.props.description}
          onMouseLeave={(e) => this.handleMouseLeavePiece(e)}
          onClick={this.handleClickPiece}
          className={this.props.className + ' expandableImg'}
        />
      </div>
    );
  }
}

export default Expandable;
