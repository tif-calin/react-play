import React from 'react';
import styled from 'styled-components';
import colors from '../../data/colors';
import { approval, coombsRCV, culiRCV, rankedChoiceVote } from './utils/votingMethods';
import { rankClosestRGB, rankClosestHSL, scoreClosestHSL, scoreClosestRGB } from './utils/colorDistance';
import useRoster from './hooks/useRoster';
import Ballot from './utils/Ballot';

const colorDistanceRankingFncs = {
  'rgb': rankClosestRGB,
  'hsl': rankClosestHSL,
};

const colorDistanceScoringFncs = {
  'rgb': scoreClosestRGB,
  'hsl': scoreClosestHSL,
};

const Container = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  min-width: 300px;
  flex-basis: 40%;
  flex-grow: 1;
  background: whitesmoke;
  box-shadow: var(--shadow), 0 0 3px hsl(var(--shadow-color));

  border: 1px dashed;

  & > fieldset {
    padding: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border: none;
  }

  & p:last-of-type {
    margin-top: auto;
    font-size: 0.8rem;
    font-weight: 300;

    & > span {
      font-weight: 600;
      cursor: pointer;
    }
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

const ColorRoster = React.memo(styled.output`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin: 0.5rem;

  & > div {
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    place-items: center;
    place-content: center;
    color: transparent;

    &:hover span {
      color: white;
      mix-blend-mode: exclusion;
    }
  }
`);

interface Props {
  setRCV: (data: { [color: string]: number }[]) => void;
  setCoombs: (data: { [color: string]: number }[]) => void;
  setCuli: (data: { [color: string]: number }[]) => void;
};
type ColorName = keyof typeof colors;

const getWinners = (round: { [name: string]: number }) => {
  if (!round) return [];

  const max = Math.max(...Object.values(round));
  return Object.keys(round).filter(key => round[key] === max);
};

const InputSection: React.FC<Props> = ({ setRCV, setCoombs, setCuli }) => {
  // const results = React.useRef<{ [method: string]: string[] }>({});
  const [results, setResults] = React.useState<{ [method: string]: string[] }>({});

  // Candidate roster
  const {
    selected: selectedCandidate, setSelected: setSelectedCandidate,
    roster: candidates, add: addCandidate, remove: removeCandidate, clear: clearCandidates,
  } = useRoster(['tomato', 'icterine', 'chartreuse', 'turquoise', 'azure', 'heliotrope'], 'acid', true);

  // Voter roster
  const {
    selected: selectedVoter, setSelected: setSelectedVoter,
    roster: voters, add: addVoter, remove: removeVoter, clear: clearVoters,
  } = useRoster(Object.keys(colors) as ColorName[], 'acid');

  // calculate results
  const [distanceMap, setDistanceMap] = React.useState<keyof typeof colorDistanceRankingFncs>('rgb');
  React.useEffect(() => {
    const rankedVotes = voters.map(v => colorDistanceRankingFncs[distanceMap](v, candidates));
    const scoredVotes: { [candidate: string]: number }[] = voters
      .map(v => colorDistanceScoringFncs[distanceMap](v, candidates) as { [candidate: string]: number });
    ;
    
    const rcvRounds = rankedChoiceVote(candidates, rankedVotes);
    const coombsRounds = coombsRCV(candidates, rankedVotes);
    const culiRounds = culiRCV(candidates, rankedVotes);
    const approvalRound = approval(scoredVotes.map(v => Ballot.toApproval(v, 0)));

    // results.current = {
    //   irv: getWinners(rcvRounds.at(-1) as any),
    //   coombs: getWinners(coombsRounds.at(-1) as any),
    //   frontAndBack: getWinners(culiRounds.at(-1) as any),
    // };
    setResults({
      irv: getWinners(rcvRounds.at(-1) as any),
      coombs: getWinners(coombsRounds.at(-1) as any),
      frontAndBack: getWinners(culiRounds.at(-1) as any),
      approval: getWinners(approvalRound as any),
    });

    // scoredVotes.slice(0, 12).forEach((v, i) => {
    //   console.log(`approval for ${voters[i]}`, Ballot.toApproval(v, 0));
    //   console.log(`ranked for ${voters[i]}`, Ballot.toRanked(v).flat());
    // });
    // console.log(approvalRound);

    setRCV(rcvRounds);
    setCoombs(coombsRounds);
    setCuli(culiRounds);
  }, [candidates, voters, setRCV, setCoombs, setCuli, distanceMap]);

  return (
    <Container onSubmit={e => e.preventDefault()}>
      <fieldset name="candidates">
        <select name="candidate" value={selectedCandidate} onChange={e => setSelectedCandidate(e.target.value as ColorName)}>
          {Object.entries(colors).filter(([name]) => !candidates.includes(name as ColorName)).map(([name]) => 
            <option key={name}>{name}</option>
          )}
        </select>
        <button onClick={() => addCandidate()}>add candidate</button>
        {candidates.length > 1 && <button disabled={candidates.length < 3} onClick={clearCandidates}>clear</button>}
      </fieldset>
      <ColorRoster name="candidates">
        {candidates.map((name) => (
          <div 
            key={name} 
            style={{ backgroundColor: colors[name] }} 
            onClick={() => { setSelectedCandidate(name); removeCandidate(name); }}
            title={`${name} (${colors[name]})`}
          ><span>x</span></div>
        ))}
        <span>{candidates.length} candidates</span>
      </ColorRoster>

      <fieldset name="voters">
        <select name="voter" value={selectedVoter} onChange={e => setSelectedVoter(e.target.value as ColorName)}>
          {Object.entries(colors).map(([name]) => <option key={name}>{name}</option>)}
        </select>
        <button onClick={() => addVoter()}>add voter</button>
        {voters.length > 1 && <button onClick={clearVoters} disabled={voters.length < 3}>clear voters</button>}
        {/* <button onClick={() => setVoters(v => [...v, ...Object.keys(colors)])}>one of each</button> */}
      </fieldset>
      <ColorRoster name="candidates">
        {voters.map((name, i) => (
          <div 
            key={i} 
            style={{ backgroundColor: colors[name] }} 
            onClick={() => { setSelectedVoter(name); removeVoter(name); }}
            title={`${name} (${colors[name]})`}
          ><span>x</span></div>
        ))}
        <span>{voters.length} voters</span>
      </ColorRoster>

      <div>
        All results:
        <ul>
          {Object.entries(results).map(([name, winners]) => (
            <li key={name}>
              <span>{name}</span>: {winners?.join(', ')}
            </li>
          ))}
        </ul>
      </div>

      <p>
        Voter preferences are calculated based on 
        <span 
          onClick={() => setDistanceMap(dm => dm === 'rgb' ? 'hsl' : 'rgb')}
        >{` ${distanceMap.toUpperCase()} `}</span> 
        distance between colors. Each voter will prefer the closest candidate.
      </p>
    </Container>
  );
};

const MemoizedInputSection = React.memo(InputSection);

export default InputSection;
export { MemoizedInputSection };
