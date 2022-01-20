import React from 'react';
import styled from 'styled-components';
import colors from '../../data/colors';
import { calcBallotPreferences, rankedChoiceVote } from './utils';

const Container = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  min-width: 300px;
  flex-basis: 40%;
  flex-grow: 1;

  border: 1px dashed;

  & > fieldset {
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border: none;
  }

  & p {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

const ColorRoster = styled.output`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin: 0.5rem;

  & > * {
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    place-items: center;
    place-content: center;
    color: transparent;

    &:hover {
      color: black;
    }
  }
`;

interface Props {
  setData: (data: { [color: string]: number }[]) => void;
};
type ColorName = keyof typeof colors;

const InputSection: React.FC<Props> = ({ setData }) => {
  const [candidates, setCandidates] = React.useState<ColorName[]>(['red', 'yellow', 'green', 'blue']);
  const [voters, setVoters] = React.useState<ColorName[]>([
    'amber', 'aqua', 'azure', 'black', 'cyan', 'gold', 'grey', 'indigo', 
    'jade', 'lime', 'magenta', 'maroon', 'mint', 'navy', 'olive', 'orange', 
    'pink', 'purple', 'red', 'silver', 'teal', 'turquoise', 'white', 'yellow'
  ]);

  React.useEffect(() => {
    const rounds = rankedChoiceVote(candidates, voters.map(v => calcBallotPreferences(v, candidates)));
    console.log(rounds);
    setData(rounds);
  }, [candidates, voters, setData]);

  const [selectedCandidate, setSelectedCandidate] = React.useState<ColorName>('acid');
  const [selectedVoter, setSelectedVoter] = React.useState<ColorName>('acid');

  const addCandidate = () => {
    if (selectedCandidate) setCandidates(arr => [...arr, selectedCandidate]);
    setSelectedCandidate(Object.keys(colors)
      .filter((color) => color !== selectedCandidate && !candidates.includes(color as ColorName))[0] as ColorName
    );
  };

  const addVoter = () => {
    if (selectedVoter) setVoters(arr => [...arr, selectedVoter]);
    setSelectedVoter(Object.keys(colors)[0] as ColorName);
  };

  const removeCandidate = (color: ColorName) => setCandidates(arr => arr.filter(c => c !== color));

  const removeVoter = (color: ColorName) => setVoters(arr => arr.filter(c => c !== color));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container onSubmit={handleSubmit}>
      <fieldset name="candidates">
        <select name="candidate" value={selectedCandidate} onChange={e => setSelectedCandidate(e.target.value as ColorName)}>
          {Object.entries(colors).filter(([name]) => !candidates.includes(name as ColorName)).map(([name]) => <option key={name}>{name}</option>)}
        </select>
        <button onClick={addCandidate}>add candidate</button>
      </fieldset>
      <ColorRoster name="candidates">
        {candidates.map((name) => (
          <div 
            key={name} 
            style={{ backgroundColor: colors[name] }} 
            onClick={() => { setSelectedCandidate(name); removeCandidate(name); }}
            title={`${name} (${colors[name]})`}
          >x</div>
        ))}
      </ColorRoster>

      <fieldset name="voters">
        <select name="voter">
          {Object.entries(colors).map(([name]) => <option key={name}>{name}</option>)}
        </select>
        <button onClick={addVoter}>add voter</button>
      </fieldset>
      <ColorRoster name="candidates">
        {voters.map((name, i) => (
          <div 
            key={i} 
            style={{ backgroundColor: colors[name] }} 
            onClick={() => removeVoter(name)}
            title={`${name} (${colors[name]})`}
          >x</div>))}
      </ColorRoster>

      <p>
        Voter preferences are calculated based on RGB distance between colors. Each voter will prefer the closest candidate.
      </p>
    </Container>
  );
};

const MemoizedInputSection = React.memo(InputSection);

export default InputSection;
export { MemoizedInputSection };
