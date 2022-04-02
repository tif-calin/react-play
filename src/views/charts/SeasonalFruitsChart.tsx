import React from 'react';
import * as d3 from 'd3';

const useD3 = (renderChart: any, dependencies: any[]) => {
  const ref = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    renderChart(d3.select(ref.current));
  }, dependencies);

  return ref;
};

const data = {
  'asian pears': [9.25, 11.75],
  'blackberries': [6, 9],
  'blood oranges': [12, 4],
  'cherimoya': [11, 6.75],
  'cherries': [4.5, 6.25],
  'figs': [8, 11],
  'gooseberries': [6, 9],
  'grapes': [6, 12],
  'kiwi': [10, 5],
  'longan': [7, 11],
  'loquats': [4, 7],
  'lychees': [8.5, 9.5],
  'mandarins': [11, 4],
  'mangos': [6, 9],
  'passionfruits': [1, 10],
  'pears': [8, 11],
  'persimmons': [9.75, 1],
  'raspberries': [4, 11],
  'strawberries': [2, 11],
};

const toMonth = (i: d3.NumberValue) => [
  'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
][Number(i) - 1 % 12];

const toFancyMonth = (n: d3.NumberValue) => {
  const month = Math.floor(Number(n));
  const fancy = ['', 'early ', 'mid ', 'late '][Math.max(Math.round((Number(n) - month) * 4), 3)];
  return `${fancy}${toMonth(month)}`;
};

const colors = [
  'red', 'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange'
];

const today = 1 + new Date().getMonth() + new Date().getDate() / 31;

const dataWithWrappedBars = Object.entries(data).map(arr => arr.flat()).reduce(
  (acc: any, curr: any) => {
    if (curr.at(-1) > curr.at(1)) return [...acc, curr];
    else return [
      ...acc,
      [curr.at(0), curr.at(1), 12.999],
      [curr.at(0), 1, curr.at(2)]
    ];
  }, []
);

const inSeason = new Set(dataWithWrappedBars
  .filter(([_, m1, m2]) => m1 <= today && today <= m2)
  .map(d => d[0])
);

const renderChart = (svg: any) => {
  const margin = { top: 30, right: 0, bottom: 30, left: 100 };
  const height = 300;
  const width = 500;

  const xScale = d3
    .scaleLinear()
    .domain([1, 13])
    .range([margin.left, width - margin.right])
  ;
  const yScale = d3
    .scaleBand()
    .domain(Object.keys(data))
    .range([margin.top, height - margin.bottom])
  ;

  const xAxis = (g: any) => g
    .attr('transform', `translate(0, ${margin.top})`)
    .call(d3
      .axisTop(xScale)
      .tickFormat(toMonth)
    )
  ;
  const yAxis = (g: any) => g
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(yScale))
  ;

  svg.select('.x-axis').call(xAxis);
  svg.select('.y-axis').call(yAxis);

  const fruits = Object.keys(data);

  // bars
  svg
    .select('.plot-area')
    .selectAll('.bar')
    .data(dataWithWrappedBars)
    .join('rect')
    .attr('class', 'bar')
    .attr('fill', (d: any) => `var(--${colors[fruits.indexOf(d[0]) * 5 % colors.length]})`)
    .attr('opacity', (d: any) => inSeason.has(d[0]) ? '1' : '0.2')
    .attr('x', (d: any[]) => xScale(d[1]))
    .attr('width', (d: any) => Math.abs(xScale(d[2]) - xScale(d[1])))
    .attr('y', (d: any) => margin.top + (fruits.indexOf(d[0]) + 1/8) * yScale.bandwidth())
    .attr('height', () => yScale.bandwidth() * (3/4))
    .attr('stroke', 'black')
    .append('title')
    .text((d: any) => `${d[0]}\n${toFancyMonth((data[d[0] as keyof typeof data])[0])} - ${toFancyMonth(data[d[0] as keyof typeof data][1])}`)
  ;

  // today marker
  svg
    .select('.plot-area')
    .selectAll('.today')
    .data([today])
    .join('rect')
    .attr('fill', 'black')
    .attr('x', () => xScale(today))
    .attr('width', 1)
    .attr('y', margin.top)
    .attr('height', height - margin.top - margin.bottom)
  ;
};

interface Props {};

const SeasonalFruitsChart: React.FC<Props> = () => {
  const ref = useD3(renderChart, [data]);

  return (
    <svg
      ref={ref}
      style={{
        height: 300,
        width: 600,
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

export default SeasonalFruitsChart;
