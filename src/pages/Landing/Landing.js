import React from "react";
import "./landing.scss";
import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import PhoneFrame from "../../components/PhoneFrame/PhoneFrame";
import book_mobile_redesign from "../../assets/beepboop/book_page_mobile_redesign.png";
import home_mobile_redesign from "../../assets/beepboop/home_page_mobile_redesign.PNG";

function Landing() {
    return (
        <>
            <Navbar />
            <PageHeader headerContent="Design, development, etc"/>
            <div className="landing_body">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Most recent work: Beepboop Mobile-first Redesign</h1>
                    <div>
                        As a full-stack software engineer and design intern at Beepboop, I architected the complete redesign of their student-facing website, the Speak App.
                        <br />
                        <br />
                        My work included developing mockups of mobile-friendly designs in Figma, implementing them on the frontend using React, and creating and optimizing API endpoints on the backend using Firebase and Node.js
                        <br />
                        <br />
                        Design and engineering choices were informed by prioritization of acessibility for non-digital natives and users in areas with slow internet connections and/or users without a desktop computer.
                    </div>
                </div>
                <div className="landing_frame_container">
                    <PhoneFrame imageSrc={home_mobile_redesign} imageAlt="screenshot" />
                    <PhoneFrame imageSrc={book_mobile_redesign} imageAlt="screenshot" />
                </div>
            </div>
        </>
    );
}

export default Landing;
  