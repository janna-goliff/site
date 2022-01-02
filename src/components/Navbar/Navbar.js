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
                        <a href='/engineering/futurepiproject'>2050: an Earth Odyssey</a>
                        <a href='/webdev/beepboop'>Beepboop internship</a>
                        <a href='/webdev/dataportraits'>Data portraits</a>
                        <a href='/webdev/treehouse'>Web app development (CIS557)</a>
                    </div>
                </div>
                <div id='dropdownMain' className='navoption main_section_wrapper'>
                    <div id='designNav'>
                        <p className="main_section">Design</p>
                        <div className="underline" />
                    </div>
                    <div id='dropdownContent'>
                        <a href='/design/biennialredesign'>Biennial identity redesign</a>
                        <a href='/design/webdesignexercise1'>Web design: book sharing site</a>
                        <a href='/design/appdesign1'>App design: event tracker</a>
                        <a href='/design/dataviz1'>Data viz: video game history</a>
                        <a href='/design/logodesign1'>Grace's Organics logo</a>
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
  