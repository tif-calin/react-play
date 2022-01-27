// @ts-nocheck
import colors from '../../../data/colors.js';
import { hex2rgb, rgb2hsl } from './colorConversion.js';

/**
 * Sorts a list of candidate by their distance (in RGB) from a given color
 * @param {string} color
 * @param {Array.<string>} candidates
 * @returns {Array.<string>}
 */
 const rankClosestRGB = (voter, candidates) => {
  const [R, G, B] = hex2rgb(colors[voter]);
  const candidateColors = candidates.map(candidate => hex2rgb(colors[candidate]));

  // get distances for all candidates and sort
  return candidateColors.map(([r, g, b], i) => 
    ([candidates[i], Math.sqrt(Math.pow(r - R, 2) + Math.pow(g - G, 2) + Math.pow(b - B, 2))])
  ).sort((a, b) => a[1] - b[1]).map(arr => arr[0]);
};

/**
 * Sorts a list of candidates by their distance (in HSL) from a given color
 * @param {string} color 
 * @param {Array.<string>} candidates
 * @returns {Array.<string>}
 */
const rankClosestHSL = (voter, candidates) => {
  const [H, S, L] = rgb2hsl(hex2rgb(colors[voter]), true);

  // find distances for all the colors
  const distances = candidates.reduce((acc, clr) => {
    const [h, s, l] = rgb2hsl(hex2rgb(colors[clr]), true);
    const hDist = Math.min(Math.abs(h - H), Math.abs(360 - Math.abs(h - H)));
    const dist = Math.sqrt(Math.pow(hDist, 2) + Math.pow(s - S, 2) + Math.pow(l - L, 2));

    return { ...acc, [clr]: dist };
  }, {});

  // sort the list of colors by how close they are to the input color
  const matches = [...candidates].sort((a, b) => distances[a] - distances[b]);

  return matches;
};

/**
 * 
 * @param {string} voter 
 * @param {Array.<string>} candidates 
 * @param {boolean} [asArray=true] whether to return an array of tuples or an object
 * @returns {Object|Array}
 */
const scoreClosestRGB = (voter, candidates, asArray = false) => {
  const [R, G, B] = hex2rgb(colors[voter]);
  const candidateColors = candidates.map(candidate => hex2rgb(colors[candidate]));
  const candidateDistances = candidateColors.map(([r, g, b]) =>
    (2 * Math.sqrt(Math.pow(r - R, 2) + Math.pow(g - G, 2) + Math.pow(b - B, 2)) / Math.sqrt(3 * (255 * 255))) - 1
  );
  
  return asArray
    ? candidates.map((c, i) => [c, candidateDistances[i]]).sort((a, b) => a[1] - b[1])
    : candidates.reduce((acc, clr, i) => ({
      ...acc,
      [clr]: candidateDistances[i]
    }), {})
  ;
};

/**
 * 
 * @param {string} voter - color name of the voter
 * @param {Array.<string>} candidates - a list of color names
 * @param {boolean} [asArray=true] whether to return an array of tuples or an object
 * @returns {Object|Array}
 */
const scoreClosestHSL = (voter, candidates, asArray = false) => {
  const [H, S, L] = rgb2hsl(hex2rgb(colors[voter]), true);

  // find distances for all the colors
  const distances = candidates.map(clr => {
    const [h, s, l] = rgb2hsl(hex2rgb(colors[clr]), true);
    const hDist = Math.min(Math.abs(h - H), Math.abs(360 - Math.abs(h - H)));
    const dist = Math.sqrt(Math.pow(hDist, 2) + Math.pow(s - S, 2) + Math.pow(l - L, 2));

    return [clr, (2 * dist / Math.sqrt((360 * 360) + 2 * (100 * 100))) - 1];
  }).sort((a, b) => a[1] - b[1]);

  return asArray
    ? distances
    : distances.reduce((acc, [clr, dist]) => ({ ...acc, [clr]: dist }), {})
  ;
};

export { 
  rankClosestRGB, rankClosestHSL, 
  scoreClosestRGB, scoreClosestHSL 
};
