import React from "react";
import "./beepboopwork.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import PhoneFrame from "../../components/PhoneFrame/PhoneFrame";
import Expandable from "../../components/Expandable/Expandable";
import book_desktop_orig from "../../assets/beepboop/book_page_desktop_original.png";
import book_desktop_redesign from "../../assets/beepboop/book_page_desktop_redesign.png";
import book_mobile_orig from "../../assets/beepboop/book_page_mobile_original.png";
import book_mobile_redesign from "../../assets/beepboop/book_page_mobile_redesign.png";


function BeepboopWork() {
    return (
        <ColorChanger>
            <Navbar />
            <div className="landing_body">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Beepboop Mobile-first Redesign</h1>
                    <div className="text_body">As a full-stack software engineer and design intern at Beepboop, I architected the complete redesign of their student-facing website, the Speak App.</div>
                    <br />
                    <div className="text_body">My work included developing mockups of mobile-friendly designs in Figma, implementing them on the frontend using React, and creating and optimizing API endpoints on the backend using Firebase and Node.js</div>
                    <br />
                    <div className="text_body">Design and engineering choices were informed by prioritization of acessibility for non-digital natives and users in areas with slow internet connections and/or users without a desktop computer.</div>
                </div>
                <div className="landing_frame_container">
                    <div className="frame_label_container">
                        <div className="frame_label">original: </div>
                        <img className="phone_frame_image" src={book_mobile_orig} alt={"screenshot"} />
                        
                    </div>
                    <div className="frame_label_container">
                        <div className="frame_label">redesign: </div>
                        <img className="phone_frame_image" src={book_mobile_redesign} alt={"screenshot"} />
                    </div>
                </div>
                <div className="gen_img_container">
                    <div className="gen_img_subcontainer">
                        <div className="label">original: </div>
                        <Expandable
                            imgaddress={book_desktop_orig}
                            description=""
                            className={'gen_img'}
                        />
                    </div>
                    <div className="gen_img_subcontainer">
                        <div className="label">redesign: </div>
                        <Expandable
                            imgaddress={book_desktop_redesign}
                            description=""
                            className={'gen_img'}
                        />
                    </div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default BeepboopWork;
  