import React, { useState } from 'react';
import { CROP_GUIDES } from '../data/cropData';
import { CropGuide } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { Sprout, Droplets, ShieldAlert, Sparkles, Calendar, Layers } from 'lucide-react';
import { getLocalizedCropName } from '../data/translationsMaster';

export const CropKnowledgeSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedCrop, setSelectedCrop] = useState<CropGuide>(CROP_GUIDES[0]);

  return (
    <section id="crop-guide" className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>{t('Agronomic Calendar', 'कृषि पंचांग')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('Six Major Crop Families', 'छह प्रमुख फसल वर्ग')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-3 [text-wrap:balance]">
            {t(UI_STRINGS.cropSection.headingEn, UI_STRINGS.cropSection.headingHi)}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {t(UI_STRINGS.cropSection.subheadingEn, UI_STRINGS.cropSection.subheadingHi)}
          </p>
        </div>

        {/* Crop Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {CROP_GUIDES.map((crop) => {
            const isSelected = selectedCrop.id === crop.id;
            return (
              <button
                key={crop.id}
                onClick={() => setSelectedCrop(crop)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                    : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-base">🌾</span>
                  <span className={`text-[10px] font-mono ${isSelected ? 'text-amber-300' : 'text-stone-400'}`}>
                    {t(crop.seasonEn.split(' ')[0], crop.seasonHi.split(' ')[0])}
                  </span>
                </div>
                <h4 className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                  {getLocalizedCropName(crop.id, lang) || t(crop.nameEn.split(' ')[0], crop.nameHi.split(' ')[0])}
                </h4>
                <span className={`text-[11px] block truncate ${isSelected ? 'text-emerald-200' : 'text-stone-500'}`}>
                  {crop.botanicalName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Crop Detail View */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-8">
          {/* Header Strip */}
          <div className="border-b border-stone-200 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                <span>{selectedCrop.botanicalName}</span>
                <span aria-hidden="true">·</span>
                <span>{t(selectedCrop.categoryEn, selectedCrop.categoryHi)}</span>
                <span aria-hidden="true">·</span>
                <span>{t(selectedCrop.seasonEn, selectedCrop.seasonHi)}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                {getLocalizedCropName(selectedCrop.id, lang) || t(selectedCrop.nameEn, selectedCrop.nameHi)}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
              {t(selectedCrop.overviewEn, selectedCrop.overviewHi)}
            </p>
          </div>

          {/* Sowing to Harvest Natural Formulation Calendar */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-800" />
              <span>{t('Growth Stage Formulation Protocol', 'अवस्था अनुसार प्राकृतिक पोषण सारणी')}</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedCrop.stages.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-stone-200 bg-stone-50/80 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
                      <span className="font-bold text-emerald-900">Stage 0{idx + 1}</span>
                      <span className="font-mono bg-white px-1.5 py-0.5 rounded border border-stone-200 text-[11px]">
                        {stage.daysAfterSowing}
                      </span>
                    </div>

                    <h5 className="text-xs sm:text-sm font-bold text-stone-900 mb-2">
                      {t(stage.stageNameEn, stage.stageNameHi)}
                    </h5>

                    <div className="text-xs space-y-1.5 text-stone-700 mb-3">
                      <div>
                        <span className="font-semibold text-stone-900 block">
                          {t('Recommended Input:', 'संस्तुत योग:')}
                        </span>
                        <span className="text-emerald-900 font-medium">
                          {stage.recommendedFormulation}
                        </span>
                      </div>
                      <div>
                        <span className="font-semibold text-stone-900 block">
                          {t('Application Dosage:', 'मात्रा:')}
                        </span>
                        <span>{t(stage.dosageEn, stage.dosageHi)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500 italic">
                    {t(stage.soilWaterPracticeEn, stage.soilWaterPracticeHi)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soil Management & Water Management Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Soil Management */}
            <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50">
              <div className="flex items-center gap-2 text-amber-950 font-bold text-xs uppercase mb-2">
                <Layers className="w-4 h-4 text-amber-700" />
                <span>{t('Soil Management & Mulching', 'मृदा प्रबंधन एवं आच्छादन')}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {t(selectedCrop.soilManagementEn, selectedCrop.soilManagementHi)}
              </p>
            </div>

            {/* Water Management */}
            <div className="p-5 rounded-xl border border-sky-200 bg-sky-50/50">
              <div className="flex items-center gap-2 text-sky-950 font-bold text-xs uppercase mb-2">
                <Droplets className="w-4 h-4 text-sky-700" />
                <span>{t('Water Management (Waaphasa Principle)', 'जल प्रबंधन (वाफसा पद्धति)')}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {t(selectedCrop.waterManagementEn, selectedCrop.waterManagementHi)}
              </p>
            </div>
          </div>

          {/* Disease Prevention & Natural Remedies */}
          <div className="p-5 rounded-xl border border-stone-200 bg-stone-50">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-xs uppercase mb-2">
              <ShieldAlert className="w-4 h-4 text-emerald-800" />
              <span>{t('Common Pest/Disease Challenges & Natural Remedy', 'प्रमुख रोग, कीट एवं जैविक उपचार')}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="font-semibold text-stone-800 block mb-1">
                  {t('Vulnerable Conditions:', 'संवेदनशील बीमारियां:')}
                </span>
                <p className="text-stone-600">
                  {t(selectedCrop.commonDiseasesEn.join(', '), selectedCrop.commonDiseasesHi.join(', '))}
                </p>
              </div>
              <div>
                <span className="font-semibold text-emerald-950 block mb-1">
                  {t('Proven Natural Biological Solution:', 'सटीक प्राकृतिक उपचार:')}
                </span>
                <p className="text-stone-700 font-medium">
                  {t(selectedCrop.pestRemedyEn, selectedCrop.pestRemedyHi)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
