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

*/
