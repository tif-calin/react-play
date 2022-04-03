import 'react-app-polyfill/stable';
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
import RatePage from './views/rate';
import Catfood, { CatfoodStats } from './views/catfood';
const LearnPage = React.lazy(() => import('./views/learn'));
import { LearnRuby, LearnD3 } from './views/learn';
import ChartsPage, { RCVRoundsChartPage } from './views/charts';
import CrowdWritingPage from './views/writings/crowdwriting';
import VoteVotePage from './views/votevote';
import ColorMixPage from './views/colors/mix';
import ReadLaterPage from './views/readlater';
const PartisanLeanPage = React.lazy(() => import('./views/partisanlean'));

import './styles/index.css';
import MultiRatePage from './views/multirate';
import Redistricting2020Page from './views/redistricting2020/Redistricting2020Page';
import CookPage from './views/cook';

const suspend = (Component: React.FC) => <React.Suspense fallback={<>...</>}><Component /></React.Suspense>

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rate/multi" element={suspend(MultiRatePage)} />
          <Route path="/rate" element={<RatePage />} />
          <Route path="/catfood/stats" element={suspend(CatfoodStats)} />
          <Route path="/catfood" element={suspend(Catfood)} />
          <Route path="/learn" element={suspend(LearnPage)} />
          <Route path="/learn/ruby" element={<LearnRuby />} />
          <Route path="/learn/d3" element={<LearnD3 />} />
          <Route path="/charts" element={<ChartsPage />} />
          <Route path="/charts/rcv" element={<RCVRoundsChartPage />} />
          <Route path="/crowdwriting" element={<CrowdWritingPage />} />
          <Route path="/votevote" element={suspend(VoteVotePage)} />
          <Route path="/colors/mix" element={<ColorMixPage />} />
          <Route path="/readlater" element={<ReadLaterPage />} />
          <Route path="/partisanlean" element={suspend(PartisanLeanPage)} />
          <Route path="/redistricting2020" element={suspend(Redistricting2020Page)} />
          <Route path="/cook" element={suspend(CookPage)} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  )
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
