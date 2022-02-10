import React from 'react';

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
      fill="none" stroke="currentColor" strokeDasharray="3, 5"
      d={`M ${scale.range()[0]} 0 H ${scale.range()[1]}`}
    />
    {ticks.filter(tick => !(Number(tick.value) % 4)).map(({ value, xOffset }) => {
      return (
        <g key={value} transform={`translate(${xOffset}, 0)`}>
          <line y1={-8} y2={8} stroke="currentColor" />
          <text key={value} style={{
            textAnchor: 'middle',
            transform: `translateY(${20}px)`
          }}>{Number(value) % 12 ? '' : value}</text>
        </g>
      );
    })}
  </>);
};

export default XAxis;