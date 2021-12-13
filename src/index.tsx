import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <>
      <h1>Hello earth!</h1>
      <p>
        Earth day is April 22. Plant a tree, turn your lights off, learn indigenous names for native plants, and build earthen traditions.
      </p>
    </>
  )
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
