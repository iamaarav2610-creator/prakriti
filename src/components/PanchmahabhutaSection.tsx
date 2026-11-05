import React, { useState } from 'react';
import { PANCHMAHABHUTAS } from '../data/panchmahabhutaData';
import { MahabhutaElement, Formulation } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { Sparkles, ArrowRight, BookOpen, Microscope, Sprout } from 'lucide-react';
import { getLocalizedElementName } from '../data/translationsMaster';

interface PanchmahabhutaSectionProps {
  onSelectFormulationByName?: (name: string) => void;
}

export const PanchmahabhutaSection: React.FC<PanchmahabhutaSectionProps> = ({
  onSelectFormulationByName,
}) => {
  const { lang, t } = useLanguage();
  const [selectedElement, setSelectedElement] = useState<MahabhutaElement>(PANCHMAHABHUTAS[0]);

  return (
    <section id="panchmahabhutas" className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            <span>{t('Ancient Ecological Philosophy', 'प्राचीन पारिस्थितिक दर्शन')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('The 5 Sacred Elements', 'पंचमहाभूत अवधारणा')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-3 [text-wrap:balance]">
            {t(UI_STRINGS.panchmahabhutaSection.headingEn, UI_STRINGS.panchmahabhutaSection.headingHi)}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {t(UI_STRINGS.panchmahabhutaSection.subheadingEn, UI_STRINGS.panchmahabhutaSection.subheadingHi)}
          </p>
        </div>

        {/* Hero Diagram Card */}
        <div className="mb-10 bg-white rounded-2xl border border-stone-200 p-3 sm:p-4 shadow-xs overflow-hidden">
          <div className="relative rounded-xl overflow-hidden aspect-21/9 max-h-[380px]">
            <img
              src="/src/assets/images/panchmahabhuta_elements_1793556495783.jpg"
              alt="Panchmahabhutas educational illustration showing earth, water, fire, air, and space in agricultural harmony"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
              <div className="text-white max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 block">
                  {t('The Living Cosmological Circuit', 'प्राकृतिक ऊर्जा चक्र')}
                </span>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                  {t(
                    'Natural farming is the harmonization of Earth (Prithvi), Water (Jal), Solar Energy (Agni), Atmospheric Gases (Vayu), and Cosmic Spatial Geometry (Akash).',
                    'प्राकृतिक खेती भूमि, जल, सूर्य की अग्नि, वायुमंडल की प्राणवायु और आकाश के ब्रह्मांडीय नियमों के समन्वय से ही संभव होती है।'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Five Elements Tab Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
          {PANCHMAHABHUTAS.map((el) => {
            const isSelected = selectedElement.id === el.id;
            return (
              <button
                key={el.id}
                onClick={() => setSelectedElement(el)}
                className={`p-3.5 rounded-xl border transition-all text-left flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-900 text-white border-emerald-900 shadow-md scale-[1.02]'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{el.symbol}</span>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                      isSelected ? 'text-amber-300' : 'text-stone-400'
                    }`}
                  >
                    {el.sanskritName}
                  </span>
                </div>
                <div>
                  <h3 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                    {getLocalizedElementName(el.id, lang) || t(el.nameEn.split(' ')[0], el.nameHi.split(' ')[0])}
                  </h3>
                  <span
                    className={`text-[11px] block mt-0.5 ${
                      isSelected ? 'text-emerald-200' : 'text-stone-500'
                    }`}
                  >
                    {el.associatedFormulations.length} {t('Formulations', 'संबंधित योग')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Element Detail Card (2-Zone split) */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Traditional Sadhana & Role */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
                <span>{selectedElement.symbol}</span>
                <span>{getLocalizedElementName(selectedElement.id, lang) || t(selectedElement.nameEn, selectedElement.nameHi)}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedElement.sanskritName}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mb-3">
                {t('Role in Natural Farming', 'प्राकृतिक खेती में भूमिका')}
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                {t(selectedElement.roleInFarmingEn, selectedElement.roleInFarmingHi)}
              </p>
            </div>

            {/* Traditional Sadhana Box */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-xs uppercase mb-2">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>{t(UI_STRINGS.panchmahabhutaSection.sadhanaTitle.en, UI_STRINGS.panchmahabhutaSection.sadhanaTitle.hi)}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                {t(selectedElement.traditionalSadhanaEn, selectedElement.traditionalSadhanaHi)}
              </p>
            </div>

            {/* Modern Scientific Principle */}
            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-200">
              <div className="flex items-center gap-2 text-sky-950 font-bold text-xs uppercase mb-2">
                <Microscope className="w-4 h-4 text-sky-700" />
                <span>{t(UI_STRINGS.panchmahabhutaSection.scienceTitle.en, UI_STRINGS.panchmahabhutaSection.scienceTitle.hi)}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-mono text-[12px]">
                {t(selectedElement.scientificPrincipleEn, selectedElement.scientificPrincipleHi)}
              </p>
            </div>
          </div>

          {/* Right Column: Field Practices & Associated Formulations */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                <Sprout className="w-4 h-4 text-emerald-800" />
                <span>{t(UI_STRINGS.panchmahabhutaSection.practicesTitle.en, UI_STRINGS.panchmahabhutaSection.practicesTitle.hi)}</span>
              </h4>
              <ul className="space-y-2.5">
                {(lang === 'hi' ? selectedElement.farmPracticesHi : selectedElement.farmPracticesEn).map(
                  (practice, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-stone-700 p-2.5 bg-stone-50 rounded-lg border border-stone-200/80 leading-relaxed flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0 mt-1.5" />
                      <span>{practice}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Linked Formulations */}
            <div className="border-t border-stone-200 pt-5">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-2">
                {t('Dedicated Master Formulations:', 'इस तत्त्व के प्रधान योग:')}
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedElement.associatedFormulations.map((formName, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectFormulationByName?.(formName)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-lg border border-emerald-300 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-emerald-800" />
                    <span>{formName}</span>
                    <ArrowRight className="w-3 h-3 text-emerald-800" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
