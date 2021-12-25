import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './views/home';
import Rate from './views/rate';
import Catfood from './views/catfood';
import LearnRuby from './views/learn';

import './styles/index.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rate" element={<Rate />} />
          <Route path="/catfood" element={<Catfood />} />
          <Route path="/learn/ruby" element={<LearnRuby />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  )
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
