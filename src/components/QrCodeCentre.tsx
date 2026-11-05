import React, { useState, useEffect } from 'react';
import { FORMULATIONS } from '../data/formulationsData';
import { Formulation } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { QrCode, Download, Printer, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import QRCode from 'qrcode';
import { getLocalizedFormulationName, getLocalizedFormulationPrimaryAction } from '../data/translationsMaster';

interface QrCodeCentreProps {
  onSelectFormulation: (formulation: Formulation) => void;
}

export const QrCodeCentre: React.FC<QrCodeCentreProps> = ({ onSelectFormulation }) => {
  const { lang, t } = useLanguage();
  const [qrMap, setQrMap] = useState<Record<string, string>>({});
  const [selectedFormulation, setSelectedFormulation] = useState<Formulation>(FORMULATIONS[0]);

  useEffect(() => {
    // Generate QR codes for all 9 formulations
    const generateAllQrs = async () => {
      const map: Record<string, string> = {};
      for (const f of FORMULATIONS) {
        const url = `${window.location.origin}/#formulation-${f.slug}`;
        try {
          const dataUrl = await QRCode.toDataURL(url, {
            width: 320,
            margin: 2,
            color: {
              dark: '#143828', // Forest Green QR Modules
              light: '#FFFFFF',
            },
          });
          map[f.id] = dataUrl;
        } catch (err) {
          console.error('Error generating QR', err);
        }
      }
      setQrMap(map);
    };

    generateAllQrs();
  }, []);

  const handleDownloadQr = (form: Formulation) => {
    const dataUrl = qrMap[form.id];
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `PRAKRITI_QR_${form.slug.toUpperCase()}.png`;
    a.click();
  };

  const handlePrintPlacard = () => {
    window.print();
  };

  return (
    <section id="qr-codes" className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>{t('Digital Extension Technology', 'डिजिटल कृषि विस्तार')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('Instant Field Access', 'खेत पर तुरंत पहुंच')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-3 [text-wrap:balance]">
            {t(UI_STRINGS.qrSection.headingEn, UI_STRINGS.qrSection.headingHi)}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {t(UI_STRINGS.qrSection.subheadingEn, UI_STRINGS.qrSection.subheadingHi)}
          </p>
        </div>

        {/* 2-Zone Split: Left active placard preview, Right 9 QR gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Printable Placard Preview */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col items-center text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
              {t('Waterproof Drum Placard Preview', 'ड्रम पर लगाने हेतु प्लेकार्ड')}
            </span>

            <div className="w-full border-2 border-dashed border-emerald-800/40 rounded-2xl p-5 bg-[#FAF8F5] my-3">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-serif-brand text-xl font-bold text-emerald-950">
                  PRAKRITI
                </span>
                <span className="text-xs font-semibold text-stone-500 uppercase">
                  · {t('Digital Hub', 'ज्ञान केंद्र')}
                </span>
              </div>

              <div className="my-3 flex justify-center">
                {qrMap[selectedFormulation.id] ? (
                  <img
                    src={qrMap[selectedFormulation.id]}
                    alt={`QR Code for ${selectedFormulation.nameEn}`}
                    className="w-44 h-44 rounded-xl border border-stone-200 p-1 bg-white shadow-xs"
                  />
                ) : (
                  <div className="w-44 h-44 rounded-xl bg-stone-200 animate-pulse flex items-center justify-center text-xs text-stone-500">
                    Generating QR...
                  </div>
                )}
              </div>

              <h4 className="text-lg font-bold text-stone-900">
                {getLocalizedFormulationName(selectedFormulation.slug, lang)}
              </h4>
              <p className="text-xs text-stone-600 mb-2">
                {getLocalizedFormulationPrimaryAction(selectedFormulation.slug, lang) || t(selectedFormulation.primaryActionEn, selectedFormulation.primaryActionHi)}
              </p>

              <div className="text-[11px] text-stone-500 font-mono bg-stone-100 py-1 px-2 rounded">
                Scan with any smartphone camera for complete recipe
              </div>
            </div>

            <div className="w-full flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleDownloadQr(selectedFormulation)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-amber-300" />
                <span>{t('Download QR Image', 'क्यूआर डाउनलोड करें')}</span>
              </button>

              <button
                onClick={handlePrintPlacard}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-stone-600" />
                <span>{t('Print Placard', 'प्रिंट करें')}</span>
              </button>
            </div>
          </div>

          {/* Right Column: 9 Formulation Cards to Click & Switch QR */}
          <div className="lg:col-span-7">
            <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900 mb-3">
              {t('Select Formulation to Generate QR Placard:', 'क्यूआर प्लेकार्ड हेतु योग चुनें:')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {FORMULATIONS.map((form) => {
                const isSelected = selectedFormulation.id === form.id;
                return (
                  <div
                    key={form.id}
                    onClick={() => setSelectedFormulation(form)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                        : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`font-mono text-xs font-bold ${isSelected ? 'text-amber-300' : 'text-emerald-900'}`}>
                          0{form.number}
                        </span>
                        {qrMap[form.id] && (
                          <img
                            src={qrMap[form.id]}
                            alt="thumb"
                            className="w-7 h-7 rounded border border-stone-300 bg-white"
                          />
                        )}
                      </div>
                      <h4 className={`text-xs sm:text-sm font-bold leading-tight ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                        {getLocalizedFormulationName(form.slug, lang)}
                      </h4>
                      <span className={`text-[11px] block mt-0.5 truncate ${isSelected ? 'text-emerald-200' : 'text-stone-500'}`}>
                        {form.targetElement}
                      </span>
                    </div>

                    <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px]">
                      <span className={isSelected ? 'text-amber-200 font-semibold' : 'text-emerald-900 font-semibold'}>
                        {isSelected ? t('Active Placard', 'चयनित') : t('Select', 'चुनें')}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectFormulation(form);
                        }}
                        className={`hover:underline flex items-center gap-0.5 ${isSelected ? 'text-white' : 'text-stone-600'}`}
                      >
                        <span>{t('Guide', 'विधि')}</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
