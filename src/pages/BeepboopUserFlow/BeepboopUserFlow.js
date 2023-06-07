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
import orig_signup_error from "../../assets/beepboopuserflow/orig_signup_error.png"
import orig_new_student_welcome_nonvip from "../../assets/beepboopuserflow/orig_new_student_welcome_nonvip.png";

import newstudent_problems from "../../assets/beepboopuserflow/newstudentwelcome/newstudentwelcome_problems.png";

import newstudent_step1 from "../../assets/beepboopuserflow/newstudentwelcome/userflow_v1_p1.png";
import newstudent_step2 from "../../assets/beepboopuserflow/newstudentwelcome/userflow_v1_p2.png";
import newstudent_step3 from "../../assets/beepboopuserflow/newstudentwelcome/userflow_v1_p3.png";
import newstudent_step4 from "../../assets/beepboopuserflow/newstudentwelcome/userflow_v1_p4.png";
import newstudent_step5 from "../../assets/beepboopuserflow/newstudentwelcome/userflow_v1_p5.png";

import newstudentwelcome_3d_mockup from "../../assets/beepboopuserflow/newstudentwelcome/mockup.png";

import redesign_signup1 from "../../assets/beepboopuserflow/redesign/redesign_signup1.png";
import redesign_signup1error from "../../assets/beepboopuserflow/redesign/redesign_signup1error.png";
import redesign_signup2 from "../../assets/beepboopuserflow/redesign/redesign_signup2.png";
import redesign_signup3 from "../../assets/beepboopuserflow/redesign/redesign_signup3.png";
import redesign_signup3error from "../../assets/beepboopuserflow/redesign/redesign_signup3error.png";
import redesign_login from "../../assets/beepboopuserflow/redesign/redesign_login.png";

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
            title: "AFTER",
            subtitle: "Step 1 of 5",
            imgSrc: newstudent_step1,
            captionTitle: "GOAL",
            caption: "Energize students, confirm account creation"
        },
        {
            title: "AFTER",
            subtitle: "Step 2 of 5",
            imgSrc: newstudent_step2,
            captionTitle: "GOAL",
            caption: "Establish class philosophy; expectation setting"
        },
        {
            title: "AFTER",
            subtitle: "Step 3 of 5",
            imgSrc: newstudent_step3,
            captionTitle: "GOAL",
            caption: "Communicate key product terminology"
        },
        {
            title: "AFTER",
            subtitle: "Step 4 of 5",
            imgSrc: newstudent_step4,
            captionTitle: "GOAL",
            caption: "Explain freemium subscription model to reduce frustration at paywalled features"
        },
        {
            title: "AFTER",
            subtitle: "Step 5 of 5",
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
                    <h1>Beepboop User Flow Redesign Project</h1>
                </div>
                <div className="intro">
                    <Expandable
                        imgaddress={uxredesignmain}
                        description=""
                        className={'gen_img desktop'}
                    />
                    <div className="main_text">
                        <div className="what_is_container">
                            <h1 className="title">The funnel problem</h1>
                            <div>
                                Beepboop is an early-stage startup building a platform for online language learning. For this project, I was lead designer and engineer.
                                As a team, we knew Beepboop's user onboarding process was an underserved part of the student-facing platform: <p className="emphasizedText">over 85% of first-time users were dropping out of the sign-up phase of our funnel.</p> 
                                <br />
                                <br />
                                This project started out as a vague recognition of some of the pain points of 
                                Beepboop's onboarding process, and shifted into a multi-phase plan that, while 
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
                                As both sole designer and developer on this project, I knew we didn't have the resources to allocate towards making wireframes, low-fidelity designs, and thorough 
                                usability testing. Instead, I made a quick series of high fidelity mockups showing what a potential
                                redesign of a single page could look like. <p className="emphasizedText">My position as developer also allowed me to make design decisions I knew would only require front-end changes and enable a more rapid deployment of changes.</p>
                                <br />
                                <br />
                                Based on my interviews, informal discussions with teachers using our platform, 
                                and project planning sessions with our CEO, I identified the page with both the highest potential impact and lowest tech lift to be the 
                                "New Student Welcome" page, where all new accounts are routed to after they're created.
                            </div>
                        </div>
                        <div className="right">
                        </div>
                        <div className="background_decor left longer"></div>
                    </div>
                </div>
                <div className="phase_container wireframes">
                    <div className="problemsContainer">
                        <h3 className="title">BEFORE</h3>
                        <Expandable
                            imgaddress={newstudent_problems}
                            description="screenshot of new student page"
                            className="problemsScreenshot"
                        />
                    </div>
                    <Slideshow slideArray={newstudentArray} />
                </div>
                <div className="phase_container">
                    <div className="left">
                        <Expandable
                            imgaddress={newstudentwelcome_3d_mockup}
                            description="laptop"
                            className={'laptop'}
                        />
                    </div>
                    <div className="text right">
                        <div className="phase_header">No Testing?</div>
                        <div className="phase_body">
                            The fast-paced workflow and limited design capacity on my team meant 
                            that after a few minor changes suggested by our CEO, the mockups I made were 
                            ready to be built out on the front-end and deployed.
                        </div>
                    </div>
                    <div className="background_decor right"></div>
                </div>
                <div className="phase_container">
                    <div className="text left">
                        <div className="phase_header">What's next?</div>
                        <div className="phase_body">
                            Ideally, we would take time to monitor the success of these changes: 
                            is a higher proportion of users making accounts? Without a dedicated user 
                            research team, combined with limited capacity to track user behavior without large tech lifts, we made 
                            the decision to continue making changes to improve the user onboarding process before seeing results.
                        </div>
                    </div>
                    <div className="right">
                    </div>
                    <div className="background_decor left"></div>
                </div>
                <div className="phase_container finals">
                <div className="final_container">
                        <Expandable 
                            imgaddress={redesign_login}
                            description="laptop"
                            className={'final_midterm'}
                        />
                        <div className="card_container">
                            <div className="card">
                                <h2>Login page</h2>
                                <div className="content_container">
                                    <div className="card_header">Function</div>
                                    <div className="card_content">Let users with existing accounts know where to login</div>
                                    <div className="card_header">Changes made</div>
                                    <div className="card_content">Separated login and sign-up functions</div>
                                </div>
                            </div>
                            <RevealButton 
                                imgaddress={orig_login}
                                description=""
                                className={''}
                            />
                        </div>
                    </div>
                    <div className="final_container">
                        <Expandable 
                            imgaddress={redesign_signup1}
                            description="laptop"
                            className={'final_midterm'}
                        />
                        <div className="card_container">
                            <div className="card">
                                <h2>Sign-up page</h2>
                                <div className="content_container">
                                    <div className="card_header">Function</div>
                                    <div className="card_content">Confirm student is signing up for correct language to learn</div>
                                    <div className="card_header">Changes made</div>
                                    <div className="card_content">Separated sign-up into multiple steps, users have to explicitly choose a language</div>
                                </div>
                            </div>
                            <RevealButton 
                                imgaddress={orig_signup}
                                description=""
                                className={''}
                            />
                        </div>
                    </div>
                    <div className="final_container">
                        <Expandable 
                            imgaddress={redesign_signup1error}
                            description="laptop"
                            className={'final_midterm'}
                        />
                        <div className="card_container">
                            <div className="card">
                                <h2>Sign-up page (error)</h2>
                                <div className="content_container">
                                    <div className="card_header">Function</div>
                                    <div className="card_content">Warn student if they select they want to learn the language brwoser is rendered in</div>
                                    <div className="card_header">Changes made</div>
                                    <div className="card_content">Added additional layer of error protection</div>
                                </div>
                            </div>
                            <div className="noOriginal">No Original</div>
                        </div>
                    </div>
                    <div className="final_container">
                        <Expandable 
                            imgaddress={redesign_signup2}
                            description="laptop"
                            className={'final_midterm'}
                        />
                        <div className="card_container">
                            <div className="card">
                                <h2>Sign-up page</h2>
                                <div className="content_container">
                                    <div className="card_header">Function</div>
                                    <div className="card_content">Make user input feel easier and less intimidating</div>
                                    <div className="card_header">Changes made</div>
                                    <div className="card_content">Separated sign-up into multiple steps, larger input fields</div>
                                </div>
                            </div>
                            <RevealButton 
                                imgaddress={orig_signup}
                                description=""
                                className={''}
                            />
                        </div>
                    </div>
                    <div className="final_container">
                        <Expandable 
                            imgaddress={redesign_signup3}
                            description="laptop"
                            className={'final_midterm'}
                        />
                        <div className="card_container">
                            <div className="card">
                                <h2>Sign-up page</h2>
                                <div className="content_container">
                                    <div className="card_header">Function</div>
                                    <div className="card_content">Final required input fields for users</div>
                                    <div className="card_header">Changes made</div>
                                    <div className="card_content">Separated sign-up into multiple steps, larger input fields</div>
                                </div>
                            </div>
                            <RevealButton 
                                imgaddress={orig_signup}
                                description=""
                                className={''}
                            />
                        </div>
                    </div>
                    <div className="final_container">
                        <Expandable 
                            imgaddress={redesign_signup3error}
                            description="laptop"
                            className={'final_midterm'}
                        />
                        <div className="card_container">
                            <div className="card">
                                <h2>Sign-up page (error)</h2>
                                <div className="content_container">
                                    <div className="card_header">Function</div>
                                    <div className="card_content">Make it clear when users have made an error in their input</div>
                                    <div className="card_header">Changes made</div>
                                    <div className="card_content">Distinct visual indication of an error; responsive to user input (previous version would indicate error before user finished) </div>
                                </div>
                            </div>
                            <RevealButton 
                                imgaddress={orig_signup_error}
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
  