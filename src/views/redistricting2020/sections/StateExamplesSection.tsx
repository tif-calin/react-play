import React, { useMemo } from 'react';
import styled from 'styled-components';
import stateRedistrictingData from '../data';
import electionData from '../../../data/elections';
import Island from '../Island';
import ExternalLink from '../../../components/A';

interface Props {
  aVal?: number;
  bVal?: number;
};

const Results = styled.div`
  & hr {
    margin: 0.5rem 0;
  }

  & .note {
    font-weight: 200;
    font-size: 0.8rem;
  }
`;

const StyledSelect = styled.select`
  max-width: 16rem;
  background: var(--black);
  color: var(--white);
  box-shadow: var(--shadow);
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 500;
`;

const statesList = Object.keys(stateRedistrictingData);

const activation = (x: number, A = 16, B = 400) => {
  const C = A + A*B*Math.pow(0.5-x, 2);

  return 1 / (1 + Math.exp(-C * (x-0.5)));
};

const StateExamplesSection: React.FC<Props> = ({
  aVal = 16,
  bVal = 400
}) => {
  const [selectedState, setSelectedState] = React.useState(statesList[0]);

  const [dSum2020, dSum2022, rSum2020, rSum2022] = useMemo(() => {
    const data = stateRedistrictingData[selectedState];
    return data.reduce((acc, district) => {
      if (typeof district[2020] === 'number') {
        const r2020 = activation(district[2020], aVal, bVal);
        acc[0] += r2020;
        acc[2] += 1 - r2020;
      }
      if (typeof district[2022] === 'number') {
        const r2022 = activation(district[2022], aVal, bVal);
        acc[1] += r2022;
        acc[3] += 1 - r2022;
      }
      return acc;
    }, [0, 0, 0, 0]).map(x => x.toFixed(1));
  }, [selectedState, aVal, bVal]);

  const {
    seats2020, seats2022,
    fair2020, fair2022,
   } = useMemo(() => {
    const data = stateRedistrictingData[selectedState];
    const seats2020 = data.reduce((acc, curr) => curr[2020] ? acc + 1 : acc, 0);
    const seats2022 = data.reduce((acc, curr) => curr[2022] ? acc + 1 : acc, 0);

    const stateSlug = selectedState.toLowerCase().replaceAll(' ', '_');
    const data2 = (electionData)[stateSlug as keyof typeof electionData];
    const prevElection = data2[0] as number[];
    const [demVotes, repVotes] = prevElection;
    const total = demVotes + repVotes;

    return {
      seats2020,
      seats2022,
      fair2020: `${(seats2020 * demVotes / total).toFixed(1)}D-${(seats2020 * repVotes / total).toFixed(1)}R`,
      fair2022: `${(seats2022 * demVotes / total).toFixed(1)}D-${(seats2022 * repVotes / total).toFixed(1)}R`,
    };
  }, [selectedState]);

  return (
    <Island
      title="State examples"
    >
      <StyledSelect 
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        {statesList.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </StyledSelect>
      <Results>
        <p>Total seats: {seats2020}{(seats2022 !== seats2020) && <span>&#8594; {seats2022}</span>}</p>
        <hr/>
        <p>Projected 2020 seats: {dSum2020}D-{rSum2020}R</p>
        <p>Projected 2022 seats: {dSum2022}D-{rSum2022}R</p>
        <hr/>
        <p>
          How it should be if it was fair: {fair2020}
          {seats2020 !== seats2022 && <span>&#8594; {fair2022}</span>}
        </p>
        <p className="note">A district's partisan lean is based off their <ExternalLink href="https://en.wikipedia.org/wiki/Cook_Partisan_Voting_Index">PVI</ExternalLink> which is based off how they voted in the past 2 elections compared to the rest of the nation.</p>
        {/* <p>How it currently is: 5D-4R</p> */}
      </Results>
    </Island>
  );
};

export default StateExamplesSection;
