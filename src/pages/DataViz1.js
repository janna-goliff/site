// with code adapted from https://www.tutorialsteacher.com/d3js/create-bar-chart-using-d3js and
// https://www.tutorialsteacher.com/d3js/create-pie-chart-using-d3js

import React from 'react';
import * as d3 from 'd3';
import { withRouter } from 'react-router-dom';
import '../App.css';
import data from './vgsales.csv';

function getMostPopularConsole(startYear, endYear) {
  let svg = d3.select('#year1980_1985TotalSales');
  let margin = 200;
  let width = svg.attr('width') - margin;
  let height = svg.attr('height') - margin;

  let xScale = d3.scaleBand().range([0, width]).padding(0.4);
  let yScale = d3.scaleLinear().range([height, 0]);
  let g = svg
    .append('g')
    .attr('transform', 'translate(' + 100 + ',' + 100 + ')');

  d3.csv(data).then(function (data) {
    // format data into numbers
    data.forEach(function (d) {
      if (isNaN(+d.Year)) {
        d.Year = -1;
      }
      d.Rank = +d.Rank;
      d.Year = +d.Year;
      d.NA_Sales = +d.NA_Sales;
      d.EU_Sales = +d.EU_Sales;
      d.JP_Sales = +d.JP_Sales;
      d.Other_Sales = +d.Other_Sales;
      d.Global_Sales = +d.Global_Sales;
    });

    //sorts data by year
    data = data.slice().sort((a, b) => d3.ascending(a.Year, b.Year));

    //remove null years (indicated by -1)
    data = data.filter(function (d) {
      return d.Year >= startYear && d.Year <= endYear;
    });

    // set x domain
    let dataByGenre = d3.group(data, (d) => d.Genre);
    console.log(dataByGenre);
    console.log('going to return max');
    let max = 0;
    let maxGenre = '';
    dataByGenre.forEach(function (value, key, map) {
      if (value.length > max) {
        max = value.length;
        maxGenre = key;
      }
    });
    document.getElementById('1980max').innerHTML = maxGenre + ' ' + max;
  });
}

function barChartConsole(startYear, endYear) {
  let svg = d3.select('#year1980_1985Console');
  let margin = 200;
  let width = svg.attr('width') - margin;
  let height = svg.attr('height') - margin;

  let xScale = d3.scaleBand().range([0, width]).padding(0.4);
  let yScale = d3.scaleLinear().range([height, 0]);
  let g = svg
    .append('g')
    .attr('transform', 'translate(' + 100 + ',' + 100 + ')');

  d3.csv(data).then(function (data) {
    // format data into numbers
    data.forEach(function (d) {
      if (isNaN(+d.Year)) {
        d.Year = -1;
      }
      d.Rank = +d.Rank;
      d.Year = +d.Year;
      d.NA_Sales = +d.NA_Sales;
      d.EU_Sales = +d.EU_Sales;
      d.JP_Sales = +d.JP_Sales;
      d.Other_Sales = +d.Other_Sales;
      d.Global_Sales = +d.Global_Sales;
    });

    //sorts data by year
    data = data.slice().sort((a, b) => d3.ascending(a.Year, b.Year));

    //remove null years (indicated by -1)
    data = data.filter(function (d) {
      return d.Year >= startYear && d.Year <= endYear;
    });

    // set x domain
    let dataByGenre = d3.group(data, (d) => d.Platform);
    xScale.domain(
      data.map(function (d) {
        return d.Platform;
      })
    );

    // set y domain
    let totalArray = Array.from(dataByGenre, ([key, values]) => {
      return values.length;
    });
    yScale.domain([0, d3.max(totalArray)]);

    // x axis group element
    let string = 'Platforms in ' + startYear + ' - ' + endYear;
    g.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale))
      .append('text')
      .attr('dx', '17em')
      .attr('dy', '2em')
      .attr('font-family', 'Raleway, sans-serif')
      .style('font-size', '2em')
      .attr('text-anchor', 'end')
      .attr('fill', 'black')
      .text(string);

    // y axis group element
    g.append('g')
      .call(
        d3
          .axisLeft(yScale)
          .tickFormat(function (d) {
            return d;
          })
          .ticks(5)
      )
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dx', '-1em')
      .attr('dy', '-2em')
      .attr('font-family', 'Raleway, sans-serif')
      .style('font-size', '2em')
      .attr('text-anchor', 'end')
      .attr('fill', 'black')
      .text('Number of games');

    // bars
    g.selectAll('.bar')
      .data(dataByGenre)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function (d) {
        return xScale(d[0]);
      })
      .attr('y', function (d) {
        return yScale(d[1].length);
      })
      .attr('width', xScale.bandwidth())
      .transition()
      .duration(1500)
      .attr('height', function (d) {
        return height - yScale(d[1].length);
      });
  });
}

