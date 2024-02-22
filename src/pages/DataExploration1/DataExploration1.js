import React, { useEffect, useState } from "react";
import * as d3 from 'd3';
import { Scrollama, Step } from 'react-scrollama';
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import "./dataexploration1.scss";

/**
 * Helpful tutorials:
 * https://d3-graph-gallery.com/graph/barplot_button_data_hard.html
 */

let dataLocation = 'https://raw.githubusercontent.com/janna-goliff/site/main/src/assets/intercountry_adoption_into_US_over_2001_2020.csv';

//let dataLocation = 'https://raw.githubusercontent.com/janna-goliff/site/main/src/assets/placeholder.csv';

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
                            {/* I'm sticky. The current triggered step index is: {currentStepIndex} */}
                            Year is: { currentStepIndex < 3 ? (2001 + currentStepIndex) : (2002 + currentStepIndex) }
                            <svg width='1300' height='600' id='barChartAdoptionsByYear'></svg>
                        </div>
                        <Scrollama offset={0.3} onStepEnter={onStepEnter} debug>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((_, stepIndex) => (
                            <Step data={stepIndex} key={stepIndex}>
                                <div
                                style={{
                                    margin: '30vh 0',
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
  