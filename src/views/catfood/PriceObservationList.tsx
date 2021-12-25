
import React from 'react';
import { Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataEntry } from './Catfood';

import styles from './catfood.module.css';

const urlFood = (url: string): string =>
  decodeURIComponent(`${url.split('/').at(-2)} - ${url.split('/').at(-1)?.toLowerCase().replaceAll('+', ' ')}`);
;

interface Props {
  data: DataEntry[],
  eraseAll: () => void,
  removeEntry: (entry: number) => void,
  addEntry: (entry: DataEntry) => void,
};

const PriceObservationList: React.FC<Props> = ({ data, eraseAll, removeEntry, addEntry }) => {
  const dataList = React.useMemo(() => {
    return data.sort((a, b) => a.date.localeCompare(b.date));
  }, [data]);

  const exportTSV = React.useCallback(() => {
    const tsv = data.map(entry => {
      const { food, weight, price, date, store, place } = entry;
      return `${food}\t${weight/453.59237}\t${price}\t${date}\t${store}\t${place}`;
    });

    console.log(tsv.join('\n'));
  }, [data]);

  return (
    <div className={styles.list}>
      <span>Total of {data.length} entries.</span>
      <ul>
        {dataList.map((entry: DataEntry, index: number) => (
          <li key={index}>
            <IconButton component="span" size="small" onClick={() => removeEntry(index)} aria-label="delete">
              <DeleteIcon fontSize="small" />
            </IconButton>
            <span>{entry.store}</span>
            <span>({entry.date})</span>
            <span>{urlFood(entry.food)}</span>
            <span>${(1000 * entry.price / entry.weight).toFixed(2)}/kg</span>
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
          const data = r.split('\r\n').slice(1).map(line => {
            const [food, weight_lb, price, date, store, ...rest] = line.split(',');

            const place = rest.join().replaceAll('\"', '');

            return {
              food,
              weight: Number(weight_lb) * 453.59237,
              price: Number(price),
              date,
              store,
              place
            }
          }).filter(entry => entry.food);

          data.forEach(addEntry);
        };
        if (!file) return;
      }} />
      <button onClick={exportTSV}>export as tsv (weight in lbs)</button>
    </div>
  )
};

export default React.memo(PriceObservationList);
