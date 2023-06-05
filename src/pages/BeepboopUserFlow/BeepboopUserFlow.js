import React from "react";
import "./beepboopuserflow.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import Expandable from "../../components/Expandable/Expandable";
import uxredesignmain from "../../assets/beepboopuserflow/uxredesignmain.png"
import Slideshow from "../../components/Slideshow/Slideshow";
import RevealButton from "../../components/RevealButton/RevealButton";

import orig_login from "../../assets/beepboopuserflow/orig_login.png";
import orig_signup from "../../assets/beepboopuserflow/orig_signup.png";
import orig_new_student_welcome_nonvip from "../../assets/beepboopuserflow/orig_new_student_welcome_nonvip.png";

import newstudent_step1 from "../../assets/beepboopuserflow/newstudentwelcome/userflow_v1_p1.png";
import newstudent_step2 from "../../assets/beepboopuserflow/newstudentwelcome/userflow_v1_p2.png";
import newstudent_step3 from "../../assets/beepboopuserflow/newstudentwelcome/userflow_v1_p3.png";
import newstudent_step4 from "../../assets/beepboopuserflow/newstudentwelcome/userflow_v1_p4.png";
import newstudent_step5 from "../../assets/beepboopuserflow/newstudentwelcome/userflow_v1_p5.png";

import grad_reqs_3d_mockup from "../../assets/pennintouchredesign/grad-reqs-3d-mockup.png";

import final_landing_expanded from "../../assets/pennintouchredesign/final-landing-expanded.png";
import final_planning_mock from "../../assets/pennintouchredesign/final-planning-mock.png";
import final_planning_myp from "../../assets/pennintouchredesign/final-planning-myp.png";
import final_planning_reqs from "../../assets/pennintouchredesign/final-planning-reqs.png";

