import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../components/layout/PageTitle';
import electionData from '../../data/elections';
import Chart from './chart';

const yearlyResults = electionData.national.map(([ dem, rep ]) => {
  return 100 * (dem - rep) / (dem + rep);
});

const states = electionData.elections;

const Page = styled.div`
  font-family: "Inconsolata", monospace;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > h3 { margin-top: 0.5rem; }
  & > section {
    backdrop-filter: invert(0.05);
    border-radius: 0.25rem;
    padding: 0.5rem;
  }

  & > section.table {
    display: grid;
    overflow: auto;
    grid-template-columns: repeat(${(props: any) => props['data-cols'] || 1+yearlyResults.length}, 1fr);
    gap: 1rem;

    & > span {
      white-space: nowrap;
    }
  }
`;

interface Props {};

const PartisanLeanPage: React.FC<Props> = () => {
  const [ state, setState ] = React.useState(states[0]);

  return (
    <Page data-cols={1 + yearlyResults.length}>
      <PageTitle>State Partisan Lean Over 1960-2020</PageTitle>
      <p>Many visualizations show the way state&apos;s have voted over time, but it&apos;s surprisingly hard to find a visualization of how the partisan lean of a state has changed over the years. Partisan lean is the difference between how Dem/Rep a state voted vs how Dem/Rep the nation as a whole voted. It&apos;s FiveThirtyEight&apos;s preferred measurement of how Dem/Rep leaning a state is.</p>

      <h3>graphs, yo</h3>
      <section>
        <select value={state} onChange={e => setState(e.target.value)}>
          {states.map(s => <option key={s}>{s}</option>)}
        </select>
        <Chart data={(electionData[state as keyof typeof electionData] as number[][]).map(([d, r]) => 100*((d-r)/(d+r)))} />
      </section>

      <h3>stats, yo</h3>
      <section className="table">
        <span></span>
        {yearlyResults.map((_, i) => <span key={i}><b>{2020 - (i*4)}</b></span>)}
        <span><b>national</b></span>
        {electionData.national.map(([ dem, rep ], i) => <span key={i}>{(100 * (dem - rep) / (dem + rep)).toFixed(1)}</span>)}
        {states.map((state) => <>
          <span key={state}><b>{state}</b></span>
          {(electionData[state as keyof typeof electionData] as number[][]).map(([dem, rep], i) => 
            <span key={`${state}-${i}`}>
              {(100 * (dem - rep) / (dem + rep)).toFixed(1)} ({((100 * (dem - rep) / (dem + rep)) - yearlyResults[i]).toFixed(1)})
            </span>
          )}
        </>)}
      </section>
    </Page>
  );
};

export default PartisanLeanPage;
