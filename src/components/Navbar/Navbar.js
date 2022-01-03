import React from "react";
import { Link } from "react-router-dom";
import './navbar.scss';

function Navbar() {
    return (
        <div className="navbar_wrapper">
            <Link to="/" className="navbar_name">Janna Goliff</Link>
            <div className="navbar_links">
                <div id='dropdownMain2' className='navoption main_section_wrapper'>
                    <div id='devNav'>
                        <p className="main_section">Engineering</p>
                        <div className="underline" />
                    </div>
                    <div id='dropdownContent2'>
                        <Link to='/engineering/futurepiproject'>2050: an Earth Odyssey</Link>
                        <Link to='/webdev/beepboop'>Beepboop internship</Link>
                        <Link to='/webdev/dataportraits'>Data portraits</Link>
                        <Link to='/webdev/treehouse'>Web app development (CIS557)</Link>
                    </div>
                </div>
                <div id='dropdownMain' className='navoption main_section_wrapper'>
                    <div id='designNav'>
                        <p className="main_section">Design</p>
                        <div className="underline" />
                    </div>
                    <div id='dropdownContent'>
                        <Link to='/design/biennialredesign'>Biennial identity redesign</Link>
                        <Link to='/design/webdesignexercise1'>Web design: book sharing site</Link>
                        <Link to='/design/appdesign1'>App design: event tracker</Link>
                        <Link to='/design/dataviz1'>Data viz: video game history</Link>
                        <Link to='/design/logodesign1'>Grace's Organics logo</Link>
                    </div>
                </div>
                <div className="main_section_wrapper">
                    <Link className="main_section" to="/funstuff">Fun stuff</Link>
                    <div className="underline" />
                </div>
                <div className="main_section_wrapper">
                    <Link className="main_section" to="/about">About</Link>
                    <div className="underline" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
  