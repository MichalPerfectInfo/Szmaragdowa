import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { LocationSection, InfrastructureSection, StandardsSection, TechSpecs, LayoutInfo, VisualNavigator } from './components/ContentSections';
import { ApartmentList } from './components/ApartmentList';
import { AdditionalInfo, ProcessSection } from './components/Process';
import { AboutInvestor, ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <LocationSection />
        <InfrastructureSection />
        <StandardsSection />
        <VisualNavigator />
        <TechSpecs />
        <LayoutInfo />
        <ApartmentList />
        <AdditionalInfo />
        <ProcessSection />
        <AboutInvestor />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;