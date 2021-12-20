import React from 'react';
import { dataEntry } from './Catfood';

import styles from './catfood.module.css';

interface Props {
  data: dataEntry[];
};

const urlFood = (url: string): string =>
  decodeURIComponent(`${url.split('/').at(-1)?.toLowerCase().replaceAll('+', ' ')}`);
;

const PriceObservationList: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.list}>
      <ul>
        {data.map((entry: dataEntry, index: number) => (
          <li key={index}>
            <span>{entry.store}</span>
            <span>({entry.date})</span>
            <span>{urlFood(entry.food)}</span>
            <button>delete</button>
          </li>
        ))}
      </ul>
      <button>Erase All</button>
    </div>
  )
};

export default React.memo(PriceObservationList);
