import React, { useEffect } from 'react';
import { SeoManager } from '../components/SeoManager.tsx';
import { SEO_DATA } from '../config/seoConfig.ts';
import { SectionPageHeader } from '../components/SectionPageHeader.tsx';
import { WhatIsAiMarketing } from '../components/WhatIsAiMarketing.tsx';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Target, Rocket } from 'lucide-react';

interface WhatIsAiPageProps {
  onOpenAudit: () => void;
}

export const WhatIsAiPage: React.FC<WhatIsAiPageProps> = ({ onOpenAudit }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <SeoManager seo={SEO_DATA.whatIsAi} />

      <SectionPageHeader
        badge="Foundational Intelligence"
        title="What is AI Digital"
        titleAccent="Marketing?"
        description="Explore the paradigm shift from static manual advertising to autonomous algorithmic growth. Understand how machine learning replaces guesswork across audiences, creative testing, and real-time bid pacing."
        activePath="/what-is-ai-marketing/"
      />

      <main>
        {/* Core Explainer & AEO Direct Answers */}
        <WhatIsAiMarketing />

        {/* Section Next Steps Link Bar */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Continue Exploring Digital Growth Lab
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Deepen Your Algorithmic Marketing Architecture
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/core-pillars/"
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  The 6 Core Pillars &rarr;
                </h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Inspect the six disciplines: creative synthesis, predictive bidding, LTV modeling, conversational leads, GEO, and MMM.
                </p>
              </Link>

              <Link
                to="/roi-simulator/"
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Growth &amp; ROI Simulator &rarr;
                </h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Calculate estimated revenue expansion and hours saved by deploying machine-learning ad algorithms.
                </p>
              </Link>

              <Link
                to="/playbook/"
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Rocket className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  90-Day Implementation Playbook &rarr;
                </h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Follow the structured three-phase blueprint to transition your team to autonomous execution.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
