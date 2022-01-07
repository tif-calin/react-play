import React from 'react';
import PageTitle from '../../../components/layout/PageTitle';
import useCatfoodData from '../../../hooks/useCatfood';
import BrandScatter from './BrandScatter';
import StoreChart from './StoreChart';

const CatfoodStats: React.FC = () => {
  const { stats } = useCatfoodData();

  const byBrand = React.useMemo(
    () => Object.entries(stats.brands)
      .map(([brand, stats]: [string, any]) => (
        {
          name: brand,
          storeCount: stats?.stores?.size || 0,
          foodCount: stats?.foods?.size || 0,
        }
      ))
      .sort((a, b) => b.storeCount - a.storeCount || b.foodCount - a.foodCount)
    , [stats]
  );

  const byStore = React.useMemo(() => {
    const entries = Object.entries(stats.stores);

    return entries.map(([store, stats]: [string, any]) => ({
      label: store,
      data: [{ label: store, brandCount: stats.brands.size }]
    })).sort((a, b) => b.data[0].brandCount - a.data[0].brandCount);
  }, [stats]);

  return (
    <div>
      <PageTitle>Catfood Price Stats</PageTitle>

      <section>
        <h3>By brand</h3>
        <BrandScatter data={byBrand} />
      </section>

      <section>
        <h3>By store</h3>
        <StoreChart storeData={byStore} />
      </section>
    </div>
  );
};

export default CatfoodStats;
