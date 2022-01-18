import React from 'react';
import * as d3 from 'd3';
import useD3 from '../../hooks/useD3';

interface Props {
  data: { [candidate: string]: number }[];
};

type AnySelection = d3.Selection<any, unknown, null, undefined>;

const colors = [
  'pink', 'grape', 'violet', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime', 'yellow', 'orange', 'red'
];

const getColor = (candidate: string) => {
  return colors.includes(candidate) ? candidate : colors[Math.floor(Math.random() * colors.length)];
};

const RCVRoundsChart: React.FC<Props> = ({ data }) => {
  const [currentRoundNumber, setCurrentRoundNumber] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log('tick');
      setCurrentRoundNumber(current => (current + 1) % (data.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  const renderChart = React.useCallback((svg: d3.Selection<SVGSVGElement, unknown, null, undefined>) => {
    const margin = { left: 50, right: 0, top: 50, bottom: 50 };
    const height = 500 - margin.top;
    const width = 500 - margin.right;
    svg.attr('viewBox', `0 0 ${width} ${height}`).attr('font-size', '0.8rem');

    const currentRound = data[currentRoundNumber];
    const voterCount = d3.sum(Object.values(currentRound));

    const xScale = d3
      .scaleBand()
      .domain(Object.keys(currentRound))
      .range([margin.left, width])
    ;

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.sum(Object.values(data[0])) * 0.6])
      .nice()
      .range([height - margin.bottom, margin.top])
    ;

    if (!currentRoundNumber) {  
      svg.select('.x-axis')
        .call((g: AnySelection) => g
          .attr('transform', `translate(0, ${height - margin.bottom})`)
          .call(d3.axisBottom(xScale))
        )
      ;
  
      svg.select('.y-axis')
        .call((g: AnySelection) => g
          .attr('transform', `translate(${margin.left}, 0)`)
          .call(d3.axisLeft(yScale))
        )
      ;
  
      const barWidth = 0.6;
      svg.select('.plot-area')
        .attr('transform', `translate(${margin.left}, 0)`)
        .attr('x', 0)
        .attr('y', 0)
        .selectAll('.bar')
        .data(Object.entries(currentRound))
        .join('rect')
          .attr('class', 'bar')
          .attr('fill', (d: [string, number]) => `var(--${getColor(d[0])})`)
          .attr('x', (_: any, i: number) => (i + ((1 - barWidth) / 2)) * xScale.bandwidth())
          .attr('y', (d: [string, number]) => yScale(d[1]))
          .attr('width', xScale.bandwidth() * barWidth)
          .attr('height', (d: [string, number]) => height - margin.bottom - yScale(d[1]))
          .attr('stroke', 'black')
      ;

      svg.select('.plot-area').selectAll('.bar-label')
        .data(Object.entries(currentRound))
        .join('text')
          .attr('class', 'bar-label')
          .attr('fill', 'black')
          .attr('x', (_: any, i: number) => (i + 0.5) * xScale.bandwidth())
          .attr('y', (d: [string, number]) => yScale(d[1]) - 6)
          .attr('text-anchor', 'middle')
          // .text((d: [string, number]) => d[1] ? `${Math.round(d[1] / voterCount * 1_000) / 10}%` : '')
          .text((d: [string, number]) => d[1] ? d[1] : '')
      ;
  
      svg.select('.win-threshold')
        .attr('x1', margin.left)
        .attr('y1', yScale(voterCount / 2))
        .attr('x2', width)
        .attr('y2', yScale(voterCount / 2))
        .attr('stroke-width', 1)
        .attr('stroke', 'black')
        .attr('stroke-dasharray', '5,5')
      ;

      svg.select('.win-threshold-label')
        .attr('x', width)
        .attr('y', yScale(voterCount / 2))
        .attr('alignment-baseline', 'middle')
        .text(`${voterCount / 2} votes`)
      ;
    } else {
      svg.select('.plot-area').selectAll('.bar')
        .transition()
        .duration(500)
        .attr('y', (_: any, i) => yScale(currentRound[Object.keys(currentRound)[i]]))
        .attr('height', (_: any, i) => height - margin.bottom - yScale(currentRound[Object.keys(currentRound)[i]]))
      ;

      svg.selectAll('.plot-area .bar-label')
        .transition()
        .duration(500)
        .attr('y', (_: any, i) => yScale(currentRound[Object.keys(currentRound)[i]]) - 6)
        .text((_: any, i: number) => {
          const d: number = currentRound[Object.keys(currentRound)[i]];
          return d ? d : '';
          // return d ? `${Math.round(d / voterCount * 1_000) / 10}%` : '';
        })
      ;

      svg.select('.win-threshold')
        .transition()
        .duration(500)
        .attr('y1', yScale(voterCount / 2))
        .attr('y2', yScale(voterCount / 2))
      ;

      svg.select('.win-threshold-label')
        .transition()
        .duration(500)
        .attr('y', yScale(voterCount / 2))
        .text(`${voterCount / 2}`)
      ;
    }
  }, [currentRoundNumber]);

  const svgRef = useD3(renderChart, [data, currentRoundNumber]);

  return (
    <svg ref={svgRef} height={500} width="100%">
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
      <line className="win-threshold" />
      <text className="win-threshold-label" x={10} y={10}/>
    </svg>
  );
};

const MemoizedRCVRoundsChart = React.memo(RCVRoundsChart);

export default RCVRoundsChart;
export { MemoizedRCVRoundsChart };
