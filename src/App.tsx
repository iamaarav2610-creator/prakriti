/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { FORMULATIONS } from './data/formulationsData';
import { Formulation } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroductionSection } from './components/IntroductionSection';
import { PanchmahabhutaSection } from './components/PanchmahabhutaSection';
import { FormulationsList } from './components/FormulationsList';
import { FormulationDetailModal } from './components/FormulationDetailModal';
import { QrCodeModal } from './components/QrCodeModal';
import { CropKnowledgeSection } from './components/CropKnowledgeSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { ScienceCentreSection } from './components/ScienceCentreSection';
import { VideoCentreSection } from './components/VideoCentreSection';
import { QrCodeCentre } from './components/QrCodeCentre';
import { FarmerFeedbackSection } from './components/FarmerFeedbackSection';
import { AboutUsSection } from './components/AboutUsSection';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedFormulation, setSelectedFormulation] = useState<Formulation | null>(null);
  const [qrModalFormulation, setQrModalFormulation] = useState<Formulation | null>(null);

  // Check URL hash on mount or hashchange (e.g. from QR scan: #formulation-jeevanu-jal)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('formulation-')) {
        const slug = hash.replace('formulation-', '');
        const matched = FORMULATIONS.find((f) => f.slug === slug);
        if (matched) {
          setSelectedFormulation(matched);
        }
      } else if (hash) {
        setActiveSection(hash);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.location.hash = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFormulationByName = (name: string) => {
    const matched = FORMULATIONS.find(
      (f) =>
        f.nameEn.toLowerCase() === name.toLowerCase() ||
        f.nameHi === name ||
        f.nameEn.toLowerCase().includes(name.toLowerCase())
    );
    if (matched) {
      setSelectedFormulation(matched);
    } else {
      handleNavigate('formulations');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-emerald-200 selection:text-emerald-950 flex flex-col">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenFormulation={(id) => {
          const f = FORMULATIONS.find((item) => item.id === id);
          if (f) setSelectedFormulation(f);
        }}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreFormulations={() => handleNavigate('formulations')}
          onDiscoverPanchmahabhuta={() => handleNavigate('panchmahabhutas')}
        />

        {/* 2. Introduction Section */}
        <IntroductionSection />

        {/* 3. Panchmahabhutas Section */}
        <PanchmahabhutaSection
          onSelectFormulationByName={handleSelectFormulationByName}
        />

        {/* 4. Nine Natural Farming Formulations Section */}
        <FormulationsList
          onSelectFormulation={(f) => setSelectedFormulation(f)}
          onOpenQrModal={(f) => setQrModalFormulation(f)}
        />

        {/* 5. Crop-Wise Knowledge Centre */}
        <CropKnowledgeSection />

        {/* 6. Problem-Solution Centre */}
        <ProblemSolutionSection
          onSelectFormulationByName={handleSelectFormulationByName}
        />

        {/* 7. Scientific Knowledge Centre */}
        <ScienceCentreSection />

        {/* 8. Video Learning Centre */}
        <VideoCentreSection />

        {/* 9. QR Code Integration Centre */}
        <QrCodeCentre
          onSelectFormulation={(f) => setSelectedFormulation(f)}
        />

        {/* 10. Farmer Feedback & Experience Sharing */}
        <FarmerFeedbackSection />

        {/* 11. About Us & National Innovation Mission */}
        <AboutUsSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Deep Formulation Details Modal */}
      {selectedFormulation && (
        <FormulationDetailModal
          formulation={selectedFormulation}
          onClose={() => setSelectedFormulation(null)}
          onOpenQrModal={(f) => {
            setSelectedFormulation(null);
            setQrModalFormulation(f);
          }}
        />
      )}

      {/* Large QR Code Placard Modal */}
      {qrModalFormulation && (
        <QrCodeModal
          formulation={qrModalFormulation}
          onClose={() => setQrModalFormulation(null)}
          onOpenDetails={(f) => {
            setQrModalFormulation(null);
            setSelectedFormulation(f);
          }}
        />
      )}
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
