import React, { useEffect } from 'react';
import { SeoManager } from '../components/SeoManager.tsx';
import { SEO_DATA } from '../config/seoConfig.ts';
import { SectionPageHeader } from '../components/SectionPageHeader.tsx';
import { PillarsSection } from '../components/PillarsSection.tsx';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Cpu, Sparkles } from 'lucide-react';

interface PillarsPageProps {
  onOpenAudit: () => void;
}

export const PillarsPage: React.FC<PillarsPageProps> = ({ onOpenAudit }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <SeoManager seo={SEO_DATA.pillars} />

      <SectionPageHeader
        badge="Algorithmic Capabilities"
        title="The 6 Core Pillars of"
        titleAccent="AI Digital Marketing"
        description="A technical and tactical breakdown of the algorithmic growth engine. From multi-armed bandit creative synthesis to Generative Engine Optimization (GEO) and cookieless Marketing Mix Modeling."
        activePath="/core-pillars/"
      />

      <main>
        {/* Core Pillars Explorer */}
        <PillarsSection />

        {/* Action Callout */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500 text-white shadow-xl shadow-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-200 block mb-1">
                  Ready to Implement?
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  Simulate Your Algorithmic ROAS Lift
                </h3>
                <p className="text-sm text-blue-100 max-w-lg">
                  See how deploying autonomous bidding and dynamic creative variation directly influences your cost per acquisition.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  to="/roi-simulator/"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-blue-700 font-bold text-xs shadow-md text-center transition-all cursor-pointer whitespace-nowrap"
                >
                  Open ROI Simulator &rarr;
                </Link>
                <button
                  onClick={onOpenAudit}
                  className="px-6 py-3.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-bold text-xs border border-white/20 text-center transition-all cursor-pointer whitespace-nowrap"
                >
                  Get Free Audit
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
