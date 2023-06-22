import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss';

function Navbar() {
    return (
        <div className="navbar_wrapper">
            <Link to="/site/" className="navbar_name">Janna Goliff</Link>
            <div className="navbar_links">
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
                    <a target="_blank" rel="noopener noreferrer" className="main_section" href="https://docs.google.com/document/d/1JYqAnsLnR08J2nMYhpooTWkUeYiRZDKvzhNHKrBSfZg/edit?usp=sharing">Resume</a>
                    <div className="underline" />
                </div>
                <div className="main_section_wrapper">
                    <Link className="main_section" to="/site/about">About</Link>
                    <div className="underline" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
  