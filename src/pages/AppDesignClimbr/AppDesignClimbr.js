import React, { useEffect } from "react";
import "./appdesignclimbr.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import Expandable from "../../components/Expandable/Expandable";
import Slideshow from "../../components/Slideshow/Slideshow";

import mockup_desktop from "../../assets/climbr/mockups/mockup-final-desktop.png"

import mockup_1 from "../../assets/climbr/mockups/landing.png";
import mockup_2 from "../../assets/climbr/mockups/events.png";
import mockup_3 from "../../assets/climbr/mockups/search-empty.png";
import mockup_4 from "../../assets/climbr/mockups/search.png";

import wireframe_mockup from "../../assets/climbr/mockups/wireframe-mockup.png";
import v1_mockup from "../../assets/climbr/mockups/v1-mockup.png";
import v2_mockup from "../../assets/climbr/mockups/v2-mockup.png";

import research_1 from "../../assets/climbr/research/research-1.png";
import research_2 from "../../assets/climbr/research/research-2.png";
import research_3 from "../../assets/climbr/research/research-3.png";
import research_4 from "../../assets/climbr/research/research-4.png";

import wireframe_1 from "../../assets/climbr/wireframes/Landing.png";
import wireframe_2 from "../../assets/climbr/wireframes/events.png";
import wireframe_3 from "../../assets/climbr/wireframes/single-boulder-page.png";
import wireframe_4 from "../../assets/climbr/wireframes/map.png";
import wireframe_5 from "../../assets/climbr/wireframes/quick-add.png";

import highfi_v1_1 from "../../assets/climbr/high-fidelity-v1/landing.png";
import highfi_v1_2 from "../../assets/climbr/high-fidelity-v1/events-1.png";
import highfi_v1_3 from "../../assets/climbr/high-fidelity-v1/single-boulder-page.png";
import highfi_v1_4 from "../../assets/climbr/high-fidelity-v1/quick-add.png";
import highfi_v1_5 from "../../assets/climbr/high-fidelity-v1/map.png";

import highfi_v2_1 from "../../assets/climbr/high-fidelity-v2/landing.png";
import highfi_v2_2 from "../../assets/climbr/high-fidelity-v2/events-1.png";
import highfi_v2_3 from "../../assets/climbr/high-fidelity-v2/single-boulder-page.png";
import highfi_v2_4 from "../../assets/climbr/high-fidelity-v2/quick-add.png";
import highfi_v2_5 from "../../assets/climbr/high-fidelity-v2/search-initial.png";
import highfi_v2_6 from "../../assets/climbr/high-fidelity-v2/search-results.png";

import final_1a from "../../assets/climbr/final/Landing.png";
import final_1b from "../../assets/climbr/final/landing-settings.png";
import final_2a from "../../assets/climbr/final/events1.png";
import final_2b from "../../assets/climbr/final/events2.png";
import final_3a from "../../assets/climbr/final/single-boulder-page.png";
import final_3b from "../../assets/climbr/final/single-boulder-page-edit.png";
import final_4 from "../../assets/climbr/final/quick-add.png";
import final_5 from "../../assets/climbr/final/search-initial.png";
import final_6a from "../../assets/climbr/final/search-results.png";
import final_6b from "../../assets/climbr/final/search-results-full.png";
import final_7 from "../../assets/climbr/final/Profile.png";

import final_landing_desktop from "../../assets/climbr/final/landing-desktop.png"

