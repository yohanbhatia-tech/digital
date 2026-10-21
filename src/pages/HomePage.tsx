import React from 'react';
import { SeoManager } from '../components/SeoManager.tsx';
import { SEO_DATA } from '../config/seoConfig.ts';
import { Hero } from '../components/Hero.tsx';
import { WhatIsAiMarketing } from '../components/WhatIsAiMarketing.tsx';
import { PillarsSection } from '../components/PillarsSection.tsx';
import { GrowthSimulator } from '../components/GrowthSimulator.tsx';
import { BlogSection } from '../components/BlogSection.tsx';
import { AiCopySandbox } from '../components/AiCopySandbox.tsx';
import { StrategyPlaybook } from '../components/StrategyPlaybook.tsx';

interface HomePageProps {
  onOpenAudit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAudit }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex-1">
      {/* Dynamic SEO, Canonical & Schema Injection */}
      <SeoManager seo={SEO_DATA.home} />

      {/* Hero Section */}
      <Hero
        onExploreClick={() => handleScrollTo('about-ai')}
        onSimulateClick={() => handleScrollTo('simulator')}
        onOpenAudit={onOpenAudit}
      />

      {/* What is AI Digital Marketing & Question-Form H2 Direct Answers for AEO */}
      <WhatIsAiMarketing />

      {/* 6 Core Pillars of Modern AI Marketing */}
      <PillarsSection />

      {/* Interactive Growth & ROI Simulator */}
      <GrowthSimulator onOpenAudit={onOpenAudit} />

      {/* Visible Article Cards Section */}
      <BlogSection />

      {/* Interactive AI Copy & Creative Generation Sandbox */}
      <AiCopySandbox />

      {/* 90-Day AI Implementation Roadmap */}
      <StrategyPlaybook onOpenAudit={onOpenAudit} />
    </main>
  );
};
