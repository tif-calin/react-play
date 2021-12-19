import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

// @ts-ignore
import styles from './catfood.module.css';

type weightUnit = 'g' | 'kg' | 'oz' | 'lb';

const convertWeightFromGrams = (weight: number, unit: weightUnit) => {
  switch (unit) {
    case 'kg':
      return weight / 1000;
    case 'oz':
      return weight / 28.34952312;
    case 'lb':
      return weight / 453.59237;
    default:
      return weight;
  }
};

const convertWeightToGrams = (weight: number, unit: weightUnit) => {
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

const PriceObservationForm: React.FC = () => {
  const [cfdbUrl, setCfdbUrl] = useLocalStorage('catfood_catfooddburl', '');
  const [googleSearch, setGoogleSearch] = React.useState('');
  const [price, setPrice] = useLocalStorage('catfood_price', '');
  const [weight, setWeight] = useLocalStorage('catfood_weight', '');
  const [weightUnit, setWeightUnit] = React.useState<weightUnit>('g');
  const [store, setStore] = useLocalStorage('catfood_store', '');
  const [storeAddress, setStoreAddress] = useLocalStorage('catfood_storeaddress', '');

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'price': 
        setPrice(value);
        break;
      case 'weightunit':
        setWeightUnit(value as weightUnit);
        break;
      case 'store':
        setStore(value);
        break;
      case 'storeaddress':
        setStoreAddress(value);
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

  return (
    <form className={`PriceObservationForm ${styles.form}`}>
      <fieldset>
        <input type="text" value={cfdbUrl} onChange={handleFoodChange} placeholder="CatFoodDB URL" />
        {googleSearch &&
          <a target="_blank" rel="noreferrer" href={googleSearch}>search google for {cfdbUrl}</a>
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
      </fieldset>
      <fieldset>
        <input type="text" placeholder="Store" />
        <input type="text" placeholder="Address" />
      </fieldset>
      <fieldset>
        <input type="date" />
      </fieldset>
      <button type="submit">Add Entry</button>
    </form>
  )
};

export default PriceObservationForm;
