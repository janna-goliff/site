import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./webappdev1.scss";
import Expandable from "../../components/Expandable/Expandable";
import logo_img from "../../assets/treehouse/logo.png";
import feed from "../../assets/treehouse/feed.png";
import home from "../../assets/treehouse/home.png";
import login from "../../assets/treehouse/login.png";
import messages from "../../assets/treehouse/messages.png";

function WebAppDev1() {
    return (
        <>
            <Navbar />
            <div className="web_app_dev_1_body">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Treehouse Video and Messaging App</h1>
                </div>
                <div className="container">
                    <div className="logo_container">
                        <Expandable
                            imgaddress={logo_img}
                            description="Logo for Treehouse, designed by Ann Wang"
                            className={'logo'}
                        />
                        <div className="small_heading">logo designed by Ann Wang</div>
                    </div>
                    <div className="main_text">
                        Treehouse is a made-from-scratch web app made using React. It allows users to add friends, message them, and even make video calls with them! Main features include:
                        <ul>
                            <li>User authentication and password encryption</li>
                            <li>User registration</li>
                            <li>Text, image, and video messaging</li>
                            <li>User status feed</li>
                            <li>Live video calling</li>
                        </ul>
                        Made with Serena Ghandi and Ann Wang
                        <br /> <br />
                        Visit the live site <a href="https://tranquil-depths-82554.herokuapp.com/">here</a> (this may take a minute, it's hosted on Heroku!).
                        <br /> <br />
                        Contact for access to Github repo.
                    </div>
                </div>
                <div className="web_app_grid">
                    <div className="grid_cell">
                        <div className="caption">Login page</div>
                        <Expandable
                            imgaddress={login}
                            description="Screenshot of the login page for Treehouse"
                            className={''}
                        />
                    </div>
                    <div className="grid_cell">
                        <div className="caption">Home page</div>
                        <Expandable
                            imgaddress={home}
                            description="Screenshot of the home page for Treehouse"
                            className={''}
                        />
                    </div>
                    <div className="grid_cell">
                        <div className="caption">Friend feed page</div>
                        <Expandable
                            imgaddress={feed}
                            description="Screenshot of the feed page for Treehouse"
                            className={''}
                        />
                    </div>
                    <div className="grid_cell">
                        <div className="caption">Messaging page</div>
                        <Expandable
                            imgaddress={messages}
                            description="Screenshot of the messaging page for Treehouse"
                            className={''}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default WebAppDev1;
  