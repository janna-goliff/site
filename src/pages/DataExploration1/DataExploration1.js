import React, { useEffect, useState } from "react";
import * as d3 from 'd3';
import { Scrollama, Step } from 'react-scrollama';
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";
import "./dataexploration1.scss";

let dataLocation = 'https://raw.githubusercontent.com/janna-goliff/site/main/src/assets/intercountry_adoption_into_US_over_2001_2020.csv';

//let dataLocation = 'https://raw.githubusercontent.com/janna-goliff/site/main/src/assets/placeholder.csv';

const translateX = 100;
const translateY = 100;
const numberOfCountries = 25;

// takes a year indexed InternMap and string representing a year
// returns data for the given year, sorted by highest to lowest adoptions top X countries
function processAdoptionsByYearData(data, year) {
    // grab by year
    let dataReturn = data
        .get(year);
        console.log("dataReturn: ", dataReturn);
    dataReturn = dataReturn
        .sort((a, b) => d3.descending(
            parseInt(a.Number_of_Completed_Adoptions_to_US), 
            parseInt(b.Number_of_Completed_Adoptions_to_US)))
        .slice(0, numberOfCountries);

        return dataReturn;
}

//add moving percentage horizontal bar chart?
function createInitialBarChart(adoptionData) {
    // grab initial svg sizes
    let svg = d3.select('#barChartAdoptionsByYear');
    let margin = 150;
    let width = svg.attr('width') - margin;
    let height = svg.attr('height') - margin;

    let xScale = d3.scaleBand().range([0, width]).padding(0.4);
    let yScale = d3.scaleLinear().range([height, 0]);
    let g = svg
        .append('g')
        .attr('id', 'barInner')
        .attr('transform', 'translate(' + translateX + ',' + translateY + ')');

    // grab by year to use for initial axis labels
    let dataByYear = processAdoptionsByYearData(adoptionData, 2001);

    // set x domain to use country names
    xScale.domain(
        dataByYear.map(function (d) {
            return d.Country;
        })
    );

    // set y domain to use range of 0 to max # of adoptions
    yScale.domain([0, dataByYear[0].Number_of_Completed_Adoptions_to_US]);

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
    .attr('transform', 'rotate(-90)')
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
    .append('text') // create text lbale for y axis
    .attr('class', 'yAxisTextLabel')
    .attr('y', 6)
    .attr('dx', '-' + (height / 2)+ 'px')
    .attr('dy', '-3em')
    .text('Country');
}

// A function that create / update the plot for a given variable:
function updateBarChart(adoptionData, year) {
    let svg = d3.select("#barChartAdoptionsByYear");
    let margin = 150;
    let width = svg.attr('width') - margin;
    let height = svg.attr('height') - margin;

    let xScale = d3.scaleBand().range([0, width]).padding(0.4);
    let yScale = d3.scaleLinear().range([height, 0]);

    let data = processAdoptionsByYearData(adoptionData, year);

     // set x domain to use country names
     xScale.domain(
        data.map(function (d) {
            return d.Country;
        })
    );
    
    d3.select(".x_axis").transition().duration(1000).call(d3.axisBottom(xScale))
    .selectAll('.tick text')
    .attr('fill', 'black')
    .attr('text-anchor', 'end')
    .attr('dx', '-1em')
    .attr('dy', '-.5em')
    .attr('transform', 'rotate(-90)')
    .attr('margin-right', "2em"); // x axis bottom scale labels, rotate and adjusted

    // set y domain to use range of 0 to max # of adoptions
    yScale.domain([0, data[0].Number_of_Completed_Adoptions_to_US]);
    d3.select(".y_axis").transition().duration(1000).call(
        d3
        .axisLeft(yScale)
        .tickFormat(function (d) {
        return d;
        })
        .ticks(10)
        .tickSizeInner(-width) // sets tick lines to expand into grid lines
    );

    // Create the u variable
    var u = svg.selectAll("rect")
    .data(data)

    u
    .enter()
    .append("rect") // Add a new rect for each new elements
    .merge(u) // get the already existing elements as well
    .transition() // and apply changes to all of them
    .duration(1000)
        .attr("x", function(d) { return xScale(d.Country); })
        .attr("y", function(d) { 
            return yScale(d.Number_of_Completed_Adoptions_to_US); })
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) { return height - yScale(d.Number_of_Completed_Adoptions_to_US); })
        .attr('transform', 'translate(' + translateX + ',' + translateY + ')')
        .attr("fill", "#69b3a2")
        .attr("class", ".bar")
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
                            <svg width='1300' height='800' id='barChartAdoptionsByYear'></svg>
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
  