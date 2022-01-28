const colors = {
  acid: '#00ff25',
  aero: '#7cb9e8',
  almond: '#efdecd',
  aluminum: '#848789',
  amaranth: '#e52b50',
  'amber': '#ffbf00',
  'amethyst': '#9966cc',
  ao: '#008000',
  apricot: '#fdd5b1',
  'aqua': '#13eac9',
  'aquamarine': '#7fffd4',
  artichoke: '#8f9779',
  'ash': '#b2beb5',
  asparagus: '#87a96b',
  aureolin: '#fdee00',
  'azure': '#0080ff',
  beige: '#f5f5dc',
  bistre: '#3d2b1f',
  bisque: '#ffe4c4',
  'black': '#000000',
  blond: '#faf0be',
  blood: '#960000',
  'blue': '#0000ff',
  blueberry: '#4f86f7',
  bluetiful: '#3c69e7',
  blurple: '#7289da',
  blush: '#ffb3bf',
  bone: '#fffaf2',
  brass: '#b5a642',
  brick: '#cb4154',
  bronze: '#cd7f32',
  bulma: '#00d1b2',
  burgundy: '#800020',
  butter: '#fffcc3',
  'brown': '#964b00',
  cadet: '#536872',
  canary: '#ffff99',
  'capri': '#00bfff',
  'carmine': '#960018',
  carrot: '#ed9121',
  catawba: '#703642',
  celadon: '#ace1af',
  celeste: '#b2ffff',
  cerise: '#de3163',
  "cerulean": "#007ba7",
  'champagne': '#f7e7ce',
  'charcoal': '#36454f',
  'chartreuse': '#7fff00',
  'cinnabar': '#e44d2e',
  'cinnamon': '#d2691e',
  cloud: '#f7fff9',
  "coral": "#ff7f50",
  cornflower: '#9aceeb',
  'cream': '#feeddc',
  'crimson': '#dc143c',
  'cyan': '#00ffff',
  'daffodil': '#ffff31',
  'dandelion': '#f0e130',
  dark: '#23272a',
  'denim': '#1b4b71',
  'drab': '#828344',
  'dusk': '#4e5481',
  'dust': '#737678',
  'ebony': '#91634d',
  eggshell: '#f0ead6',
  'eggplant': '#380835',
  eigengrau: '#16161d',
  'emerald': '#50c878',
  eminence: '#6c3082',
  erin: '#00ff40',
  fandango: '#b53389',
  feldgrau: '#4d5d53',
  firebrick: '#b22222',
  flame: '#e25822',
  flirt: '#a2006d',
  'fuchsia': '#fe007c',
  'gainsboro': '#dcdcdc',
  'gamboge': '#d29f28',
  glaucous: '#6082b6',
  'gold': '#ffd700',
  'goldenrod': '#daa520',
  'green': '#00ff00',
  grape: '#6f2da8',
  'gray': '#808080',
  'grey': '#929591',
  gunmetal: '#2a3439',
  'harlequin': '#3fff00',
  'heliotrope': '#df73ff',
  honey: '#f5be05',
  honeydew: '#f0fff0',
  honeysuckle: '#eae86f',
  ice: '#d6fffa',
  icterine: '#fcf75e',
  'indigo': '#4b0082',
  ivory: '#fffff0',
  'jade': '#00a86b',
  jasmine: '#f8de7e',
  'jet': '#343434',
  jasper: '#d73b3e',
  'jungle': '#29ab87',  
  'kelly': '#4cbb17',
  kepel: '#3ab09e',
  'khaki': '#bab37e',
  'lavender': '#cfb5e2',
  liberty: '#545aa7',
  'lilac': '#d1c9ff',
  'lime': '#bfff00',
  linen: '#faf0e6',
  'magenta': '#ff00ff',
  'malachite': '#285044',
  'marengo': '#4c5866',
  'marigold': '#e7a20b',
  'maroon': '#800000',
  midnight: '#140036',
  'mint': '#aefac6',
  'moss': '#8a9a5b',
  mirror: '#d6d6d6',
  moonstone: '#3aa8c1',
  'navy': '#000080',
  neon: '#39ff14',
  nice: '#696969',
  'olive': '#808000',
  'orange': '#ff8000',
  'orangered': '#fc5123',
  orchid: '#da70d6',
  'peach': '#fdbb8d',
  'periwinkle': '#ccccff',
  phlox: '#df00ff',
  pine: '#156149',
  'pink': '#ffc0cb',
  'puce': '#cc8899',
  'purple': '#800080',
  purpureus: '#9a4eae',
  'quicksilver': '#a6a6a6',
  quince: '#d4cb60',
  'red': '#ff0000',
  rose: '#ff007f',
  'royal': '#0c1793',
  ruby: '#e0115f',
  sage: '#87ae73',
  'salmon': '#fa8072',
  sapphire: '#0f52ba',
  scarlet: '#ff2400',
  seashell: '#fff5ee',
  seedling: '#c0cba1',
  sepia: '#704214',
  'shamrock': '#3abf31',
  skobeloff: '#007474',
  sky: '#afdaf1',
  'silver': '#c0c0c0',
  'slate': '#708090',
  'smalt': '#003399',
  snow: '#fffafa',
  'spring': '#00ff7f',
  straw: '#e4d96f',
  'tan': '#d2b48c',
  taupe: '#483c32',
  'teal': '#008080',
  thistle: '#d8bfd8',
  timberwolf: '#dbd7d2',
  tomato: '#ff6347',
  'turquoise': '#40e0d0',
  ube: '#8878c3',
  'ultramarine': '#3f00ff',
  umber: '#635147',
  verdigris: '#43b3ae',
  'vermillion': '#ff3f00',
  'violet': '#7f00ff',
  viridian: '#40826d',
  volt: '#ceff00',
  wheat: '#f5deb3',
  wasabi: '#afd77f',
  water: '#d4f1f9',
  'white': '#ffffff',
  'xanthic': '#666057',
  xanadu: '#738678',
  xeron: '#00a86b',
  xoxo: '#f08497',
  'yellow': '#ffff00',
  yoshi: '#55aa00',
  'zaffre': '#0014a8',
  zinnwaldite: '#ebc2af',
  zomp: '#39a78e'
};

