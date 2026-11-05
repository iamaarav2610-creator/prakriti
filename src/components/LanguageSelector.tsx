import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language, LanguageMeta } from '../types';
import { Globe, Search, Check, ChevronDown, X, Sparkles } from 'lucide-react';

interface LanguageSelectorProps {
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ compact = false }) => {
  const { lang, setLang, meta, languages, isRTL, tKey } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Focus search input on open
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelectLanguage = (code: Language) => {
    setLang(code);
    setIsOpen(false);
    setSearchQuery('');
  };

  const filteredLanguages = languages.filter((l) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      l.name.toLowerCase().includes(query) ||
      l.englishName.toLowerCase().includes(query) ||
      l.code.toLowerCase().includes(query) ||
      l.region.toLowerCase().includes(query) ||
      l.script.toLowerCase().includes(query)
    );
  });

  // Quick pick languages for top chips
  const quickPicks: Language[] = ['en', 'hi', 'bn', 'te', 'mr', 'ta', 'ur', 'gu', 'pa', 'kn', 'ml', 'as'];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button in Nav Bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-200/80 hover:bg-stone-300/80 text-stone-900 border border-stone-300/80 text-xs font-semibold shadow-xs transition-colors cursor-pointer focus-visible:outline-hidden"
        title="Change Language (22 Indian Languages)"
        aria-label="Change Language"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
        <span className="font-bold text-emerald-950 font-indic whitespace-nowrap">
          {meta.name}
        </span>
        <span className="text-[10px] text-stone-600 hidden sm:inline uppercase font-mono">
          ({meta.code})
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-stone-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Language Selection Modal / Dropdown */}
      {isOpen && (
        <div
          className={`fixed sm:absolute inset-x-2 sm:inset-x-auto sm:right-0 top-18 sm:top-full mt-2 w-auto sm:w-96 max-h-[85vh] sm:max-h-[520px] bg-white rounded-2xl shadow-2xl border border-stone-200 p-4 z-50 flex flex-col animate-in fade-in zoom-in-95 duration-150 ${
            isRTL ? 'sm:right-auto sm:left-0 text-right' : 'text-left'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-stone-100 shrink-0">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
                <Globe className="w-4 h-4 text-emerald-800" />
                <span>{tKey('lang.selectLanguage')}</span>
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5">
                Eighth Schedule of Indian Constitution + English
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Box */}
          <div className="my-3 relative shrink-0">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder={tKey('lang.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-1 focus:ring-emerald-800 focus:bg-white"
            />
          </div>

          {/* Quick Pick Chips */}
          {!searchQuery && (
            <div className="pb-3 border-b border-stone-100 shrink-0">
              <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block mb-1.5">
                Quick Selection
              </span>
              <div className="flex flex-wrap gap-1">
                {quickPicks.map((pickCode) => {
                  const pickMeta = languages.find((l) => l.code === pickCode);
                  if (!pickMeta) return null;
                  const isActive = lang === pickCode;
                  return (
                    <button
                      key={pickCode}
                      onClick={() => handleSelectLanguage(pickCode)}
                      className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-emerald-900 text-white font-bold'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {pickMeta.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Languages Scrollable List */}
          <div className="overflow-y-auto space-y-1 flex-1 py-2 pr-1 scrollbar-thin">
            {filteredLanguages.length === 0 ? (
              <div className="text-center py-6 text-xs text-stone-500">
                No matching languages found
              </div>
            ) : (
              filteredLanguages.map((item) => {
                const isSelected = lang === item.code;
                return (
                  <button
                    key={item.code}
                    onClick={() => handleSelectLanguage(item.code)}
                    className={`w-full px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50 text-emerald-950 font-semibold border border-emerald-200'
                        : 'text-stone-700 hover:bg-stone-100/80 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-stone-200/60 text-stone-700 flex items-center justify-center font-mono text-[10px] font-bold uppercase shrink-0">
                        {item.code}
                      </span>
                      <div className="text-left">
                        <span className="text-sm font-bold text-stone-900 block font-indic">
                          {item.name}
                        </span>
                        <span className="text-[11px] text-stone-500">
                          {item.englishName} · {item.script}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {item.dir === 'rtl' && (
                        <span className="text-[10px] font-mono uppercase bg-amber-100 text-amber-800 px-1 rounded">
                          RTL
                        </span>
                      )}
                      {isSelected ? (
                        <Check className="w-4 h-4 text-emerald-800 shrink-0" />
                      ) : null}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer note */}
          <div className="pt-2 border-t border-stone-100 text-[10px] text-stone-400 flex items-center justify-between shrink-0">
            <span>22 Official Languages + English</span>
            <span>Instant Zero-Reload Switch</span>
          </div>
        </div>
      )}
    </div>
  );
};
