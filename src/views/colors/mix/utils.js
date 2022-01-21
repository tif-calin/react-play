// @ts-nocheck

import { rgb2hex } from '../../votevote/utils/colorConversion';

const hsl2rgb = ([h, s, l], fromIntegers = true) => {
  if (fromIntegers) {
    s /= 100;
    l /= 100;
  }
  h = h % 360;

  const rgb = [ 0, 0 , 0];

  const c = (1 - Math.abs(2 * l - 1)) * s; // c is chroma
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  const H = Math.floor(h / 60);
  rgb[Math.ceil(H / 2) % 3] = c;
  rgb[(7 - H) % 3] = x;

  return rgb.map(c => Math.min(255, Math.max(0, Math.round((c + m) * 255))));
};
const hsl2hex = hsl => rgb2hex(hsl2rgb(hsl));

/**
 * Arithmetic average of two RGB colors
 * @param {Array.<Array.<number>>} colors - an array of rgb colors represented as [r, g, b]
 * @returns {Array.<number>} - the average of the colors
 */
const ArithmeticRGBAverage = (colors) => (
  colors.reduce((a, c) => [a[0] + c[0], a[1] + c[1], a[2] + c[2]], [0, 0, 0]).map(x => Math.round(x / colors.length))
);

const GeometricRGBAverage = (colors) => (
  colors.reduce((a, c) => [a[0] * c[0], a[1] * c[1], a[2] * c[2]], [1, 1, 1]).map(x => Math.round(Math.pow(x, 1 / colors.length)))
);

const ArithmeticHSLAverage = (colors) => {
  // wow ok so I guess the concept of an avergae is not well defined for multiple numbers... 
  // let's just assume only 2 colors
  const hSum = colors.map(c => c[0]).reduce((a, h) => {
    const dist = (360 + Math.abs(h - a)) % 360;
    return dist < 180 ? a + h : a + (h - 360);
  });
  const sSum = colors.reduce((a, c) => a + c[1], 0);
  const lSum = colors.reduce((a, c) => a + c[2], 0);

  return [
    (360 + Math.round(hSum / colors.length)) % 360,
    Math.round(sSum / colors.length),
    Math.round(lSum / colors.length)
  ];
};

export { ArithmeticRGBAverage, GeometricRGBAverage, ArithmeticHSLAverage, hsl2hex };