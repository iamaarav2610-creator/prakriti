import { FarmerFeedback } from '../types';

export const INITIAL_FARMER_FEEDBACK: FarmerFeedback[] = [
  {
    id: 'fb-1',
    farmerName: 'Rameshwar Patidar',
    state: 'Madhya Pradesh',
    district: 'Khargone',
    crop: 'Wheat & Mustard (गेहूं एवं सरसों)',
    formulationUsed: 'Jeevanu Jal & Khatta Rasayan',
    experienceText: 'Transferred 5 acres to natural farming two seasons ago. Using Jeevanu Jal with every irrigation and Khatta Rasayan twice. My wheat showed zero yellow rust when neighboring chemical fields suffered heavy leaf scorch. Saved ₹18,000 on DAP and pesticide sprays.',
    yieldObservation: '22 Quintals/acre (Equivalent to chemical baseline with zero chemical input costs)',
    costReductionPercentage: 74,
    submittedAt: '2026-10-14',
    isVerified: false
  },
  {
    id: 'fb-2',
    farmerName: 'Anasuya Devi',
    state: 'Andhra Pradesh',
    district: 'Anantapuramu',
    crop: 'Groundnut & Pulses (मूंगफली व दलहन)',
    formulationUsed: 'Anu Jal & Sadras',
    experienceText: 'Our area faces extreme drought and hard water. Restructuring water with Anu Jal and spraying Sadras kept my groundnut green during a 28-day dry spell. Earthworm holes are visible across my field for the first time in 20 years.',
    yieldObservation: '14 Quintals/acre with superior oil weight and kernel fill',
    costReductionPercentage: 80,
    submittedAt: '2026-10-18',
    isVerified: false
  },
  {
    id: 'fb-3',
    farmerName: 'Dinesh Patel',
    state: 'Gujarat',
    district: 'Anand',
    crop: 'Vegetables & Tomato (टमाटर व मिर्च)',
    formulationUsed: 'Kadva Rasayan & Chas Dravya Rasayan',
    experienceText: 'Used to spend ₹25,000 per acre on chemical sprays for whitefly and fruit borer in tomato. Switched to weekly evening spray of Kadva Rasayan and Chas Dravya. Plants remained productive for 6 extra picking cycles.',
    yieldObservation: '38 Tonnes/acre of export grade, firm, shiny tomatoes',
    costReductionPercentage: 68,
    submittedAt: '2026-10-21',
    isVerified: false
  },
  {
    id: 'fb-4',
    farmerName: 'Sardar Gurpreet Singh',
    state: 'Punjab / Haryana Border',
    district: 'Kurukshetra',
    crop: 'Basmati Paddy (बासमती धान)',
    formulationUsed: 'Jev Rasayan & Jeevanu Jal',
    experienceText: 'Managed paddy stubble using Jev Rasayan spray directly on straw instead of burning. Straw turned into dark soft compost in 18 days. The succeeding wheat crop was the healthiest we have ever had.',
    yieldObservation: '24 Quintals/acre of aromatic premium Basmati 1121',
    costReductionPercentage: 62,
    submittedAt: '2026-10-25',
    isVerified: false
  },
  {
    id: 'fb-5',
    farmerName: 'Harish Chandra Verma',
    state: 'Uttar Pradesh',
    district: 'Barabanki',
    crop: 'Potato & Vegetables (आलू व गोभी)',
    formulationUsed: 'Khatta Rasayan & Meetha Rasayan',
    experienceText: 'Copper buttermilk completely protected our potato crop from late blight during consecutive foggy weeks in January. Potatoes had smooth skin and excellent storage quality without rotting.',
    yieldObservation: '160 Quintals/acre of disease-free seed potato',
    costReductionPercentage: 70,
    submittedAt: '2026-10-29',
    isVerified: false
  }
];
