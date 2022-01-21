// @ts-nocheck
import colors from '../../../data/colors.js';

/**
 * Generalized RCV or Coombs Method
 * @param {Array.<string>} candidates
 * @param {Array.<Array.<string>>} votes
 * @param {'rcv' | 'coombs' | 'culi'} method
 * @returns {Array.<Round>}
 * 
 * @typedef {Object} Round 
 * @property {number} color
 */
const generalizedRCV = (candidates, votes, method = 'rcv') => {
  const rounds = [];

  const dropped = [];
  let isOver = false;

  while (!isOver) {
    // initialize round with all candidates set to 0
    const firstPicks = candidates.filter(c => !dropped.includes(c)).reduce((acc, c) => ({ ...acc, [c]: 0 }), {});
    const lastPicks = method === 'rcv' ? {} : candidates.filter(c => !dropped.includes(c)).reduce((acc, c) => ({ ...acc, [c]: 0 }), {});
    let combined = {};

    // loop through votes and find first undropped candidate
    votes.forEach(vote => {
      const firstUndroppedPick = vote.find(candidate => !dropped.includes(candidate));
      if (firstUndroppedPick) firstPicks[firstUndroppedPick]++;
    });

    // loop through votes and find the last undropped candidate
    if (method !== 'rcv') votes.forEach(vote => {
      const lastUndroppedPick = [...vote].reverse().find(candidate => !dropped.includes(candidate));
      if (lastUndroppedPick) lastPicks[lastUndroppedPick]++;
    });

    // loop though and find the combined score
    if (method === 'culi') combined = candidates.filter(c => !dropped.includes(c)).reduce((acc, candidate) => ({
      ...acc,
      [candidate]: firstPicks[candidate] - lastPicks[candidate]
    }), {});

    // drop the lowest scoring candidates
    const scores = {
      rcv: firstPicks,
      coombs: lastPicks,
      culi: combined
    }[method];
    const dropScore = (method === 'coombs' ? Math.max : Math.min)(...Object.values(scores));
    Object.keys(scores).forEach(key => {
      if (scores[key] === dropScore) dropped.push(key);
    });

    // check the isOver conditions: (1) all remaining are tied; (2) someone has more than 50% of the (remaining) votes
    if (Object.values(scores).every(
      val => val === Object.values(scores)[0]
    )) isOver = true;
    else {
      const topScore = Math.max(...Object.values(firstPicks));
      const totScore = Object.values(firstPicks).reduce((acc, val) => acc + val, 0);
      if (topScore > (totScore / 2)) isOver = true;
    }

    // record this round
    rounds.push(firstPicks);

    // error handling in case of infinite loop
    if (rounds.length > candidates.length) {
      console.error(`ERROR: more rounds than candidates: Method ${method}`);
      console.table(rounds);
      break;
    }
  }

  return rounds;
};

/**
 * Ranked Choice Voting algorithm
 * @param {Array.<string>} candidates 
 * @param {Array.<Array.<string>>} votes 
 * @returns {Array.<Round>}
 */
const rankedChoiceVote = (candidates, votes) => generalizedRCV(candidates, votes, 'rcv');
const rankedChoiceVoteOld = (candidates, votes) => {
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
 * Coomb's RCV Method
 * @param {Array.<string>} candidates 
 * @param {Array.<Array.<string>>} votes 
 * @returns @returns {Array.<Round>}
 */
const coombsRCV = (candidates, votes) => generalizedRCV(candidates, votes, 'coombs');

/**
 * Culi's RCV Method
 * @param {Array.<string>} candidates 
 * @param {Array.<Array.<string>>} votes 
 * @returns @returns {Array.<Round>}
 */
const culiRCV = (candidates, votes) => generalizedRCV(candidates, votes, 'culi');

/**
 * Takes a string as a hex color and returns an array of the RGB values
 * @param {string} hex 
 * @returns {Array.<number>}
 */
const hex2rgb = hex => /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex).map(str => parseInt(str, 16)).slice(1);

/**
 * Sorts a list of candidate by their distance (in RGB) from a given color
 * @param {string} color
 * @param {Array.<string>} candidates
 * @returns {Array.<string>}
 */
const calcBallotPreferences = (voter, candidates) => {
  const [R, G, B] = hex2rgb(colors[voter]);
  const candidateColors = candidates.map(candidate => hex2rgb(colors[candidate]));

  // get distances for all candidates and sort
  return candidateColors.map(([r, g, b], i) => 
    ([candidates[i], Math.sqrt(Math.pow(r - R, 2) + Math.pow(g - G, 2) + Math.pow(b - B, 2))])
  ).sort((a, b) => a[1] - b[1]).map(arr => arr[0]);
};

export { rankedChoiceVote, coombsRCV, culiRCV, calcBallotPreferences };
