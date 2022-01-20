import React from 'react';
import * as d3 from 'd3';

interface Props {
  scale: d3.ScaleLinear<number, number>;
};

const Axis: React.FC<Props> = ({ scale }) => {
  const ticks = React.useMemo(() => {
    return scale.ticks().map(value => ({
      value,
      xOffset: scale(value)
    }));
  }, [scale]);

  return (<>
    <path
      fill="none" stroke="currentColor"
      d={`M 0 ${scale.range()[0]} V ${scale.range()[1]}`}
    />
    {ticks.map(({ value, xOffset }) => (
      <g key={value} transform={`translate(0, ${xOffset})`}>
        <line x2={-4} stroke="currentColor" />
        <text key={value} style={{
          textAnchor: 'end',
          alignmentBaseline: 'central',
          transform: 'translateX(-6px)'
        }}>{value}</text>
      </g>
    ))}
  </>);
};

export default Axis;
