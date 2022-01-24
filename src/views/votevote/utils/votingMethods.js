// @ts-nocheck

// #region IRV 
/**
 * Generalized IRV Method
 * @param {Array.<string>} candidates
 * @param {Array.<Array.<string>>} votes
 * @param {'rcv' | 'coombs' | 'culi'} method
 * @returns {Array.<Round>}
 * 
 * @typedef {Object} Round 
 * @property {number} candidate - how many votes a candidate got that round
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
      if (lastUndroppedPick) lastPicks[lastUndroppedPick]--;
    });

    // loop though and find the combined score
    if (method === 'culi') combined = candidates.filter(c => !dropped.includes(c)).reduce((acc, candidate) => ({
      ...acc,
      [candidate]: firstPicks[candidate] + lastPicks[candidate]
    }), {});

    // drop the lowest scoring candidates
    const scores = {
      rcv: firstPicks,
      coombs: lastPicks,
      culi: combined
    }[method];
    const dropScore = Math.min(...Object.values(scores));
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
 * @returns {Array.<Round>}
 */
const coombsRCV = (candidates, votes) => generalizedRCV(candidates, votes, 'coombs');

/**
 * Culi's RCV Method
 * @param {Array.<string>} candidates 
 * @param {Array.<Array.<string>>} votes 
 * @returns {Array.<Round>}
 */
const culiRCV = (candidates, votes) => generalizedRCV(candidates, votes, 'culi');

// #endregion 

// #region supplementary
/**
 * Supplementary Method
 * @param {Array.<string>} candidates
 * @param {Array.<Array.<string>>} votes
 * @returns {Array.<Round>}
 */
const supplementary = (candidates, votes) => {
  const munged = votes
    .map(vote => vote.filter(c => candidates.includes(c)))
    .filter(vote => vote.length)
  ;

  const fptp = munged.map(v => v[0]).reduce((acc, vote) => ({
    ...acc,
    [vote]: ~~acc[vote] + 1
  }), {});

  // check if top vote-getter has majority
  const threshold = Math.floor(munged.length / 2);
  const topScore = Math.max(...Object.values(fptp));
  if (topScore > threshold) return [fptp];

  // otherwise, find all with the top vote.
  const runoffCandidates = candidates.filter(c => fptp[c] === topScore);
  if (runoffCandidates.length < 2) {
    // find the second highest score
    const secondTopScore = Math.max(...Object.values(fptp).filter(val => val !== topScore));

    // find all candidates with the second highest score
    candidates.filter(c => fptp[c] === secondTopScore).forEach(c => runoffCandidates.push(c));
  }

  const result = {};

  munged.forEach(vote => {
    const pick = vote.find(c => runoffCandidates.includes(c));
    if (pick) result[pick] = ~~result[pick] + 1;
  });

  return [fptp, result];
};

// #endregion

// #region plurality
/**
 * First Past the Post Method
 * @param {Array.<string>} votes 
 * @returns {Round}
 */
const fptp = (votes) => {
  return votes.reduce((acc, vote) => ({
    ...acc,
    [vote]: ~~acc[vote] + 1
  }), {});
};

// #endregion

// #region borda
/**
 * Borda Count Method
 * @param {Array.<string>} candidates
 * @param {Array.<Array.<string>>} votes
 * @returns {Round}
 */
const borda = (candidates, votes) => {
  const result = {};

  // munge data: remove duplicates and non-candidates
  const mungedVotes = votes.map(vote => vote.filter(
    (candidate, i) => candidates.includes(candidate) && vote.indexOf(candidate) === i
  ));

  mungedVotes.forEach(vote => {
    // let bordaScore = candidates.length - vote.length;
    // [...vote].reverse().forEach(candidate => result[candidate] = ~~result[candidate] + bordaScore++);
    let bordaScore = candidates.length;
    vote.forEach(candidate => {
      result[candidate] = ~~result[candidate] + --bordaScore;
    })
  })

  return result;
};

/** 
 * Modified Borda Count also allows for ties at the bottom of the ranking, but unranked candidates get 0
 * @param {Array.<string>} candidates
 * @param {Array.<Array.<string>>} votes
 * @returns {Round}
 */
const modifiedBorda = (candidates, votes) => {
  const result = {};

  const mungedVotes = votes.map(vote => vote.filter(
    (c, i) => candidates.includes(c) && vote.indexOf(c) === i)
  );

  mungedVotes.forEach(vote => {
    let bordaScore = vote.length === candidates.length ? 0 : 1;
    [...vote].reverse().forEach(c => result[c] = ~~result[c] + bordaScore++);
  });

  return result;
};

/**
 * Allows for ties anywhere in the ranking
 * @param {Array.<string>} candidates 
 * @param {Array.<Array.<string|Array.<string>>>} votes 
 * @returns {Round}
 */
const tournamentBorda = (candidates, votes) => {
  const result = {};

  const mungedVotes = votes.map(vote => {
    vote = vote.map(c => [c].flat().filter(x => candidates.includes(x)));
    const flattenedBallot = vote.flat();

    return vote.map((cArr, i) => {
      return cArr.filter((c, j) => (i+j) === flattenedBallot.indexOf(c));
    }).filter(cArr => cArr.length);
  });

  mungedVotes.forEach(vote => {
    let bordaScore = candidates.length;

    vote.forEach(arr => {
      bordaScore -= arr.length;
      const score = bordaScore + (arr.length - 1) / 2;
      arr.forEach(c => result[c] = ~~result[c] + score);
    });
  });

  return result;
};

const dowdallBorda = (candidates, votes) => {

};
// #endregion

// #region approval
/**
 * Approval Method
 * @param {Array.<Array.<string>>} votes 
 * @returns {Round}
 */
const approval = votes => {
  return votes.flat().reduce((acc, candidate) => {
    return {
      ...acc,
      [candidate]: ~~acc[candidate] + 1
    };
  }, {});
};
// #endregion

export { 
  rankedChoiceVote, coombsRCV, culiRCV, 
  supplementary,
  fptp, 
  borda, modifiedBorda, tournamentBorda,
  approval
};
