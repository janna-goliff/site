// with code adapted from https://www.tutorialsteacher.com/d3js/create-bar-chart-using-d3js and
// https://www.tutorialsteacher.com/d3js/create-pie-chart-using-d3js

import React from 'react';
import "./dataviz1.scss";
import * as d3 from 'd3';
import Navbar from "../../components/Navbar/Navbar";
import ColorChanger from "../../components/ColorChanger/ColorChanger";

let data =
  'https://raw.githubusercontent.com/janna-goliff/site/main/src/assets/vgsales.csv';

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
    return d.Year !== -1;
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

function update2(year,type) {
  let svg = d3.select('#' + type + 'ChartNEW');
  let margin = 400;
  let width = svg.attr('width') - (margin );
  let height = svg.attr('height') - (margin/4);

  let xScale = d3.scaleBand().range([0, width]).padding(0.4);
  let yScale = d3.scaleLinear().range([height, 0]);
  let g = svg
    .append('g')
    .attr('transform', 'translate(' + 175 + ',' + 10 + ')');

    
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

    let allDomainValues
    if (type==='genre') { 
      allDomainValues = Array.from(d3.group(data, (d) => d.Genre), ([key, values]) => {
        return key;
      });
    }  

    if (type==='platform') { 
      allDomainValues = Array.from(d3.group(data, (d) => d.Platform), ([key, values]) => {
        return key;
      });
    }  

    if (type==='publisher') { 
      allDomainValues = Array.from(d3.group(data, (d) => d.Publisher), ([key, values]) => {
        return key;
      });
    }  

    //remove null years (indicated by -1)
    data = data.filter(function (d) {
      return d.Year !== -1 && d.Year === year;
    });
    let dataByYear;
    //sorts data by Genre
    if (type==='genre') {
      data = data.slice().sort((a, b) => d3.ascending(a.Genre, b.Genre));

      // set x domain
      dataByYear = d3.group(data, (d) => d.Genre);
      xScale.domain(
      data.map(function (d) {
          return d.Genre;
        })
      );
    }

    if (type==='platform') {
      data = data.slice().sort((a, b) => d3.ascending(a.Platform, b.Platform));
      // set x domain
      dataByYear = d3.group(data, (d) => d.Platform);
      xScale.domain(
        data.map(function (d) {
          return d.Platform;
        })
      );
    }

    if (type==='publisher') {
      data = data.slice().sort((a, b) => d3.ascending(a.Publisher, b.Publisher));
      // set x domain
      dataByYear = d3.group(data, (d) => d.Publisher);
      xScale.domain(
        data.map(function (d) {
          return d.Publisher;
        })
      );
    }

    // set y domain
    let genreNames = [];
    let totalSalesArray = Array.from(dataByYear, ([key, values]) => {
      genreNames.push(key)
      return values.length;
    });

    yScale.domain([0, d3.max(totalSalesArray)]);

    // make colors
    var color = d3.scaleOrdinal()
    .domain(allDomainValues)
    .range(d3.schemeDark2);

    
    // x axis group element
    g.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale))

    if (genreNames.length > 10 && type==='publisher') {
      g
      .selectAll("text")
      .style("text-anchor", "start")
      .attr("dx", "1em")
      .attr("dy", "-.5em")
      .attr('transform', 'rotate(90)')
      
    }

    // y axis group element
    g.append('g')
      .call(
        d3
          .axisLeft(yScale)
          .tickFormat(function (d) {
            return d;
          })
          .ticks(10)
      )
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dx', '0')
      .attr('dy', '-2em')
      .attr('font-family', 'Arial, sans-serif')
      .style('font-size', '3em')
      .attr('text-anchor', 'end')
      .attr('fill', 'black')
      .text('Number of games');

    g.selectAll('.domain').attr('stroke', 'black');
    g.selectAll('.tick line').attr('stroke', 'black');
    g.selectAll('.tick text').attr('fill', 'black');

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
        return color(d[0]);
      });
  });
}

