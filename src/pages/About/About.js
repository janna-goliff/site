import React from "react";
import "./about.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import PageHeader from "../../components/PageHeader/PageHeader";
import self from "../../assets/self.png";

function About() {
    return (
        <ColorChanger>
            <Navbar />
            <PageHeader headerContent="About me"/>
            <div className="about">
                <div className="container">
                    <img className="portrait" src={self} alt="portrait of Janna Goliff" />
                    <div className="main_text">
                        <div className="headline">
                            I'm a full-stack developer and designer based out of Philadelphia.
                        </div>
                        <div className="body">
                            Hi! I'm Janna (she/her). I'm a recent graduate from UPenn with a double major in Design and Computer Science.
                        <br />
                        <br />
                            This website, and its features, were made by me! See the Github repo <a href="https://github.com/janna-goliff/site">here</a>. Deployed using Github pages.
                        </div>
                    </div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default About;
  