const colorData = {
  acid: {
    hex: '#00ff25',
    hsl: [129,100,50],
    rgb: [0,255,37]
  },
  aero: {
    hex: '#7cb9e8',
    hsl: [206,70,70],
    rgb: [124,185,232]
  },
  almond: {
    hex: '#efdecd',
    hsl: [30,52,87],
    rgb: [239,222,205]
  },
  aluminum: {
    hex: '#848789',
    hsl: [204,2,53],
    rgb: [132,135,137]
  },
  amaranth: {
    hex: '#e52b50',
    hsl: [348,78,53],
    rgb: [229,43,80]
  },
  amber: {
    hex: '#ffbf00',
    hsl: [45,100,50],
    rgb: [255,191,0]
  },
  amethyst: {
    hex: '#9966cc',
    hsl: [270,50,60],
    rgb: [153,102,204]
  },
  ao: {
    hex: '#008000',
    hsl: [120,100,25],
    rgb: [0,128,0]
  },
  apricot: {
    hex: '#fdd5b1',
    hsl: [28,95,84],
    rgb: [253,213,177]
  },
  aqua: {
    hex: '#13eac9',
    hsl: [171,85,50],
    rgb: [19,234,201]
  },
  aquamarine: {
    hex: '#7fffd4',
    hsl: [160,100,75],
    rgb: [127,255,212]
  },
  artichoke: {
    hex: '#8f9779',
    hsl: [76,13,53],
    rgb: [143,151,121]
  },
  ash: {
    hex: '#b2beb5',
    hsl: [135,8,72],
    rgb: [178,190,181]
  },
  asparagus: {
    hex: '#87a96b',
    hsl: [93,26,54],
    rgb: [135,169,107]
  },
  aureolin: {
    hex: '#fdee00',
    hsl: [56,100,50],
    rgb: [253,238,0]
  },
  azure: {
    hex: '#0080ff',
    hsl: [210,100,50],
    rgb: [0,128,255]
  },
  beige: {
    hex: '#f5f5dc',
    hsl: [60,56,91],
    rgb: [245,245,220]
  },
  bisque: {
    hex: '#ffe4c4',
    hsl: [33,100,88],
    rgb: [255,228,196]
  },
  bistre: {
    hex: '#3d2b1f',
    hsl: [24,33,18],
    rgb: [61,43,31]
  },
  black: {
    hex: '#000000',
    hsl: [0,0,0],
    rgb: [0,0,0]
  },
  blond: {
    hex: '#faf0be',
    hsl: [50,86,86],
    rgb: [250,240,190]
  },
  blood: {
    hex: '#960000',
    hsl: [0,100,29],
    rgb: [150,0,0]
  },
  blue: {
    hex: '#0000ff',
    hsl: [240,100,50],
    rgb: [0,0,255]
  },
  blueberry: {
    hex: '#4f86f7',
    hsl: [220,91,64],
    rgb: [79,134,247]
  },
  bluetiful: {
    hex: '#3c69e7',
    hsl: [224,78,57],
    rgb: [60,105,231]
  },
  blurple: {
    hex: '#7289da',
    hsl: [227,58,65],
    rgb: [114,137,218]
  },
  blush: {
    hex: '#ffb3bf',
    hsl: [351,100,85],
    rgb: [255,179,191]
  },
  bone: {
    hex: '#fffaf2',
    hsl: [37,100,97],
    rgb: [255,250,242]
  },
  brass: {
    hex: '#b5a642',
    hsl: [52,47,48],
    rgb: [181,166,66]
  },
  brick: {
    hex: '#cb4154',
    hsl: [352,57,53],
    rgb: [203,65,84]
  },
  bronze: {
    hex: '#cd7f32',
    hsl: [30,61,50],
    rgb: [205,127,50]
  },
  brown: {
    hex: '#964b00',
    hsl: [30,100,29],
    rgb: [150,75,0]
  },
  bulma: {
    hex: '#00d1b2',
    hsl: [171,100,41],
    rgb: [0,209,178]
  },
  burgundy: {
    hex: '#800020',
    hsl: [345,100,25],
    rgb: [128,0,32]
  },
  butter: {
    hex: '#fffcc3',
    hsl: [57,100,88],
    rgb: [255,252,195]
  },
  cadet: {
    hex: '#536872',
    hsl: [199,16,39],
    rgb: [83,104,114]
  },
  canary: {
    hex: '#ffff99',
    hsl: [60,100,80],
    rgb: [255,255,153]
  },
  capri: {
    hex: '#00bfff',
    hsl: [195,100,50],
    rgb: [0,191,255]
  },
  carmine: {
    hex: '#960018',
    hsl: [350,100,29],
    rgb: [150,0,24]
  },
  carrot: {
    hex: '#ed9121',
    hsl: [33,85,53],
    rgb: [237,145,33]
  },
  catawba: {
    hex: '#703642',
    hsl: [348,35,33],
    rgb: [112,54,66]
  },
  celadon: {
    hex: '#ace1af',
    hsl: [123,47,78],
    rgb: [172,225,175]
  },
  celeste: {
    hex: '#b2ffff',
    hsl: [180,100,85],
    rgb: [178,255,255]
  },
  cerise: {
    hex: '#de3163',
    hsl: [343,72,53],
    rgb: [222,49,99]
  },
  cerulean: {
    hex: '#007ba7',
    hsl: [196,100,33],
    rgb: [0,123,167]
  },
  champagne: {
    hex: '#f7e7ce',
    hsl: [37,72,89],
    rgb: [247,231,206]
  },
  charcoal: {
    hex: '#36454f',
    hsl: [204,19,26],
    rgb: [54,69,79]
  },
  chartreuse: {
    hex: '#7fff00',
    hsl: [90,100,50],
    rgb: [127,255,0]
  },
  cinnabar: {
    hex: '#e44d2e',
    hsl: [10,77,54],
    rgb: [228,77,46]
  },
  cinnamon: {
    hex: '#d2691e',
    hsl: [25,75,47],
    rgb: [210,105,30]
  },
  cloud: {
    hex: '#f7fff9',
    hsl: [135,100,98],
    rgb: [247,255,249]
  },
  coral: {
    hex: '#ff7f50',
    hsl: [16,100,66],
    rgb: [255,127,80]
  },
  cornflower: {
    hex: '#9aceeb',
    hsl: [201,67,76],
    rgb: [154,206,235]
  },
  cream: {
    hex: '#feeddc',
    hsl: [30,94,93],
    rgb: [254,237,220]
  },
  crimson: {
    hex: '#dc143c',
    hsl: [348,83,47],
    rgb: [220,20,60]
  },
  cyan: {
    hex: '#00ffff',
    hsl: [180,100,50],
    rgb: [0,255,255]
  },
  daffodil: {
    hex: '#ffff31',
    hsl: [60,100,60],
    rgb: [255,255,49]
  },
  dandelion: {
    hex: '#f0e130',
    hsl: [55,86,56],
    rgb: [240,225,48]
  },
  dark: {
    hex: '#23272a',
    hsl: [206,9,15],
    rgb: [35,39,42]
  },
  denim: {
    hex: '#1b4b71',
    hsl: [207,61,27],
    rgb: [27,75,113]
  },
  drab: {
    hex: '#828344',
    hsl: [61,32,39],
    rgb: [130,131,68]
  },
  dusk: {
    hex: '#4e5481',
    hsl: [233,25,41],
    rgb: [78,84,129]
  },
  dust: {
    hex: '#737678',
    hsl: [204,2,46],
    rgb: [115,118,120]
  },
  ebony: {
    hex: '#91634d',
    hsl: [19,31,44],
    rgb: [145,99,77]
  },
  eggplant: {
    hex: '#380835',
    hsl: [304,75,13],
    rgb: [56,8,53]
  },
  eggshell: {
    hex: '#f0ead6',
    hsl: [46,46,89],
    rgb: [240,234,214]
  },
  eigengrau: {
    hex: '#16161d',
    hsl: [240,14,10],
    rgb: [22,22,29]
  },
  emerald: {
    hex: '#50c878',
    hsl: [140,52,55],
    rgb: [80,200,120]
  },
  eminence: {
    hex: '#6c3082',
    hsl: [284,46,35],
    rgb: [108,48,130]
  },
  erin: {
    hex: '#00ff40',
    hsl: [135,100,50],
    rgb: [0,255,64]
  },
  fandango: {
    hex: '#b53389',
    hsl: [320,56,45],
    rgb: [181,51,137]
  },
  feldgrau: {
    hex: '#4d5d53',
    hsl: [143,9,33],
    rgb: [77,93,83]
  },
  firebrick: {
    hex: '#b22222',
    hsl: [0,68,42],
    rgb: [178,34,34]
  },
  flame: {
    hex: '#e25822',
    hsl: [17,77,51],
    rgb: [226,88,34]
  },
  flirt: {
    hex: '#a2006d',
    hsl: [320,100,32],
    rgb: [162,0,109]
  },
  fuchsia: {
    hex: '#fe007c',
    hsl: [331,100,50],
    rgb: [254,0,124]
  },
  gainsboro: {
    hex: '#dcdcdc',
    hsl: [0,0,86],
    rgb: [220,220,220]
  },
  gamboge: {
    hex: '#d29f28',
    hsl: [42,68,49],
    rgb: [210,159,40]
  },
  glaucous: {
    hex: '#6082b6',
    hsl: [216,37,55],
    rgb: [96,130,182]
  },
  gold: {
    hex: '#ffd700',
    hsl: [51,100,50],
    rgb: [255,215,0]
  },
  goldenrod: {
    hex: '#daa520',
    hsl: [43,74,49],
    rgb: [218,165,32]
  },
  grape: {
    hex: '#6f2da8',
    hsl: [272,58,42],
    rgb: [111,45,168]
  },
  gray: {
    hex: '#808080',
    hsl: [0,0,50],
    rgb: [128,128,128]
  },
  green: {
    hex: '#00ff00',
    hsl: [120,100,50],
    rgb: [0,255,0]
  },
  grey: {
    hex: '#929591',
    hsl: [105,2,58],
    rgb: [146,149,145]
  },
  gunmetal: {
    hex: '#2a3439',
    hsl: [200,15,19],
    rgb: [42,52,57]
  },
  harlequin: {
    hex: '#3fff00',
    hsl: [105,100,50],
    rgb: [63,255,0]
  },
  heliotrope: {
    hex: '#df73ff',
    hsl: [286,100,73],
    rgb: [223,115,255]
  },
  honey: {
    hex: '#f5be05',
    hsl: [46,96,49],
    rgb: [245,190,5]
  },
  honeydew: {
    hex: '#f0fff0',
    hsl: [120,100,97],
    rgb: [240,255,240]
  },
  honeysuckle: {
    hex: '#eae86f',
    hsl: [59,75,68],
    rgb: [234,232,111]
  },
  ice: {
    hex: '#d6fffa',
    hsl: [173,100,92],
    rgb: [214,255,250]
  },
  icterine: {
    hex: '#fcf75e',
    hsl: [58,96,68],
    rgb: [252,247,94]
  },
  indigo: {
    hex: '#4b0082',
    hsl: [275,100,25],
    rgb: [75,0,130]
  },
  ivory: {
    hex: '#fffff0',
    hsl: [60,100,97],
    rgb: [255,255,240]
  },
  jade: {
    hex: '#00a86b',
    hsl: [158,100,33],
    rgb: [0,168,107]
  },
  jasmine: {
    hex: '#f8de7e',
    hsl: [47,90,73],
    rgb: [248,222,126]
  },
  jasper: {
    hex: '#d73b3e',
    hsl: [359,66,54],
    rgb: [215,59,62]
  },
  jet: {
    hex: '#343434',
    hsl: [0,0,20],
    rgb: [52,52,52]
  },
  jungle: {
    hex: '#29ab87',
    hsl: [163,61,42],
    rgb: [41,171,135]
  },
  kelly: {
    hex: '#4cbb17',
    hsl: [101,78,41],
    rgb: [76,187,23]
  },
  kepel: {
    hex: '#3ab09e',
    hsl: [171,50,46],
    rgb: [58,176,158]
  },
  khaki: {
    hex: '#bab37e',
    hsl: [53,30,61],
    rgb: [186,179,126]
  },
  lavender: {
    hex: '#cfb5e2',
    hsl: [275,44,80],
    rgb: [207,181,226]
  },
  liberty: {
    hex: '#545aa7',
    hsl: [236,33,49],
    rgb: [84,90,167]
  },
  lilac: {
    hex: '#d1c9ff',
    hsl: [249,100,89],
    rgb: [209,201,255]
  },
  lime: {
    hex: '#bfff00',
    hsl: [75,100,50],
    rgb: [191,255,0]
  },
  linen: {
    hex: '#faf0e6',
    hsl: [30,67,94],
    rgb: [250,240,230]
  },
  magenta: {
    hex: '#ff00ff',
    hsl: [300,100,50],
    rgb: [255,0,255]
  },
  malachite: {
    hex: '#285044',
    hsl: [162,33,24],
    rgb: [40,80,68]
  },
  marengo: {
    hex: '#4c5866',
    hsl: [212,15,35],
    rgb: [76,88,102]
  },
  marigold: {
    hex: '#e7a20b',
    hsl: [41,91,47],
    rgb: [231,162,11]
  },
  maroon: {
    hex: '#800000',
    hsl: [0,100,25],
    rgb: [128,0,0]
  },
  midnight: {
    hex: '#140036',
    hsl: [262,100,11],
    rgb: [20,0,54]
  },
  mint: {
    hex: '#aefac6',
    hsl: [139,88,83],
    rgb: [174,250,198]
  },
  mirror: {
    hex: '#d6d6d6',
    hsl: [0,0,84],
    rgb: [214,214,214]
  },
  moonstone: {
    hex: '#3aa8c1',
    hsl: [191,54,49],
    rgb: [58,168,193]
  },
  moss: {
    hex: '#8a9a5b',
    hsl: [75,26,48],
    rgb: [138,154,91]
  },
  navy: {
    hex: '#000080',
    hsl: [240,100,25],
    rgb: [0,0,128]
  },
  neon: {
    hex: '#39ff14',
    hsl: [111,100,54],
    rgb: [57,255,20]
  },
  nice: {
    hex: '#696969',
    hsl: [0,0,41],
    rgb: [105,105,105]
  },
  olive: {
    hex: '#808000',
    hsl: [60,100,25],
    rgb: [128,128,0]
  },
  orange: {
    hex: '#ff8000',
    hsl: [30,100,50],
    rgb: [255,128,0]
  },
  orangered: {
    hex: '#fc5123',
    hsl: [13,97,56],
    rgb: [252,81,35]
  },
  orchid: {
    hex: '#da70d6',
    hsl: [302,59,65],
    rgb: [218,112,214]
  },
  peach: {
    hex: '#fdbb8d',
    hsl: [25,97,77],
    rgb: [253,187,141]
  },
  periwinkle: {
    hex: '#ccccff',
    hsl: [240,100,90],
    rgb: [204,204,255]
  },
  phlox: {
    hex: '#df00ff',
    hsl: [292,100,50],
    rgb: [223,0,255]
  },
  pine: {
    hex: '#156149',
    hsl: [161,64,23],
    rgb: [21,97,73]
  },
  pink: {
    hex: '#ffc0cb',
    hsl: [350,100,88],
    rgb: [255,192,203]
  },
  puce: {
    hex: '#cc8899',
    hsl: [345,40,67],
    rgb: [204,136,153]
  },
  purple: {
    hex: '#800080',
    hsl: [300,100,25],
    rgb: [128,0,128]
  },
  purpureus: {
    hex: '#9a4eae',
    hsl: [288,38,49],
    rgb: [154,78,174]
  },
  quicksilver: {
    hex: '#a6a6a6',
    hsl: [0,0,65],
    rgb: [166,166,166]
  },
  quince: {
    hex: '#d4cb60',
    hsl: [55,57,60],
    rgb: [212,203,96]
  },
  red: {
    hex: '#ff0000',
    hsl: [0,100,50],
    rgb: [255,0,0]
  },
  rose: {
    hex: '#ff007f',
    hsl: [330,100,50],
    rgb: [255,0,127]
  },
  royal: {
    hex: '#0c1793',
    hsl: [235,85,31],
    rgb: [12,23,147]
  },
  ruby: {
    hex: '#e0115f',
    hsl: [337,86,47],
    rgb: [224,17,95]
  },
  sage: {
    hex: '#87ae73',
    hsl: [100,27,57],
    rgb: [135,174,115]
  },
  salmon: {
    hex: '#fa8072',
    hsl: [6,93,71],
    rgb: [250,128,114]
  },
  sapphire: {
    hex: '#0f52ba',
    hsl: [216,85,39],
    rgb: [15,82,186]
  },
  scarlet: {
    hex: '#ff2400',
    hsl: [8,100,50],
    rgb: [255,36,0]
  },
  seashell: {
    hex: '#fff5ee',
    hsl: [25,100,97],
    rgb: [255,245,238]
  },
  seedling: {
    hex: '#c0cba1',
    hsl: [76,29,71],
    rgb: [192,203,161]
  },
  sepia: {
    hex: '#704214',
    hsl: [30,70,26],
    rgb: [112,66,20]
  },
  shamrock: {
    hex: '#3abf31',
    hsl: [116,59,47],
    rgb: [58,191,49]
  },
  silver: {
    hex: '#c0c0c0',
    hsl: [0,0,75],
    rgb: [192,192,192]
  },
  skobeloff: {
    hex: '#007474',
    hsl: [180,100,23],
    rgb: [0,116,116]
  },
  sky: {
    hex: '#afdaf1',
    hsl: [201,70,82],
    rgb: [175,218,241]
  },
  slate: {
    hex: '#708090',
    hsl: [210,13,50],
    rgb: [112,128,144]
  },
  smalt: {
    hex: '#003399',
    hsl: [220,100,30],
    rgb: [0,51,153]
  },
  snow: {
    hex: '#fffafa',
    hsl: [0,100,99],
    rgb: [255,250,250]
  },
  spring: {
    hex: '#00ff7f',
    hsl: [150,100,50],
    rgb: [0,255,127]
  },
  straw: {
    hex: '#e4d96f',
    hsl: [54,68,66],
    rgb: [228,217,111]
  },
  tan: {
    hex: '#d2b48c',
    hsl: [34,44,69],
    rgb: [210,180,140]
  },
  taupe: {
    hex: '#483c32',
    hsl: [27,18,24],
    rgb: [72,60,50]
  },
  teal: {
    hex: '#008080',
    hsl: [180,100,25],
    rgb: [0,128,128]
  },
  thistle: {
    hex: '#d8bfd8',
    hsl: [300,24,80],
    rgb: [216,191,216]
  },
  timberwolf: {
    hex: '#dbd7d2',
    hsl: [33,11,84],
    rgb: [219,215,210]
  },
  tomato: {
    hex: '#ff6347',
    hsl: [9,100,64],
    rgb: [255,99,71]
  },
  turquoise: {
    hex: '#40e0d0',
    hsl: [174,72,56],
    rgb: [64,224,208]
  },
  ube: {
    hex: '#8878c3',
    hsl: [253,38,62],
    rgb: [136,120,195]
  },
  ultramarine: {
    hex: '#3f00ff',
    hsl: [255,100,50],
    rgb: [63,0,255]
  },
  umber: {
    hex: '#635147',
    hsl: [21,16,33],
    rgb: [99,81,71]
  },
  verdigris: {
    hex: '#43b3ae',
    hsl: [177,46,48],
    rgb: [67,179,174]
  },
  vermillion: {
    hex: '#ff3f00',
    hsl: [15,100,50],
    rgb: [255,63,0]
  },
  violet: {
    hex: '#7f00ff',
    hsl: [270,100,50],
    rgb: [127,0,255]
  },
  viridian: {
    hex: '#40826d',
    hsl: [161,34,38],
    rgb: [64,130,109]
  },
  volt: {
    hex: '#ceff00',
    hsl: [72,100,50],
    rgb: [206,255,0]
  },
  wasabi: {
    hex: '#afd77f',
    hsl: [87,52,67],
    rgb: [175,215,127]
  },
  water: {
    hex: '#d4f1f9',
    hsl: [193,76,90],
    rgb: [212,241,249]
  },
  wheat: {
    hex: '#f5deb3',
    hsl: [39,77,83],
    rgb: [245,222,179]
  },
  white: {
    hex: '#ffffff',
    hsl: [0,0,100],
    rgb: [255,255,255]
  },
  xanadu: {
    hex: '#738678',
    hsl: [136,8,49],
    rgb: [115,134,120]
  },
  xanthic: {
    hex: '#666057',
    hsl: [36,8,37],
    rgb: [102,96,87]
  },
  xeron: {
    hex: '#00a86b',
    hsl: [158,100,33],
    rgb: [0,168,107]
  },
  xoxo: {
    hex: '#f08497',
    hsl: [349,78,73],
    rgb: [240,132,151]
  },
  yellow: {
    hex: '#ffff00',
    hsl: [60,100,50],
    rgb: [255,255,0]
  },
  yoshi: {
    hex: '#55aa00',
    hsl: [90,100,33],
    rgb: [85,170,0]
  },
  zaffre: {
    hex: '#0014a8',
    hsl: [233,100,33],
    rgb: [0,20,168]
  },
  zinnwaldite: {
    hex: '#ebc2af',
    hsl: [19,60,80],
    rgb: [235,194,175]
  },
  zomp: {
    hex: '#39a78e',
    hsl: [166,49,44],
    rgb: [57,167,142]
  }
};

export default colors;
export { colorData };
