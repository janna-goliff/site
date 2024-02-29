import React, { useEffect, useState } from "react";
import * as d3 from 'd3';
import { Scrollama, Step } from 'react-scrollama';
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import "./dataexploration1.scss";
import ChinaAdoptionTimeline from "./ChinaAdoptionTimeline/ChinaAdoptionTimeline";

import janna_baby from "../../assets/dataexploration1/janna_baby.png";

/**
 * Helpful tutorials:
 * https://d3-graph-gallery.com/graph/barplot_button_data_hard.html
 */

let dataLocation = 'https://raw.githubusercontent.com/janna-goliff/site/main/src/assets/intercountry_adoption_into_US_over_2001_2020.csv';

// Used for debugging
// let dataLocation = 'https://raw.githubusercontent.com/janna-goliff/site/main/src/assets/placeholder.csv';

const translateX = 100;
const translateY = 100;

// controls how many countries are rendered in bar chart
const numberOfCountries = 25;

// takes a year indexed InternMap and string representing a year
// returns data for the given year, sorted by highest to lowest adoptions top X countries
function processAdoptionsByYearData(data, year) {
    // grab by year
    return data
        .get(year)
        .sort((a, b) => d3.descending(
            parseInt(a.Number_of_Completed_Adoptions_to_US), 
            parseInt(b.Number_of_Completed_Adoptions_to_US)))
        .slice(0, numberOfCountries);
}

// runs initial steps to create bar chart - calculates width, height, xScale, yScale
function initializeBarChart(barChartId, year, data) {
    let svg = d3.select(barChartId);

    let margin = 200;
    let width = svg.attr('width') - margin;
    let height = svg.attr('height') - margin;

    let xScale = d3.scaleBand().range([0, width]).padding(0.4);
    let yScale = d3.scaleLinear().range([height, 0]);

    console.log("*******", year, "*********")
    let dataByYear = processAdoptionsByYearData(data, year);

    // set x domain to use country names
    xScale.domain(
        dataByYear.map(function (d) {
            return d.Country;
        })
    );

    // set y domain to use range of 0 to max # of adoptions
    yScale.domain([0, dataByYear[0].Number_of_Completed_Adoptions_to_US]);

    return {height, width, xScale, yScale, dataByYear};
}



// add moving percentage horizontal bar chart?
function createInitialBarChart(adoptionData) {
    // grab initial svg sizes
    let svg = d3.select('#barChartAdoptionsByYear');
    
    let g = svg
        .append('g')
        .attr('id', 'barInner')
        .attr('transform', 'translate(' + translateX + ',' + translateY + ')');

    const { height, width, xScale, yScale } = initializeBarChart('#barChartAdoptionsByYear', 2001, adoptionData);
    
    // x axis bottom scale
    g.append('g')
    .attr('class', 'x_axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(xScale))

    // x axis bottom scale labels, rotate and adjusted
    g.selectAll('.tick text')
    .attr('fill', 'black')
    .attr('text-anchor', 'end')
    .attr('dx', '-1em')
    .attr('dy', '-.5em')
    .attr('transform', 'rotate(-60)')
    .attr('margin-right', "2em");

    // y axis group element
    g.append('g')
    .call(
    d3
        .axisLeft(yScale)
        .tickFormat(function (d) {
            return d;
        })
        .ticks(10)
        .tickSizeInner(-width) // sets tick lines to expand into grid lines
    )
    .attr('class', 'y_axis')
    .selectAll('.tick text')
    .attr('dx', '-1em')
    .append('text') // create text label for y axis
    .attr('class', 'yAxisTextLabel')
    .attr('y', 6)
    .attr('dx', '-' + (height / 2)+ 'px')
    .attr('dy', '-3em')
    .text('Country');
    
}

// A function that create / update the plot for a given variable:
function updateBarChart(adoptionData, year) {
    let svg = d3.select("#barChartAdoptionsByYear");
    // let tooltipDiv = svg.append("div")
    //  .attr("class", "tooltip-bar")
    //  .style("opacity", 0)
    //  .style("position", "fixed");

    const { height, width, xScale, yScale, dataByYear } = initializeBarChart('#barChartAdoptionsByYear', year, adoptionData);

    d3.select(".x_axis").transition().duration(1000).call(d3.axisBottom(xScale))
    .selectAll('.tick text')
    .attr('fill', 'black')
    .attr('text-anchor', 'end')
    .attr('dx', '-1em')
    .attr('dy', '-.5em')
    .attr('transform', 'rotate(-60)')
    .attr('margin-right', "2em"); // x axis bottom scale labels, rotate and adjusted
    
    d3.select(".y_axis").transition().duration(1000).call(
        d3
        .axisLeft(yScale)
        .tickFormat(function (d) {
        return d;
        })
        .ticks(10)
        .tickSizeInner(-width) // sets tick lines to expand into grid lines
    )
    .selectAll('.tick text')
    .attr('dx', '-1em');

    // Create the u variable
    var u = svg.selectAll("rect")
    .data(dataByYear)

    const rect = u
    .enter()
    .append("rect") // Add a new rect for each new elements
    .merge(u);  // get the already existing elements as well

    // rect
    // .on('mouseover', function(d, i) {
    //     console.log(d)
    //     tooltipDiv
    //     .transition().duration(200)
    //     .style('opacity', 1);
    //     tooltipDiv.html(i.Number_of_Completed_Adoptions_to_US)
    //     .attr('x', d.clientX)
    //     .attr('y', d.clientY);
    //   })
    // .on('mouseout', function(d, i) {
    //     tooltipDiv.style('opacity', 0)
    //     });

    rect.transition() // and apply changes to all of them
    .duration(1000)
        .attr("x", function(d) { return xScale(d.Country); })
        .attr("y", function(d) { 
            return yScale(d.Number_of_Completed_Adoptions_to_US); })
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) { return height - yScale(d.Number_of_Completed_Adoptions_to_US); })
        .attr('transform', 'translate(' + translateX + ',' + translateY + ')')
        .attr("fill", function(d) {
            return d.Country === "China" ? "#d60f04" : "var(--mainContentColor"})
        .attr("class", ".bar");
  }

