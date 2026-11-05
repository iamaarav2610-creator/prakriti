import React, { useState } from 'react';
import { VIDEO_GUIDES } from '../data/videoData';
import { VideoGuide } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/translations';
import { Play, X, Clock, Video, UserCheck, ExternalLink } from 'lucide-react';

export const VideoCentreSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [playingVideo, setPlayingVideo] = useState<VideoGuide | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Categories', labelHi: 'सभी श्रेणियां' },
    { id: 'formulations', labelEn: 'Formulation Preparation', labelHi: 'रसायन निर्माण' },
    { id: 'techniques', labelEn: 'Natural Farming Techniques', labelHi: 'कृषि तकनीक' },
    { id: 'soil', labelEn: 'Soil Health', labelHi: 'मृदा स्वास्थ्य' },
    { id: 'crop', labelEn: 'Crop Management', labelHi: 'फसल प्रबंधन' },
    { id: 'experts', labelEn: 'Expert Interviews', labelHi: 'विशेषज्ञ साक्षात्कार' },
  ];

  const filteredVideos = VIDEO_GUIDES.filter(
    (vid) => selectedCategory === 'all' || vid.category === selectedCategory
  );

  return (
    <section id="video-hub" className="py-16 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>{t('Audio-Visual Masterclasses', 'दृश्य-श्रव्य प्रशिक्षण')}</span>
            <span aria-hidden="true">·</span>
            <span>{t('Field Demonstrations', 'खेत के सजीव प्रदर्शन')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 mb-3 [text-wrap:balance]">
            {t(UI_STRINGS.videoSection.headingEn, UI_STRINGS.videoSection.headingHi)}
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            {t(UI_STRINGS.videoSection.subheadingEn, UI_STRINGS.videoSection.subheadingHi)}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-1.5 p-1 bg-stone-200/60 rounded-xl max-w-3xl mx-auto mb-8 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              {t(cat.labelEn, cat.labelHi)}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Video Thumbnail Placeholder / Embed preview with Play overlay */}
                <div
                  onClick={() => setPlayingVideo(video)}
                  className="relative aspect-16/9 bg-stone-900 cursor-pointer overflow-hidden"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback styled background
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-stone-950/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/90 text-amber-300 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-[11px] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-1.5">
                    <span>{t(video.categoryLabelEn, video.categoryLabelHi)}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-emerald-800">{video.duration}</span>
                  </div>

                  <h3 className="text-sm font-bold text-stone-900 mb-2 leading-snug group-hover:text-emerald-950 transition-colors">
                    {t(video.titleEn, video.titleHi)}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                    {t(video.descriptionEn, video.descriptionHi)}
                  </p>
                </div>
              </div>

              {/* Instructor footer */}
              <div className="px-4 py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-stone-700 truncate mr-2">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="truncate">{t(video.instructorEn, video.instructorHi)}</span>
                </div>
                <button
                  onClick={() => setPlayingVideo(video)}
                  className="font-semibold text-emerald-900 hover:underline shrink-0 cursor-pointer"
                >
                  {t('Watch', 'देखें')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Video Modal */}
        {playingVideo && (
          <div
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setPlayingVideo(null)}
          >
            <div
              className="bg-stone-900 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl border border-stone-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-stone-800 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs text-amber-400 font-semibold uppercase block">
                    {t(playingVideo.categoryLabelEn, playingVideo.categoryLabelHi)}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold truncate max-w-xl">
                    {t(playingVideo.titleEn, playingVideo.titleHi)}
                  </h3>
                </div>
                <button
                  onClick={() => setPlayingVideo(null)}
                  className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-16/9 w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${playingVideo.youtubeId}?autoplay=1&rel=0`}
                  title={playingVideo.titleEn}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 bg-stone-900 text-stone-300 text-xs flex items-center justify-between">
                <span>{t(playingVideo.instructorEn, playingVideo.instructorHi)}</span>
                <a
                  href={`https://www.youtube.com/watch?v=${playingVideo.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>{t('Open on YouTube', 'यूट्यूब पर खोलें')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
