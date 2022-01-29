// @ts-nocheck

// #region irv 
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

/**
 * Veto Voting Method
 * @param {Array.<string>} votes 
 * @returns {Round}
 */
const veto = (votes) => {
  return votes.reduce((acc, vote) => ({
    ...acc,
    [vote]: ~~acc[vote] - 1
  }), {});
};
// http://www.9mail.de/m-schulze/votedesc.pdf
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

// #region other weighted positional
/**
 * Nauru Method
 * @param {Array.<Array.<string>>} votes 
 * @returns {Round}
 */
const nauru = (votes) => {
  const result = {};

  votes.forEach(vote => {
    vote.forEach((candidate, i) => {
      result[candidate] = ~~result[candidate] + 1 / (i + 1);
    });
  });

  return result;
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

/**
 * Combined Approval Method
 * @param {Array.<Array.<string>>} approvals
 * @param {Array.<Array.<string>>} disapprovals
 * @returns {Round}
 */
const combinedApproval = (approvals, disapprovals) => {
  const result = {};

  approvals.forEach(arr => {
    arr.forEach(c => result[c] = ~~result[c] + 1);
  });

  disapprovals.forEach(arr => {
    arr.forEach(c => result[c] = ~~result[c] - 1);
  });
  
  return result;
};
// #endregion

// #region copeland
/**
 * Copeland Method
 * @param {Array.<string>} candidates
 * @param {Array.<Array.<string>>} votes
 * @returns {Round}
 */
const copeland = (candidates, votes) => {
  // assuming complete ballots
  const copeland = {};
  const result = {};

  candidates.forEach(c => {
    copeland[c] = {};
    result[c] = 0;
  });

  votes.forEach(vote => {
    for (let i = 0; i < vote.length - 1; i++) {
      const winner = vote[i];

      for (let j = i + 1; j < vote.length; j++) {
        const loser = vote[j];
        copeland[winner][loser] = ~~copeland[winner][loser] + 1;
      }
    }
  });

  Object.entries(copeland).forEach(([candidate, matches]) => {
    Object.values(matches).forEach(count => {
      if (count > votes.length / 2) result[candidate]++;
      else if (count === votes.length / 2) result[candidate] += 0.5;
    });
  });

  return result;
};

/**
 * Lull-Copeland Method is like Copeland but instead of 1 / 0.5 / 0, it is 1 / 1 / 0
 * @param {Array.<string>} candidates
 * @param {Array.<Array.<string>>} votes
 * @returns {Round}
 */
const lullCopeland = (candidates, votes) => {
  // assuming complete ballots
  const copeland = {};
  const result = {};

  candidates.forEach(c => {
    copeland[c] = {};
    result[c] = 0;
  });

  votes.forEach(vote => {
    for (let i = 0; i < vote.length - 1; i++) {
      const winner = vote[i];

      for (let j = i + 1; j < vote.length; j++) {
        const loser = vote[j];
        copeland[winner][loser] = ~~copeland[winner][loser] + 1;
      }
    }
  });

  Object.entries(copeland).forEach(([candidate, matches]) => {
    Object.values(matches).forEach(count => {
      if (count >= votes.length / 2) result[candidate]++;
    });
  });

  return result;
};

// #endregion

// #region vfa
/**
 * Vote For or Against Method
 * @param {Array.<Array.<string>>} votes
 * @returns {Round}
 */
const vfa = votes => {
  return votes.reduce((acc, vote) => {
    acc[vote[0]] = ~~acc[vote[0]] + 1;
    acc[vote.at(-1)] = ~~acc[vote.at(-1)] - 1;
    return acc;
  }, {});
};

/**
 * Negative Boehm Method
 * @param {Array.<Object<string, number>} votes
 * @returns {Round}
 * 
 * @description each voter can vote for a candidate xor vote against a candidate
 */
const boehmSigned = votes => {
  return votes.reduce((acc, vote) => {
    const [top, topScore] = Object.entries(vote).reduce((a, c) => a[1] > c[1] ? a : c);
    const [bottom, bottomScore] = Object.entries(vote).reduce((a, c) => a[1] < c[1] ? a : c);

    if (Math.abs(topScore) > Math.abs(bottomScore)) acc[top] = ~~acc[top] + 1;
    else if (Math.abs(topScore) < Math.abs(bottomScore)) acc[bottom] = ~~acc[bottom] - 1;

    return acc;
  }, {});
};

/**
 * Vote For or Against 2 round Runoff Method
 * @param {Array.<Array.<string>>} votes
 * @returns {Array.<Round>}
 */
const vfaRunoff = votes => {
  const result = votes.reduce((acc, vote) => {
    acc[vote[0]] = ~~acc[vote[0]] + 1;
    acc[vote.at(-1)] = ~~acc[vote.at(-1)] - 1;
    return acc;
  }, {});

  const scores = Object.values(result).sort().reverse();

  const topTwo = [];
  let i = 0;
  while (topTwo.length < 2 && i < scores.length) {
    Object.entries(result).forEach(([candidate, score]) => {
      if (score === scores[i]) topTwo.push(candidate);
    });
    i++;
  }

  return [
    result,
    votes.reduce((acc, vote) => {
      const first = vote.find(c => topTwo.includes(c));
      if (first) acc[first] = ~~acc[first] + 1;
      return acc;
    }, {})
  ];
};

// #endregion

// #region star
/**
 * Takes a list of scored ballots and a subset of candidates and returns their matrix
 * @param {Array.<string>} candidates 
 * @param {Array.<Object.<string, number>>} votes 
 * @returns {Object.<string, Object.<string, number>>}
 */
const matrixFromScoredVotes = (candidates, votes) => {
  const matrix = candidates.reduce((a, c, i) => ({ 
    ...a, 
    [c]: candidates.reduce((b, d) => ({ ...b, [d]: 0 }), {})
  }), {});

  votes.forEach(vote => {
    for (let i = 0; i < candidates.length - 1; i++) {
      const current = candidates[i];
      const currentScore = vote[current];

      for (let j = i + 1; j < candidates.length; j++) {
        const next = candidates[j];
        const nextScore = vote[next];

        if (currentScore > nextScore) {
          matrix[current][next]++;
        } else if (currentScore < nextScore) {
          matrix[next][current]++;
        }
      }
    }
  });

  return matrix;
};

/**
 * Convert a matrix to scores
 * @param {{Object.<Object.<string, number>>}} matrix 
 * @param {number} totalVoters 
 * @param {number} [perLoss=-1] 
 * @param {number} [perTie=0] 
 * @param {number} [perWin=1]
 * @returns {Object.<string, number>}
 */
const matrixToPoints = (matrix, totalVoters, perLoss = -1, perTie = 0, perWin = 1) => {
  const candidates = Object.keys(matrix);
  const points = candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {});

  candidates.forEach(candidate => {
    const wins = Object.values(matrix[candidate]).reduce((a, b) => a + b, 0);
    const losses = candidates.map(c => matrix[c][candidate]).reduce((a, b) => a + b, 0);
    const ties = totalVoters - wins - losses;

    points[candidate] = wins * perWin + ties * perTie + losses * perLoss;
  });

  return points;
};

