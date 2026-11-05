import React, { useState } from 'react';
import { SCIENTIFIC_TOPICS } from '../data/scienceData';
import { ScientificTopic } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { Microscope, Atom, RefreshCw, Layers, Bug, Droplet, Shield, Globe, CheckCircle2 } from 'lucide-react';

export const ScienceCentreSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState<ScientificTopic>(SCIENTIFIC_TOPICS[0]);

  const getTopicIcon = (type: string) => {
    switch (type) {
      case 'microscope':
        return <Microscope className="w-4 h-4" />;
      case 'atom':
        return <Atom className="w-4 h-4" />;
      case 'refresh':
        return <RefreshCw className="w-4 h-4" />;
      case 'layers':
        return <Layers className="w-4 h-4" />;
      case 'bug':
        return <Bug className="w-4 h-4" />;
      case 'droplet':
        return <Droplet className="w-4 h-4" />;
      case 'shield':
        return <Shield className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  return (
    <section id="science-centre" className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>{t('Empirical Microbiology', 'प्रायोगिक सूक्ष्मजीव विज्ञान')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('Peer-Reviewed Agro-Ecology', 'प्रमाणित कृषि-पारिस्थितिकी')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-3 [text-wrap:balance]">
            {t(UI_STRINGS.scienceSection.headingEn, UI_STRINGS.scienceSection.headingHi)}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {t(UI_STRINGS.scienceSection.subheadingEn, UI_STRINGS.scienceSection.subheadingHi)}
          </p>
        </div>

        {/* Scientific Rhizosphere Showcase Card */}
        <div className="mb-10 bg-white rounded-2xl border border-stone-200 p-4 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 rounded-xl overflow-hidden aspect-4/3 max-h-[300px]">
            <img
              src="/src/assets/images/microbial_soil_rhizosphere_1793556496170.jpg"
              alt="Scientific microscopic diagram of living rhizosphere with mycorrhizae and Rhizobium nodules"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-7 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              {t('The Living Rhizosphere Economy', 'जड़ क्षेत्र की सूक्ष्म-जैविक अर्थव्यवस्था')}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900">
              {t(
                'Subterranean Symbiosis: How Plant Exudates Power Bacterial Colonies',
                'पौधों की जड़ें और मित्र जीवाणु: प्रकृति का अद्भुत सहजीवन'
              )}
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {t(
                'Plants invest up to 30% of their total daily photosynthetic sugar energy directly into root secretions. These exudates attract billions of mycorrhizal fungal hyphae and Bacillus colonies that solubilize locked zinc, boron, and phosphorus in direct trade.',
                'पौधे अपनी दैनिक धूप से बनी ऊर्जा का 30% हिस्सा मीठे रस के रूप में जड़ों से बाहर मिट्टी में छोड़ते हैं। यह भोजन मित्र जीवाणुओं और कवक को आकर्षित करता है जो बदले में मिट्टी के गहरे खनिजों को घोलकर पौधे को देते हैं।'
              )}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs px-2.5 py-1 bg-stone-100 rounded text-stone-700 font-mono">
                Mycorrhizal Hyphae
              </span>
              <span className="text-xs px-2.5 py-1 bg-stone-100 rounded text-stone-700 font-mono">
                Rhizobium Nodules
              </span>
              <span className="text-xs px-2.5 py-1 bg-stone-100 rounded text-stone-700 font-mono">
                Glomalin Protein
              </span>
            </div>
          </div>
        </div>

        {/* 8 Science Topics Grid Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {SCIENTIFIC_TOPICS.map((topic) => {
            const isSelected = selectedTopic.id === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic)}
                className={`p-3 rounded-xl border text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-950 text-white border-emerald-950 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg shrink-0 ${
                    isSelected ? 'bg-amber-400 text-emerald-950' : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {getTopicIcon(topic.iconType)}
                </div>
                <div className="min-w-0">
                  <h4 className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                    {t(topic.titleEn.split(':')[0], topic.titleHi.split(':')[0])}
                  </h4>
                  <span
                    className={`text-[10px] block truncate ${
                      isSelected ? 'text-stone-300' : 'text-stone-400'
                    }`}
                  >
                    {topic.keyOrganismsOrCompounds.length} {t('Key factors', 'प्रमुख कारक')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Topic Analysis View */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block mb-1">
              {t('Scientific Dossier', 'वैज्ञानिक अनुसंधान दस्तावेज')}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              {t(selectedTopic.titleEn, selectedTopic.titleHi)}
            </h3>
            <p className="text-sm font-medium text-stone-800 italic">
              &ldquo;{t(selectedTopic.summaryEn, selectedTopic.summaryHi)}&rdquo;
            </p>
          </div>

          <div className="prose prose-stone max-w-none text-stone-700 text-xs sm:text-sm leading-relaxed">
            <p>{t(selectedTopic.detailedAnalysisEn, selectedTopic.detailedAnalysisHi)}</p>
          </div>

          {/* Key Organisms & Measurable Agronomic Benefit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2.5">
                {t('Key Microorganisms & Active Compounds', 'प्रमुख सूक्ष्मजीव एवं सक्रिय यौगिक')}
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-700 font-mono">
                {selectedTopic.keyOrganismsOrCompounds.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-xs uppercase mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>{t('Empirical Measurable Benefit', 'मापन योग्य कृषि लाभ')}</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                {t(selectedTopic.measurableBenefitEn, selectedTopic.measurableBenefitHi)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
