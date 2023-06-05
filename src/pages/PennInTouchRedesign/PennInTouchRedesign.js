import React from "react";
import "./pennintouchredesign.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import Expandable from "../../components/Expandable/Expandable";
import desktop from "../../assets/pennintouchredesign/desktop-views.png"
import Slideshow from "../../components/Slideshow/Slideshow";
import RevealButton from "../../components/RevealButton/RevealButton";

import orig_landing from "../../assets/pennintouchredesign/orig_landing.png";
import orig_planning from "../../assets/pennintouchredesign/orig_planning.png";
import orig_search from "../../assets/pennintouchredesign/orig_search.png";
import orig_timeout from "../../assets/pennintouchredesign/orig_timeout.png";
import orig_planning_mock from "../../assets/pennintouchredesign/orig-planning-mock.png";

import survey_summary from "../../assets/pennintouchredesign/survey_summary.png";
import research_notes from "../../assets/pennintouchredesign/research_notes.png";
import research_summary from "../../assets/pennintouchredesign/research_summary.png";

import lofi_landing from "../../assets/pennintouchredesign/lofi-landing.png";
import lofi_planning_mock from "../../assets/pennintouchredesign/lofi-planning-mock.png";
import lofi_planning_myp from "../../assets/pennintouchredesign/lofi-planning-myp.png";
import lofi_planning_reqs from "../../assets/pennintouchredesign/lofi-planning-reqs.png";
import lofi_search_1 from "../../assets/pennintouchredesign/lofi-search-1.png";
import lofi_search_2 from "../../assets/pennintouchredesign/lofi-search-2.png";

import grad_reqs_3d_mockup from "../../assets/pennintouchredesign/grad-reqs-3d-mockup.png";

import final_landing_expanded from "../../assets/pennintouchredesign/final-landing-expanded.png";
import final_planning_mock from "../../assets/pennintouchredesign/final-planning-mock.png";
import final_planning_myp from "../../assets/pennintouchredesign/final-planning-myp.png";
import final_planning_reqs from "../../assets/pennintouchredesign/final-planning-reqs.png";

