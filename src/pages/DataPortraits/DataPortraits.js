import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import "./dataportraits.scss";
import Expandable from "../../components/Expandable/Expandable";
import bernie_orig from "../../assets/dataportraits/bernie_orig.jpg";
import bernie_bw from "../../assets/dataportraits/bernie_bw.jpg";
import bernie_filter from "../../assets/dataportraits/bernie_filter.jpg";

function WebAppDev1() {
    return (
        <ColorChanger>
            <Navbar />
            <div className="data_portaits">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Data portraits using skimage</h1>
                </div>
                <div className="container">
                    <div className="main_text">
                        Inspired by organizations like the Percentage Project, which leverage portraiture to humanize statistics about equity in computer science, I wanted to both experiment with image processing and create thought-provoking data visualizations. My data portraits project uses skimage to convert images to greyscale, create a mask of area to fill with a given color based on percentage thresholds, and then replace those areas on the original image. 
                        <br />
                        <br />
                        Below, for example, is a portrait of Bernie Sanders with a 37% threshold, representative of the percent increase from the current federal contractor minimum wage ($10.95) to a $15 hourly wage.
                        <br />
                        <br />
                        Explore the Github <a href="https://github.com/janna-goliff/dataartsite">here</a>.
                    </div>
                </div>
                <div className="portraitSet">
                    <Expandable
                        imgaddress={bernie_orig}
                        description="Color image of Bernie Sanders"
                        className={''}
                    />
                    <Expandable
                        imgaddress={bernie_bw}
                        description="Greyscale image of Bernie Sanders"
                        className={''}
                    />
                    <Expandable
                        imgaddress={bernie_filter}
                        description="Color image of Bernie Sanders with some areas filled in with a vibrant blue"
                        className={''}
                    />
                </div>
            </div>
        </ColorChanger>
    );
}

export default WebAppDev1;
  