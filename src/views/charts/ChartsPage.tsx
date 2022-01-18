import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../components/layout/PageTitle';
import SeasonalFruitsChart from './SeasonalFruitsChart';

const Page = styled.div`
  accent-color: var(--blue);

  & h3 {
    margin-top: 0.5rem;
  }

  & a {
    transition: color 0.1s;
    color: var(--blue);

    &:hover { color: unset }
  }
`;

interface Props {

};

const ChartsPage: React.FC<Props> = () => {
  return (
    <Page>
      <PageTitle>Charts</PageTitle>
      <p>I&apos;ve played around with react-charts and recharts on this repo and have used plotly.js before. I also have a decent amount of experience with data visualization using Python libraries like matplotlib, networkx, seaborn, and a little bit of plotly. However, most of the charts on this page will likely be a product of my attempts to learn D3 with React. You can see more info about this journey on my <a href="/learn/d3">/learn/d3</a> page.</p>

      <section>
        <h3>Seasonal fruits</h3>
        <p>
          A horizontal floating bar chart with an interval x-axis representing the months of the year. Each bar represents when a fruit is in season in Southern California.
        </p>

        <SeasonalFruitsChart />
      </section>

      <section>
        <h3>RCV Rounds Animated Bar Chart</h3>
        <p>
          Check it out <a href="/charts/rcv">here</a>!
        </p>
      </section>
    </Page>
  );
};

export default ChartsPage;
