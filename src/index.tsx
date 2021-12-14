import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <h1>Hello earth!</h1>
      <p>
        Earth day is April 22. Plant a tree, turn your lights off, learn indigenous names for native plants, and build earthen traditions.
      </p>
    </Layout>
  )
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
