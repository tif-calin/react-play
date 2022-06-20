const stateRedistrictingData: Record<string, { 2020?: number, 2022?: number }[]> = {
	'Alabama': [
		{ 2020: 0.34030744999999996, 2022: 0.341080999274311, },
		{ 2020: 0.33493595, 2022: 0.3320782612676385, },
		{ 2020: 0.32381760000000004, 2022: 0.304425393785469, },
		{ 2020: 0.16770524999999997, 2022: 0.1754055179867045, },
		{ 2020: 0.33811559999999996, 2022: 0.33926675209793455, },
		{ 2020: 0.2919516, 2022: 0.320072757588473, },
		{ 2020: 0.69359375, 2022: 0.643201874868929, },
	],
	'Arizona': [
		{ 2020: 0.4718338, 2022: 0.4660658431396723, },
		{ 2020: 0.51141047, 2022: 0.423129629906608, },
		{ 2020: 0.6078578, 2022: 0.7195682307810385, },
		{ 2020: 0.2761963, 2022: 0.5059510284840883, },
		{ 2020: 0.38425165, 2022: 0.37910288967875, },
		{ 2020: 0.43745615, 2022: 0.4639681201224453, },
		{ 2020: 0.71276315, 2022: 0.633718110250048, },
		{ 2020: 0.3796233, 2022: 0.39097195541798, },
		{ 2020: 0.5730213, 2022: 0.33314146838965, },
	],
	'Arkansas': [
		{ 2020: 0.2835278, 2022: 0.2815120411700045, },
		{ 2020: 0.43126315, 2022: 0.413755024053977, },
		{ 2020: 0.33726765000000003, 2022: 0.35526521064495153, },
		{ 2020: 0.2970863, 2022: 0.3039372415489425, },
	],
	'California': [
		{ 2020: 0.54072176, 2022: 0.34661450928063, },
		{ 2020: 0.58310145, 2022: 0.5800177792616655, },
		{ 2020: 0.6474001, 2022: 0.550450672538686, },
		{ 2020: 0.8424875999999999, 2022: 0.4227659406061235, },
		{ 2020: 0.68290425, 2022: 0.618614413312402, },
		{ 2020: 0.7072541, 2022: 0.5593952065434336, },
		{ 2020: 0.65920795, 2022: 0.574998829571962, },
		{ 2020: 0.6238286, 2022: 0.5376643356124579, },
		{ 2020: 0.5822411, 2022: 0.6507406596667991, },
		{ 2020: 0.542521765, 2022: 0.7533053881806571, },
		{ 2020: 0.5429406, 2022: 0.7225761747013645, },
		{ 2020: 0.48855276, 2022: 0.645440563174396, },
		{ 2020: 0.4953914265, 2022: 0.6911214646301505, },
		{ 2020: 0.8151591, 2022: 0.722172122860936, },
		{ 2020: 0.61562525, 2022: 0.4614690818549724, },
		{ 2020: 0.6839854, 2022: 0.5274587464719208, },
		{ 2020: 0.7529222499999999, 2022: 0.636601661448485, },
		{ 2020: 0.7182636, 2022: 0.610167232264302, },
		{ 2020: 0.43619975, 2022: 0.680640117180794, },
		{ 2020: 0.525532425, 2022: 0.377677511565392, },
		{ 2020: 0.6533476, 2022: 0.670148571157306, },
		{ 2020: 0.7702254, 2022: 0.856206165437537, },
		{ 2020: 0.6570684, 2022: 0.8827009202695406, },
		{ 2020: 0.88149375, 2022: 0.5361359010590216, },
		{ 2020: 0.6001096, 2022: 0.7088417039478835, },
		{ 2020: 0.79615795, 2022: 0.769743802698284, },
		{ 2020: 0.70673475, 2022: 0.746961204162906, },
		{ 2020: 0.535644925, 2022: 0.727193707741168, },
		{ 2020: 0.71281395, 2022: 0.707682003977484, },
		{ 2020: 0.59383775, 2022: 0.677211894075707, },
		{ 2020: 0.7503976, 2022: 0.614527744133426, },
		{ 2020: 0.545823755, 2022: 0.817130661333216, },
		{ 2020: 0.6987499, 2022: 0.6311095289413465, },
		{ 2020: 0.528919095, 2022: 0.701277803163517, },
		{ 2020: 0.7312366, 2022: 0.8595438265471556, },
		{ 2020: 0.4300356, 2022: 0.6408084052003284, },
		{ 2020: 0.3885691, 2022: 0.615554000103417, },
		{ 2020: 0.42064745000000003, 2022: 0.6562015407536065, },
		{ 2020: 0.68242525, 2022: 0.47967152265848234, },
		{ 2020: 0.70923725, 2022: 0.4671329682053752, },
		{ 2020: 0.39712575, 2022: 0.7175054289379125, },
		{ 2020: 0.7847851, 2022: 0.814060033978259, },
		{ 2020: 0.8572957000000001, 2022: 0.735368244971904, },
		{ 2020: 0.52750276, 2022: 0.5228260537855076, },
		{ 2020: 0.42368325, 2022: 0.6472957128238385, },
		{ 2020: 0.4469151, 2022: 0.5296374184574716, },
		{ 2020: 0.5717281, 2022: 0.405835889995261, },
		{ 2020: 0.6123320999999999, 2022: 0.414735881703459, },
		{ 2020: 0.6645734, 2022: 0.5697581666828905, },
		{ 2020: 0.7262851, 2022: 0.6684309407751735, },
		{ 2020: 0.76916245, 2022: 0.7519728896428105, },
		{ 2020: 0.72265075, 2022: 0.5424317887364684, },
		{ 2020: 0.65769525, },
	],
	'Colorado': [
		{ 2020: 0.73417395, 2022: 0.7741990740588021, },
		{ 2020: 0.6152221, 2022: 0.662227925016742, },
		{ 2020: 0.4412576, 2022: 0.4264244363171775, },
		{ 2020: 0.38808624999999997, 2022: 0.37163167017369103, },
		{ 2020: 0.3965236, 2022: 0.408760579552485, },
		{ 2020: 0.5576236, 2022: 0.581811404167209, },
		{ 2020: 0.5756783, 2022: 0.5277974182549751, },
		{ 2022: 0.4854603181803864, },
	],
	'Connecticut': [
		{ 2020: 0.6036443499999999, 2022: 0.602782669412367, },
		{ 2020: 0.51313633, 2022: 0.5146960601415862, },
		{ 2020: 0.56799565, 2022: 0.559536157776757, },
		{ 2020: 0.60909385, 2022: 0.616584444991154, },
		{ 2020: 0.514187165, 2022: 0.5128021436787813, },
	],
	'Georgia': [
		{ 2020: 0.4042939, 2022: 0.401338565242466, },
		{ 2020: 0.532089725, 2022: 0.5204219221139522, },
		{ 2020: 0.33503655, 2022: 0.31026800019366096, },
		{ 2020: 0.75498075, 2022: 0.749061410544791, },
		{ 2020: 0.83845905, 2022: 0.7985973421487275, },
		{ 2020: 0.50598306, 2022: 0.3777294934757825, },
		{ 2020: 0.481840225, 2022: 0.57922341100611, },
		{ 2020: 0.3399924, 2022: 0.3260554355233285, },
		{ 2020: 0.19398454999999998, 2022: 0.268361533825769, },
		{ 2020: 0.36086470000000004, 2022: 0.34312126739147797, },
		{ 2020: 0.3787882, 2022: 0.37861839738825454, },
		{ 2020: 0.40202075000000004, 2022: 0.414537174768476, },
		{ 2020: 0.7195547, 2022: 0.761190688025312, },
		{ 2020: 0.22286424999999999, 2022: 0.27305699629413904, },
	],
	'Hawaii': [
		{ 2020: 0.6592586, 2022: 0.6590344377639266, },
		{ 2020: 0.6589756, 2022: 0.6577697907840749, },
	],
	'Idaho': [
		{ 2020: 0.2841997, 2022: 0.2712167191937635, },
		{ 2020: 0.35216464999999997, 2022: 0.3653666969798095, },
	],
	'Illinois': [
		{ 2020: 0.7369734, 2022: 0.7040461753369915, },
		{ 2020: 0.76852925, 2022: 0.6851312833481985, },
		{ 2020: 0.5506237, 2022: 0.693770632712276, },
		{ 2020: 0.8092144, 2022: 0.7207486043705035, },
		{ 2020: 0.7142519, 2022: 0.67770346957635, },
		{ 2020: 0.536860055, 2022: 0.5317114401851178, },
		{ 2020: 0.8608105500000001, 2022: 0.8509079127537645, },
		{ 2020: 0.5865229000000001, 2022: 0.559296785854779, },
		{ 2020: 0.70361325, 2022: 0.6900751001313166, },
		{ 2020: 0.6328542, 2022: 0.605678778336372, },
		{ 2020: 0.60786055, 2022: 0.550704160316077, },
		{ 2020: 0.4108022, 2022: 0.26882887489972696, },
		{ 2020: 0.462381385, 2022: 0.5334259963477535, },
		{ 2020: 0.48463089, 2022: 0.5333591331951748, },
		{ 2020: 0.25176485, 2022: 0.2887555798407735, },
		{ 2020: 0.4009279, 2022: 0.3712177937784465, },
		{ 2020: 0.476580055, 2022: 0.5186323767454813, },
		{ 2020: 0.3567324, },
	],
	'Indiana': [
		{ 2020: 0.536613935, 2022: 0.5326439064652387, },
		{ 2020: 0.37945675, 2022: 0.370414663363404, },
		{ 2020: 0.32851925000000004, 2022: 0.330055439183385, },
		{ 2020: 0.33028994999999994, 2022: 0.33414791313738146, },
		{ 2020: 0.459361265, 2022: 0.392293349781355, },
		{ 2020: 0.2867826, 2022: 0.317190141343066, },
		{ 2020: 0.61650645, 2022: 0.6857480442705525, },
		{ 2020: 0.32378625, 2022: 0.321797818658902, },
		{ 2020: 0.3629946, 2022: 0.350315219791978, },
	],
	'Iowa': [
		{ 2020: 0.47819812, 2022: 0.47993652857354596, },
		{ 2020: 0.475314285, 2022: 0.47234904147775786, },
		{ 2020: 0.48919062, 2022: 0.4883867409422209, },
		{ 2020: 0.36009159999999996, 2022: 0.3630505448292795, },
	],
	'Kansas': [
		{ 2020: 0.2672228, 2022: 0.3283885377673095, },
		{ 2020: 0.4001343, 2022: 0.3960449852586475, },
		{ 2020: 0.51794845, 2022: 0.48461342459107465, },
		{ 2020: 0.3631048, 2022: 0.3629580491850145, },
	],
	'Kentucky': [
		{ 2020: 0.26216075, 2022: 0.2828664070250765, },
		{ 2020: 0.3117144, 2022: 0.311738271638785, },
		{ 2020: 0.5992796, 2022: 0.6022760082263185, },
		{ 2020: 0.33727425, 2022: 0.33141785752270847, },
		{ 2020: 0.19289525000000002, 2022: 0.2009572669816575, },
		{ 2020: 0.4457334, 2022: 0.4343101655860595, },
	],
	'Maine': [
		{ 2020: 0.5876355, 2022: 0.5795720331065065, },
		{ 2020: 0.44400035, 2022: 0.447999127770605, },
	],
	'Maryland': [
		{ 2020: 0.36223039999999995, 2022: 0.4602391444529045, },
		{ 2020: 0.62770275, 2022: 0.5538770401524715, },
		{ 2020: 0.65774705, 2022: 0.579640951626096, },
		{ 2020: 0.7711627, 2022: 0.8100442881462055, },
		{ 2020: 0.6586669, 2022: 0.698896282915742, },
		{ 2020: 0.5775024, 2022: 0.5624843782317175, },
		{ 2020: 0.7627774, 2022: 0.7381667363556444, },
		{ 2020: 0.6678194, 2022: 0.6224964667933385, },
	],
	'Massachusetts': [
		{ 2020: 0.6224986, 2022: 0.607929992723812, },
		{ 2020: 0.6251959, 2022: 0.648620590058383, },
		{ 2020: 0.64122475, 2022: 0.631140458507158, },
		{ 2020: 0.65009175, 2022: 0.6385062290982445, },
		{ 2020: 0.74848205, 2022: 0.7487099058997679, },
		{ 2020: 0.6268539, 2022: 0.6299557428878, },
		{ 2020: 0.86757175, 2022: 0.8668268221242255, },
		{ 2020: 0.66397655, 2022: 0.6700092328733516, },
		{ 2020: 0.58383875, 2022: 0.583385730896537, },
	],
	'Michigan': [
		{ 2020: 0.39057535, 2022: 0.380170550680607, },
		{ 2020: 0.41518785, 2022: 0.34383842060355796, },
		{ 2020: 0.45727534000000003, 2022: 0.5126717318249758, },
		{ 2020: 0.36256299999999997, 2022: 0.4553850205739109, },
		{ 2020: 0.505364505, 2022: 0.3617332453476615, },
		{ 2020: 0.45462817, 2022: 0.6046384307927745, },
		{ 2020: 0.40512265, 2022: 0.4815084023520332, },
		{ 2020: 0.4696875, 2022: 0.4929411920718106, },
		{ 2020: 0.540647835, 2022: 0.3316332308568515, },
		{ 2020: 0.33086085, 2022: 0.4719248736442637, },
		{ 2020: 0.49156167, 2022: 0.573251108603859, },
		{ 2020: 0.627016, 2022: 0.718729402662899, },
		{ 2020: 0.78107235, 2022: 0.7284870457119115, },
		{ 2020: 0.7852702, },
	],
	'Minnesota': [
		{ 2020: 0.4256049, 2022: 0.429408386989043, },
		{ 2020: 0.505079425, 2022: 0.504893289703749, },
		{ 2020: 0.56439175, 2022: 0.57086857992077, },
		{ 2020: 0.65945375, 2022: 0.659577852445947, },
		{ 2020: 0.7851851, 2022: 0.784650815605206, },
		{ 2020: 0.37441825, 2022: 0.38483316123510947, },
		{ 2020: 0.33504075, 2022: 0.31598861656848753, },
		{ 2020: 0.40963445, 2022: 0.42443894040665353, },
	],
	'Mississippi': [
		{ 2020: 0.3258793, 2022: 0.32476763771574846, },
		{ 2020: 0.6265526, 2022: 0.614865470732893, },
		{ 2020: 0.3718361, 2022: 0.358679539279958, },
		{ 2020: 0.28906279999999995, 2022: 0.289477929080642, },
	],
	'Montana': [
		{ 2020: 0.40007475, 2022: 0.4496660817833035, },
		{ 2022: 0.35116655649773154, },
	],
	'Nebraska': [
		{ 2020: 0.39654235, 2022: 0.4142692248863, },
		{ 2020: 0.500004848, 2022: 0.48646091715268036, },
		{ 2020: 0.21319919999999998, 2022: 0.21640344438451697, },
	],
	'Nevada': [
		{ 2020: 0.6079514500000001, 2022: 0.5204695885775908, },
		{ 2020: 0.42220645, 2022: 0.432928462462556, },
		{ 2020: 0.475125135, 2022: 0.5092006227986613, },
		{ 2020: 0.4974571345, 2022: 0.5267832351857914, },
	],
	'New Jersey': [
		{ 2020: 0.6097333, 2022: 0.6001811179601325, },
		{ 2020: 0.466686795, 2022: 0.45425830306080217, },
		{ 2020: 0.473150795, 2022: 0.544654462506579, },
		{ 2020: 0.4243763, 2022: 0.36037460261252197, },
		{ 2020: 0.499520129, 2022: 0.5339882044699173, },
		{ 2020: 0.56241465, 2022: 0.576328479453716, },
		{ 2020: 0.5190656300000001, 2022: 0.4836548528855427, },
		{ 2020: 0.73157965, 2022: 0.7326460061859175, },
		{ 2020: 0.62063415, 2022: 0.5848159198919135, },
		{ 2020: 0.8260351, 2022: 0.7908605845319701, },
		{ 2020: 0.50629213, 2022: 0.5544095305943965, },
		{ 2020: 0.6588648, 2022: 0.6498913752904281, },
	],
	'New Mexico': [
		{ 2020: 0.5897517, 2022: 0.5565861496185495, },
		{ 2020: 0.42983455, 2022: 0.5184001888408735, },
		{ 2020: 0.57011955, 2022: 0.5227880357542521, },
	],
	'New York': [
		{ 2020: 0.451833065, 2022: 0.5295296245833474, },
		{ 2020: 0.4576234, 2022: 0.4018379048224585, },
		{ 2020: 0.5311404, 2022: 0.5491598397292194, },
		{ 2020: 0.5429894, 2022: 0.5392246617838148, },
		{ 2020: 0.8316374, 2022: 0.818553682600176, },
		{ 2020: 0.6225714, 2022: 0.617592351185802, },
		{ 2020: 0.8287036, 2022: 0.824257961636697, },
		{ 2020: 0.82599035, 2022: 0.7735849803882351, },
		{ 2020: 0.81319675, 2022: 0.774156497951933, },
		{ 2020: 0.7628057500000001, 2022: 0.760971923867259, },
		{ 2020: 0.43463505, 2022: 0.5346015673110069, },
		{ 2020: 0.8335032499999999, 2022: 0.8345968101139225, },
		{ 2020: 0.88724935, 2022: 0.8840317642122955, },
		{ 2020: 0.74071175, 2022: 0.749397584734754, },
		{ 2020: 0.87891935, 2022: 0.860011819320895, },
		{ 2020: 0.7454420500000001, 2022: 0.681104222286681, },
		{ 2020: 0.5870274, 2022: 0.5502348083250935, },
		{ 2020: 0.499562402, 2022: 0.5145339082591571, },
		{ 2020: 0.479691235, 2022: 0.5205545272931175, },
		{ 2020: 0.57750305, 2022: 0.559119119688942, },
		{ 2020: 0.42833475, 2022: 0.386058359940361, },
		{ 2020: 0.42210425, 2022: 0.5628842176857785, },
		{ 2020: 0.42378455, 2022: 0.369597790660947, },
		{ 2020: 0.522475235, 2022: 0.375093894244363, },
		{ 2020: 0.58783655, 2022: 0.5765488678802205, },
		{ 2020: 0.6088959, 2022: 0.5976242247727674, },
		{ 2020: 0.39308525, },
	],
	'North Carolina': [
		{ 2020: 0.6891027000000001, 2022: 0.5256088841787384, },
		{ 2020: 0.62915555, 2022: 0.6177022242703321, },
		{ 2020: 0.3693129, 2022: 0.357408296266858, },
		{ 2020: 0.534802215, 2022: 0.6509958463856595, },
		{ 2020: 0.6574219, 2022: 0.3799358626725955, },
		{ 2020: 0.45073188, 2022: 0.5447936494671741, },
		{ 2020: 0.39636805, 2022: 0.4221374477937555, },
		{ 2020: 0.4437814, 2022: 0.310917069201283, },
		{ 2020: 0.60449755, 2022: 0.44605368028854053, },
		{ 2020: 0.30918535, 2022: 0.287309940818586, },
		{ 2020: 0.30682185, 2022: 0.4278158785082945, },
		{ 2020: 0.30211034999999997, 2022: 0.6255855009239311, },
		{ 2020: 0.4183749, 2022: 0.487457344709271, },
		{ 2022: 0.556097907001244, },
	],
	'Ohio': [
		{ 2020: 0.457687975, 2022: 0.515568304264736, },
		{ 2020: 0.323038, 2022: 0.257248437891752, },
		{ 2020: 0.41029295, 2022: 0.689696057768823, },
		{ 2020: 0.43031965, 2022: 0.29846994828969153, },
		{ 2020: 0.25617015, 2022: 0.35033545997821003, },
		{ 2020: 0.68200265, 2022: 0.3442851049853215, },
		{ 2020: 0.452589475, 2022: 0.429656463780699, },
		{ 2020: 0.30379565, 2022: 0.3640057417507955, },
		{ 2020: 0.35448845, 2022: 0.4688202757134148, },
		{ 2020: 0.404237, 2022: 0.45755882392702124, },
		{ 2020: 0.501475643, 2022: 0.772220221378743, },
		{ 2020: 0.4064228, 2022: 0.3283711544008595, },
		{ 2020: 0.7870969999999999, 2022: 0.4904644590001643, },
		{ 2020: 0.57995345, 2022: 0.4069204374381795, },
		{ 2020: 0.31041965000000005, 2022: 0.4422361970332605, },
		{ 2020: 0.440853, },
	],
	'Oklahoma': [
		{ 2020: 0.36181739999999996, 2022: 0.35841527488501, },
		{ 2020: 0.22247240000000001, 2022: 0.22522279714389148, },
		{ 2020: 0.2263484, 2022: 0.265640225840888, },
		{ 2020: 0.31149275, 2022: 0.32314175205927154, },
		{ 2020: 0.44565155, 2022: 0.379824089881113, },
	],
	'Oregon': [
		{ 2020: 0.61707695, 2022: 0.67070116084853, },
		{ 2020: 0.4031068, 2022: 0.3600449478225395, },
		{ 2020: 0.7317454999999999, 2022: 0.7138584837622325, },
		{ 2020: 0.495232977, 2022: 0.5433915396524646, },
		{ 2020: 0.52100031, 2022: 0.5154421560104543, },
		{ 2022: 0.5347486725119234, },
	],
	'Pennsylvania': [
		{ 2020: 0.506442505, 2022: 0.49843065306687345, },
		{ 2020: 0.6300145, 2022: 0.705750777901748, },
		{ 2020: 0.5015410055, 2022: 0.8868010592928195, },
		{ 2020: 0.7005315, 2022: 0.567388508412096, },
		{ 2020: 0.488498175, 2022: 0.6380372814926085, },
		{ 2020: 0.343771, 2022: 0.545782387371917, },
		{ 2020: 0.549411505, 2022: 0.4788537906283872, },
		{ 2020: 0.90079635, 2022: 0.45901321330424577, },
		{ 2020: 0.45908434, 2022: 0.2955059506514755, },
		{ 2020: 0.59630385, 2022: 0.4525602094571504, },
		{ 2020: 0.63447, 2022: 0.36950842166279896, },
		{ 2020: 0.38815515, 2022: 0.575400633532021, },
		{ 2020: 0.2596867, 2022: 0.25486024034556254, },
		{ 2020: 0.3677905, 2022: 0.324147884430033, },
		{ 2020: 0.32538265, 2022: 0.299026482566088, },
		{ 2020: 0.26602585, 2022: 0.377443711648198, },
		{ 2020: 0.3026397, 2022: 0.5029613706582197, },
		{ 2020: 0.453063, },
	],
	'Rhode Island': [
		{ 2020: 0.66608975, 2022: 0.661938531446138, },
		{ 2020: 0.5823436, 2022: 0.5826693173452645, },
	],
	'South Carolina': [
		{ 2020: 0.4288614, 2022: 0.41439820473461697, },
		{ 2020: 0.4031609, 2022: 0.4011930280839, },
		{ 2020: 0.28201425, 2022: 0.2796794197634925, },
		{ 2020: 0.3592131, 2022: 0.36650959440965303, },
		{ 2020: 0.3841609, 2022: 0.3717244158396395, },
		{ 2020: 0.6486844, 2022: 0.623750007987021, },
		{ 2020: 0.37683025000000003, 2022: 0.3710661703199415, },
	],
	'Tennessee': [
		{ 2020: 0.19923595, 2022: 0.19760828398226848, },
		{ 2020: 0.318533, 2022: 0.320167558738349, },
		{ 2020: 0.30773215, 2022: 0.312075138520823, },
		{ 2020: 0.28310115, 2022: 0.2719288375203875, },
		{ 2020: 0.58367515, 2022: 0.42299404301161203, },
		{ 2020: 0.23588915, 2022: 0.32461845767948805, },
		{ 2020: 0.2905078, 2022: 0.39637034802967297, },
		{ 2020: 0.30790045, 2022: 0.283209255426271, },
		{ 2020: 0.76642265, 2022: 0.7134691218029735, },
	],
	'Texas': [
		{ 2020: 0.2485214, 2022: 0.381706781209883, },
		{ 2020: 0.454697435, 2022: 0.295270424214761, },
		{ 2020: 0.4474211, 2022: 0.3784649831235155, },
		{ 2020: 0.2183136, 2022: 0.274389657258572, },
		{ 2020: 0.3508546, 2022: 0.323768071181731, },
		{ 2020: 0.44410545, 2022: 0.5019002935224629, },
		{ 2020: 0.505041105, 2022: 0.665350393773385, },
		{ 2020: 0.25170444999999997, 2022: 0.364687296121475, },
		{ 2020: 0.7516424500000001, 2022: 0.715664528225454, },
		{ 2020: 0.45386527, 2022: 0.233365989946768, },
		{ 2020: 0.17847960000000002, 2022: 0.634557053596509, },
		{ 2020: 0.34894545, 2022: 0.37779509321827554, },
		{ 2020: 0.17037210000000003, 2022: 0.3816581084978725, },
		{ 2020: 0.37675495, 2022: 0.43590301096621553, },
		{ 2020: 0.508623105, 2022: 0.38846964632554, },
		{ 2020: 0.6571531, 2022: 0.349945379141538, },
		{ 2020: 0.40876775, 2022: 0.3694751022177865, },
		{ 2020: 0.7443196, 2022: 0.360898077970761, },
		{ 2020: 0.23971509999999996, 2022: 0.5326605269301107, },
		{ 2020: 0.61565825, 2022: 0.677251289789556, },
		{ 2020: 0.44896210000000003, 2022: 0.7544819428986911, },
		{ 2020: 0.458317605, 2022: 0.3633339825214475, },
		{ 2020: 0.474259935, 2022: 0.622984500501196, },
		{ 2020: 0.482283105, 2022: 0.721179161438355, },
		{ 2020: 0.41778395, 2022: 0.5871592074408355, },
		{ 2020: 0.3833506, 2022: 0.6908247144461295, },
		{ 2020: 0.35606675, 2022: 0.325767172042866, },
		{ 2020: 0.52217527, 2022: 0.7215068636776415, },
		{ 2020: 0.6609171, 2022: 0.366944209013424, },
		{ 2020: 0.77900395, 2022: 0.2500169848599585, },
		{ 2020: 0.4438306, 2022: 0.351352804663445, },
		{ 2020: 0.51239294, 2022: 0.385069403810556, },
		{ 2020: 0.7143206, 2022: 0.34713834444681646, },
		{ 2020: 0.52379694, 2022: 0.365984988976195, },
		{ 2020: 0.6545086, 2022: 0.3789325987590975, },
		{ 2020: 0.2465736, 2022: 0.622398052342779, },
		{ 2022: 0.371324049401559, },
		{ 2022: 0.7479351435110685, },
	],
	'Utah': [
		{ 2020: 0.31338265, 2022: 0.377214312198435, },
		{ 2020: 0.39133685, 2022: 0.3835270984479595, },
		{ 2020: 0.3442045, 2022: 0.36946603677812, },
		{ 2020: 0.42598815, 2022: 0.3471618459713765, },
	],
	'Virginia': [
		{ 2020: 0.4461736, 2022: 0.43204818268094347, },
		{ 2020: 0.49146812, 2022: 0.47187687241705817, },
		{ 2020: 0.6540383, 2022: 0.662259404389026, },
		{ 2020: 0.6006266, 2022: 0.6510948321846375, },
		{ 2020: 0.4347511, 2022: 0.430884970635141, },
		{ 2020: 0.3694723, 2022: 0.36116182640662053, },
		{ 2020: 0.47429995, 2022: 0.5121674375350806, },
		{ 2020: 0.7574256500000001, 2022: 0.7478988467811295, },
		{ 2020: 0.27207210000000004, 2022: 0.269716928100668, },
		{ 2020: 0.5624448, 2022: 0.5393454858924402, },
		{ 2020: 0.6872703, 2022: 0.665685175561465, },
	],
	'Washington': [
		{ 2020: 0.5697429, 2022: 0.6148315636523095, },
		{ 2020: 0.5999951, 2022: 0.5788187796898675, },
		{ 2020: 0.4479511, 2022: 0.443823319395611, },
		{ 2020: 0.37409375, 2022: 0.377138918142413, },
		{ 2020: 0.42096825, 2022: 0.416538047275047, },
		{ 2020: 0.55293725, 2022: 0.5486637325508984, },
		{ 2020: 0.83423255, 2022: 0.8401037466263825, },
		{ 2020: 0.4997547565, 2022: 0.5013771938577507, },
		{ 2020: 0.7138796000000001, 2022: 0.6919990697016515, },
		{ 2020: 0.54339342, 2022: 0.5518828365871775, },
	],
	'West Virginia': [
		{ 2020: 0.32796645, 2022: 0.3251435009220535, },
		{ 2020: 0.35366815, 2022: 0.328095065076994, },
		{ 2020: 0.2820818, },
	],
	'Wisconsin': [
		{ 2020: 0.43143935, 2022: 0.4675718944628889, },
		{ 2020: 0.6745837, 2022: 0.680246231518575, },
		{ 2020: 0.45642135500000003, 2022: 0.4566073264643657, },
		{ 2020: 0.74510335, 2022: 0.7378371493907194, },
		{ 2020: 0.39555635, 2022: 0.3578341130636085, },
		{ 2020: 0.4006815, 2022: 0.398449385582054, },
		{ 2020: 0.3789982, 2022: 0.378911886677487, },
		{ 2020: 0.39721485, 2022: 0.398955478206945, },
	],
};

