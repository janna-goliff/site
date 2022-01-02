import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import "./futurepiproject.scss";
import Expandable from "../../components/Expandable/Expandable";
import pi_proj_gif from "../../assets/futurepiproject/pi_proj.gif";

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
                        Using the Raspberry Pi, I built a miniature video game envisioning what the future might look like in 2050.
                    </div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default FuturePiProject;
  