
import React from 'react';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataEntry } from '../../hooks/useCatfood';

import styles from './catfood.module.css';

const urlFood = (url: string): string =>
  decodeURIComponent(`${url.split('/').at(-2)} - ${url.split('/').at(-1)?.toLowerCase().replaceAll('+', ' ')}`);
;

interface Props {
  data: DataEntry[],
  stats: any,
  eraseAll: () => void,
  removeEntry: (entry: number) => void,
  addEntries: (entries: DataEntry[]) => void,
};

const PriceObservationList: React.FC<Props> = ({ data, stats, eraseAll, removeEntry, addEntries }) => {
  const dataList = React.useMemo(() => {
    return data.sort((a, b) => a.date.localeCompare(b.date));
  }, [data]);

  const exportTSV = React.useCallback(() => {
    const tsv = data.map(entry => {
      const { food, weight, price, date, store, place } = entry;
      return [food, weight, price, date, store, place].join('\t');
    });

    console.log(tsv.join('\n'));
  }, [data]);

  return (
    <div className={styles.list}>
      <span>Total of {data.length} entries of catfoods from {stats.brandSet.size} brands across {stats.storeSet.size} stores.</span>
      <ul>
        {dataList.map((entry: DataEntry, index: number) => (
          <li key={index}>
            <IconButton component="span" size="small" onClick={() => removeEntry(index)} aria-label="delete">
              <DeleteIcon fontSize="small" />
            </IconButton>
            <span>{entry.store}</span>
            <span>{entry.date}</span>
            <span>{urlFood(entry.food)}</span>
            <span 
              style={{ 
                fontWeight: 400 + (((1000 * entry.price / entry.weight) - stats.averagePricePerKg) / stats.standardDeviation) * 100
              }}
            >${(1000 * entry.price / entry.weight).toFixed(2)}/kg</span>
          </li>
        ))}
      </ul>
      <Button variant="contained" color="error" onClick={eraseAll}>Erase All</Button>
      <input type="file" accept=".tsv,.csv" onChange={(e) => {
        const file = e.target.files?.item(0);
        const reader = new FileReader();
        reader.readAsText(file as Blob);
        reader.onload = () => {
          const r = reader.result as string;
          const newData = r.split('\r\n').slice(1).map(line => {
            const [food, weight_lb, price, date, store, ...rest] = line.split(',');

            const place = rest.join().replaceAll('\"', '');

            return {
              food,
              weight: Number(weight_lb),
              price: Number(price),
              date,
              store,
              place
            }
          }).filter(entry => entry.food);

          addEntries(newData);
        };
        if (!file) return;
      }} />
      <button onClick={exportTSV}>export as tsv (weight in lbs)</button>
    </div>
  )
};

export default React.memo(PriceObservationList);
