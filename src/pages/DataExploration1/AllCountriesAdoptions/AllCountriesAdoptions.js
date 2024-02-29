import React, { useEffect, useState } from "react";
import * as d3 from 'd3';
import { Scrollama, Step } from 'react-scrollama';
import "./allcountriesadoptions.scss";

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
    .attr('fill', 'white')
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
    .attr('fill', 'rgba(255, 255, 255)')
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
    .attr('fill', 'white')
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
            return d.Country === "China" ? "rgba(163, 35, 0, .5)" : "rgba(0, 0, 0, 0)"})
        .attr("stroke", "rgba(255, 255, 255, .75)")
        .attr("class", ".bar");
  }

function AllCountriesAdoptions() {
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
        <div className="allCountriesAdoptions">
            <div className="yearLabel">
                {/* I'm sticky. The current triggered step index is: {currentStepIndex} */}
                <div className="yearLabelText">Year is: { currentStepIndex < 3 ? (2001 + currentStepIndex) : (2002 + currentStepIndex) }</div>
                <svg width='1300' height='600' id='barChartAdoptionsByYear'></svg>
            </div>
            <Scrollama offset={0.3} onStepEnter={onStepEnter}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((_, stepIndex) => (
                <Step data={stepIndex} key={stepIndex}>
                    <div className="adoptionChartStepContainer">
                    </div>
                </Step>
                ))}
            </Scrollama>
        </div>
    );
}

export default AllCountriesAdoptions;
  