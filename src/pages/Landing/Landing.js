import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./landing.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import book_mobile_redesign from "../../assets/beepboop/book_page_mobile_redesign.png";
import home_mobile_redesign from "../../assets/beepboop/home_page_mobile_redesign.PNG";
import main_beepboopuserflow from "../../assets/homepage/beepboopuserflow.png";
import main_climbr from "../../assets/homepage/climbr.png";
import main_vrrom from "../../assets/homepage/vrroom.png";

function Landing() {
    const [displayGreeting, setDisplayGreeting] = useState(false);

    return (
        <ColorChanger>
            <Navbar />
            <div className="landing_body">
                <div className="mainTicket">
                    <div className="ticketHeader">Welcome!</div>
                    <div className="ticketBody">
                        <div className="topContent">
                            <div className="textContent">thanks for visiting</div>
                            <div className="decorativeRect"></div>
                        </div>
                        <div className="bottomContent">
                            <div>I'm <a href="/site/about" className="aboutLink">Janna<div className="spacer">_</div>Goliff</a>, a</div>
                            <div>designer and developer</div></div> 
                    </div>
                </div>
                <div className="greetingToggle" onClick={() => {setDisplayGreeting(!displayGreeting)}}>
                    {displayGreeting ? "Collapse note" : "Read my note!"}
                </div>
                {displayGreeting && 
                    <div className={"instruction caption greetingText"}>
                        You're probably here to review my portfolio, but here are some things to ask me about to get the conversation going, ranging from serious to un-serious!
                        <ol>
                            <li>What was it like being the only engineer at your last company less than six months after graduating? (Spoiler: It was hard!)</li>
                            <li>What are your thoughts on VR?</li>
                            <li>Why are you a vegetarian?</li>
                            <li>Did you name your cat, Jenna, after yourself?</li>
                        </ol>
                        Or jump straight in and look at my most recent work below.
                    </div>
                }
                <Link to="/site/design/beepboopuserflow" className="header_container_overarching">
                    <div className="header_container landing">
                        <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                        <h1>Most recent work: Full-stack engineering and design at Beepboop</h1>
                        <div className="divider">
                            <div className="filler"></div>
                        </div>
                    </div>
                    <div className="header_background_container">
                        <div className="background_overlay"></div>
                        <img src={main_beepboopuserflow} alt="user flow" className="header_background"/>
                    </div>
                </Link>
                <Link to="/site/design/appdesignclimbr" className="header_container_overarching">
                    <div className="header_container landing">
                        <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                        <h1>App design concept for tracking climbing data</h1>
                        <div className="divider">
                            <div className="filler"></div>
                        </div>
                    </div>
                    <div className="header_background_container">
                        <div className="background_overlay"></div>
                        <img src={main_climbr} alt="climbing app" className="header_background"/>
                    </div>
                </Link>
            </div>
        </ColorChanger>
    );
}

export default Landing;
  