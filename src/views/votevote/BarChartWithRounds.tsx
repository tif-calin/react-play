import React from 'react';
import styled from 'styled-components';
import colors from '../../data/colors';

interface Props {
  data: { [color: string]: number }[];
};

const StyledSVG = styled.svg`
  box-shadow: var(--shadow);
`;

const BarChartWithRounds: React.FC<Props> = () => {
  const ref = React.useRef<SVGSVGElement>(null);
  const [currentRoundNumber, setCurrentRoundNumber] = React.useState(0);

  return (
    <StyledSVG ref={ref} height={500} width="100%">
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
      <line className="win-threshold" />
      <text className="win-threshold-label" x={10} y={10}/>
    </StyledSVG>
  );
};

const MemoizedBarChartWithRounds = React.memo(BarChartWithRounds);

export default BarChartWithRounds;
export { MemoizedBarChartWithRounds };
