import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/layout/PageTitle';

const Home = () => {
  return (
    <>
      <PageTitle>Home</PageTitle>
      <p>
        Earth day is April 22. Plant a tree, turn your lights off, learn indigenous names for native plants, and build earthen traditions.
      </p>
      <ul>
        <li>
          <Link to="/rate">raterate</Link> (WIP)
        </li>
        <li>
          <Link to="/catfood">catfood</Link> (WIP)
        </li>
      </ul>
    </>
  )
};

export default Home;