function AppDesignClimbr() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    const researchArray = [
        {
            title: "USER RESEARCH",
            subtitle: "User Survey",
            imgSrc: research_1,
            captionTitle: "INSIGHT",
            caption: "Survey results were largely shaped by new/inexperienced climbers"
        },
        {
            title: "USER RESEARCH",
            subtitle: "User Survey",
            imgSrc: research_2,
            captionTitle: "INSIGHT",
            caption: "Word of mouth is an important tool of communication for climbers; climbers think learning technique is an important aspect of beginning to climb."
        },
        {
            title: "USER RESEARCH",
            subtitle: "User Survey",
            imgSrc: research_3,
            captionTitle: "INSIGHT",
            caption: "Climbers are most interested in documenting photos, videos, grade, and location. Most climbers in the survey are casual climbers (don't train)."
        },
        {
            title: "USER RESEARCH",
            subtitle: "User Interviews",
            imgSrc: research_4,
            captionTitle: "INFO",
            caption: "Interviews were conducted with people who vary from a new climbers who isn't that invested in climbing to a more experienced climber who trains regularly."
        },
    ]
    
    return (
        <ColorChanger>
            <Navbar />
            <div className="appdesignclimbr">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Climbr: Original Mobile App Design</h1>
                </div>
                <div className="intro">
                    <div className="mockup_line">
                        <Expandable
                            imgaddress={mockup_1}
                            description=""
                            className={'gen_img'}
                        />
                        <Expandable
                            imgaddress={mockup_2}
                            description=""
                            className={'gen_img'}
                        />
                        <Expandable
                            imgaddress={mockup_3}
                            description=""
                            className={'gen_img'}
                        />
                        <Expandable
                            imgaddress={mockup_4}
                            description=""
                            className={'gen_img'}
                        />
                    </div>
                    <Expandable
                        imgaddress={mockup_desktop}
                        description=""
                        className={'gen_img desktop'}
                    />
                    <div className="main_text">
                        <div className="what_is_container">
                            <h1 className="title">What is Climbr?</h1>
                            <div>
                                Climbr is an app for rock climbers to track their climbs, search for new places to climb, and connect with local climbing groups.
                                <br />
                                <br />
                                It's an app made by a climber, for climbers, and with the input of climbers of all levels throughout the development process.
                            </div>
                            <a className="prototype_link" href="#figma_prototype">Jump to the prototype</a>
                        </div>
                        <div className="project_info_card">
                            <div className="title">Project Info</div>
                            <div className="decor"></div>
                            <div className="project_info">
                                <div className="subtitle">Goal</div>
                                <div className="content">Research and design a new app interface</div>
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
                    <div className="init phase_container">
                        <div className="text left">
                            <div className="phase_header">Initial Research</div>
                            <div className="phase_body">
                                As an avid rock climber, I've used a handful of climbing apps. After doing a general survey of the existing apps available, I wanted to get the input of other climbers of what parts of climbing they're most interested in.
                                To do this, I conducted a survey of over 25 climbers, and in-depth interviews with three.
                                <br />
                                <br />
                                A key takeaway was the importance of the social aspect of climbing: many of the aspects of climbing discussed (technique, initial entry to climbing, finding new places/groups to climb with), are inherently social activities. 
                                Another important insight is that climbing can differ from other forms of sport/exercise in that some climbers are less interested in improving the grade of the climbs they do and more interested in tracking how regularly they're climbing.
                            </div>
                        </div>
                        <div className="background_decor left"></div>
                    </div>
                    <div className="phase_container research_synthesis">
                        <Slideshow slideArray={researchArray} />
                    </div>
                    <div className="phase_container">
                        <div className="left">
                            <Expandable
                                imgaddress={wireframe_mockup}
                                description="laptop"
                                className={'laptop'}
                            />
                        </div>
                        <div className="text right">
                            <div className="phase_header">Low Fidelity Wireframes</div>
                            <div className="phase_body">
                                Using the insights I gained from my user research, I decided to focus on three main functionalities for Climbr: a landing page for logging climbs, a calendar page for finding community events, and a search page for finding new places and groups to climb.
                                <br />
                                <br />
                                I also included a screen for users to log their climbs and a screen to look at a detailed viewed of individual climbs they've logged.
                            </div>
                        </div>
                        <div className="background_decor right"></div>
                    </div>
                    <div className="phase_container wireframes">
                        <div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={wireframe_1}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Landing page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={wireframe_5}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Quick Add page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={wireframe_3}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Individual Climb Detail page</div>
                            </div>
                        </div>
                        <div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={wireframe_2}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Events page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={wireframe_4}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Search page</div>
                            </div>
                        </div>
                    </div>
                    <div className="phase_container">
                        <div className="text left">
                            <div className="phase_header">High Fidelity Wireframes, V1</div>
                            <div className="phase_body">
                                After establishing the initial structure and user flow of the Climbr app, I began to focus on establishing a design system of primary colors, UI components, and icons to use.
                                Icons used are from FontAwesome.
                                <br />
                                <br />
                                I wanted to place the app in the ranks with other modern, light-hearted apps without being too distracting from the content.
                            </div>
                        </div>
                        <div className="right">
                            <Expandable
                                imgaddress={v1_mockup}
                                description="laptop"
                                className={'laptop'}
                            />
                        </div>
                        <div className="background_decor left"></div>
                    </div>
                </div>
                <div className="phase_container wireframes">
                        <div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={highfi_v1_1}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Landing page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={highfi_v1_4}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Quick Add page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={highfi_v1_3}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Individual Climb Detail page</div>
                            </div>
                        </div>
                        <div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={highfi_v1_2}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Events page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={highfi_v1_5}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Search page</div>
                            </div>
                        </div>
                </div>
                <div className="phase_container">
                    <div className="left">
                        <Expandable
                            imgaddress={v2_mockup}
                            description="laptop"
                            className={'laptop'}
                        />
                    </div>
                    <div className="text right">
                        <div className="phase_header">High Fidelity Wireframes, V2</div>
                        <div className="phase_body">
                            After spending some time with my V1 wireframes, I wanted to narrow in on the primary colors of my design system before taking it to users to test. I decided to change the primary color palette from hues of blue to green, hoping to emulate a feeling of nature and rejuventation I want people to associate the app with.
                            <br />
                            <br />
                            I began to prototype the app in Figma to prepare it to be taken to test users.
                        </div>
                    </div>
                    <div className="background_decor right"></div>
                </div>
                <div className="phase_container wireframes">
                        <div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={highfi_v2_1}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Landing page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={highfi_v2_4}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Quick Add page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={highfi_v2_3}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Individual Climb Detail page</div>
                            </div>
                        </div>
                        <div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={highfi_v2_2}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Events page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={highfi_v2_6}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Search page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={highfi_v2_5}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Search page empty state</div>
                            </div>
                        </div>
                </div>
                <div className="phase_container">
                    <div className="text left" style={{width: "60%"}}>
                        <div className="phase_header">User Testing + Final Designs</div>
                        <div className="phase_body">
                            I knew getting the app prototype into the hands of the user was an essential step before my final designs: creating in isolation has benefits, but test users could provide insights I may have been ignorant of.
                            <br />
                            <br />
                            One of the key issues that came up across different users was an inability to identify what actions they could take next. With suggestions from other designers, I decided to introduce a bold, complementary accent color to make the action items of each screen easily identifiable.
                        </div>
                    </div>
                    <div className="right">
                    </div>
                    <div className="background_decor left"></div>
                </div>
                <div className="phase_container wireframes">
                        <div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={final_1a}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Landing page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={final_4}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Quick Add page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={final_3a}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Individual Climb Detail page</div>
                            </div>
                        </div>
                        <div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={final_2a}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Events page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={final_6a}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Search page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={final_5}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Search page empty state</div>
                            </div>
                        </div>
                        <div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={final_7}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Profile page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={final_6b}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Expanded Search page</div>
                            </div>
                            <div className="wireframe_container">
                                <Expandable
                                    imgaddress={final_1b}
                                    description=""
                                    className={'gen_img wireframe'}
                                />
                                <div className="caption">Landing page data display settings</div>
                            </div>
                        </div>
                        <div className="wireframe_container">
                                <Expandable
                                    imgaddress={final_landing_desktop}
                                    description=""
                                    className={'gen_img wireframe desktop'}
                                />
                                <div className="caption">Desktop view of landing page</div>
                            </div>
                </div>
                <div className="phase_container finals" id="figma_prototype">
                    <div className="figma_container">
                        <div className="figma_title">See the prototype: </div>
                        <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="400" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fi9H4Aoj9WpGmuRa6Ei2OR2%2FJanna-Goliff---Final-Project%3Fnode-id%3D99%253A850%26scaling%3Dscale-down%26page-id%3D99%253A849%26starting-point-node-id%3D99%253A850" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="phase_container finals">
                    <div className="figma_container">
                        <div className="figma_title">See the whole project on Figma!</div>
                        <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fi9H4Aoj9WpGmuRa6Ei2OR2%2FJanna-Goliff---Final-Project%3Fnode-id%3D99%253A849" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default AppDesignClimbr;
  