import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../components/layout/PageTitle';
import RateField from './components/RateField';

const Page = styled.div`
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
`;

const Joke = styled.div`
  padding: 1rem;
  box-shadow: var(--shadow-border);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > p:last-of-type {
    margin-bottom: 0.5rem;
  }
`;

const RatePage = () => {
  return (
    <Page>
      <PageTitle>RateRate</PageTitle>
      <p>Rate this joke</p>
      <Joke>
        <p><strong>Can someone please tell me what the lowest rank in the military is?</strong></p>
        <p>Every time I ask they say "it's private"!</p>
        <RateField label="funny" />
        <RateField label="creative" />
        <RateField label="original" />
        <RateField label="clever" />
      </Joke>
    </Page>
  );
};

export default RatePage;
