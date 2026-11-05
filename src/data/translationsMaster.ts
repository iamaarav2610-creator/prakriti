import { Language } from '../types';
import { UI_TRANSLATIONS } from './translationsUI';
import { FORMULATIONS_TRANSLATIONS } from './translationsFormulations';
import { CONTENT_TRANSLATIONS } from './translationsContent';
import { LANGUAGE_MAP } from './languages';

// Master resolver
export function getMasterTranslation(
  keyOrText: string,
  lang: Language,
  fallbackHi?: string
): string {
  // If English is selected, return original English text or key lookup
  if (lang === 'en') {
    if (UI_TRANSLATIONS[keyOrText]?.en) return UI_TRANSLATIONS[keyOrText].en;
    if (CONTENT_TRANSLATIONS[keyOrText]?.en) return CONTENT_TRANSLATIONS[keyOrText].en;
    return keyOrText;
  }

  // 1. Direct key match in UI_TRANSLATIONS
  if (UI_TRANSLATIONS[keyOrText]?.[lang]) {
    return UI_TRANSLATIONS[keyOrText][lang];
  }

  // 2. Direct key match in CONTENT_TRANSLATIONS
  if (CONTENT_TRANSLATIONS[keyOrText]?.[lang]) {
    return CONTENT_TRANSLATIONS[keyOrText][lang];
  }

  // 3. Search UI_TRANSLATIONS by English value
  for (const key in UI_TRANSLATIONS) {
    if (UI_TRANSLATIONS[key].en.toLowerCase() === keyOrText.toLowerCase()) {
      if (UI_TRANSLATIONS[key][lang]) return UI_TRANSLATIONS[key][lang];
    }
  }

  // 4. Search CONTENT_TRANSLATIONS by English value
  for (const key in CONTENT_TRANSLATIONS) {
    if (CONTENT_TRANSLATIONS[key].en.toLowerCase() === keyOrText.toLowerCase()) {
      if (CONTENT_TRANSLATIONS[key][lang]) return CONTENT_TRANSLATIONS[key][lang];
    }
  }

  // 5. Formulation exact matches
  for (const fId in FORMULATIONS_TRANSLATIONS) {
    const f = FORMULATIONS_TRANSLATIONS[fId];
    if (f.name.en.toLowerCase() === keyOrText.toLowerCase()) {
      return f.name[lang] || f.name.en;
    }
    if (f.tagline.en.toLowerCase() === keyOrText.toLowerCase()) {
      return f.tagline[lang] || f.tagline.en;
    }
    if (f.category.en.toLowerCase() === keyOrText.toLowerCase()) {
      return f.category[lang] || f.category.en;
    }
    if (f.primaryAction.en.toLowerCase() === keyOrText.toLowerCase()) {
      return f.primaryAction[lang] || f.primaryAction.en;
    }
  }

  // 6. If Hindi is chosen and fallbackHi exists
  if (lang === 'hi' && fallbackHi) {
    return fallbackHi;
  }

  // 7. If fallbackHi is available and we can provide the closest Indic translation or fallback
  if (fallbackHi && (lang === 'sa' || lang === 'mr' || lang === 'ne' || lang === 'mai' || lang === 'doi' || lang === 'kok' || lang === 'brx')) {
    // For languages that use Devanagari script, fallback to Hindi text if specific translation is absent
    return fallbackHi;
  }

  // Default fallback to English text
  return fallbackHi || keyOrText;
}

// Helpers for structured entities
export function getLocalizedFormulationName(slugOrId: string, lang: Language): string {
  const meta = FORMULATIONS_TRANSLATIONS[slugOrId];
  if (!meta) return slugOrId;
  return meta.name[lang] || meta.name.en;
}

export function getLocalizedFormulationTagline(slugOrId: string, lang: Language): string {
  const meta = FORMULATIONS_TRANSLATIONS[slugOrId];
  if (!meta) return '';
  return meta.tagline[lang] || meta.tagline.en;
}

export function getLocalizedFormulationCategory(slugOrId: string, lang: Language): string {
  const meta = FORMULATIONS_TRANSLATIONS[slugOrId];
  if (!meta) return '';
  return meta.category[lang] || meta.category.en;
}

export function getLocalizedFormulationPrimaryAction(slugOrId: string, lang: Language): string {
  const meta = FORMULATIONS_TRANSLATIONS[slugOrId];
  if (!meta) return '';
  return meta.primaryAction[lang] || meta.primaryAction.en;
}

export function getLocalizedFormulationScriptName(slugOrId: string, lang: Language): string {
  const meta = FORMULATIONS_TRANSLATIONS[slugOrId];
  if (!meta) return '';
  return meta.scriptName?.[lang] || meta.scriptName?.hi || '';
}

export function getLocalizedElementName(id: string, lang: Language): string {
  const key = `element.${id}`;
  if (CONTENT_TRANSLATIONS[key]?.[lang]) {
    return CONTENT_TRANSLATIONS[key][lang];
  }
  return id;
}

export function getLocalizedCropName(id: string, lang: Language): string {
  const key = `crop.${id}`;
  if (CONTENT_TRANSLATIONS[key]?.[lang]) {
    return CONTENT_TRANSLATIONS[key][lang];
  }
  return id;
}

export function getLocalizedProblemTitle(id: string, lang: Language): string {
  // Map problem IDs
  let key = '';
  if (id === 'poor-soil-health') key = 'problem.soilCompaction';
  else if (id === 'low-microbial-activity') key = 'problem.lowMicrobes';
  else if (id === 'pest-infestation') key = 'problem.pestAttack';
  else if (id === 'nutrient-deficiencies') key = 'problem.nutrientDeficiency';
  else if (id === 'water-management') key = 'problem.waterStress';
  else if (id === 'declining-soil-fertility') key = 'problem.salinity';

  if (key && CONTENT_TRANSLATIONS[key]?.[lang]) {
    return CONTENT_TRANSLATIONS[key][lang];
  }
  return id;
}
