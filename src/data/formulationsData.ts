import { Formulation } from '../types';

export const FORMULATIONS: Formulation[] = [
  {
    id: 'jeevanu-jal',
    number: 1,
    slug: 'jeevanu-jal',
    nameEn: 'Jeevanu Jal',
    nameHi: 'जीवाणु जल',
    devanagariScript: 'जीवाणु जल',
    taglineEn: 'Potent Microbial Consortium & Bio-Culture',
    taglineHi: 'शक्तिशाली सूक्ष्मजीव संवर्धन एवं जैविक घोल',
    categoryEn: 'Microbial Inoculant',
    categoryHi: 'सूक्ष्मजीव संवर्धन',
    targetElement: 'Prithvi',
    primaryActionEn: 'Multiplies billions of beneficial soil microbes and accelerates humus formation',
    primaryActionHi: 'अरबों लाभकारी मृदा सूक्ष्मजीवों की वृद्धि एवं ह्यूमस निर्माण को तीव्र करता है',
    introEn: 'Jeevanu Jal is a traditional living microbial liquid culture prepared using indigenous cow dung, urine, pulse flour, and virgin forest/bund soil. It acts as an inoculum of aerobic and anaerobic soil microflora.',
    introHi: 'जीवाणु जल देशी गाय के गोबर, गोमूत्र, दलहनी बेसन और जंगल या मेड़ की सजीव मिट्टी से तैयार किया जाने वाला एक अत्यंत समृद्ध तरल सूक्ष्मजीव संवर्धन है जो भूमि में जीवाणुओं की संख्या तेजी से बढ़ाता है।',
    purposeEn: 'To rapidly repopulate depleted soils with native bacteria, actinomycetes, and mycorrhizae that unlock insoluble phosphorus, potassium, and trace minerals.',
    purposeHi: 'रासायनिक उर्वरकों से मृतप्राय भूमि में देशी जीवाणुओं, एक्टिनोमाइसीट्स और कवक को पुनः स्थापित करना ताकि भूमि में पहले से मौजूद अगुलनशील पोषक तत्व पौधों को मिल सकें।',
    idealForCropsEn: ['Wheat', 'Paddy', 'Vegetables', 'Pulses', 'Oilseeds', 'Fruit Orchards'],
    idealForCropsHi: ['गेहूं', 'धान', 'सब्जियां', 'दलहन', 'तिलहन', 'फलों के बाग'],
    ingredients: [
      {
        nameEn: 'Fresh Indigenous Cow Dung (Desi Cow)',
        nameHi: 'देशी गाय का ताजा गोबर',
        quantityEn: '10 kg',
        quantityHi: '10 किग्रा',
        purposeEn: 'Primary inoculant containing millions of live cellulose and lignin-decomposing bacteria',
        purposeHi: 'प्राथमिक जीवाणु स्रोत जिसमें करोड़ों सेल्यूलोज व लिग्निन अपघटक मित्र जीवाणु होते हैं'
      },
      {
        nameEn: 'Indigenous Cow Urine (Gomutra)',
        nameHi: 'देशी गाय का गोमूत्र',
        quantityEn: '5-10 Litres',
        quantityHi: '5-10 लीटर',
        purposeEn: 'Rich in natural urea, minerals, enzymes, and natural antifungal alkaloids',
        purposeHi: 'प्राकृतिक यूरिया, खनिज, पाचक एंजाइम व फफूंदरोधी गुणों से भरपूर'
      },
      {
        nameEn: 'Organic Jaggery (Gud) / Fruit Pulp',
        nameHi: 'पुराना गुड़ या गन्ने का रस',
        quantityEn: '1-2 kg',
        quantityHi: '1-2 किग्रा',
        purposeEn: 'Immediate carbohydrate energy source for rapid bacterial replication',
        purposeHi: 'सूक्ष्मजीवों के तीव्र विभाजन के लिए तत्काल सुलभ कार्बोहाइड्रेट ऊर्जा'
      },
      {
        nameEn: 'Pulse Flour (Besan / Gram / Moong)',
        nameHi: 'दलहन का बेसन (चना, मूंग या उड़द)',
        quantityEn: '1-2 kg',
        quantityHi: '1-2 किग्रा',
        purposeEn: 'Provides amino acids and proteins for cellular structure of dividing microbes',
        purposeHi: 'सूक्ष्मजीवों की नई कोशिकाओं के निर्माण हेतु आवश्यक प्रोटीन व अमीनो अम्ल'
      },
      {
        nameEn: 'Virgin Bund / Forest Soil',
        nameHi: 'खेत की मेड़ या बरगद/पीपल के नीचे की मिट्टी',
        quantityEn: '1 Handful (200-500g)',
        quantityHi: '1 मुट्ठी (200-500 ग्राम)',
        purposeEn: 'Wild, resilient mother culture of indigenous undisturbed microbes',
        purposeHi: 'रासायनिक खाद से अप्रभावित प्राकृतिक मूल मित्र सूक्ष्मजीवों का मातृ-कल्चर'
      },
      {
        nameEn: 'Chlorine-free Clean Water',
        nameHi: 'क्लोरिन-रहित स्वच्छ जल',
        quantityEn: '200 Litres',
        quantityHi: '200 लीटर',
        purposeEn: 'Liquid medium for fermentation and distribution',
        purposeHi: 'किण्वन एवं वितरण हेतु स्वच्छ जलीय माध्यम'
      }
    ],
    preparationTimeEn: '48 to 72 Hours (Fermentation under shade)',
    preparationTimeHi: '48 से 72 घंटे (छायादार स्थान में किण्वन)',
    shelfLifeEn: 'Use within 7 to 10 days of peak fermentation',
    shelfLifeHi: 'किण्वन पूर्ण होने के 7 से 10 दिनों के भीतर उपयोग करें',
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Preparation of Mixing Drum',
        titleHi: 'ड्रम एवं स्वच्छ जल का प्रबंध',
        descEn: 'Take a 200-litre food-grade plastic or earthen barrel. Place it under dense shade away from direct sunlight and rain.',
        descHi: '200 लीटर का प्लास्टिक ड्रम या मिट्टी की बड़ी नाद लें। इसे सीधे धूप और वर्षा से दूर छायादार पेड़ या छप्पर के नीचे रखें।',
        tipEn: 'Do not use metal containers as organic acids react with metal.'
      },
      {
        stepNumber: 2,
        titleEn: 'Incorporating Primary Inoculants',
        titleHi: 'गोबर व गोमूत्र का सम्मिश्रण',
        descEn: 'Add 10 kg fresh desi cow dung and 5-10 litres cow urine into the barrel with 100 litres of water. Stir thoroughly with a wooden stick.',
        descHi: 'ड्रम में 100 लीटर पानी डालें, फिर 10 किलो ताजा गोबर और 5-10 लीटर गोमूत्र डालकर लकड़ी के डंडे से अच्छी तरह घोलें।'
      },
      {
        stepNumber: 3,
        titleEn: 'Adding Nutrient Feed & Mother Culture',
        titleHi: 'गुड़, बेसन व मेड़ की मिट्टी मिलाना',
        descEn: 'In a separate bucket, dissolve 1-2 kg jaggery and 1-2 kg pulse flour in water without lumps. Pour into drum along with the handful of virgin bund soil.',
        descHi: 'एक अलग बाल्टी में गुड़ और बेसन को बिना गांठ के पानी में घोल लें। इसे ड्रम में डालें और साथ में एक मुट्ठी पवित्र मेड़ की मिट्टी मिला दें।'
      },
      {
        stepNumber: 4,
        titleEn: 'Clockwise Aeration Routine',
        titleHi: 'दक्षिणावर्त (क्लॉकवाइज) घूर्णन',
        descEn: 'Fill remaining water up to 200 litres. Stir the mixture with a wooden staff in a clockwise direction for 5 minutes, twice daily (morning and evening).',
        descHi: 'ड्रम को 200 लीटर तक पानी से भरें। सुबह और शाम 5-5 मिनट लकड़ी के डंडे से दक्षिणावर्त (घड़ी की सुई की दिशा में) हिलाएं।'
      },
      {
        stepNumber: 5,
        titleEn: 'Covering with Jute Bag',
        titleHi: 'जूट की बोरी से ढंकना',
        descEn: 'Cover the drum mouth with a porous jute sack to allow aerobic respiration while preventing dust and insect entry. Ferment for 48-72 hours.',
        descHi: 'ड्रम के मुंह को सूती कपड़े या जूट की बोरी से बांधें ताकि वायु संचार हो सके और कीट न गिरें। 48-72 घंटे किण्वित होने दें।'
      }
    ],
    applications: [
      {
        stageEn: 'Field Preparation & Basal Application',
        stageHi: 'बुवाई पूर्व भूमि तैयारी एवं बेसल प्रयोग',
        methodEn: 'Through irrigation water or flood floodgates (Drip / Canal)',
        methodHi: 'सिंचाई जल के साथ (ड्रिप या नाली द्वारा)',
        dosageEn: '200 Litres per acre',
        dosageHi: '200 लीटर प्रति एकड़',
        frequencyEn: 'At every major irrigation (every 15-21 days)',
        frequencyHi: 'प्रत्येक मुख्य सिंचाई के साथ (15-21 दिन के अंतराल पर)'
      },
      {
        stageEn: 'Foliar Spray on Standing Crops',
        stageHi: 'खड़ी फसल पर पर्णीय छिड़काव',
        methodEn: 'Filtered through double muslin cloth via knapsack sprayer',
        methodHi: 'दोहरे सूती कपड़े से छानकर नैपसैक स्प्रेयर द्वारा',
        dosageEn: '10-20% concentration (1-2 litres in 10 litres water)',
        dosageHi: '10-20% सांद्रता (10 लीटर पानी में 1-2 लीटर छना हुआ घोल)',
        frequencyEn: 'At vegetative and flowering stages',
        frequencyHi: 'वानस्पतिक वृद्धि एवं कल्ले फूटने के समय'
      }
    ],
    benefits: [
      {
        titleEn: 'Explosive Microbial Soil Population',
        titleHi: 'मृदा में सूक्ष्मजीवों की तीव्र वृद्धि',
        detailEn: 'Multiplies native bacteria up to 10^8 CFU/ml within 48 hours, enriching the root zone.',
        detailHi: '48 घंटे में जीवाणुओं की संख्या 10^8 सीएफयू/मिली तक बढ़ जाती है, जिससे जड़ क्षेत्र सजीव होता है।'
      },
      {
        titleEn: 'Nutrient Solubilization',
        titleHi: 'स्थिर पोषक तत्वों की सुलभता',
        detailEn: 'Converts locked phosphorus and potassium into bioavailable ions through enzymatic secretion.',
        detailHi: 'मिट्टी में बंद पड़े फॉस्फोरस, पोटाश और सूक्ष्म तत्वों को घोलकर पौधों को तुरंत उपलब्ध कराता है।'
      },
      {
        titleEn: 'Enhanced Earthworm Activity',
        titleHi: 'केंचुओं की प्राकृतिक सक्रियता',
        detailEn: 'Attracts local endogeic earthworms that aerate and create macro-pores in the subsoil.',
        detailHi: 'देशी केंचुओं को आकर्षित करता है जो गहरी मिट्टी से आकर भूमि को भुरभुरा और सरंध्र बनाते हैं।'
      }
    ],
    science: {
      microbialEn: 'Contains a diverse consortium of Bacillus subtilis, Pseudomonas fluorescens, Azotobacter chroococcum, and cellulolytic fungal species that establish symbiosis with root exudates.',
      microbialHi: 'इसमें बेसिलस सबटिलिस, स्यूडोमोनास फ्लोरेसेंस, एजोटोबैक्टर और सेल्यूलोज अपघटक कवक की सघन आबादी होती है जो पौधों की जड़ों के साथ सहजीवन स्थापित करती है।',
      biochemicalEn: 'Produces indole-3-acetic acid (auxins), gibberellins, and organic acids that drop localized micro-pH, facilitating mineral chelation and plant vigor.',
      biochemicalHi: 'इंडोल-3-एसिटिक एसिड (ऑक्सिन), जिबरेलिन और कार्बनिक अम्ल उत्पन्न करता है जो स्थानीय सूक्ष्म-पीएच को अनुकूल कर खनिजों का प्राकृतिक चीलेशन करते हैं।',
      soilImpactEn: 'Stimulates the production of glomalin by mycorrhizal fungi, bonding soil aggregates and dramatically increasing soil water infiltration rate by 35-50%.',
      soilImpactHi: 'माइकोराइजा कवक द्वारा ग्लोमालिन प्रोटीन के स्राव को बढ़ाता है, जिससे मिट्टी के कण बंधते हैं और जल अवशोषण क्षमता 35-50% तक बढ़ जाती है।'
    },
    precautionsEn: [
      'Never mix with synthetic chemical fertilizers, pesticides, or chlorinated tap water.',
      'Always prepare and store under shady conditions; direct UV sunlight kills beneficial microbes.',
      'Always use a wooden stick to stir; never use iron or metal rods.',
      'Filter thoroughly through clean cotton cloth before loading into sprayer nozzles.'
    ],
    precautionsHi: [
      'रासायनिक खाद, कीटनाशक या क्लोरीनयुक्त नल के पानी के साथ कभी न मिलाएं।',
      'हमेशा छाया में ही बनाएं और रखें; सीधी धूप के पराबैंगनी किरणें मित्र जीवाणुओं को नष्ट कर देती हैं।',
      'घोलने के लिए हमेशा लकड़ी के डंडे का ही प्रयोग करें, लोहे का नहीं।',
      'स्प्रेयर में डालने से पहले महीन सूती कपड़े से 2 बार अवश्य छानें ताकि नोजल जाम न हो।'
    ],
    isVerified: true,
    colorTheme: 'emerald'
  },
  {
    id: 'kadva-rasayan',
    number: 2,
    slug: 'kadva-rasayan',
    nameEn: 'Kadva Rasayan',
    nameHi: 'कड़वा रसायन',
    devanagariScript: 'कड़वा रसायन',
    taglineEn: 'Broad-Spectrum Botanical Pest Deterrent & Antifeedant',
    taglineHi: 'प्राकृतिक कड़वा कीट निरोधक एवं कीटभक्षी रसायन',
    categoryEn: 'Botanical Biopesticide',
    categoryHi: 'वानस्पतिक कीटरक्षक',
    targetElement: 'Agni',
    primaryActionEn: 'Repels chewing and sucking pests through intense natural bitter alkaloids',
    primaryActionHi: 'तीव्र कड़वे प्राकृतिक अल्कलॉइड्स से रस चूसक और चबाने वाले कीटों को दूर भगाता है',
    introEn: 'Kadva Rasayan is an herbal decoction formulated with unpalatable, bitter and pungent leaves (such as Neem, Karanj, Dhatura, Castor, and Calotropis) fermented in indigenous cow urine.',
    introHi: 'कड़वा रसायन कड़वे और पशुओं द्वारा न खाए जाने वाले औषधीय पौधों (नीम, करंज, धतूरा, आक/मदार, अरंडी) की पत्तियों को गोमूत्र में पकाकर या किण्वित करके बनाया जाने वाला एक प्राकृतिक कीट निरोधक है।',
    purposeEn: 'To prevent insect pest infestations, disrupt insect feeding instincts, and control caterpillars, aphids, and whiteflies without harming beneficial predators like ladybird beetles and honeybees.',
    purposeHi: 'माहू, सफेद मक्खी, तना छेदक और इल्लियों के प्रकोप को रोकना, कीटों के आहार चक्र को तोड़ना, और मित्र कीटों (मधुमक्खी, लेडीबर्ड) को कोई नुकसान पहुंचाए बिना फसल की रक्षा करना।',
    idealForCropsEn: ['Cotton', 'Vegetables', 'Pulses', 'Mustard', 'Chilli', 'Fruit crops'],
    idealForCropsHi: ['कपास', 'सब्जियां', 'दलहन', 'सरसों', 'मिर्च', 'फलदार वृक्ष'],
    ingredients: [
      {
        nameEn: 'Neem Leaves (Azadirachta indica)',
        nameHi: 'नीम की पत्तियां',
        quantityEn: '5 kg',
        quantityHi: '5 किग्रा',
        purposeEn: 'Contains azadirachtin which disrupts insect growth, molting, and reproduction',
        purposeHi: 'अज़ाडिराक्टिन से भरपूर जो कीटों की वृद्धि, मोल्टिंग व प्रजनन क्षमता को रोकता है'
      },
      {
        nameEn: 'Karanj / Pongamia Leaves',
        nameHi: 'करंज की पत्तियां',
        quantityEn: '2 kg',
        quantityHi: '2 किग्रा',
        purposeEn: 'Contains karanjin, a potent anti-insecticidal and anti-oviposition agent',
        purposeHi: 'करंजिन युक्त, जो कीटों को अंडे देने से रोकता है'
      },
      {
        nameEn: 'Dhatura Leaves & Pods (Datura stramonium)',
        nameHi: 'धतूरे की पत्तियां व फल',
        quantityEn: '2 kg',
        quantityHi: '2 किग्रा',
        purposeEn: 'Provides tropane alkaloids (scopolamine, hyoscyamine) acting as bitter repellent',
        purposeHi: 'तीव्र अल्कलॉइड जो कीटों के तंत्रिका तंत्र और पाचन को बाधित करते हैं'
      },
      {
        nameEn: 'Aak / Madar Leaves (Calotropis gigantea)',
        nameHi: 'आक / मदार की पत्तियां',
        quantityEn: '2 kg',
        quantityHi: '2 किग्रा',
        purposeEn: 'High latex content with cardiac glycosides that repels herbivores and larvae',
        purposeHi: 'कड़वा दूधिया रस जो इल्लियों और रसचूसक कीटों को फसल से दूर रखता है'
      },
      {
        nameEn: 'Indigenous Cow Urine (Gomutra)',
        nameHi: 'देशी गाय का गोमूत्र',
        quantityEn: '10 Litres',
        quantityHi: '10 लीटर',
        purposeEn: 'Solvent medium that extracts phytochemicals while providing systemic sulfur & nitrogen',
        purposeHi: 'पत्तियों के औषधीय रसों का निष्कर्षण और सल्फर-नाइट्रोजन का प्राकृतिक स्रोत'
      },
      {
        nameEn: 'Crushed Garlic & Green Chilli Paste',
        nameHi: 'लहसुन व तीखी हरी मिर्च की चटनी',
        quantityEn: '500g each',
        quantityHi: '500-500 ग्राम',
        purposeEn: 'Capsaicin and allicin produce intense pungent smell that drives pests away',
        purposeHi: 'कैप्साइसिन व एलिसिन की तीखी गंध से रस चूसक कीट तुरंत भागते हैं'
      }
    ],
    preparationTimeEn: '10-15 Days (cold fermentation) or 2 Hours (slow simmer)',
    preparationTimeHi: '10-15 दिन (ठंडी किण्वन विधि) अथवा 2 घंटे (मंद आंच पर पकाने की विधि)',
    shelfLifeEn: '6 Months when stored in sealed earthen or plastic vessel in shade',
    shelfLifeHi: 'छाया में बंद मिट्टी या प्लास्टिक पात्र में 6 माह तक सुरक्षित',
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Leaf Crushing & Bruising',
        titleHi: 'पत्तियों की कुटाई',
        descEn: 'Collect fresh leaves of all 5 bitter plants. Chop or crush them with a wooden mallet to break leaf cell walls for rapid alkaloid release.',
        descHi: 'सभी कड़वे पौधों की ताजी पत्तियां एकत्र करें। लकड़ी के मूसल से उन्हें कूट लें ताकि कोशिकाओं से औषधीय रस आसानी से बाहर आ सके।'
      },
      {
        stepNumber: 2,
        titleEn: 'Infusion in Gomutra',
        titleHi: 'गोमूत्र में मिश्रण',
        descEn: 'Place crushed botanical mass into an earthen pot or plastic container and pour 10 litres of indigenous cow urine over it.',
        descHi: 'कुटी हुई पत्तियों को मिट्टी की नाद या ड्रम में डालें और ऊपर से 10 लीटर देशी गोमूत्र उडेल दें।'
      },
      {
        stepNumber: 3,
        titleEn: 'Addition of Pungent Synergists',
        titleHi: 'तीखा मिश्रण (लहसुन व मिर्च) डालना',
        descEn: 'Add crushed garlic and hot green chilli paste into the barrel. Stir thoroughly in clockwise motion.',
        descHi: 'कुटा हुआ लहसुन और तीखी हरी मिर्च का पेस्ट डालें और अच्छी तरह लकड़ी से मिला दें।'
      },
      {
        stepNumber: 4,
        titleEn: 'Fermentation or Gentle Decoction',
        titleHi: 'किण्वन या मंद आंच पर पकाना',
        descEn: 'Either simmer gently on low flame for 4 boiling surges, or allow it to ferment covered in shade for 15 days, stirring once daily.',
        descHi: 'या तो धीमी आंच पर 4 उबाल आने तक पकाएं, या फिर छाया में 15 दिनों तक प्रतिदिन हिलाते हुए सड़ने दें।'
      },
      {
        stepNumber: 5,
        titleEn: 'Filtration and Bottling',
        titleHi: 'छानना व सुरक्षित रखना',
        descEn: 'Filter the dense dark liquid through a clean 3-layer muslin cloth. Store in dark cool container.',
        descHi: 'तैयार अर्क को तिहरे सूती कपड़े से अच्छी तरह छानकर ठंडी छायादार जगह पर कांच या प्लास्टिक बोतल में भर लें।'
      }
    ],
    applications: [
      {
        stageEn: 'Preventive Spray (Pre-Infestation)',
        stageHi: 'निवारक छिड़काव (कीट आने से पूर्व)',
        methodEn: 'Foliar spray during evening hours',
        methodHi: 'शाम के समय पत्तियों के ऊपरी व निचले भाग पर छिड़काव',
        dosageEn: '250-300 ml per 15-litre knapsack tank (2%)',
        dosageHi: '250-300 मिली प्रति 15 लीटर टंकी (2% घोल)',
        frequencyEn: 'Every 15 days as natural protective shield',
        frequencyHi: 'फसल के जीवनकाल में प्रत्येक 15 दिन में'
      },
      {
        stageEn: 'Active Infestation Intervention',
        stageHi: 'सक्रिय कीट प्रकोप के समय',
        methodEn: 'Foliar spray with natural surfactant (20ml soap-nut liquid)',
        methodHi: 'रीठा का पानी (प्राकृतिक चिपकू) मिलाकर पत्तियों पर छिड़काव',
        dosageEn: '500 ml per 15-litre tank (3-4%)',
        dosageHi: '500 मिली प्रति 15 लीटर स्प्रे पंप (3-4% घोल)',
        frequencyEn: 'Repeat after 5-7 days until larvae disappear',
        frequencyHi: '5-7 दिन बाद पुनः दोहराएं जब तक इल्ली नष्ट न हो जाए'
      }
    ],
    benefits: [
      {
        titleEn: 'Broad-Spectrum Pest Resistance',
        titleHi: 'व्यापक कीट प्रतिरोधक क्षमता',
        detailEn: 'Acts against pod borers, fruit borers, aphids, thrips, and leaf miners effectively.',
        detailHi: 'फली छेदक, तना छेदक, माहू, थ्रिप्स और पत्ती मोड़क कीटों पर अत्यंत प्रभावशाली।'
      },
      {
        titleEn: 'No Resistance Development in Pests',
        titleHi: 'कीटों में प्रतिरोधक क्षमता नहीं बनती',
        detailEn: 'Unlike single-compound chemical insecticides, the multi-alkaloid botanical complex prevents insects from developing genetic resistance.',
        detailHi: 'रासायनिक दवाओं के विपरीत, इसमें सैकड़ों प्राकृतिक यौगिक होते हैं जिससे कीटों में इसके प्रति प्रतिरोधक क्षमता उत्पन्न नहीं होती।'
      },
      {
        titleEn: 'Safe for Beneficial Honeybees & Spiders',
        titleHi: 'मधुमक्खियों व मित्र मकड़ियों के लिए सुरक्षित',
        detailEn: 'Does not kill through systemic neurotoxicity; repels pests without disrupting garden food chain.',
        detailHi: 'यह प्रणालीगत जहर नहीं है, अतः खेत में परागण करने वाली मधुमक्खियों और शिकारी मकड़ियों को सुरक्षित रखता है।'
      }
    ],
    science: {
      microbialEn: 'Contains plant-derived polyphenols with mild antimicrobial activity that suppress early bacterial leaf spots while preserving soil microbiome upon drip-off.',
      microbialHi: 'इसमें मौजूद पॉलीफेनोल्स पत्तियों पर हानिकारक जीवाणु जनित धब्बों को रोकते हैं जबकि जमीन पर गिरने पर मिट्टी के जीवाणुओं को नुकसान नहीं पहुंचाते।',
      biochemicalEn: 'Azadirachtin binds to ecdysone receptors blocking ecdysis (larval shedding). Karanjin and solasodine disrupt insect gut epithelial permeability, inducing starvation.',
      biochemicalHi: 'अज़ाडिराक्टिन कीट के एकडाइसोन हार्मोन को अवरुद्ध कर कायांतरण रोकता है। करंजिन कीट की आंत की परत को प्रभावित कर उसे भूखा मारता है।',
      soilImpactEn: 'As wash-off reaches the soil, sulfur in gomutra stimulates soil sulfur-oxidizing bacteria and acts as mild organic systemic nutrient.',
      soilImpactHi: 'वर्षा या ओस से बहकर जमीन पर आने पर गोमूत्र का प्राकृतिक गंधक मिट्टी के पोषक चक्र को समृद्ध करता है।'
    },
    precautionsEn: [
      'Always spray in late afternoon or early morning; intense midday heat can cause leaf scorch.',
      'Wear eye protection and wash hands thoroughly after handling concentrated extract.',
      'Do not overdose beyond 5% concentration on tender seedlings or blooming blossoms.'
    ],
    precautionsHi: [
      'छिड़काव हमेशा शाम 4 बजे के बाद या सुबह धूप निकलने से पहले करें; तेज धूप में पत्तियां झुलस सकती हैं।',
      'तैयार अर्क काफी तीखा होता है, अतः आंखों को बचाएं और छिड़काव के बाद हाथ साबुन से धोएं।',
      'फूल खिलने के समय या नए कोमल पौधों पर 2% से अधिक सांद्रता का उपयोग न करें।'
    ],
    isVerified: true,
    colorTheme: 'amber'
  },
  {
    id: 'meetha-rasayan',
    number: 3,
    slug: 'meetha-rasayan',
    nameEn: 'Meetha Rasayan',
    nameHi: 'मीठा रसायन',
    devanagariScript: 'मीठा रसायन',
    taglineEn: 'Fruit Amino Acid & Metabolic Energizer',
    taglineHi: 'फल अमीनो अम्ल एवं पादप ऊर्जा वर्धक',
    categoryEn: 'Metabolic & Growth Stimulant',
    categoryHi: 'वृद्धि एवं ऊर्जा वर्धक',
    targetElement: 'Jal',
    primaryActionEn: 'Boosts plant flowering, fruit set, sugar translocation, and chlorophyll density',
    primaryActionHi: 'पौधों में फूलों व फलों के ठहराव, मिठास व पर्णहरिम (क्लोरोफिल) की मात्रा में वृद्धि',
    introEn: 'Meetha Rasayan is an anaerobic or semi-aerobic fermented elixir made from ripe seasonal sweet fruits (papaya, banana, jackfruit, guava) mixed with unprocessed organic jaggery. It is rich in fruit-derived enzymes, phyto-hormones, and amino acids.',
    introHi: 'मीठा रसायन पूरी तरह पके हुए मीठे फलों (केला, पपीता, अमरूद, चीकू) और प्राकृतिक गुड़ के किण्वन से तैयार किया जाने वाला एक ऊर्जावान टॉनिक है, जो पादप हार्मोन, फ्रुक्टोज और एंजाइम से भरपूर होता है।',
    purposeEn: 'To trigger profuse flower blooming, prevent premature fruit drop, improve fruit size, color, aroma, and enhance brix (natural sugar sweetness) in horticultural crops.',
    purposeHi: 'फसलों में बंपर फूल लाना, फूलों और फलों को गिरने से बचाना, फल का आकार, चमक, प्राकृतिक स्वाद व मिठास (ब्रिक्स वैल्यू) को बढ़ाना।',
    idealForCropsEn: ['Mango', 'Pomegranate', 'Tomato', 'Citrus', 'Papaya', 'Grapes', 'Vegetables'],
    idealForCropsHi: ['आम', 'अनार', 'टमाटर', 'नींबू वर्गीय फल', 'पपीता', 'अंगूर', 'सब्जियां'],
    ingredients: [
      {
        nameEn: 'Over-ripe Sweet Fruits (Banana, Papaya, Melon)',
        nameHi: 'अति-पके मीठे फल (केला, पपीता, खरबूजा)',
        quantityEn: '3 kg',
        quantityHi: '3 किग्रा',
        purposeEn: 'Rich reservoir of potassium, boron, vitamins, and natural fruit enzymes',
        purposeHi: 'पोटाश, बोरॉन, प्राकृतिक फ्रुक्टोज और फल एंजाइम का प्राकृतिक खजाना'
      },
      {
        nameEn: 'Chemical-free Dark Jaggery (Gud)',
        nameHi: 'प्राकृतिक देशी काला गुड़',
        quantityEn: '3 kg (1:1 ratio with fruit mass)',
        quantityHi: '3 किग्रा (फलों के भार के बराबर 1:1)',
        purposeEn: 'Osmotic preservative that draws out cellular sap while feeding fermentative yeasts',
        purposeHi: 'परासरणी क्रिया द्वारा फलों का रस खींचता है और यीस्ट का पोषण करता है'
      },
      {
        nameEn: 'Fresh Coconut Water (Optional Booster)',
        nameHi: 'कच्चे नारियल का पानी (ऐच्छिक)',
        quantityEn: '1 Litre',
        quantityHi: '1 लीटर',
        purposeEn: 'Natural source of cytokinins that promote cell division',
        purposeHi: 'साइटोकाइनिन का प्राकृतिक स्रोत जो तीव्र कोशिका विभाजन को प्रेरित करता है'
      },
      {
        nameEn: 'Virgin Forest / Tree Base Soil',
        nameHi: 'जंगल या फलदार पेड़ की जड़ की मिट्टी',
        quantityEn: '1 Teaspoon (10g)',
        quantityHi: '1 चम्मच (10 ग्राम)',
        purposeEn: 'Provides diverse wild yeasts and lactic bacteria',
        purposeHi: 'प्राकृतिक जंगली यीस्ट और लाभकारी बैक्टीरिया की शुरुआत हेतु'
      }
    ],
    preparationTimeEn: '21 to 30 Days (Airtight anaerobic fermentation in dark room)',
    preparationTimeHi: '21 से 30 दिन (वायुरोधी जार में अंधेरे स्थान में किण्वन)',
    shelfLifeEn: 'Up to 12 Months if kept tightly sealed in a glass or food-grade vessel',
    shelfLifeHi: 'कांच या फूड-ग्रेड जार में वायुरोधी रखने पर 1 वर्ष तक सुरक्षित',
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Selection & Slicing of Sweet Fruits',
        titleHi: 'फलों का चुनाव व काटना',
        descEn: 'Select naturally ripened, undamaged sweet fruits. Do not wash with chlorinated tap water; chop into small cubes including peels.',
        descHi: 'बिना सड़े प्राकृतिक रूप से पके मीठे फल लें। छिलके सहित छोटे-छोटे टुकड़ों में काट लें।'
      },
      {
        stepNumber: 2,
        titleEn: 'Layering with Organic Jaggery',
        titleHi: 'गुड़ के साथ परत दर परत मिलाना',
        descEn: 'In a wide-mouth glass or food-grade clay jar, create alternating layers of chopped fruits and crushed dark jaggery in a strict 1:1 weight ratio.',
        descHi: 'कांच या मिट्टी के बर्तन में एक परत कटे फलों की और एक परत गुड़ की 1:1 के अनुपात में बिछाएं।'
      },
      {
        stepNumber: 3,
        titleEn: 'Adding Inoculant & Coconut Water',
        titleHi: 'नारियल पानी व मातृ मिट्टी मिलाना',
        descEn: 'Pour fresh tender coconut water and add a pinch of forest soil. Mix gently with a dry wooden ladle.',
        descHi: 'ऊपर से कच्चा नारियल पानी और एक चुटकी सजीव मिट्टी डालें और सूखी लकड़ी से मिला दें।'
      },
      {
        stepNumber: 4,
        titleEn: 'Airtight Sealing & Anaerobic Fermentation',
        titleHi: 'वायुरोधी ढक्कन बंद करना',
        descEn: 'Seal the container tightly. Place in a dark, warm, well-ventilated room (25-30°C). Open cap slightly every 3 days for 5 seconds to release fermentative gas buildup.',
        descHi: 'ढक्कन को वायुरोधी बंद करें और अंधेरे कमरे में रखें। हर तीसरे दिन 5 सेकंड के लिए ढक्कन हल्का ढीला करके गैस निकालें फिर कस दें।'
      },
      {
        stepNumber: 5,
        titleEn: 'Extraction of Golden Elixir',
        titleHi: 'सुगंधित अर्क को छानना',
        descEn: 'After 30 days, a fragrant, sweet-smelling, golden brown fermented syrup is formed. Strain without squeezing through fine cheesecloth.',
        descHi: '30 दिन बाद जब मीठी शराब जैसी सौंधी खुशबू आने लगे, तो बिना निचोड़े महीन कपड़े से तरल अर्क को छान लें।'
      }
    ],
    applications: [
      {
        stageEn: 'Pre-Flowering Stage',
        stageHi: 'फूल आने से 10-15 दिन पूर्व',
        methodEn: 'Foliar spray with fine mist',
        methodHi: 'पत्तियों और शाखाओं पर बारीक फव्वारे से स्प्रे',
        dosageEn: '2-3 ml per litre of water (30-45 ml per 15L tank)',
        dosageHi: '2-3 मिली प्रति लीटर पानी (30-45 मिली प्रति 15L पंप)',
        frequencyEn: 'Once prior to bud formation',
        frequencyHi: 'कलियां बनते समय एक बार'
      },
      {
        stageEn: 'Fruit Development & Color Break Stage',
        stageHi: 'फल बनने एवं फल विकास के समय',
        methodEn: 'Foliar spray + drip fertigation',
        methodHi: 'पर्णीय छिड़काव अथवा ड्रिप द्वारा जड़ क्षेत्र में',
        dosageEn: '5 ml per litre of spray water, or 1 Litre per acre via drip',
        dosageHi: '5 मिली प्रति लीटर छिड़काव, या 1 लीटर प्रति एकड़ ड्रिप द्वारा',
        frequencyEn: 'Twice during fruit expansion phase (15 days apart)',
        frequencyHi: 'फल का आकार बढ़ते समय 15 दिन के अंतराल पर 2 बार'
      }
    ],
    benefits: [
      {
        titleEn: 'Prevention of Flower & Fruit Drop',
        titleHi: 'फूलों एवं फलों का गिरना बंद होना',
        detailEn: 'Natural auxins and potassium reinforce the abscission layer in flower pedicels, reducing premature drop by up to 60%.',
        detailHi: 'प्राकृतिक ऑक्सिन फूलों के डंठल को मजबूत बनाते हैं जिससे 60% तक फूल-फल गिरना रुक जाता है।'
      },
      {
        titleEn: 'Superior Sugar Content (Brix) & Taste',
        titleHi: 'फलों में उत्कृष्ट मिठास व चमक',
        detailEn: 'Promotes rapid translocation of photosynthates into developing fruits, elevating market value and shelf life.',
        detailHi: 'फलों में शर्करा और पोषक तत्वों के संचय को तीव्र करता है, जिससे फलों का रंग, चमक और मिठास बढ़ती है।'
      },
      {
        titleEn: 'Stress Recovery After Hail or Drought',
        titleHi: 'सूखा या पाला पड़ने पर संजीवनी',
        detailEn: 'Supplies ready-to-absorb amino acids, sparing the plant energy required to synthesize peptides under shock.',
        detailHi: 'पौधे को तत्काल अवशोषित होने वाले अमीनो एसिड मिलते हैं जिससे मौसम के तनाव से फसल तेजी से उबरती है।'
      }
    ],
    science: {
      microbialEn: 'Dominated by Saccharomyces cerevisiae, Pichia, and Lactobacillus plantarum that hydrolyze complex pectin and starch into simple monosaccharides and organic acids.',
      microbialHi: 'इसमें सेकेरोमाइसिस यीस्ट और लैक्टोबैसिलस बैक्टीरिया का प्रभुत्व होता है जो फलों के स्टार्च को सरल शर्करा व अमीनो एसिड में बदल देते हैं।',
      biochemicalEn: 'Rich in organic potassium (K+), natural boron complexes, and endogenous phytohormones (cytokinins and IAA) critical for pollen viability and ovule fertilization.',
      biochemicalHi: 'जैविक पोटेशियम, बोरॉन और फाइटो-हार्मोन से समृद्ध जो परागकणों की जीवन क्षमता और परागण क्रिया को कई गुना बढ़ाते हैं।',
      soilImpactEn: 'When applied via fertigation, residual simple sugars feed endorhizospheric fungi that form deep mycorrhizal bridges with tree roots.',
      soilImpactHi: 'जड़ों में देने पर इसकी शर्करा मिट्टी के माइकोराइजा कवक को भोजन प्रदान करती है जिससे जड़ें गहरी फैलती हैं।'
    },
    precautionsEn: [
      'Strictly avoid over-dosage: High concentration can attract ants or fruit flies.',
      'Do not use rotten, moldy, or chemically treated fruits.',
      'Always release gas every few days during initial fermentation to prevent vessel bursting.'
    ],
    precautionsHi: [
      'अधिक मात्रा में कभी न डालें: अधिक मीठेपन से चींटियां या मक्खियां आकर्षित हो सकती हैं।',
      'सड़े-गले, फफूंद लगे या रासायनिक कीटनाशक छिड़के फलों का कभी प्रयोग न करें।',
      'किण्वन के शुरुआती दिनों में जार की गैस नियमित रूप से निकालते रहें ताकि बर्तन चटके नहीं।'
    ],
    isVerified: true,
    colorTheme: 'yellow'
  },
  {
    id: 'khatta-rasayan',
    number: 4,
    slug: 'khatta-rasayan',
    nameEn: 'Khatta Rasayan',
    nameHi: 'खट्टा रसायन',
    devanagariScript: 'खट्टा रसायन',
    taglineEn: 'Copper-Infused Sour Buttermilk Bio-Fungicide',
    taglineHi: 'ताम्र-युक्त खट्टी छाछ जैविक कवकनाशी',
    categoryEn: 'Bio-Fungicide & Micronutrient',
    categoryHi: 'जैविक फफूंदनाशक एवं सूक्ष्म पोषक',
    targetElement: 'Jal',
    primaryActionEn: 'Inactivates powdery mildew, downy mildew, blights, and rust through lactic acid and copper chelate',
    primaryActionHi: 'लैक्टिक अम्ल एवं कॉपर चिलेट द्वारा पाउडरी मिल्ड्यू, डाउनी मिल्ड्यू, झुलसा और रतुआ कवक का खात्मा',
    introEn: 'Khatta Rasayan is prepared by fermenting sour indigenous cow buttermilk (Chhas) along with a pure copper plate or brass vessel for 10-15 days. The reaction creates a greenish-blue, potent antifungal natural copper-lactate complex.',
    introHi: 'खट्टा रसायन देशी गाय के दूध से बनी खट्टी छाछ में तांबे का टुकड़ा या बर्तन डालकर 10-15 दिनों तक सड़ाकर तैयार किया जाने वाला अत्यंत शक्तिशाली फफूंदनाशक योग है।',
    purposeEn: 'To control fungal pathogens such as blight, rust, leaf spot, anthracnose, and mildews on all types of cereals, horticultural fruits, and vegetable crops naturally.',
    purposeHi: 'गेहूं, धान, आलू, टमाटर और अंगूर में लगने वाले झुलसा, गेरुआ (रतुआ), पत्ती धब्बा, पाउडरी व डाउनी मिल्ड्यू जैसे घातक फफूंद जनित रोगों का शत-प्रतिशत प्राकृतिक उपचार।',
    idealForCropsEn: ['Potato', 'Tomato', 'Mustard', 'Grapes', 'Paddy', 'Wheat', 'Cumin'],
    idealForCropsHi: ['आलू', 'टमाटर', 'सरसों', 'अंगूर', 'धान', 'गेहूं', 'जीरा'],
    ingredients: [
      {
        nameEn: 'Sour Indigenous Cow Buttermilk (Desi Cow Chhas)',
        nameHi: 'देशी गाय के दूध की खट्टी छाछ (मट्ठा)',
        quantityEn: '5-10 Litres',
        quantityHi: '5-10 लीटर',
        purposeEn: 'Rich in lactic acid bacteria (LAB) and low pH (3.5-4.0) that inhibits fungal spore germination',
        purposeHi: 'लैक्टिक एसिड और मित्र जीवाणुओं से भरपूर, जिसका खट्टापन कवक के बीजाणुओं को नष्ट करता है'
      },
      {
        nameEn: 'Pure Copper Plate / Scrap (Tamra)',
        nameHi: 'शुद्ध तांबे का टुकड़ा या तार',
        quantityEn: '250-500g',
        quantityHi: '250-500 ग्राम',
        purposeEn: 'Reacts with lactic acid to form natural chelated copper ion complexes',
        purposeHi: 'लैक्टिक एसिड के साथ क्रिया करके प्राकृतिक कॉपर लैक्टेट बनाता है जो फफूंद को खत्म करता है'
      },
      {
        nameEn: 'Asafoetida (Hing) Powder',
        nameHi: 'शुद्ध हींग',
        quantityEn: '25-50g',
        quantityHi: '25-50 ग्राम',
        purposeEn: 'Contains volatile organosulfur compounds with potent systemic fungicidal activity',
        purposeHi: 'गंधक युक्त प्राकृतिक यौगिक जो पौधे की प्रतिरक्षा और कवक प्रतिरोध को बढ़ाते हैं'
      },
      {
        nameEn: 'Chlorine-free Water for dilution',
        nameHi: 'सादा स्वच्छ जल (घोल बनाने हेतु)',
        quantityEn: 'As per spray tank dilution',
        quantityHi: 'स्प्रे के समय आवश्यकतानुसार',
        purposeEn: 'Carrier medium for foliar canopy spray',
        purposeHi: 'पर्णीय छिड़काव हेतु वाहक माध्यम'
      }
    ],
    preparationTimeEn: '10 to 15 Days (Until solution turns light bluish-green)',
    preparationTimeHi: '10 से 15 दिन (जब तक छाछ का रंग हल्का नीला-हरा न हो जाए)',
    shelfLifeEn: '3 Months when stored in a cool place',
    shelfLifeHi: 'छाया में रखने पर 3 माह तक उपयोग योग्य',
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Acquiring Indigenous Buttermilk',
        titleHi: 'खट्टी देशी छाछ का संग्रह',
        descEn: 'Collect 5-10 litres of fresh buttermilk churned from desi cow curd (Bilona method). Let it sit in an earthen pot for 2 days to turn intensely sour.',
        descHi: 'बिलोना विधि से बनी 5-10 लीटर देशी गाय की छाछ लें। इसे मिट्टी के मटके में 2 दिन रखकर खूब खट्टी होने दें।'
      },
      {
        stepNumber: 2,
        titleEn: 'Cleaning and Submerging Copper',
        titleHi: 'तांबे को साफ कर डुबोना',
        descEn: 'Scrub a 250-500g copper sheet with lemon and salt until gleaming clean. Suspend it into the buttermilk using a clean string.',
        descHi: 'तांबे की प्लेट या तार को नींबू-नमक से चमका लें। फिर इसे एक सूत की डोरी से बांधकर छाछ के अंदर पूरी तरह डुबो दें।'
      },
      {
        stepNumber: 3,
        titleEn: 'Adding Asafoetida (Hing)',
        titleHi: 'हींग का मिश्रण',
        descEn: 'Dissolve 25-50g of natural hing in a cup of warm water and stir into the buttermilk pot.',
        descHi: '25-50 ग्राम हींग को हल्के गुनगुने पानी में घोलकर मटके में डाल दें।'
      },
      {
        stepNumber: 4,
        titleEn: 'Fermentation Period',
        titleHi: 'किण्वन एवं नीला रंग आना',
        descEn: 'Cover with a cotton cloth and keep in a cool shaded area for 10-15 days. A distinct greenish-blue patina will appear on the liquid surface.',
        descHi: 'मटके का मुंह सूती कपड़े से बांधकर 10-15 दिन छाया में रखें। छाछ का रंग हरा-नीला हो जाएगा जो कॉपर लैक्टेट बनने की पहचान है।'
      },
      {
        stepNumber: 5,
        titleEn: 'Removal of Copper and Straining',
        titleHi: 'तांबा निकालना व छानना',
        descEn: 'Remove the copper plate (it can be cleaned and reused for future batches). Strain the solution through double-layered cotton cloth.',
        descHi: 'तांबे की प्लेट बाहर निकाल लें (इसे अगली बार फिर इस्तेमाल किया जा सकता है)। घोल को महीन कपड़े से छानकर रख लें।'
      }
    ],
    applications: [
      {
        stageEn: 'Preventive Spray in High Humidity / Cloud Cover',
        stageHi: 'बादल छाने व नमी के समय सुरक्षात्मक स्प्रे',
        methodEn: 'Foliar spray covering upper and lower leaf surfaces',
        methodHi: 'पत्तियों के दोनों तरफ बारीक फुहार से छिड़काव',
        dosageEn: '500 ml of fermented extract in 15 Litres of water',
        dosageHi: '500 मिली अर्क प्रति 15 लीटर पानी की टंकी',
        frequencyEn: 'Every 10-12 days during winter/monsoon disease pressure',
        frequencyHi: 'सर्दियों या वर्षा ऋतु में 10-12 दिन के अंतराल पर'
      },
      {
        stageEn: 'Curative Spray on Active Blight or Mildew',
        stageHi: 'झुलसा या फफूंद दिखने पर उपचारात्मक स्प्रे',
        methodEn: 'Foliar spray with thorough drenching of affected canopy',
        methodHi: 'रोगग्रस्त पत्तों और तनों को अच्छी तरह तर-बतर करते हुए',
        dosageEn: '750-1000 ml per 15 Litre tank',
        dosageHi: '750-1000 मिली प्रति 15 लीटर टंकी',
        frequencyEn: '2 consecutive sprays spaced 5 days apart',
        frequencyHi: '5 दिन के अंतर पर लगातार 2 छिड़काव'
      }
    ],
    benefits: [
      {
        titleEn: 'Destruction of Fungal Hyphae & Spores',
        titleHi: 'फफूंद के बीजाणुओं का तुरंत नाश',
        detailEn: 'Low pH and ionic copper denature fungal cell walls and rupture hyphae within hours of contact.',
        detailHi: 'कम पीएच और जैविक कॉपर फफूंद की कोशिका भित्ति को गला देते हैं, जिससे कवक आगे नहीं फैल पाता।'
      },
      {
        titleEn: 'Systemic Acquired Resistance (SAR)',
        titleHi: 'पौधों में प्राकृतिक रोग प्रतिरोधक क्षमता',
        detailEn: 'Triggers phytoalexin production in plant tissues, creating an internal defense mechanism against reinfection.',
        detailHi: 'पौधे की कोशिकाओं में फाइटोएलेक्सिन का निर्माण उत्तेजित करता है जिससे पौधे स्वयं बीमारियों से लड़ने लगते हैं।'
      },
      {
        titleEn: 'Bioavailable Copper Micronutrient Supply',
        titleHi: 'कॉपर सूक्ष्म पोषक तत्व की पूर्ति',
        detailEn: 'Provides plant-accessible organic chelated copper without the soil toxicity caused by copper sulfate fungicides.',
        detailHi: 'रासायनिक कॉपर सल्फेट की तरह मिट्टी को जहरीला किए बिना पौधे को आवश्यक कॉपर पोषक तत्व प्रदान करता है।'
      }
    ],
    science: {
      microbialEn: 'Lactobacillus spp. dominate the solution, producing bacteriocins, lactic acid, and hydrogen peroxide that outcompete and antagonize phytopathogenic fungi like Alternaria and Phytophthora.',
      microbialHi: 'लैक्टोबैसिलस बैक्टीरिया बैक्टीरियोसिन और हाइड्रोजन पेरोक्साइड बनाते हैं जो अल्टरनेरिया और फाइटोफ्थोरा जैसे रोगजनक कवकों को मार गिराते हैं।',
      biochemicalEn: 'Lactic acid acts as a natural chelator with Cu2+ ions forming copper lactate [Cu(C3H5O3)2], an organic fungicide with superior leaf penetration and negligible phytotoxicity.',
      biochemicalHi: 'लैक्टिक एसिड तांबे के साथ मिलकर कॉपर लैक्टेट बनाता है, जो पत्तियों में शीघ्र समा जाता है और रसायनों की तरह पत्तों को नहीं जलाता।',
      soilImpactEn: 'Safe for earthworms and soil biodiversity when dripped onto ground, avoiding the heavy metal soil accumulation caused by chemical copper sprays.',
      soilImpactHi: 'जमीन पर गिरने पर यह मिट्टी के केंचुओं और सूक्ष्मजीवों को सुरक्षित रखता है और भारी धातुओं का विषैलापन नहीं बनने देता।'
    },
    precautionsEn: [
      'Do not exceed 1 Litre per 15-litre tank on sensitive crops like cucurbits.',
      'Always clean and remove the copper metal after 15 days; do not leave copper indefinitely.',
      'Test spray on a single branch before treating an entire crop during full flowering.'
    ],
    precautionsHi: [
      'बेल वाली सब्जियों (घीया, तोरई) पर 15 लीटर टंकी में 500 मिली से अधिक न डालें।',
      '15 दिन बाद तांबे की धातु को अवश्य निकाल लें, उसे हमेशा के लिए छाछ में न छोड़ें।',
      'फूल खिलने के चरम समय पर पहले एक शाखा पर試छिड़काव करके 24 घंटे देख लें।'
    ],
    isVerified: true,
    colorTheme: 'cyan'
  },
  {
    id: 'anu-jal',
    number: 5,
    slug: 'anu-jal',
    nameEn: 'Anu Jal',
    nameHi: 'अणु जल',
    devanagariScript: 'अणु जल',
    taglineEn: 'Micro-Structured & Mineralized Bio-Water',
    taglineHi: 'सूक्ष्म-संरचित एवं खनिजीकृत सजीव जल',
    categoryEn: 'Energetic & Mineral Enhancer',
    categoryHi: 'ऊर्जावान खनिज जल',
    targetElement: 'Jal',
    primaryActionEn: 'Reduces water surface tension and enhances cellular permeability and nutrient uptake',
    primaryActionHi: 'जल के सतही तनाव (सरफेस टेंशन) को कम कर पौधों में पोषक तत्वों के अवशोषण को कई गुना तेज करता है',
    introEn: 'Anu Jal is a traditional natural farming water-treatment formulation created through energetic vortex agitation and mineral infusion with local river stones, quartz crystal pebbles, cow dung ash, and medicinal leaves. It restructures regular irrigation water into bioavailable micro-clusters.',
    introHi: 'अणु जल एक विशिष्ट जल संस्कारण विधि है, जिसमें सिंचाई जल को भंवर गति (वोर्टेक्स), नदी के प्राकृतिक पत्थरों, स्फटिक, कंडे की राख और औषधीय अर्क से समृद्ध कर सूक्ष्म-संरचित (माइक्रो-क्लस्टर्ड) किया जाता है।',
    purposeEn: 'To hydrate plant cellular tissue deeply, overcome saline irrigation stress, dissolve stubborn minerals in the root zone, and amplify the efficacy of every foliar spray.',
    purposeHi: 'पौधों की कोशिकाओं को गहराई से जल प्रदान करना, खारे पानी के तनाव को कम करना, और किसी भी स्प्रे की प्रभावशीलता को 2 से 3 गुना बढ़ा देना।',
    idealForCropsEn: ['All Field Crops', 'Vegetables', 'Greenhouse Crops', 'Medicinal Plants'],
    idealForCropsHi: ['समस्त खाद्यान्न फसलें', 'सब्जियां', 'संरक्षित पॉलीहाउस', 'औषधीय पौधे'],
    ingredients: [
      {
        nameEn: 'Clean Well / Borewell Water',
        nameHi: 'स्वच्छ कुएं या नलकूप का जल',
        quantityEn: '200 Litres',
        quantityHi: '200 लीटर',
        purposeEn: 'Base water volume to be restructured',
        purposeHi: 'पुनर्संरचना हेतु प्राथमिक जल आधार'
      },
      {
        nameEn: 'Desi Cow Dung Cake Ash (Vibhuti)',
        nameHi: 'देशी गाय के कंडे (उपले) की भस्म/राख',
        quantityEn: '100-250g',
        quantityHi: '100-250 ग्राम',
        purposeEn: 'Supplies bio-silica, calcium, potassium carbonate, and alkaline buffering ions',
        purposeHi: 'प्राकृतिक सिलिका, पोटाश, कैल्शियम और क्षारीय संतुलन प्रदान करने हेतु'
      },
      {
        nameEn: 'River Bed Quartz / Rounded Pebbles',
        nameHi: 'नदी की तलहटी के गोल पत्थर/स्फटिक कंकड़',
        quantityEn: '5-7 pieces',
        quantityHi: '5-7 नग',
        purposeEn: 'Generates energetic vortex turbulence and imparts piezoelectric vibration',
        purposeHi: 'भंवर बनाते समय पानी में ऊर्जा व प्राकृतिक घर्षण उत्पन्न करने हेतु'
      },
      {
        nameEn: 'Moringa (Sahjan) Leaf Paste / Powder',
        nameHi: 'सहजन (मोरिंगा) की पत्तियों का पेस्ट',
        quantityEn: '250g',
        quantityHi: '250 ग्राम',
        purposeEn: 'Natural water clarifier with zeatin, a powerful plant growth cytokinin',
        purposeHi: 'जल शोधक और जिआटिन (प्राकृतिक साइटोकाइनिन) का समृद्ध स्रोत'
      },
      {
        nameEn: 'Raw Rock Salt (Sendha Namak)',
        nameHi: 'सेंधा नमक (लाहौरी नमक)',
        quantityEn: '50g',
        quantityHi: '50 ग्राम',
        purposeEn: 'Provides 84 ionic trace minerals that optimize electrical conductivity',
        purposeHi: '84 दुर्लभ ट्रेस खनिजों की पूर्ति और पानी की विद्युत चालकता संतुलित करना'
      }
    ],
    preparationTimeEn: '24 Hours (with vigorous clockwise-counterclockwise vortex stirring)',
    preparationTimeHi: '24 घंटे (घड़ी की दिशा व विपरीत दिशा में भंवर मंथन के साथ)',
    shelfLifeEn: 'Best used within 48 to 72 hours of dynamic activation',
    shelfLifeHi: 'सक्रियण के 48 से 72 घंटे के भीतर उपयोग सर्वोत्तम',
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Placement of Mineral Stones',
        titleHi: 'कंकड़ व पत्थरों की स्थापना',
        descEn: 'Place smooth river bed quartz stones at the bottom of a 200-litre non-metallic drum.',
        descHi: '200 लीटर के ड्रम की तलहटी में साफ नदी के गोल पत्थर रखें।'
      },
      {
        stepNumber: 2,
        titleEn: 'Filling and Infusing Mineral Ash & Salt',
        titleHi: 'भस्म व सेंधा नमक मिलाना',
        descEn: 'Fill with 200 litres of clean water. Add 100g of sifted cow dung ash and 50g crushed rock salt.',
        descHi: 'ड्रम में पानी भरें। छनी हुई कंडे की भस्म और सेंधा नमक डालकर अच्छी तरह मिलाएं।'
      },
      {
        stepNumber: 3,
        titleEn: 'Adding Moringa Leaf Paste',
        titleHi: 'सहजन का अर्क डालना',
        descEn: 'Stir in 250g of freshly ground moringa leaf paste. Moringa coagulates impurities while donating plant growth hormones.',
        descHi: 'ताजा पिसी सहजन की पत्तियों का लेप मिलाएं। सहजन पानी को निर्मल करता है और पोषक तत्व देता है।'
      },
      {
        stepNumber: 4,
        titleEn: 'Creating the Dynamic Water Vortex',
        titleHi: 'जल भंवर (वोर्टेक्स) निर्माण',
        descEn: 'Using a wide wooden paddle, stir vigorously in a clockwise direction until a deep funnel vortex forms to the bottom, then reverse abruptly to counterclockwise. Repeat for 15 minutes twice.',
        descHi: 'लकड़ी के चप्पू से तेजी से एक दिशा में घुमाएं जब तक पेंदे तक गहरा भंवर न बन जाए, फिर झटके से उल्टी दिशा में घुमाएं। यह क्रिया 15 मिनट करें।'
      },
      {
        stepNumber: 5,
        titleEn: 'Settling and Straining',
        titleHi: 'स्थिरीकरण व छानना',
        descEn: 'Allow suspended mineral particles to settle for 6 hours. Decant the crystal-clear energized water from the top.',
        descHi: '6 घंटे स्थिर रहने दें ताकि भारी कण नीचे बैठ जाएं। ऊपर से कांच जैसा पारदर्शी सक्रिय अणु जल छानकर निकालें।'
      }
    ],
    applications: [
      {
        stageEn: 'Carrier Water for All Foliar Sprays',
        stageHi: 'सभी पर्णीय छिड़काव के लिए घोलक जल',
        methodEn: 'Use Anu Jal as 100% of the water base for diluting Jeevanu Jal or Kadva Rasayan',
        methodHi: 'जीवाणु जल या कड़वा रसायन को घोलने के लिए सामान्य पानी के स्थान पर अणु जल का प्रयोग',
        dosageEn: '100% of spray water volume',
        dosageHi: 'स्प्रे टंकी का पूरा पानी',
        frequencyEn: 'With every spray application',
        frequencyHi: 'प्रत्येक छिड़काव के साथ'
      },
      {
        stageEn: 'Seed Soaking (Beejamrit Treatment)',
        stageHi: 'बीज संस्कार एवं बीजोपचार',
        methodEn: 'Soak seeds in Anu Jal solution before planting',
        methodHi: 'बुवाई से पहले बीजों को इस जल में डुबोना',
        dosageEn: 'Sufficient to immerse seed quantity for 30-60 mins',
        dosageHi: 'बीज डूबने जितना (30-60 मिनट)',
        frequencyEn: 'Once before sowing',
        frequencyHi: 'बुवाई से ठीक पूर्व'
      }
    ],
    benefits: [
      {
        titleEn: 'Drastically Lower Surface Tension',
        titleHi: 'जल का सतही तनाव कम होना',
        detailEn: 'Water droplets spread flat across waxy leaf surfaces without needing synthetic chemical wetting agents or stickers.',
        detailHi: 'पानी की बूंदें पत्तियों के मोमी छिलके पर चिपक कर फैल जाती हैं, किसी रासायनिक स्टीकर की जरूरत नहीं पड़ती।'
      },
      {
        titleEn: 'Enhanced Stomatal Absorption',
        titleHi: 'पत्तियों के रंध्रों द्वारा तीव्र अवशोषण',
        detailEn: 'Smaller water cluster size matches stomatal pore dimensions, enabling rapid entry into vascular xylem stream within 20 minutes.',
        detailHi: 'जल के सूक्ष्म अणु पत्तियों के रंध्रों में तुरंत प्रवेश कर जाते हैं जिससे छिड़काव का प्रभाव 20 मिनट में शुरू हो जाता है।'
      },
      {
        titleEn: 'Mitigation of Water Salinity Stress',
        titleHi: 'खारे पानी के दुष्प्रभाव से सुरक्षा',
        detailEn: 'Chelates sodium and chloride ions, preventing osmotic root burn in brackish water farm belts.',
        detailHi: 'खारे पानी के सोडियम और क्लोराइड के हानिकारक प्रभाव को निष्प्रभावी कर जड़ों को जलने से बचाता है।'
      }
    ],
    science: {
      microbialEn: 'The bio-ash and sendha namak provide critical trace ionic electrolytes (Mg, Si, Ca, Zn) that activate enzymatic ATP synthases in phyllosphere microflora.',
      microbialHi: 'कंडे की भस्म और सेंधा नमक पत्तियों पर रहने वाले मित्र सूक्ष्मजीवों के एंजाइम को सक्रिय करने वाले ट्रेस खनिज देते हैं।',
      biochemicalEn: 'Vortex agitation creates hexagonal water clathrates with enhanced dissolved oxygen content (DO increases from ~6 mg/L to >11 mg/L), revitalizing root cellular respiration.',
      biochemicalHi: 'भंवर मंथन से पानी में घुलनशील ऑक्सीजन की मात्रा दोगुनी (6 से 11 मिलीग्राम/लीटर) हो जाती है, जिससे जड़ों को अधिक प्राणवायु मिलती है।',
      soilImpactEn: 'Bio-silica from cow dung ash reinforces plant epidermal cell walls, acting as a physical armor against fungal penetration.',
      soilImpactHi: 'भस्म की सिलिका पौधे की बाहरी त्वचा को मजबूत करती है जिससे कवक और कीड़े पत्ती को आसानी से काट नहीं पाते।'
    },
    precautionsEn: [
      'Do not boil or heat Anu Jal after vortex agitation, as thermal energy disrupts micro-clustering.',
      'Information on exact vortex frequency awaiting ongoing university trial verification.',
      'Always store in non-metallic, earthenware, or food-grade HDPE containers.'
    ],
    precautionsHi: [
      'मंथन के बाद अणु जल को कभी गर्म न करें, तापमान बढ़ने से जल की विशेष आणविक संरचना टूट जाती है।',
      'विशिष्ट भंवर आवृत्ति पर कृषि विश्वविद्यालयों में वैज्ञानिक सत्यापन कार्य प्रगति पर है।',
      'हमेशा मिट्टी के मटके या फूड-ग्रेड प्लास्टिक पात्र में ही रखें।'
    ],
    isVerified: true,
    expertVerificationNoteEn: 'Energetic vortex properties are documented in indigenous literature; empirical crop yield trials are undergoing peer review at state agricultural universities.',
    expertVerificationNoteHi: 'पारंपरिक साहित्यों में वर्णित; राज्य कृषि विश्वविद्यालयों में विस्तृत वैज्ञानिक परीक्षण प्रगति पर हैं।',
    colorTheme: 'sky'
  },
  {
    id: 'urja-jal',
    number: 6,
    slug: 'urja-jal',
    nameEn: 'Urja Jal',
    nameHi: 'ऊर्जा जल',
    devanagariScript: 'ऊर्जा जल',
    taglineEn: 'Vitality & Photosynthetic Biostimulant',
    taglineHi: 'प्राण ऊर्जा एवं प्रकाश-संश्लेषण वर्धक',
    categoryEn: 'Bio-Energetic Stimulant',
    categoryHi: 'जैव-ऊर्जा वर्धक',
    targetElement: 'Agni',
    primaryActionEn: 'Awakens dormant photosynthetic pathways and stimulates vigorous vegetative growth',
    primaryActionHi: 'प्रकाश संश्लेषण की सुप्त क्षमता को जागृत कर पौधों में तीव्र वानस्पतिक विकास करता है',
    introEn: 'Urja Jal is an herbal-infused vitality water enriched with sun-dried indigenous cow dung cakes, green grass shoots (Durva), banyan aerial root tips, and unrefined honey or sugarcane molasses. It acts as a photosynthetic catalyst and growth stimulant.',
    introHi: 'ऊर्जा जल धूप में तपे कंडे, दूर्वा (दूब घास), बरगद की जटाओं के अग्रभाग और प्राकृतिक शहद या गुड़ के मिश्रण से तैयार ऊर्जादायक घोल है, जो सूर्य के प्रकाश को रासायनिक ऊर्जा में बदलने की क्षमता बढ़ाता है।',
    purposeEn: 'To accelerate canopy development, stimulate fresh vegetative tillers, prevent winter dormancy, and revive crops suffering from heat stress or post-transplanting shock.',
    purposeHi: 'पौधों में कल्ले (टिल्लर्स) की संख्या बढ़ाना, पाले व गर्मी के असर से बचाना, और रोपाई के बाद मुरझाए पौधों को पुनः हरा-भरा और सशक्त बनाना।',
    idealForCropsEn: ['Paddy', 'Wheat', 'Sugarcane', 'Tea', 'Spices', 'Nursery Seedlings'],
    idealForCropsHi: ['धान', 'गेहूं', 'गन्ना', 'चाय', 'मसालेदार फसलें', 'नर्सरी के पौधे'],
    ingredients: [
      {
        nameEn: 'Sun-Cured Desi Cow Dung Cakes (Upale)',
        nameHi: 'धूप में सूखे देशी गाय के कंडे (गोहरी)',
        quantityEn: '4-5 pieces',
        quantityHi: '4-5 नग',
        purposeEn: 'Infuses lignocellulosic humic precursors and solar energy into water',
        purposeHi: 'सौर ऊर्जा से तपे कंडों से ह्यूमिक तत्व व प्राकृतिक खनिज जल में उतरते हैं'
      },
      {
        nameEn: 'Banyan Tree Aerial Root Tips (Vat Vriksha Jata)',
        nameHi: 'बरगद के पेड़ की नई लटकती जटाओं की कोमल नोक',
        quantityEn: '250g',
        quantityHi: '250 ग्राम',
        purposeEn: 'Rich in active meristematic growth cells and natural root-promoting auxins',
        purposeHi: 'सक्रिय वृद्धि कोशिकाओं व प्राकृतिक ऑक्सिन हार्मोन का अद्वितीय स्रोत'
      },
      {
        nameEn: 'Durva Grass Shoots (Cynodon dactylon)',
        nameHi: 'हरी दूब घास के ताजे कल्ले',
        quantityEn: '500g',
        quantityHi: '500 ग्राम',
        purposeEn: 'Highest concentration of plant chlorophyll, enzymes, and stress proteins',
        purposeHi: 'सघन पर्णहरिम और पौधों को विपरीत परिस्थितियों में जीवित रखने वाले प्रोटीन्स'
      },
      {
        nameEn: 'Pure Raw Forest Honey or Jaggery',
        nameHi: 'शुद्ध शहद या पुराना गुड़',
        quantityEn: '250g',
        quantityHi: '250 ग्राम',
        purposeEn: 'Provides diverse mono- and disaccharides and trace royal jelly peptides',
        purposeHi: 'पौधे की कोशिकाओं को तत्काल पोषण एवं एंजाइम ऊर्जा प्रदान करने हेतु'
      },
      {
        nameEn: 'Clean Water',
        nameHi: 'स्वच्छ जल',
        quantityEn: '200 Litres',
        quantityHi: '200 लीटर',
        purposeEn: 'Extraction and delivery medium',
        purposeHi: 'अर्क निष्कर्षण एवं वितरण हेतु'
      }
    ],
    preparationTimeEn: '48 to 72 Hours under open morning sun with cotton lid',
    preparationTimeHi: '48 से 72 घंटे (सुबह की गुनगुनी धूप में सूती कपड़े से ढंककर)',
    shelfLifeEn: 'Use within 5 to 7 days',
    shelfLifeHi: '5 से 7 दिनों के अंदर उपयोग करें',
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Soaking Cow Dung Cakes',
        titleHi: 'कंडों को जलमग्न करना',
        descEn: 'Take a clean 200L barrel filled with water. Tie 4-5 desi cow dung cakes in a coarse jute bag and submerge it like a giant tea bag.',
        descHi: '200 लीटर पानी के ड्रम में 4-5 सूखे कंडे जूट के थैले में बांधकर डुबो दें।'
      },
      {
        stepNumber: 2,
        titleEn: 'Crushing Banyan Root Tips and Durva',
        titleHi: 'बरगद की जटा व दूब घास की कुटाई',
        descEn: 'Pound fresh tender banyan aerial root tips and green durva grass in a stone mortar. Add the green pulp into the water.',
        descHi: 'बरगद की नई जटाओं की नोक और दूब घास को पत्थर के सिलबट्टे पर कूटकर लुगदी बना लें और ड्रम में डाल दें।'
      },
      {
        stepNumber: 3,
        titleEn: 'Incorporating Forest Honey or Jaggery',
        titleHi: 'शहद या गुड़ घोलना',
        descEn: 'Dissolve 250g raw honey or jaggery in 2 litres of lukewarm water and mix thoroughly into the tank.',
        descHi: 'शहद या गुड़ को थोड़े पानी में घोलकर ड्रम में मिलाएं।'
      },
      {
        stepNumber: 4,
        titleEn: 'Solar Exposure Routine',
        titleHi: 'प्रातःकालीन सूर्य प्रकाश संस्कार',
        descEn: 'Keep the vessel where it catches the gentle morning sunlight (6 AM to 10 AM). Stir clockwise for 5 minutes each morning.',
        descHi: 'ड्रम को सुबह की सुनहरी धूप (6 से 10 बजे) में रखें और लकड़ी से 5 मिनट दक्षिणावर्त घुमाएं।'
      },
      {
        stepNumber: 5,
        titleEn: 'Straining for Field Application',
        titleHi: 'छानना एवं प्रयोग',
        descEn: 'Remove the dung bag and squeeze. Filter the fragrant amber-green liquid through a double muslin cloth.',
        descHi: 'कंडों की पोटली निकाल लें और पूरे घोल को दोहरे सूती कपड़े से छान लें।'
      }
    ],
    applications: [
      {
        stageEn: 'Seedling Nursery / Transplantation',
        stageHi: 'नर्सरी एवं पौध रोपाई के समय',
        methodEn: 'Root dipping and nursery bed drenching',
        methodHi: 'पौधों की जड़ों को डुबोना और क्यारियों में सींचना',
        dosageEn: '20% solution (2L in 10L water) for root bath',
        dosageHi: '20% घोल (10L पानी में 2L ऊर्जा जल) में जड़ डुबोएं',
        frequencyEn: 'Once at transplanting',
        frequencyHi: 'रोपाई करते समय एक बार'
      },
      {
        stageEn: 'Active Tillering & Branching Stage',
        stageHi: 'कल्ले फूटने एवं शाखाएं बनने के समय',
        methodEn: 'Foliar spray during early morning hours',
        methodHi: 'सुबह 8 से 10 बजे के बीच पत्तियों पर फुहार',
        dosageEn: '1000 ml per 15L spray tank',
        dosageHi: '1 लीटर प्रति 15 लीटर स्प्रे पंप',
        frequencyEn: 'Twice at 12-day intervals',
        frequencyHi: '12 दिन के अंतर पर 2 बार'
      }
    ],
    benefits: [
      {
        titleEn: 'Vigorous Root Proliferation',
        titleHi: 'जड़ों का अत्यंत तीव्र फैलाव',
        detailEn: 'Meristematic auxins from banyan root tips trigger rapid taproot and secondary feeder root development.',
        detailHi: 'बरगद की जटाओं के प्राकृतिक ऑक्सिन से पौधों में द्वितीयक पोषक जड़ों का जाल बिछ जाता है।'
      },
      {
        titleEn: 'Intense Green Chlorophyll Surge',
        titleHi: 'पत्तियों का गहरा हरापन व चमक',
        detailEn: 'Supplies precursors for chlorophyll-a and b synthesis, enabling plants to capture low-light morning photon flux.',
        detailHi: 'क्लोरोफिल निर्माण को गति देता है, जिससे पौधे कम धूप में भी अधिक भोजन बना पाते हैं।'
      },
      {
        titleEn: 'Transplant Shock Reduction to Zero',
        titleHi: 'रोपाई का झटका (ट्रांसप्लांट शॉक) खत्म',
        detailEn: 'Nursery seedlings establish immediately within 24 hours without wilting or leaf yellowing.',
        detailHi: 'रोपाई के बाद पौधे मुरझाते नहीं और 24 घंटे में खेत की मिट्टी को पकड़ लेते हैं।'
      }
    ],
    science: {
      microbialEn: 'Encourages the proliferation of beneficial epiphytic yeasts and pink-pigmented facultative methylotrophs (PPFMs) on leaf surfaces that release cytokinins.',
      microbialHi: 'पत्तियों की सतह पर मिथाइलोट्रोफ्स मित्र जीवाणुओं को बढ़ाता है जो प्राकृतिक साइटोकाइनिन का स्राव करते हैं।',
      biochemicalEn: 'Rich in polyphenolic humic-like acids extracted from dung cakes, which act as signaling molecules to upregulate nitrate reductase enzymes.',
      biochemicalHi: 'कंडों से निकले ह्यूमिक तत्व पौधे में नाइट्रेट रिडक्टेस एंजाइम को सक्रिय कर नाइट्रोजन के उपयोग को बढ़ाते हैं।',
      soilImpactEn: 'Stimulates root exudate output, releasing malic and citric acids that awaken dormant soil microbes.',
      soilImpactHi: 'जड़ों से निकलने वाले स्राव को तेज करता है जिससे मिट्टी के निष्क्रिय जीवाणु तुरंत सक्रिय हो जाते हैं।'
    },
    precautionsEn: [
      'Use only cow dung cakes from indigenous grazing cows; avoided stalled feedlot animals.',
      'Information awaiting expert verification regarding exact hormonal assay standardizations.',
      'Do not keep in harsh midday summer sun (>38°C) without shade cloth.'
    ],
    precautionsHi: [
      'केवल खुले में चरने वाली देशी गाय के कंडों का प्रयोग करें, कृत्रिम आहार खाने वाले पशुओं का नहीं।',
      'हार्मोनल मानकीकरण के संदर्भ में कृषि संस्थानों का शोध सत्यापन जारी है।',
      'मई-जून की तेज दोपहरी (38°C से अधिक) में सीधी धूप में न रखें।'
    ],
    isVerified: true,
    expertVerificationNoteEn: 'Hormonal profiling of aerial banyan root tips is well established in plant physiology; standardized formulation protocols are undergoing verification.',
    expertVerificationNoteHi: 'बरगद की जटाओं में ऑक्सिन की उपस्थिति वैज्ञानिक रूप से सिद्ध है; इसके कृषि मानकीकरण पर अध्ययन जारी है।',
    colorTheme: 'orange'
  },
  {
    id: 'sadras',
    number: 7,
    slug: 'sadras',
    nameEn: 'Sadras',
    nameHi: 'षड्रस (सद्रस)',
    devanagariScript: 'षड्रस',
    taglineEn: 'Six-Taste Complete Nutritional Balance Tonic',
    taglineHi: 'षड्रस (छह स्वाद) युक्त संपूर्ण पादप पोषण टॉनिक',
    categoryEn: 'Holistic Nutrient Tonic',
    categoryHi: 'सर्वांगीण पोषक रसायन',
    targetElement: 'Akash',
    primaryActionEn: 'Harmonizes all plant nutritional metabolic axes through the six Ayurvedic taste profiles',
    primaryActionHi: 'आयुर्वेदिक छह रसों (मधुर, अम्ल, लवण, कटु, तिक्त, कषाय) से पौधों के सर्वांगीण स्वास्थ्य का संतुलन',
    introEn: 'Sadras (literally "Six Tastes") is a master formulation combining ingredients representing the six fundamental tastes of traditional Indian wisdom: Sweet (Madhura), Sour (Amla), Salty (Lavana), Pungent (Katu), Bitter (Tikta), and Astringent (Kashaya). It provides comprehensive macro- and micro-nutrients.',
    introHi: 'षड्रस प्राकृतिक खेती का एक अनूठा मास्टर टॉनिक है जिसमें छह प्राकृतिक स्वादों—मीठा (गुड़), खट्टा (छाछ), नमकीन (सेंधा नमक), तीखा (मिर्च/अदरक), कड़वा (नीम) और कसैला (आंवला/फिटकरी)—का संतुलित किण्वित अर्क तैयार किया जाता है।',
    purposeEn: 'To address obscure multi-nutrient deficiencies, build immunity against viral pathogens, optimize cellular pH, and yield nutrient-dense, flavorful agricultural produce.',
    purposeHi: 'पौधों में अज्ञात सूक्ष्म पोषक तत्वों की कमी दूर करना, वायरल (विषाणु) रोगों के प्रति आंतरिक प्रतिरोधक क्षमता बनाना, और फसलों के स्वाद व गुणवत्ता को बढ़ाना।',
    idealForCropsEn: ['Exotic Vegetables', 'Pomegranate', 'Spices', 'Betel Vine', 'Cardamom', 'Apple'],
    idealForCropsHi: ['विदेशी व देसी सब्जियां', 'अनार', 'मसाले', 'पान की बेल', 'इलायची', 'सेब'],
    ingredients: [
      {
        nameEn: 'Madhura (Sweet): Jaggery or Cane Juice',
        nameHi: 'मधुर (मीठा): पुराना गुड़ या गन्ने का रस',
        quantityEn: '1 kg',
        quantityHi: '1 किग्रा',
        purposeEn: 'Carbohydrates and microbial energy',
        purposeHi: 'कार्बोहाइड्रेट और सूक्ष्मजीव ऊर्जा'
      },
      {
        nameEn: 'Amla (Sour): Fermented Buttermilk or Lemon Juice',
        nameHi: 'अम्ल (खट्टा): खट्टी छाछ या नींबू का रस',
        quantityEn: '2 Litres',
        quantityHi: '2 लीटर',
        purposeEn: 'Organic acids, lactic enzymes, and low pH buffer',
        purposeHi: 'कार्बनिक अम्ल, पाचक एंजाइम और पीएच संतुलन'
      },
      {
        nameEn: 'Lavana (Salty): Unrefined Rock Salt (Sendha Namak)',
        nameHi: 'लवण (नमकीन): प्राकृतिक सेंधा नमक',
        quantityEn: '100g',
        quantityHi: '100 ग्राम',
        purposeEn: 'Full spectrum trace ionic minerals',
        purposeHi: 'दुर्लभ सूक्ष्म खनिजों की पूर्ति'
      },
      {
        nameEn: 'Katu (Pungent): Crushed Ginger & Green Chillies',
        nameHi: 'कटु (तीखा): अदरक व तीखी हरी मिर्च',
        quantityEn: '250g each',
        quantityHi: '250-250 ग्राम',
        purposeEn: 'Gingerols, capsaicin, and circulation stimulants',
        purposeHi: 'पौधों के रस संवहन को गति देने वाले उत्तेजक'
      },
      {
        nameEn: 'Tikta (Bitter): Neem & Chirayata Leaves',
        nameHi: 'तिक्त (कड़वा): नीम व चिरायता की पत्तियां',
        quantityEn: '500g',
        quantityHi: '500 ग्राम',
        purposeEn: 'Alkaloids for immunity and pest resistance',
        purposeHi: 'रोग प्रतिरोधक क्षमता और कीट निरोध'
      },
      {
        nameEn: 'Kashaya (Astringent): Amla (Indian Gooseberry) or Babul Bark',
        nameHi: 'कषाय (कसैला): आंवला चूर्ण या बबूल की छाल',
        quantityEn: '250g',
        quantityHi: '250 ग्राम',
        purposeEn: 'Tannins and bioflavonoids for cell wall lignification',
        purposeHi: 'टैनिन व फ्लेवोनोइड्स जो कोशिका दीवारों को सुदृढ़ करते हैं'
      },
      {
        nameEn: 'Indigenous Cow Urine & Water',
        nameHi: 'देशी गोमूत्र व स्वच्छ जल',
        quantityEn: '5L Gomutra + 50L Water',
        quantityHi: '5L गोमूत्र + 50L स्वच्छ जल',
        purposeEn: 'Fermentation carrier',
        purposeHi: 'किण्वन का माध्यम'
      }
    ],
    preparationTimeEn: '7 to 10 Days in earthen pot under shade',
    preparationTimeHi: '7 से 10 दिन मिट्टी के मटके में छायादार स्थान पर',
    shelfLifeEn: '45 Days after straining',
    shelfLifeHi: 'छानने के बाद 45 दिन तक प्रभावी',
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Preparation of Six-Taste Constituents',
        titleHi: 'छह स्वादों की सामग्री तैयार करना',
        descEn: 'Gather fresh ingredients corresponding to each of the six tastes. Crush ginger, chillies, bitter leaves, and amla fruit separately.',
        descHi: 'छहों रसों की सामग्री एकत्र करें। अदरक, मिर्च, नीम पत्ती और आंवला को सिलबट्टे पर दरदरा कूट लें।'
      },
      {
        stepNumber: 2,
        titleEn: 'Dissolving in Earthen Matka',
        titleHi: 'मिट्टी के मटके में सम्मिश्रण',
        descEn: 'In a large 60-100L earthen vessel, dissolve jaggery and rock salt in 5 litres of cow urine and 2 litres of sour buttermilk.',
        descHi: 'मिट्टी के बड़े मटके में गोमूत्र और खट्टी छाछ डालें। इसमें गुड़ और सेंधा नमक अच्छी तरह घोलें।'
      },
      {
        stepNumber: 3,
        titleEn: 'Adding Crushed Botanical Mass',
        titleHi: 'कुटी हुई जड़ी-बूटियां मिलाना',
        descEn: 'Incorporate the pungent, bitter, and astringent botanical pastes. Top up with 50 litres of clean water.',
        descHi: 'तीखी, कड़वी और कसैली सामग्री की लुगदी मटके में डाल दें और 50 लीटर स्वच्छ पानी मिला दें।'
      },
      {
        stepNumber: 4,
        titleEn: 'Daily Rhythmic Agitation',
        titleHi: 'प्रतिदिन सुबह-शाम चलाना',
        descEn: 'Tie mouth with cotton cloth. Stir with a neem stick for 3 minutes every morning and evening for 7 days.',
        descHi: 'मटके का मुंह सूती कपड़े से बांधें। नीम के डंडे से प्रतिदिन सुबह-शाम 3-3 मिनट दक्षिणावर्त हिलाएं।'
      },
      {
        stepNumber: 5,
        titleEn: 'Filtration and Packing',
        titleHi: 'छानना व पैकिंग',
        descEn: 'Filter thoroughly through fine double muslin cloth to remove all particulate matter.',
        descHi: '7 दिन बाद संपूर्ण रस को दोहरे सूती कपड़े से छानकर सुरक्षित बोतलों में भर लें।'
      }
    ],
    applications: [
      {
        stageEn: 'Mid-Season Balanced Health Spray',
        stageHi: 'फसल के मध्यकाल में सर्वांगीण स्वास्थ्य स्प्रे',
        methodEn: 'Foliar spray across entire canopy',
        methodHi: 'संपूर्ण फसल पर बारीक फुहार से छिड़काव',
        dosageEn: '500 ml per 15L tank (3% solution)',
        dosageHi: '500 मिली प्रति 15 लीटर पंप (3% घोल)',
        frequencyEn: 'Every 20 days throughout growing season',
        frequencyHi: 'फसल वृद्धि के दौरान 20 दिन के अंतराल पर'
      },
      {
        stageEn: 'Recovery from Pest Attacks & Viral Stunting',
        stageHi: 'कीट प्रकोप व मोजेक/वायरस से उबरने हेतु',
        methodEn: 'Combined foliar spray and root drenching',
        methodHi: 'पत्तियों पर छिड़काव और जड़ों में सींचना',
        dosageEn: '750 ml per 15L tank + 5L per acre in irrigation',
        dosageHi: '750 मिली प्रति 15 लीटर टंकी + 5L प्रति एकड़ सिंचाई में',
        frequencyEn: 'Twice spaced 7 days apart',
        frequencyHi: '7 दिन के अंतराल पर 2 बार'
      }
    ],
    benefits: [
      {
        titleEn: 'Total Nutritional Equilibrium',
        titleHi: 'पौधे का संपूर्ण पोषक संतुलन',
        detailEn: 'Balances zinc, iron, boron, manganese, and magnesium, preventing chlorosis and leaf curl.',
        detailHi: 'जिंक, लोहा, बोरॉन, मैग्नीशियम जैसे तत्वों को संतुलित करता है जिससे पत्ते पीले या मुड़े नहीं होते।'
      },
      {
        titleEn: 'Enhanced Aroma, Flavor & Produce Density',
        titleHi: 'फसलों में लाजवाब स्वाद, खुशबू व वजन',
        detailEn: 'Tannins and gingerols boost secondary metabolites (essential oils and polyphenols) in harvested produce.',
        detailHi: 'सब्जियों और फलों में प्राकृतिक सुगंध, तेल और पोषक तत्वों की मात्रा बढ़ती है।'
      },
      {
        titleEn: 'Strong Immunity Against Leaf Curl Virus',
        titleHi: 'पत्ती मरोड़ (लीफ कर्ल) वायरस से सुरक्षा',
        detailEn: 'Astringent and bitter components deter vector insects (whiteflies, thrips) while fortifying cell defenses.',
        detailHi: 'वायरस फैलाने वाले कीटों को दूर रखता है और पौधे की रोग प्रतिरोधक शक्ति को बढ़ाता है।'
      }
    ],
    science: {
      microbialEn: 'The diverse substrate feeds a polymicrobial consortia of fermentative yeasts, lactic bacteria, and actinomycetes that synthesize siderophores for iron mobilization.',
      microbialHi: 'छहों स्वाद विभिन्न प्रकार के मित्र सूक्ष्मजीवों को भोजन देते हैं जो मिट्टी से लोहे को खींचने वाले साइडरोफोर का निर्माण करते हैं।',
      biochemicalEn: 'Tannins cross-link with cell wall proteins providing rigidity; gingerols improve phloem velocity; organic acids optimize xylem sap ionic conductance.',
      biochemicalHi: 'टैनिन कोशिका भित्ति को मजबूत करते हैं; जिंजरोल रस संचरण को बढ़ाते हैं; कार्बनिक अम्ल पोषक तत्वों को तेजी से ऊपर पहुंचाते हैं।',
      soilImpactEn: 'Promotes rhizosphere micro-biodiversity, preventing monoculture fungal pathogens from dominating soil niches.',
      soilImpactHi: 'जड़ क्षेत्र में सूक्ष्मजैविक विविधता पैदा करता है जिससे हानिकारक फफूंद मिट्टी में नहीं पनप पाती।'
    },
    precautionsEn: [
      'Do not substitute synthetic table salt (NaCl) for Sendha Namak; refined iodized salt will damage plants.',
      'Information awaiting expert verification regarding specific regional leaf substitutions.',
      'Always store in shade away from direct heat.'
    ],
    precautionsHi: [
      'सेंधा नमक की जगह कभी भी आयोडीन युक्त साधारण टेबल सॉल्ट न डालें; रासायनिक नमक पौधे को जला देगा।',
      'क्षेत्रीय पत्तियों के विकल्पों पर विशेषज्ञों द्वारा विस्तृत सत्यापन प्रक्रिया जारी है।',
      'हमेशा छाया में ही रखें।'
    ],
    isVerified: true,
    colorTheme: 'purple'
  },
  {
    id: 'chas-dravya-rasayan',
    number: 8,
    slug: 'chas-dravya-rasayan',
    nameEn: 'Chas Dravya Rasayan',
    nameHi: 'छाछ द्रव्य रसायन',
    devanagariScript: 'छाछ द्रव्य रसायन',
    taglineEn: 'Buttermilk-Botanical Bioprotectant & Anti-Mildew Formulation',
    taglineHi: 'छाछ एवं वानस्पतिक द्रव्य जैविक रक्षक व मिल्ड्यू रोधक',
    categoryEn: 'Probiotic Bioprotectant',
    categoryHi: 'प्रोबायोटिक फसल रक्षक',
    targetElement: 'Vayu',
    primaryActionEn: 'Forms a living probiotic biofilm on leaves that outcompetes airborne fungal spores',
    primaryActionHi: 'पत्तियों पर एक जीवित प्रोबायोटिक सुरक्षा परत बनाकर वायुजनित फफूंद बीजाणुओं को निष्प्रभावी करता है',
    introEn: 'Chas Dravya Rasayan combines aged indigenous cow buttermilk with potent therapeutic botanicals including turmeric, ginger, and marigold flowers. It acts as an organic protective coating that seals micro-wounds on leaf surfaces caused by wind, insects, or pruning.',
    introHi: 'छाछ द्रव्य रसायन पुरानी देशी गाय की छाछ में हल्दी, सोंठ (सूखा अदरक) और गेंदे के फूलों का रस मिलाकर तैयार किया जाने वाला एक प्रोबायोटिक सुरक्षा कवच है, जो हवा या कीटों से पत्तों पर लगे घावों को तुरंत भरता है।',
    purposeEn: 'To prevent powdery mildew, anthracnose, leaf spot, and bacterial canker while supplying organic calcium and phosphorus.',
    purposeHi: 'सब्जियों और फलों में पाउडरी मिल्ड्यू, पत्ती धब्बा, एंथ्रेक्नोज और जीवाणु जनित सड़ांध को रोकना और साथ ही प्राकृतिक कैल्शियम की पूर्ति करना।',
    idealForCropsEn: ['Cucurbits (Gourds, Cucumber)', 'Rose', 'Apple', 'Tomato', 'Capsicum', 'Papaya'],
    idealForCropsHi: ['कद्दू वर्गीय बेलें (लौकी, खीरा)', 'गुलाब', 'सेब', 'टमाटर', 'शिमला मिर्च', 'पपीता'],
    ingredients: [
      {
        nameEn: 'Aged Indigenous Cow Buttermilk (Chhas)',
        nameHi: '4-5 दिन पुरानी देशी गाय की छाछ',
        quantityEn: '5 Litres',
        quantityHi: '5 लीटर',
        purposeEn: 'Dense lactic acid bacteria population and bioavailable milk calcium',
        purposeHi: 'करोड़ों लैक्टिक बैक्टीरिया और दूध का सुलभ जैविक कैल्शियम'
      },
      {
        nameEn: 'Fresh Organic Turmeric (Haldi) Rhizome Paste',
        nameHi: 'ताजा कच्ची हल्दी का पेस्ट',
        quantityEn: '250g',
        quantityHi: '250 ग्राम',
        purposeEn: 'Curcumin provides antiseptic, antifungal, and healing properties',
        purposeHi: 'करक्यूमिन तत्व जो पौधे के घावों को भरता है और फफूंद को मारता है'
      },
      {
        nameEn: 'Dry Ginger Powder (Sonth)',
        nameHi: 'सोंठ (सूखा अदरक) का चूर्ण',
        quantityEn: '100g',
        quantityHi: '100 ग्राम',
        purposeEn: 'Natural circulatory stimulant and antiviral bioflavonoids',
        purposeHi: 'प्राकृतिक पादप रोग रोधक और संवहन को गति देने वाला'
      },
      {
        nameEn: 'Marigold (Genda) Flowers & Leaves',
        nameHi: 'गेंदे के ताजे फूल और पत्तियां',
        quantityEn: '500g',
        quantityHi: '500 ग्राम',
        purposeEn: 'Alpha-terthienyl compounds that suppress nematodes and soil fungi',
        purposeHi: 'अल्फा-टर्थिएनिल यौगिक जो सूत्रकृमि (नेमाटोड) और फंगस को नष्ट करते हैं'
      },
      {
        nameEn: 'Clean Water for Dilution',
        nameHi: 'स्वच्छ जल',
        quantityEn: '100 Litres',
        quantityHi: '100 लीटर',
        purposeEn: 'Foliar spray vehicle',
        purposeHi: 'छिड़काव हेतु'
      }
    ],
    preparationTimeEn: '5 to 7 Days (Cold infusion in shade)',
    preparationTimeHi: '5 से 7 दिन (छाया में ठंडा किण्वन)',
    shelfLifeEn: '30 Days in airtight container',
    shelfLifeHi: 'वायुरोधी पात्र में 30 दिन तक',
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Aging the Buttermilk',
        titleHi: 'छाछ को पुराना व खट्टा करना',
        descEn: 'Take 5 litres of fresh cow buttermilk in a clean earthen pot. Allow it to sit covered for 4 days until it becomes pungent and sour.',
        descHi: '5 लीटर ताजा देशी छाछ को मिट्टी के बर्तन में 4 दिन रखें ताकि वह खूब खट्टी हो जाए।'
      },
      {
        stepNumber: 2,
        titleEn: 'Pounding Turmeric & Marigold',
        titleHi: 'हल्दी व गेंदे की कुटाई',
        descEn: 'Grind 250g fresh raw turmeric and 500g marigold flowers/leaves in a mortar until a smooth paste is formed.',
        descHi: '250 ग्राम कच्ची हल्दी और 500 ग्राम गेंदे के फूलों को पीसकर बारीक चटनी बना लें।'
      },
      {
        stepNumber: 3,
        titleEn: 'Blending with Ginger Powder',
        titleHi: 'सोंठ चूर्ण के साथ मिलाना',
        descEn: 'Add 100g dry ginger powder and the turmeric-marigold paste into the sour buttermilk. Stir well with a wooden spatula.',
        descHi: 'खट्टी छाछ में सोंठ पाउडर और हल्दी-गेंदे का पेस्ट डालकर लकड़ी के चम्मच से अच्छी तरह मिलाएं।'
      },
      {
        stepNumber: 4,
        titleEn: 'Infusion and Stabilization',
        titleHi: 'स्थिर होने देना',
        descEn: 'Cover with cotton cloth and let it ferment in a shaded spot for 3 days. Stir once daily.',
        descHi: 'सूती कपड़े से बांधकर 3 दिन छाया में रखें और रोज एक बार हिलाएं।'
      },
      {
        stepNumber: 5,
        titleEn: 'Fine Double-Filtration',
        titleHi: 'दोहरा छानना',
        descEn: 'Strain the golden-yellow mixture through double muslin cloth to remove flower fibers that could clog nozzles.',
        descHi: 'मिश्रण को महीन सूती कपड़े से 2 बार अच्छी तरह छान लें ताकि स्प्रे पंप की नोजल में कोई रेशा न फंसे।'
      }
    ],
    applications: [
      {
        stageEn: 'Preventive Spray on Cucurbits & Solanaceous Crops',
        stageHi: 'बेल वाली फसलों व टमाटर पर सुरक्षात्मक स्प्रे',
        methodEn: 'Fine mist covering both sides of leaves',
        methodHi: 'पत्तियों के ऊपर और नीचे बारीक फव्वारे से छिड़काव',
        dosageEn: '500-750 ml per 15L spray tank',
        dosageHi: '500-750 मिली प्रति 15 लीटर टंकी',
        frequencyEn: 'Every 10 days during flowering and fruit development',
        frequencyHi: 'फूल और फल बनने के समय हर 10 दिन में'
      },
      {
        stageEn: 'Post-Hailstorm or Pruning Wound Dressing',
        stageHi: 'ओलावृष्टि या छंटाई (प्रूनिंग) के बाद घाव भरना',
        methodEn: 'Foliar spray immediately within 24 hours of hail or cutting',
        methodHi: 'ओले पड़ने या कटाई-छंटाई के तुरंत 24 घंटे के अंदर छिड़काव',
        dosageEn: '1000 ml per 15L tank',
        dosageHi: '1 लीटर प्रति 15 लीटर पंप',
        frequencyEn: 'Single emergency application to prevent bacterial entry',
        frequencyHi: 'संक्रमण रोकने हेतु तुरंत एक बार'
      }
    ],
    benefits: [
      {
        titleEn: 'Living Microbial Leaf Shield',
        titleHi: 'पत्तियों पर सजीव मित्र जीवाणुओं का कवच',
        detailEn: 'Lactic acid bacteria populate leaf stomata and micro-fissures, depriving pathogenic spores of space and nutrients.',
        detailHi: 'लैक्टिक बैक्टीरिया पत्तियों की सतह पर अपनी कॉलोनी बना लेते हैं जिससे बीमारी फैलाने वाली फफूंद को जगह नहीं मिलती।'
      },
      {
        titleEn: 'Calcium Infusion for Crisp Produce',
        titleHi: 'जैविक कैल्शियम से फलों का फटना बंद',
        detailEn: 'Supplies bio-chelated calcium that prevents blossom-end rot in tomatoes and fruit splitting in pomegranates.',
        detailHi: 'टमाटर के नीचे का कालापन (ब्लॉसम एंड रॉट) और अनार का फटना पूरी तरह रोकता है।'
      },
      {
        titleEn: 'Rapid Wound Healing',
        titleHi: 'पौधों के घावों का त्वरित उपचार',
        detailEn: 'Curcumin and gingerols promote suberization of wounded plant tissue, sealing out wilt and canker bacteria.',
        detailHi: 'हल्दी का करक्यूमिन कटे-फटे पत्तों और तनों पर तुरंत प्राकृतिक गोंद जैसा लेप बनाकर बैक्टीरिया को घुसने नहीं देता।'
      }
    ],
    science: {
      microbialEn: 'The formulation supports beneficial epiphytic lactic strains and suppresses Colletotrichum, Xanthomonas, and Erysiphe species.',
      microbialHi: 'यह घोल पत्तियों पर लाभकारी लैक्टिक जीवाणुओं को स्थापित करता है और पाउडरी मिल्ड्यू व बैक्टीरियल कैंकर को नष्ट करता है।',
      biochemicalEn: 'Curcuminoids from turmeric and zingiberene from ginger interfere with fungal mitochondrial electron transport, inhibiting spore elongation.',
      biochemicalHi: 'हल्दी के करक्यूमिनॉइड्स और सोंठ के यौगिक कवक के श्वसन तंत्र को ठप कर उसके बीजाणुओं के अंकुरण को रोक देते हैं।',
      soilImpactEn: 'Marigold root/leaf extracts drip onto the soil surface, suppressing root-knot nematode (Meloidogyne spp.) egg hatch.',
      soilImpactHi: 'जमीन पर गिरने पर गेंदे के प्राकृतिक तत्व जड़ की गांठ बनाने वाले हानिकारक सूत्रकृमि (नेमाटोड) को खत्म करते हैं।'
    },
    precautionsEn: [
      'Do not store in direct sunlight or plastic containers exposed to hot ambient conditions.',
      'Always use unpasteurized, natural A2 cow buttermilk for viable microbial cultures.',
      'Information awaiting expert verification regarding standardized gingerol concentration.'
    ],
    precautionsHi: [
      'सीधी धूप या बहुत गर्म कमरे में न रखें।',
      'हमेशा पैकेट वाले दूध की जगह देशी गाय के दूध से बनी सजीव छाछ का ही प्रयोग करें।',
      'सोंठ की सटीक सांद्रता के मानकीकरण पर विश्वविद्यालयों में सत्यापन कार्य जारी है।'
    ],
    isVerified: true,
    colorTheme: 'teal'
  },
  {
    id: 'jev-rasayan',
    number: 9,
    slug: 'jev-rasayan',
    nameEn: 'Jev Rasayan',
    nameHi: 'जैव रसायन',
    devanagariScript: 'जैव रसायन',
    taglineEn: 'Broad-Spectrum Fermented Multi-Enzyme Bio-Catalyst',
    taglineHi: 'किण्वित बहु-एंजाइम जैव-उत्प्रेरक एवं मृदा पुनर्जीवन घोल',
    categoryEn: 'Bio-Enzyme & Catalyst',
    categoryHi: 'जैव एंजाइम एवं उत्प्रेरक',
    targetElement: 'Prithvi',
    primaryActionEn: 'Breaks down stubborn crop residues, unlocks locked phosphorus, and detoxifies chemical residues',
    primaryActionHi: 'फसल अवशेषों को तेजी से सड़ाता है, रासायनिक जहरों को निष्प्रभावी करता है और मिट्टी को संजीवनी देता है',
    introEn: 'Jev Rasayan (Bio-Enzyme) is a slow-fermented organic liquid enzyme solution prepared from citrus peels or fresh kitchen vegetable scraps, dark jaggery, and water in a strict 1:3:10 ratio over 90 days. It is packed with protease, lipase, amylase, and organic acids.',
    introHi: 'जैव रसायन (बायो-एंजाइम) खट्टे फलों (नींबू, संतरा, मौसमी) के छिलकों, पुराने गुड़ और पानी को 1:3:10 के अनुपात में मिलाकर 90 दिनों तक किण्वित करके बनाया जाने वाला एक शक्तिशाली एंजाइम घोल है।',
    purposeEn: 'To remediate degraded or chemically contaminated soils, dissolve pesticide residues, digest stubble and hard cellulose, and clear clogged drip emitters effortlessly.',
    purposeHi: 'रासायनिक उर्वरकों से कठोर हुई जमीन को पुनः कोमल और उपजाऊ बनाना, पराली व फसल अवशेषों को खाद में बदलना, और ड्रिप सिंचाई की नोजल में जमी काई व खारेपन को साफ करना।',
    idealForCropsEn: ['Sugarcane', 'Cotton', 'Wheat Stubble Fields', 'Horticulture', 'Drip Systems'],
    idealForCropsHi: ['गन्ना', 'कपास', 'गेहूं की पराली वाले खेत', 'बागवानी', 'ड्रिप सिंचाई तंत्र'],
    ingredients: [
      {
        nameEn: 'Dark Unrefined Jaggery (Gud)',
        nameHi: 'पुराना काला गुड़',
        quantityEn: '1 kg (1 part)',
        quantityHi: '1 किग्रा (1 भाग)',
        purposeEn: 'Nutrient substrate and electron donor for slow enzymatic fermentation',
        purposeHi: 'धीमे किण्वन के लिए सूक्ष्मजीवों का मुख्य भोजन'
      },
      {
        nameEn: 'Fresh Citrus Peels (Orange, Lemon, Sweet Lime)',
        nameHi: 'खट्टे फलों के ताजे छिलके (संतरा, नींबू, मौसमी)',
        quantityEn: '3 kg (3 parts)',
        quantityHi: '3 किग्रा (3 भाग)',
        purposeEn: 'Provides d-limonene, citric acid, flavonoids, and active plant enzymes',
        purposeHi: 'डी-लिमोनेन, साइट्रिक अम्ल और शक्तिशाली एंजाइम का प्रचुर स्रोत'
      },
      {
        nameEn: 'Clean Non-Chlorinated Water',
        nameHi: 'क्लोरिन-रहित स्वच्छ जल',
        quantityEn: '10 Litres (10 parts)',
        quantityHi: '10 लीटर (10 भाग)',
        purposeEn: 'Aqueous fermentation matrix (Strict 1:3:10 ratio)',
        purposeHi: 'किण्वन माध्यम (सख्त 1:3:10 का स्वर्णिम अनुपात)'
      },
      {
        nameEn: 'Starter Enzyme Culture (Optional Accelerator)',
        nameHi: 'पुराना जैव-एंजाइम (मातृ कल्चर - ऐच्छिक)',
        quantityEn: '100 ml',
        quantityHi: '100 मिली',
        purposeEn: 'Reduces fermentation time from 90 days to 30 days',
        purposeHi: 'किण्वन के समय को 90 दिन से घटाकर 30 दिन करने हेतु'
      }
    ],
    preparationTimeEn: '90 Days (or 30 Days with mother culture) in airtight plastic container',
    preparationTimeHi: '90 दिन (पुराना कल्चर मिलाने पर 30 दिन) वायुरोधी प्लास्टिक जार में',
    shelfLifeEn: 'Indefinite (multi-year stability if sealed in cool dark place)',
    shelfLifeHi: 'अनंत काल (धूप से बचाकर बंद रखने पर कई वर्षों तक खराब नहीं होता)',
    steps: [
      {
        stepNumber: 1,
        titleEn: 'Preparation of 1:3:10 Ingredients',
        titleHi: '1:3:10 अनुपात का सही मापन',
        descEn: 'Accurately measure 1 kg jaggery, 3 kg chopped fresh citrus peels, and 10 litres of water into an airtight plastic container (leave 20% headspace).',
        descHi: 'सख्त अनुपात: 1 किलो गुड़, 3 किलो कटे छिलके और 10 लीटर पानी लें। प्लास्टिक के डिब्बे में 20% जगह खाली छोड़ें।'
      },
      {
        stepNumber: 2,
        titleEn: 'Thorough Dissolution',
        titleHi: 'गुड़ को घोलना',
        descEn: 'Dissolve the jaggery completely in the water before adding the fruit peels. Do not use glass containers due to pressure risk.',
        descHi: 'गुड़ को पानी में पूरी तरह घोल लें, फिर छिलके डालें। कांच का बर्तन कभी न लें क्योंकि गैस के दबाव से वह टूट सकता है।'
      },
      {
        stepNumber: 3,
        titleEn: 'First Month Daily Degassing',
        titleHi: 'पहले महीने प्रतिदिन गैस निकालना',
        descEn: 'Seal tightly. During the first 30 days, loosen the cap for 2 seconds daily to release trapped CO2 gas, then seal immediately.',
        descHi: 'डिब्बे को कसकर बंद करें। पहले 30 दिनों तक रोज ढक्कन 2 सेकंड ढीला करके बनी गैस निकालें और तुरंत कस दें।'
      },
      {
        stepNumber: 4,
        titleEn: 'Anaerobic Maturation',
        titleHi: 'अंतिम किण्वन काल',
        descEn: 'In months 2 and 3, open only once every week. Keep in a dark, shaded corner undisturbed.',
        descHi: 'दूसरे और तीसरे महीने में हफ्ते में केवल एक बार गैस निकालें। इसे अंधेरे कोने में बिना हिलाए पड़ा रहने दें।'
      },
      {
        stepNumber: 5,
        titleEn: 'Harvesting the Liquid Bio-Enzyme',
        titleHi: 'छानना व छिलकों की खाद बनाना',
        descEn: 'On day 90, the liquid turns clear amber-brown with a refreshing sweet-vinegar aroma. Filter liquid; the leftover residue makes exceptional compost starter.',
        descHi: '90 दिन बाद सिरके जैसी मीठी खुशबू वाला पारदर्शी भूरा अर्क तैयार होगा। इसे छानकर रख लें; बचे छिलके कंपोस्ट में डाल दें।'
      }
    ],
    applications: [
      {
        stageEn: 'Soil Remediation & Stubble Decomposition',
        stageHi: 'मृदा शोधन एवं पराली/अवशेष गलाने हेतु',
        methodEn: 'Flood irrigation or direct spraying onto crop residue',
        methodHi: 'सिंचाई के पानी के साथ या पराली/डंठल पर सीधा छिड़काव',
        dosageEn: '2-5 Litres per acre mixed in irrigation water',
        dosageHi: '2 से 5 लीटर प्रति एकड़ सिंचाई जल में',
        frequencyEn: 'Once after harvest before sowing next crop',
        frequencyHi: 'फसल कटाई के तुरंत बाद एक बार'
      },
      {
        stageEn: 'Drip System Cleaning & Salinity Flush',
        stageHi: 'ड्रिप नली की सफाई व खारापन हटाना',
        methodEn: 'Injected into drip irrigation system, left for 12 hours, then flushed',
        methodHi: 'ड्रिप सिस्टम में चलाकर 12 घंटे छोड़ें, फिर सादे पानी से फ्लश करें',
        dosageEn: '1 Litre per 500 Litres of drip water line',
        dosageHi: '1 लीटर प्रति 500 लीटर पानी की ड्रिप लाइन में',
        frequencyEn: 'Once a month to keep drippers 100% clog-free',
        frequencyHi: 'महीने में एक बार ड्रिप को चोक होने से बचाने हेतु'
      }
    ],
    benefits: [
      {
        titleEn: 'Accelerated Cellulose Digestion',
        titleHi: 'पराली व सेल्यूलोज का 15 दिन में अपघटन',
        detailEn: 'Cellulase and protease enzymes break tough crop lignin into soft humus in 15 days, eliminating stubble burning.',
        detailHi: 'सेल्यूलेज एंजाइम पराली के कड़े लिग्निन को 15 दिनों में गलाकर सजीव खाद बना देता है, जिससे पराली जलाने की आवश्यकता नहीं पड़ती।'
      },
      {
        titleEn: 'Neutralization of Chemical Residues',
        titleHi: 'रासायनिक अवशेषों व कीटनाशकों का खात्मा',
        detailEn: 'Catalytic cleavage breaks synthetic chemical bonds, detoxifying land previously subjected to heavy pesticide use.',
        detailHi: 'वर्षों से डाले जा रहे रासायनिक कीटनाशकों के जहरीले अवशेषों को तोड़कर जमीन को पुनः शुद्ध करता है।'
      },
      {
        titleEn: 'Permanent Drip De-clogging',
        titleHi: 'ड्रिप ड्रिपर्स की स्वतः सफाई',
        detailEn: 'Organic acids dissolve calcium carbonate and iron scale without corroding plastic pipes.',
        detailHi: 'ड्रिप नलियों में जमी काई, नमक और कैल्शियम की पपड़ी को बिना प्लास्टिक को नुकसान पहुंचाए साफ कर देता है।'
      }
    ],
    science: {
      microbialEn: 'Dominated by acetic acid bacteria and yeast species producing extracellular enzymes (amylase, lipase, cellulase) that digest complex macromolecules into bioavailable humic compounds.',
      microbialHi: 'इसमें एसिटिक एसिड बैक्टीरिया और यीस्ट होते हैं जो एमाइलेज, लाइपेस और सेल्यूलेज एंजाइम बनाते हैं जो जटिल कचरे को तुरंत पचा देते हैं।',
      biochemicalEn: 'Rich in low-molecular-weight organic acids (citric, acetic, malic) with pH ~3.0 that hydrolyze carbonate bonds in saline soils, liberating trapped calcium and phosphorus.',
      biochemicalHi: 'साइट्रिक व एसिटिक एसिड का समृद्ध भंडार जिसका पीएच ~3.0 होता है, जो क्षारीय मिट्टी के कार्बोनेट बंधनों को तोड़कर फॉस्फोरस को मुक्त करता है।',
      soilImpactEn: 'Converts sterile hardpan soil into porous crumb structure through rapid enzymatic chelation.',
      soilImpactHi: 'पथरीली और कठोर हो चुकी मिट्टी को भुरभुरी, हवादार और सरंध्र बनाकर जीवित करता है।'
    },
    precautionsEn: [
      'NEVER prepare in glass containers; gas expansion can cause violent shattering.',
      'Always dilute: Do not spray pure undiluted concentrate directly on tender crop foliage (dilute 1:500 for foliar use).',
      'Store away from direct sunlight at room temperature.'
    ],
    precautionsHi: [
      'कांच के बर्तन में कभी न बनाएं; गैस के दबाव से कांच फूटकर दुर्घटना हो सकती है।',
      'बिना पानी मिलाए सीधा पौधों पर न छिड़कें; पर्णीय छिड़काव के लिए 1:500 (15 लीटर में 30 मिली) अनुपात रखें।',
      'सीधी धूप से दूर सामान्य कमरे के तापमान पर रखें।'
    ],
    isVerified: true,
    colorTheme: 'lime'
  }
];
