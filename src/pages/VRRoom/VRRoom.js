import React from "react";
import "./vrroom.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import Expandable from "../../components/Expandable/Expandable";
import Slideshow from "../../components/Slideshow/Slideshow";

import header_img from "../../assets/vrroom/unity-screenshots/screenshot-2.png";
import timelapse_video from "../../assets/vrroom/timelapse-edited.mp4";
import realtime_video from "../../assets/vrroom/realtime-video.mp4";

import hands_1 from "../../assets/vrroom/hands/initial-hands.png";
import hands_2 from "../../assets/vrroom/hands/key-hands.png";
import hands_3 from "../../assets/vrroom/hands/plant-hands.png";
import hands_4 from "../../assets/vrroom/hands/shelf-plant-hands.png";

import interaction_1 from "../../assets/vrroom/state-changes/journal-flip-1.png";
import interaction_2 from "../../assets/vrroom/state-changes/journal-flip-2.png";
import interaction_3 from "../../assets/vrroom/state-changes/light-off.png";
import interaction_4 from "../../assets/vrroom/state-changes/light-onn.png";
import interaction_5 from "../../assets/vrroom/state-changes/phone-off.png";
import interaction_6 from "../../assets/vrroom/state-changes/phone-on.png";

import room_picture_1 from "../../assets/vrroom/unity-screenshots/screenshot-1.png"
import room_picture_2 from "../../assets/vrroom/unity-screenshots/screenshot-2.png"
import room_picture_3 from "../../assets/vrroom/unity-screenshots/screenshot-3.png"
import room_picture_4 from "../../assets/vrroom/unity-screenshots/screenshot-4.png"
import room_picture_5 from "../../assets/vrroom/unity-screenshots/screenshot-5.png"
import room_picture_6 from "../../assets/vrroom/unity-screenshots/screenshot-6.png"
import room_picture_7 from "../../assets/vrroom/unity-screenshots/screenshot-7.png"
import room_picture_8 from "../../assets/vrroom/unity-screenshots/screenshot-8.png"

import instructional_poster from "../../assets/vrroom/instructional-poster.png"
import install_main from "../../assets/vrroom/install-edited.png"

