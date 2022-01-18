import React from 'react';
import useD3 from '../../hooks/useD3';

interface Props {
  data: { [candidate: string]: number }[];
};

const RCVRoundsChart: React.FC<Props> = ({ data }) => {
  const svgRef = useD3(() => {}, [data]);

  return (
    <svg ref={svgRef}>
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
};

const MemoizedRCVRoundsChart = React.memo(RCVRoundsChart);

export default RCVRoundsChart;
export { MemoizedRCVRoundsChart };
