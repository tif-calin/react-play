import React from 'react';
import colors from '../../../data/colors';

type ColorName = keyof typeof colors;

const useRoster = (arr: ColorName[] = [], initiallySelected: ColorName, isUnique = false) => {
  const [roster, setRoster] = React.useState<ColorName[]>(arr);
  const [selected, setSelected] = React.useState<ColorName>(initiallySelected);

  const add = React.useCallback((item: ColorName = selected, n: number = 1) => {
    setRoster(current => [...current, ...Array(n).fill(item)]);
    if (isUnique) setSelected(Object.keys(colors).find(
      i => !roster.includes(i as ColorName) && i !== selected
    ) as ColorName);
  }, [selected]);

  const clear = React.useCallback(() => setRoster([]), []);

  const remove = React.useCallback((item: ColorName) => {
    setRoster(current => current.filter(i => i !== item));
  }, []);

  const removeOne = React.useCallback((item: ColorName) => {
    setRoster(current => current.splice(current.indexOf(item), 1));
  }, []);

  return {
    roster,
    add,
    clear,
    remove,
    removeOne,
    selected,
    setSelected
  };
};

export default useRoster;
