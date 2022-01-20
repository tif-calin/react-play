import React from 'react';
import styled from 'styled-components';
import RCVRoundsChart from '../charts/RCVRoundsChart';
import BarChartWithRounds from './BarChartWithRounds';

const Container = styled.section`
  display: flex;
  min-width: 200px;
  flex-basis: 60%;
  flex-grow: 1;
`;

const fakeData = [
  { red: 6, green: 3, blue: 12, yellow: 6 }, 
  { red: 7, green: 0, blue: 13, yellow: 6 },
  { red: 10, green: 0, blue: 14, yellow: 0 },
];

interface Props {
  data: { [color: string]: number }[];
};

const VisualizationOutputSection: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.length && <BarChartWithRounds data={data} />}
    </Container>
  );
};

export default VisualizationOutputSection;