/**
 * Get the top N candidates from scores
 * @param {Object.<string, number>} scores
 * @param {number} n
 * @returns {Array.<string>}
 */
const topN = (scores, n = 2) => {
  const sortedValues = Object.values(scores).sort((a, b) => b - a);
  
  const top = [];
  let i = 0;
  while (top.length < n && i < sortedValues.length) {
    Object.entries(scores).forEach(([candidate, score]) => {
      if (score === sortedValues[i]) top.push(candidate);
    });
    i++;
  }

  return top;
};

/**
 * STAR Method
 * @param {Array.<Object.<string, number>>} votes
 * @returns {Array.<Round>}
 */
const star = (votes) => {
  const result = {};

  votes.forEach(vote => {
    Object.entries(vote).forEach(([c, s]) => {
      result[c] = ~~result[c] + s;
    });
  });

  const topTwo = topN(result, 2);

  if (topTwo.length === 2) {
    return [
      result,
      votes.reduce((acc, vote) => {
        const [ one, two ] = topTwo;
        if (vote[one] > vote[two]) acc[one]++;
        else if (vote[one] < vote[two]) acc[two]++;
        return acc;
      }, { [topTwo[0]]: 0, [topTwo[1]]: 0 })
    ];
  } else {
    const mat = matrixFromScoredVotes(topTwo, votes);
    const scr = matrixToPoints(mat, votes.length, 0, 0, 1);
    const topTwo2 = topN(scr, 2);

    if (topTwo2.length > 2) return [ result ];

    const secondRound = 
      matrixToPoints(matrixFromScoredVotes(topTwo2, votes), votes.length, 0, 0, 1)
    ;

    if (Object.values(secondRound).slice(1).every((s, arr) => s === arr[0])) {
      throw new Error('STAR Method: tie breakers not yet implemented!!!');
    } else {
      return [
        result,
        secondRound
      ]
    }
  }
};

// #endregion

// #region bucklin
/**
 * getMedian helper function
 * @param {Array.<number>} arr 
 * @returns {number}
 */
const getMedian = (arr) => {
  const mid = Math.floor(arr.length / 2);
  const sorted = [...arr].sort();
  return arr.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

/**
 * Bucklin Method
 * @param {Array.<string>} candidates 
 * @param {Array.<Object.<string, number>>} votes 
 * @returns {Array.<Round>}
 * 
 * @description Majority judgement bucklin method
 */
const bucklin = (candidates, votes) => {

};

/**
 * Fallback Voting Method
 * @param {Array.<string>} candidates
 * @param {Array.<Array.<string>>} votes 
 * @returns {Array.<Round>}
 * 
 * @description Voters rank their top candidates. Each round, if a candidate has more than half the number of voters, the top vote-getter wins. Otherwise, the voters' next choice is added in to the scores
 */
const fallback = (candidates, votes) => {
  const results = [];

  let i = 0;
  while (i < candidates.length) {
    const round = i
      ? { ...results.at(-1) }
      : candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {})
    ;

    votes.forEach(vote => {
      const choice = vote[i];
      round[choice]++;
    });

    results.push(round);

    if (Math.max(...Object.values(round)) > votes.length / 2) break;
    i++;
  }

  return results;
};

