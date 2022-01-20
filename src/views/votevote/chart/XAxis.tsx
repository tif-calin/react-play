import React from 'react';

interface Props {
  scale: d3.ScaleBand<string>;
};

const XAxis: React.FC<Props> = ({ scale }) => {
  const barWidth = scale.bandwidth();

  const ticks = React.useMemo(() => {
    return scale.domain().map(value => ({
      value,
      xOffset: Number(scale(value)) + barWidth / 2
    }));
  }, [scale]);

  return (<>
    <path
      fill="none" stroke="currentColor"
      d={`M ${scale.range()[0]} 0 H ${scale.range()[1]}`}
    />
    {ticks.map(({ value, xOffset }, i) => (
      <g key={value} transform={`translate(${xOffset}, 0)`}>
        <line y2={!(i % 2) ? 8 : 20} stroke="currentColor" />
        <text key={value} style={{
          textAnchor: 'middle',
          transform: `translateY(${!(i % 2) ? 1.25 : 2.25}rem)`
        }}>{value}</text>
      </g>
    ))}
  </>);
};

export default XAxis;