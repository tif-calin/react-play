import React from 'react';
import styled from 'styled-components';
import ExternalLink from '../../components/A';
import PageTitle from '../../components/layout/PageTitle';
import Island from './Island';
import ActivatorFunctionSection from './sections/ActivatorFunctionSection';
import StateExamplesSection from './sections/StateExamplesSection';

interface Props {};

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  & input, select, button {
    cursor: pointer;
  }

  & > h1 {
    width: 100%;
    text-align: center;
    margin: 0;
    line-height: 1;
  }

  & > p:last-child {
    font-size: 0.8rem;
    font-weight: 200;
  }

  accent-color: var(--oc-pink-3);

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
  --shadow-border: var(--shadow), 0 0 3px hsl(var(--shadow-color));
  --shadow-inset:
    inset 0 0 2px hsl(var(--shadow-color) / 0.25),
    inset 0.3px 0.5px 0.5px hsl(var(--shadow-color) / 0.24),
    inset 0.7px 1.1px 1.2px -0.5px hsl(var(--shadow-color) / 0.22),
    inset 1.3px 1.9px 2.2px -1.1px hsl(var(--shadow-color) / 0.2),
    inset 2.3px 3.4px 3.8px -1.6px hsl(var(--shadow-color) / 0.18),
    inset 4px 5.9px 6.7px -2.1px hsl(var(--shadow-color) / 0.16),
    inset 6.7px 9.9px 11.2px -2.7px hsl(var(--shadow-color) / 0.14),
    inset 10.7px 15.7px 17.8px -3.2px hsl(var(--shadow-color) / 0.12),
    inset 0 0 3px hsl(var(--shadow-color))
  ;
  --shadow-inset-border: var(--shadow-inset), inset 0 0 3px hsl(var(--shadow-color));

  --black: #1f2727;
  --white: #f8f9fa;
`;

const Redistricting2020Page: React.FC<Props> = () => {
  const [aVal, setAVal] = React.useState(16);
  const [bVal, setBVal] = React.useState(400);

  return (
    <Page>
      <PageTitle>Redistricting 2022 Bias</PageTitle>
      <ActivatorFunctionSection 
        aVal={aVal} setAVal={setAVal}
        bVal={bVal} setBVal={setBVal}
      />
      <StateExamplesSection 
        aVal={aVal} bVal={bVal}
      />
      <Island
        title="What is this?"
        defaultOpen={false}
      >
        <p>
          Many measures of which party has benefited the most from the current round of redistricting kinda suck. One of the most well-known attempts at this is <ExternalLink href="https://projects.fivethirtyeight.com/redistricting-2022-maps/">FiveThirtyEight's</ExternalLink> redistricting map which simply counts the number of "solid D" (+15D or more), "competitive D" (+5D to +14D), "highly competitive" (+4D to +4R), etc. It simply compares how many such seats there were before the current round of redistricting and how many there are after.
        </p>
        <p>
          The major weakness of this over-simplified approach can be seen when looking at the result of redistricting in states like Texas. By FiveThirtyEight's measurements the Republican controlled legislature passed a map that shifted the districts to make 5 new Democratic leaning seats, 2 new Republican leaning seats, and 5 less competitive seats. In reality, Texas is one of the most egregious examples of redistricting we've seen this year. Texas, which already had a very biased map to start with, decided to to make almost all Republican leaning seats into solid red districts. The previous map was competitive enough that Democrats had an (admittedly, small) chance to flip control of the house, but the new map guarantees Republicans will maintain power for years to come. They went from having 8 seats that were only "competitive R" to only a single "competitive R" seat by converting them into solid R districts. 
        </p>
        <p>
          The problem here, in my mind, is that the measures of seat competitiveness has arbitrary and discrete breakpoints. What I want to find is a way to measure bias in a continuous way. To do that, we need to turn district partisan leans into election result odds. E.g. say a +5R seat translates to a 75% chance Republicans win.
        </p>
      </Island>
    </Page>
  );
};

export default React.memo(Redistricting2020Page);
