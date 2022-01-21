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
import Catfood, { CatfoodStats } from './views/catfood';
import { LearnRuby, LearnD3 } from './views/learn';
import ChartsPage, { RCVRoundsChartPage } from './views/charts';
import CrowdWritingPage from './views/crowdwriting';
import VoteVotePage from './views/votevote';

import './styles/index.css';
import ColorMixPage from './views/colors/mix';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rate" element={<Rate />} />
          <Route path="/catfood" element={<Catfood />} />
          <Route path="/catfood/stats" element={<CatfoodStats />} />
          <Route path="/learn/ruby" element={<LearnRuby />} />
          <Route path="/learn/d3" element={<LearnD3 />} />
          <Route path="/charts" element={<ChartsPage />} />
          <Route path="/charts/rcv" element={<RCVRoundsChartPage />} />
          <Route path="/crowd-writing" element={<CrowdWritingPage />} />
          <Route path="/votevote" element={<VoteVotePage />} />
          <Route path="/colors/mix" element={<ColorMixPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  )
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
