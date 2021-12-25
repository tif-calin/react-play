import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import useLocalStorage from '../../hooks/useLocalStorage';
import PriceObservationForm from './PriceObservationForm';
import PriceObservationList from './PriceObservationList';

import styles from './catfood.module.css';
import { hasSameValues } from '../../utils/utils';

type DataEntry = {
  food: string,
  weight: number,
  price: number,
  store: string,
  place: string,
  date: string
};
type Option = {
  value: string,
  store: string,
  label?: string
};

const getOptions = (data: DataEntry[]): Option[] => {
  const log = data.reduce((acc: {[key: string]: string}, cur) => {
    const { store, place } = cur;

    return acc[place] ? acc : { ...acc, [place]: store };
  }, {});

  return Object.keys(log).map(key => ({value: key, store: log[key]}));
};

const Catfood = () => {
  const [data, setData] = useLocalStorage<DataEntry[]>('catfood_data', []);

  const addEntry = React.useCallback((entry: DataEntry) => {
    console.log(entry);
    Object.entries(entry).forEach(([key, val]) => {
      if (typeof val === 'string') {
        entry[key] = val.trim();
      }
    });
    console.log(entry);

    if (data.some(obs => hasSameValues(obs, entry, ['price']))) console.log(`Duplicate entry: ${entry}`);
    else setData(data => [...data, entry]);
  }, [data]);

  const removeEntry = React.useCallback((index: number) => {
    setData(data => data.filter((_, i) => i !== index));
  }, [data]);

  const eraseAll = React.useCallback(() => setData([]), [data]);

  return (
    <div className={styles.page}>
      <PageTitle>Catfood</PageTitle>
      <p>Please note that this is a very specific tool for a personal project of mine and will likely make no sense to anyone visiting</p>
      <PriceObservationForm addEntry={addEntry} options={getOptions(data)} />
      <PriceObservationList data={data} eraseAll={eraseAll} removeEntry={removeEntry} addEntry={addEntry} />
    </div>
  );
};

export default Catfood;
export { DataEntry, Option };
