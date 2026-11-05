import { ScientificTopic } from '../types';

export const SCIENTIFIC_TOPICS: ScientificTopic[] = [
  {
    id: 'soil-microorganisms',
    titleEn: 'Soil Microorganisms: The Invisible Workforce',
    titleHi: 'मृदा सूक्ष्मजीव: प्रकृति की अदृश्य कार्यशाला',
    summaryEn: 'One teaspoon of healthy living natural soil contains more microorganisms than the entire human population on Earth.',
    summaryHi: 'स्वस्थ प्राकृतिक मिट्टी की एक चम्मच में पृथ्वी पर रहने वाले कुल इंसानों से भी अधिक जीवित सूक्ष्मजीव होते हैं।',
    detailedAnalysisEn: 'The soil microbiome consists of five major phyla: Bacteria, Fungi, Actinomycetes, Protozoa, and Nematodes. In natural farming, these organisms do not act in isolation but establish a tightly orchestrated rhizosphere food web. Bacteria rapidly consume root exudates (simple sugars, amino acids); fungi decompose recalcitrant lignin and cellulose; actinomycetes synthesize earthy antibiotics; and protozoa graze upon bacteria, releasing immobilized ammonium and nitrate directly into the root zone.',
    detailedAnalysisHi: 'मृदा सूक्ष्मजीव तंत्र में पांच प्रमुख वर्ग होते हैं: बैक्टीरिया, कवक (फंगस), एक्टिनोमाइसीट्स, प्रोटोजोआ और नेमाटोड्स। प्राकृतिक खेती में ये सूक्ष्मजीव अलग-थलग नहीं बल्कि एक सजीव तंत्र बनाते हैं। बैक्टीरिया जड़ों द्वारा छोड़े गए मीठे रसों को खाते हैं; कवक सूखी पराली व लिग्निन को पचाते हैं; एक्टिनोमाइसीट्स प्राकृतिक एंटीबायोटिक बनाकर हानिकारक कीटाणुओं को नष्ट करते हैं; और प्रोटोजोआ जब बैक्टीरिया को खाते हैं तो शुद्ध अमोनियम पौधों की जड़ों को तत्काल भोजन के रूप में मिलता है।',
    keyOrganismsOrCompounds: [
      'Bacillus subtilis (Bio-fungal suppressor)',
      'Pseudomonas fluorescens (Siderophore producer)',
      'Trichoderma harzianum (Antagonistic fungal biocontrol)',
      'Actinobacteria (Geosmin producers, antibiotic synthesis)',
      'Arbuscular Mycorrhizal Fungi (AMF - Glomalin builders)'
    ],
    measurableBenefitEn: 'Up to 300% increase in soil microbial biomass carbon (SMBC) within 24 months of natural farming transition.',
    measurableBenefitHi: 'प्राकृतिक खेती अपनाने के 24 महीनों के भीतर मृदा सूक्ष्मजीव बायोमास कार्बन में 300% तक की वृद्धि।',
    iconType: 'microscope'
  },
  {
    id: 'nitrogen-fixation',
    titleEn: 'Biological Nitrogen Fixation (BNF)',
    titleHi: 'जैविक नाइट्रोजन स्थिरीकरण (BNF)',
    summaryEn: 'Converting inert atmospheric N2 gas into bioavailable ammonium (NH4+) without synthetic fossil-fuel Haber-Bosch synthesis.',
    summaryHi: 'वायुमंडल में मौजूद 78% निष्क्रिय नाइट्रोजन गैस को बिना रासायनिक कारखानों के सीधे जैविक अमोनियम में बदलना।',
    detailedAnalysisEn: 'Earth\'s atmosphere is 78% dinitrogen gas ($N_2$), but plants cannot absorb triple-bonded ($N \equiv N$) molecular nitrogen directly. In natural farming, this bond is severed by the molybdenum-iron enzyme complex nitrogenase synthesized by symbiotic Rhizobium in legume root nodules, and free-living or associative diazotrophs (Azotobacter, Azospirillum, Beijerinckia). Chemical nitrogen fertilizers shut off bacterial nitrogenase gene expression through feedback inhibition. By removing chemical inputs, BNF is re-activated naturally.',
    detailedAnalysisHi: 'वायुमंडल में 78% नाइट्रोजन गैस है, परंतु इसका त्रि-आबंध ($N \equiv N$) इतना मजबूत होता है कि पौधे इसे सीधे नहीं ले सकते। प्राकृतिक खेती में यह आबंध दलहनी फसलों की जड़ों में रहने वाले राइजोबियम बैक्टीरिया और स्वतंत्र मित्र जीवाणु (एजोटोबैक्टर, एजोस्पाइरिलम) के नाइट्रोजिनेस एंजाइम द्वारा तोड़ा जाता है। रासायनिक यूरिया डालने से यह प्राकृतिक प्रक्रिया हमेशा के लिए बंद हो जाती है; रसायन हटाते ही प्रकृति स्वयं नाइट्रोजन बनाने लगती है।',
    keyOrganismsOrCompounds: [
      'Nitrogenase Enzyme (Mo-Fe cofactor complex)',
      'Rhizobium leguminosarum (Symbiotic legume partner)',
      'Azotobacter chroococcum (Free-living aerobic diazotroph)',
      'Leghemoglobin (Oxygen-scavenging pink pigment)',
      'Glutamine Synthetase (Ammonia assimilation pathway)'
    ],
    measurableBenefitEn: 'Delivers 50-120 kg of organic nitrogen per hectare annually at zero cost to the farmer.',
    measurableBenefitHi: 'प्रति वर्ष प्रति हेक्टेयर 50 से 120 किलोग्राम प्राकृतिक नाइट्रोजन की मुफ्त आपूर्ति।',
    iconType: 'atom'
  },
  {
    id: 'nutrient-cycling',
    titleEn: 'Biogeochemical Nutrient Cycling & Solubilization',
    titleHi: 'भू-जैव रासायनिक पोषक चक्र एवं खनिजीकरण',
    summaryEn: 'Unlocking the virtually infinite mineral reserves naturally present in the earth crust through biological organic acids.',
    summaryHi: 'धरती के गर्भ में पहले से मौजूद अकूत खनिज संपदा को सूक्ष्मजीवों के प्राकृतिक अम्लों द्वारा घोलकर सुलभ बनाना।',
    detailedAnalysisEn: 'Agronomic soils are rarely deficient in phosphorus, potassium, or iron in absolute terms; rather, these minerals are locked in insoluble mineral lattices (apatites, feldspars, iron oxides). Native mycorrhizal fungi and phosphate-solubilizing bacteria (PSB) secrete low-molecular-weight organic acids (citric, oxalic, malic) and phosphatases. These acids chelate cations ($Ca^{2+}, Fe^{3+}, Al^{3+}$), releasing orthophosphate ions ($H_2PO_4^-$) directly to root absorbing surfaces.',
    detailedAnalysisHi: 'खेत की मिट्टी में फॉस्फोरस, पोटाश या लोहे की कोई कमी नहीं होती; कमी केवल उन्हें घोलने वाले जीवों की होती है। रासायनिक खेती में ये तत्व मिट्टी में पत्थर की तरह बंधे रहते हैं। प्राकृतिक खेती के जीवाणु साइट्रिक व ऑक्सालिक अम्ल छोड़ते हैं जो इन बंधनों को तुरंत पिघलाकर पौधों को भरपूर फॉस्फोरस और पोटाश उपलब्ध करा देते हैं।',
    keyOrganismsOrCompounds: [
      'Organic Chelation Ligands (Citrate, Oxalate, Malate)',
      'Phosphate Solubilizing Bacteria (Bacillus megaterium)',
      'Potassium Solubilizing Bacteria (Frateuria aurantia)',
      'Siderophores (Microbial ferric iron scavengers)',
      'Alkaline and Acid Phosphatases'
    ],
    measurableBenefitEn: 'Zero purchase of synthetic phosphate (DAP/SSP) or potash (MOP) required.',
    measurableBenefitHi: 'डीएपी, एसएसपी या पोटाश खरीदने की आवश्यकता शून्य हो जाती है।',
    iconType: 'refresh'
  },
  {
    id: 'soil-organic-matter',
    titleEn: 'Soil Organic Matter (SOM) & Humus Formation',
    titleHi: 'मृदा जैविक पदार्थ (SOM) एवं ह्यूमस निर्माण',
    summaryEn: 'Humus is the permanent lifeblood of soil, building aggregate crumb structure, water retention, and carbon sequestration.',
    summaryHi: 'ह्यूमस मिट्टी की सजीव रीढ़ है, जो दानेदार संरचना, जल धारण क्षमता और कार्बन संचय का आधार है।',
    detailedAnalysisEn: 'Soil Organic Matter encompasses all carbonaceous material derived from biomass decomposition. Through humification, labile crop residues are transformed into stable humic and fulvic substances. One unit of humus holds six times its weight in water and boasts a Cation Exchange Capacity (CEC) of 150-300 meq/100g (compared to 10-40 meq/100g for typical clay). Furthermore, glomalin secreted by AM fungi stores approximately 27% of all soil carbon, remaining stable for decades.',
    detailedAnalysisHi: 'मृदा जैविक पदार्थ में पौधों की सूखी पत्तियां, पराली और गोबर का परिवर्तित रूप शामिल है। ह्यूमस निर्माण की प्रक्रिया में यह कचरा स्थिर कार्बन में बदलता है। 1 किलो ह्यूमस अपने वजन से 6 गुना अधिक पानी रोक सकता है और इसकी पोषक तत्वों को पकड़ने की क्षमता (CEC) सामान्य मिट्टी से 10 गुना अधिक होती है। यह पर्यावरण के कार्बन को जमीन में सुरक्षित रखने का सबसे स्थायी उपाय है।',
    keyOrganismsOrCompounds: [
      'Humic and Fulvic Acids (High-CEC polyelectrolytes)',
      'Glomalin Glycoprotein (Soil water-stable glue)',
      'Soil Microbial Biomass Carbon (SMBC)',
      'Lignocellulosic Carbon-to-Nitrogen (C:N) ratio equilibrium'
    ],
    measurableBenefitEn: 'Increases soil organic carbon (SOC) from typical 0.3% to over 1.2% in 3 to 5 years.',
    measurableBenefitHi: 'खेत के जैविक कार्बन को 3 से 5 वर्षों में 0.3% से बढ़ाकर 1.2% से अधिक पहुंचाना।',
    iconType: 'layers'
  },
  {
    id: 'soil-biodiversity',
    titleEn: 'Subterranean Biodiversity & Earthworm Ecology',
    titleHi: 'भूमिगत जैव-विविधता एवं केंचुआ पारिस्थितिकी',
    summaryEn: 'Indigenous earthworms construct millions of vertical macro-pores, acting as nature\'s autonomous deep tillers and nutrient factories.',
    summaryHi: 'देशी केंचुए जमीन के नीचे लाखों खड़ी सुरंगे बनाकर मिट्टी को प्राकृतिक रूप से भुरभुरा और उर्वर बनाते हैं।',
    detailedAnalysisEn: 'Indigenous endogeic and anecic earthworms burrow up to 10-15 feet into the subsoil, bringing virgin trace minerals to the surface and depositing vermicastings. Worm casts are 7 times richer in available phosphate, 5 times richer in available nitrogen, 11 times richer in available potash, and 3 times richer in exchangeable magnesium than the surrounding field soil. Furthermore, their burrow tunnels create continuous subterranean chimneys for atmospheric gas exchange.',
    detailedAnalysisHi: 'देशी केंचुए जमीन में 10 से 15 फीट गहरी सुरंगें बनाते हैं और नीचे के खनिज ऊपर लाकर अपनी विष्ठा (वर्मीकास्ट) के रूप में छोड़ते हैं। केंचुओं की विष्ठा में सामान्य मिट्टी की तुलना में 7 गुना अधिक फॉस्फोरस, 5 गुना अधिक नाइट्रोजन और 11 गुना अधिक पोटाश होता है। इनकी सुरंगों से मिट्टी में हवा और पानी का संतुलन स्वतः बना रहता है।',
    keyOrganismsOrCompounds: [
      'Anecic and Endogeic Earthworm Species',
      'Vermicastings (Enzyme-enriched mineral nodules)',
      'Continuous Macro-Pore Subterranean Chimneys',
      'Symbiotic Gut Microbiota of Invertebrates'
    ],
    measurableBenefitEn: 'Creates over 100,000 meters of subterranean aeration tunnels per hectare.',
    measurableBenefitHi: 'प्रति हेक्टेयर 1,00,000 मीटर से अधिक प्राकृतिक जल-अवशोषण व वायु सुरंगे तैयार होना।',
    iconType: 'bug'
  },
  {
    id: 'water-conservation-waaphasa',
    titleEn: 'Water Conservation & The Waaphasa Phenomenon',
    titleHi: 'जल संरक्षण एवं वाफसा (Waaphasa) की वैज्ञानिकता',
    summaryEn: 'Roots do not drink liquid floodwater; they drink water vapor while inhaling oxygen from aerated pore spaces.',
    summaryHi: 'पौधों की जड़ें तरल पानी नहीं पीतीं, वे केवल जल-वाष्प और हवा का मिश्रण ग्रहण करती हैं।',
    detailedAnalysisEn: 'The traditional Indian concept of "Waaphasa" represents the exact micro-climatic state in the soil where 50% of the pore volume contains air and 50% contains water vapor. When fields are submerged in flood irrigation, all pores fill with liquid water, driving out oxygen and suffocating roots (hypoxia). Under hypoxia, plants shut stomata and cannot absorb minerals. By practicing furrow irrigation and mulching, the soil remains permanently in the Waaphasa zone, slashing irrigation needs by up to 60%.',
    detailedAnalysisHi: 'प्राकृतिक खेती का "वाफसा" सिद्धांत वह अवस्था है जहां मिट्टी के कणों के बीच 50% हवा और 50% भाप (नमी) होती है। खेत में पानी भर देने से हवा बाहर निकल जाती है और जड़ों का दम घुटने लगता है। वाफसा तकनीक और आच्छादन (मल्चिंग) अपनाने से खेत में निरंतर प्राणवायु बनी रहती है और सिंचाई का 50 से 60% पानी बचता है।',
    keyOrganismsOrCompounds: [
      'Soil Pore Space Phase Equilibrium (50% Air / 50% Vapor)',
      'Subterranean Capillary Hydraulic Conductivity',
      'Stomatal Conductance & Vapor Pressure Deficit (VPD)',
      'Mulch Microclimate Vapor Barrier'
    ],
    measurableBenefitEn: 'Reduces farm irrigation water footprint by 40% to 65% across all crop categories.',
    measurableBenefitHi: 'सभी फसलों में सिंचाई के पानी की खपत में 40% से 65% तक की सीधी बचत।',
    iconType: 'droplet'
  },
  {
    id: 'ecological-balance',
    titleEn: 'Ecological Balance & Natural Predator Food Webs',
    titleHi: 'पारिस्थितिक संतुलन एवं प्राकृतिक मित्र-कीट खाद्य जाल',
    summaryEn: 'In nature, no single insect is a pest until its natural biological predators are exterminated by broad-spectrum chemicals.',
    summaryHi: 'प्रकृति में कोई भी जीव तब तक "कीट" नहीं बनता जब तक रासायनिक जहर से उसके प्राकृतिक शिकारियों को न मार दिया जाए।',
    detailedAnalysisEn: 'An undisturbed agro-ecosystem maintains a dynamic equilibrium between phytophagous herbivores and carnivorous natural enemies. Ladybird beetles (Coccinellidae) consume 50-60 aphids per day; Chrysoperla larvae devour thrips and whiteflies; predatory spiders hunt caterpillars; and trichogramma wasps parasitize pest eggs. Botanical formulations like Kadva Rasayan deter pest feeding without killing predatory beneficial insects, preserving the self-regulating trophic cascade.',
    detailedAnalysisHi: 'स्वस्थ खेत में शाकाहारी कीटों को खाने वाले मित्र कीट निरंतर मौजूद रहते हैं। एक लेडीबर्ड भृंग प्रतिदिन 50-60 माहू खा जाती है; क्राइसोपिला इल्लियों को खाती है; और मकड़ियां जाल बनाकर पतंगों को पकड़ती हैं। कड़वा रसायन जैसे देसी काढ़े केवल हानिकारक कीटों को भगाते हैं, मित्र कीटों को कोई हानि नहीं पहुंचाते, जिससे खेत का प्राकृतिक संतुलन बना रहता है।',
    keyOrganismsOrCompounds: [
      'Coccinellidae (Ladybird predatory beetles)',
      'Chrysoperla carnea (Green lacewing larvae)',
      'Araneae (Orb-weaver and wolf hunting spiders)',
      'Trichogramma (Egg parasitoid micro-wasps)',
      'Entomopathogenic Metarhizium and Beauveria'
    ],
    measurableBenefitEn: 'Completely eliminates recurring expenditure on toxic chemical insecticides.',
    measurableBenefitHi: 'जहरीले रासायनिक कीटनाशकों पर होने वाला सारा खर्च शून्य हो जाता है।',
    iconType: 'shield'
  },
  {
    id: 'sustainable-agriculture',
    titleEn: 'Carbon Sequestration & Climate Resilience',
    titleHi: 'कार्बन अवशोषण एवं जलवायु अनुकूल टिकाऊ कृषि',
    summaryEn: 'Natural farming transforms agriculture from a major greenhouse gas emitter into humanity\'s primary terrestrial carbon sink.',
    summaryHi: 'प्राकृतिक खेती कृषि को प्रदूषण फैलाने वाले क्षेत्र से बदलकर पृथ्वी का सबसे बड़ा कार्बन अवशोषक बनाती है।',
    detailedAnalysisEn: 'Conventional chemical agriculture accounts for nearly 25% of global greenhouse emissions through synthetic nitrogen fertilizer manufacture (fossil gas Haber-Bosch), tractor diesel emissions, and stubble burning. Natural farming halts all synthetic nitrogen inputs (eliminating nitrous oxide, N2O emissions, which is 298 times more potent than CO2), retains all crop stubble in the soil matrix, and sequesters atmospheric carbon deep into subterranean humic profiles.',
    detailedAnalysisHi: 'रासायनिक खाद बनाने में भारी मात्रा में कोयला और गैस जलती है और खेत से निकलने वाली नाइट्रस ऑक्साइड गैस पर्यावरण को CO2 से 298 गुना अधिक गर्म करती है। प्राकृतिक खेती रासायनिक खादों को बंद कर, पराली को खेत में ही सड़ाकर और मिट्टी में जैविक कार्बन बढ़ाकर ग्लोबल वार्मिंग को रोकने में सबसे प्रभावी हथियार साबित होती है।',
    keyOrganismsOrCompounds: [
      'Atmospheric CO2 to Soil Humus Sequestration Pipeline',
      'Nitrous Oxide (N2O) Abatement Kinetics',
      'Deep Root Biosequestration Profiles',
      'Climate-Resilient Thermal Buffering via Mulch'
    ],
    measurableBenefitEn: 'Sequesters 2 to 4 metric tonnes of atmospheric CO2-equivalent per hectare each year.',
    measurableBenefitHi: 'प्रति वर्ष प्रति हेक्टेयर 2 से 4 टन वायुमंडलीय कार्बन का भूमि में सुरक्षित संचय।',
    iconType: 'globe'
  }
];
