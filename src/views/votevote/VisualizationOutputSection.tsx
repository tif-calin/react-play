import React from 'react';
import styled from 'styled-components';
import BarChartWithRounds from './BarChartWithRounds';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  flex-basis: 60%;
  flex-grow: 1;

  & h3 {
    display: flex;
    justify-content: space-between;
  
    & > span {
      font-size: 0.8rem;
      font-weight: 300;
      align-self: flex-end;
    }
  }
`;

interface Props {
  datasets: { 
    title: string, 
    explanation: string,
    data: { [color: string]: number }[] 
  }[];
};

const getWinners = (round: { [name: string]: number }) => {
  const max = Math.max(...Object.values(round));
  return Object.keys(round).filter(key => round[key] === max);
};

const VisualizationOutputSection: React.FC<Props> = ({ datasets }) => {
  return (
    <Container>
      {datasets.map(({ title, data }, i) => (
        <div key={i}>
          <h3>{title}: <span>{getWinners(data.at(-1) || {}).join(', ')}</span></h3>
          {data.length && <BarChartWithRounds data={data}/>}
        </div>
      ))}
    </Container>
  );
};

export default VisualizationOutputSection;
