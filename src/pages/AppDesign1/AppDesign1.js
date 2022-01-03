import React from "react";
import "./appdesign1.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import PhoneFrame from "../../components/PhoneFrame/PhoneFrame";
import calendar_bw from "../../assets/eventtracker/calendar_bw.png";
import calendar_color from "../../assets/eventtracker/calendar_color.png";
import clubdetail_bw from "../../assets/eventtracker/clubdetail_bw.png";
import clubdetail_color from "../../assets/eventtracker/clubdetail_color.png";
import emptystate_bw from "../../assets/eventtracker/emptystate_bw.png";
import emptystate_color from "../../assets/eventtracker/emptystate_color.png";
import search_bw from "../../assets/eventtracker/search_bw.png";
import search_color from "../../assets/eventtracker/search_color.png";
import upcoming_bw from "../../assets/eventtracker/upcoming_bw.png";
import upcoming_color from "../../assets/eventtracker/upcoming_color.png";
import upcoming_main_bw from "../../assets/eventtracker/upcoming_main_bw.png";
import upcoming_main_color from "../../assets/eventtracker/upcoming_main_color.png";


function AppDesign1() {
    return (
        <ColorChanger>
            <Navbar />
            <div className="app_design_1_body">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Conceptual app design: event tracking app</h1>
                    <div>A conceptual project and design exercise using Figma to mock behavior for a college event tracking app. I was inspired by my own need of managing the constant flood of events coming from my university.
                        <br /> <br />
                        See the Figma project <a href="https://www.figma.com/file/iw4imoufBH70V8fBmg4Xuy/EventTracker-(color)?node-id=0%3A1">here.</a> Or see the lo-fi prototype <a href="https://www.figma.com/file/nx1FMAU2KMrDkNY2P8b9Lo/EventTracker-lo-fideilty?node-id=0%3A1">here.</a></div>
                </div>
                <div className="phone_row">
                    <PhoneFrame imageSrc={upcoming_main_bw} imageAlt="screenshot" />
                    <PhoneFrame imageSrc={upcoming_bw} imageAlt="screenshot" />
                    <PhoneFrame imageSrc={clubdetail_bw} imageAlt="screenshot" />
                </div>
                <div className="phone_row">
                    <PhoneFrame imageSrc={calendar_bw} imageAlt="screenshot" />
                    <PhoneFrame imageSrc={search_bw} imageAlt="screenshot" />
                    <PhoneFrame imageSrc={emptystate_bw} imageAlt="screenshot" />
                </div>
                <div className="phone_row">
                    <PhoneFrame imageSrc={upcoming_main_color} imageAlt="screenshot" />
                    <PhoneFrame imageSrc={upcoming_color} imageAlt="screenshot" />
                    <PhoneFrame imageSrc={clubdetail_color} imageAlt="screenshot" />
                </div>
                <div className="phone_row">
                    <PhoneFrame imageSrc={calendar_color} imageAlt="screenshot" />
                    <PhoneFrame imageSrc={search_color} imageAlt="screenshot" />
                    <PhoneFrame imageSrc={emptystate_color} imageAlt="screenshot" />
                </div>
            </div>
        </ColorChanger>
    );
}

export default AppDesign1;
  