/**
 * Historical Bucklin Method
 * @param {Array.<[string, string]>} votes
 * @returns {Array.<Round>}
 * 
 * @description Voters rank their top 2 candidates. If no candidate has majority support, the voters' second choices are added to the top 2 vote getters
 */
const historicalBucklin = (votes) => {
  const majority = votes.length / 2;
  const result = votes.reduce((acc, vote) => {
    acc[vote[0]] = ~~acc[vote[0]] + 1;
    return acc;
  }, {});

  if (Math.max(...Object.values(result)) > majority) return [ result ];

  const topTwo = topN(result, 2);

  const secondRound = votes.reduce((acc, vote) => {
    const secondChoice = vote[1];
    if (topTwo.includes(secondChoice)) acc[secondChoice]++;
    return acc;
  }, { ...result });

  return [ result, secondRound ];
};
// http://archive.fairvote.org/?page=2077 

// /**
//  * Fallback Voting Method
//  */
// const fallback = (candidates, votes) => {
// };
// #endregion

// #region threeTwoOne
/**
 * 3-2-1 Method
 * @param {Array.<string>} candidates
 * @param {Array.<Object.<string, number>>} votes
 * 
 * @description Voters rank each candidate as "good", "ok", or "bad". There are three rounds. In the first, the top 3 candidates with the most "good" move on. In the second, the top 2 candidates with the least "bad" move on. In the final round, the candidate who is most preferred over the other wins
 */
const threeTwoOne = (candidates, votes) => {
  const round1 = votes.reduce((acc, vote) => {
    Object.entries(vote).forEach(([c, s]) => {
      if (s === 1) acc[c]++;
    });

    return acc;
  }, candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {}));

  const topThree = topN(round1, 3);

  const round2 = votes.reduce((acc, vote) => {
    Object.entries(vote).forEach(([c, s]) => {
      if (topThree.includes(c) && s === -1) acc[c]--;
    });

    return acc;
  }, topThree.reduce((a, c) => ({ ...a, [c]: 0 }), {}));

  const topTwo = topN(round2, 2);

  const round3 = votes.reduce((acc, vote) => {
    if (vote[topTwo[0]] > vote[topTwo[1]]) acc[topTwo[0]]++;
    else if (vote[topTwo[0]] < vote[topTwo[1]]) acc[topTwo[1]]++;

    return acc;
  }, topTwo.reduce((a, c) => ({ ...a, [c]: 0 }), {}));

  return [ round1, round2, round3 ];
};
// #endregion

// #region quadratic
/** 
 * Quadratic Method
 * @param {Array.<string>} candidates
 * @param {Array.<Object.<string, number>>} votes - each weight assigned to a candidate is positive
 * @returns {Round}
 * 
 * @description 
 */
const quadratic = (candidates, votes) => {
  const result = candidates.reduce((a, c) => ({ ...a, [c]: 0 }), {});

  votes.forEach(vote => {
    const sum = Object.values(vote).reduce((a, s) => a + s, 0);
    Object.entries(vote).forEach(([c, s]) => { 
      result[c] += Math.sqrt(s / sum);
    });
  });

  return result;
};
// #endregion

// #region cumulative
/**
 * Cumulative Method
 * @param {Array.<string>} candidates
 * @param {Array.<Object.<string, number>>} votes - each weight assigned to a candidate is positive
 * @returns {Round}
 */
 const cumulative = (candidates, votes) => {
  const result = candidates.reduce((acc, c) => ({ ...acc, [c]: 0 }), {});

  votes.forEach(vote => {
    const sum = Object.values(vote).reduce((a, s) => a + s, 0);
    Object.entries(vote).forEach(([c, s]) => {
      result[c] += s / sum;
    });
  })

  return result;
};
// #endregion

// #region kemenyYoung
/**
 * Kemeny-Young Method
 * @param {Array.<string>} candidates
 * @param {Array.<Array.<Array.<string>>>} votes - ties are allowed
 * @returns {Round}
 */
const kemenyYoung = (candidates, votes) => {
  // 1. create a pairwise matrix
  // 2. get all possible permutations of candidates
  // 3. for each permutation, use the pairwise matrix to calculate its score
  // 4. return the permutation with the highest score

};
// #endregion

export { 
  rankedChoiceVote, coombsRCV, culiRCV, 
  supplementary,
  fptp, veto,
  borda, modifiedBorda, tournamentBorda,
  nauru,
  approval, combinedApproval,
  copeland, lullCopeland,
  vfa, boehmSigned, vfaRunoff,
  star,
  fallback, historicalBucklin,
  threeTwoOne,
  quadratic,
  cumulative,
  kemenyYoung
};
