import React, { useEffect, useState } from 'react';
import { Formulation } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { X, Download, Printer, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import QRCode from 'qrcode';
import { getLocalizedFormulationName, getLocalizedFormulationScriptName } from '../data/translationsMaster';

interface QrCodeModalProps {
  formulation: Formulation | null;
  onClose: () => void;
  onOpenDetails: (formulation: Formulation) => void;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({
  formulation,
  onClose,
  onOpenDetails,
}) => {
  const { lang, t } = useLanguage();
  const [qrUrl, setQrUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (formulation) {
      const url = `${window.location.origin}/#formulation-${formulation.slug}`;
      QRCode.toDataURL(url, {
        width: 360,
        margin: 2,
        color: {
          dark: '#143828', // Forest Green
          light: '#FFFFFF',
        },
      })
        .then((data) => setQrUrl(data))
        .catch((err) => console.error('QR code error', err));
    }
  }, [formulation]);

  if (!formulation) return null;

  const targetUrl = `${window.location.origin}/#formulation-${formulation.slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!qrUrl) return;
    const a = document.createElement('a');
    a.href = qrUrl;
    a.download = `PRAKRITI_QR_${formulation.slug.toUpperCase()}.png`;
    a.click();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-stone-200 text-center relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
          <span>{t('Digital Formulation Placard', 'डिजिटल फॉर्मूलेशन प्लेकार्ड')}</span>
        </div>

        <h3 className="text-xl font-bold text-stone-900 mb-1">
          {getLocalizedFormulationName(formulation.slug, lang)}
        </h3>
        <p className="font-hindi text-emerald-900 font-semibold text-sm mb-4">
          {getLocalizedFormulationScriptName(formulation.slug, lang) || formulation.devanagariScript}
        </p>

        {/* QR Code Container with farm border */}
        <div className="my-2 p-4 bg-stone-50 border-2 border-dashed border-emerald-700/40 rounded-xl inline-block shadow-inner">
          {qrUrl ? (
            <img
              src={qrUrl}
              alt={`QR Code for ${formulation.nameEn}`}
              className="w-56 h-56 rounded-lg bg-white p-2 shadow-xs mx-auto"
            />
          ) : (
            <div className="w-56 h-56 rounded-lg bg-stone-200 flex items-center justify-center text-xs text-stone-500">
              Generating Code...
            </div>
          )}
          <span className="text-[11px] text-stone-500 font-mono mt-2 block">
            Scan to open complete recipe on mobile
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={handleDownload}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-900 hover:bg-emerald-950 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-amber-300" />
              <span>{t('Download QR Image', 'क्यूआर डाउनलोड करें')}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-stone-600" />
              <span>{t('Print', 'प्रिंट')}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg border border-stone-200 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? t('Link Copied!', 'लिंक कॉपी हो गया!') : t('Copy Direct Link', 'सीधा लिंक कॉपी करें')}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenDetails(formulation);
              }}
              className="px-3 py-1.5 text-xs font-semibold text-emerald-900 hover:underline cursor-pointer"
            >
              {t('Open Full Guide', 'पूरी विधि खोलें')} &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
