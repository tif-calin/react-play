import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../components/layout/PageTitle';
import { MemoizedRCVRoundsChart } from './RCVRoundsChart';

interface Props {};

const TextArea: React.FC<any> = styled.textarea`
  width: 100%;
  height: 10rem;
  font-family: "Inconsolata", monospace;
  font-size: 0.8rem;
  line-height: 0.8rem;
  outline: none;
  border: 2px solid ${(props: any) => props.invalid ? 'var(--red)' : 'var(--green)'};
  border-radius: 0.25rem;
`;

const defaultRounds = [
  { red: 17, yellow: 12, green: 10, blue: 8 },  // 47 -> 24
  { red: 18, yellow: 12, green: 14, blue: 0 },  // 44 -> 23
  { red: 20, yellow: 0, green: 19, blue: 0 },   // 39 -> 20
];

const RCVRoundsChartPage: React.FC<Props> = () => {
  const [rounds, setRounds] = React.useState<{ [candidate: string]: number }[]>(defaultRounds);
  const [invalidInput, setInvalidInput] = React.useState(false);

  const handleRoundsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      setRounds(JSON.parse(e.target.value));
      setInvalidInput(false);
    } catch {
      setInvalidInput(true);
    }
  };

  return (
    <div>
      <PageTitle>RCV Rounds Animated Bar Chart</PageTitle>

      <MemoizedRCVRoundsChart data={rounds} />

      <TextArea 
        onChange={handleRoundsChange} 
        invalid={invalidInput} 
        defaultValue={JSON.stringify(rounds, null, 2)}
      />
    </div>
  );
};

export default RCVRoundsChartPage;
