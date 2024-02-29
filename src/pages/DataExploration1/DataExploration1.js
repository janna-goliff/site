import React, { useEffect, useState } from "react";
import * as d3 from 'd3';
import { Scrollama, Step } from 'react-scrollama';
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import "./dataexploration1.scss";
import ChinaAdoptionTimeline from "./ChinaAdoptionTimeline/ChinaAdoptionTimeline";

import janna_baby from "../../assets/dataexploration1/janna_baby.png";
import AllCountriesAdoptions from "./AllCountriesAdoptions/AllCountriesAdoptions";

function DataExploration1() {
    

    return (
        <ColorChanger>
            <Navbar />
            <div className="adoption_timeline">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>China's One-Child Policy: A Personal Visual Essay</h1>
                </div>
                <div className="container">
                    <div className="essay_intro">
                        <div className="essay_big_heading">
                            <h2 className="essay_big_quote">
                                Cradled in the arms of an efficient law, the new Chinese export-the healthy, beautiful baby girl-is the reason why China has become the favorite surrogate nursery of the United States, if not the world.
                            </h2>
                            <div className="essay_attribution">
                                Robert Gordon in “The New Chinese Export: Orphaned Children, an Overview of Adopting Children from China” Transnational Law 10, Spring 1997
                            </div>
                        </div>
                        <div className="essay_body">
                            China's “One-Child Policy” is one of the most extreme family planning measures ever implemented; its origins are deeply complex, but the effects in China and across the world are evident. In China, a strong cultural preference for male children over female children led to a sex ratio heavily skewed towards males, and an abundance of infant girls in orphanages. 
                            <br /><br />
                            I was adopted as an effect of this policy in 2001. In an effort to explore how visualizing the data related to China's one-child policy can bring about new interpretations of its meaning in my own life, I've created a scrollytelling visual essay discussing the historic and cultural contexts around it.
                            <br /><br />
                            The US Department of State already has detailed statistical tools that allow users to explore country-by-country yearly adoption data. Rather than recreate a tool that already exists, I wanted to explore how highlighting certain aspects of this data in new, interactive ways could inform a more personal understanding.
                        </div>
                        <div className="intro_picture_container">
                            <img className="intro_image" src={janna_baby} alt="Picture of Janna" />
                            <div className="intro_image_caption">The photo my parents received before adopting me</div>
                        </div>
                    </div>
                </div>
                <div className="timeline_container">
                    <div className="timeline">
                        <ChinaAdoptionTimeline />
                    </div>
                </div>
                <div className="container">
                   <div className="essay_transition_quote_container">
                        <p className="essay_transition_quote">
                            China has an inarguably unique relationship to the US's international adoption system. But how does it compare to other countries?
                        </p>
                   </div>
                    <AllCountriesAdoptions />
                </div>
            </div>
        </ColorChanger>
    );
}

export default DataExploration1;
  