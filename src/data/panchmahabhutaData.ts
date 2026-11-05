import { MahabhutaElement } from '../types';

export const PANCHMAHABHUTAS: MahabhutaElement[] = [
  {
    id: 'prithvi',
    nameEn: 'Prithvi (Earth)',
    nameHi: 'पृथ्वी (भूमि तत्त्व)',
    sanskritName: 'पृथिवी तत्त्व',
    symbol: '🌍',
    roleInFarmingEn: 'The mother matrix providing physical anchorage, mineral nourishment, and the living habitat for subterranean microbial ecosystems and earthworms.',
    roleInFarmingHi: 'समस्त जीवन की पोषक आधारशिला जो पौधों को सहारा, खनिज पोषण और अरबों सूक्ष्मजीवों व केंचुओं को आवास प्रदान करती है।',
    traditionalSadhanaEn: 'Revering the living soil as Bhoomi Mata. Avoiding synthetic poisons, plastic mulch, and deep subsoil inversion. Feeding the soil through Jeevamrit and natural organic mulch (Aachhadan).',
    traditionalSadhanaHi: 'भूमि को माता मानकर जहर-मुक्त रखना, रासायनिक खादों का त्याग, गहरी जुताई से बचना, और जीवामृत व आच्छादन (मल्चिंग) द्वारा मिट्टी को सतत पोषित रखना।',
    farmPracticesEn: [
      'Applying Jeevanu Jal to populate soil crumb structure with beneficial bacteria',
      'Continuous organic mulching (straw, dry biomass) to prevent soil erosion and solar baking',
      'Zero-tillage / minimal tillage to protect subterranean fungal hyphae networks',
      'Application of Jev Rasayan to biodegrade stubble into fertile humus'
    ],
    farmPracticesHi: [
      'जीवाणु जल देकर मिट्टी के कणों में जीवाणुओं की सघन कॉलोनी स्थापित करना',
      'सूखी घास व पराली से आच्छादन (मल्चिंग) कर मिट्टी को धूप व कटाव से बचाना',
      'शून्य या न्यूनतम जुताई अपनाकर मिट्टी के नीचे फैले कवक जाल को सुरक्षित रखना',
      'जैव रसायन द्वारा फसल अवशेषों को 15 दिनों में उपजाऊ ह्यूमस में बदलना'
    ],
    scientificPrincipleEn: 'Soil aggregation via Glomalin glycoprotein secreted by arbuscular mycorrhizal fungi; humic acid chelation and biological cation exchange capacity (CEC).',
    scientificPrincipleHi: 'माइकोराइजा कवक द्वारा स्रावित ग्लोमालिन प्रोटीन से मृदा कणों का बंधना; ह्यूमिक अम्ल द्वारा खनिजों का चीलेशन एवं धनायन विनिमय क्षमता (सीईसी)।',
    associatedFormulations: ['Jeevanu Jal', 'Jev Rasayan'],
    color: '#3d2413',
    bgGradient: 'from-amber-950/20 to-stone-900/10'
  },
  {
    id: 'jal',
    nameEn: 'Jal (Water)',
    nameHi: 'जल (आपः तत्त्व)',
    sanskritName: 'आपः / जल तत्त्व',
    symbol: '💧',
    roleInFarmingEn: 'The universal circulatory fluid that transports minerals from root to leaf via capillary transpiration tension and maintains cellular turgor.',
    roleInFarmingHi: 'पौधों का प्राण संवाहक रस जो जड़ों से पत्तियों तक खनिजों को पहुंचाता है और कोशिकाओं में स्फीति (टर्गर) बनाए रखता है।',
    traditionalSadhanaEn: 'Conserving water through "Waaphasa" (soil air-water equilibrium) rather than flood flooding. Utilizing structured energetic water and buttermilk infusions.',
    traditionalSadhanaHi: 'खेत को पानी में डुबोने के बजाय केवल "वाफसा" (50% हवा और 50% वाष्प का संतुलन) बनाना। अणु जल और खट्टी छाछ के संस्कार से पानी की शक्ति बढ़ाना।',
    farmPracticesEn: [
      'Restructuring irrigation water into Anu Jal to lower surface tension and enhance uptake',
      'Watering through furrows to keep root crowns in aerated moisture rather than waterlogging',
      'Using Khatta Rasayan (copper buttermilk) to manage moisture-induced fungal diseases',
      'Rainwater harvesting and broad-bed furrow recharge trenches'
    ],
    farmPracticesHi: [
      'अणु जल विधि से पानी का सतही तनाव कम कर पौधों में अवशोषण बढ़ाना',
      'मेड़ों पर फसल लगाना ताकि जड़ों में जलभराव न होकर केवल नमी और हवा मिले',
      'नमी से होने वाले फफूंद रोगों पर खट्टा रसायन (ताम्र छाछ) का छिड़काव',
      'खेत की मेड़बंदी व वर्षा जल संरक्षण से भूजल पुनर्भरण'
    ],
    scientificPrincipleEn: 'Capillary action, hydrogen-bonding networks, osmotic potential gradients, and stomatal transpiration mechanics regulated by potassium ions.',
    scientificPrincipleHi: 'केशिका क्रिया (कैपिलरी एक्शन), हाइड्रोजन बंध, परासरणी दाब और पोटाश आयनों द्वारा नियंत्रित रंध्रों (स्टोमेटा) की वाष्पोत्सर्जन क्रिया।',
    associatedFormulations: ['Anu Jal', 'Khatta Rasayan', 'Meetha Rasayan'],
    color: '#0369a1',
    bgGradient: 'from-sky-900/20 to-cyan-900/10'
  },
  {
    id: 'agni',
    nameEn: 'Agni (Fire / Sunlight)',
    nameHi: 'अग्नि (सूर्य तत्त्व)',
    sanskritName: 'तेजः / अग्नि तत्त्व',
    symbol: '🔥',
    roleInFarmingEn: 'The supreme cosmic engine of photosynthesis, converting solar photons into chemical glucose bonds and driving internal plant metabolism and natural fermentation heat.',
    roleInFarmingHi: 'प्रकाश-संश्लेषण का महा-स्रोत जो सौर ऊर्जा को अन्न और ग्लूकोज में बदलता है, तथा जैविक किण्वन और फसल की पाचक अग्नि का संचालन करता है।',
    traditionalSadhanaEn: 'Aligning farming with the solar calendar. Channeling sunlight efficiently through multi-tier polyculture canopy design so no ray falls wasted on bare soil.',
    traditionalSadhanaHi: 'सूर्य की गति के अनुसार कृषि कार्य करना। बहुमंजिला खेती (मल्टी-लेयर फार्मिंग) द्वारा सूर्य की एक भी किरण व्यर्थ जमीन पर न गिरने देकर फसलों द्वारा पूर्ण उपयोग।',
    farmPracticesEn: [
      'Multi-layer cropping (Tall trees, medium fruit trees, bush crops, ground tubers) for 100% solar capture',
      'Preparing Kadva Rasayan to channel hot, bitter fire-energy against pest outbreaks',
      'Applying Urja Jal during early morning sunshine to activate chlorophyll-a synthesis',
      'Sun-curing of cow dung cakes to capture photon memory for bio-formulations'
    ],
    farmPracticesHi: [
      'बहुस्तरीय फसल प्रणाली (गन्ना, अरहर, हल्दी, सब्जियां) से सूर्य की हर किरण का अधिकतम अवशोषण',
      'अग्नि तत्त्व प्रधान कड़वा रसायन द्वारा कीटों के तंत्रिका तंत्र को नियंत्रित करना',
      'सुबह की धूप में ऊर्जा जल का छिड़काव कर क्लोरोफिल निर्माण को दोगुना करना',
      'धूप में तपे कंडों का उपयोग कर बायो-फॉर्मूलेशन में सौर शक्ति का संचार'
    ],
    scientificPrincipleEn: 'Quantum absorption by Photosystems I & II; photolysis of water ($2H_2O \to O_2 + 4H^+ + 4e^-$); Rubisco enzyme kinetics and Calvin cycle carbon fixation.',
    scientificPrincipleHi: 'फोटोसिस्टम I एवं II द्वारा फोटॉन अवशोषण; जल का प्रकाश-अपघटन; रुबिस्को एंजाइम की क्रियाशीलता और केल्विन चक्र द्वारा कार्बन स्थिरीकरण।',
    associatedFormulations: ['Kadva Rasayan', 'Urja Jal'],
    color: '#b45309',
    bgGradient: 'from-amber-600/20 to-orange-950/10'
  },
  {
    id: 'vayu',
    nameEn: 'Vayu (Air / Atmosphere)',
    nameHi: 'वायु (पवन तत्त्व)',
    sanskritName: 'वायु तत्त्व',
    symbol: '💨',
    roleInFarmingEn: 'Provides carbon dioxide (CO2) for carbohydrate synthesis, oxygen for root and microbial respiration, and nitrogen gas for biological fixation.',
    roleInFarmingHi: 'प्रकाश संश्लेषण हेतु कार्बन डाइऑक्साइड (CO2), जड़ों व जीवों के श्वसन हेतु ऑक्सीजन, और दलहनी फसलों की ग्रंथियों हेतु 78% वायुमंडलीय नाइट्रोजन का स्रोत।',
    traditionalSadhanaEn: 'Maintaining loose, aerated soil (Waaphasa) so roots breathe. Erecting natural windbreaks with diverse native trees to protect crops from desiccating winds.',
    traditionalSadhanaHi: 'भूमि में ऐसा वायु संचार रखना कि जड़ें स्वतंत्र रूप से सांस ले सकें। खेत की सीमाओं पर देशी पेड़ों की पवन-अवरोधक मेड़ बनाकर गर्म लू और आंधी से फसलों की रक्षा।',
    farmPracticesEn: [
      'Forming raised beds that guarantee subterranean air exchange even after heavy downpours',
      'Planting windbreak borders (Sheesham, Subabul, Bamboo) on windward farm perimeters',
      'Applying Chas Dravya Rasayan to coat leaves against windborne airborne fungal spores',
      'Cultivating inter-row pulses (Chana, Moong) whose nodules trap atmospheric nitrogen'
    ],
    farmPracticesHi: [
      'उठी हुई क्यारियों (रेज्ड बेड) पर बुवाई ताकि भारी बारिश में भी जड़ों में हवा का संचार बना रहे',
      'खेत के चारों ओर हवा रोकने वाले पेड़ों (बांस, सुबबूल, शीशम) की सजीव बाड़ लगाना',
      'हवा से उड़कर आने वाले फफूंद बीजाणुओं से रक्षा हेतु छाछ द्रव्य रसायन का छिड़काव',
      'हवा से नाइट्रोजन खींचने के लिए फसलों के बीच में दलहनी फसलें (चना, मूंग, उड़द) लगाना'
    ],
    scientificPrincipleEn: 'Gas diffusion through soil macro-pores; biological dinitrogen reduction by nitrogenase enzyme ($N_2 + 8H^+ + 8e^- \to 2NH_3 + H_2$); boundary-layer leaf conductance.',
    scientificPrincipleHi: 'मृदा रंध्रों में गैसीय विसरण; नाइट्रोजिनेस एंजाइम द्वारा वायुमंडलीय N2 का अमोनिया में जैविक रूपांतरण; पत्तियों का गैस विनिमय नियमन।',
    associatedFormulations: ['Chas Dravya Rasayan', 'Jeevanu Jal'],
    color: '#047857',
    bgGradient: 'from-emerald-900/20 to-teal-950/10'
  },
  {
    id: 'akash',
    nameEn: 'Akash (Space / Ether)',
    nameHi: 'आकाश (अंतरिक्ष तत्त्व)',
    sanskritName: 'आकाश तत्त्व',
    symbol: '✨',
    roleInFarmingEn: 'The limitless, subtlest dimension that provides spatial geometry for root expansion, canopy growth, airflow, and planetary cosmic rhythmic resonance.',
    roleInFarmingHi: 'समस्त पदार्थों को अवकाश (स्पेस) देने वाला सूक्ष्मतम तत्त्व, जो पौधे के विस्तार, जड़ों के फैलाव, और ब्रह्मांडीय लयबद्ध तरंगों को ग्रहण करने का आधार है।',
    traditionalSadhanaEn: 'Honoring natural spacing between plants (no crowding). Practicing lunar farming cycles (Amavasya and Purnima bio-rhythms) and applying the holistic Sadras.',
    traditionalSadhanaHi: 'फसल में पौधों के बीच यथेष्ट दूरी रखना ताकि प्रत्येक पौधे को फैलने का पूरा आकाश मिले। अमावस्या-पूर्णिमा के चंद्र चक्र के अनुसार बुवाई व छिड़काव करना।',
    farmPracticesEn: [
      'Optimal plant geometry: wider inter-row spacing to allow light and cosmic field interaction',
      'Spraying Sadras (six tastes) to balance the subtle energetic matrix across plant meridians',
      'Aligning sowing schedules with waxing and waning lunar gravitational tides',
      'Pruning dry branches to create open aerial corridors in fruit orchards'
    ],
    farmPracticesHi: [
      'पौधों के मध्य उचित दूरी ताकि हर पत्ते को पूरा आकाश व प्रकाश मिले',
      'षड्रस का छिड़काव कर पौधे के सभी सूक्ष्म ऊर्जा केंद्रों को संतुलित करना',
      'चंद्रमा के खिंचाव (शुक्ल पक्ष व कृष्ण पक्ष) के अनुसार बुवाई व कटाई का समय तय करना',
      'बागों में सूखी टहनियों की छंटाई कर हवा और प्रकाश के लिए आकाश खुला रखना'
    ],
    scientificPrincipleEn: 'Canopy light interception geometry, leaf area index (LAI) optimization, circadian rhythm genetics, and gravitational tidal fluid mechanics within plant vessels.',
    scientificPrincipleHi: 'कैनोपी प्रकाश ग्रहण ज्यामिति, पर्ण क्षेत्रफल सूचकांक (एलएआई), पौधों की आंतरिक जैविक घड़ी (सर्कैडियन रिदम), और गुरुत्वाकर्षण का रस प्रवाह पर प्रभाव।',
    associatedFormulations: ['Sadras', 'Meetha Rasayan'],
    color: '#4c1d95',
    bgGradient: 'from-indigo-950/20 to-purple-950/10'
  }
];
