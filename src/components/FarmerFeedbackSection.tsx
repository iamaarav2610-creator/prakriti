import React, { useState } from 'react';
import { INITIAL_FARMER_FEEDBACK } from '../data/feedbackData';
import { FarmerFeedback } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { FORMULATIONS } from '../data/formulationsData';
import { MessageSquare, Send, ShieldAlert, CheckCircle2, User, MapPin, Sprout, TrendingDown, Image, Filter } from 'lucide-react';

export const FarmerFeedbackSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [feedbackList, setFeedbackList] = useState<FarmerFeedback[]>(INITIAL_FARMER_FEEDBACK);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [formulationFilter, setFormulationFilter] = useState('all');

  // Form state
  const [farmerName, setFarmerName] = useState('');
  const [stateName, setStateName] = useState('');
  const [district, setDistrict] = useState('');
  const [crop, setCrop] = useState('');
  const [formulationUsed, setFormulationUsed] = useState(FORMULATIONS[0].nameEn);
  const [experienceText, setExperienceText] = useState('');
  const [yieldObservation, setYieldObservation] = useState('');
  const [costReduction, setCostReduction] = useState<number>(50);
  const [photoSelected, setPhotoSelected] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!stateName.trim() || !crop.trim() || !experienceText.trim()) return;

    const newFeedback: FarmerFeedback = {
      id: `fb-${Date.now()}`,
      farmerName: farmerName.trim() || (lang === 'hi' ? 'प्रगतिशील किसान' : 'Progressive Farmer'),
      state: stateName.trim(),
      district: district.trim() || 'Central District',
      crop: crop.trim(),
      formulationUsed: formulationUsed,
      experienceText: experienceText.trim(),
      yieldObservation: yieldObservation.trim() || (lang === 'hi' ? 'लागत में कमी व फसल में चमक' : 'Healthy vigorous crop stand'),
      costReductionPercentage: costReduction,
      submittedAt: new Date().toISOString().split('T')[0],
      isVerified: false, // Per prompt: display submissions as unverified farmer experiences until reviewed
    };

    setFeedbackList([newFeedback, ...feedbackList]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowSubmitModal(false);
      // Reset form
      setFarmerName('');
      setStateName('');
      setDistrict('');
      setCrop('');
      setExperienceText('');
      setYieldObservation('');
    }, 1800);
  };

  const filteredFeedback = feedbackList.filter((item) => {
    if (formulationFilter === 'all') return true;
    return item.formulationUsed.toLowerCase().includes(formulationFilter.toLowerCase());
  });

  return (
    <section id="feedback" className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <span>{t('Grassroots Agronomy', 'धरातलीय कृषि संवाद')}</span>
              <span aria-hidden="true">·</span>
              <span>{t('Field Voices', 'किसानों की जुबानी')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-2 [text-wrap:balance]">
              {t(UI_STRINGS.feedbackSection.headingEn, UI_STRINGS.feedbackSection.headingHi)}
            </h2>
            <p className="text-sm text-stone-600 max-w-2xl leading-relaxed">
              {t(UI_STRINGS.feedbackSection.subheadingEn, UI_STRINGS.feedbackSection.subheadingHi)}
            </p>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-amber-300" />
            <span>{t('Share Your Experience', 'अपना अनुभव साझा करें')}</span>
          </button>
        </div>

        {/* Notice of Peer Verification Policy */}
        <div className="mb-8 p-3.5 bg-amber-50/80 border border-amber-200/90 rounded-xl flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>{t('Transparency & Verification Protocol: ', 'पारदर्शिता एवं सत्यापन नीति: ')}</strong>
            {t(
              'All farmer submissions are displayed with an "Unverified Farmer Experience" label until visited and validated by our regional agronomist network or certified Krishi Vigyan Kendra (KVK).',
              'किसानों द्वारा साझा किए गए सभी अनुभव कृषि विज्ञान केंद्र (KVK) अथवा विशेषज्ञों द्वारा भौतिक सत्यापन किए जाने तक "अपुष्ट किसान अनुभव (Unverified)" के रूप में प्रदर्शित किए जाते हैं।'
            )}
          </p>
        </div>

        {/* Filter bar */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <Filter className="w-3.5 h-3.5" />
            <span className="font-semibold">{t('Filter by Formulation:', 'योग अनुसार छांटें:')}</span>
            <select
              value={formulationFilter}
              onChange={(e) => setFormulationFilter(e.target.value)}
              className="bg-white border border-stone-300 rounded-lg px-2.5 py-1 text-xs text-stone-800 focus:outline-hidden"
            >
              <option value="all">{t('All Formulations', 'सभी योग')}</option>
              {FORMULATIONS.map((f) => (
                <option key={f.id} value={f.nameEn}>
                  {t(f.nameEn, f.nameHi)}
                </option>
              ))}
            </select>
          </div>
          <span className="text-xs text-stone-500 font-mono">
            {filteredFeedback.length} {t('Submissions', 'प्रविष्टियां')}
          </span>
        </div>

        {/* Feedback Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeedback.map((fb) => (
            <div
              key={fb.id}
              className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata & Unverified Tag per Prompt Spec */}
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3 border-b border-stone-100 pb-2.5">
                  <div className="flex items-center gap-1.5 font-medium text-stone-700">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{fb.district}, {fb.state}</span>
                  </div>

                  {/* Mandatory Unverified Tag */}
                  <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/70 border border-amber-300 px-2 py-0.5 rounded">
                    {t('Unverified Experience', 'अपुष्ट किसान अनुभव')}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="font-bold text-stone-900 text-sm block">
                    {fb.farmerName || t('Progressive Farmer', 'प्रगतिशील किसान')}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                    <span className="text-emerald-800 font-semibold">{fb.crop}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-stone-600 font-mono text-[11px]">{fb.formulationUsed}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-3 italic">
                  &ldquo;{fb.experienceText}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">{t('Yield Observation:', 'उत्पादन अवलोकन:')}</span>
                  <span className="font-semibold text-stone-800 text-right">{fb.yieldObservation}</span>
                </div>
                {fb.costReductionPercentage && (
                  <div className="flex items-center justify-between text-emerald-900 font-medium">
                    <span className="flex items-center gap-1">
                      <TrendingDown className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{t('Input Cost Reduction:', 'लागत में कमी:')}</span>
                    </span>
                    <span className="font-bold">~{fb.costReductionPercentage}%</span>
                  </div>
                )}
                <div className="text-[10px] text-stone-400 text-right font-mono">
                  {fb.submittedAt}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Farmer Submission Modal Form */}
        {showSubmitModal && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setShowSubmitModal(false)}
          >
            <div
              className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {submitSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900">
                    {t('Thank You For Sharing!', 'अनुभव साझा करने हेतु धन्यवाद!')}
                  </h3>
                  <p className="text-xs text-stone-600">
                    {t(
                      'Your experience has been logged as an unverified field observation and will appear in the registry.',
                      'आपका अनुभव दर्ज कर लिया गया है तथा यह अपुष्ट किसान अनुभव के रूप में मंच पर प्रदर्शित होगा।'
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-900">
                      {t('Submit Farmer Field Experience', 'किसान खेत अनुभव दर्ज करें')}
                    </h3>
                    <p className="text-xs text-stone-500">
                      {t(
                        'Help fellow farmers learn from your natural farming journey.',
                        'अपने अनुभव से अन्य किसान भाइयों को प्रेरित व मार्गदर्शित करें।'
                      )}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t('Your Name (Optional)', 'आपका नाम (ऐच्छिक)')}
                      </label>
                      <input
                        type="text"
                        value={farmerName}
                        onChange={(e) => setFarmerName(e.target.value)}
                        placeholder={t('e.g. Ramesh Kumar', 'उदा. रमेश कुमार')}
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-emerald-800"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t('Crop Cultivated *', 'उगाई गई फसल *')}
                      </label>
                      <input
                        type="text"
                        required
                        value={crop}
                        onChange={(e) => setCrop(e.target.value)}
                        placeholder={t('e.g. Wheat, Mustard, Tomato', 'उदा. गेहूं, सरसों, टमाटर')}
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-emerald-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t('State *', 'राज्य *')}
                      </label>
                      <input
                        type="text"
                        required
                        value={stateName}
                        onChange={(e) => setStateName(e.target.value)}
                        placeholder={t('e.g. Madhya Pradesh, Gujarat', 'उदा. मध्य प्रदेश, गुजरात')}
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-emerald-800"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t('District', 'जिला')}
                      </label>
                      <input
                        type="text"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder={t('e.g. Khargone', 'उदा. खरगोन')}
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-emerald-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {t('Primary Natural Formulation Used *', 'उपयोग किया गया मुख्य प्राकृतिक योग *')}
                    </label>
                    <select
                      value={formulationUsed}
                      onChange={(e) => setFormulationUsed(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-emerald-800"
                    >
                      {FORMULATIONS.map((f) => (
                        <option key={f.id} value={f.nameEn}>
                          {t(f.nameEn, f.nameHi)} - ({f.devanagariScript})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {t('Your Field Experience & Results *', 'खेत का अनुभव व परिणाम *')}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={experienceText}
                      onChange={(e) => setExperienceText(e.target.value)}
                      placeholder={t(
                        'Describe preparation method, spray schedule, pest control observation, and plant vigor...',
                        'तैयारी की विधि, छिड़काव का समय, कीटों पर प्रभाव व फसल के स्वास्थ्य का विवरण दें...'
                      )}
                      className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-emerald-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t('Yield & Quality Observation', 'उत्पादन व गुणवत्ता अवलोकन')}
                      </label>
                      <input
                        type="text"
                        value={yieldObservation}
                        onChange={(e) => setYieldObservation(e.target.value)}
                        placeholder={t('e.g. 20 Quintals/acre, sweet taste', 'उदा. 20 क्विंटल प्रति एकड़, दाना चमकदार')}
                        className="w-full text-xs px-3 py-2 border border-stone-300 rounded-lg focus:outline-hidden focus:ring-1 focus:ring-emerald-800"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {t('Estimated Cost Reduction (%): ', 'लागत में अनुमानित कमी: ')}{costReduction}%
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="90"
                        step="5"
                        value={costReduction}
                        onChange={(e) => setCostReduction(parseInt(e.target.value))}
                        className="w-full accent-emerald-800"
                      />
                    </div>
                  </div>

                  {/* Photo upload toggle simulation */}
                  <div className="p-2.5 rounded-lg border border-dashed border-stone-300 bg-stone-50 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-stone-600">
                      <Image className="w-4 h-4 text-stone-400" />
                      <span>{photoSelected ? t('Farm photo attached', 'खेत का फोटो संलग्न') : t('Attach Crop Photo (Optional)', 'फसल का फोटो जोड़ें (ऐच्छिक)')}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPhotoSelected(!photoSelected)}
                      className="text-emerald-800 font-semibold text-xs hover:underline cursor-pointer"
                    >
                      {photoSelected ? t('Remove', 'हटाएं') : t('Select File', 'चुनें')}
                    </button>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-stone-200">
                    <button
                      type="button"
                      onClick={() => setShowSubmitModal(false)}
                      className="px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                    >
                      {t('Cancel', 'रद्द करें')}
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-5 py-2 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{t('Submit Experience', 'अनुभव भेजें')}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
