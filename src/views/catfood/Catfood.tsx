import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import PriceObservationForm from './PriceObservationForm';
import PriceObservationList from './PriceObservationList';
import useCatfoodData from '../../hooks/useCatfood';
import styles from './catfood.module.css';

import type { DataEntry } from './';

const Catfood = () => {
  const { data, stats, storeOptions, addEntry, addEntries, removeEntry, eraseAll } = useCatfoodData();
  const [deleted, setDeleted] = React.useState<number>(0);
  const deletedObservation = React.useRef<null | DataEntry>(null);

  const handleDelete = React.useCallback((i: number) => {
    setDeleted(deleted => deleted + 1);
    const copy = removeEntry(i);
    deletedObservation.current = copy;
  }, [deleted]);

  return (
    <div className={styles.page}>
      <PageTitle>Catfood</PageTitle>
      <p>Please note that this is a very specific tool for a personal project of mine and will likely make no sense to anyone visiting</p>
      
      <PriceObservationForm stats={stats} addEntry={addEntry} options={storeOptions} />
      <PriceObservationList 
        data={data} stats={stats} 
        eraseAll={eraseAll} removeEntry={removeEntry} addEntries={addEntries} 
      />
    </div>
  );
};

export default Catfood;
