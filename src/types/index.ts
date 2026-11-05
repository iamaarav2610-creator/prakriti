export type Language =
  | 'en' // English (Default)
  | 'as' // Assamese (অসমীয়া)
  | 'bn' // Bengali (বাংলা)
  | 'brx' // Bodo (बड़ो)
  | 'doi' // Dogri (डोगरी)
  | 'gu' // Gujarati (ગુજરાતી)
  | 'hi' // Hindi (हिन्दी)
  | 'kn' // Kannada (ಕನ್ನಡ)
  | 'ks' // Kashmiri (كٲشُر)
  | 'kok' // Konkani (कोंकणी)
  | 'mai' // Maithili (मैथिली)
  | 'ml' // Malayalam (മലയാളം)
  | 'mni' // Manipuri (মৈতৈলোন্)
  | 'mr' // Marathi (मराठी)
  | 'ne' // Nepali (नेपाली)
  | 'or' // Odia (ଓଡ଼ିଆ)
  | 'pa' // Punjabi (ਪੰਜਾਬੀ)
  | 'sa' // Sanskrit (संस्कृतम्)
  | 'sat' // Santali (ᱥᱟᱱᱛᱟᱲᱤ)
  | 'sd' // Sindhi (سنڌي)
  | 'ta' // Tamil (தமிழ்)
  | 'te' // Telugu (తెలుగు)
  | 'ur'; // Urdu (اردو)

export interface LanguageMeta {
  code: Language;
  name: string; // Native script
  englishName: string;
  script: string;
  dir: 'ltr' | 'rtl';
  region: string;
}

export interface FormulationIngredient {
  nameEn: string;
  nameHi: string;
  quantityEn: string;
  quantityHi: string;
  purposeEn: string;
  purposeHi: string;
  isOptional?: boolean;
}

export interface FormulationStep {
  stepNumber: number;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  duration?: string;
  tipEn?: string;
  tipHi?: string;
}

export interface FormulationApplication {
  stageEn: string;
  stageHi: string;
  methodEn: string;
  methodHi: string;
  dosageEn: string;
  dosageHi: string;
  frequencyEn: string;
  frequencyHi: string;
}

export interface FormulationBenefit {
  titleEn: string;
  titleHi: string;
  detailEn: string;
  detailHi: string;
}

export interface FormulationScience {
  microbialEn: string;
  microbialHi: string;
  biochemicalEn: string;
  biochemicalHi: string;
  soilImpactEn: string;
  soilImpactHi: string;
}

export interface Formulation {
  id: string;
  number: number;
  slug: string;
  nameEn: string;
  nameHi: string;
  devanagariScript: string;
  taglineEn: string;
  taglineHi: string;
  categoryEn: string;
  categoryHi: string;
  targetElement: 'Prithvi' | 'Jal' | 'Agni' | 'Vayu' | 'Akash';
  primaryActionEn: string;
  primaryActionHi: string;
  introEn: string;
  introHi: string;
  purposeEn: string;
  purposeHi: string;
  idealForCropsEn: string[];
  idealForCropsHi: string[];
  ingredients: FormulationIngredient[];
  preparationTimeEn: string;
  preparationTimeHi: string;
  shelfLifeEn: string;
  shelfLifeHi: string;
  steps: FormulationStep[];
  applications: FormulationApplication[];
  benefits: FormulationBenefit[];
  science: FormulationScience;
  precautionsEn: string[];
  precautionsHi: string[];
  isVerified: boolean;
  expertVerificationNoteEn?: string;
  expertVerificationNoteHi?: string;
  colorTheme: string;
}

export interface MahabhutaElement {
  id: string;
  nameEn: string;
  nameHi: string;
  sanskritName: string;
  symbol: string;
  roleInFarmingEn: string;
  roleInFarmingHi: string;
  traditionalSadhanaEn: string;
  traditionalSadhanaHi: string;
  farmPracticesEn: string[];
  farmPracticesHi: string[];
  scientificPrincipleEn: string;
  scientificPrincipleHi: string;
  associatedFormulations: string[];
  color: string;
  bgGradient: string;
}

export interface CropStageGuide {
  stageNameEn: string;
  stageNameHi: string;
  daysAfterSowing: string;
  recommendedFormulation: string;
  dosageEn: string;
  dosageHi: string;
  soilWaterPracticeEn: string;
  soilWaterPracticeHi: string;
}

export interface CropGuide {
  id: string;
  nameEn: string;
  nameHi: string;
  botanicalName: string;
  categoryEn: string;
  categoryHi: string;
  seasonEn: string;
  seasonHi: string;
  overviewEn: string;
  overviewHi: string;
  stages: CropStageGuide[];
  soilManagementEn: string;
  soilManagementHi: string;
  waterManagementEn: string;
  waterManagementHi: string;
  commonDiseasesEn: string[];
  commonDiseasesHi: string[];
  pestRemedyEn: string;
  pestRemedyHi: string;
}

export interface ProblemSolution {
  id: string;
  titleEn: string;
  titleHi: string;
  categoryEn: string;
  categoryHi: string;
  severity: 'high' | 'medium' | 'low';
  symptomsEn: string[];
  symptomsHi: string[];
  rootCausesEn: string[];
  rootCausesHi: string[];
  naturalRemedyEn: string;
  naturalRemedyHi: string;
  recommendedFormulations: string[];
  preventivePracticeEn: string;
  preventivePracticeHi: string;
  scientificMechanismEn: string;
  scientificMechanismHi: string;
}

export interface ScientificTopic {
  id: string;
  titleEn: string;
  titleHi: string;
  summaryEn: string;
  summaryHi: string;
  detailedAnalysisEn: string;
  detailedAnalysisHi: string;
  keyOrganismsOrCompounds: string[];
  measurableBenefitEn: string;
  measurableBenefitHi: string;
  iconType: string;
}

export interface VideoGuide {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'formulations' | 'techniques' | 'soil' | 'crop' | 'experts';
  categoryLabelEn: string;
  categoryLabelHi: string;
  duration: string;
  youtubeId: string;
  instructorEn: string;
  instructorHi: string;
  descriptionEn: string;
  descriptionHi: string;
}

export interface FarmerFeedback {
  id: string;
  farmerName?: string;
  state: string;
  district: string;
  crop: string;
  formulationUsed: string;
  experienceText: string;
  yieldObservation: string;
  costReductionPercentage?: number;
  submittedAt: string;
  isVerified: boolean;
  photoUrl?: string;
}
