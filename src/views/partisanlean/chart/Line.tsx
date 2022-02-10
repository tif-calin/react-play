import React from 'react';

interface Props {
  points: number[][];
  label?: string;
  [prop: string]: any;
};

const Line: React.FC<Props> = ({ points, label, ...props }) => {
  return (<>
    <polyline
      fill="none" stroke="black"
      points={points.map(coor => coor.join(',')).join(' ')}
      {...props}
    />
    {label && <text
      x={points[0][0] + 24} y={points[0][1]}
      alignmentBaseline="middle"
    >{label}</text>}
  </>);
};

export default Line;
