import { Button } from '@mui/material';
import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { DataEntry, Option } from '../../hooks/useCatfood';
import StoreSelect from './StoreSelect';

// @ts-ignore
import styles from './catfood.module.css';

type WeightUnit = 'g' | 'kg' | 'oz' | 'lb';

const convertWeightFromGrams = (weight: number, unit: WeightUnit) => {
  let newWeight = weight;
  switch (unit) {
    case 'kg':
      newWeight = weight / 1000;
      break;
    case 'oz':
      newWeight = weight / 28.34952312;
      break;
    case 'lb':
      newWeight = weight / 453.59237;
      break;
  }

  return Number(newWeight.toFixed(4));
};

const convertWeightToGrams = (weight: number, unit: WeightUnit) => {
  switch (unit) {
    case 'kg':
      return weight * 1000;
    case 'oz':
      return weight * 28.34952312;
    case 'lb':
      return weight * 453.59237;
    default:
      return weight;
  }
};

interface Props {
  addEntry: (entry: DataEntry) => void,
  options: Option[],
  stats: any,
  deleted?: null | DataEntry,
};

const PriceObservationForm: React.FC<Props> = ({ addEntry, options, stats, deleted }) => {
  const [cfdbUrl, setCfdbUrl] = useLocalStorage('catfood_catfooddburl', deleted?.food || '');
  const [price, setPrice] = useLocalStorage('catfood_price', deleted?.price || '');
  const [weight, setWeight] = useLocalStorage('catfood_weight', deleted?.weight || '');
  const [store, setStore] = useLocalStorage('catfood_store', deleted?.store || '');
  const [storeAddress, setStoreAddress] = useLocalStorage('catfood_storeaddress', deleted?.place || '');
  const [date, setDate] = useLocalStorage('catfood_date', deleted?.date || (new Date()).toISOString().split('T')[0]);
  const [weightUnit, setWeightUnit] = React.useState<WeightUnit>('g');
  const [googleSearch, setGoogleSearch] = React.useState('');

  const brand = cfdbUrl.startsWith('http://catfooddb.com/') ? decodeURIComponent(cfdbUrl.split('/').at(-2) as string) : '';
  const foodStats = stats.foods[decodeURIComponent(cfdbUrl).replaceAll(' ', '%20')];
  let foodInfo = foodStats 
    ? `Seen at ${foodStats.stores.size} stores ${foodStats.stores.has(store) ? 'including' : 'but not'} at ${store}. ` 
    : 'No previous observations for this product. '
  ;
  foodInfo += stats.brands[brand] ? `There are observations for ${stats.brands[brand].foods.size} ${brand} products. ` : '';

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'price': 
        setPrice(value);
        break;
      case 'weightunit':
        setWeightUnit(value as WeightUnit);
        break;
      case 'store':
        setStore(value);
        break;
      case 'storeaddress':
        setStoreAddress(value);
        break;
      case 'date':
        setDate(value);
        break;
    }
  }, []);

  const handleWeightChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWeight(convertWeightToGrams(Number(value), weightUnit).toString());
  }, [weightUnit]);

  const handleFoodChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.trimStart();

    setCfdbUrl(input);
    setGoogleSearch(input.startsWith('http') 
      ? ''
      : `https://www.google.com/search?q=site%3Acatfooddb.com%2Fproduct+${input.replace(' ', '+')}`)
    ;
  }, []);

  const handleStoreChange = (address: string, store: string) => {
    setStoreAddress(address);
    setStore(store);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    addEntry({
      food: cfdbUrl,
      weight: Number(weight),
      price: Number(price),
      store,
      place: storeAddress,
      date
    });
  };

  return (
    <form className={`PriceObservationForm ${styles.form}`}>
      <fieldset>
        <StoreSelect 
          options={options}
          value={{ value: storeAddress, store }}
          onPlaceSelect={handleStoreChange}
        />
      </fieldset>
      <fieldset>
        <input type="url" value={cfdbUrl} onChange={handleFoodChange} placeholder="CatFoodDB URL" />
        {googleSearch
          ? <a target="_blank" rel="noreferrer" href={googleSearch}>search google for {cfdbUrl}</a>
          : foodInfo
        }
      </fieldset>
      <fieldset>
        <input 
          name="price" placeholder="Price"
          type="number" step="0.01" 
          value={price} onChange={handleChange}
        />
        <input 
          name="weight" placeholder="Weight" 
          type="number"
          value={convertWeightFromGrams(Number(weight), weightUnit)} onChange={handleWeightChange}
        />
        <select 
          name="weightunit"
          value={weightUnit} 
          onChange={handleChange}
        >
          <option value="lb">lb</option>
          <option value="oz">oz</option>
          <option value="kg">kg</option>
          <option value="g">g</option>
        </select>
        <span>${(1000 * Number(price) / Number(weight)).toFixed(2)}/kg</span>
      </fieldset>
      <fieldset>
        <input 
          name="date" type="date" 
          value={date} onChange={handleChange}
        />
      </fieldset>
      <Button 
        variant="contained"
        type="submit"
        onClick={handleSubmit}
      >Add Entry</Button>
    </form>
  )
};

export default React.memo(PriceObservationForm);