function PennInTouchRedesign() {
    const originalArray = [
        {
            title: "INITIAL STATE",
            subtitle: "Login and Signup Page",
            imgSrc: orig_login,
            captionTitle: "PAIN POINTS",
            caption: "Wrapped login and signup into the same page, confusing for users, cluttered"
        },
        {
            title: "INITIAL STATE",
            subtitle: "Detailed Signup Page",
            imgSrc: orig_signup,
            captionTitle: "PAIN POINTS",
            caption: "Lots of text, overwhelming visuals, large amount of input fields at once"
        },
        {
            title: "INITIAL STATE",
            subtitle: "New Student Welcome Page",
            imgSrc: orig_new_student_welcome_nonvip,
            captionTitle: "PAIN POINTS",
            caption: "Lack of information hierarchy, unclear CTA"
        }
    ]

    const newstudentArray = [
        {
            title: "MOCK-UPS",
            subtitle: "New Student Welcome",
            imgSrc: newstudent_step1,
            captionTitle: "GOAL",
            caption: "Energize students, confirm account creation"
        },
        {
            title: "MOCK-UPS",
            subtitle: "New Student Welcome",
            imgSrc: newstudent_step2,
            captionTitle: "GOAL",
            caption: "Establish class philosophy; expectation setting"
        },
        {
            title: "MOCK-UPS",
            subtitle: "New Student Welcome",
            imgSrc: newstudent_step3,
            captionTitle: "GOAL",
            caption: "Communicate key product terminology"
        },
        {
            title: "MOCK-UPS",
            subtitle: "New Student Welcome",
            imgSrc: newstudent_step4,
            captionTitle: "GOAL",
            caption: "Explain freemium subscription model to reduce frustration at paywalled features"
        },
        {
            title: "MOCK-UPS",
            subtitle: "New Student Welcome",
            imgSrc: newstudent_step5,
            captionTitle: "GOAL",
            caption: "Create clear CTA for students to continue site engagement"
        }
    ]
    return (
        <ColorChanger>
            <Navbar />
            <div className="beepboop_userflow">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Beepboop User Flow Case Study</h1>
                </div>
                <div className="intro">
                    <Expandable
                        imgaddress={uxredesignmain}
                        description=""
                        className={'gen_img desktop'}
                    />
                    <div className="main_text">
                        <div className="what_is_container">
                            <h1 className="title">The project</h1>
                            <div>
                                Beepboop's user onboarding process was an underserved part of the student platform. 
                                Although functional from a technical standpoint, we knew there were areas for improvement.
                                <br />
                                <br />
                                This project started out as a vague recognition of some of the pain points of 
                                Beepboop's onboarding process, and shifted into a mult-phase plan that, while 
                                not executed in completion before my time ended, served as a valuable UX exploration.
                                <br />
                                <br />
                                As a quick sidenote, while this page focuses on the UI/UX development of the project, I was also responsible for the full-stack implementation of these changes. 
                            </div>
                        </div>
                        <div className="project_info_card">
                            <div className="title">Project Info</div>
                            <div className="decor"></div>
                            <div className="project_info">
                                <div className="subtitle">Goal</div>
                                <div className="content">Improve Beepboop's user onboarding process</div>
                            </div>
                            <div className="project_info">
                                <div className="subtitle">Timeline</div>
                                <div className="content">6 months</div>
                            </div>
                            <div className="project_info">
                                <div className="subtitle">Tools Used</div>
                                <div className="content">Figma, React, Node.js</div>
                            </div>
                            <div className="project_info">
                                <div className="subtitle">Final Product</div>
                                <div className="content">Full deployment of login, signup, and user onboarding process along with high fidelity prototypes of other proposed changes</div>
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
                    <div className="phase_container inPlace">
                        <Slideshow slideArray={originalArray} />
                    </div>
                    <div className="phase_container">
                        <div className="text left longer">
                            <div className="phase_header">What's making it hard for users to sign up for Beepboop?</div>
                            <div className="phase_body">
                                The first discussion the Beepboop team had around this project was to identify 
                                what the biggest barriers students were facing while discovering the platform. <p className="emphasizedText">What were the
                                moments of friction that new users were encountering?</p> And what would an initial design and/or tech intervention look like?
                                <br />
                                <br />
                                Deliverables for this phase included a proposal for what a long-term project going forward would 
                                look like, and what the first step in that could be. Working in a startup environment with a relatively 
                                small team meant I had to make a proposal that could address these issues through 
                                <p className="emphasizedText"> incremental 
                                changes which could be released week by week,</p> rather than do one major overhaul that could take months 
                                for a production deployment.
                            </div>
                        </div>
                        <div className="background_decor left longer"></div>
                        <div className="left">
                            <div className="reasonsList">
                                <h3>Initial Impressions</h3>
                                <ol>
                                    <li>Non-digital native users didn't understand if they were logging in or signing up</li>
                                    <li>Users were being asked for too much information at once</li>
                                    <li>Next steps for users was unclear once they made an account</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="phase_container">
                        <div className="left">
                        </div>
                        <div className="text right longer">
                            <div className="phase_header">Are we sure that's what's going on?</div>
                            <div className="phase_body">
                                Because we didn't have the capacity to conduct a full survey of students, 
                                especially to get in contact with those who didn't finish making an account, 
                                we chose to timebox the research phase into two user interviews.
                                <br />
                                <br />
                                The nature of Beepboop's core product, live Spanish classes taught by a team of instructors, 
                                also allowed for a unique perspective to be given on the student experience: the teachers who had a 
                                high frequency of interactions with them, live, and who 
                                would often field questions about the product before their classes.
                            </div>
                        </div>
                        <div className="background_decor right longer"></div>
                    </div>
                    <div className="phase_container interview">
                        <div className="reasonsList interview">
                            <h3>User A: Frequent Duolingo user, intermediate level Spanish speaker, 22</h3>
                            <ul>
                                <li>No problems with sign up</li>
                                <li>Liked Talkka the Quokka (didn't know what a quokka was)</li>
                                <li>Enjoyed the study page's vocabulary review and guessing if they knew the right vocabulary</li>
                                <li>Enjoyed fun module topics when made a VIP user so they could look through the slides</li>
                                <li>Confused about VIP versus Free differences</li>
                                <li>New Student Drill first impulse to look at</li>
                                <li>Expressed annoyance at freemium model</li>
                                <li>Found navigating lessons confusing</li>
                                <li>Didn't like how clicking on a lesson registered you immediately</li>
                            </ul>
                        </div>
                        <div className="reasonsList interview">
                            <h3>User B: Uses online sites like Facebook but not internet-native, 65</h3>
                            <ul>
                                <li>Sign up was a bit slow (typing took a while)</li>
                                <li>Understanding what each field was took noticeably longer</li>
                                <li>Spent time reading each piece of text on the page</li>
                                <li>Drawn to the bottom where there were linked FB reviews, then realized it took him out of the Speak App</li>
                                <li>Instructed on where to click, did not realize a class had been booked</li>
                                <li>Confused about VIP versus Free differences</li>
                                <li>Did not realize book page accordions were expandable until I told him</li>
                                <li>Did not realize topics changed between classes because of above</li>
                                <li>Clicked filter names but not filter icon on Book page</li>
                                <li>Didn't like that the book button immediately booked instead of leading to new class information</li>
                                <li>Sometimes confused about the page label of mobile navbar</li>
                                <li>Expressed annoyance at freemium model</li>
                            </ul>
                        </div>
                    </div>
                    <div className="interviewInsights">
                        <h3>INTERVIEW INSIGHTS</h3>
                        <ol>
                            <li>Not clear where to go after home page</li>
                            <li>Too many labels students need to interact with to understand Freemium model</li>
                            <li>New Student Drills (a deprecated feature) needs to be removed; students try to access it</li>
                            <li>Verbiage needs to be more succinct, especially for non-internet natives who will take the time to read everything</li>
                            <li>Non-paying users run into paywalls without explanation; frustrating experience</li>
                        </ol>
                    </div>
                    <div className="phase_container">
                        <div className="text left longer">
                            <div className="phase_header">No Wireframes?</div>
                            <div className="phase_body">
                                Beepboop's design team (at this point in time), was only me. I was also the only developer, 
                                so we didn't have the resources to allocate towards making wireframes and doing more thorough 
                                usability testing. Instead, I made a quick series of high-fidelity mockups showing what a potential
                                redesign of a single page could look like.
                                <br />
                                <br />
                                Based on my interviews, informal discussions with teachers, 
                                and project planning sessions with our CEO, I identified the page with the highest potential impact to be the 
                                "New Student Welcome" page, where all new accounts are routed to after they're created.
                            </div>
                        </div>
                        <div className="right">
                        </div>
                        <div className="background_decor left longer"></div>
                    </div>
                </div>
                <div className="phase_container wireframes">
                        <Slideshow slideArray={newstudentArray} />
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
                        <div className="phase_header">No Testing?</div>
                        <div className="phase_body">
                            The fast-paced workflow and limited design capacity on my team meant 
                            that after a few minor changes suggested by our CEO, the mockups were 
                            ready to be built out on the front-end and deployed.
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
                                imgaddress={""}
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
                                imgaddress={""}
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
                                imgaddress={""}
                                description=""
                                className={''}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default PennInTouchRedesign;
  