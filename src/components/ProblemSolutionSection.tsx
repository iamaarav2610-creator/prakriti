import React, { useState } from 'react';
import { PROBLEM_SOLUTIONS } from '../data/problemSolutionData';
import { ProblemSolution } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { AlertCircle, CheckCircle2, ShieldAlert, Sparkles, HelpCircle, ArrowRight, Activity } from 'lucide-react';
import { getLocalizedProblemTitle } from '../data/translationsMaster';

interface ProblemSolutionSectionProps {
  onSelectFormulationByName?: (name: string) => void;
}

export const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({
  onSelectFormulationByName,
}) => {
  const { lang, t } = useLanguage();
  const [selectedProblem, setSelectedProblem] = useState<ProblemSolution>(PROBLEM_SOLUTIONS[0]);

  return (
    <section id="problem-solution" className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-800 mb-2">
            <span>{t('Diagnostic Matrix', 'रोग व समस्या निदान')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('Immediate Biological Cures', 'सटीक प्राकृतिक समाधान')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-3 [text-wrap:balance]">
            {t(UI_STRINGS.problemSection.headingEn, UI_STRINGS.problemSection.headingHi)}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {t(UI_STRINGS.problemSection.subheadingEn, UI_STRINGS.problemSection.subheadingHi)}
          </p>
        </div>

        {/* 6 Problem Selector Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {PROBLEM_SOLUTIONS.map((prob) => {
            const isSelected = selectedProblem.id === prob.id;
            return (
              <button
                key={prob.id}
                onClick={() => setSelectedProblem(prob)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-rose-950 text-white border-rose-950 shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <AlertCircle className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-rose-600'}`} />
                  <span className={`text-[10px] uppercase font-mono ${isSelected ? 'text-rose-200' : 'text-stone-400'}`}>
                    {prob.severity}
                  </span>
                </div>
                <h4 className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                  {getLocalizedProblemTitle(prob.id, lang) || t(prob.titleEn.split('&')[0], prob.titleHi.split('व')[0])}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Problem Deep Diagnosis View */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
          {/* Header */}
          <div className="border-b border-stone-200 pb-4">
            <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
              <span>{t(selectedProblem.categoryEn, selectedProblem.categoryHi)}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-rose-700 uppercase">
                {t(`Severity: ${selectedProblem.severity}`, `गंभीरता: ${selectedProblem.severity}`)}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
              {getLocalizedProblemTitle(selectedProblem.id, lang) || t(selectedProblem.titleEn, selectedProblem.titleHi)}
            </h3>
          </div>

          {/* 2-Column Split: Symptoms vs Root Causes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Symptoms & Visual Identification */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-700" />
                <span>{t('Identification Symptoms & Field Signs', 'पहचान के लक्षण एवं खेत के संकेत')}</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {(lang === 'hi' ? selectedProblem.symptomsHi : selectedProblem.symptomsEn).map((symp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>{symp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Root Causes */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-700" />
                <span>{t('Underlying Root Causes', 'समस्या के मुख्य कारण')}</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {(lang === 'hi' ? selectedProblem.rootCausesHi : selectedProblem.rootCausesEn).map((rc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                    <span>{rc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Immediate Natural Biological Remedy */}
          <div className="p-5 rounded-xl border border-emerald-300 bg-emerald-50/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>{t('Immediate Biological Natural Remedy', 'सटीक प्राकृतिक जैविक उपचार')}</span>
            </h4>
            <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed mb-4">
              {t(selectedProblem.naturalRemedyEn, selectedProblem.naturalRemedyHi)}
            </p>

            {/* Recommended Formulations */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-emerald-200/60">
              <span className="text-xs font-semibold text-emerald-900">
                {t('Deploy Formulations:', 'प्रयोग किए जाने वाले योग:')}
              </span>
              {selectedProblem.recommendedFormulations.map((formName, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectFormulationByName?.(formName)}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-white hover:bg-emerald-100 border border-emerald-300 rounded-lg text-xs font-bold text-emerald-900 transition-colors shadow-xs cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-emerald-700" />
                  <span>{formName}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Scientific Mechanism & Preventive Cultural Practice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="text-xs sm:text-sm space-y-1">
              <span className="font-bold text-stone-900 block">
                {t('Long-Term Preventive Farming Practice:', 'दीर्घकालिक निवारक उपाय:')}
              </span>
              <p className="text-stone-700 leading-relaxed">
                {t(selectedProblem.preventivePracticeEn, selectedProblem.preventivePracticeHi)}
              </p>
            </div>

            <div className="text-xs sm:text-sm space-y-1">
              <span className="font-bold text-stone-900 block">
                {t('Underlying Biological Mechanism:', 'अंतर्निहित वैज्ञानिक सिद्धांत:')}
              </span>
              <p className="text-stone-600 leading-relaxed font-mono text-[11px]">
                {t(selectedProblem.scientificMechanismEn, selectedProblem.scientificMechanismHi)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
