import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { Sparkles, ArrowRight, BookOpen, ShieldCheck, Microscope, Cpu, Compass } from 'lucide-react';

interface HeroProps {
  onExploreFormulations: () => void;
  onDiscoverPanchmahabhuta: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreFormulations,
  onDiscoverPanchmahabhuta,
}) => {
  const { lang, t } = useLanguage();

  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_prakriti_farmland_1793556494302.jpg"
          alt="Lush Indian natural farmland during golden morning sunrise"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrim according to frontend-design guidelines: 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/75 to-stone-900/50" />
        <div className="absolute inset-0 bg-radial from-transparent via-stone-950/40 to-stone-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Unboxed Metadata Tagline with typographic separator */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-4">
            <span>{t('Indigenous Indian Agriculture', 'पारंपरिक भारतीय कृषि विरासत')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('Panchmahabhuto Ki Sadhana', 'पंचमहाभूतों की साधना')}</span>
          </div>

          {/* Heading with text-wrap balance */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight [text-wrap:balance]">
            {t(UI_STRINGS.hero.headingEn, UI_STRINGS.hero.headingHi)}
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-stone-200 mb-8 leading-relaxed max-w-2xl">
            {t(UI_STRINGS.hero.subheadingEn, UI_STRINGS.hero.subheadingHi)}
          </p>

          {/* Two Primary CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={onExploreFormulations}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-emerald-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-950" />
              <span>{t(UI_STRINGS.hero.ctaFormulations.en, UI_STRINGS.hero.ctaFormulations.hi)}</span>
              <ArrowRight className="w-4 h-4 text-emerald-950" />
            </button>

            <button
              onClick={onDiscoverPanchmahabhuta}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-900/80 hover:bg-emerald-900 border border-emerald-600/40 rounded-lg shadow-sm backdrop-blur-xs transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-emerald-300" />
              <span>{t(UI_STRINGS.hero.ctaPanchmahabhuta.en, UI_STRINGS.hero.ctaPanchmahabhuta.hi)}</span>
            </button>
          </div>

          {/* Official Tagline Badge */}
          <div className="border-t border-stone-700/60 pt-6">
            <p className="text-xs sm:text-sm font-medium text-stone-300 italic">
              &ldquo;{t(UI_STRINGS.brand.taglineEn, UI_STRINGS.brand.taglineHi)}&rdquo;
            </p>
          </div>
        </div>

        {/* The Three Pillars KPI Strip below hero split */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-900/60 backdrop-blur-md rounded-xl p-5 border border-stone-700/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-amber-300" />
              </div>
              <h3 className="text-base font-bold text-white tracking-wide">
                {t(UI_STRINGS.hero.pillar1.en, UI_STRINGS.hero.pillar1.hi)}
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {t(UI_STRINGS.hero.pillar1.descEn, UI_STRINGS.hero.pillar1.descHi)}
            </p>
          </div>

          <div className="bg-stone-900/60 backdrop-blur-md rounded-xl p-5 border border-stone-700/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <Microscope className="w-4 h-4 text-emerald-300" />
              </div>
              <h3 className="text-base font-bold text-white tracking-wide">
                {t(UI_STRINGS.hero.pillar2.en, UI_STRINGS.hero.pillar2.hi)}
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {t(UI_STRINGS.hero.pillar2.descEn, UI_STRINGS.hero.pillar2.descHi)}
            </p>
          </div>

          <div className="bg-stone-900/60 backdrop-blur-md rounded-xl p-5 border border-stone-700/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-sky-300" />
              </div>
              <h3 className="text-base font-bold text-white tracking-wide">
                {t(UI_STRINGS.hero.pillar3.en, UI_STRINGS.hero.pillar3.hi)}
              </h3>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {t(UI_STRINGS.hero.pillar3.descEn, UI_STRINGS.hero.pillar3.descHi)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
