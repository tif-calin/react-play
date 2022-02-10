import React from 'react';
import styled from 'styled-components';

const Ticks = styled.g`

  & > text {
    font-weight: bold;
    pointer-events: none;
  }
`;

interface Props {
  scale: d3.ScaleLinear<number, number>;
};

const XAxis: React.FC<Props> = ({ scale }) => {
  const tickCount = (scale.domain()[1] - scale.domain()[0]);

  const ticks = React.useMemo(() => {
    return scale.nice().ticks(tickCount).map(value => ({
      value,
      xOffset: Number(scale(value))
    }));
  }, [scale]);

  return (<>
    <path
      fill="none" stroke="currentColor" strokeDasharray="5, 3"
      d={`M ${scale.range()[0]} 0 H ${scale.range()[1]}`}
    />
    {ticks.filter(tick => !(Number(tick.value) % 4)).map(({ value, xOffset }) => {
      return (
        <Ticks key={value} transform={`translate(${xOffset}, 0)`}>
          <line y1={-8} y2={8} stroke="currentColor" />
          <text key={value} style={{
            textAnchor: 'middle',
            transform: `translateY(${20}px)`
          }}>{Number(value) % 12 ? '' : value}</text>
        </Ticks>
      );
    })}
  </>);
};

export default XAxis;