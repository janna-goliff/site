import React from "react";
import "./identityredesign.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import Expandable from "../../components/Expandable/Expandable";


function Landing() {
    return (
        <ColorChanger>
            <Navbar />
            <div className="landing_body">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Fifth Ural Industrial Biennial Redesign</h1>
                    <div>
                    As a case study on building hollistic identities, I chose The Fifth Ural Industrial Biennial to analyze and redesign. focuses on themes of the DIGITAL,
                    IMMORTALITY, AND DEATH. To reflect the expansive reach of the
                    Biennial's themes, I chose to reimagine it with a bright, vibrant color palette.
                    The locations of the biennial, an optical factory and theater,
                    inspired the use of imagery related to opticality and op-art.
                    </div>
                </div>
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
                <article className='individualProject'>
                    <a href='biennialredesign#poster' name='poster'>
                    <h3 className='subprojectName'>POSTER</h3>
                    </a>
                    <div className="mainContent">
                        <Expandable
                            imgaddress='https://i.imgur.com/sBFiOvP.jpg'
                            description='poster design for the ural industrial biennial'
                            className={'individual'}
                        />
                        <Expandable
                            id='landscape'
                            imgaddress='https://i.imgur.com/72TeFav.png'
                            description='poster mockup for the ural industrial biennial'
                            className={'individual'}
                        />
                    </div>
                    <p className='subProjectDescription'>
                    The poster was the first project I started on for this redesign.
                    The thematic range of the biennial inspired the choice to expand 
                    its color palette outside of the original design.
                    </p>
                </article>
                <article className='individualProject'>
                    <a href='biennialredesign#motion' name='motion'>
                    <h3 className='subprojectName'>MOTION</h3>
                    </a>
                    <div className='mainContent'>
                    <iframe
                        title='motion piece 1'
                        className='individual'
                        width='534'
                        height='300'
                        src='https://www.youtube.com/embed/5ULGQxR_6Kc'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                    <iframe
                        title='motion piece 2'
                        className='individual'
                        width='534'
                        height='300'
                        src='https://www.youtube.com/embed/yppPBZEoWnk'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                    </div>
                    <p className='subProjectDescription'>
                    Leveraging the bilingual aspect of the biennial, I experimented with motion graphics 
                    that use both English and Russian. Made using Adobe After Effects.
                    </p>
                </article>
                <article className='individualProject'>
                    <a href='biennialredesign#publication' name='publication'>
                    <h3 className='subprojectName'>PUBLICATION</h3>
                    </a>
                    <div className='mainContent projectGrid'>
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
                    Carrying the established motifs around opticality into a publication for 
                    the biennial, I designed a book that would sample artists' work to create 
                    striking fields of color as a backdrop to their work.
                    </p>
                </article>
                <article className='individualProject'>
                    <a href='biennialredesign#website' name='website'>
                    <h3 className='subprojectName'> WEBSITE</h3>
                    </a>
                    <div className='mainContent'>
                    <iframe
                        title='website video'
                        width='534'
                        height='300'
                        src='https://www.youtube.com/embed/ZAcdEvXHJx8'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                    </div>
                    <p className='subProjectDescription'></p>
                </article>
            </div>
        </ColorChanger>
    );
}

export default Landing;
  