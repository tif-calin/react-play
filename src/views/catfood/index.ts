import React from 'react';
import type { Option, DataEntry } from './useCatfood';
const Catfood = React.lazy(() => import('./Catfood'));
const CatfoodStats = React.lazy(() => import('./stats/CatfoodStats'));

export default Catfood;
export { 
  CatfoodStats,
  Option, DataEntry 
};
