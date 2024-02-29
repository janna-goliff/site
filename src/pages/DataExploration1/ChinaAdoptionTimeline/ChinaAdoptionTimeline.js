import React, { useEffect, useState } from "react";
import * as d3 from 'd3';
import { Scrollama, Step } from 'react-scrollama';
import "./chinaadoptiontimeline.scss";

/**
 * Helpful tutorials:
 * https://d3-graph-gallery.com/graph/barplot_button_data_hard.html
 */

// Data from https://travel.state.gov/content/travel/en/Intercountry-Adoption/adopt_ref/adoption-statistics-esri.html?wcmmode=disabled
const chinaAdoptionData = {
    1988: 12,
    1995: 2000,
    1999: 4108,
    2000: 5058,
    2001: 4705,
    2002: 6116,
    2003: 6857,
    2004: 7038,
    2005: 7903,
    2006: 6492,
    2007: 5453,
    2008: 3912,
    2009: 3000,
    2010: 3401,
    2011: 2587,
    2012: 2696,
    2013: 2306,
    2014: 2040,
    2015: 2354,
    2016: 2231,
    2017: 1905,
    2018: 1475,
    2019: 819,
    2020: 202,
    2021: 0,
};

const translateX = 100;
const translateY = 100;

const numberOfDotsInRow = 100;

const circleRadius = 1;
const circlePadding = 4;

// add moving percentage horizontal bar chart?
function createInitialDotChart(year) {
    // grab initial svg sizes
    let svg = d3.select('#dotChartChinaAdoptionsByYear');
    
    const numberOfDots = chinaAdoptionData[year];

    const data = d3.range(numberOfDots);

    //container to hold the grid of dots
	const g = svg.append("g")
        .attr("transform", "translate(" + translateX + "," + translateY + ")");

    g.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr('cx', function(d, i) {return circlePadding * (i % numberOfDotsInRow);})
        .attr('cy', function(d, i) {return circlePadding *  Math.floor(i / numberOfDotsInRow)}) //i < 11 0, i < 21 1, i < 31 2
        .attr('r', circleRadius)
        .attr('fill', "black")
        .style('stroke', 'black');
}

// A function that create / update the plot for a given variable:
function updateDotChart(year) {
    let svg = d3.select("#dotChartChinaAdoptionsByYear");

    const numberOfDots = chinaAdoptionData[year];
    const newData = d3.range(numberOfDots);

    // Create the u variable
    let u = svg.selectAll("circle")
    .data(newData)

    const circle = u
    .enter()
    .append("circle") // Add a new circle for each new element
    .merge(u);  // get the already existing elements as well

    circle
    .attr('transform', 'translate(' + translateX + ',' + translateY + ')')
    .transition() // and apply changes to all of them
    .duration(1000)
        .attr('cx', function(d, i) {return circlePadding * (i % numberOfDotsInRow);})
        .attr('cy', function(d, i) {return circlePadding *  Math.floor(i / numberOfDotsInRow)}) //i < 11 0, i < 21 1, i < 31 2
        .attr('r', circleRadius)
        .attr('fill', "black")
        .style('stroke', 'black')
    
    u.exit()
    .transition() // and apply changes to all of them
    .duration(1000)
    .style('opacity', '0')
    .remove();
  }

function calculateYear(stepIndex) {
    const year = [1979, 1988, 1992, 1995, 1997, 2001, 2002, 2004, 2007, 2010, 2015, 2021][stepIndex]
    return year;
}

function ChinaAdoptionTimeline() {
    // track what step of react-scrollama
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    useEffect(() => {
        createInitialDotChart();
        // updateDotChart( 1988 );
    }, [])

    // scrollama event handlers
    function onStepEnter({ data }) {
        setCurrentStepIndex(data); 
        const year = calculateYear(data)
        if (year >= 1999 || year === 1995 || year === 1988) {
            updateDotChart( year );
        }
        
    }

    return (
        <div className="chinaAdoptionTimelineContainer">
            <div className="year">
                {/* I'm sticky. The current triggered step index is: {currentStepIndex} */}
                <div className="yearTextLabel">{calculateYear(currentStepIndex)}</div>
                <svg width='600' height='1000' id='dotChartChinaAdoptionsByYear'></svg>
            </div>
            <Scrollama offset={0.3} onStepEnter={onStepEnter}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, stepIndex) => (
                <Step data={stepIndex} key={stepIndex}>
                    
                    <div className="stepContainer">
                    I'm a Scrollama Step of index {stepIndex}
                    {stepIndex === 1 ? "China one child policy" : ""}
                    </div>
                </Step>
                ))}
            </Scrollama>
        </div>
    );
}

export default ChinaAdoptionTimeline;
  