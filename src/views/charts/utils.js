// @ts-nocheck

/**
 * Generates some fake RCV election data
 * @param {Array.<string>} candidates 
 * @returns {Array.<Object>}
 */
const generateRCVResults1 = (candidates) => {
  const results = [];

  // first round:
  results.push(candidates.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: Math.floor(Math.random() * 100)
    }
  }, {}));

  // run rounds until there's at least one with over 50% or all remaining are tied
  let currentRound = Object.values(results.at(-1));
  let totalVoters = currentRound.reduce((acc, curr) => acc + curr);

  while (!(
    currentRound.filter(v => v > 0).every((v, _, arr) => v === arr[0])   // all non-zero are equal
    || currentRound.some(v => v > totalVoters / 2)               // ...or at least one is over 50%
  )) {
    // find the smallest, non-zero value:
    const toDrop = currentRound.reduce((acc, curr) => curr < acc && curr > 0 ? curr : acc, Number.MAX_VALUE);

    // drop it and give half it's value to its neighbors (if they're non-zero)
    currentRound = currentRound.map((v, i, arr) => {
      if (v === toDrop) {
        if (arr.at((i + 1) % arr.length) > 0) arr[(i + 1) % arr.length] += Math.floor(v / 2);
        return 0;
      } else if (v && arr[(i + 1) % arr.length] === toDrop) return v + Math.floor(toDrop / 2);
      else return v;
    });
    totalVoters = currentRound.reduce((acc, curr) => acc + curr);

    results.push(candidates.reduce((acc, curr, i) => {
      return {
        ...acc,
        [curr]: currentRound[i]
      }
    }, {}));
  }

  return results;
};

// console.log(JSON.stringify(generateRCVResults1('red orange yellow lime green cyan azure blue indigo violet magenta pink'.split(' ')), null, 2));
// console.log(JSON.stringify(generateRCVResults1('red orange yellow green blue indigo violet'.split(' ')), null, 2));
console.log(JSON.stringify(generateRCVResults1('red yellow green blue purple'.split(' ')), null, 2));
// console.log(JSON.stringify(generateRCVResults1('red green blue'.split(' ')), null, 2));