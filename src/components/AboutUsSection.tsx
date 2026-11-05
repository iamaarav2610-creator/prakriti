import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { Award, BookOpen, Microscope, Cpu, ShieldCheck, CheckCircle2, Globe, HeartHandshake } from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about-us" className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>{t('National Science & Innovation Initiative', 'राष्ट्रीय विज्ञान एवं नवाचार पहल')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('Agro-Ecological Mission', 'कृषि-पारिस्थितिक मिशन')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-3 [text-wrap:balance]">
            {t(UI_STRINGS.aboutSection.headingEn, UI_STRINGS.aboutSection.headingHi)}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {t(UI_STRINGS.aboutSection.subheadingEn, UI_STRINGS.aboutSection.subheadingHi)}
          </p>
        </div>

        {/* The 3 Core Pillars Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Pillar 1: TRADITION */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-amber-800" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                {t('Pillar 01', 'प्रथम स्तम्भ')}
              </span>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                {t('TRADITION (परंपरा)', 'परंपरा (Tradition)')}
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {t(
                  'Preserving indigenous Indian agricultural wisdom passed down through generations—the sacred Panchmahabhuta Sadhana, indigenous cow microbial culture, and seasonal biological rhythms.',
                  'पीढ़ियों से संजोए गए भारतीय पारंपरिक कृषि ज्ञान का संरक्षण—पवित्र पंचमहाभूत साधना, देशी गौ-संस्कृति, सजीव मिट्टी और ऋतु चक्र के अनुसार फसल पोषण।'
                )}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500 font-medium">
              {t('Indigenous Vrkshayurveda & Folk Wisdom', 'वृक्षायुर्वेद एवं लोक ज्ञान का दस्तावेजीकरण')}
            </div>
          </div>

          {/* Pillar 2: SCIENCE */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4">
                <Microscope className="w-6 h-6 text-emerald-800" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                {t('Pillar 02', 'द्वितीय स्तम्भ')}
              </span>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                {t('SCIENCE (विज्ञान)', 'विज्ञान (Science)')}
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {t(
                  'Decoding the biochemical and microbiological mechanisms: enzymatic digestion, mycorrhizal glomalin production, soil aggregate dynamics, and predator-prey trophic cascades.',
                  'सूक्ष्मजीव विज्ञान एवं जैव रसायन के माध्यम से पारंपरिक योगों का प्रमाणीकरण: एंजाइम क्रियाएं, माइकोराइजा का ग्लोमालिन निर्माण और पोषक चक्र।'
                )}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500 font-medium">
              {t('Empirical Microbiology & Soil Chemistry', 'प्रायोगिक सूक्ष्मजीव विज्ञान एवं मृदा रसायन')}
            </div>
          </div>

          {/* Pillar 3: TECHNOLOGY */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-900 flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-sky-800" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-1">
                {t('Pillar 03', 'तृतीय स्तम्भ')}
              </span>
              <h3 className="text-xl font-bold text-stone-900 mb-2">
                {t('TECHNOLOGY (तकनीक)', 'तकनीक (Technology)')}
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {t(
                  'Democratizing knowledge through digital innovation: seamless bilingual interface, instant offline-ready QR codes for barrels, dynamic land-area dosage calculators, and video learning.',
                  'डिजिटल नवाचार से ज्ञान का लोकतंत्रीकरण: त्वरित द्विभाषी सुविधा, ड्रमों हेतु वाटरप्रूफ क्यूआर कोड, खेत के आकार अनुसार कैलकुलेटर और वीडियो शिक्षण।'
                )}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500 font-medium">
              {t('Digital Extension for the Last-Mile Farmer', 'अंतिम छोर के किसान तक डिजिटल पहुंच')}
            </div>
          </div>
        </div>

        {/* National Science Competition Dossier Card */}
        <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-emerald-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-2">
                <Award className="w-4 h-4" />
                <span>{t('National Science & Innovation Model', 'राष्ट्रीय विज्ञान एवं नवाचार मॉडल')}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t(
                  'Alignment with National Agro-Ecological Missions',
                  'राष्ट्रीय कृषि-पारिस्थितिक मिशनों से समन्वय'
                )}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs bg-emerald-900/90 border border-emerald-700 px-3 py-1.5 rounded-lg text-emerald-200">
              <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
              <span>NMNF & PKVY Aligned Architecture</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-emerald-100">
            <div>
              <h4 className="font-bold text-white mb-1.5">
                {t('Economic Sovereignty', 'आर्थिक स्वावलंबन')}
              </h4>
              <p className="leading-relaxed text-emerald-200/90 text-xs">
                {t(
                  'Eliminating recurrent expenditure on commercial synthetic inputs frees smallholders from predatory moneylenders.',
                  'रासायनिक खादों और कीटनाशकों पर होने वाले खर्च को समाप्त कर छोटे किसानों को कर्ज-मुक्त और आत्मनिर्भर बनाना।'
                )}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1.5">
                {t('Ecological Stewardship', 'पारिस्थितिक संरक्षण')}
              </h4>
              <p className="leading-relaxed text-emerald-200/90 text-xs">
                {t(
                  'Halting nitrate runoff into rivers, sequestering carbon in subterranean humus, and protecting honeybee pollinators.',
                  'नदियों में रासायनिक बहाव रोकना, मिट्टी में कार्बन का स्थायी संचय करना, और परागणकारी मधुमक्खियों की रक्षा।'
                )}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1.5">
                {t('Open-Access Scientific Rigor', 'खुला वैज्ञानिक अनुसंधान')}
              </h4>
              <p className="leading-relaxed text-emerald-200/90 text-xs">
                {t(
                  'Transparent verification tags, avoidance of fabricated claims, and ongoing partnership with state agricultural universities.',
                  'पारदर्शी सत्यापन नीतियां, मनगढ़ंत दावों से बचाव, और राज्य कृषि विश्वविद्यालयों के साथ संयुक्त अनुसंधान।'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
