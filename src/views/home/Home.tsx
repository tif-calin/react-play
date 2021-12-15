import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Hello earth!</h1>
      <p>
        Earth day is April 22. Plant a tree, turn your lights off, learn indigenous names for native plants, and build earthen traditions.
      </p>
      <p>
        <Link to="/rate">raterate</Link>
      </p>
    </>
  )
};

export default Home;
