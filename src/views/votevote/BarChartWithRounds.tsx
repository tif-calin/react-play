import React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

import colors from '../../data/colors';
import useInterval from '../../hooks/useInterval';
import useChartSettings from './hooks/useChartSettings';
import Bar from './chart/Bar';
import YAxis from './chart/YAxis';
import XAxis from './chart/XAxis';

interface Props {
  data: { [color: string]: number }[];
};

const Wrapper = styled.div`
  max-height: calc(300px + 10vh);
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 40,
};
const howManyTimesLongerTheLastRoundShouldBe = 3;

const BarChartWithRounds: React.FC<Props> = ({ data }) => {
  const [ ref, dms ] = useChartSettings();
  const width = dms.width || 500;
  const height = dms.height || 500;
  const [currentRoundNumber, setCurrentRoundNumber] = React.useState(0);

  const candidates = React.useMemo(() => Object.keys(data[0]), [data]);
  const currentRound: { [color: string]: number } = React.useMemo(() => {
    return candidates.reduce((acc, curr) => ({
      ...acc,
      [curr]: Number(data[Math.min(currentRoundNumber, data.length - 1)][curr])
    }), {});
  }, [data, currentRoundNumber]);
  const threshold = Math.floor(d3.sum(Object.values(currentRound)) / 2) + 1;

  useInterval(() => {
    setCurrentRoundNumber(current => (current + 1) % (data.length + howManyTimesLongerTheLastRoundShouldBe));
  }, 2000);

  const xScale = React.useMemo(() => {
    return d3.scaleBand()
      .domain(Object.keys(currentRound))
      .range([margin.left, width - margin.right])
    ;
  }, [data, width, margin.left, margin.right]);

  const yScale = React.useMemo(() => {
    return d3.scaleLinear()
      .domain([0, Math.max(
        d3.sum(Object.values(data[0])) * 0.6, 
        Math.max(...Object.values(data?.at(-1) || {}))) * 1.05
      ])
      .range([height - margin.bottom - margin.top, margin.top])
    ;
  }, [data, height, margin.top, margin.bottom]);

  return (<Wrapper ref={ref}>
    <span>Round {Math.min(currentRoundNumber + 1, data.length)}</span>
    <svg viewBox={`0 0 ${width} ${height}`}>
      <g className="plot-area">
        {Object.entries(currentRound).map(([color, count]) => {
          const y = yScale(count || 0);
          const x = xScale(color);
          return (
            <Bar
              key={color}
              x={x}
              y={y}
              width={xScale.bandwidth()}
              height={height - margin.bottom - margin.top - y || 0}
              fill={colors[color as keyof typeof colors]}
              stroke="black"
              strokeWidth={1}
            />
          );
        })}
      </g>
      <g transform={`translate(${margin.left}, 0)`}>
        <YAxis scale={yScale} />
      </g>
      <g transform={`translate(0, ${height - margin.top - margin.bottom})`}>
        <XAxis scale={xScale} />
      </g>
      <g>
        <path
          fill="none" stroke="currentColor" strokeDasharray="5, 5"
          d={`M ${xScale.range()[0]} ${yScale(threshold)} H ${xScale.range()[1]}`}
        />
        <text
          x={xScale.range()[1] + 4}
          y={yScale(threshold)}
          alignmentBaseline='middle'
        >{threshold}</text>
      </g>
    </svg>
  </Wrapper>);
};

const MemoizedBarChartWithRounds = React.memo(BarChartWithRounds);

export default BarChartWithRounds;
export { MemoizedBarChartWithRounds };
