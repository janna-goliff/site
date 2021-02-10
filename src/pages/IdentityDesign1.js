import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import Expandable from '../components/Expandable';

class IdentityDesign1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <div id='projectHeader' className='projectContainer'>
          <h2 className='projectName'>
            FIFTH URAL INDUSTRIAL BIENNIAL REDESIGN
          </h2>
          <div id='subprojectContainer'>
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
          <p className='subProjectDescription'>
            The Fifth Ural Industrial Biennial focuses on themes of the DIGITAL,
            IMMORTALITY, AND DEATH. To reflect the expansive reach of the
            Biennial’s themes, a bright, vibrant color palette has been chosen. 
            The locations of the biennial, an optical factory and theater,
            loosely inspired imagery related to opticality and op-art.
          </p>
          <article className='individualProject'>
            <a name='poster'>
              <h3 className='subprojectName'>POSTER</h3>
            </a>
            <div className='publicationGrid one-col'>
              <Expandable
                imgaddress='https://i.imgur.com/sBFiOvP.jpg'
                description='poster design for the ural industrial biennial'
                className={''}
              />
              <Expandable
                id='landscape'
                imgaddress='https://i.imgur.com/72TeFav.png'
                description='poster mockup for the ural industrial biennial'
                className={''}
              />
            </div>
            <p className='subProjectDescription'>
              The poster was the first project I started on for this redesign.
              Inspired by the themes of the digital, immortality, and death, I
              felt the new identity's palette should reflect the expansive
              nature of the biennial.
            </p>
          </article>
          <article className='individualProject'>
            <a name='motion'>
              <h3 className='subprojectName'>MOTION</h3>
            </a>
            <div className='publicationGrid'>
              <iframe
                width='534'
                height='300'
                src='https://www.youtube.com/embed/5ULGQxR_6Kc'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
              <iframe
                width='534'
                height='300'
                src='https://www.youtube.com/embed/yppPBZEoWnk'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <p className='subProjectDescription'>
              The motion pieces utilize the two languages of the biennial to
              make an engaging graphic.
            </p>
          </article>
          <article className='individualProject'>
            <a name='publication'>
              <h3 className='subprojectName'>PUBLICATION</h3>
            </a>
            <div className='publicationGrid'>
              <Expandable
                imgaddress='https://i.imgur.com/FqtTfHE.jpg'
                description='publication mockup of book cover'
                className={''}
              />
              <Expandable
                imgaddress='https://i.imgur.com/mdamSfJ.jpg'
                description='publication mockup of book aritst page'
                className={''}
              />
              <Expandable
                imgaddress='https://i.imgur.com/6mfd30w.jpg'
                description='publication mockup of book title page'
                className={''}
              />
              <Expandable
                imgaddress='https://i.imgur.com/GmfwRMd.jpg'
                description='publication mockup of book cover front and back'
                className={''}
              />
            </div>
            <p className='subProjectDescription'>
              For the publication, I aimed to incorporate preexisting elements
              of the established visual identity from the poster.
            </p>
          </article>
          <article className='individualProject'>
            <a name='website'>
              <h3 className='subprojectName'> WEBSITE</h3>
            </a>
            <div className='publicationGrid'>
              <iframe
                width='1045'
                height='490'
                src='https://www.youtube.com/embed/ZAcdEvXHJx8'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <p className='subProjectDescription'></p>
          </article>
        </div>
      </div>
    );
  }
}

export default withRouter(IdentityDesign1);
