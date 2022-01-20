// @ts-nocheck
import colors from '../../data/colors.js';

/**
 * Ranked Choice Voting algorithm
 * @param {Array.<string>} candidates 
 * @param {Array.<Array.<string>>} votes 
 * @returns {Array.<Round>}
 * 
 * @typedef {Object} Round 
 * @property {number} color
 */
const rankedChoiceVote = (candidates, votes) => {
  // to keep track of every round
  const results = [];

  const dropped = [];
  let isOver = false;
  while (!isOver) {
    // create the result object
    // initialize values of all undropped candidates to 0
    const result = {};
    candidates.forEach(candidate => {
      if (!dropped.includes(candidate)) result[candidate] = 0;
    });

    // loop through each vote 
    // find the first candidate that wasn't dropped
    votes.forEach(vote => {
      for (const candidate of vote) {
        if (Object.keys(result).includes(candidate)) {
          result[candidate]++;
          break;
        }
      }
    });

    // drop the lowest scoring candiadate(s) by adding them to the dropped array
    const lowestScore = Math.min(...Object.values(result));
    Object.keys(result).forEach(key => {
      if (result[key] === lowestScore) dropped.push(key);
    });

    // check the isOver conditions: 
    //   (1) everyone remaining is tied, 
    //   (2) someone has more than 50% of the (remaining) votes, 
    if (Object.values(result).every(
      val => val === Object.values(result)[0]
    )) isOver = true;
    else {
      const topScore = Math.max(...Object.values(result));
      const totScore = Object.values(result).reduce((acc, val) => acc + val, 0);
      if (topScore > (totScore / 2)) isOver = true;
    }

    // keep a record of each round
    results.push(result);
  }

  return results;
};

/**
 * Takes a string as a hex color and returns an array of the RGB values
 * @param {string} hex 
 * @returns {Array.<number>}
 */
const hex2rgb = hex => /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex).map(str => parseInt(str, 16)).slice(1);

/**
 * 
 */
const calcBallotPreferences = (voter, candidates) => {
  const [R, G, B] = hex2rgb(colors[voter]);
  const candidateColors = candidates.map(candidate => hex2rgb(colors[candidate]));

  // get distances for all candidates and sort
  return candidateColors.map(([r, g, b], i) => 
    ([candidates[i], Math.sqrt(Math.pow(r - R, 2) + Math.pow(g - G, 2) + Math.pow(b - B, 2))])
  ).sort((a, b) => a[1] - b[1]).map(arr => arr[0]);
};

export { rankedChoiceVote, calcBallotPreferences };
