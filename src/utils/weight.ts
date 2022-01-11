type WeightUnit = 'g' | 'kg' | 'oz' | 'lb';

/**
 * Convert weight from grams to weight unit with least amount of digits
 * @param {number} grams - weight in grams
 * @returns {('g'|'kg'|'oz'|'lb')} - weight unit 
 */
const findBestUnit = (grams: number): WeightUnit => {
  let shortestUnit = 'g' as WeightUnit;
  let shortestLength = grams.toString().length;

  (['kg', 'oz', 'lb'] as WeightUnit[]).forEach(unit => {
    const num = convertFromGrams(grams, unit);
    const len = num.toString().length;

    if (len < shortestLength) {
      shortestLength = len;
      shortestUnit = unit;
    } else if (len === shortestLength) {
      const lenAfterDot = num.toString().split('.')?.[1]?.length || 0;
      if (lenAfterDot < grams.toString().split('.')?.[1]?.length || 0) {
        shortestLength = len;
        shortestUnit = unit;
      }
    }
  });

  return shortestUnit;
};

/**
 * Takes weight in grams and converts to unit with least amount of digits
 * @param {number} weight - weight in grams
 * @returns {[number, 'g'|'kg'|'oz'|'lb']} - converted weight and unit
 */
const convertToBestUnit = (weight: number) => {
  const unit = findBestUnit(weight);
  const convertedWeight = convertFromGrams(weight, unit);

  return [convertedWeight, unit];
};

/**
 * Takes weight in in grams and converts to weight in the given unit
 * @param weight 
 * @param unit 
 * @returns converted weight
 */
const convertFromGrams = (weight: number, unit: WeightUnit) => {
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

export { findBestUnit, convertFromGrams, convertToBestUnit };
export type { WeightUnit };
