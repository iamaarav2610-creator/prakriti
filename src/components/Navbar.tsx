import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { Sprout, Menu, X, Globe, Sparkles } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenFormulation?: (formulationId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const { lang, setLang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: UI_STRINGS.nav.home },
    { id: 'panchmahabhutas', label: UI_STRINGS.nav.panchmahabhutas },
    { id: 'formulations', label: UI_STRINGS.nav.formulations },
    { id: 'crop-guide', label: UI_STRINGS.nav.cropGuide },
    { id: 'problem-solution', label: UI_STRINGS.nav.problemSolution },
    { id: 'science-centre', label: UI_STRINGS.nav.knowledgeCentre },
    { id: 'video-hub', label: UI_STRINGS.nav.videoLearning },
    { id: 'qr-codes', label: UI_STRINGS.nav.qrCodes },
    { id: 'feedback', label: UI_STRINGS.nav.feedback },
    { id: 'about-us', label: UI_STRINGS.nav.aboutUs },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3'
          : 'bg-[#FAF8F5]/85 backdrop-blur-xs border-b border-stone-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Single text element Brand Wordmark */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2.5 text-left group focus-visible:outline-hidden"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-900 text-amber-300 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <Sprout className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-brand text-xl sm:text-2xl font-bold tracking-wider text-emerald-950 uppercase leading-none">
                PRAKRITI
              </span>
              <span className="text-[10px] font-semibold text-stone-500 tracking-wider uppercase mt-0.5">
                {lang === 'hi' ? 'प्राकृतिक कृषि ज्ञान केंद्र' : 'Natural Farming Hub'}
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-stone-600">
            {navItems.slice(0, 7).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-emerald-900 font-semibold border-b-2 border-emerald-800'
                    : 'hover:text-emerald-800 text-stone-600'
                }`}
              >
                {t(item.label.en, item.label.hi)}
              </button>
            ))}
            
            {/* Dropdown for More */}
            <div className="relative group py-1">
              <span className="cursor-pointer text-stone-600 hover:text-emerald-800 flex items-center gap-1 whitespace-nowrap">
                {lang === 'hi' ? 'अधिक...' : 'More...'}
              </span>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-stone-200 py-2 hidden group-hover:block transition-all z-50">
                {navItems.slice(7).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-50 hover:text-emerald-800 whitespace-nowrap"
                  >
                    {t(item.label.en, item.label.hi)}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Zone 3: Primary Action & Multilingual Selector */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* All 22 Official Languages Selector */}
            <LanguageSelector />

            <button
              onClick={() => handleNavClick('formulations')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-emerald-900 rounded-lg hover:bg-emerald-950 transition-colors shadow-xs whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{t('9 Formulations', '9 प्राकृतिक योग')}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-200/60 focus-visible:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-3 pb-6 shadow-md animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-emerald-900 text-white font-semibold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {t(item.label.en, item.label.hi)}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 flex items-center justify-between">
            <span className="text-xs text-stone-500 font-medium">
              {t('Select Language (22 Languages):', 'भाषा चुनें (22 भाषाएं):')}
            </span>
            <LanguageSelector />
          </div>
        </div>
      )}
    </header>
  );
};
