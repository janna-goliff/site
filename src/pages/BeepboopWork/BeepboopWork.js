import React from "react";
import "./beepboopwork.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import Expandable from "../../components/Expandable/Expandable";
import FinalProjectTag from "../../components/FinalProjectTag/FinalProjectTag";
import book_desktop_orig from "../../assets/beepboop/book_page_desktop_original.png";
import book_desktop_redesign from "../../assets/beepboop/book_page_desktop_redesign.png";
import book_mobile_orig from "../../assets/beepboop/book_page_mobile_original.png";
import book_mobile_redesign from "../../assets/beepboop/book_page_mobile_redesign.png";
import catalog_phase1a from "../../assets/beepboop/catalog/catalog_phase1a.png";
import catalog_phase1b from "../../assets/beepboop/catalog/catalog_phase1b.png";
import catalog_phase1c from "../../assets/beepboop/catalog/catalog_phase1c.png";
import catalog_phase2a from "../../assets/beepboop/catalog/catalog_phase2a.png";
import catalog_phase2b from "../../assets/beepboop/catalog/catalog_phase2b.png";
import catalog_phase2c from "../../assets/beepboop/catalog/catalog_phase2c.png";
import catalog_phase3a from "../../assets/beepboop/catalog/catalog_phase3a.png";
import catalog_phase3b from "../../assets/beepboop/catalog/catalog_phase3b.png";
import catalog_phase3c from "../../assets/beepboop/catalog/catalog_phase3c.png";


function BeepboopWork() {
    return (
        <ColorChanger>
            <Navbar />
            <div className="beepboop_work_body">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Beepboop Mobile-first Redesign</h1>
                </div>
                <div className="intro">
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
                    <div className="main_text">
                        <div className="text_body">As a full-stack software engineer and design intern at Beepboop, I architected the complete redesign of their student-facing website, the Speak App.</div>
                        <br />
                        <br />
                        <div className="text_body">My work included developing mockups of mobile-friendly designs in Figma, implementing them on the frontend using React, and creating and optimizing API endpoints on the backend using Firebase and Node.js</div>
                        <br />
                        <br />
                        <div className="text_body">Design and engineering choices were informed by prioritization of acessibility for non-digital natives and users in areas with slow internet connections and/or users without a desktop computer.</div>
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
                <div className="process_header_container">
                    <div className="process_header">
                        <div>
                            see the 
                            <br />
                            <div className="emphasized_title">PROCESS</div>
                        </div>
                    </div>
                </div>
                <div className="phases">
                    <div className="phase_container">
                        <div className="text left">
                            <div className="phase_header">Phase 0: identifying a need</div>
                            <div className="phase_body">
                                When discussing what I'll be working on, the needs of a student using the Speak App were prioritized.
                                Identifying, for example, that our catalog page had the potential to be more engaging and fun for students
                                to interact with, we were able to being making a plan for its redesign. Another goal we had was to integrate
                                student progress in the modules into the page's redesign.
                            </div>
                        </div>
                        <Expandable
                            imgaddress={""}
                            description=""
                            className={'phase_img right'}
                        />
                        <div className="background_decor left"></div>
                    </div>
                    <div className="phase_container">
                        <div className="left">
                            <Expandable
                                imgaddress={catalog_phase1a}
                                description="example design 1 of first phase of catalog page redesigns"
                                className={'phase_img_vert scrunch'}
                            />
                            <Expandable
                                imgaddress={catalog_phase1b}
                                description="example design 2 of first phase of catalog page redesigns"
                                className={'phase_img_vert scrunch'}
                            />
                            <Expandable
                                imgaddress={catalog_phase1c}
                                description="example design 3 of first phase of catalog page redesigns"
                                className={'phase_img_vert scrunch'}
                            />
                        </div>
                        <div className="text right">
                            <div className="phase_header">Phase 1: prototyping and mockups</div>
                            <div className="phase_body">
                                As the sole designer for Beepboop's Speak App redesign, I start with fairly high-fidelity mockups
                                to present to the CTO and CEO as a baseline for where we can begin, and iterate based on their responses.
                            </div>
                        </div>
                        <div className="background_decor right"></div>
                    </div>
                    <div className="phase_container">
                        <div className="text left">
                            <div className="phase_header">Phase 2: mockups round 2</div>
                            <div className="phase_body">
                                After getting feedback on the initial design, I move forward with aspects of it that we agree are effective.
                                I also begin to consider alternative use cases of some components of the design, and flesh out what they might
                                look like.
                            </div>
                        </div>
                        <div className="right">
                            <Expandable
                                imgaddress={catalog_phase2a}
                                description="example design 1 of second phase of catalog page redesigns"
                                className={'phase_img_vert scrunch'}
                            />
                            <Expandable
                                imgaddress={catalog_phase2b}
                                description="example design 2 of second phase of catalog page redesigns"
                                className={'phase_img_vert scrunch'}
                            />
                            <Expandable
                                imgaddress={catalog_phase2c}
                                description="example design 3 of second phase of catalog page redesigns"
                                className={'phase_img_vert scrunch'}
                            />
                        </div>
                        
                        <div className="background_decor left"></div>
                    </div>
                </div>
                <div className="phase_container">
                    <div className="left">
                        <Expandable
                            imgaddress={catalog_phase3a}
                            description="example design 1 of third phase of catalog page redesigns"
                            className={'phase_img_vert scrunch'}
                        />
                        <Expandable
                            imgaddress={catalog_phase3b}
                            description="example design 2 of third phase of catalog page redesigns"
                            className={'phase_img_vert scrunch'}
                        />
                        <Expandable
                            imgaddress={catalog_phase3c}
                            description="example design 3 of third phase of catalog page redesigns"
                            className={'phase_img_vert scrunch'}
                        />
                    </div>
                    <div className="text right">
                        <div className="phase_header">Phase 3: mockups round 3</div>
                        <div className="phase_body">
                            Revisiting our initial goals, we wanted to place emphasis on how many times a student
                            has taken a Drill. 

                            I also began including the actual assets that would be used on page in this design.
                        </div>
                    </div>
                    <div className="background_decor right"></div>
                </div>
                <FinalProjectTag text="more TBA"/>
            </div>
        </ColorChanger>
    );
}

export default BeepboopWork;
  