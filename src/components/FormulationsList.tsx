import React, { useState } from 'react';
import { Formulation } from '../types';
import { FORMULATIONS } from '../data/formulationsData';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { Search, Sparkles, Clock, Calendar, ArrowRight, QrCode, Filter } from 'lucide-react';
import {
  getLocalizedFormulationName,
  getLocalizedFormulationTagline,
  getLocalizedFormulationCategory,
  getLocalizedFormulationPrimaryAction,
  getLocalizedFormulationScriptName
} from '../data/translationsMaster';

interface FormulationsListProps {
  onSelectFormulation: (formulation: Formulation) => void;
  onOpenQrModal: (formulation: Formulation) => void;
}

export const FormulationsList: React.FC<FormulationsListProps> = ({
  onSelectFormulation,
  onOpenQrModal,
}) => {
  const { lang, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'Prithvi' | 'Jal' | 'Agni' | 'Vayu' | 'Akash'>('all');

  const filteredFormulations = FORMULATIONS.filter((item) => {
    const matchesSearch =
      item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nameHi.includes(searchQuery) ||
      item.taglineEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.taglineHi.includes(searchQuery) ||
      item.categoryEn.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === 'all' || item.targetElement === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section id="formulations" className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>{t('Sacred Bio-Inputs', 'दिव्य जैविक घटक')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('Nine Master Formulations', 'नौ प्रमुख प्राकृतिक योग')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-3 [text-wrap:balance]">
            {t(UI_STRINGS.formulationsSection.headingEn, UI_STRINGS.formulationsSection.headingHi)}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {t(UI_STRINGS.formulationsSection.subheadingEn, UI_STRINGS.formulationsSection.subheadingHi)}
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative max-w-sm w-full">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t('Search formulations or pests...', 'योग, बीमारी या सामग्री खोजें...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-800/20 focus:border-emerald-800"
            />
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers per frontend-design guidelines) */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-lg overflow-x-auto scrollbar-none">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('All (9)', 'सभी (9)')}
            </button>
            <button
              onClick={() => setSelectedFilter('Prithvi')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'Prithvi'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Earth (Prithvi)', 'पृथ्वी')}
            </button>
            <button
              onClick={() => setSelectedFilter('Jal')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'Jal'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Water (Jal)', 'जल')}
            </button>
            <button
              onClick={() => setSelectedFilter('Agni')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'Agni'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Fire (Agni)', 'अग्नि')}
            </button>
            <button
              onClick={() => setSelectedFilter('Vayu')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'Vayu'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Air (Vayu)', 'वायु')}
            </button>
            <button
              onClick={() => setSelectedFilter('Akash')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                selectedFilter === 'Akash'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Space (Akash)', 'आकाश')}
            </button>
          </div>
        </div>

        {/* Formulations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFormulations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between p-5 group hover:border-emerald-600/60"
            >
              <div>
                {/* Clean unboxed metadata kicker with typographic separator per Section 1.A zero-pill discipline */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-emerald-900 font-bold">0{item.number}.</span>
                    <span>{getLocalizedFormulationCategory(item.slug, lang) || t(item.categoryEn, item.categoryHi)}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-stone-700">{item.targetElement}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQrModal(item);
                    }}
                    title={t('View QR Code', 'क्यूआर कोड देखें')}
                    className="p-1 text-stone-400 hover:text-emerald-900 rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
                  >
                    <QrCode className="w-4 h-4" />
                  </button>
                </div>

                {/* Primary Card Title */}
                <div className="flex items-baseline justify-between gap-2 mb-1.5">
                  <h3 className="text-xl font-bold text-stone-900 tracking-tight group-hover:text-emerald-950 transition-colors">
                    {getLocalizedFormulationName(item.slug, lang)}
                  </h3>
                  <span className="font-hindi text-sm font-semibold text-emerald-800">
                    {getLocalizedFormulationScriptName(item.slug, lang) || item.devanagariScript}
                  </span>
                </div>

                {/* Subtitle / Tagline */}
                <p className="text-xs text-stone-500 italic mb-3">
                  {getLocalizedFormulationTagline(item.slug, lang)}
                </p>

                {/* Primary Action Description */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                  {getLocalizedFormulationPrimaryAction(item.slug, lang)}
                </p>

                {/* Key Metrics / Attributes */}
                <div className="border-t border-stone-100 pt-3 space-y-1.5 text-xs text-stone-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="text-stone-500">{t('Prep: ', 'निर्माण: ')}</span>
                    <span className="font-medium text-stone-800">{t(item.preparationTimeEn, item.preparationTimeHi)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="text-stone-500">{t('Shelf Life: ', 'वैधता: ')}</span>
                    <span className="font-medium text-stone-800">{t(item.shelfLifeEn, item.shelfLifeHi)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-900">
                  {item.ingredients.length} {t('Key Ingredients', 'मुख्य घटक')}
                </span>
                <button
                  onClick={() => onSelectFormulation(item)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-colors cursor-pointer"
                >
                  <span>{t('View Full Method', 'पूरी विधि देखें')}</span>
                  <ArrowRight className="w-3 h-3 text-emerald-800" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredFormulations.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-stone-200">
            <p className="text-sm text-stone-500 mb-2">
              {t('No formulations matched your search criteria.', 'आपकी खोज के अनुसार कोई योग नहीं मिला।')}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('all');
              }}
              className="text-xs font-semibold text-emerald-800 hover:underline"
            >
              {t('Reset filters', 'फिल्टर रीसेट करें')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
