// with code adapted from https://www.tutorialsteacher.com/d3js/create-bar-chart-using-d3js and
// https://www.tutorialsteacher.com/d3js/create-pie-chart-using-d3js

import React from 'react';
import * as d3 from 'd3';
import { withRouter } from 'react-router-dom';
import '../App.css';
import data from './vgsales.csv';

let color = [
  '#DF0108', //red
  '#DD5918', //rust
  '#F9980A', //org
  '#9E8314', //pea
  '#C5E230', //lime
  '#3BB900', //kelly
  '#21D7FD', //sky
  '#1C3998', //navy
  '#A1ADFF', //sky
  '#FA948F', //pink
  '#d303fc', //purple
  '#d7b2ed', //light purple
];

let mapGenreIndex = new Map();
let mapConsoleIndex = new Map();

d3.csv(data).then(function (data) {
  //remove null years (indicated by -1)
  data = data.filter(function (d) {
    return d.Year != -1;
  });

  let dataByGenre = d3.group(data, (d) => d.Genre);
  let i = 0;
  dataByGenre.forEach(function (value, key, map) {
    mapGenreIndex.set(key, i);
    i++;
  });

  let dataByConsole = d3.group(data, (d) => d.Platform);
  let j = 0;
  dataByConsole.forEach(function (value, key, map) {
    mapConsoleIndex.set(key, j % 11);
    j++;
  });

  console.log(mapConsoleIndex);
});

function getMostPopularGameGlobal(startYear, endYear) {
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
    let maxIndex = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[maxIndex].Global_Sales <= data[i].Global_Sales) {
        maxIndex = 1;
      }
    }
    const name = document.createElement('p');
    name.innerHTML = 'Most popular game: ' + data[maxIndex].Name;
    const platform = document.createElement('p');
    platform.innerHTML = 'made for the ' + data[maxIndex].Platform;
    const num = document.createElement('p');
    num.innerHTML = 'with ' + data[maxIndex].Global_Sales + ' million in sales';
    const selected = document.getElementById('maxGlobal' + startYear + endYear);
    selected.append(name);
    selected.append(platform);
    selected.append(num);
  });
}

function pieChartGenre(startYear, endYear) {
  let svg = d3.select('#genrePie' + startYear + endYear);
  let width = svg.attr('width');
  let height = svg.attr('height');
  let radius = Math.min(width, height) / 2;
  d3.csv(data).then(function (data) {
    // format data into numbers
    data.forEach(function (d) {
      if (isNaN(+d.Year)) {
        d.Year = -1;
      }
    });
    //remove null years (indicated by -1)
    data = data.filter(function (d) {
      return d.Year >= startYear && d.Year <= endYear;
    });
    // get data array indexed by genre
    let dataByGenre = d3.group(data, (d) => d.Genre);
    let genreValues = [];
    let genreNames = [];
    let sumValues = 0;
    let currValue = [];
    dataByGenre.forEach(function (value, key, map) {
      sumValues += value.length;
      genreValues.push(value.length);
      genreNames.push(key);
    });
    currValue[0] = 0;
    currValue[1] = genreValues[0];
    for (let i = 2; i < genreValues.length; i++) {
      currValue[i] = currValue[i - 1] + genreValues[i];
    }
    let g = svg
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    // Generate the pie
    let pie = d3.pie();
    // Generate the arcs
    let arc = d3.arc().innerRadius(0).outerRadius(radius);

    //Generate groups
    let arcs = g
      .selectAll('arc')
      .data(pie(genreValues))
      .enter()
      .append('g')
      .attr('class', 'arc');

    // legend
    let genreMap = [];
    let label = g
      .selectAll('labels')
      .data(pie(genreValues))
      .enter()
      .append('g')
      .attr('class', 'labels');
    label
      .append('circle')
      .attr('cx', 240)
      .attr('cy', function (d, i) {
        return -7 + -100 + i * 25;
      })
      .attr('r', 7)
      .style('fill', function (d, i) {
        genreMap[i] = genreNames[i];
        return color[mapGenreIndex.get(genreNames[i])];
      });
    label
      .append('text')
      .attr('x', 260)
      .attr('y', function (d, i) {
        return -100 + i * 25;
      })
      .style('fill', function (d, i) {
        return /*color[d.index]*/ color[mapGenreIndex.get(genreNames[i])];
      })
      .text(function (d, i) {
        return genreNames[i];
      })
      .attr('text-anchor', 'left');

    //Draw arc paths
    let mult = 0;
    arcs
      .append('path')
      .attr('fill', function (d, i) {
        return color[mapGenreIndex.get(genreMap[i])];
      })
      .transition()
      .delay(function (d, i) {
        return d.index * 500;
      })
      .duration(function (d, i) {
        return 500;
      })
      .attrTween('d', function (d) {
        var i = d3.interpolate(d.startAngle + 0.01, d.endAngle);
        return function (t) {
          d.endAngle = i(t);
          return arc(d);
        };
      });

    // add number labels
    arcs
      .attr('d', arc)
      .append('text')
      .attr('fill', 'black')
      .text(function (d, i) {
        return d.data;
      })
      .attr('font-weight', '500')
      .attr('transform', function (d) {
        return 'translate(' + arc.centroid(d) + ')';
      })
      .style('text-anchor', 'middle')
      .style('font-size', 17);
  });
}

