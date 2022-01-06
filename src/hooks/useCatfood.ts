import React from 'react';
import { hasSameValues } from '../utils/utils';
import useLocalStorage from './useLocalStorage';

type DataEntry = {
  [key: string]: string | number,
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

const makeStats = (data: DataEntry[]) => {
  const stats: any = {
    foods: {},
    stores: {},
    brands: {},
    addressSet: new Set<string>(),
    brandSet: new Set<string>(),
    storeSet: new Set<string>(),
    foodAtMostStores: '',
    storeWithMostBrands: '',
    brandAtMostStores: '',
    averagePricePerKg: 0,
  };
  let count;

  data.forEach(entry => {
    const { food, store, weight, place: address } = entry;
    const brand = decodeURIComponent(food.split('/')[4]);
    const price = Number((1000 * entry.price / weight).toFixed(2));

    if (!brand || brand==='undefined') console.log(entry);

    // foods
    if (!stats.foods[food]) stats.foods[food] = {
      stores: new Set([store]),
      sizes: new Set([weight]),
      prices: new Set([price])
    }; 
    else {
      stats.foods[food].stores.add(store);
      stats.foods[food].sizes.add(weight);
      stats.foods[food].prices.add(price);
    }
    // foodAtMostStores
    count = stats.foods[stats.foodAtMostStores]?.stores?.size || 0;
    if (count < stats.foods[food].stores.size) {
      stats.foodAtMostStores = food;
    }

    // brands 
    if (!stats.brands[brand]) stats.brands[brand] = {
      foods: new Set([food]),
      stores: new Set([store])
    };
    else {
      stats.brands[brand].foods.add(food);
      stats.brands[brand].stores.add(store);
    }
    // brandAtMostStores
    count = stats.brands[stats.brandAtMostStores]?.stores?.size || 0;
    if (count < stats.brands[brand].stores.size) {
      stats.brandAtMostStores = brand;
    }

    // stores
    if (!stats.stores[store]) stats.stores[store] = {
      brands: new Set([brand]),
      addresses: new Set([address])
    };
    else {
      stats.stores[store].brands.add(brand);
      stats.stores[store].addresses.add(address);
    }
    // storeWithMostBrands
    count = stats.stores[stats.storeWithMostBrands]?.brands?.size || 0;
    if (count < stats.stores[store].brands.size) {
      stats.storeWithMostBrands = store;
    }

    // storeSet, brandSet, addressSet
    stats.storeSet.add(store);
    stats.brandSet.add(brand);
    stats.addressSet.add(address);

    // averagePricePerKg
    stats.averagePricePerKg += price;
  });

  stats.averagePricePerKg = Number((stats.averagePricePerKg / data.length).toFixed(2));

  const standardDeviation = data.reduce((acc, { price }) => {
    const diff = price - stats.averagePricePerKg;
    return acc + diff * diff;
  }, 0);

  stats.standardDeviation = Number((Math.sqrt(standardDeviation / data.length)).toFixed(2));

  console.log(stats);
  return stats;
};

const makeOptions = (stores: [string, any][]): Option[] => {
  const options = [];

  for (const [store, storeData] of stores) {
    for (const address of storeData.addresses) {
      options.push({
        value: address,
        store
      })
    }
  };

  return options;
};

const mungeEntry = (entry: DataEntry, addressSet: string[]) => {
  // date
  let date = entry.date.trim();
  if (new Date(date) > new Date()) throw new Error(`Date ${date} is in the future`);
  if (new Date(date) < new Date('2000-01-01')) throw new Error(`Date ${date} is too old`);

  // food
  let food = decodeURIComponent(entry.food.trim()).replaceAll(' ', '%20');
  if (food.startsWith('https')) food.replace('https', 'http');
  if (food.endsWith('/')) food = food.substring(0, food.length - 1);

  // weight
  let weight = Number(entry.weight.toFixed(6));

  // price
  let price = Number(entry.price.toFixed(2));

  // store
  let store = entry.store.trim();

  // place
  let place = entry.place.trim();
  if (place.split(',').length !== 3 && !place.startsWith('https://')) {
    const [num, street] = place.split(' ');
    const fullStreet = `${num} ${street}`;
    const correctAddress = Array.from(addressSet).find(address => address.startsWith(fullStreet));
    if (correctAddress) place = correctAddress;
    else throw new Error(`Address ${place} bad format`);
  }

  return {
    date,
    food,
    weight,
    price,
    store,
    place
  };
};

const useCatfoodData = () => {
  const [ data, setData ] = useLocalStorage<DataEntry[]>('catfood_data', []);
  const stats = React.useMemo(() => makeStats(data), [data]);
  const storeOptions = React.useMemo(() => makeOptions(Object.entries(stats.stores)), [stats.stores]);

  const addEntry = React.useCallback((entry: DataEntry) => {
    try {
      entry = mungeEntry(entry, stats.addressSet);

      if (data.some(obs => hasSameValues(obs, entry))) console.log(`Duplicate Entry: ${JSON.stringify(entry)}`);
      else setData(data => [...data, entry]);
    } catch (e) {
      console.error(e);
      console.log(`Bad Entry: ${JSON.stringify(entry)}`);
    }
  }, [data]);

  const addEntries = React.useCallback((entries: DataEntry[]) => {
    try {
      entries = entries.map(entry => mungeEntry(entry, stats.addressSet));
  
      entries = entries.filter(newEntry => {
        return !data.some(obs => hasSameValues(obs, newEntry));
      });
  
      setData(data => [...data, ...entries]);
    } catch (e) {
      console.error(e);
      console.log(`Bad Entries: ${JSON.stringify(entries)}`);
    }
  }, [data]);

  const removeEntry = React.useCallback((i: number) => {
    setData(data => data.filter((_, j) => i !== j));
  }, []);

  const eraseAll = React.useCallback(() => {
    setData([]);
  }, []);

  return { data, stats, addEntry, addEntries, removeEntry, eraseAll, storeOptions };
};

export default useCatfoodData;
export { DataEntry, Option };
