import React from 'react';
import * as d3 from 'd3';
import { withRouter } from 'react-router-dom';
import '../App.css';
import data from './vgsales.csv';

class DataViz1 extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {
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
        d.Rank = +d.Rank;
        d.Year = +d.Year;
        d.NA_Sales = +d.NA_Sales;
        d.EU_Sales = +d.EU_Sales;
        d.JP_Sales = +d.JP_Sales;
        d.Other_Sales = +d.Other_Sales;
        d.Global_Sales = +d.Global_Sales;
      });
      // console.log(data);
      xScale.domain(
        data.map(function (d) {
          return d.Year;
        })
      );
      yScale.domain([
        0,
        d3.max(data, function (d) {
          return d.Global_Sales;
        }),
      ]);
      // console.log(
      //   d3.max(data, function (d) {
      //     return d.Global_Sales;
      //   })
      // );

      g.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(xScale));

      g.append('g').call(
        d3
          .axisLeft(yScale)
          .tickFormat(function (d) {
            return '$' + d;
          })
          .ticks(20)
      );
      g.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', function (d) {
          return xScale(d.Year);
        })
        .attr('y', function (d) {
          return yScale(d.Global_Sales);
        })
        .attr('width', xScale.bandwidth())
        .attr('height', function (d) {
          return height - yScale(d.Global_Sales);
        });
    });
  }

  render() {
    return (
      <div>
        <div className='bumper'></div>
        <svg width='1500' height='1200' id='yearTotalSales'></svg>
      </div>
    );
  }
}

export default withRouter(DataViz1);
