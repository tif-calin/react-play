import React, { ReactElement, useMemo } from 'react';
import styled from 'styled-components';
import stateRedistrictingData from '../data';
import electionData from '../../../data/elections';
import Island from '../Island';
import ExternalLink from '../../../components/A';
import DvR from '../DvR';

interface Props {
  aVal?: number;
  bVal?: number;
};

const Results = styled.div`
  width: calc(10rem + 40%);
  max-width: 100%;

  // box-shadow: var(--shadow-border);
  // border-radius: 0.25rem;
  // padding: 0.5rem;

  & > p:not(.note) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }

  & hr {
    margin: 0.5rem 0;
  }

  & .note {
    margin-top: 1rem;
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

const InlineYearSelect: any = ({ handleChange }: any) => {
  return (
    <select defaultValue="0" onChange={handleChange}>
      <option value="0">2020</option>
      <option value="1">2016</option>
      <option value="2">2012</option>
      <option value="3">2008</option>
      <option value="4">2004</option>
      <option value="5">2000</option>
    </select>
  );
};

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
  const [selectedYear, setSelectedYear] = React.useState(0);

  const changeYear = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(parseInt(e.target.value));
  }, []);

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
    const prevElection = data2[selectedYear] as number[];
    const [demVotes, repVotes] = prevElection;
    const total = demVotes + repVotes;

    return {
      seats2020,
      seats2022,
      fair2020: [(seats2020 * demVotes / total).toFixed(1), (seats2020 * repVotes / total).toFixed(1)],
      fair2022: [(seats2022 * demVotes / total).toFixed(1), (seats2022 * repVotes / total).toFixed(1)],
    };
  }, [selectedState, selectedYear]);

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
        <p>Total seats: <span>{seats2020}{(seats2022 !== seats2020) && <span>&#8594; {seats2022}</span>}</span></p>
        <hr/>
        <p>Projected 2020 seats: <DvR d={dSum2020} r={rSum2020} /></p>
        <p>Projected 2022 seats: <DvR d={dSum2022} r={rSum2022} /></p>
        <hr/>
        <p>
          How it should be if it was fair: <span>
            <DvR d={fair2020[0]} r={fair2020[1]} />
            {seats2020 !== seats2022 && <span>&#8594; <DvR d={fair2022[0]} r={fair2022[1]} /></span>}
          </span>
        </p>
        <p className="note">A district's partisan lean is based off their <ExternalLink href="https://en.wikipedia.org/wiki/Cook_Partisan_Voting_Index">PVI</ExternalLink> which is based off how they voted in the past 2 elections compared to the rest of the nation. A "fair" distribution of seats is based off how that state voted in the <InlineYearSelect handleChange={changeYear} /> election.</p>
        {/* <p>How it currently is: 5D-4R</p> */}
      </Results>
    </Island>
  );
};

export default StateExamplesSection;
