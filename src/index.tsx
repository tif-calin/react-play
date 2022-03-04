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

const suspend = (Component: React.FC) => <React.Suspense fallback={<>...</>}><Component /></React.Suspense>

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rate/multi" element={suspend(MultiRatePage)} />
          <Route path="/rate" element={<RatePage />} />
          <Route path="/catfood" element={suspend(Catfood)}>
            <Route path="stats" element={suspend(CatfoodStats)} />
          </Route>
          <Route path="/learn" element={suspend(LearnPage)}>
            <Route path="ruby" element={<LearnRuby />} />
            <Route path="d3" element={<LearnD3 />} />
          </Route>
          <Route path="/charts" element={<ChartsPage />}>
            <Route path="rcv" element={<RCVRoundsChartPage />} />
          </Route>
          <Route path="/crowdwriting" element={<CrowdWritingPage />} />
          <Route path="/votevote" element={suspend(VoteVotePage)} />
          <Route path="/colors/mix" element={<ColorMixPage />} />
          <Route path="/readlater" element={<ReadLaterPage />} />
          <Route path="/partisanlean" element={suspend(PartisanLeanPage)} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  )
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
