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
  gap: 2rem;

  & > * {
    background-color: #fff8;
    box-shadow: var(--shadow), 0 0 3px hsl(var(--shadow-color));
    border-radius: 0.25rem;
    padding: 1rem;
  }

  & h3 {
    display: flex;
    justify-content: space-between;
  
    & > span {
      font-size: 1rem;
      font-weight: 300;
      align-self: flex-end;
    }
  }

  & details {
    font-size: 0.8rem;
    line-height: 1.25rem;
    padding: 0.5rem;
    border-radius: 0.25rem;

    &[open] {
      border: 1px solid hsl(var(--shadow-color)); 

      & summary { 
        border-bottom: 1px solid hsl(var(--shadow-color)); 
        padding-bottom: 0.25rem;
        margin-bottom: 0.25rem;
      }
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
      {datasets.map(({ title, explanation, data }, i) => (
        <div key={i}>
          <h3>{title} <span>Winner(s): {getWinners(data.at(-1) || {}).join(', ')}</span></h3>
          {data.length && <BarChartWithRounds data={data}/>}
          <details><summary>Explanation</summary>{explanation}</details>
        </div>
      ))}
    </Container>
  );
};

export default VisualizationOutputSection;
