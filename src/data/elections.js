const info = {
  california: {
    acronym: 'CA',
    neighbors: ['oregon', 'nevada', 'arizona'],
    population: { 2020: 39_538_223, },
  },
  texas: {
    acronym: 'TX',
    neighbors: ['louisiana', 'arkansas', 'oklahoma', 'new_mexico']
  }
};

const data = {
  elections: [
    'california', 'texas', 'florida', 'new_york', 'pennsylvania', 
    'illinois', 'ohio', 'georgia', 'north_carolina', 'michigan',
    'new_jersey', 'virginia', 'washington', 'arizona', 'tennessee',
    'massachusetts', 'indiana', 'missouri', 'maryland', 'colorado',
    'wisconsin', 'minnesota', 'south_carolina', 'alabama', 'louisiana',
    'kentucky', 'oregon', 'oklahoma', 'connecticut', 'utah', 'nevada',
    'iowa', 'arkansas', 'mississippi', 'kansas', 'new_mexico', 
    // 'nebraska', 'idaho', 'west_virginia', 'hawaii', 'new_hampshire', 
    // 'maine', 'montana', 'rhode_island', 'delaware', 'south_dakota', 
    // 'north_dakota', 'alaska', 'district_of_columbia', 'vermont',
    // 'wyoming'
  ],
  national: [
    [81_268_924, 74_216_154],
    [65_853_514, 62_984_828],
    [65_915_795, 60_933_504],
    [69_498_516, 59_948_323],
    [59_028_444, 62_040_610],
    [50_999_897, 50_456_002],
    [47_401_185, 39_197_469],
    [44_909_806, 39_104_550],
    [41_809_476, 48_886_597],
    [37_577_352, 54_455_472],
    [35_480_115, 43_903_230],
    [40_831_881, 39_148_634],
    [29_173_222, 47_168_710],
    [31_271_839, 31_783_783],
    [43_127_041, 27_175_754],
  ],
  california: [
    [11_110_250, 6_006_429],
    [8_753_788, 4_483_810],
    [7_854_285, 4_839_958],
    [8_274_473, 5_011_781],
    [6_745_485, 5_509_826],
    [5_861_203, 4_567_429],
    [5_119_835, 3_828_380],
    [5_121_325, 3_630_574],
    [4_702_233, 5_054_917],
    [3_922_519, 5_467_009],
    [3_083_661, 4_524_858],
    [3_742_284, 3_882_244],
    [3_475_847, 4_602_096],
    [3_244_318, 3_467_664],
    [4_171_877, 2_879_108],
  ],
  texas: [
    [5_259_126, 5_890_347],
    [3_877_868, 4_685_047],
    [3_308_124, 4_569_843],
    [3_528_633, 4_479_328],
    [2_832_704, 4_526_917],
    [2_433_746, 3_799_639],
    [2_459_683, 2_736_167],
    [2_281_815, 2_496_071],
    [2_352_748, 3_036_829],
    [1_949_276, 3_433_428],
    [1_881_147, 2_510_705],
    [2_082_319, 1_953_300],
    [1_154_291, 2_298_896],
    [1_266_804, 1_227_844],
    [1_663_185, 958_566],
  ],
  florida: [
    [5_297_045, 5_668_731],
    [4_504_975, 4_617_886],
    [4_237_756, 4_163_447],
    [4_282_074, 4_045_624],
    [3_583_544, 3_964_522],
    [2_912_253, 2_912_790],
    [2_546_870, 2_244_536],
    [2_072_698, 2_173_310],
    [1_656_701, 2_618_885],
    [1_448_816, 2_730_350],
    [1_419_475, 2_046_951],
    [1_636_000, 1_469_531],
    [718_117, 1_857_759],
    [676_794, 886_804],
    [948_540, 905_941],
  ],
  new_york: [
    [5_244_006, 3_250_230],
    [4_556_142, 2_819_557],
    [4_485_741, 2_490_431],
    [4_804_945, 2_752_771],
    [4_314_280, 2_962_567],
    [4_107_697, 2_403_374],
    [3_756_177, 1_933_492],
    [3_444_450, 2_346_649],
    [3_347_882, 3_081_871],
    [3_119_609, 3_664_763],
    [2_728_372, 2_893_831],
    [3_389_558, 3_100_791],
    [2_951_084, 4_192_778],
    [3_378_470, 3_007_932],
    [4_913_156, 2_243_559],
  ],
  pennsylvania: [
    [3_458_229, 3_377_674],
    [2_926_441, 2_970_733],
    [2_990_274, 2_680_434],
    [3_276_363, 2_655_885],
    [2_938_095, 2_793_847],
    [2_485_967, 2_281_127],
    [2_194_944, 2_300_087],
    [2_228_131, 2_584_323],
    [2_328_677, 2_205_604],
    [1_796_951, 2_714_521],
    [3_130_954, 1_673_657],
    [2_556_282, 2_439_956],
    [1_981_769, 2_585_252],
    [2_146_269, 2_415_789],
    [1_752_426, 1_902_197],
  ],
  illinois: [
    [3_471_915, 2_446_891],
    [3_090_729, 2_146_015],
    [3_019_512, 2_135_216],
    [3_419_348, 2_031_179],
    [2_891_550, 2_345_946],
    [2_589_026, 2_019_421],
    [2_341_744, 1_587_021],
    [2_453_350, 1_734_096],
    [2_215_940, 2_310_939],
    [2_086_499, 2_707_103],
    [1_981_413, 2_358_049],
    [2_271_295, 2_364_269],
    [1_913_472, 2_788_179],
    [2_039_814, 2_174_774],
    [2_796_833, 1_905_946],
  ],
  ohio: [
    [2_679_165, 3_154_834],
    [2_394_169, 2_841_006],
    [2_827_710, 2_661_433],
    [2_940_044, 2_677_820],
    [2_741_167, 2_859_768],
    [2_186_190, 2_351_209],
    [2_148_222, 1_859_883],
    [1_984_942, 1_894_310],
    [1_939_629, 2_416_549],
    [1_825_440, 2_678_560],
    [1_752_414, 2_206_545],
    [2_011_621, 2_000_505],
    [1_558_889, 2_441_827],
    [1_700_586, 1_791_014],
    [2_498_331, 1_470_865],
  ],
  georgia: [
    [2_473_633, 2_461_854],
    [1_877_963, 2_089_104],
    [1_773_827, 2_078_688],
    [1_844_123, 2_048_759],
    [1_366_149, 1_914_254],
    [1_116_230, 1_419_720],
    [1_103_849, 1_135_843],
    [1_008_966, 995_252],
    [714_792, 1_081_331],
    [706_628, 1_068_722],
    [890_733, 654_168],
    [979_409, 483_743],
    [289_529, 881_496],
    [334_440, 380_111],
    [522_557, 616_584],
  ],
  north_carolina: [
    [2_684_292, 2_758_775],
    [2_189_316, 2_362_631],
    [2_178_391, 2_270_395],
    [2_142_651, 2_128_474],
    [1_525_849, 1_961_166],
    [1_257_692, 1_631_163],
    [1_107_849, 1_225_938],
    [1_114_042, 1_134_661],
    [890_167, 1_237_258],
    [824_287, 1_346_481],
    [875_635, 915_018],
    [927_365, 741_960],
    [438_705, 1_054_889],
    [464_113, 627_192],
    [800_139, 624_844],
  ],
  michigan: [
    [2_804_040, 2_649_852],
    [2_268_839, 2_279_543],
    [2_564_569, 2_115_256],
    [2_872_579, 2_048_639],
    [2_479_183, 2_313_746],
    [2_170_418, 1_953_139],
    [1_989_653, 1_481_212],
    [1_871_182, 1_554_940],
    [1_675_783, 1_965_486],
    [1_529_638, 2_251_571],
    [1_661_532, 1_915_225],
    [1_696_714, 1_893_742],
    [1_459_435, 1_961_721],
    [1_593_082, 1_370_665],
    [2_136_615, 1_060_152],
  ],
  new_jersey: [
    [2_608_335, 1_883_274],
    [2_148_278, 1_601_933],
    [2_125_101, 1_477_568],
    [2_215_422, 1_613_207],
    [1_911_430, 1_670_003],
    [1_788_850, 1_284_173],
    [1_652_329, 1_103_078],
    [1_436_206, 1_356_865],
    [1_320_352, 1_743_192],
    [1_261_323, 1_933_630],
    [1_147_364, 1_546_557],
    [1_444_653, 1_509_688],
    [1_102_211, 1_845_502],
    [1_264_206, 1_325_467],
    [1_867_671, 963_843],
  ],
  virginia: [
    [2_413_568, 1_962_430],
    [1_981_473, 1_769_443],
    [1_971_820, 1_822_522],
    [1_959_532, 1_725_005],
    [1_454_742, 1_716_959],
    [1_217_290, 1_437_490],
    [1_091_060, 1_138_350],
    [1_038_650, 1_150_517],
    [859_799, 1_309_162],
    [796_250, 1_337_078],
    [752_174, 989_609],
    [813_896, 836_554],
    [438_887, 988_493],
    [442_387, 590_319],
    [558_038, 481_334],
  ],
  washington: [
    [2_369_612, 1_584_651],
    [1_742_718, 1_221_747],
    [1_755_396, 1_290_670],
    [1_750_848, 1_229_216],
    [1_510_201, 1_304_894],
    [1_247_652, 1_108_864],
    [1_123_323, 840_712],
    [993_037, 731_234],
    [933_516, 903_835],
    [807_352, 1_051_670],
    [650_193, 865_244],
    [717_323, 777_732],
    [568_334, 837_135],
    [616_037, 588_510],
    [779_881, 470_366],
  ],
  arizona: [
    [1_672_143, 1_661_686],
    [1_161_167, 1_252_401],
    [1_025_232, 1_233_654],
    [1_034_707, 1_230_111],
    [893_524, 1_104_294],
    [685_341, 781_652],
    [653_288, 622_073],
    [543_050, 572_086],
    [454_029, 702_541],
    [333_854, 681_416],
    [246_843, 529_688],
    [295_602, 418_642],
    [198_540, 402_812],
    [170_514, 266_721],
    [237_753, 242_535],
  ],
  tennessee: [
    [1_143_711, 1_852_475],
    [870_695, 1_522_925],
    [960_709, 1_462_330],
    [1_087_437, 1_479_178],
    [1_036_477, 1_384_375],
    [981_720, 1_061_949],
    [909_146, 863_530],
    [933_521, 841_300],
    [679_794, 947_233],
    [711_714, 990_212],
    [783_051, 787_761],
    [825_879, 633_969],
    [357_293, 813_147],
    [351_233, 472_592],
    [634_947, 508_965],
  ],
  massachusetts: [
    [2_382_202, 1_167_202],
    [1_995_196, 1_090_893],
    [1_921_290, 1_188_314],
    [1_904_097, 1_108_854],
    [1_803_800, 1_071_109],
    [1_616_487, 878_502],
    [1_571_763, 718_107],
    [1_318_662, 805_049],
    [1_401_406, 1_194_644],
    [1_239_606, 1_310_936],
    [1_053_802, 1_057_631],
    [1_429_475, 1_030_276],
    [1_332_540, 1_112_078],
    [1_469_218, 766_844],
    [1_786_422, 549_727],
  ],
  indiana: [
    [1_242_416, 1_729_516],
    [1_033_126, 1_557_286],
    [1_152_887, 1_420_543],
    [1_374_039, 1_345_648],
    [969_011, 1_479_438],
    [901_980, 1_245_836],
    [887_424, 1_006_693],
    [848_420, 989_375],
    [860_643, 1_297_763],
    [841_481, 1_377_230],
    [844_197, 1_255_656],
    [1_014_714, 1_183_958],
    [708_568, 1_405_154],
    [806_659, 1_067_885],
    [1_170_848, 911_118],
  ], 
  missouri: [
    [1_253_014, 1_718_736],
    [1_071_068, 1_594_511],
    [1_223_796, 1_482_440],
    [1_441_911, 1_445_814],
    [1_259_171, 1_455_713],
    [1_111_138, 1_189_924],
    [1_025_935, 890_016],
    [1_053_873, 811_159],
    [1_001_619, 1_084_953],
    [848_583, 1_274_188],
    [931_182, 1_074_181],
    [998_387, 927_443],
    [698_531, 1_154_058],
    [791_444, 811_932],
    [1_164_344, 653_535],
  ], 
  maryland: [
    [1_985_023, 976_414],
    [1_677_928, 943_169],
    [1_677_844, 971_869],
    [1_629_467, 959_862],
    [1_334_493, 1_024_703],
    [1_145_782, 813_797],
    [966_207, 681_530],
    [988_571, 707_094],
    [826_304, 876_167],
    [787_935, 879_918],
    [726_161, 680_606],
    [759_612, 672_661],
    [505_781, 829_305],
    [538_310, 517_995],
    [730_912, 385_495],
  ], 
  colorado: [
    [1_804_196, 1_364_471],
    [1_338_870, 1_202_484],
    [1_323_101, 1_185_243],
    [1_288_633, 1_073_629],
    [1_001_732, 1_101_255],
    [738_227, 883_748],
    [671_152, 691_848],
    [629_681, 562_850],
    [621_453, 728_177],
    [454_974, 821_818],
    [367_973, 652_264],
    [460_353, 584_367],
    [329_980, 597_189],
    [335_174, 409_345],
    [476_024, 296_767],
  ],
  wisconsin: [
    [1_630_673, 1_610_065],
    [1_382_536, 1_405_284],
    [1_620_985, 1_407_966],
    [1_677_211, 1_262_393],
    [1_489_504, 1_478_120],
    [1_242_987, 1_237_279],
    [1_071_971, 845_029],
    [1_041_066, 930_855],
    [1_126_794, 1_047_499],
    [995_847, 1_198_800],
    [981_584, 1_088_845],
    [1_040_232, 1_004_987],
    [810_174, 989_430],
    [748_804, 809_997],
  ], 
  minnesota: [
    [1_717_077, 1_484_065],
    [1_367_825, 1_323_232],
    [1_546_167, 1_320_225],
    [1_573_354, 1_275_409],
    [1_445_014, 1_346_695],
    [1_168_266, 1_109_659],
    [1_120_438, 766_476],
    [1_020_997, 747_841],
    [1_109_471, 962_337],
    [1_036_364, 1_032_603],
    [954_174, 873_241],
    [1_070_440, 819_395],
    [802_346, 898_269],
    [857_738, 658_643],
    [991_117, 559_624],
  ], 
  south_carolina: [
    [1_091_541, 1_385_103],
    [855_373, 1_155_389],
    [865_941, 1_071_645],
    [862_449, 1_034_896],
    [661_699, 937_974],
    [565_561, 785_937],
    [504_051, 573_458],
    [479_514, 577_507],
    [370_554, 606_443],
    [344_470, 615_539],
    [427_560, 441_207],
    [450_825, 346_140],
    [189_270, 478_427],
    [197_486, 254_062],
    [215_700, 309_048],
  ], 
  alabama: [
    [849_624, 1_441_170],
    [729_547, 1_318_255],
    [795_696, 1_255_925],
    [813_479, 1_266_546],
    [693_933, 1_176_394],
    [692_611, 941_173],
    [662_165, 769_044],
    [690_080, 804_283],
    [549_506, 815_576],
    [551_899, 872_849],
    [636_730, 654_192],
    [659_170, 504_070],
    [256_923, 728_701],
    [196_579, 146_923],

  ], 
  louisiana: [
    [856_034, 1_255_776],
    [780_154, 1_178_638],
    [809_141, 1_152_262],
    [782_989, 1_148_275],
    [820_299, 1_102_169],
    [792_344, 927_871],
    [927_837, 712_586],
    [815_971, 733_386],
    [734_281, 883_702],
    [651_586, 1_037_299],
    [708_453, 792_853],
    [661_365, 587_446],
    [298_142, 686_852],
    [309_615, 257_535],
    [387_068, 509_225],
  ],
  kentucky: [
    [772_474, 1_326_646],
    [628_854, 1_202_971],
    [679_370, 1_087_190],
    [751_985, 1_048_462],
    [712_733, 1_069_439],
    [638_898, 872_492],
    [636_614, 623_283],
    [665_104, 617_178],
    [580_368, 734_281],
    [539_589, 822_785],
    [616_417, 635_274],
    [615_717, 531_852],
    [371_159, 676_446],
    [397_541, 462_411],
    [669_659, 372_977],
  ], 
  oregon: [
    [1_340_383, 958_448],
    [1_002_106, 782_403],
    [970_488, 754_175],
    [1_037_291, 738_475],
    [943_163, 866_831],
    [720_342, 713_577],
    [649_641, 538_152],
    [621_314, 475_757],
    [616_206, 560_126],
    [536_479, 685_700],
    [456_890, 571_044],
    [490_407, 492_120],
    [392_760, 486_686],
    [358_866, 408_433],
    [501_017, 282_779],
  ], 
  oklahoma: [
    [503_890, 1_020_280],
    [420_375, 949_136],
    [443_547, 891_325],
    [502_496, 960_165],
    [503_966, 959_792],
    [474_276, 744_337],
    [488_105, 582_315],
    [473_066, 592_929],
    [483_423, 678_367],
    [385_080, 861_530],
    [402_026, 695_570],
    [532_442, 545_708],
    [247_147, 759_025],
    [301_658, 449_697],
    [519_834, 412_665],
  ], 
  connecticut: [
    [1_080_680, 715_291],
    [897_572, 673_215],
    [905_083, 634_892],
    [997_772, 629_428],
    [857_488, 693_826],
    [816_015, 561_094],
    [735_740, 483_109],
    [682_318, 578_313],
    [676_584, 750_241],
    [569_597, 890_877],
    [541_732, 677_210],
    [647_895, 719_261],
    [555_498, 810_763],
    [621_561, 556_721],
    [826_269, 390_996],
  ], 
  utah: [
    [560_282, 865_140],
    [310_676, 515_231],
    [251_813, 740_600],
    [327_670, 596_030],
    [241_199, 663_742],
    [203_053, 515_096],
    [221_633, 361_911],
    [203_400, 322_632],
    [207_343, 428_442],
    [155_369, 469_105],
    [124_266, 439_687],
    [182_110, 337_908],
    [126_284, 323_643],
    [156_665, 238_728],
    [219_628, 180_682],
  ], 
  nevada: [
    [703_486, 669_890],
    [539_260, 512_058],
    [531_373, 463_567],
    [533_736, 412_827],
    [397_190, 418_690],
    [279_978, 301_575],
    [203_974, 199_244],
    [189_148, 175_828],
    [132_738, 206_040],
    [91_655, 188_770],
    [66_666, 155_017],
    [92_479, 101_273],
    [66_016, 115_750],
    [60_598, 73_188],
    [79_339, 56_094],
  ],
  iowa: [
    [759_061, 897_672],
    [653_669, 800_983],
    [822_544, 730_617],
    [828_940, 682_379],
    [741_898, 751_957],
    [638_517, 634_373],
    [620_258, 492_644],
    [586_353, 504_891],
    [670_557, 545_355],
    [605_620, 703_088],
    [508_672, 676_026],
    [619_931, 632_863],
    [496_206, 706_207],
    [476_699, 619_106],
    [733_030, 449_148],
  ], 
  arkansas: [
    [423_932, 760_647],
    [380_494, 684_872],
    [394_409, 647_744],
    [422_310, 638_017],
    [469_953, 572_898],
    [422_768, 472_940],
    [475_171, 325_416],
    [505_823, 337_324],
    [349_237, 466_578],
    [338_646, 534_774],
    [398_041, 403_164],
    [499_614, 268_753],
    [198_892, 448_541],
    [190_759, 240_982],
    [314_197, 243_264],
  ], 
  mississippi: [
    [539_508, 756_789],
    [485_131, 700_714],
    [562_949, 710_746],
    [554_662, 724_597],
    [458_094, 684_981],
    [404_614, 572_844],
    [394_022, 439_838],
    [400_258, 487_793],
    [363_921, 557_890],
    [352_192, 581_477],
    [429_281, 441_089],
    [381_309, 366_846],
    [126_782, 505_125],
    [150_644, 88_516],
    [52_618, 356_528],
  ], 
  kansas: [
    [570_323, 771_406],
    [427_005, 671_018],
    [440_726, 692_634],
    [514_765, 699_655],
    [434_993, 736_456],
    [399_276, 622_332],
    [387_659, 583_245],
    [390_434, 449_951],
    [422_636, 554_049],
    [333_149, 677_296],
    [326_150, 566_812],
    [430_421, 502_752],
    [270_287, 619_812],
    [302_996, 478_674],
    [464_028, 386_579],
  ], 
  new_mexico: [
    [501_614, 401_894],
    [385_234, 319_667],
    [415_335, 335_788],
    [472_422, 346_832],
    [370_942, 376_930],
    [286_783, 286_417],
    [273_495, 232_751],
    [261_617, 212_824],
    [244_497, 270_341],
    [201_769, 307_101],
    [167_826, 250_779],
    [201_148, 211_419],
    [141_084, 235_606],
    [130_081, 169_692],
    [194_015, 131_838],
  ],

};

export default data;
export { info };
