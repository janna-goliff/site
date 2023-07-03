import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.scss';

function Navbar() {
    const [ menuExpanded, setMenuExpanded ] = useState(false);

    return (
        <div className="navbar_wrapper">
            <Link to="/site/" className="navbar_name">Janna Goliff</Link>
            <div className="menu_icon" onClick={()=>{setMenuExpanded(!menuExpanded)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="358" height="306" viewBox="0 0 358 306" fill="none">
                    <rect width="358" height="48" rx="24" fill="black"/>
                    <rect y="129" width="358" height="48" rx="24" fill="black"/>
                    <rect y="258" width="358" height="48" rx="24" fill="black"/>
                </svg>
            </div>
            <div className={"navbar_links " + (menuExpanded ? "expanded" : "")}>
                <div id='dropdownMain2' className='navoption main_section_wrapper'>
                    <div id='devNav'>
                        <p className="main_section">Engineering</p>
                        <div className="underline" />
                    </div>
                    <div id='dropdownContent2'>
                        <Link to='/site/webdev/beepboop'>Beepboop Mobile-First Redesign</Link>
                        <Link to='/site/engineering/futurepiproject'>2050: an Earth Odyssey</Link>
                        {/* <Link to='/site/webdev/dataportraits'>Data portraits</Link> */}
                        {/* <Link to='/site/webdev/treehouse'>Web app development</Link> */}
                    </div>
                </div>
                <div id='dropdownMain' className='navoption main_section_wrapper'>
                    <div id='designNav'>
                        <p className="main_section">Design</p>
                        <div className="underline" />
                    </div>
                    <div id='dropdownContent'>
                        <Link to='/site/design/beepboopuserflow'>Beepboop User Flow</Link>
                        <Link to='/site/design/appdesignclimbr'>App Design: Climbr</Link>
                        <Link to='/site/design/vrroom'>VR Room</Link>
                        <Link to='/site/design/pennintouchredesign'>PennInTouch Redesign</Link>
                        {/* <Link to='/site/design/photoavgdataviz'>Data viz: photo averages</Link> */}
                        <Link to='/site/design/biennialredesign'>Biennial identity redesign</Link>
                        {/* <Link to='/site/design/webdesignexercise1'>Web design: book sharing site</Link>
                        <Link to='/site/design/dataviz1'>Data viz: video game history</Link> */}
                        {/* <Link to='/site/design/logodesign1'>Grace's Organics logo</Link> */}
                    </div>
                </div>
                {/* <div className="main_section_wrapper">
                    <Link className="main_section" to="/site/funstuff">Fun stuff</Link>
                    <div className="underline" />
                </div> */}
                <div className="main_section_wrapper">
                    <a target="_blank" rel="noopener noreferrer" className="main_section" href="https://docs.google.com/document/d/1JYqAnsLnR08J2nMYhpooTWkUeYiRZDKvzhNHKrBSfZg/edit?usp=sharing">
                        <svg className="mainArrow" alt="rightArrow" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.22 308.81"><defs>
                            </defs><line className="cls-2" x1="359.22" y1="154.41" x2="22.47" y2="154.41"/><polyline className="cls-1" points="147.42 20 20 154.41 147.42 288.81"/>
                        </svg>
                        Resume
                    </a>
                    <div className="underline" />
                </div>
                <div className="main_section_wrapper">
                    <Link className="main_section" to="/site/about">
                        <svg className="mainArrow" alt="rightArrow" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.22 308.81"><defs>
                            </defs><line className="cls-2" x1="359.22" y1="154.41" x2="22.47" y2="154.41"/><polyline className="cls-1" points="147.42 20 20 154.41 147.42 288.81"/>
                        </svg>
                        About
                    </Link>
                    <div className="underline" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
  