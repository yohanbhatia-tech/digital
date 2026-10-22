import React, { useEffect } from 'react';
import { SeoManager } from '../components/SeoManager.tsx';
import { SEO_DATA } from '../config/seoConfig.ts';
import { SectionPageHeader } from '../components/SectionPageHeader.tsx';
import { GrowthSimulator } from '../components/GrowthSimulator.tsx';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, TrendingUp, Cpu, BookOpen, ExternalLink } from 'lucide-react';

interface RoiSimulatorPageProps {
  onOpenAudit: () => void;
}

export const RoiSimulatorPage: React.FC<RoiSimulatorPageProps> = ({ onOpenAudit }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <SeoManager seo={SEO_DATA.simulator} />

      <SectionPageHeader
        badge="Interactive Modeling"
        title="AI Growth &"
        titleAccent="ROI Simulator"
        description="Calculate the mathematical upside of replacing manual ad tweaks with automated multi-armed bandit creative testing, real-time bid pacing, and predictive audience pruning."
        activePath="/roi-simulator/"
      />

      <main>
        {/* Core Simulator */}
        <GrowthSimulator onOpenAudit={onOpenAudit} />

        {/* Simulator Methodology Explainer Box */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Simulation Methodology &amp; Benchmarks</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                How Our Algorithmic Model Estimates Performance Lift
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Our calculation model synthesizes verified performance datasets across high-volume Meta Ads, Google Ads, and automated creative testing deployments:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-blue-600 font-extrabold text-lg mb-1">+28% to +42%</div>
                  <div className="text-xs font-bold text-slate-900 mb-1">Conversion Rate Lift (CVR)</div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Achieved via rapid multi-armed bandit creative angle rotation matched to customer psychographics.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-blue-600 font-extrabold text-lg mb-1">-18% to -24%</div>
                  <div className="text-xs font-bold text-slate-900 mb-1">CPA Reduction</div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Eliminates wasted impressions during low-intent hours and non-converting geographic/device clusters.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="text-blue-600 font-extrabold text-lg mb-1">18 to 60 hrs</div>
                  <div className="text-xs font-bold text-slate-900 mb-1">Operational Hours Saved</div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Automates manual bid pacing, weekly reporting spreadsheets, and manual creative asset tagging.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Want to test creative angles that fuel these conversion rates?
                </div>
                <Link
                  to="/copy-lab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Opens Interactive Copy Lab in a new tab"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Explore the Interactive Copy Lab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
