import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../components/layout/PageTitle';
import { MemoizedInputSection } from './InputSection';
import VisualizationOutputSection from './VisualizationOutputSection';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100..700&display=swap');
  font-family: 'Josefin Sans', sans-serif;

  --shadow-color: 0deg 0% 80%;
  --shadow:
    0 0 2px hsl(var(--shadow-color) / 0.25),
    0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.24),
    0.7px 1.1px 1.2px -0.5px hsl(var(--shadow-color) / 0.22),
    1.3px 1.9px 2.2px -1.1px hsl(var(--shadow-color) / 0.2),
    2.3px 3.4px 3.8px -1.6px hsl(var(--shadow-color) / 0.18),
    4px 5.9px 6.7px -2.1px hsl(var(--shadow-color) / 0.16),
    6.7px 9.9px 11.2px -2.7px hsl(var(--shadow-color) / 0.14),
    10.7px 15.7px 17.8px -3.2px hsl(var(--shadow-color) / 0.12),
    16.3px 23.9px 27.1px -3.7px hsl(var(--shadow-color) / 0.1)
  ;
  --shadow-inset:
    inset 0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.24),
    inset 0.7px 1.1px 1.2px -0.5px hsl(var(--shadow-color) / 0.22),
    inset 1.3px 1.9px 2.2px -1.1px hsl(var(--shadow-color) / 0.2),
    inset 2.3px 3.4px 3.8px -1.6px hsl(var(--shadow-color) / 0.18),
    inset 4px 5.9px 6.7px -2.1px hsl(var(--shadow-color) / 0.16),
    inset 6.7px 9.9px 11.2px -2.7px hsl(var(--shadow-color) / 0.14),
    inset 10.7px 15.7px 17.8px -3.2px hsl(var(--shadow-color) / 0.12),
    inset 16.3px 23.9px 27.1px -3.7px hsl(var(--shadow-color) / 0.1)
  ;

  display: flex;
  flex-wrap: wrap;
  background: whitesmoke;

  & > * {
    padding: 1.5rem;
  }

  & button, select {
    padding: 0.15rem 0.2rem;
    line-height: 1rem;
    width: 7.5rem;
    border: none;
    transition: box-shadow 0.2s;
    border-radius: 0.25rem;
  }

  & button {
    border: 1px solid hsl(var(--shadow-color));

    &:hover {
      box-shadow: var(--shadow);
    }
  }

  & select {
    &:hover {
      box-shadow: var(--shadow-inset);
    }
  }
`;

interface Props {};

const VoteVotePage: React.FC<Props> = () => {
  const [rounds, setRounds] = React.useState<{ [color: string]: number }[]>([]);

  return (
    <div>
      <PageTitle>VoteVote</PageTitle>

      <Wrapper>
        <MemoizedInputSection setData={setRounds} />
        <VisualizationOutputSection data={rounds} />
      </Wrapper>
    </div>
  );
};

export default VoteVotePage;
