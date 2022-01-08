import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageTitle from '../../components/layout/PageTitle';

const StyledList = styled.ul`
  & a {
    color: var(--blue);
    font-weight: 600;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: inherit;
    }
  }
`;

const Home = () => {
  return (
    <>
      <PageTitle>Home</PageTitle>
      <p>
       <b>Groundhog Day</b> is on February 2. March 4-5 is the National <b>Day of Unplugging</b>. <b>Bicycle Day</b> is April 19. <b>Earth Day</b> is April 22. Plant a tree, turn your lights off, learn indigenous names for native plants, and build earthen traditions. <b>Labour Day</b> happens on May 1. Then, on June 19 we have <b>Juneteenth</b>. On October 11, we observe <b>Indigenous People&apos;s Day</b>. Finally, we have <b>New Year's Eve</b> on December 31.
      </p>
      <StyledList>
        <li>
          <Link to="/rate">prototype of raterate</Link>
        </li>
        <li>
          <Link to="/catfood">catfood price data entry tool</Link> and their <Link to="/catfood/stats">stats</Link>
        </li>
        <li>
          <Link to="/charts">my chart playground</Link>
        </li>
      </StyledList>
    </>
  )
};

export default Home;
