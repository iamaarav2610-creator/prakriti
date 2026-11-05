import { ProblemSolution } from '../types';

export const PROBLEM_SOLUTIONS: ProblemSolution[] = [
  {
    id: 'poor-soil-health',
    titleEn: 'Hardpan Compaction & Poor Soil Health',
    titleHi: 'मिट्टी का कड़ापन व कमजोर मृदा स्वास्थ्य',
    categoryEn: 'Soil Physics & Structure',
    categoryHi: 'मृदा संरचना एवं भौतिक स्वास्थ्य',
    severity: 'high',
    symptomsEn: [
      'Stiff, brick-like surface crust forming immediately after rainfall or irrigation',
      'Rainwater ponds on the field surface instead of infiltrating into deep subsoil',
      'Shallow, horizontal root growth stunted at 4-6 inches depth',
      'Poor seed emergence and high tractor fuel consumption during plowing'
    ],
    symptomsHi: [
      'सिंचाई या बारिश के बाद खेत की ऊपरी सतह पर सीमेंट जैसी कड़ी पपड़ी जमना',
      'खेत में पानी का नीचे रिसने के बजाय ऊपर ही भरा रहना (जलभराव)',
      'पौधों की जड़ों का 4-6 इंच पर ही रुक जाना और नीचे गहराई में न जाना',
      'बीजों का कम जमाव और जुताई में ट्रैक्टर का अधिक डीजल लगना'
    ],
    rootCausesEn: [
      'Excessive chemical fertilizers (urea, DAP, SSP) destroying organic soil carbon',
      'Heavy tractor machinery causing deep subterranean subsoil compaction',
      'Removal or burning of crop residues leaving bare soil exposed to burning sun',
      'Complete depletion of subterranean native earthworms and mycorrhizae'
    ],
    rootCausesHi: [
      'रासायनिक यूरिया व डीएपी के अंधाधुंध उपयोग से मिट्टी के जैविक कार्बन का खात्मा',
      'भारी ट्रैक्टर व कंबाइन हार्वेस्टर के निरंतर चलने से नीचे कठोर परत का बनना',
      'फसल कटाई के बाद पराली व अवशेषों को जलाना या खेत से बाहर निकाल फेंकना',
      'देशी केंचुओं और जमीन के नीचे प्राकृतिक सुरंग बनाने वाले जीवों का विनाश'
    ],
    naturalRemedyEn: 'Apply Jev Rasayan (3L/acre) in irrigation to catalyze enzymatic soil softening, followed by 200L Jeevanu Jal per acre. Cover the entire field with a 3-inch layer of dry straw/biomass mulch.',
    naturalRemedyHi: 'सिंचाई के साथ 3 लीटर प्रति एकड़ जैव रसायन चलाएं जो मिट्टी के कड़ेपन को तोड़ेगा, फिर 200 लीटर जीवाणु जल दें। पूरे खेत को सूखी पराली की 3 इंच मोटी मल्चिंग से ढंकें।',
    recommendedFormulations: ['Jev Rasayan', 'Jeevanu Jal', 'Anu Jal'],
    preventivePracticeEn: 'Adopt zero-tillage or minimum surface scraping. Always keep soil shaded with living green cover crops or dry biomass mulch.',
    preventivePracticeHi: 'शून्य जुताई या केवल ऊपर की हल्की गुड़ाई अपनाएं। खेत को कभी नंगा न छोड़ें, हमेशा सूखी घास या दलहनी कवर फसलों से ढंककर रखें।',
    scientificMechanismEn: 'Bio-enzymes hydrolyze calcium carbonate precipitates, while Jeevanu Jal inoculates mycorrhizal fungi that secrete glomalin—a sticky hydrophobic glycoprotein that glues mineral particles into water-stable aggregates with 40% aeration pore space.',
    scientificMechanismHi: 'जैव एंजाइम मिट्टी में जमे कार्बोनेट और रासायनिक लवणों को घोलते हैं, जबकि जीवाणु जल के कवक ग्लोमालिन नामक प्राकृतिक गोंद छोड़ते हैं जो मिट्टी को दानेदार और स्पंज जैसा हवादार बना देता है।'
  },
  {
    id: 'low-microbial-activity',
    titleEn: 'Low Microbial Activity & Dead Rhizosphere',
    titleHi: 'कम सूक्ष्मजीव सक्रियता एवं मृत जड़ क्षेत्र',
    categoryEn: 'Soil Microbiology',
    categoryHi: 'मृदा सूक्ष्मजीव विज्ञान',
    severity: 'high',
    symptomsEn: [
      'No earthy "geosmin" smell when wet soil is dug up; soil feels lifeless or sour',
      'Absence of earthworm castings or surface burrows on the farm floor',
      'Slow or zero decomposition of buried plant roots and leaf litter',
      'Pale, chlorotic plant growth despite adding expensive inputs'
    ],
    symptomsHi: [
      'गीली मिट्टी सूंघने पर सौंधी प्राकृतिक खुशबू (जियोस्मिन) का न आना',
      'खेत में केंचुओं के बिल या उनकी वर्मी-कास्टिंग (छोटी गोलियां) का न दिखना',
      'जमीन में दबे पत्तों और जड़ों का महीनों तक न सड़ना',
      'महंगे खाद डालने के बाद भी पौधों की पत्तियों का पीला व सुस्त रहना'
    ],
    rootCausesEn: [
      'Chemical pesticides, herbicides, and fungicides sterilizing native soil bacteria',
      'Soil organic carbon (SOC) levels dropping below critical 0.5% threshold',
      'Direct exposure to intense midday UV sunlight killing surface microbes'
    ],
    rootCausesHi: [
      'रासायनिक खरपतवारनाशकों व कीटनाशकों के जहर से मित्र सूक्ष्मजीवों की हत्या',
      'मिट्टी में जैविक कार्बन का स्तर 0.5% से भी नीचे गिर जाना',
      'खेत को बिना ढकन के खुला छोड़ने पर 45°C की तेज धूप से जीवों का जलना'
    ],
    naturalRemedyEn: 'Inoculate with freshly fermented Jeevanu Jal (200L/acre) during evening hours. Supplement with Urja Jal foliar spray to stimulate plant root exudate secretion.',
    naturalRemedyHi: 'शाम के समय 200 लीटर ताजा बना जीवाणु जल सिंचाई के साथ खेत में दें। ऊपर से ऊर्जा जल का स्प्रे करें ताकि पौधों की जड़ें जीवाणुओं के लिए पोषक रस छोड़ें।',
    recommendedFormulations: ['Jeevanu Jal', 'Urja Jal'],
    preventivePracticeEn: 'Maintain polyculture cropping systems. Grow legumes every season to supply amino acids and carbon exudates directly to the microbial zone.',
    preventivePracticeHi: 'खेत में बहुफसली प्रणाली अपनाएं। हर मौसम में कम से कम एक दलहनी फसल लगाएं ताकि जीवाणुओं को निरंतर प्राकृतिक भोजन मिलता रहे।',
    scientificMechanismEn: 'Jeevanu Jal injects 10^8 colony-forming units (CFU/ml) of aerobic and facultative anaerobes. As bacteria multiply, their biomass turnover releases organic carbon and enzymes that trigger local soil food web cascades.',
    scientificMechanismHi: 'जीवाणु जल प्रति मिलीलीटर 10 करोड़ से अधिक जीवित मित्र जीवाणु प्रदान करता है। इनका तेजी से गुणन मिट्टी में प्राकृतिक खाद्य जाल (फूड वेब) को तुरंत जागृत कर देता है।'
  },
  {
    id: 'pest-infestation',
    titleEn: 'Aggressive Pest & Insect Infestations',
    titleHi: 'कीट प्रकोप (इल्ली, माहू, सफेद मक्खी, थ्रिप्स)',
    categoryEn: 'Crop Protection & Entomology',
    categoryHi: 'पादप संरक्षण एवं कीट विज्ञान',
    severity: 'high',
    symptomsEn: [
      'Curled, cupped, or mottled leaves with sticky honey-dew secretions',
      'Chewed leaf margins, skeletonized foliage, or boreholes in fruits/pods',
      'Wilting terminal shoots and premature blossom drop caused by sap extraction',
      'Rapid swarm emergence following humid or cloudy spells'
    ],
    symptomsHi: [
      'पत्तियों का ऊपर या नीचे की ओर मुड़ना और उन पर चिपचिपा रस दिखना',
      'पत्तियों का छलनी होना, किनारों से कटना या फल-फली में छेद दिखना',
      'पौधों की नई शाखाओं का मुरझाना और रस चूसने से फूलों का झड़ जाना',
      'बादल छाने या नमी बढ़ते ही अचानक कीटों का झुंड पैदा हो जाना'
    ],
    rootCausesEn: [
      'Excess synthetic urea creating lush, thin-walled, hyper-succulent leaves rich in free amino acids that attract pests',
      'Destruction of natural predators (spiders, dragonflies, ladybirds) through chemical spraying',
      'Single-crop monocultures creating uninterrupted food supplies for pest multiplication'
    ],
    rootCausesHi: [
      'अत्यधिक रासायनिक यूरिया डालने से पत्तियां जरूरत से ज्यादा कोमल व रसीली हो जाती हैं, जो कीटों को न्योता देती हैं',
      'जहरीले कीटनाशकों से मित्र कीटों (मकड़ी, शिकारी भौंरे, लेडीबर्ड) का मर जाना',
      'एक ही फसल बड़े पैमाने पर लगाने से कीटों को लगातार मनपसंद भोजन मिलना'
    ],
    naturalRemedyEn: 'Immediately spray Kadva Rasayan (350ml in 15L water) combined with 20ml soapnut extract. For fungal-associated rot or thrips damage, alternate with Chas Dravya Rasayan.',
    naturalRemedyHi: '15 लीटर पानी में 350 मिली कड़वा रसायन और 20 मिली रीठा का पानी मिलाकर तुरंत छिड़कें। थ्रिप्स व फफूंद के लिए 5 दिन बाद छाछ द्रव्य रसायन का स्प्रे करें।',
    recommendedFormulations: ['Kadva Rasayan', 'Chas Dravya Rasayan'],
    preventivePracticeEn: 'Plant trap crops on borders (Marigold for bollworms, Mustard for cabbage pests). Install yellow/blue sticky cards and bird perches (20 per acre).',
    preventivePracticeHi: 'खेत की मेड़ पर ट्रैप फसलें (गेंदा, मक्का) लगाएं। पीले चिपचिपे कार्ड और खेत में 20 टी-आकार की पक्षी खूंटियां लगाएं ताकि पक्षी इल्लियों को चुन लें।',
    scientificMechanismEn: 'Azadirachtin, karanjin, and solasodine alkaloids interfere with pest ecdysone hormone systems, stopping feeding within 30 minutes and halting reproductive cycles without leaving toxic synthetic molecules.',
    scientificMechanismHi: 'कड़वे पौधों के प्राकृतिक अल्कलॉइड्स कीटों के तंत्रिका तंत्र और भोजन पचाने की शक्ति को 30 मिनट में ठप कर देते हैं, जिससे कीट खाना बंद कर देते हैं और मर जाते हैं।'
  },
  {
    id: 'nutrient-deficiencies',
    titleEn: 'Multi-Nutrient Deficiencies & Chlorosis',
    titleHi: 'पोषक तत्वों की कमी एवं पत्तियों का पीलापन (क्लोरोसिस)',
    categoryEn: 'Plant Nutrition & Biochemistry',
    categoryHi: 'पादप पोषण एवं जैव रसायन',
    severity: 'medium',
    symptomsEn: [
      'Interveinal chlorosis (yellowing between leaf veins while veins stay green)',
      'Purple or bronze discoloration on older leaves (Phosphorus starvation)',
      'Marginal leaf scorch and curling of lower leaf tips (Potassium hunger)',
      'Deformed growing tips and blossom-end rotting (Calcium & Boron deficit)'
    ],
    symptomsHi: [
      'पत्तियों की नसों के बीच का हिस्सा पीला पड़ना जबकि नसें हरी रहना (आयरन/जिंक कमी)',
      'पुरानी पत्तियों का बैंगनी या तांबई रंग होना (फॉस्फोरस की कमी)',
      'पत्तियों के किनारों का जला हुआ दिखना और मुड़ना (पोटाश की कमी)',
      'टमाटर के नीचे का हिस्सा काला पड़ना या फल फटना (कैल्शियम व बोरॉन कमी)'
    ],
    rootCausesEn: [
      'Soil chemical lockup: 80% of synthetic phosphorus applied to fields binds permanently to iron/aluminum/calcium minerals and becomes inaccessible to roots',
      'High soil alkaline pH (>8.0) preventing micronutrient ionization',
      'Shallow root systems unable to reach deep mineral reserves'
    ],
    rootCausesHi: [
      'जमीन में पोषक तत्वों का रासायनिक बंधनों में फंसा (लॉक) होना',
      'मिट्टी का पीएच अधिक क्षारीय (>8.0) होना जिससे पौधे जिंक व लोहा नहीं ले पाते',
      'रासायनिक खादों के कारण जड़ों का उथला रहना और गहराई से पोषण न ले पाना'
    ],
    naturalRemedyEn: 'Foliar spray Sadras (500ml/15L tank) to deliver all six taste mineral ions. Combine with Meetha Rasayan (40ml) for potassium and boron, and drench with Jeevanu Jal to unlock locked soil phosphorus.',
    naturalRemedyHi: '15 लीटर टंकी में 500 मिली षड्रस का छिड़काव करें। पोटाश और बोरॉन की पूर्ति हेतु 40 मिली मीठा रसायन मिलाएं, और मिट्टी में बंद फॉस्फोरस खोलने हेतु जीवाणु जल दें।',
    recommendedFormulations: ['Sadras', 'Meetha Rasayan', 'Jeevanu Jal'],
    preventivePracticeEn: 'Apply indigenous cow dung ash (100kg/acre) annually for bio-available silica and potassium. Seed coat with mycorrhizal culture.',
    preventivePracticeHi: 'प्रतिवर्ष 1 एकड़ में 100 किलो कंडे की छनी भस्म डालें जिससे प्राकृतिक सिलिका व पोटाश मिले। बीजों को सजीव मिट्टी से संस्कारित करें।',
    scientificMechanismEn: 'Organic acids produced during Sadras fermentation act as natural polydentate chelating ligands, forming water-soluble complexes with Fe, Zn, Mn, and Cu ions that pass effortlessly through leaf cuticle stomatal gates.',
    scientificMechanismHi: 'षड्रस के कार्बनिक अम्ल एक प्राकृतिक चिलेटिंग एजेंट का काम करते हैं जो लोहे, जिंक और मैंगनीज को पानी में घोलकर पत्तियों के सूक्ष्म छिद्रों द्वारा सीधे अंदर पहुंचा देते हैं।'
  },
  {
    id: 'water-management',
    titleEn: 'Water Scarcity & Irrigation Inefficiency',
    titleHi: 'जल संकट एवं सिंचाई का कुप्रबंधन',
    categoryEn: 'Hydrology & Soil Physics',
    categoryHi: 'जल विज्ञान एवं मृदा भौतिकी',
    severity: 'medium',
    symptomsEn: [
      'Crops wilt quickly during mid-afternoon even 3 days after heavy watering',
      'Deep cracks developing in black cotton or clay soils exposing roots',
      'Tubewell water table dropping rapidly requiring deeper drillings',
      'Root rot and wilting caused by standing floodwater'
    ],
    symptomsHi: [
      'भरपूर पानी देने के 3 दिन बाद ही दोपहरी में पौधों का मुरझाना',
      'खेत में गहरी दरारें फटना जिससे जड़ों में सीधी गर्म हवा लगकर सूखना',
      'ट्यूबवेल का जलस्तर हर साल नीचे गिरना',
      'खेत में अधिक देर तक पानी भरा रहने से जड़ों का सड़ना व फसल पीली होना'
    ],
    rootCausesEn: [
      'Flood irrigation wasting 60-70% of pumped water through evaporation and percolation',
      'Bare unmulched soil baking under solar radiation, causing massive capillary evaporative loss',
      'Lack of soil humus: 1 gram of humus can hold up to 6 grams of water, while degraded soil holds less than 0.5 grams'
    ],
    rootCausesHi: [
      'खुली बाढ़ सिंचाई (फ्लड इरिगेशन) से 70% पानी का वाष्प बनकर उड़ जाना',
      'खेत की नंगी मिट्टी पर तेज धूप पड़ने से जमीन की सारी नमी खिंच जाना',
      'मिट्टी में ह्यूमस का अभाव: 1 ग्राम ह्यूमस 6 ग्राम पानी सोखता है, जबकि रासायनिक मिट्टी 0.5 ग्राम भी नहीं रोक पाती'
    ],
    naturalRemedyEn: 'Convert field to "Waaphasa" raised-bed furrow irrigation. Condition irrigation water into Anu Jal to cut water surface tension by 40%. Apply thick dry biomass mulch.',
    naturalRemedyHi: 'खेत में चौड़ी मेड़ व नाली (वाफसा पद्धति) बनाएं। एक नाली छोड़कर पानी दें। पानी में अणु जल विधि अपनाएं और खेत पर सूखी घास की मोटी मल्चिंग करें।',
    recommendedFormulations: ['Anu Jal', 'Jeevanu Jal'],
    preventivePracticeEn: 'Organic mulching (Aachhadan) is non-negotiable. Construct continuous contour bunds (Medhbandi) to capture 100% of monsoon precipitation inside the field.',
    preventivePracticeHi: 'आच्छादन (मल्चिंग) को अनिवार्य नियम बनाएं। खेत के चारों ओर मजबूत मेड़बंदी करें ताकि बारिश की एक भी बूंद खेत से बाहर न बहे।',
    scientificMechanismEn: 'Anu Jal reduces interfacial water surface tension from ~72 dynes/cm to <50 dynes/cm. The Waaphasa method maintains a micro-porous matrix of 50% air and 50% water vapor, maximizing root respiration efficiency.',
    scientificMechanismHi: 'अणु जल पानी के सतही तनाव को कम करता है जिससे कम पानी में पूरा खेत तर होता है। वाफसा तकनीक जड़ों को 50% हवा और 50% नमी का आदर्श वातावरण देती है।'
  },
  {
    id: 'declining-soil-fertility',
    titleEn: 'Declining Long-Term Soil Fertility & Salinity',
    titleHi: 'मृदा उर्वरता ह्रास एवं लवणता (खारी/कल्लरी जमीन)',
    categoryEn: 'Agro-Ecology & Soil Health',
    categoryHi: 'कृषि पारिस्थितिकी व मृदा सुधार',
    severity: 'high',
    symptomsEn: [
      'White salt crusts appearing on soil ridges during dry dry spells',
      'Year-on-year plateauing or declining crop yields despite increasing chemical doses',
      'High soil electrical conductivity (EC > 4 dS/m) and alkaline pH > 8.5',
      'Stunted plant seedlings that yellow, scorch, and fail to establish'
    ],
    symptomsHi: [
      'सूखे मौसम में खेत की मेड़ों और क्यारियों पर सफेद नमक/शोरे की परत जमना',
      'खाद की मात्रा बढ़ाने के बाद भी उत्पादन का स्थिर हो जाना या घटना',
      'मिट्टी का खारापन (EC) बढ़ना और क्षारीयता (pH > 8.5) हो जाना',
      'छोटे पौधों का जमीन में बैठ जाना, पत्तियां जलना और बढ़वार रुकना'
    ],
    rootCausesEn: [
      'Decades of synthetic chloride, nitrate, and sulfate fertilizer applications',
      'Irrigating with brackish, saline, or high-TDS underground borewell water',
      'Absence of organic carbon buffers to sequester free sodium ions'
    ],
    rootCausesHi: [
      'दशकों से डाले जा रहे रासायनिक खादों के जहरीले लवणों का जमीन में जमाव',
      'नलकूप के खारे या अधिक टीडीएस वाले पानी से लगातार सिंचाई करना',
      'मिट्टी में जैविक खाद व कार्बन की कमी जो नमक के असर को रोक सके'
    ],
    naturalRemedyEn: 'Flush the soil with Jev Rasayan (5L/acre) combined with sour Khatta Rasayan. Sow green manure crops (Dhaincha - Sesbania aculeata) and turn into soil at 45 days with Jeevanu Jal.',
    naturalRemedyHi: 'सिंचाई के साथ 5 लीटर जैव रसायन और खट्टा रसायन चलाएं। खेत में ढैंचा बोएं और 45 दिन बाद उसे मिट्टी में पलटकर ऊपर से जीवाणु जल का छिड़काव करें।',
    recommendedFormulations: ['Jev Rasayan', 'Khatta Rasayan', 'Jeevanu Jal'],
    preventivePracticeEn: 'Maintain deep-rooted perennial trees along farm perimeter to pull down high water tables. Never leave saline fields fallow under summer heat.',
    preventivePracticeHi: 'खेत की मेड़ों पर जामुन, अर्जुन या नीम के पेड़ लगाएं। गर्मियों में खारी जमीन को खाली न छोड़ें, उस पर घास या हरी खाद जरूर रखें।',
    scientificMechanismEn: 'Organic acids in Jev Rasayan displace adsorbed sodium ($Na^+$) ions on soil clay micelle surfaces with calcium ($Ca^{2+}$) and magnesium ($Mg^{2+}$) ions, converting non-permeable sodic clays into permeable aggregated crumbs.',
    scientificMechanismHi: 'जैव रसायन के कार्बनिक अम्ल मिट्टी के कणों पर जमे हानिकारक सोडियम को हटाकर उसकी जगह कैल्शियम स्थापित करते हैं, जिससे खारी मिट्टी पुनः उपजाऊ और भुरभुरी बन जाती है।'
  }
];
