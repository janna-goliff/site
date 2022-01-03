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
                            I'm a student at UPenn double majoring in Design and Computer Science.
                        </div>
                        <div className="body">
                        I love exploring the ways design and computer science interact. 
                        <br />
                        <br />
                        This website, and its features, were made by me! See the Github repo <a href="https://github.com/janna-goliff/site">here</a>. Deployed using AWS Amplify.
                        </div>
                    </div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default About;
  