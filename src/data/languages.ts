import { Language, LanguageMeta } from '../types';

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  {
    code: 'en',
    name: 'English',
    englishName: 'English',
    script: 'Latin',
    dir: 'ltr',
    region: 'Pan-India / Global (Default)'
  },
  {
    code: 'hi',
    name: 'हिन्दी',
    englishName: 'Hindi',
    script: 'Devanagari',
    dir: 'ltr',
    region: 'North & Central India'
  },
  {
    code: 'as',
    name: 'অসমীয়া',
    englishName: 'Assamese',
    script: 'Bengali-Assamese',
    dir: 'ltr',
    region: 'Assam & North-East'
  },
  {
    code: 'bn',
    name: 'বাংলা',
    englishName: 'Bengali',
    script: 'Bengali',
    dir: 'ltr',
    region: 'West Bengal & Tripura'
  },
  {
    code: 'brx',
    name: 'बड़ो',
    englishName: 'Bodo',
    script: 'Devanagari',
    dir: 'ltr',
    region: 'Bodoland (Assam)'
  },
  {
    code: 'doi',
    name: 'डोगरी',
    englishName: 'Dogri',
    script: 'Devanagari',
    dir: 'ltr',
    region: 'Jammu & Kashmir'
  },
  {
    code: 'gu',
    name: 'ગુજરાતી',
    englishName: 'Gujarati',
    script: 'Gujarati',
    dir: 'ltr',
    region: 'Gujarat'
  },
  {
    code: 'kn',
    name: 'ಕನ್ನಡ',
    englishName: 'Kannada',
    script: 'Kannada',
    dir: 'ltr',
    region: 'Karnataka'
  },
  {
    code: 'ks',
    name: 'كٲشُر',
    englishName: 'Kashmiri',
    script: 'Perso-Arabic (Nastaliq)',
    dir: 'rtl',
    region: 'Kashmir Valley'
  },
  {
    code: 'kok',
    name: 'कोंकणी',
    englishName: 'Konkani',
    script: 'Devanagari',
    dir: 'ltr',
    region: 'Goa & Coastal Karnataka'
  },
  {
    code: 'mai',
    name: 'मैथिली',
    englishName: 'Maithili',
    script: 'Devanagari',
    dir: 'ltr',
    region: 'Bihar & Jharkhand'
  },
  {
    code: 'ml',
    name: 'മലയാളം',
    englishName: 'Malayalam',
    script: 'Malayalam',
    dir: 'ltr',
    region: 'Kerala & Lakshadweep'
  },
  {
    code: 'mni',
    name: 'মৈতৈলোন্',
    englishName: 'Manipuri (Meitei)',
    script: 'Bengali / Meetei Mayek',
    dir: 'ltr',
    region: 'Manipur'
  },
  {
    code: 'mr',
    name: 'मराठी',
    englishName: 'Marathi',
    script: 'Devanagari',
    dir: 'ltr',
    region: 'Maharashtra'
  },
  {
    code: 'ne',
    name: 'नेपाली',
    englishName: 'Nepali',
    script: 'Devanagari',
    dir: 'ltr',
    region: 'Sikkim & West Bengal'
  },
  {
    code: 'or',
    name: 'ଓଡ଼ିଆ',
    englishName: 'Odia',
    script: 'Odia',
    dir: 'ltr',
    region: 'Odisha'
  },
  {
    code: 'pa',
    name: 'ਪੰਜਾਬੀ',
    englishName: 'Punjabi',
    script: 'Gurmukhi',
    dir: 'ltr',
    region: 'Punjab'
  },
  {
    code: 'sa',
    name: 'संस्कृतम्',
    englishName: 'Sanskrit',
    script: 'Devanagari',
    dir: 'ltr',
    region: 'Classical / Pan-India'
  },
  {
    code: 'sat',
    name: 'ᱥᱟᱱᱛᱟᱲᱤ',
    englishName: 'Santali',
    script: 'Ol Chiki / Devanagari',
    dir: 'ltr',
    region: 'Jharkhand, Odisha & West Bengal'
  },
  {
    code: 'sd',
    name: 'سنڌي',
    englishName: 'Sindhi',
    script: 'Perso-Arabic',
    dir: 'rtl',
    region: 'Sindhi Diaspora / Western India'
  },
  {
    code: 'ta',
    name: 'தமிழ்',
    englishName: 'Tamil',
    script: 'Tamil',
    dir: 'ltr',
    region: 'Tamil Nadu & Puducherry'
  },
  {
    code: 'te',
    name: 'తెలుగు',
    englishName: 'Telugu',
    script: 'Telugu',
    dir: 'ltr',
    region: 'Andhra Pradesh & Telangana'
  },
  {
    code: 'ur',
    name: 'اردو',
    englishName: 'Urdu',
    script: 'Perso-Arabic (Nastaliq)',
    dir: 'rtl',
    region: 'Pan-India'
  }
];

export const LANGUAGE_MAP: Record<Language, LanguageMeta> = SUPPORTED_LANGUAGES.reduce(
  (acc, lang) => {
    acc[lang.code] = lang;
    return acc;
  },
  {} as Record<Language, LanguageMeta>
);
