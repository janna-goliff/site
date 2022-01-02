import React from "react";
import "./about.scss";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import PageHeader from "../../components/PageHeader/PageHeader";

function About() {
    return (
        <ColorChanger>
            <Navbar />
            <PageHeader headerContent="About me"/>
            <div className="logo_1_body">
                <div className="container">
                    <div className="main_text">
                        hello
                    </div>
                    <div>ME</div>
                    {/* <img src={""}>ME</img> */}
                </div>
            </div>
        </ColorChanger>
    );
}

export default About;
  