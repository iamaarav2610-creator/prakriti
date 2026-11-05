import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { Sprout, Heart, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { lang, setLang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-900 text-amber-300 flex items-center justify-center">
                <Sprout className="w-4 h-4 text-amber-300" />
              </div>
              <span className="font-serif-brand text-xl font-bold tracking-wider text-white">
                PRAKRITI
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t(UI_STRINGS.brand.taglineEn, UI_STRINGS.brand.taglineHi)}
            </p>
            <div className="pt-2 text-[11px] text-stone-500">
              {t(
                'A Digital Initiative for Indigenous Natural Agronomy & Sustainable Agriculture.',
                'पारंपरिक प्राकृतिक कृषि एवं सतत विकास हेतु समर्पित डिजिटल पहल।'
              )}
            </div>
          </div>

          {/* Col 2: Nine Formulations Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {t('Nine Formulations', 'नौ प्रमुख योग')}
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Jeevanu Jal (जीवाणु जल)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Kadva Rasayan (कड़वा रसायन)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Khatta Rasayan (खट्टा रसायन)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Meetha Rasayan (मीठा रसायन)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Anu Jal & Urja Jal (अणु व ऊर्जा जल)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('formulations')}
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left"
                >
                  Sadras & Jev Rasayan (षड्रस व जैव रसायन)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Knowledge Portals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              {t('Knowledge Portals', 'ज्ञान प्रभाग')}
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('panchmahabhutas')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t('Panchmahabhuto Ki Sadhana', 'पंचमहाभूत साधना')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('crop-guide')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t('Crop-Wise Management Guides', 'फसलवार कृषि मार्गदर्शिका')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('problem-solution')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t('Problem-Solution Diagnostics', 'समस्या व जैविक समाधान')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('science-centre')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t('Rhizosphere & Microbial Science', 'सूक्ष्मजीव विज्ञान व शोध')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('video-hub')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t('Video Learning Centre', 'वीडियो शिक्षण केंद्र')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('qr-codes')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  {t('QR Code Placard Generator', 'क्यूआर कोड प्लेकार्ड जनरेटर')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: National Vision & 22 Languages Switch */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              {t('22 Official Languages of India', 'भारत की 22 आधिकारिक भाषाएं')}
            </h4>
            <p className="text-xs text-stone-400">
              {t(
                'Full support for all 22 Eighth Schedule languages + English with instant switching and RTL script rendering.',
                'संविधान की आठवीं अनुसूची की सभी 22 आधिकारिक भाषाओं एवं अंग्रेजी में संपूर्ण अनुवाद उपलब्ध।'
              )}
            </p>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {[
                { code: 'en', label: 'English' },
                { code: 'hi', label: 'हिन्दी' },
                { code: 'bn', label: 'বাংলা' },
                { code: 'te', label: 'తెలుగు' },
                { code: 'mr', label: 'मराठी' },
                { code: 'ta', label: 'தமிழ்' },
                { code: 'gu', label: 'ગુજરાતી' },
                { code: 'ur', label: 'اردو' },
              ].map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code as any)}
                  className={`px-2.5 py-1 text-[11px] rounded font-medium transition-colors cursor-pointer ${
                    lang === item.code
                      ? 'bg-amber-400 text-stone-950 font-bold'
                      : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>{t('Back to top', 'शीर्ष पर जाएं')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} PRAKRITI — Digital Knowledge Hub for Natural Farming.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Tradition</span>
            <span aria-hidden="true">·</span>
            <span>Science</span>
            <span aria-hidden="true">·</span>
            <span>Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
