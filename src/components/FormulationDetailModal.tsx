import React, { useState, useEffect } from 'react';
import { Formulation } from '../types';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  Clock,
  Calendar,
  AlertTriangle,
  CheckCircle,
  QrCode,
  Printer,
  Calculator,
  ChevronRight,
  ShieldAlert,
  Microscope,
  Droplets,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import QRCode from 'qrcode';
import {
  getLocalizedFormulationName,
  getLocalizedFormulationScriptName,
  getLocalizedFormulationTagline,
  getLocalizedFormulationCategory
} from '../data/translationsMaster';

interface FormulationDetailModalProps {
  formulation: Formulation | null;
  onClose: () => void;
  onOpenQrModal?: (formulation: Formulation) => void;
}

export const FormulationDetailModal: React.FC<FormulationDetailModalProps> = ({
  formulation,
  onClose,
  onOpenQrModal,
}) => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'steps' | 'applications' | 'science' | 'calculator'>('overview');
  const [activeStep, setActiveStep] = useState<number>(1);
  const [landArea, setLandArea] = useState<number>(1);
  const [areaUnit, setAreaUnit] = useState<'acre' | 'bigha' | 'hectare'>('acre');
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    if (formulation) {
      // Generate QR code for this formulation
      const targetUrl = `${window.location.origin}/#formulation-${formulation.slug}`;
      QRCode.toDataURL(targetUrl, { width: 200, margin: 1 })
        .then((url) => setQrCodeUrl(url))
        .catch((err) => console.error('QR error', err));
    }
  }, [formulation]);

  if (!formulation) return null;

  // Multiplier for calculator
  const getMultiplier = () => {
    let baseInAcres = landArea;
    if (areaUnit === 'bigha') {
      baseInAcres = landArea * 0.4; // 1 bigha approx 0.4 acre standard north/central
    } else if (areaUnit === 'hectare') {
      baseInAcres = landArea * 2.47;
    }
    return Math.max(0.1, baseInAcres);
  };

  const multiplier = getMultiplier();

  // Print function
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 bg-stone-900 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors focus-visible:outline-hidden"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
            <span>#{formulation.number}</span>
            <span aria-hidden="true">·</span>
            <span>{getLocalizedFormulationCategory(formulation.slug, lang) || t(formulation.categoryEn, formulation.categoryHi)}</span>
            <span aria-hidden="true">·</span>
            <span>{t(`Mahabhuta: ${formulation.targetElement}`, `महाभूत: ${formulation.targetElement}`)}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {getLocalizedFormulationName(formulation.slug, lang)}
            </h2>
            <span className="font-hindi text-lg sm:text-xl text-amber-200 font-semibold">
              ({getLocalizedFormulationScriptName(formulation.slug, lang) || formulation.devanagariScript})
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
            {getLocalizedFormulationTagline(formulation.slug, lang) || t(formulation.taglineEn, formulation.taglineHi)}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-stone-300 border-t border-stone-800 pt-3">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{t('Prep Time: ', 'तैयारी का समय: ')}{t(formulation.preparationTimeEn, formulation.preparationTimeHi)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('Shelf Life: ', 'उपयोग अवधि: ')}{t(formulation.shelfLifeEn, formulation.shelfLifeHi)}</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-4 sm:px-6 py-2.5 bg-stone-100 border-b border-stone-200 overflow-x-auto shrink-0 scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-white text-emerald-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t('Overview & Ingredients', 'परिचय व सामग्री')}
          </button>
          <button
            onClick={() => setActiveTab('steps')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'steps'
                ? 'bg-white text-emerald-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t('Preparation Steps', 'निर्माण विधि')}
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'applications'
                ? 'bg-white text-emerald-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t('Field Applications & Benefits', 'खेत प्रयोग व लाभ')}
          </button>
          <button
            onClick={() => setActiveTab('science')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
              activeTab === 'science'
                ? 'bg-white text-emerald-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            {t('Scientific Explanation', 'वैज्ञानिक विश्लेषण')}
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap flex items-center gap-1 ${
              activeTab === 'calculator'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>{t('Dosage Calculator', 'मात्रा कैलकुलेटर')}</span>
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-stone-800 text-sm">
          {/* TAB 1: OVERVIEW & INGREDIENTS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Introduction & Purpose */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                    {t('Introduction', 'परिचय')}
                  </h4>
                  <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
                    {t(formulation.introEn, formulation.introHi)}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                    {t('Primary Agricultural Purpose', 'मुख्य कृषि उद्देश्य')}
                  </h4>
                  <p className="text-stone-700 leading-relaxed text-xs sm:text-sm">
                    {t(formulation.purposeEn, formulation.purposeHi)}
                  </p>
                </div>
              </div>

              {/* Ingredients List Table */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-stone-900">
                    {t('Standard Ingredients (Per Batch / 1 Acre)', 'मानक सामग्री (प्रति बैच / 1 एकड़)')}
                  </h3>
                  <button
                    onClick={() => setActiveTab('calculator')}
                    className="text-xs font-semibold text-emerald-800 hover:underline flex items-center gap-1"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>{t('Calculate for my land', 'अपने खेत हेतु मापें')}</span>
                  </button>
                </div>

                <div className="overflow-x-auto border border-stone-200 rounded-xl">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-stone-100 text-stone-700 border-b border-stone-200">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">{t('Ingredient Name', 'घटक का नाम')}</th>
                        <th className="py-2.5 px-3 font-semibold whitespace-nowrap">{t('Quantity', 'मात्रा')}</th>
                        <th className="py-2.5 px-3 font-semibold">{t('Traditional & Biological Role', 'पारंपरिक व जैविक भूमिका')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {formulation.ingredients.map((ing, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/80 transition-colors">
                          <td className="py-2.5 px-3 font-medium text-stone-900">
                            {t(ing.nameEn, ing.nameHi)}
                          </td>
                          <td className="py-2.5 px-3 font-semibold text-emerald-900 whitespace-nowrap">
                            {t(ing.quantityEn, ing.quantityHi)}
                          </td>
                          <td className="py-2.5 px-3 text-stone-600 text-xs">
                            {t(ing.purposeEn, ing.purposeHi)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Ideal crops */}
              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-amber-950 uppercase mb-0.5">
                    {t('Highly Recommended For Crops', 'इन फसलों के लिए अत्यंत लाभकारी')}
                  </h5>
                  <p className="text-xs text-amber-900">
                    {t(formulation.idealForCropsEn.join(', '), formulation.idealForCropsHi.join(', '))}
                  </p>
                </div>
              </div>

              {/* Expert verification note if present */}
              {formulation.expertVerificationNoteEn && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-blue-950 uppercase mb-0.5">
                      {t('Scientific Verification Note', 'वैज्ञानिक सत्यापन स्थिति')}
                    </h5>
                    <p className="text-xs text-blue-800">
                      {t(formulation.expertVerificationNoteEn, formulation.expertVerificationNoteHi || '')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: STEP-BY-STEP INSTRUCTIONS */}
          {activeTab === 'steps' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-1">
                  {t('Step-by-Step Preparation Protocol', 'क्रमबद्ध निर्माण प्रक्रिया')}
                </h3>
                <p className="text-xs text-stone-600">
                  {t(
                    'Follow the exact clockwise rotation and shading instructions to maximize viable microbial counts.',
                    'सूक्ष्मजीवों की संख्या बढ़ाने हेतु दक्षिणावर्त (क्लॉकवाइज) घूर्णन व छायादार स्थान के नियमों का पालन करें।'
                  )}
                </p>
              </div>

              {/* Interactive Step Timeline */}
              <div className="space-y-4">
                {formulation.steps.map((step) => {
                  const isCurrent = activeStep === step.stepNumber;
                  return (
                    <div
                      key={step.stepNumber}
                      onClick={() => setActiveStep(step.stepNumber)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-emerald-50/70 border-emerald-600/60 shadow-xs'
                          : 'bg-stone-50 border-stone-200 hover:bg-stone-100/70'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              isCurrent
                                ? 'bg-emerald-900 text-white'
                                : 'bg-stone-300 text-stone-700'
                            }`}
                          >
                            {step.stepNumber}
                          </span>
                          <h4 className="text-sm font-bold text-stone-900">
                            {t(step.titleEn, step.titleHi)}
                          </h4>
                        </div>
                        {step.duration && (
                          <span className="text-xs text-stone-500 font-mono">
                            {step.duration}
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-stone-700 pl-8 leading-relaxed mb-2">
                        {t(step.descEn, step.descHi)}
                      </p>

                      {step.tipEn && (
                        <div className="ml-8 p-2 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>
                            <strong>{t('Pro-Tip: ', 'विशेष सुझाव: ')}</strong>
                            {t(step.tipEn, step.tipHi || '')}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Safety & Precautions Box */}
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <div className="flex items-center gap-2 mb-2 text-rose-900 font-bold text-xs uppercase">
                  <ShieldAlert className="w-4 h-4 text-rose-700" />
                  <span>{t('Mandatory Agricultural Precautions', 'अनिवार्य कृषि सावधानियां')}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-rose-950 pl-1">
                  {formulation.precautionsEn.map((_, i) => (
                    <li key={i}>
                      {t(formulation.precautionsEn[i], formulation.precautionsHi[i])}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: APPLICATIONS & BENEFITS */}
          {activeTab === 'applications' && (
            <div className="space-y-6">
              {/* Applications Table */}
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-3">
                  {t('Field Application Methods & Dosages', 'खेत में प्रयोग विधि व मात्रा')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formulation.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-stone-200 bg-stone-50/80 space-y-2"
                    >
                      <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                          {t('Application Mode', 'प्रयोग अवस्था')} #{idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-stone-500">
                          {t(app.stageEn, app.stageHi)}
                        </span>
                      </div>
                      <div className="text-xs space-y-1.5 pt-1">
                        <div>
                          <span className="font-semibold text-stone-900">{t('Method: ', 'पद्धति: ')}</span>
                          <span className="text-stone-700">{t(app.methodEn, app.methodHi)}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-stone-900">{t('Dosage: ', 'मात्रा: ')}</span>
                          <span className="font-bold text-emerald-900">{t(app.dosageEn, app.dosageHi)}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-stone-900">{t('Frequency: ', 'अंतराल: ')}</span>
                          <span className="text-stone-700">{t(app.frequencyEn, app.frequencyHi)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Benefits */}
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-3">
                  {t('Measurable Agronomic Benefits', 'प्रामाणिक कृषि लाभ एवं प्रभाव')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {formulation.benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-emerald-200/80 bg-emerald-50/40"
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                        <h4 className="text-xs font-bold text-emerald-950">
                          {t(b.titleEn, b.titleHi)}
                        </h4>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed">
                        {t(b.detailEn, b.detailHi)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SCIENTIFIC EXPLANATION */}
          {activeTab === 'science' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-stone-900 mb-1">
                  {t('Microbiological & Biochemical Mechanisms', 'सूक्ष्मजीव विज्ञान एवं रासायनिक कार्यप्रणाली')}
                </h3>
                <p className="text-xs text-stone-600">
                  {t(
                    'Understanding the empirical biology and chemical pathways validated by agricultural research.',
                    'प्रयोगशालाओं एवं विश्वविद्यालयों द्वारा प्रमाणित जैविक और रासायनिक विश्लेषण।'
                  )}
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                  <div className="flex items-center gap-2 mb-2 text-emerald-900 font-bold text-xs uppercase">
                    <Microscope className="w-4 h-4 text-emerald-700" />
                    <span>{t('Microbial Consortium & Flora', 'सूक्ष्मजीव संवर्धन एवं मित्र फ्लोरा')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {t(formulation.science.microbialEn, formulation.science.microbialHi)}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                  <div className="flex items-center gap-2 mb-2 text-amber-900 font-bold text-xs uppercase">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <span>{t('Biochemical Pathways & Enzymatic Kinetics', 'जैव रासायनिक क्रियाएं एवं एंजाइम')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {t(formulation.science.biochemicalEn, formulation.science.biochemicalHi)}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                  <div className="flex items-center gap-2 mb-2 text-sky-900 font-bold text-xs uppercase">
                    <Layers className="w-4 h-4 text-sky-700" />
                    <span>{t('Long-Term Soil Impact & Glomalin Formation', 'दीर्घकालिक मृदा स्वास्थ्य एवं ग्लोमालिन निर्माण')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {t(formulation.science.soilImpactEn, formulation.science.soilImpactHi)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: INTERACTIVE DOSAGE CALCULATOR */}
          {activeTab === 'calculator' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200">
                <h3 className="text-base font-bold text-emerald-950 mb-1 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-emerald-800" />
                  <span>{t('Interactive Farm Area Dosage Calculator', 'खेत के क्षेत्रफल अनुसार सामग्री कैलकुलेटर')}</span>
                </h3>
                <p className="text-xs text-emerald-800">
                  {t(
                    'Enter your land size below. The ingredient proportions will scale dynamically for your preparation batch.',
                    'अपने खेत का आकार दर्ज करें। आपके लिए आवश्यक सभी सामग्री की मात्रा तुरंत स्वतः बदल जाएगी।'
                  )}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-stone-300">
                    <label htmlFor="farm-size-input" className="text-xs font-semibold text-stone-700">
                      {t('Farm Size:', 'खेत का आकार:')}
                    </label>
                    <input
                      id="farm-size-input"
                      type="number"
                      min="0.1"
                      step="0.5"
                      value={landArea}
                      onChange={(e) => setLandArea(Math.max(0.1, parseFloat(e.target.value) || 0.1))}
                      className="w-20 text-xs font-bold text-stone-900 focus:outline-hidden"
                    />
                  </div>

                  <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-stone-300">
                    {(['acre', 'bigha', 'hectare'] as const).map((unit) => (
                      <button
                        key={unit}
                        onClick={() => setAreaUnit(unit)}
                        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                          areaUnit === unit
                            ? 'bg-emerald-900 text-white'
                            : 'text-stone-600 hover:text-stone-900'
                        }`}
                      >
                        {unit === 'acre'
                          ? t('Acres', 'एकड़')
                          : unit === 'bigha'
                          ? t('Bigha', 'बीघा')
                          : t('Hectares', 'हेक्टेयर')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scaled Ingredients Output */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  {t(
                    `Calculated Ingredients for ${landArea} ${areaUnit} (~${multiplier.toFixed(2)} standard acres):`,
                    `${landArea} ${areaUnit === 'acre' ? 'एकड़' : areaUnit === 'bigha' ? 'बीघा' : 'हेक्टेयर'} हेतु आनुपातिक सामग्री:`
                  )}
                </h4>
                <div className="border border-stone-200 rounded-xl overflow-hidden">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-stone-100 text-stone-700 border-b border-stone-200">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">{t('Ingredient', 'सामग्री')}</th>
                        <th className="py-2.5 px-3 font-semibold whitespace-nowrap">{t('Base Ratio', 'मानक (1 एकड़)')}</th>
                        <th className="py-2.5 px-3 font-semibold whitespace-nowrap">{t('Required Amount for You', 'आपके लिए आवश्यक मात्रा')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      {formulation.ingredients.map((ing, idx) => (
                        <tr key={idx} className="hover:bg-stone-50">
                          <td className="py-2.5 px-3 font-medium text-stone-900">
                            {t(ing.nameEn, ing.nameHi)}
                          </td>
                          <td className="py-2.5 px-3 text-stone-500 text-xs whitespace-nowrap">
                            {t(ing.quantityEn, ing.quantityHi)}
                          </td>
                          <td className="py-2.5 px-3 font-bold text-emerald-900 whitespace-nowrap">
                            {/* Proportional scaling indicator */}
                            {multiplier === 1 ? (
                              t(ing.quantityEn, ing.quantityHi)
                            ) : (
                              <span>
                                {multiplier.toFixed(1)}x {t(ing.quantityEn, ing.quantityHi)}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with QR Code & Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            {qrCodeUrl && (
              <div className="w-10 h-10 p-0.5 bg-white border border-stone-300 rounded-md shrink-0">
                <img
                  src={qrCodeUrl}
                  alt={`QR Code for ${formulation.nameEn}`}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="text-xs">
              <span className="font-semibold text-stone-800 block">
                {t('Digital Formulation Placard', 'डिजिटल फॉर्मूलेशन प्लेकार्ड')}
              </span>
              <span className="text-stone-500 text-[11px]">
                {t('Direct linkable ID: ', 'लिंक आईडी: ')} #{formulation.slug}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span>{t('Print Guide', 'प्रिंट करें')}</span>
            </button>

            {onOpenQrModal && (
              <button
                onClick={() => onOpenQrModal(formulation)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-lg transition-colors cursor-pointer"
              >
                <QrCode className="w-3.5 h-3.5 text-emerald-800" />
                <span>{t('View Large QR', 'बड़ा QR कोड')}</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-lg transition-colors cursor-pointer"
            >
              {t('Close', 'बंद करें')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