function barChartGenre(startYear, endYear) {
  let svg = d3.select('#year1980_1985TotalSales');
  let margin = 200;
  let width = svg.attr('width') - margin;
  let height = svg.attr('height') - margin;

  let xScale = d3.scaleBand().range([0, width]).padding(0.4);
  let yScale = d3.scaleLinear().range([height, 0]);
  let g = svg
    .append('g')
    .attr('transform', 'translate(' + 100 + ',' + 100 + ')');

  d3.csv(data).then(function (data) {
    // format data into numbers
    data.forEach(function (d) {
      if (isNaN(+d.Year)) {
        d.Year = -1;
      }
      d.Rank = +d.Rank;
      d.Year = +d.Year;
      d.NA_Sales = +d.NA_Sales;
      d.EU_Sales = +d.EU_Sales;
      d.JP_Sales = +d.JP_Sales;
      d.Other_Sales = +d.Other_Sales;
      d.Global_Sales = +d.Global_Sales;
    });

    //sorts data by year
    data = data.slice().sort((a, b) => d3.ascending(a.Year, b.Year));

    //remove null years (indicated by -1)
    data = data.filter(function (d) {
      return d.Year >= startYear && d.Year <= endYear;
    });

    // set x domain
    let dataByGenre = d3.group(data, (d) => d.Genre);
    xScale.domain(
      data.map(function (d) {
        return d.Genre;
      })
    );

    // set y domain
    let totalArray = Array.from(dataByGenre, ([key, values]) => {
      return values.length;
    });
    yScale.domain([0, d3.max(totalArray)]);

    // x axis group element
    let string = 'Genres in ' + startYear + ' - ' + endYear;
    g.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale))
      .append('text')
      .attr('dx', '17em')
      .attr('dy', '2em')
      .attr('font-family', 'Raleway, sans-serif')
      .style('font-size', '2em')
      .attr('text-anchor', 'end')
      .attr('fill', 'black')
      .text(string);

    // y axis group element
    g.append('g')
      .call(
        d3
          .axisLeft(yScale)
          .tickFormat(function (d) {
            return d;
          })
          .ticks(15)
      )
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dx', '-1em')
      .attr('dy', '-2em')
      .attr('font-family', 'Raleway, sans-serif')
      .style('font-size', '2em')
      .attr('text-anchor', 'end')
      .attr('fill', 'black')
      .text('Number of games');

    // bars
    g.selectAll('.bar')
      .data(dataByGenre)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function (d) {
        return xScale(d[0]);
      })
      .attr('y', function (d) {
        return yScale(d[1].length);
      })
      .attr('width', xScale.bandwidth())
      .transition()
      .duration(1500)
      .attr('height', function (d) {
        return height - yScale(d[1].length);
      });
  });
}

function pieChartGenre(startYear, endYear) {
  let svg = d3.select('#genre1980Pie');
  let width = svg.attr('width');
  let height = svg.attr('height');
  let radius = Math.min(width, height) / 2;
  d3.csv(data).then(function (data) {
    // format data into numbers
    data.forEach(function (d) {
      if (isNaN(+d.Year)) {
        d.Year = -1;
      }
      d.Rank = +d.Rank;
      d.Year = +d.Year;
      d.NA_Sales = +d.NA_Sales;
      d.EU_Sales = +d.EU_Sales;
      d.JP_Sales = +d.JP_Sales;
      d.Other_Sales = +d.Other_Sales;
      d.Global_Sales = +d.Global_Sales;
    });
    //remove null years (indicated by -1)
    data = data.filter(function (d) {
      return d.Year >= startYear && d.Year <= endYear;
    });
    // get data array indexed by genre
    let dataByGenre = d3.group(data, (d) => d.Genre);
    let dataByGenreMap = [];
    let genreValues = [];
    dataByGenre.forEach(function (value, key, map) {
      dataByGenreMap[key] = value.length;
      genreValues.push(value.length);
    });
    let g = svg
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    let color = d3.scaleOrdinal([
      '#4daf4a',
      '#377eb8',
      '#ff7f00',
      '#984ea3',
      '#e41a1c',
    ]);
    // Generate the pie
    let pie = d3.pie();
    // Generate the arcs
    let arc = d3.arc().innerRadius(0).outerRadius(radius);

    console.log(genreValues);
    //Generate groups
    let arcs = g
      .selectAll('arc')
      .data(pie(genreValues))
      .enter()
      .append('g')
      .attr('class', 'arc');
    //Draw arc paths
    arcs
      .append('path')
      .attr('fill', function (d, i) {
        return color(i);
      })
      .attr('d', arc);

    arcs
      .append('text')
      .attr('fill', 'black')
      .text('hello')
      .attr('font-weight', '300')
      .attr('transform', function (d) {
        return 'translate(' + arc.centroid(d) + ')';
      })
      .style('text-anchor', 'middle')
      .style('font-size', 17);
  });
}

