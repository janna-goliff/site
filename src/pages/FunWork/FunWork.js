import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./funwork.scss";
import Expandable from "../../components/Expandable/Expandable";
//import self_portait from "../../assets/funwork/self-portait.gif";
import froggy from "../../assets/funwork/froggy.gif";
import nature_scene from "../../assets/funwork/nature-scene.gif";
import pink_floyd_poster from "../../assets/funwork/pink-floyd-poster.png";
import q_poster from "../../assets/funwork/q-poster.png";

function FunWork() {
    return (
        <>
            <Navbar />
            <div className="fun_work_body">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Fun personal projects</h1>
                </div>
                
                <div className="container">
                    <div className="main_text">
                        Projects I've done for fun, including a 70s-inspired band poster, a movie poster reimagining a cat as a villain, and animation projects.
                    </div>
                    <div className='outerWrapperPieces'>
                        <div id='column1' className='displayColumn'>
                            <Expandable
                                imgaddress={pink_floyd_poster}
                                description={
                                'A poster design inspired by 70s rock band posters, particularly Pink Floyd'
                            }
                            />
                            <Expandable
                                imgaddress={nature_scene}
                                description={'An animated gif of a bird flying across a park'}
                            />
                        </div>
                        <div id='column2' className='displayColumn'>
                            <Expandable
                                imgaddress={q_poster}
                                description={'A cat, reimagined as a movie villain'}
                            />
                            <Expandable 
                                imgaddress={froggy} 
                                description={'An animated gif of a jumping frog'} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FunWork;
  