// @ts-nocheck

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
 * Ranked Choice Voting Method
 * @param {Array.<string>} candidates 
 * @param {Array.<Array.<string>>} votes 
 * @returns {Array.<Round>}
 */
const rankedChoiceVote = (candidates, votes) => generalizedRCV(candidates, votes, 'rcv');

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

export { rankedChoiceVote, coombsRCV, culiRCV };
