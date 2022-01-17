import React from 'react';
import styled from 'styled-components';
import PageTitle from '../../components/layout/PageTitle';

const Container = styled.div`
  accent-color: var(--blue);

  & h3 {
    margin-top: 0.5rem;
  }
`;

const ListItem = styled.li`
  position: relative;
  display: inline flex;
  gap: 0.5rem;
  align-items: center;
  width: 100%;

  & > input[type="checkbox"]:first-child {
    position: absolute;

    /* default height is 7/9 rem */
    top: calc(50% - calc(7rem / 18));
    left: calc(-14rem / 9);

    & + * {
      margin-right: 0.25rem;
      font-weight: 550;
  
      &::after {
        content: ':';
      }
    }
  }
`;

const LogEntry = styled.li`
  width: 100%;
  font-family: "Inconsolata", monospace;
  list-style: none;
  text-indent: -2.5rem;

  & > *:first-child {
    position: relative;
    font-weight: 600;

    &::after {
      content: ': ';
    }
  }
`;

const A = styled(({ children, ...props }: any) => <a target="_blank" rel="noopener noreferrer" {...props} >{children}</a>)`
  transition: color 0.1s;
  color: var(--blue);

  &:hover { color: unset }
`;

interface Props {};

const LearnD3: React.FC<Props> = () => {
  return (
    <Container>
      <PageTitle>Learn D3</PageTitle>
      <p>Here are my plans to learn the proper way to use D3 with React. Including my planned projects, learning resources used, and maybe a log.</p>

      <section>
        <h3>Resources</h3>
        <ul>
          <ListItem>
            <input type="checkbox" disabled defaultChecked />
            <A href="https://wattenberger.com/blog/d3">Wattenberger&apos;s d3 overview</A>
            <span>This is a great overview of all the built-in d3 modules by Amelia Wattenberger who made the <A href="https://www.newline.co/fullstack-d3"><i>Full-stack D3 and Data Visualization</i> course</A>.</span>
          </ListItem>
          <ListItem>
            <input type="checkbox" disabled defaultChecked />
            <A href="https://observablehq.com/">Observable</A>
            <span>A collection of data visualizations with source code and data for inspiration. Check out D3&apos;s <A href="https://observablehq.com/@d3">Observable page</A> also.</span>
          </ListItem>
        </ul>
        <h4>Guides</h4>
        <ul>
          <ListItem>
            <input type="checkbox" disabled defaultChecked />
            <A href="https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app">PluralSight (2020_09sep)</A>
            <span>Using D3.js inside of a React app by by Benney Au.</span>
          </ListItem>
          <ListItem>
            <input type="checkbox" disabled />
            <A href="https://observablehq.com/@d3/learn-d3?collection=@d3/learn-d3">Observable (2020_03mar)</A>
            <span>The most popular Observable is a guide to using D3.</span>
          </ListItem>
          <ListItem>
            <input type="checkbox" disabled />
            <A href="https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/">FreeCodeCamp (2019_05may)</A>
            <span>How to get started with D3 and React by Magdalena Stenius for FreeCodeCamp.</span>
          </ListItem>
        </ul>
      </section>

      <section>
        <h3>Projects</h3>
        <ul>
          <ListItem>
            <input type="checkbox" disabled defaultChecked />
            <span>Seasonal Fruit Chart</span>
            <span>A horizontal floating bar chart with an interval x-axis showing when my favorite fruit is in season in Southern California. Data comes from various sources, but often double-checked with the NRDC&apos;s <A href="https://www.seasonalfoodguide.org/">Seasonal Food Guide</A>.</span>
          </ListItem>
          <ListItem>
            <input type="checkbox" disabled />
            <span>Ranked Choice Voting Animated Bar Chart</span>
            <span>Feed it some data showing the results of an RCV election at each round and it should generate a bar chart that will loop through the rounds.</span>
          </ListItem>
          <ListItem>
            <input type="checkbox" disabled />
            <span>US Federal Judges Partisan Data Visualization</span>
            <span>It&apos;s surprisingly hard to find a data visualization of US federal judges based on the party of the president that elected them. I guess the myth of judicial independence runs deep. Anyways, I&apos;d like to make one~</span>
          </ListItem>
          <ListItem>
            <input type="checkbox" disabled />
            <span>Dynamic Cladistogram</span>
            <span>Give it a Newick string, and it&apos;s generated a fancy, collapsible tree diagram like <A href="https://observablehq.com/@d3/collapsible-tree?collection=@observablehq/visualization">this one</A>.</span>
          </ListItem>
          <ListItem>
            <input type="checkbox" disabled />
            <span>Coyote Watch Index</span>
            <span>Could go a lot of directions with this. Basically, I want a data visualization showing the number of coyote sightings in an area based on iNaturalist observation data. Perhaps it could even take in a location, fetch the data dynamically, and then produce the graphics?</span>
          </ListItem>
        </ul>
      </section>

      <section>
        <h3>Log</h3>
        <ul>
          <LogEntry>
            <span>2022_01jan16</span>
            <span>Today I created this page. I collected a lot of the tabs I had open into a list of resources, wrote down a lot of ideas I had floating around that could make good practice projects for d3, and I started doing more research into d3/react. I also started reading this <A href="https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app">PluralSight guide</A>. Main takeaways from that: use refs and to avoid .append and instead use selection joins. I used it to build the seasonal fruit chart, though it needs a lot of work.</span>
          </LogEntry>
        </ul>
      </section>
    </Container>
  );
};

export default LearnD3;