const statePVI: Record<string, number> = {
  'Alabama': 0.425,
  'Alaska': 0.455,
  'Arizona': 0.485,
  'Arkansas': 0.42,
  'California': 0.57,
  'Colorado': 0.515,
  'Connecticut': 0.535,
  'Delaware': 0.53,
  'Florida': 0.485,
  'Georgia': 0.485,
  'Hawaii': 0.575,
  'Idaho': 0.405,
  'Illinois': 0.535,
  'Indiana': 0.445,
  'Iowa': 0.47,
  'Kansas': 0.445,
  'Kentucky': 0.42,
  'Louisiana': 0.44,
  'Maine': 0.505,
  'Maryland': 0.57,
  'Massachusetts': 0.57,
  'Michigan': 0.495,
  'Minnesota': 0.505,
  'Mississippi': 0.45,
  'Missouri': 0.445,
  'Montana': 0.445,
  'Nebraska': 0.435,
  'Nevada': 0.5,
  'New Hampshire': 0.5,
  'New Jersey': 0.53,
  'New Mexico': 0.515,
  'New York': 0.55,
  'North Carolina': 0.485,
  'North Dakota': 0.4,
  'Ohio': 0.47,
  'Oklahoma': 0.4,
  'Oregon': 0.53,
  'Pennsylvania': 0.49,
  'Rhode Island': 0.54,
  'South Carolina': 0.46,
  'South Dakota': 0.42,
  'Tennessee': 0.43,
  'Texas': 0.475,
  'Utah': 0.435,
  'Vermont': 0.575,
  'Virginia': 0.51,
  'Washington': 0.54,
  'West Virginia': 0.385,
  'Wisconsin': 0.49,
  'Wyoming': 0.37
};

export default stateRedistrictingData;
export { statePVI };