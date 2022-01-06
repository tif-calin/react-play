import React from 'react';
import PageTitle from '../../../components/layout/PageTitle';
import useCatfoodData from '../../../hooks/useCatfood';

const CatfoodStats: React.FC = () => {
  const { stats } = useCatfoodData();

  const byBrand = Object.entries(stats.brands).map(([brand, stats]: [string, any]) => ({
    name: brand,
    storeCount: stats?.stores?.size || 0,
    foodCount: stats?.foods?.size || 0,
  })).sort((a, b) => b.storeCount - a.storeCount || b.foodCount - a.foodCount);

  return (
    <div>
      <PageTitle>Catfood Price Stats</PageTitle>

      <section>
        <h3>By brand</h3>
        <ul>
          {byBrand.map(brand => (
            <li style={{ display: 'flex', gap: '0.5rem' }} key={brand.name}>
              <span>{brand.name}</span>
              <span>{brand.storeCount}</span>
              <span>{brand.foodCount}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>By store</h3>
      </section>
    </div>
  );
};

export default CatfoodStats;
