import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./logodesign1.scss";
import Expandable from "../../components/Expandable/Expandable";
import logo_img from "../../assets/graces_organics_logo.png";

function LogoDesign1() {
    return (
        <>
            <Navbar />
            <div className="logo_1_body">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Grace's Organics Dog Food Logo</h1>
                </div>
                <div className="container">
                    <Expandable
                        imgaddress={logo_img}
                        description="Logo for Grace's Organics Dog Food"
                        className={'logo'}
                    />
                    <div className="main_text">
                        Grace's Organic Dog Food is a family-run business that makes pet food using locally-sourced, organic ingredients. I was put into contact with them through Penn Student Design.
                        <br /> <br />
                        They were looking for fairly detailed logo design, and requested I incorporate an image of a dog with their ingredients.
                        <br /> <br />
                        View their site <a href="https://www.gracesorganic.com/">here</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LogoDesign1;
  