function pieChartConsole(startYear, endYear) {
  let svg = d3.select('#consolePie' + startYear + endYear);
  let width = svg.attr('width');
  let height = svg.attr('height');
  let radius = Math.min(width, height) / 2;
  d3.csv(data).then(function (data) {
    // format data into numbers
    data.forEach(function (d) {
      if (isNaN(+d.Year)) {
        d.Year = -1;
      }
    });
    //remove null years (indicated by -1)
    data = data.filter(function (d) {
      return d.Year >= startYear && d.Year <= endYear;
    });
    // get data array indexed by genre
    let dataByGenre = d3.group(data, (d) => d.Platform);
    let genreValues = [];
    let genreNames = [];
    let sumValues = 0;
    let currValue = [];
    dataByGenre.forEach(function (value, key, map) {
      sumValues += value.length;
      genreValues.push(value.length);
      genreNames.push(key);
    });
    currValue[0] = 0;
    currValue[1] = genreValues[0];
    for (let i = 2; i < genreValues.length; i++) {
      currValue[i] = currValue[i - 1] + genreValues[i];
    }
    let g = svg
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    // Generate the pie
    let pie = d3.pie();
    // Generate the arcs
    let arc = d3.arc().innerRadius(0).outerRadius(radius);

    //Generate groups
    let arcs = g
      .selectAll('arc')
      .data(pie(genreValues))
      .enter()
      .append('g')
      .attr('class', 'arc');

    // legend
    let genreMap = [];
    let label = g
      .selectAll('labels')
      .data(pie(genreValues))
      .enter()
      .append('g')
      .attr('class', 'labels');
    label
      .append('circle')
      .attr('cx', 240)
      .attr('cy', function (d, i) {
        return -7 + -100 + i * 25;
      })
      .attr('r', 7)
      .style('fill', function (d, i) {
        genreMap[i] = genreNames[i];
        return color[mapConsoleIndex.get(genreNames[i])];
      });
    label
      .append('text')
      .attr('x', 260)
      .attr('y', function (d, i) {
        return -100 + i * 25;
      })
      .style('fill', function (d, i) {
        return /*color[d.index]*/ color[mapConsoleIndex.get(genreNames[i])];
      })
      .text(function (d, i) {
        return genreNames[i];
      })
      .attr('text-anchor', 'left');

    //Draw arc paths
    let mult = 0;
    arcs
      .append('path')
      .attr('fill', function (d, i) {
        return color[mapConsoleIndex.get(genreMap[i])];
      })
      .transition()
      .delay(function (d, i) {
        return d.index * 500;
      })
      .duration(function (d, i) {
        return 500;
      })
      .attrTween('d', function (d) {
        var i = d3.interpolate(d.startAngle + 0.01, d.endAngle);
        return function (t) {
          d.endAngle = i(t);
          return arc(d);
        };
      });

    // add number labels
    arcs
      .attr('d', arc)
      .append('text')
      .attr('fill', 'black')
      .text(function (d, i) {
        return d.data;
      })
      .attr('font-weight', '500')
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
      .attr('fill', 'white')
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
      .attr('fill', 'white')
      .text('Number of games');

    g.selectAll('.domain').attr('stroke', 'white');
    g.selectAll('.tick line').attr('stroke', 'white');
    g.selectAll('.tick text').attr('fill', 'white');

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
      })
      .attr('fill', function (d, i) {
        return 'white';
      });
  });
}

function makeDataView(start, end) {
  return (
    <>
      <div className='flexVertical'>
        <h1 className='dvHeader'>{`${start}-${end}`}</h1>
        <div className='flexHorizontal'>
          <div className='flexVertical'>
            <p className='numberStat'>Genres by Popularity</p>
            <svg width='720' height='400' id={'genrePie' + start + end}></svg>
          </div>
          <div className='flexVertical'>
            <p className='numberStat'>Consoles by Popularity</p>
            <svg width='720' height='400' id={'consolePie' + start + end}></svg>
          </div>
        </div>
        <div
          className='numberStat flexVertical together'
          id={'maxGlobal' + start + end}
        ></div>
      </div>
    </>
  );
}

class DataViz1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {
    const navbar = document.getElementsByClassName('navbarWrapper')[0];
    navbar.classList.add('hide');

    yearTotalSalesBarChart();

    for (let i = 1980; i < 2020; i += 5) {
      pieChartGenre(i, i + 4);
      pieChartConsole(i, i + 4);
      getMostPopularGameGlobal(i, i + 4);
    }

    pieChartGenre(1980, 2019);
    pieChartConsole(1980, 2019);
    //getMostPopularGameGlobal(1980, 2019);
  }

  render() {
    return (
      <div>
        <div className='bumper hide'></div>
        <h2>VIDEO GAMES OVER THE YEARS</h2>
        <div className='flexVertical' id='dataVizContainerIntro'>
          <h3 className='dvSubheading'>A look at the data we have: </h3>
          <p className='dvBody'>
            This data on video game sales was taken from Kaggle and can be found{' '}
            <a
              style={{ color: 'rgb(255, 255, 255)' }}
              id='white'
              href='https://www.kaggle.com/gregorut/videogamesales'
            >
              here
            </a>
            . It represents an incomplete set, and the sales of video games by
            year is reflected below.
          </p>
          <svg width='1500' height='600' id='yearTotalSales'></svg>
        </div>
        <div className='flexVertical' id='dataVizContainer'>
          {makeDataView(1980, 1984)}
          {makeDataView(1985, 1989)}
          {makeDataView(1990, 1994)}
          {makeDataView(1995, 1999)}
          {makeDataView(2000, 2004)}
          {makeDataView(2005, 2009)}
          {makeDataView(2010, 2014)}
          {makeDataView(2015, 2019)}
          {makeDataView(1980, 2019)}
        </div>
      </div>
    );
  }
}

export default withRouter(DataViz1);
