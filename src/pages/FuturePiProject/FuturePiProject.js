import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import OdysseyGame from "../../components/OdysseyGame/OdysseyGame";
import FinalProjectTag from "../../components/FinalProjectTag/FinalProjectTag";
import "./futurepiproject.scss";
import Expandable from "../../components/Expandable/Expandable";
import pi_proj_gif from "../../assets/futurepiproject/pi_proj.gif";
import pi_proj_map from "../../assets/futurepiproject/journey_map.png";
import title from "../../assets/futurepiproject/frames/title.png";
import controls from "../../assets/futurepiproject/frames/controls.png";
import exposition from "../../assets/futurepiproject/frames/exposition.png";
import phase0 from "../../assets/futurepiproject/process/phase0.png";
import phase1 from "../../assets/futurepiproject/process/phase1.png";
import phase2 from "../../assets/futurepiproject/process/phase2.png";
import phase3a from "../../assets/futurepiproject/process/phase3a.png";
import phase3b from "../../assets/futurepiproject/process/phase3b.png";
import phase4a from "../../assets/futurepiproject/process/phase4a.gif";
import phase4b from "../../assets/futurepiproject/process/phase4b.gif";
import final_quarter_view from "../../assets/futurepiproject/final_quarter_view.png";

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
                        Using the Raspberry Pi, I built a miniature choose-your-own-adventure game 
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
                        A is forward, B is back, and up/down or left/right can be used to make a selection on screen with options.
                    </div>
                </div>
                <div className="try_out_wrapper">
                    <div className="try_out">
                        <div>Try out the simulator</div>
                        <OdysseyGame />
                    </div>
                </div>
                <div className="process_header_container">
                    <div className="process_header">
                        <div>
                            see the 
                            <br />
                            <div className="emphasized_title">PROCESS</div>
                        </div>
                    </div>
                </div>
                <div className="phase_container">
                    <div className="text left">
                        <div className="phase_header">Phase 0: technical research</div>
                        <div className="phase_body">
                            I had no experience using a Raspberry Pi before this project, so I began with searching for 
                            resources that would help me realize my plan. I went with a prebuilt option that included input buttons
                            that would plug into the Pi with a screen.
                        </div>
                    </div>
                    <Expandable
                        imgaddress={phase0}
                        description="screenshot of the Adafruit page for the OLED screen I used"
                        className={'phase_img right'}
                    />
                    <div className="background_decor left"></div>
                </div>
                <div className="phase_container">
                    <Expandable
                        imgaddress={phase1}
                        description="initial user journey diagram"
                        className={'phase_img left'}
                    />
                    <div className="text right">
                        <div className="phase_header">Phase 1: brainstorming</div>
                        <div className="phase_body">
                            Knowing I wanted to make choose-your-adventure style game, I began by drafting a 
                            flow chart of potential journeys players could make thorughout the game, 
                            considering what it would reflect on the world in the future.
                        </div>
                    </div>
                    <div className="background_decor right"></div>
                </div>
                <div className="phase_container">
                    <div className="text left">
                        <div className="phase_header">Phase 2: drafting</div>
                        <div className="phase_body">
                            To get comfortable with the tiny format of the screens, I made a few test scenes in a 128
                            by 64 pixel ratio. I printed these out to scale to see how legible text could be.
                        </div>
                    </div>
                    <Expandable
                        imgaddress={phase2}
                        description="small test scenes"
                        className={'phase_img right'}
                    />
                    <div className="background_decor left"></div>
                </div>
                <div className="phase_container">
                    <div className="left">
                        <Expandable
                            imgaddress={phase4a}
                            description="testing the pi button input 1"
                            className={'phase_img_vert'}
                        />
                        <Expandable
                            imgaddress={phase4b}
                            description="testing the pi button input 1"
                            className={'phase_img_vert bump'}
                        />
                    </div>
                    <div className="text right">
                        <div className="phase_header">Phase 3: hardware testing</div>
                        <div className="phase_body">
                            To make sure I felt comfortable going forward with the Pi, I tested a prebuilt program provided
                            by Adafruit meant to work with the screen.
                        </div>
                    </div>
                    <div className="background_decor right"></div>
                </div>
                <div className="phase_container">
                    <div className="text left">
                        <div className="phase_header">Phase 4: data structures</div>
                        <div className="phase_body">
                            Adafruit's tutorial on using their OLED screen guided me through coding the basic
                            interactions with button input. From there, I spent time figuring out how to let the player navigate
                            through different scenes. I landed on something similar to a linked list between different frames,
                            with a slight deviation made for screens with different options.
                        </div>
                    </div>
                    <div className="right">
                        <Expandable
                            imgaddress={phase3a}
                            description="code snippets from Adafruit"
                            className={'phase_img_vert'}
                        />
                        <Expandable
                            imgaddress={phase3b}
                            description="code snippets of data structure underlying player navigation"
                            className={'phase_img_vert bump'}
                        />
                    </div>
                    <div className="background_decor left"></div>
                </div>
                <FinalProjectTag text="RESULTS"/>
                <Expandable
                        imgaddress={final_quarter_view}
                        description="three-quarter view of the Raspberry Pi on an end screen of the game"
                        className={'final_view'}
                    />
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
                <div className="frame_caption">Flow chart poster of possible routes players can take</div>
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
  