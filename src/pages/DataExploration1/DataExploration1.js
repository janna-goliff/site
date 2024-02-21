import React, { useState } from "react";
import * as d3 from 'd3';
import { Scrollama, Step } from 'react-scrollama';
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import "./dataexploration1.scss";



function DataExploration1() {
    // track what step of react-scrollama
    const [currentStepIndex, setCurrentStepIndex] = useState(null);

    // scrollama event handlers
    function onStepEnter({ data }) {
        setCurrentStepIndex(data);
    }

    let data = 'https://raw.githubusercontent.com/janna-goliff/site/main/src/assets/intercountry_adoption_into_US_over_2001_2020.csv';
    d3.csv(data, function(d) {
        return {
          num: d.Number_of_Completed_Adoptions_to_US,
          year: d.Year,
        };
      }, function(error, rows) {
        console.log(rows);
      });

    return (
        <ColorChanger>
            <Navbar />
            <div className="data_portaits">
                <div className="header_container">
                    <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
                    <h1>Data exploration</h1>
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
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '50vh 0', border: '2px dashed skyblue' }}>
                        <div style={{ position: 'sticky', top: 0, border: '1px solid orchid' }}>
                            I'm sticky. The current triggered step index is: {currentStepIndex}
                        </div>
                        <Scrollama offset={0.5} onStepEnter={onStepEnter} debug>
                            {[1, 2, 3, 4].map((_, stepIndex) => (
                            <Step data={stepIndex} key={stepIndex}>
                                <div
                                style={{
                                    margin: '50vh 0',
                                    border: '1px solid gray',
                                    opacity: currentStepIndex === stepIndex ? 1 : 0.2,
                                    padding: '10em'
                                }}
                                >
                                I'm a Scrollama Step of index {stepIndex}
                                </div>
                            </Step>
                            ))}
                        </Scrollama>
                    </div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default DataExploration1;
  