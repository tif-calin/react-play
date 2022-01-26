import React from 'react';
import colors from '../../../data/colors';

type ColorName = keyof typeof colors | '';

const useRoster = (arr: ColorName[] = [], initiallySelected: ColorName, isUnique = false) => {
  const [roster, setRoster] = React.useState<ColorName[]>(arr);
  const [selected, setSelected] = React.useState<ColorName>(initiallySelected);

  const add = React.useCallback((item: ColorName = selected, n: number = 1) => {
    setRoster(current => [...current, ...Array(n).fill(item)]);

    if (isUnique) {
      const currentIndex = Object.keys(colors).indexOf(selected);

      for (let i = 1; i < Object.keys(colors).length; i++) {
        const color: ColorName = Object.keys(colors)[(currentIndex + i) % Object.keys(colors).length] as ColorName;
        if (!roster.includes(color)) {
          setSelected(color);
          break;
        }
      }
    }
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