function VRRoom() {
    const roomPictures = [
        {
            title: "",
            subtitle: "",
            imgSrc: room_picture_1,
            captionTitle: "",
            caption: ""
        },
        {
            title: "",
            subtitle: "",
            imgSrc: room_picture_2,
            captionTitle: "",
            caption: ""
        },
        {
            title: "",
            subtitle: "",
            imgSrc: room_picture_3,
            captionTitle: "",
            caption: ""
        },
        {
            title: "",
            subtitle: "",
            imgSrc: room_picture_4,
            captionTitle: "",
            caption: ""
        },
        {
            title: "",
            subtitle: "",
            imgSrc: room_picture_5,
            captionTitle: "",
            caption: ""
        },
        {
            title: "",
            subtitle: "",
            imgSrc: room_picture_6,
            captionTitle: "",
            caption: ""
        },
        {
            title: "",
            subtitle: "",
            imgSrc: room_picture_7,
            captionTitle: "",
            caption: ""
        },
        {
            title: "",
            subtitle: "",
            imgSrc: room_picture_8,
            captionTitle: "",
            caption: ""
        },
    ]
    return (
        <ColorChanger>
            <Navbar />
            <div className="vrroom">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>VR Project: room tour 2022 | senior year | welcome to my *simulacROOM*</h1>
                </div>
                <div className="intro">
                    <div className="mockup_line">
                        <Expandable
                            imgaddress={header_img}
                            description="laptop"
                            className={'header'}
                        />
                    </div>
                    <div className="main_text">
                        <div className="what_is_container">
                            <h1 className="title">About the Project</h1>
                            <div>
                                This project, completed as a culminating thesis project for the Design major at the University of Pennsylvania, is a recreation of my bedroom from my junior and senior years of college.
                                <br />
                                <br />
                                Exploring media that were completely novel to me, I wanted to interrogate the reasons behind documentation: what deems something worthy of documentation, and how do we choose to do so?
                            </div>
                        </div>
                        <div className="project_info_card">
                            <div className="title">Project Info</div>
                            <div className="decor"></div>
                            <div className="project_info">
                                <div className="subtitle">Goal</div>
                                <div className="content">Explore VR as a medium for documentation</div>
                            </div>
                            <div className="project_info">
                                <div className="subtitle">Timeline</div>
                                <div className="content">4 months</div>
                            </div>
                            <div className="project_info">
                                <div className="subtitle">Tools Used</div>
                                <div className="content">Oculus Quest 2, Unity, Blender, C#, Photoshop</div>
                            </div>
                            <div className="project_info">
                                <div className="subtitle">Final Product</div>
                                <div className="content">Playable Oculus App</div>
                            </div>
                        </div>
                    </div>
                    <div className="main_column">
                        <video className="video" controls class="center" width="100%" height="100%" autoplay="" loop="" preload="" muted="">
                            <source src={timelapse_video} type="video/mp4" />
                        </video>
                        <div className="video_caption">
                            Timelapse video of what the user sees and what they're doing
                        </div>
                        <div className="video_description project">
                            The project combines 3D modelling, game development, and Photoshop. Every object that appears in the VR room is one I 3D modelled in Blender, then textured, arranged, and set up interactions for in Unity. Several interactions involved light scripting using C#. 
                            <br /><br />
                            I had never done 3D modelling before starting this project, much less integrated it from Blender into Unity, so many of the technologies I used were things I learned as I went.
                        </div>
                        <video className="video" controls class="center" width="50%" height="50%" autoplay="" loop="" preload="" muted="">
                            <source src={realtime_video} type="video/mp4" />
                        </video>
                        <div className="video_caption">
                            Realtime video of user exploring the VR room
                        </div>
                    </div>
                </div>
                <div className="phases">
                    <h1 className="title">Example Interactions</h1>
                    <div className="hands_container"> 
                        <div className="hands_subcontainer">
                            <Expandable
                                imgaddress={hands_1}
                                description="laptop"
                                className={'hands'}
                            />
                            <Expandable
                                imgaddress={hands_2}
                                description="laptop"
                                className={'hands'}
                            />
                            <Expandable
                                imgaddress={hands_3}
                                description="laptop"
                                className={'hands'}
                            />
                            <Expandable
                                imgaddress={hands_4}
                                description="laptop"
                                className={'hands'}
                            />
                        </div>
                        <div className="video_caption">
                            Pop up boxes appear as the user's hands intersect with different objects
                        </div>
                        <div className="hands_subcontainer bumper">
                            <Expandable
                                imgaddress={interaction_3}
                                description="laptop"
                                className={'hands'}
                            />
                            <Expandable
                                imgaddress={interaction_4}
                                description="laptop"
                                className={'hands'}
                            />
                            <div className="caption">Turning the lamp on and off</div>
                            <Expandable
                                imgaddress={interaction_1}
                                description="laptop"
                                className={'hands'}
                            />
                            <Expandable
                                imgaddress={interaction_2}
                                description="laptop"
                                className={'hands'}
                            />
                            <div className="caption">Flipping through journal pages</div>
                            <Expandable
                                imgaddress={interaction_5}
                                description="laptop"
                                className={'hands'}
                            />
                            <Expandable
                                imgaddress={interaction_6}
                                description="laptop"
                                className={'hands'}
                            />
                            <div className="caption">Turning the phone on and off</div>
                        </div>
                    </div>
                </div>
                <div className="phases">
                    <h1 className="title">Room pictures</h1>
                    <div className="hands_container"> 
                        <Slideshow slideArray={roomPictures} />
                    </div>
                </div>
                <div className="phases">
                    <h1 className="title">Exhibition Installation</h1>
                    <div className="install_container">
                        <Expandable
                            imgaddress={install_main}
                            description="photo of exhibition with an instructional poster and monitor streaming the Oculus app"
                            className={'mainPhoto'}
                        />
                        <div className="install caption">
                            Above is a photo of the exhibition installation, showing a livestream of what users see while wearing the headset and instructions on how to set it up and/or troubleshoot.
                            <br /> <br />
                            To read more about the exhibition as a whole, <a href="https://www.design.upenn.edu/post/undergraduate-design-work-display" target="_blank" rel="noreferrer">check out this article!</a>
                            <br /> <br />
                            Below, check out the instructions on display during the exhibition.
                        </div>
                        <Expandable
                            imgaddress={instructional_poster}
                            description="poster describing how to run the Oculus app"
                            className={'poster'}
                        />
                    </div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default VRRoom;
  