function yearTotalSalesBarChart() {
  let svg = d3.select('#yearTotalSales');
  let margin = 350;
  let width = svg.attr('width') - margin;
  let height = svg.attr('height') - margin;

  let xScale = d3.scaleBand().range([0, width]).padding(0.4);
  let yScale = d3.scaleLinear().range([height, 0]);
  let g = svg
    .append('g')
    .attr('transform', 'translate(' + 175 + ',' + 100 + ')');

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
      return d.Year !== -1;
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
      .attr('dx', '16em')
      .attr('dy', '2em')
      .attr('font-family', 'Arial, sans-serif')
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
      .attr('dx', '0em')
      .attr('dy', '-2em')
      .attr('font-family', 'Arial, sans-serif')
      .style('font-size', '3em')
      .attr('text-anchor', 'end')
      .attr('fill', 'black')
      .text('Number of games');

    g.selectAll('.domain').attr('stroke', 'black');
    g.selectAll('.tick line').attr('stroke', 'black');
    g.selectAll('.tick text').attr('fill', 'black');

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
        return 'black';
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

// function updateGenre() {
//   const value = document.getElementById("genreYearSlider").value
//   update2(value)
// }

class DataViz1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.onGenreChange = this.onGenreChange.bind(this);
      this.onPlatformChange = this.onPlatformChange.bind(this);
      this.onPublisherChange = this.onPublisherChange.bind(this);
    }

    onGenreChange(event) {
      let value = event.target.value
      update2(value, "genre")
      this.setState({
        genreValue: event.target.value
      });
    }

    onPlatformChange(event) {
      let value = event.target.value
      update2(value, "platform")
      this.setState({
        platformValue: event.target.value
      });
    }

    onPublisherChange(event) {
      let value = event.target.value
      update2(value, "publisher")
      this.setState({
        publisherValue: event.target.value
      });
    }

  componentDidMount() {
    yearTotalSalesBarChart();
    update2(1985, "genre")
    update2(1985, "platform")
    update2(1985, "publisher")
  }

  componentDidUpdate() {
    const parent = document.getElementById("genreChartNEW")
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }

    const parent2 = document.getElementById("platformChartNEW")
    while (parent2.firstChild) {
      parent2.removeChild(parent2.firstChild);
    }

    const parent3 = document.getElementById("publisherChartNEW")
    while (parent3.firstChild) {
      parent3.removeChild(parent3.firstChild);
    }

    update2(parseInt(this.state.genreValue), "genre")
    update2(parseInt(this.state.platformValue), "platform")
    update2(parseInt(this.state.publisherValue), "publisher")
  }

  

  render() {
    return (
      <ColorChanger>
      <div className="pageContainer">
        <Navbar />
        <div className="header_container">
            <svg className="star_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144"><rect x="67.2" width="9.6" height="144"/><rect x="67.2" width="9.6" height="144" transform="translate(-26.35 98.35) rotate(-60)"/><rect x="67.2" width="9.6" height="144" transform="translate(98.35 -26.35) rotate(60)"/><circle cx="72" cy="72" r="18.47"/></svg>
            <h1>Video games over time: an exploratory d3 project</h1>
        </div>
        <div className='flexVertical' id='dataVizContainerIntro'>
          <h3 className='dvSubheading'>A look at the data we have: </h3>
          <p className='dvBody'>
            This data on video game sales was taken from Kaggle and can be found{' '}
            <a
              style={{ color: 'var(--mainContentColor)' }}
              id='black'
              href='https://www.kaggle.com/gregorut/videogamesales'
            >
              here
            </a>
            . It represents an incomplete set, and the sales of video games by
            year is reflected below.
          </p>
          
          <svg width='1300' height='600' id='yearTotalSales'></svg>
          <h1 className='dvHeader margin-neg'>Yearly breakdown, by different categories</h1>
          
          
          <div className='faded mb-1'>
            <h2 className='dvSubheading'>by genre</h2>
            <svg className='fadeInOpacity' width='1000' height='400' id='genreChartNEW'></svg>
            <h2 className='dvSubheading margin-neg'>{this.state.genreValue ? this.state.genreValue : '1985'}</h2>
            <input className="slider" id="genreYearSlider" name="genreYearSlider" type="range" min="1985" max="2010" onChange={this.onGenreChange}/>
          </div>
          
          <div className='mb-1'>
            <h2 className='dvSubheading'>by platform</h2>
            <svg className='fadeInOpacity' width='1000' height='400' id='platformChartNEW'></svg>
            <h2 className='dvSubheading margin-neg'>{this.state.platformValue ? this.state.platformValue : '1985'}</h2>
            <input className="slider" id="platformYearSlider" name="platformYearSlider" type="range" min="1985" max="2010" onChange={this.onPlatformChange}/>
          </div>
         
          
          <div  className='faded mb-1'>
            <h2 className='dvSubheading'>by publisher</h2>
            <svg className='fadeInOpacity' width='1400' height='400' id='publisherChartNEW'></svg>
            <h2 className='dvSubheading'>{this.state.publisherValue ? this.state.publisherValue : '1985'}</h2>
            <input className="slider" id="publisherYearSlider" name="publisherYearSlider" type="range" min="1985" max="2010" onChange={this.onPublisherChange}/>
          </div>

          <h3 className='dvSubheading'>Insights</h3>
          <p className='dvBody'>
            From 1985 to 2010, there was a huge shift in video game sales. Although the data given is incomplete, there is a clear upwards trend in the popularity of video games over time.
            When looking at popular consoles, it is interesting to note that the number of consoles did not increase dramatically over time, and the market for consoles themselves seems to have been fairly dominated by the same consoles and their variants over the past few decades.
            In contrast, the amount of video game publishers creating popular video games skyrocketed, to the point that it is difficult to even fully render them on screen. While some companies have maintained success over time, such as Electronic Arts and Nintendo, there are a large amount of newer companies entering the scene as early as 2000.
          </p>
        </div>
      </div>
      </ColorChanger>
    );
  }
}

export default DataViz1;
