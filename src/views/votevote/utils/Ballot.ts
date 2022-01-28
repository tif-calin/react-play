
type BallotInit = {
  ballot: { [candidate: string]: number };
  weight?: number;
  approvalThreshold?: number;
  disapprovalThreshold?: number;
  max?: number;
  min?: number;
  budget?: number;
};

class Ballot {
  ballot: { [candidate: string]: number };
  _weight: number;                // (1) ballot weight
  _approvalThreshold: number;     // (0) any candidate with a higher score than this is approved
  _disapprovalThreshold: number;  // (0) any candidate with a lower score than this is disapproved
  _max: number;                   // (1) the maximum score a candidate can have
  _min: number;                   // (-1) the minimum score a candidate can have
  _budget: number;                // (1) the proportion of a budget to use 

  constructor({ weight, approvalThreshold, disapprovalThreshold, max, min, budget, ballot }: BallotInit) {
    this._weight = 1 || weight;
    this._approvalThreshold = approvalThreshold || 0;
    this._disapprovalThreshold = disapprovalThreshold || 0;
    this._max = max || Math.max(1, ...Object.values(ballot));
    this._min = min || Math.min(-1, ...Object.values(ballot));
    this._budget = budget || 1.0;

    // normalize ballot
    Object.keys(ballot).forEach(candidate => {
      ballot[candidate] = ((ballot[candidate] - this._min) / (this._max - this._min)) + this._min;
    });

    this.ballot = ballot;
  };

  filterCandidates(candidates: string[]) {
    const newBallot = candidates.reduce((acc, candidate) => ({
      ...acc,
      [candidate]: this.ballot[candidate]
    }), {});

    this.ballot = newBallot;
    return newBallot;
  };

  static toRanked(ballot: { [candidate: string]: number }): string[][] {
    const scores = Array.from(new Set(Object.values(ballot))).sort((a, b) => b - a);

    return Object.entries(ballot).reduce((acc: string[][], [candidate, score]) => {
      const scoreIndex = scores.indexOf(score);
      
      acc[scoreIndex] = acc[scoreIndex] || [];
      acc[scoreIndex].push(candidate);

      return acc;
    }, []);
  };

  static toApproval(ballot: { [candidate: string]: number }, approvalThreshold: number): string[] {
    return Object.keys(ballot).filter(candidate => ballot[candidate] >= approvalThreshold);
  };

  static toDiscreteScore(ballot: { [candidate: string]: number }, min: number, max: number): { [candidate: string]: number } {
    const scores = Object.entries(ballot).reduce((acc, [candidate, score]) => ({
      ...acc,
      [candidate]: Math.floor((score - min) / (max - min) * (max - min) + min)
    }), {});

    return scores;
  }

  toRanked = (): string[][] => Ballot.toRanked(this.ballot);

  toApproval(): string[] {
    return Ballot.toApproval(this.ballot, this._approvalThreshold);
  };

  toDiscreteScore(): { [candidate: string]: number } {
    return Ballot.toDiscreteScore(this.ballot, this._min, this._max);
  };
};

export default Ballot;
