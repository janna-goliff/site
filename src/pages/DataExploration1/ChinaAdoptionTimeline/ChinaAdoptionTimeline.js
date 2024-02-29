import React, { useEffect, useState } from "react";
import * as d3 from 'd3';
import { Scrollama, Step } from 'react-scrollama';
import "./chinaadoptiontimeline.scss";

import family_planning_70s from "../../../assets/dataexploration1/familly_planning_70s.jpeg"

/**
 * Helpful tutorials:
 * https://d3-graph-gallery.com/graph/barplot_button_data_hard.html
 */

// Data from https://travel.state.gov/content/travel/en/Intercountry-Adoption/adopt_ref/adoption-statistics-esri.html?wcmmode=disabled
const chinaAdoptionData = {
    1988: 12,
    1992: 12, //artifical
    1993: 12, //artifical
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
        .attr('fill', "white")
        .style('stroke', 'white')
    
    u.exit()
    .transition() // and apply changes to all of them
    .duration(1000)
    .style('opacity', '0')
    .remove();
  }

function calculateYear(stepIndex) {
    const year = ["1970s", 1979, 1988, 1992, 1995, 1997, 2001, 2002, 2004, 2007, 2010, 2015, 2021][stepIndex]
    return year;
}

function getYearInfo(year) {
    const yearKey = year.toString();
    const yearCaptions = {
        "1970s": "China releases large amounts of family-planning materials to encourage a lower birth rate.",
        "1979": "China implements the one-child policy, mandating that couples only have one child or face a variety of different penalties.",
        "1988": "Records show 12 children adopted from China to the US; at this point, the international adoption process is heavily regulated and difficult to navigate.\n\nChina soon makes the adoption process more accessible to foreigners, with the regulation that “only foreigners of Chinese heritage, non-Chinese foreigners with strong ties to the country, or long-term foreign residents of China were eligible to adopt”.",
        "1992": "China enacts the Adoption Law of China, establishing a national policy for foreign adoption, and streamlining the adoption process for foreign couples.",
        "1993": "The Hague Convention on the Protection of Children and Co-operation in Respect of Intercountry Adoption, an international agreement to safeguard intercountry adoptions, is established. The US signed a year later.",
        "1995": "2,000+ children are adopted from China into the US, almost all infants or toddler girls.",
        "1997": "In the US, The Small Business and Job Protection Act of 1996 creates an adoption tax credit with a maximum amount of $5,000.",
        "2001": "The Economic Growth and Tax Relief Reconciliation Act of 2001 temporarily extended and expanded the adoption tax credit, doubling it from $5,000 to $10,000.",
        "2002": "Adoptions from China into the US continue to boom.",
        "2003": "Adoptions from China into the US continue to boom.",
        "2004": "Adoptions from China into the US reach an all-time high.",
        "2007": "Adoptions from China into the US begin to decline.",
        "2010": "Adoptions from China into the US continue to decline.",
        "2015": "China's one-child limit was increased to allow two children, decreasing the pool of adoptable children.",
        "2021": "China's one-child policy was relaxed even further to allow for three children; 0 children are adopted into the US from China."
    }
    return yearCaptions[yearKey] ? yearCaptions[yearKey] : "";
}

function getYearContent(year) {
    const yearKey = year.toString();
    if (yearKey === "1970s") {
        return (
        <div className="full_image_spread">
            <img src={family_planning_70s} alt="Poster from 1970s promoting family planning in China" />
            <div className="caption">
                "Carry out family planning for the revolution" from Shanghai People's Fine Arts Publisher, 1974
                <a className="caption_link" target="_blank" rel="noopener noreferrer" href="https://www.nlm.nih.gov/hmd/topics/chinese-family/family-politics_101557845-sm.html?imgid=10">Source</a>
            </div>
        </div>)
    }
}

function renderNonSvgContent(year) {
    const yearKey = year.toString();
    const nonSvgYears = ["1970s"]
    const isNonSvgYear = nonSvgYears.find((val) => { return val === yearKey})
    return isNonSvgYear !== undefined;
}

function getStepClass(index) {
    if (index === 12) return "final_step";
    if (index === 9 || index === 10) return "short_step";
    if (index === 0 ) return "long_step";
    return "";
}

function ChinaAdoptionTimeline() {
    // track what step of react-scrollama
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    useEffect(() => {
        createInitialDotChart();
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
            <div className="scrolly">
                <Scrollama offset={0.3} onStepEnter={onStepEnter}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, stepIndex) => (
                    <Step data={stepIndex} key={stepIndex}>
                        <div className={"stepContainer " + (getStepClass(stepIndex))}>
                            <div className="yearInfoContainer">
                                <div className="yearTextContainer">
                                    <div className="yearLine"></div>
                                    <div className="yearTextLabel">{calculateYear(stepIndex)}</div>
                                </div>
                                <div className="yearInfo">{getYearInfo(calculateYear(stepIndex))}</div>
                            </div>
                        {/* USE FOR DEBUG I'm a Scrollama Step of index {stepIndex} */}
                        {
                            renderNonSvgContent(calculateYear(stepIndex)) && 
                            getYearContent(calculateYear(stepIndex)) 
                        }
                        </div>
                    </Step>
                    ))}
                </Scrollama>
            </div>
            {(calculateYear(currentStepIndex) !== "1970s" && calculateYear(currentStepIndex) !== "1979") &&
                <div className="year">
                    <div className="key">
                        <div className="dot"></div>
                        <div>= 1 adopted child</div>
                    </div>
                    <svg width='600' height='1000' id='dotChartChinaAdoptionsByYear'></svg>
                </div>
            }
        </div>
    );
}

export default ChinaAdoptionTimeline;
  