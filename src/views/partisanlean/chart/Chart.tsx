import React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import useChartSettings from '../../votevote/hooks/useChartSettings';
import XAxis from './XAxis';

const Wrapper = styled.div`
  height: calc(300px + 10vh);
  max-height: calc(300px + 10vh);
  width: 100%;
  border: 1px solid black;
  padding-right: 3rem;

  & > svg {
    overflow: visible;
    max-height: 100%;
    max-width: 100%;
    background-color: #fafa9fa1;
  }
`;

const Circle = styled.circle`
  & + text {
    transition: opacity 0.1s;
  }

  &:hover + text {
    opacity: 1;
  }
`;

interface Props {
  data: number[];
  info?: any;
  latestYear?: number;
};

const LineGraph: React.FC<Props> = ({ data, latestYear = 2020, info }) => {
  const [ ref, { width, height } ] = useChartSettings();

  const oldestYear = latestYear - (data.length * 4);

  const xScale = React.useMemo(() => {
    return d3.scaleLinear()
      .domain([oldestYear, latestYear])
      .range([0, width])
    ;
  }, [data, latestYear, width]);

  const yScale = React.useMemo(() => {
    return d3.scaleDiverging()
      .domain([Math.min(-50, ...data) - 12, Math.max(50, ...data) + 12])
      .range([height, 0])
    ;
  }, [data, latestYear, height]);

  return (
    <Wrapper ref={ref}>
      <svg viewBox={`0 0 ${width} ${height}`}>
        <g className="plot">
          <polyline 
            fill="none" stroke="black"
            points={data.map((d, i) => `${xScale(latestYear - (i*4))},${yScale(d)}`).join(' ')}
          />
          {data.map((value, i) => {
            const x = xScale(latestYear - (i * 4));
            const y = yScale(value);

            return (<>
              <Circle
                key={i}
                cx={x} cy={y} r={4}
                fill={value > 0 ? 'blue' : 'red'}
              />
              <text
                x={x} y={y + (value > 0 ? -10 : 18)}
                textAnchor="middle"
                fontSize="14"
                opacity={!(i % 2) && Math.abs(value) > 5 ? 1 : 0}
              >{value.toFixed(1)}</text>
            </>);
          })}
          {info?.acronym && <text
            x={xScale(latestYear) + 24} y={yScale(data[0])}
            alignmentBaseline="middle"
          >{info.acronym}</text>}
        </g>
        <g className="x-axis" transform={`translate(0, ${yScale(0)})`}>
          <XAxis scale={xScale} />
        </g>
        <g className="y-axis"></g>
        {/* <g>
          <path 
            className="even-line"
            fill="none" stroke="currentColor" strokeDasharray="5, 5"
            d={`M ${xScale(oldestYear)} ${yScale(0)} H ${xScale(latestYear)}`}
          />
        </g> */}
      </svg>
    </Wrapper>
  );
};

export default LineGraph;
