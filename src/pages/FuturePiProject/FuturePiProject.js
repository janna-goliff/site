import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import OdysseyGame from "../../components/OdysseyGame/OdysseyGame";
import "./futurepiproject.scss";
import Expandable from "../../components/Expandable/Expandable";
import pi_proj_gif from "../../assets/futurepiproject/pi_proj.gif";
import pi_proj_map from "../../assets/futurepiproject/journey_map.png";
import title from "../../assets/futurepiproject/frames/title.png";
import controls from "../../assets/futurepiproject/frames/controls.png";
import exposition from "../../assets/futurepiproject/frames/exposition.png";

function FuturePiProject() {
    return (
        <ColorChanger>
            <Navbar />
            <div className="future_pi_project">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>2050: an Earth Odyssey</h1>
                </div>
                <div className="container">
                    <img className="phone_frame_image" src={pi_proj_gif} alt={"screenshot"} />
                    <div className="main_text">
                        Using the Raspberry Pi, I built a miniature video game 
                        envisioning what the future might look like in 2050. 
                        Players have the option to go to the next scene, go back, or select different options using the joystick
                        as they explore this future world and spend a day in the life of a young American adult in 2050.
                        <br />
                        <br />
                        I created each scene in Photoshop, and coded a program to run the interactable game on the Pi using Python.
                        <br />
                        <br />
                        This project used the <a href="https://www.canakit.com/raspberry-pi-4-starter-kit.html">Raspberry Pi 4 Starter Kit</a> from Canakit
                        and a <a href="https://www.adafruit.com/product/3531">128x64 OLED Bonnet</a> from Adafruit, using Adafruit's starter code to set up 
                        controls of the bonnet. See the Github repo <a href="https://github.com/janna-goliff/pi_project_2050">here</a>.
                        <br />
                        <br />
                        I also made an in-browser simulator! Make sure Javascript is enabled (it should be by default) to play below.
                    </div>
                </div>
                <div className="try_out">Try out the simulator</div>
                <OdysseyGame />
                <div className="frame_caption">First three frames of the game</div>
                <div className="frame_container">
                    <Expandable
                        imgaddress={title}
                        description="Title frame from the game"
                        className={'frame'}
                    />
                    <Expandable
                        imgaddress={controls}
                        description="Title frame from the game"
                        className={'frame'}
                    />
                    <Expandable
                        imgaddress={exposition}
                        description="Title frame from the game"
                        className={'frame'}
                    />
                </div>
                <Expandable
                    imgaddress={pi_proj_map}
                    description="Flow chart showing the possible routes a player can take in this game"
                    className={'map'}
                />
            </div>
        </ColorChanger>
    );
}

export default FuturePiProject;
  