function yearTotalSalesBarChart() {
  let svg = d3.select('#yearTotalSales');
  let margin = 200;
  let width = svg.attr('width') - margin;
  let height = svg.attr('height') - margin;

  let xScale = d3.scaleBand().range([0, width]).padding(0.4);
  let yScale = d3.scaleLinear().range([height, 0]);
  let g = svg
    .append('g')
    .attr('transform', 'translate(' + 100 + ',' + 100 + ')');

  d3.csv(data).then(function (data) {
    data.forEach(function (d) {
      if (isNaN(+d.Year)) {
        d.Year = -1;
      }
      d.Rank = +d.Rank;
      d.Year = +d.Year;
      d.NA_Sales = +d.NA_Sales;
      d.EU_Sales = +d.EU_Sales;
      d.JP_Sales = +d.JP_Sales;
      d.Other_Sales = +d.Other_Sales;
      d.Global_Sales = +d.Global_Sales;
    });

    //sorts data by year
    data = data.slice().sort((a, b) => d3.ascending(a.Year, b.Year));

    //remove null years (indicated by -1)
    data = data.filter(function (d) {
      return d.Year != -1;
    });

    // set x domain
    let dataByYear = d3.group(data, (d) => d.Year);
    xScale.domain(
      data.map(function (d) {
        return d.Year;
      })
    );

    // set y domain
    let totalSalesArray = Array.from(dataByYear, ([key, values]) => {
      return values.length;
    });
    yScale.domain([0, d3.max(totalSalesArray)]);

    // x axis group element
    g.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale))
      .append('text')
      .attr('dx', '22em')
      .attr('dy', '2em')
      .attr('font-family', 'Raleway, sans-serif')
      .style('font-size', '3em')
      .attr('text-anchor', 'end')
      .attr('fill', 'black')
      .text('Year');

    // y axis group element
    g.append('g')
      .call(
        d3
          .axisLeft(yScale)
          .tickFormat(function (d) {
            return d;
          })
          .ticks(20)
      )
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dx', '-2em')
      .attr('dy', '-2em')
      .attr('font-family', 'Raleway, sans-serif')
      .style('font-size', '3em')
      .attr('text-anchor', 'end')
      .attr('fill', 'black')
      .text('Number of games');

    g.selectAll('.bar')
      .data(dataByYear)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', function (d) {
        return xScale(d[0]);
      })
      .attr('y', function (d) {
        return yScale(d[1].length);
      })
      .attr('width', xScale.bandwidth())
      .transition()
      .duration(1500)
      .attr('height', function (d) {
        return height - yScale(d[1].length);
      });
  });
}
class DataViz1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {
    barChartGenre(1980, 1984);
    yearTotalSalesBarChart();
    getMostPopularConsole(1980, 1984);
    barChartConsole(1980, 1984);
    pieChartGenre(1980, 1984);
  }

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <h2>VIDEO GAMES OVER THE YEARS</h2>
        <svg width='1500' height='600' id='yearTotalSales'></svg>
        <div>
          <svg width='800' height='400' id='year1980_1985TotalSales'></svg>
          <svg width='800' height='400' id='year1980_1985Console'></svg>
          <p id='1980max'></p>
        </div>
        <svg width='400' height='400' id='genre1980Pie'></svg>
      </div>
    );
  }
}

export default withRouter(DataViz1);
