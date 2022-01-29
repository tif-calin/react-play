import React from 'react';

interface Props {
  scale: d3.ScaleBand<string>;
};

const XAxis: React.FC<Props> = ({ scale }) => {
  const barWidth = scale.bandwidth();
  const tickVariations = 1 + Math.round(80 / Number(barWidth));

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
    {ticks.map(({ value, xOffset }, i) => {
      const PRIME = 17;
      const offset = (((i + 1) * PRIME) % tickVariations) * 16;

      return <g key={value} transform={`translate(${xOffset}, 0)`}>
        <line y2={8 + offset} stroke="currentColor" strokeDasharray={"3, 3"} />
        <text key={value} style={{
          textAnchor: 'middle',
          transform: `translateY(${20 + offset}px)`
        }}>{value}</text>
      </g>;
    })}
  </>);
};

export default XAxis;