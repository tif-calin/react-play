import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../components/layout/PageTitle';
import { MemoizedInputSection } from './InputSection';
import VisualizationOutputSection from './VisualizationOutputSection';

const Wrapper = styled.div`  
  * { font-family: 'Josefin Sans', sans-serif; }

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
`;

interface Props {};

const VoteVotePage: React.FC<Props> = () => {
  const [rcv, setRCV] = React.useState<{ [color: string]: number }[]>([]);
  const [coombs, setCoombs] = React.useState<{ [color: string]: number }[]>([]);
  const [culi, setCuli] = React.useState<{ [color: string]: number }[]>([]);

  const datasets = React.useMemo(() => [
    { 
      title: 'Standard Ranked Choice Vote', data: rcv, explanation: 'In typical RCV, voters rank the candidates by preference. Each round, the candidate with the fewest votes gets eliminated and the voters who voted for that candidate have their votes move to their next best choice.'
    },
    { 
      title: 'Coomb\'s RCV', data: coombs, explanation: 'Coomb\'s method, works almost exactly the same way as typical RCV, but instead of eliminating the candidate with the fewest first-choice votes, you elimate the candidate with the most last-choice votes each round.' 
    },
    { 
      title: 'Culi\'s RCV', data: culi, explanation: 'While studying these methods, I thought, why not have the best of both worlds and combine Coombs and regular RCV? With this method, each round we take the number of first-choice votes and subtract the number of last-choice votes for each candidate. Then we eliminate based on the resulting scores.\n\nPS sorry for being cringey and naming it after myself. idk what to call it' 
    },
  ], [rcv, coombs, culi]);

  return (
    <div>
      <PageTitle>VoteVote</PageTitle>

      <Wrapper>
        <MemoizedInputSection setRCV={setRCV} setCoombs={setCoombs} setCuli={setCuli} />
        <VisualizationOutputSection datasets={datasets} />
      </Wrapper>
    </div>
  );
};

export default VoteVotePage;