function DataExploration1() {
    // track what step of react-scrollama
    const [currentStepIndex, setCurrentStepIndex] = useState(null);
    const [adoptionData, setAdoptionData] = useState(null);

    function renderText(stepIndex) {
        if (stepIndex === 0) {
            return "China's One Child Policy"
        }
        if (stepIndex === 11) {
            return "A diplomatic rift with the U.S. led to a ban of new American adoptions of Russian children as of 2013"
        }
        return "";
    }

    useEffect(() => {
        d3.csv(dataLocation).then(function (data) {
            // format data into numbers
            data.forEach(function (d) {
                d.Year = parseInt(d.Year);
                d.Number_of_Completed_Adoptions_to_US = parseInt(d.Number_of_Completed_Adoptions_to_US);
                if (isNaN(d.Number_of_Completed_Adoptions_to_US)) {
                    d.Number_of_Completed_Adoptions_to_US = 0;
                }
            });
            const dataGroupedByYear = d3.group(data, (d) => d.Year);
            
            setAdoptionData(dataGroupedByYear);
            createInitialBarChart(dataGroupedByYear);
            updateBarChart( dataGroupedByYear, 2001);
        })
    }, []);

    // scrollama event handlers
    function onStepEnter({ data }) {
        setCurrentStepIndex(data); 
        updateBarChart( adoptionData, data < 3 ? (2001 + data) : (2002 + data));
    }

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
                    
                </div>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '50vh 0', border: '2px dashed skyblue' }}>
                        <div style={{ position: 'sticky', top: 0, border: '1px solid orchid' }}>
                            {/* I'm sticky. The current triggered step index is: {currentStepIndex} */}
                            Year is: { currentStepIndex < 3 ? (2001 + currentStepIndex) : (2002 + currentStepIndex) }
                            <svg width='1300' height='600' id='barChartAdoptionsByYear'></svg>
                        </div>
                        <Scrollama offset={0.3} onStepEnter={onStepEnter}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((_, stepIndex) => (
                            <Step data={stepIndex} key={stepIndex}>
                                
                                <div className="adoptionChartStepContainer">
                                I'm a Scrollama Step of index {stepIndex}
                                { renderText(stepIndex) }
                                {stepIndex === 1 ? "China one child policy" : ""}
                                </div>
                            </Step>
                            ))}
                        </Scrollama>
                    </div>
                </div>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '50vh 0', border: '2px dashed skyblue' }}>
                        <div style={{ position: 'relative', top: 0, border: '1px solid orchid' }}>
                            {/* I'm sticky. The current triggered step index is: {currentStepIndex} */}
                            Year is: { currentStepIndex < 3 ? (2001 + currentStepIndex) : (2002 + currentStepIndex) }
                            <svg width='1300' height='300' id='horizontalBarChartAdoptionsByYear'></svg>
                        </div>
                        
                    </div>
                </div>
            </div>
        </ColorChanger>
    );
}

export default DataExploration1;
  