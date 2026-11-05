import { CropGuide } from '../types';

export const CROP_GUIDES: CropGuide[] = [
  {
    id: 'wheat',
    nameEn: 'Wheat (Gehun)',
    nameHi: 'गेहूं (Triticum aestivum)',
    botanicalName: 'Triticum aestivum',
    categoryEn: 'Cereal / Rabi Grain',
    categoryHi: 'अन्न / रबी धान्य',
    seasonEn: 'Rabi (November to April)',
    seasonHi: 'रबी (नवंबर से अप्रैल)',
    overviewEn: 'Wheat thrives in cool winter climates under natural farming. By avoiding urea and DAP, natural wheat develops deeper root systems, higher grain density, and resistance to lodging and rust.',
    overviewHi: 'प्राकृतिक खेती में गेहूं की फसल अत्यधिक चमकदार, पौष्टिक और बिना किसी रासायनिक यूरिया या डीएपी के तैयार होती है। इसकी जड़ें गहरी जाती हैं जिससे फसल तेज हवा में गिरती नहीं है।',
    stages: [
      {
        stageNameEn: 'Beej Sanskar (Seed Treatment)',
        stageNameHi: 'बीज संस्कार (बुवाई पूर्व)',
        daysAfterSowing: 'Day 0',
        recommendedFormulation: 'Anu Jal + Cow Urine + Beejamrit',
        dosageEn: 'Immerse seed in solution for 30 minutes, dry in shade',
        dosageHi: 'घोल में बीज को 30 मिनट डुबोकर छाया में सुखाएं',
        soilWaterPracticeEn: 'Ensure optimum field moisture (Otah condition) at sowing',
        soilWaterPracticeHi: 'बुवाई के समय खेत में पर्याप्त ओट (वाफसा नमी) होनी चाहिए'
      },
      {
        stageNameEn: 'CRI (Crown Root Initiation)',
        stageNameHi: 'प्रथम सिंचाई / कल्ले फूटना (CRI)',
        daysAfterSowing: 'Day 20 - 25',
        recommendedFormulation: 'Jeevanu Jal (200L/acre via irrigation) + Urja Jal foliar spray',
        dosageEn: '200L through water + 1L Urja Jal in 150L water spray',
        dosageHi: '200 लीटर जीवाणु जल सिंचाई के साथ + 1 लीटर ऊर्जा जल स्प्रे',
        soilWaterPracticeEn: 'Give light irrigation; never waterlog roots',
        soilWaterPracticeHi: 'हल्की सिंचाई दें, खेत में पानी ठहरने न दें'
      },
      {
        stageNameEn: 'Active Tillering & Jointing',
        stageNameHi: 'कल्ले विस्तार एवं गांठें बनना',
        daysAfterSowing: 'Day 45 - 50',
        recommendedFormulation: 'Jeevanu Jal + Sadras Spray',
        dosageEn: '500ml Sadras per 15L tank foliar spray',
        dosageHi: '500 मिली षड्रस प्रति 15 लीटर टंकी स्प्रे',
        soilWaterPracticeEn: 'Maintain straw mulching in inter-row spaces',
        soilWaterPracticeHi: 'पंक्तियों के बीच पुआल या सूखी पत्तियों की मल्चिंग बनाए रखें'
      },
      {
        stageNameEn: 'Flowering & Grain Filling (Milk stage)',
        stageNameHi: 'दूधिया अवस्था एवं दाना भराव',
        daysAfterSowing: 'Day 75 - 85',
        recommendedFormulation: 'Khatta Rasayan + Meetha Rasayan',
        dosageEn: '500ml Khatta Rasayan (for rust prevention) + 40ml Meetha Rasayan',
        dosageHi: '500 मिली खट्टा रसायन (रतुआ सुरक्षा) + 40 मिली मीठा रसायन',
        soilWaterPracticeEn: 'Crucial moisture window; irrigate in late evening during calm wind',
        soilWaterPracticeHi: 'अति-महत्वपूर्ण अवस्था; शाम को शांत हवा के समय हल्की सिंचाई'
      }
    ],
    soilManagementEn: 'Incorporate 2-3 tonnes of farmyard compost with Jeevanu Jal during final plowing. Avoid burning stubble; apply Jev Rasayan to biodegrade previous crop residue.',
    soilManagementHi: 'अंतिम जुताई में 2-3 ट्रॉली देशी गोबर खाद में जीवाणु जल मिलाकर डालें। पराली कभी न जलाएं; जैव रसायन डालकर खेत में ही सड़ाएं।',
    waterManagementEn: 'Follow the Waaphasa principle. Wheat requires 4-5 timely irrigations at CRI, tillering, flowering, and dough stages. Water every alternate furrow to maintain soil aeration.',
    waterManagementHi: 'वाफसा सिद्धांत अपनाएं। गेहूं को 4-5 हल्की सिंचाइयों की आवश्यकता होती है। एक नाली छोड़कर एक नाली में पानी दें ताकि जड़ों को निरंतर हवा मिलती रहे।',
    commonDiseasesEn: ['Yellow Rust / Brown Rust (Puccinia spp.)', 'Loose Smut', 'Powdery Mildew'],
    commonDiseasesHi: ['पीला रतुआ / भूरा रतुआ (गेरुआ)', 'कंडुआ रोग', 'चूर्णिल आसिता'],
    pestRemedyEn: 'Preventive spray of Khatta Rasayan (copper buttermilk) at 45 and 65 days completely prevents rust. For aphids (Mahoo), spray Kadva Rasayan (300ml/15L).',
    pestRemedyHi: '45 और 65 दिन पर खट्टा रसायन (ताम्र छाछ) का छिड़काव रतुआ रोग को जड़ से रोकता है। माहू के लिए कड़वा रसायन (300 मिली/15L) का प्रयोग करें।'
  },
  {
    id: 'rice',
    nameEn: 'Paddy / Rice (Dhan)',
    nameHi: 'धान / चावल (Oryza sativa)',
    botanicalName: 'Oryza sativa',
    categoryEn: 'Cereal / Kharif Staple',
    categoryHi: 'अन्न / खरीफ मुख्य फसल',
    seasonEn: 'Kharif (June to November)',
    seasonHi: 'खरीफ (जून से नवंबर)',
    overviewEn: 'Natural farming paddy (utilizing System of Rice Intensification - SRI or Direct Seeded Rice - DSR) reduces water requirement by 40-50% while producing aromatic, chemical-free grains with superior storability.',
    overviewHi: 'प्राकृतिक धान की खेती (श्री विधि या सीधी बुवाई) में 40-50% कम पानी लगता है। फसल में कीड़े और बीमारियां नहीं लगतीं और चावल में अद्वितीय खुशबू व पोषण होता है।',
    stages: [
      {
        stageNameEn: 'Nursery Bed & Seedling Treatment',
        stageNameHi: 'बीज संस्कार व नर्सरी तैयारी',
        daysAfterSowing: 'Day 0 - 15',
        recommendedFormulation: 'Urja Jal root soak + Jeevanu Jal bed drench',
        dosageEn: '20% Urja Jal solution for 15-minute root dip before transplanting',
        dosageHi: 'रोपाई से पूर्व 20% ऊर्जा जल के घोल में 15 मिनट जड़ें डुबोएं',
        soilWaterPracticeEn: 'Keep nursery moist but never submerged continuously',
        soilWaterPracticeHi: 'नर्सरी में नमी रखें, दिन-रात पानी भरा न रखें'
      },
      {
        stageNameEn: 'Transplanting (Single seedling, 25x25cm)',
        stageNameHi: 'रोपाई (एकल पौधा, 25x25 सेमी)',
        daysAfterSowing: 'Day 15',
        recommendedFormulation: 'Jeevanu Jal flood canal inoculant',
        dosageEn: '200 Litres per acre mixed in irrigation stream',
        dosageHi: '200 लीटर प्रति एकड़ सिंचाई के पानी के साथ नाली में बहाएं',
        soilWaterPracticeEn: 'Square grid planting for cross-directional aeration and weeding',
        soilWaterPracticeHi: 'वर्गाकार विधि से रोपाई ताकि दोनों दिशाओं से वायु संचार हो सके'
      },
      {
        stageNameEn: 'Peak Tillering & Vegetative Growth',
        stageNameHi: 'कल्ले फूटना (कंसार अवस्था)',
        daysAfterSowing: 'Day 35 - 40',
        recommendedFormulation: 'Urja Jal + Kadva Rasayan (preventive)',
        dosageEn: '1L Urja Jal + 300ml Kadva Rasayan in 150L water spray',
        dosageHi: '1 लीटर ऊर्जा जल + 300 मिली कड़वा रसायन का छिड़काव',
        soilWaterPracticeEn: 'Alternate wetting and drying (AWD); allow hair cracks before next wetting',
        soilWaterPracticeHi: 'वैकल्पिक गीला-सूखा चक्र (AWD); मिट्टी में बारीक दरारें दिखने पर ही पानी दें'
      },
      {
        stageNameEn: 'Panicle Initiation & Grain Filling',
        stageNameHi: 'बाली निकलना एवं दुग्धावस्था',
        daysAfterSowing: 'Day 70 - 80',
        recommendedFormulation: 'Chas Dravya Rasayan + Meetha Rasayan',
        dosageEn: '500ml Chas Dravya + 50ml Meetha Rasayan per tank',
        dosageHi: '500 मिली छाछ द्रव्य + 50 मिली मीठा रसायन प्रति स्प्रे टंकी',
        soilWaterPracticeEn: 'Maintain thin water layer (2-3cm) only until grain dough stage',
        soilWaterPracticeHi: 'दूध भरते समय केवल 2-3 सेमी पानी रखें, कटाई से 15 दिन पूर्व पानी बंद करें'
      }
    ],
    soilManagementEn: 'Incorporate green manure crops like Dhaincha or Sunnhemp 45 days prior to transplanting. Treat soil with Jev Rasayan to digest previous straw residues.',
    soilManagementHi: 'रोपाई से 45 दिन पहले ढैंचा या सनई की हरी खाद खेत में पलटें। पिछली पराली गलाने हेतु जैव रसायन का उपयोग करें।',
    waterManagementEn: 'Continuous flooding is detrimental in natural farming as it suffocates aerobic soil microbes. Practice Alternate Wetting and Drying (AWD) to stimulate massive root aeration.',
    waterManagementHi: 'लगातार खेत में पानी भरे रहने से जमीन के मित्र जीवाणु मर जाते हैं। बारी-बारी से पानी देना और सुखाना (AWD तकनीक) जड़ों को 3 गुना अधिक फैलाता है।',
    commonDiseasesEn: ['Bacterial Leaf Blight (BLB)', 'Blast (Pyricularia oryzae)', 'Stem Borer (Scirpophaga incertulas)'],
    commonDiseasesHi: ['जीवाणु पत्ती झुलसा (BLB)', 'झोंका (ब्लास्ट) रोग', 'तना छेदक (डेड हार्ट / सफेद बाली)'],
    pestRemedyEn: 'Stem borer is deterred using Kadva Rasayan with garlic-chilli paste. Blast and sheath blight are controlled with Khatta Rasayan (copper buttermilk) spray.',
    pestRemedyHi: 'तना छेदक के लिए कड़वा रसायन (लहसुन-मिर्च युक्त) का छिड़काव करें। ब्लास्ट और झुलसा के लिए खट्टा रसायन (ताम्र छाछ) 750 मिली/टंकी छिड़कें।'
  },
  {
    id: 'mustard',
    nameEn: 'Mustard (Sarson)',
    nameHi: 'सरसों / राई (Brassica juncea)',
    botanicalName: 'Brassica juncea',
    categoryEn: 'Oilseed / Rabi',
    categoryHi: 'तिलहन / रबी',
    seasonEn: 'Rabi (October to March)',
    seasonHi: 'रबी (अक्टूबर से मार्च)',
    overviewEn: 'Natural mustard achieves higher oil content (>42%), intense pungency, and healthy plant branching without synthetic phosphatic fertilizers. Pollinating honeybees thrive in natural mustard fields.',
    overviewHi: 'प्राकृतिक सरसों में तेल की मात्रा (42% से अधिक) और तीखापन रासायनिक सरसों से कहीं अधिक होता है। बिना कीटनाशकों के खेत में मधुमक्खियां स्वतंत्र परागण करती हैं।',
    stages: [
      {
        stageNameEn: 'Sowing & Seed Coating',
        stageNameHi: 'बीज संस्कार व बुवाई',
        daysAfterSowing: 'Day 0',
        recommendedFormulation: 'Anu Jal + Cow dung ash powder coating',
        dosageEn: 'Moisten seeds with Anu Jal, roll in cow dung ash, sow immediately',
        dosageHi: 'अणु जल से बीज गीले कर कंडे की छनी भस्म लपेटें और बोएं',
        soilWaterPracticeEn: 'Conserve residual monsoon moisture in the seed zone',
        soilWaterPracticeHi: 'मानसून के बाद खेत की संरक्षित नमी में बुवाई करें'
      },
      {
        stageNameEn: 'First Irrigation & Rosette Stage',
        stageNameHi: 'पहली सिंचाई व शाखा निर्माण',
        daysAfterSowing: 'Day 25 - 30',
        recommendedFormulation: 'Jeevanu Jal (200L/acre) + Urja Jal spray',
        dosageEn: '200L through irrigation stream; 500ml Urja Jal per spray tank',
        dosageHi: '200L सिंचाई के साथ; 500 मिली ऊर्जा जल प्रति स्प्रे पंप',
        soilWaterPracticeEn: 'Light irrigation; avoid water stagnation in root collar',
        soilWaterPracticeHi: 'हल्का पानी दें; तने के पास जलभराव न होने दें'
      },
      {
        stageNameEn: 'Flowering & Pod Formation (Siliqua)',
        stageNameHi: 'पीले फूल खिलना एवं फलियां (सिलिकुआ) बनना',
        daysAfterSowing: 'Day 50 - 60',
        recommendedFormulation: 'Kadva Rasayan (crucial for aphids) + Sadras',
        dosageEn: '350ml Kadva Rasayan + 300ml Sadras per 15L tank',
        dosageHi: '350 मिली कड़वा रसायन + 300 मिली षड्रस प्रति 15 लीटर टंकी',
        soilWaterPracticeEn: 'Second light irrigation if soil moisture drops below 40%',
        soilWaterPracticeHi: 'यदि खेत में नमी कम हो तो शाम को दूसरी हल्की सिंचाई दें'
      },
      {
        stageNameEn: 'Grain Maturation & Pod Filling',
        stageNameHi: 'फलियों में दाना पकना',
        daysAfterSowing: 'Day 85 - 95',
        recommendedFormulation: 'Meetha Rasayan foliar spray',
        dosageEn: '40ml per 15L water spray for maximum oil synthesis',
        dosageHi: '40 मिली प्रति 15 लीटर पानी; दानों में तेल और वजन बढ़ाने हेतु',
        soilWaterPracticeEn: 'Stop all irrigation 20 days prior to harvest',
        soilWaterPracticeHi: 'कटाई से 20 दिन पूर्व सभी प्रकार की सिंचाई बंद कर दें'
      }
    ],
    soilManagementEn: 'Mustard has deep taproots that break hardpans. Intercrop with chickpea or lentil (4:1 row ratio) for biological nitrogen replenishment.',
    soilManagementHi: 'सरसों की मूसला जड़ें गहराई तक जाकर मिट्टी को भुरभुरा करती हैं। चने के साथ 4:1 अनुपात में अंतर्वर्ती खेती करने से प्राकृतिक नाइट्रोजन मिलती है।',
    waterManagementEn: 'Extremely drought-resilient. Requires only 2 irrigations in its lifecycle. Never flood mustard fields as excess water promotes Sclerotinia white rot.',
    waterManagementHi: 'सरसों को पूरे जीवनकाल में केवल 2 हल्की सिंचाइयों की आवश्यकता होती है। अधिक पानी देने से तना गलन (सफेद रतुआ) का खतरा बढ़ता है।',
    commonDiseasesEn: ['Mustard Aphid / Mahoo (Lipaphis erysimi)', 'White Rust (Albugo candida)', 'Downy Mildew'],
    commonDiseasesHi: ['सरसों का चेपा / माहू (मोयला)', 'सफेद रतुआ (व्हाइट रस्ट)', 'डाउनी मिल्ड्यू'],
    pestRemedyEn: 'Spray Kadva Rasayan with crushed garlic-chilli at the first sighting of yellow-green aphids. Khatta Rasayan controls white rust effortlessly.',
    pestRemedyHi: 'माहू दिखते ही कड़वा रसायन में लहसुन-मिर्च का अर्क मिलाकर तुरंत छिड़कें। सफेद रतुआ आने पर 500 मिली खट्टा रसायन प्रति टंकी छिड़कें।'
  },
  {
    id: 'vegetables',
    nameEn: 'Vegetables (Tomato, Brinjal, Chilli, Gourds)',
    nameHi: 'सब्जियां (टमाटर, बैंगन, मिर्च, लौकी, भिंडी)',
    botanicalName: 'Solanaceae & Cucurbitaceae',
    categoryEn: 'Horticulture / Cash Crops',
    categoryHi: 'बागवानी / नकदी फसलें',
    seasonEn: 'Year-Round (Kharif, Rabi, Zaid)',
    seasonHi: 'वर्ष भर (खरीफ, रबी, जायद)',
    overviewEn: 'Vegetables are highly sensitive to pests and chemical residues. Natural farming produces poison-free, crunchy, nutrient-dense vegetables with extended shelf life and rich natural flavors.',
    overviewHi: 'सब्जियों में रासायनिक कीटनाशकों का जहर सबसे ज्यादा होता है। प्राकृतिक खेती से बिना किसी जहर के चमकदार, स्वादिष्ट व लंबी शेल्फ-लाइफ वाली सब्जियां प्राप्त होती हैं।',
    stages: [
      {
        stageNameEn: 'Raised Bed Preparation & Mulching',
        stageNameHi: 'उठी हुई क्यारियां एवं आच्छादन',
        daysAfterSowing: 'Day 0',
        recommendedFormulation: 'Jeevanu Jal drenching under mulch',
        dosageEn: '100ml per planting pit mixed with vermicompost',
        dosageHi: 'प्रत्येक गड्ढे में 100 मिली जीवाणु जल सड़ी गोबर खाद के साथ',
        soilWaterPracticeEn: '3-foot wide raised beds with 4-inch dry leaf mulch',
        soilWaterPracticeHi: '3 फीट चौड़ी उठी हुई क्यारियां जिन पर 4 इंच सूखी पत्तियों की मल्चिंग हो'
      },
      {
        stageNameEn: 'Transplanting & Early Establishment',
        stageNameHi: 'पौध रोपाई व शुरुआती जमाव',
        daysAfterSowing: 'Day 10 - 15',
        recommendedFormulation: 'Urja Jal root wash + foliar mist',
        dosageEn: '10% Urja Jal solution applied with hand sprayer',
        dosageHi: '10% ऊर्जा जल के घोल से कोमल पौधों पर हल्का छिड़काव',
        soilWaterPracticeEn: 'Maintain moist subterranean soil under mulch; do not drown roots',
        soilWaterPracticeHi: 'मल्च के नीचे केवल नम वाफसा रखें; क्यारियों में पानी न भरे'
      },
      {
        stageNameEn: 'Continuous Flowering & Fruit Setting',
        stageNameHi: 'फूल खिलना एवं निरंतर फल लगना',
        daysAfterSowing: 'Day 40 onwards (recurring)',
        recommendedFormulation: 'Meetha Rasayan + Chas Dravya Rasayan',
        dosageEn: '30ml Meetha Rasayan + 500ml Chas Dravya per 15L tank',
        dosageHi: '30 मिली मीठा रसायन + 500 मिली छाछ द्रव्य रसायन प्रति टंकी',
        soilWaterPracticeEn: 'Consistent drip or furrow moisture to prevent blossom-end rot',
        soilWaterPracticeHi: 'टमाटर में फल फटने और सड़ांध से बचने हेतु एक समान नमी बनाए रखें'
      },
      {
        stageNameEn: 'Pest Defense & Canopy Health',
        stageNameHi: 'कीट सुरक्षा एवं पर्ण स्वास्थ्य',
        daysAfterSowing: 'Every 10-12 Days',
        recommendedFormulation: 'Kadva Rasayan alternating with Sadras',
        dosageEn: '300ml per tank in evening',
        dosageHi: '300 मिली प्रति 15 लीटर स्प्रे टंकी शाम के समय',
        soilWaterPracticeEn: 'Aerate furrows; weed with hand hoe without disturbing mulch',
        soilWaterPracticeHi: 'नालियों की हल्की गुड़ाई करें, मल्च को अपनी जगह स्थिर रखें'
      }
    ],
    soilManagementEn: 'High organic matter requirement. Apply well-fermented Jeevanu Jal enriched compost every 3 weeks through drip or furrow.',
    soilManagementHi: 'सब्जियों को निरंतर कार्बनिक पोषण चाहिए। हर 3 सप्ताह में जीवाणु जल से समृद्ध खाद नालियों में दें।',
    waterManagementEn: 'Drip irrigation under heavy organic biomass mulch is the gold standard, slashing water consumption by 65% while keeping foliage dry.',
    waterManagementHi: 'सूखी घास की मल्चिंग के नीचे ड्रिप सिंचाई सबसे उत्तम है। इससे 65% पानी बचता है और पत्तियों पर पानी न पड़ने से फफूंद नहीं लगती।',
    commonDiseasesEn: ['Fruit and Shoot Borer (Leucinodes orbonalis)', 'Leaf Curl Virus', 'Early & Late Blight', 'Damping Off'],
    commonDiseasesHi: ['तना व फल छेदक इल्ली', 'पत्ती मरोड़ (मोजेक वायरस)', 'अगेती व पछेती झुलसा', 'आर्द्र गलन (डैम्पिंग ऑफ)'],
    pestRemedyEn: 'Fruit borers are controlled by regular sprays of Kadva Rasayan. Sucking pests transmitting leaf curl virus are deterred with Sadras and yellow sticky traps.',
    pestRemedyHi: 'फल छेदक इल्ली के लिए कड़वा रसायन का नियमित छिड़काव करें। वायरस फैलाने वाले रस चूसक कीटों को रोकने के लिए षड्रस और पीले चिपचिपे कार्ड लगाएं।'
  },
  {
    id: 'fruits',
    nameEn: 'Fruits & Orchards (Mango, Guava, Citrus, Pomegranate)',
    nameHi: 'फलदार वृक्ष एवं बागवानी (आम, अमरूद, नींबू, अनार)',
    botanicalName: 'Horticultural Trees',
    categoryEn: 'Perennial Horticulture',
    categoryHi: 'बहुवर्षीय फलदार बाग',
    seasonEn: 'Perennial (Seasonal fruiting flushes)',
    seasonHi: 'बारहमासी (ऋतु अनुसार फलन चक्र)',
    overviewEn: 'Fruit orchards in natural farming build deep symbiotic root networks with mycorrhizae. Trees produce vibrant fruit coloration, high sugar brix, superior export aroma, and live for decades without soil exhaustion.',
    overviewHi: 'प्राकृतिक बागवानी में पेड़ों की जड़ें जमीन में 10-15 फीट गहरी जाकर दुर्लभ खनिज खींचती हैं। फलों में प्राकृतिक मिठास, चमक और मनमोहक सुगंध होती है जो रसायनों से कभी नहीं मिल सकती।',
    stages: [
      {
        stageNameEn: 'Post-Harvest Rest & Canopy Basin Mulching',
        stageNameHi: 'फसल कटाई बाद विश्राम व थाला आच्छादन',
        daysAfterSowing: 'Dormancy Flush',
        recommendedFormulation: 'Jev Rasayan + Jeevanu Jal ring drenching',
        dosageEn: '5L Jeevanu Jal per tree basin (drip line boundary)',
        dosageHi: '5 लीटर जीवाणु जल प्रति पेड़ की कैनोपी सीमा (छाया परिधि) में',
        soilWaterPracticeEn: 'Cover root basin with 6-8 inch thick dried branches and orchard leaves',
        soilWaterPracticeHi: 'पेड़ के थाले को सूखी पत्तियों और बारीक टहनियों से 6-8 इंच मोटा ढंकें'
      },
      {
        stageNameEn: 'Flower Bud Induction & Bahar Management',
        stageNameHi: 'बहार प्रबंधन व फूल आने की शुरुआत',
        daysAfterSowing: 'Prior to Bloom',
        recommendedFormulation: 'Urja Jal + Anu Jal fine canopy spray',
        dosageEn: '1000ml Urja Jal in 100L Anu Jal spray water',
        dosageHi: '1000 मिली ऊर्जा जल 100L अणु जल में घोलकर छिड़काव',
        soilWaterPracticeEn: 'Induce mild water stress (tanav) followed by regulated light watering',
        soilWaterPracticeHi: 'हल्का पानी का तनाव देकर फिर नियंत्रित सिंचाई शुरू करें'
      },
      {
        stageNameEn: 'Fruit Set & Pea-Size Fruitlet Stage',
        stageNameHi: 'फल ठहराव व मटर के दाने के बराबर फल',
        daysAfterSowing: 'Post-Pollination',
        recommendedFormulation: 'Meetha Rasayan + Chas Dravya Rasayan',
        dosageEn: '50ml Meetha Rasayan + 750ml Chas Dravya per 15L tank',
        dosageHi: '50 मिली मीठा रसायन + 750 मिली छाछ द्रव्य प्रति 15 लीटर टंकी',
        soilWaterPracticeEn: 'Uniform moisture is vital; prevent drying cycles to eliminate fruit drop',
        soilWaterPracticeHi: 'थाले में निरंतर हल्की नमी रखें ताकि फल झड़े नहीं'
      },
      {
        stageNameEn: 'Fruit Expansion, Color & Brix Enrichment',
        stageNameHi: 'फल का आकार बढ़ना व मिठास/रंग विकास',
        daysAfterSowing: '30 Days to Harvest',
        recommendedFormulation: 'Meetha Rasayan + Sadras',
        dosageEn: '100ml Meetha Rasayan + 500ml Sadras per 15L tank',
        dosageHi: '100 मिली मीठा रसायन + 500 मिली षड्रस प्रति पंप',
        soilWaterPracticeEn: 'Gradually taper off irrigation 10 days before harvest to concentrate sugars',
        soilWaterPracticeHi: 'तुड़ाई से 10 दिन पहले सिंचाई कम करें ताकि फल में मिठास और गाढ़ापन आए'
      }
    ],
    soilManagementEn: 'Never plow or cultivate deeply within the tree canopy drip line (feeder root zone). Feed the surface using Jeevanu Jal and live leguminous cover crops (cowpea, velvet bean).',
    soilManagementHi: 'पेड़ की छाया परिधि में कभी जुताई न करें क्योंकि वहां बारीक पोषक जड़ें होती हैं। लोबिया या मखमली सेम की हरी कवर फसल लगाएं और जीवाणु जल दें।',
    waterManagementEn: 'Ring-and-basin method or double-row drip positioned along the tree drip line. Never puddle water directly against the tree trunk collar to prevent collar rot (Phytophthora).',
    waterManagementHi: 'पानी हमेशा पेड़ के मुख्य तने से दूर कैनोपी की बाहरी परिधि पर दें। तने के पास सीधा पानी कभी न लगाएं अन्यथा तना गलन रोग हो सकता है।',
    commonDiseasesEn: ['Fruit Fly (Bactrocera dorsalis)', 'Anthracnose & Dieback', 'Powdery Mildew', 'Gummosis'],
    commonDiseasesHi: ['फल मक्खी (फ्रूट फ्लाई)', 'एंथ्रेक्नोज एवं डाइबैक', 'पाउडरी मिल्ड्यू', 'गोंदिया (गमोसिस) रोग'],
    pestRemedyEn: 'Hang methyl eugenol pheromone traps for fruit fly. Spray Khatta Rasayan with turmeric and hing to eliminate anthracnose and cure fungal gummosis on tree bark.',
    pestRemedyHi: 'फल मक्खी के लिए देसी फेरोमोन ट्रैप लगाएं। छाल पर गोंद निकलने व फफूंद के लिए खट्टा रसायन में हल्दी और हींग मिलाकर लेप लगाएं व छिड़कें।'
  },
  {
    id: 'pulses',
    nameEn: 'Pulses (Chickpea, Pigeonpea, Moong, Urad)',
    nameHi: 'दलहनी फसलें (चना, अरहर, मूंग, उड़द)',
    botanicalName: 'Fabaceae / Leguminosae',
    categoryEn: 'Legumes / Soil Regenerators',
    categoryHi: 'दलहन / मृदा उर्वरता वर्धक',
    seasonEn: 'Kharif, Rabi & Summer',
    seasonHi: 'खरीफ, रबी एवं जायद',
    overviewEn: 'Pulses are the crown jewels of natural farming. Through root nodule symbiosis with native Rhizobium bacteria, pulses fix 40-100 kg of free atmospheric nitrogen per hectare into the soil.',
    overviewHi: 'दलहन प्राकृतिक खेती की रीढ़ हैं। इनकी जड़ों में मौजूद राइजोबियम ग्रंथियां हवा से 40-100 किलो नाइट्रोजन खींचकर खेत को प्राकृतिक यूरिया की फैक्ट्री बना देती हैं।',
    stages: [
      {
        stageNameEn: 'Beejamrit & Seed Inoculation',
        stageNameHi: 'बीजामृत व जीवाणु संस्कार',
        daysAfterSowing: 'Day 0',
        recommendedFormulation: 'Anu Jal + Forest rhizosphere soil slurry',
        dosageEn: 'Coat seeds with microbial slurry 2 hours prior to planting',
        dosageHi: 'बरगद के नीचे की सजीव मिट्टी और अणु जल के लेप से बीजोपचार',
        soilWaterPracticeEn: 'Sow at uniform depth into moist crumb soil',
        soilWaterPracticeHi: 'पर्याप्त नमी वाली भुरभुरी मिट्टी में 3-4 सेमी गहराई पर बोएं'
      },
      {
        stageNameEn: 'Nodule Formation & Vegetative Branching',
        stageNameHi: 'जड़ों में ग्रंथियां बनना व शाखाएं फूटना',
        daysAfterSowing: 'Day 20 - 30',
        recommendedFormulation: 'Urja Jal + Jeevanu Jal (light foliar spray)',
        dosageEn: '500ml Urja Jal per 15L tank',
        dosageHi: '500 मिली ऊर्जा जल प्रति 15 लीटर पंप छिड़काव',
        soilWaterPracticeEn: 'Hoe lightly once to aerate root nodules with atmospheric air',
        soilWaterPracticeHi: 'एक हल्की निराई करें ताकि जड़ों की ग्रंथियों तक हवा पहुंच सके'
      },
      {
        stageNameEn: 'Budding & Flower Blooming',
        stageNameHi: 'कलियां बनना एवं फूल खिलना',
        daysAfterSowing: 'Day 45 - 55',
        recommendedFormulation: 'Chas Dravya Rasayan (pod borer repellent) + Meetha Rasayan',
        dosageEn: '500ml Chas Dravya + 30ml Meetha Rasayan per tank',
        dosageHi: '500 मिली छाछ द्रव्य + 30 मिली मीठा रसायन प्रति टंकी',
        soilWaterPracticeEn: 'Strictly avoid flood irrigation during flowering to prevent flower abortion',
        soilWaterPracticeHi: 'फूल खिलते समय कभी भी भारी सिंचाई न करें, अन्यथा फूल झड़ जाएंगे'
      },
      {
        stageNameEn: 'Pod Development & Grain Hardening',
        stageNameHi: 'फली विकास व दाना भरना',
        daysAfterSowing: 'Day 70 - 80',
        recommendedFormulation: 'Kadva Rasayan (crucial for Helicoverpa borer)',
        dosageEn: '400ml Kadva Rasayan per 15L tank in late evening',
        dosageHi: '400 मिली कड़वा रसायन प्रति 15 लीटर टंकी शाम के समय',
        soilWaterPracticeEn: 'Single light moisture support at early pod stage if drought prevails',
        soilWaterPracticeHi: 'सूखा पड़ने पर फली बनते समय एक हल्की सिंचाई दे सकते हैं'
      }
    ],
    soilManagementEn: 'Minimal fertilizer inputs required. Avoid chemical nitrogen at all costs, as synthetic urea shuts down the biological nitrogen-fixation apparatus in pulse roots.',
    soilManagementHi: 'किसी रासायनिक खाद की आवश्यकता नहीं। रासायनिक यूरिया कभी न डालें, क्योंकि यूरिया डालने से जड़ें नाइट्रोजन बनाना बंद कर देती हैं।',
    waterManagementEn: 'Highly sensitive to waterlogging. Always grow on broad bed and furrows (BBF) or ridges so excess rainwater drains freely while root zones stay moist.',
    waterManagementHi: 'दलहन पानी का ठहराव बिल्कुल सहन नहीं कर सकते। हमेशा मेड़ पर बोएं ताकि बारिश का अतिरिक्त पानी निकल जाए और केवल नमी बनी रहे।',
    commonDiseasesEn: ['Pod Borer (Helicoverpa armigera)', 'Fusarium Wilt', 'Root Rot', 'Powdery Mildew'],
    commonDiseasesHi: ['चना फली छेदक इल्ली (हेलिकोवर्पा)', 'उकठा (विल्ट) रोग', 'जड़ गलन', 'छाछिया (पाउडरी मिल्ड्यू)'],
    pestRemedyEn: 'Install bird perches (T-shaped wooden poles, 20/acre) so insectivorous birds feed on larvae. Spray Kadva Rasayan with neem and dhatura to eliminate pod borers completely.',
    pestRemedyHi: 'खेत में "टी" (T) आकार की 20 खूंटियां लगाएं ताकि चिड़ियां बैठकर इल्लियों को खा सकें। फली छेदक के लिए नीम-धतूरा युक्त कड़वा रसायन का छिड़काव करें।'
  }
];
