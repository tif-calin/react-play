
type BallotInit = {
  ballot: { [candidate: string]: number };
  approvalThreshold: number;
  disapprovalThreshold: number;
  max: number;
  min: number;
  budget: number;
};

class Ballot {
  ballot: { [candidate: string]: number };
  _approvalThreshold: number;     // (0) any candidate with a higher score than this is approved
  _disapprovalThreshold: number;  // (0) any candidate with a lower score than this is disapproved
  _max: number;                   // (1) the maximum score a candidate can have
  _min: number;                   // (-1) the minimum score a candidate can have
  _budget: number;                // (1) the proportion of a budget to use 

  constructor({ approvalThreshold, disapprovalThreshold, max, min, budget, ballot }: BallotInit) {
    this.ballot = ballot;
    this._approvalThreshold = approvalThreshold || 0;
    this._disapprovalThreshold = disapprovalThreshold || 0;
    this._max = max || Math.max(1, ...Object.values(ballot));
    this._min = min || Math.min(-1, ...Object.values(ballot));
    this._budget = budget || 1.0;
  };

  filterCandidates(candidates: string[]) {
    const newBallot = candidates.reduce((acc, candidate) => ({
      ...acc,
      [candidate]: this.ballot[candidate]
    }), {});

    this.ballot = newBallot;
    return newBallot;
  };

  toRanked(): string[][] {
    const scores = Array.from(new Set(Object.values(this.ballot))).sort((a, b) => b - a);

    return Object.entries(this.ballot).reduce((acc: string[][], [candidate, score]) => {
      const scoreIndex = scores.indexOf(score);
      
      acc[scoreIndex] = acc[scoreIndex] || [];
      acc[scoreIndex].push(candidate);

      return acc;
    }, []);
  };

  toApproval(): string[] {
    return Object.keys(this.ballot).filter(candidate => this.ballot[candidate] >= this._approvalThreshold);
  };

  toDiscreteScore(min: number, max: number): { [candidate: string]: number } {
    const scores = Object.entries(this.ballot).reduce((acc, [candidate, score]) => ({
      ...acc,
      [candidate]: Math.floor((score - this._min) / (this._max - this._min) * (max - min) + min)
    }), {});

    return scores;
  };
};

export default Ballot;
