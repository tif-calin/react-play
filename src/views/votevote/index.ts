import VoteVotePage from './VoteVotePage';
import colors from '../../data/colors';

type ColorName = keyof typeof colors;

export default VoteVotePage;
export type { ColorName };

/*

NOTES FOR WHEN I MAKE VOTEVOTE.PAGE 
 • build out each voting method to take into account weight by default
 • instead of a common BarChart component, each method should get its own
 • save the colors as objects with hexes, rgb, and hsl so you don't have to convert each time
 • make the default range from 0 to 1
 • instead of approval/disapproval thresholds, we're just splitting up the scores like we do with toDiscrete
  - split into 2: approval
  - split into 3: combined_approval
  - split into 6: star 
 • helper functions
  - topN: given a scored list of candidates, find the topN candidates
 • different voting methods have different conditions for the winner. Like Bucklin might consider all candidates above majority to be winners instead of just the top
 • make a winners-only version of each method and a version that returns more detailed results depending on the system
 • support for different datasets than colors like cities, or only html colors, or custom data.

*/
