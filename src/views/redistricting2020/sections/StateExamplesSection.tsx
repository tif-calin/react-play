import React, { useMemo } from 'react';
import styled from 'styled-components';
import stateRedistrictingData from '../data';
import electionData from '../../../data/elections';
import Island from '../island';

interface Props {
  aVal?: number;
  bVal?: number;
};

const Results = styled.div`
  & hr {
    margin: 0.5rem 0;
  }
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
        acc[0] += 1 - r2020;
        acc[2] += r2020;
      }
      if (typeof district[2022] === 'number') {
        const r2022 = activation(district[2022], aVal, bVal);
        acc[1] += 1 - r2022;
        acc[3] += r2022;
      }
      return acc;
    }, [0, 0, 0, 0]).map(x => x.toFixed(1));
  }, [selectedState, aVal, bVal]);

  const [seats2020, seats2022] = useMemo(() => {
    const data = stateRedistrictingData[selectedState];
    return [
      data.reduce((acc, curr) => curr[2020] ? acc + 1 : acc, 0),
      data.reduce((acc, curr) => curr[2022] ? acc + 1 : acc, 0)
    ];
  }, [selectedState]);

  const partisanLean = useMemo(() => {
    const seats = stateRedistrictingData[selectedState].length;

    const stateSlug = selectedState.toLowerCase().replaceAll(' ', '_');
    const data = (electionData)[stateSlug as keyof typeof electionData];
    const prevElection = data[0] as number[];
    const [demVotes, repVotes] = prevElection;
    const total = demVotes + repVotes;
    return [
      (seats * demVotes / total).toFixed(1), 
      (seats * repVotes / total).toFixed(1)
    ];
  }, [selectedState]);

  return (
    <Island
      title="State examples"
    >
      <select 
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        {statesList.map(state => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <Results>
        <p>Total seats: {seats2020} --&gt; {seats2022}</p>
        <hr/>
        <p>Projected 2020 seats: {dSum2020}D-{rSum2020}R</p>
        <p>Projected 2022 seats: {dSum2022}D-{rSum2022}R</p>
        <hr/>
        <p>How it should be if it was fair: {partisanLean[0]}D-{partisanLean[1]}R</p>
        {/* <p>How it currently is: 5D-4R</p> */}
      </Results>
    </Island>
  );
};

export default StateExamplesSection;
