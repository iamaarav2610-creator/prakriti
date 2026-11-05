import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Language, LanguageMeta } from '../types';
import { LANGUAGE_MAP, SUPPORTED_LANGUAGES } from '../data/languages';
import { getMasterTranslation } from '../data/translationsMaster';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (enTextOrKey: string, fallbackHi?: string) => string;
  tKey: (key: string) => string;
  isRTL: boolean;
  meta: LanguageMeta;
  languages: LanguageMeta[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'prakriti_preferred_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && LANGUAGE_MAP[saved]) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'en'; // English as default per user request
  });

  const meta = useMemo(() => LANGUAGE_MAP[lang] || LANGUAGE_MAP.en, [lang]);
  const isRTL = meta.dir === 'rtl';

  const setLang = (newLang: Language) => {
    if (LANGUAGE_MAP[newLang]) {
      setLangState(newLang);
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {
        // ignore storage error
      }
    }
  };

  const toggleLang = () => {
    // Quick toggle between English and Hindi
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  const t = (enTextOrKey: string, fallbackHi?: string): string => {
    return getMasterTranslation(enTextOrKey, lang, fallbackHi);
  };

  const tKey = (key: string): string => {
    return getMasterTranslation(key, lang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    if (isRTL) {
      document.documentElement.classList.add('rtl-lang');
    } else {
      document.documentElement.classList.remove('rtl-lang');
    }
  }, [lang, isRTL]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        tKey,
        isRTL,
        meta,
        languages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