function PennInTouchRedesign() {
    const originalArray = [
        {
            title: "CURRENT STATE",
            subtitle: "Landing Page",
            imgSrc: orig_landing,
            captionTitle: "PAIN POINTS",
            caption: "Cluttered, repetitive, lack of hierachy, unclear what next action items are"
        },
        {
            title: "CURRENT STATE",
            subtitle: "Planning Tools: Academic Planning Worksheet",
            imgSrc: orig_planning,
            captionTitle: "PAIN POINTS",
            caption: "Unorganized, no information hierarchy, confusing UI Elements, lack of assurance that requirements are filled"
        },
        {
            title: "CURRENT STATE",
            subtitle: "Planning Tools: Course Search",
            imgSrc: orig_search,
            captionTitle: "PAIN POINTS",
            caption: "Hides information, overwhelming amount of fields, verbose instructions"
        },
        {
            title: "CURRENT STATE",
            subtitle: "Security Features",
            imgSrc: orig_timeout,
            captionTitle: "PAIN POINTS",
            caption: "Security timeout is frequent source of frustration for users while navigating the site"
        }
    ]

    const researchSynthesisArray = [
        {
            title: "USER RESEARCH",
            subtitle: "Survey",
            imgSrc: survey_summary,
            captionTitle: "INSIGHT",
            caption: "For students, PennInTouch is a course planning tool."
        },
        {
            title: "USER RESEARCH",
            subtitle: "Interviews",
            imgSrc: research_notes,
            captionTitle: "INSIGHT",
            caption: "Students want a succinct, reliable experience."
        },
        {
            title: "USER RESEARCH",
            subtitle: "Synthesis",
            imgSrc: research_summary,
            captionTitle: "APPROACH",
            caption: "Identifying common patterns, noting where interviewees felt most strongly, finding strengths of other tools being used"
        }
    ]

    const lofiArray = [
        {
            title: "WIREFRAMES",
            subtitle: "Home Page",
            imgSrc: lofi_landing,
            captionTitle: "GOAL",
            caption: "Simplifying experience of viewing schedule, remove visual clutter"
        },
        {
            title: "WIREFRAMES",
            subtitle: "Course Search 1",
            imgSrc: lofi_search_1,
            captionTitle: "GOAL",
            caption: "Improve navigation and course filtering"
        },
        {
            title: "WIREFRAMES",
            subtitle: "Course Search 2",
            imgSrc: lofi_search_2,
            captionTitle: "GOAL",
            caption: "Let users browse courses easily without confusion"
        },
        {
            title: "WIREFRAMES",
            subtitle: "Mock Schedules",
            imgSrc: lofi_planning_mock,
            captionTitle: "GOAL",
            caption: "Simplify and consolidate viewing mock schedules"
        },
        {
            title: "WIREFRAMES",
            subtitle: "Academic Planning Worksheet",
            imgSrc: lofi_planning_myp,
            captionTitle: "GOAL",
            caption: "Allow students flexibility in planning courses across multiple years"
        },
        {
            title: "WIREFRAMES",
            subtitle: "Viewing Requirements",
            imgSrc: lofi_planning_reqs,
            captionTitle: "GOAL",
            caption: "Allow for easy scan of requirements that are fulfilled"
        }
    ]
    return (
        <ColorChanger>
            <Navbar />
            <div className="pennintouch_redesign">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>PennInTouch Redesign</h1>
                </div>
                <div className="intro">
                    <Expandable
                        imgaddress={desktop}
                        description=""
                        className={'gen_img desktop'}
                    />
                    <div className="main_text">
                        <div className="what_is_container">
                            <h1 className="title">What is PennInTouch?</h1>
                            <div>
                                PennInTouch is a portal for students at the University of Pennsylvania that serves as a centralized hub for logistical management: finding and registering for courses, receiving important annoucements, and viewing important information about their academic history.
                                <br />
                                <br />
                                This project, a redesign of the key parts of PennInTouch, was motivated by the severely outdated, unintuitive experience students faced by the old interface, which was a commonly known source of frustration for students.
                            </div>
                        </div>
                        <div className="project_info_card">
                            <div className="title">Project Info</div>
                            <div className="decor"></div>
                            <div className="project_info">
                                <div className="subtitle">Goal</div>
                                <div className="content">Redesign an existing interface</div>
                            </div>
                            <div className="project_info">
                                <div className="subtitle">Timeline</div>
                                <div className="content">2 months</div>
                            </div>
                            <div className="project_info">
                                <div className="subtitle">Tools Used</div>
                                <div className="content">Figma, Photoshop</div>
                            </div>
                            <div className="project_info">
                                <div className="subtitle">Final Product</div>
                                <div className="content">High fidelity prototypes</div>
                            </div>
                        </div>
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
                            <div className="phase_header">Assessment of PennInTouch</div>
                            <div className="phase_body">
                                To begin the redesign, I took a critical look at the key painpoints of the existing PennInTouch to determine what areas and key functions I wanted to focus on for the redesign.
                                <br />
                                <br />
                                *Note: The University of Pennsylvania has now switched to a new student registration portal, called Path@Penn.
                            </div>
                        </div>
                        <div className="background_decor left"></div>
                    </div>
                    <div className="phase_container">
                        <Slideshow slideArray={originalArray} />
                    </div>
                    <div className="phase_container">
                        <div className="left">
                        </div>
                        <div className="text right">
                            <div className="phase_header">Research and Synthesis</div>
                            <div className="phase_body">
                                To guide my decision in the redesign, I surveryed 15+ users of PennInTouch and conducted detailed interviews with 3. Here’s what I learned:
                            </div>
                        </div>
                        <div className="background_decor right"></div>
                    </div>
                    <div className="phase_container research_synthesis">
                        <Slideshow slideArray={researchSynthesisArray} />
                    </div>
                    <div className="phase_container">
                        <div className="text left">
                            <div className="phase_header">Wireframes</div>
                            <div className="phase_body">
                            Guided by the user insights I developed from my research, I began to create wireframes of the PennInTouch redesign.
                            </div>
                        </div>
                        <div className="right">
                        </div>
                        <div className="background_decor left"></div>
                    </div>
                </div>
                <div className="phase_container wireframes">
                        <Slideshow slideArray={lofiArray} />
                    </div>
                <div className="phase_container">
                    <div className="left">
                        <Expandable
                            imgaddress={grad_reqs_3d_mockup}
                            description="laptop"
                            className={'laptop'}
                        />
                    </div>
                    <div className="text right">
                        <div className="phase_header">High Fidelity Designs</div>
                        <div className="phase_body">
                            As the final part of this redesign project, I assessed what was working and not working in my wireframes and iterated. From those iterations, I created a high fidelity, prototyped redesign of PennInTouch.
                        </div>
                    </div>
                    <div className="background_decor right"></div>
                </div>
                <div className="phase_container finals">
                    <div className="final_container">
                        <Expandable 
                            imgaddress={final_landing_expanded}
                            description="laptop"
                            className={'final_midterm'}
                        />
                        <div className="card_container">
                            <div className="card">
                                <h2>Home Screen</h2>
                                <div className="content_container">
                                    <div className="card_header">Function</div>
                                    <div className="card_content">Landing screen when users login in to PennInTouch</div>
                                    <div className="card_header">Changes made</div>
                                    <div className="card_content">Mock schedule is emphasized, made more visible, viewing announcements and deadlines is simplified</div>
                                </div>
                            </div>
                            <RevealButton 
                                imgaddress={orig_landing}
                                description=""
                                className={''}
                            />
                        </div>
                    </div>
                    <div className="final_container">
                        <Expandable 
                            imgaddress={final_planning_mock}
                            description="laptop"
                            className={'final_midterm'}
                        />
                        <div className="card_container">
                            <div className="card">
                                <h2>Mock Schedules</h2>
                                <div className="content_container">
                                    <div className="card_header">Function</div>
                                    <div className="card_content">Let students create multiple possible schedules for the upcoming semesters</div>
                                    <div className="card_header">Changes made</div>
                                    <div className="card_content">Mock schedules are larger, all immediately viewable, adding is clear</div>
                                </div>
                            </div>
                            <RevealButton 
                                imgaddress={orig_planning_mock}
                                description=""
                                className={''}
                            />
                        </div>
                    </div>
                    <div className="final_container">
                        <Expandable 
                            imgaddress={final_planning_myp}
                            description="laptop"
                            className={'final_midterm'}
                        />
                        <div className="card_container">
                            <div className="card">
                                <h2>Multi-Year Plan</h2>
                                <div className="content_container">
                                    <div className="card_header">Function</div>
                                    <div className="card_content">Let students plan their courses across multiple years</div>
                                    <div className="card_header">Changes made</div>
                                    <div className="card_content">Functionality previously did not exist; added as a result of user research</div>
                                </div>
                            </div>
                            <div className="noOriginal">No Original</div>
                        </div>
                    </div>
                    <div className="final_container">
                        <Expandable 
                            imgaddress={final_planning_reqs}
                            description="laptop"
                            className={'final_midterm'}
                        />
                        <div className="card_container">
                            <div className="card">
                                <h2>Graduation Requirements</h2>
                                <div className="content_container">
                                    <div className="card_header">Function</div>
                                    <div className="card_content">Let students view what requirements they need to fulfill in order to graduate</div>
                                    <div className="card_header">Changes made</div>
                                    <div className="card_content">Removed verbose copy, established stronger hierchy of information</div>
                                </div>
                            </div>
                            <RevealButton 
                                imgaddress={orig_planning}
                                description=""
                                className={''}
                            />
                        </div>
                    </div>
                    <div className="figma_container">
                        <div className="figma_title">See it on Figma!</div>
                        <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2FR4BVu461l54viGLj8JLB%2FJanna%3Fnode-id%3D32%253A1852" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default PennInTouchRedesign;
  