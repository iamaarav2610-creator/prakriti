import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Leaf, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const IntroductionSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Traditional Philosophical Context */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              {t('The Rebirth of Indigenous Agronomy', 'भारतीय कृषि चेतना का पुनर्जागरण')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-4 [text-wrap:balance]">
              {t(
                'Nurturing the Soil as a Living Entity, Not a Chemical Medium',
                'मिट्टी को रासायनिक माध्यम नहीं, बल्कि एक सजीव चेतना के रूप में पोषित करना'
              )}
            </h2>
            <div className="prose prose-stone max-w-none text-stone-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                {t(
                  'For millennia, Indian farming was not an extractive industrial exploitation, but a sacred symbiotic sadhana with nature known as "Panchmahabhuto Ki Sadhana". Soil was revered as Bhoomi Mata—a teeming biological universe nurtured with indigenous cow culture, forest soil flora, and botanical extracts.',
                  'सहस्राब्दियों से भारतीय कृषि केवल फसल उगाना नहीं, बल्कि प्रकृति के साथ एक पवित्र साधना रही है जिसे "पंचमहाभूतों की साधना" कहा गया है। मिट्टी को भूमि माता मानकर देशी गाय के गोबर, गोमूत्र, सजीव जंगल की मिट्टी और वानस्पतिक अर्क से पोषित किया जाता था।'
                )}
              </p>
              <p>
                {t(
                  'The Green Revolution introduced synthetic nitrogen, phosphorus, and toxic neurotoxic pesticides that temporarily boosted yield but ultimately degraded soil organic carbon, depleted groundwater aquifers, killed pollinating bees, and trapped farmers in escalating debt cycles.',
                  'हरित क्रांति के दौरान आए रासायनिक उर्वरकों और कीटनाशकों ने शुरुआत में तो उत्पादन बढ़ाया, परंतु धीरे-धीरे मिट्टी के जैविक कार्बन को समाप्त कर दिया, भूजल को जहरीला किया, और किसानों को कर्ज के दुष्चक्र में धकेल दिया।'
                )}
              </p>
              <p className="font-medium text-emerald-950">
                {t(
                  'PRAKRITI is created to bridge this divide: standardizing the nine traditional natural farming formulations, documenting their preparation protocols with precision, providing verifiable microbiological backing, and placing this wisdom into the hands of every farmer through bilingual digital access.',
                  'प्रकृति (PRAKRITI) परियोजना का उद्देश्य इसी खाई को पाटना है: नौ पारंपरिक प्राकृतिक योगों का मानकीकरण करना, उनकी सटीक निर्माण विधियां दर्ज करना, आधुनिक सूक्ष्मजीव विज्ञान से उनका सत्यापन करना और द्विभाषी डिजिटल तकनीक से इसे हर किसान तक पहुंचाना।'
                )}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{t('Zero Synthetic Chemicals & Poisons', 'शून्य रासायनिक खाद व विषैली दवाएं')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{t('60-80% Reduction in Production Costs', 'लागत में 60 से 80% तक की भारी बचत')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{t('Restoration of Subsoil Water Table', 'भूजल संरक्षण एवं वाफसा संतुलन')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{t('Native Nutrient-Dense Clean Food', 'विष-मुक्त, पौष्टिक एवं दीर्घायु अन्न')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card with Traditional Imagery */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-3 border border-stone-200 shadow-sm overflow-hidden">
              <img
                src="/src/assets/images/formulation_preparation_traditional_1793556496134.jpg"
                alt="Traditional Indian natural farming preparation under a banyan tree with clay pots"
                className="w-full h-64 sm:h-72 object-cover rounded-xl mb-4"
                referrerPolicy="no-referrer"
              />
              <div className="px-3 pb-3">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span>{t('Indigenous Practice', 'पारंपरिक अभ्यास')}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t('Bilona & Matka Culture', 'बिलोना व मटका पद्धति')}</span>
                </div>
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  {t(
                    'Fermenting Living Bio-Inoculants in Earthen Clay',
                    'मिट्टी के बर्तनों में सजीव जैव-कल्चर का निर्माण'
                  )}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t(
                    'Clay pots maintain uniform ambient porous respiration and cool temperatures essential for cultivating anaerobic and aerobic bacteria.',
                    'मिट्टी के घड़े तापमान को स्थिर रखते हैं और सूक्ष्म छिद्रों से ऑक्सीजन का संतुलित आदान-प्रदान कर मित्र जीवाणुओं को सुरक्षित रखते हैं।'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
