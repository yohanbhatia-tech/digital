import React, { useEffect } from 'react';
import { SeoManager } from '../components/SeoManager.tsx';
import { SEO_DATA } from '../config/seoConfig.ts';
import { SectionPageHeader } from '../components/SectionPageHeader.tsx';
import { AiCopySandbox } from '../components/AiCopySandbox.tsx';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Layers, BookOpen, Rocket } from 'lucide-react';

interface CopyLabPageProps {
  onOpenAudit?: () => void;
}

export const CopyLabPage: React.FC<CopyLabPageProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <SeoManager seo={SEO_DATA.copyLab} />

      <SectionPageHeader
        badge="Algorithmic Creative Studio"
        title="Interactive AI"
        titleAccent="Copy & Ad Lab"
        description="Experience firsthand how artificial intelligence creates differentiated psychological hooks, emotional angles, and predicted click-through rate (CTR) scores across industries."
        activePath="/copy-lab/"
      />

      <main>
        {/* Core Interactive Sandbox */}
        <AiCopySandbox />

        {/* Copywriting Frameworks Explainer */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Psychographic Engineering
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                The 4 Algorithmic Angle Archetypes
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Machine learning models generate high-converting ad copy by aligning value propositions with distinct human decision drivers:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60">
                <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 block mb-1">
                  Angle 01
                </span>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Pain-Point Agitation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Focuses on immediate operational friction, time anxiety, and wasted capital to spur problem-aware prospects to take action.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60">
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 block mb-1">
                  Angle 02
                </span>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Social Proof &amp; Authority</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Triggers FOMO and risk-reduction by highlighting institutional adoption, customer case counts, and peer validation.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60">
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 block mb-1">
                  Angle 03
                </span>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Direct Economic ROI</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mathematical proof points detailing customer acquisition cost savings, margin expansion, and payback periods for CFOs.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60">
                <span className="text-xs font-extrabold uppercase tracking-wider text-purple-600 block mb-1">
                  Angle 04
                </span>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Aspirational Transformation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Appeals to self-identity, speed-to-results, and frictionless luxury to command premium pricing.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-blue-50/80 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="text-sm font-bold text-slate-900">Want to master the tools that power these angles?</h5>
                <p className="text-xs text-slate-600">Read our practical starter breakdown comparing top copywriting and automation software.</p>
              </div>
              <Link
                to="/blog/ai-marketing-tools-for-beginners/"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold whitespace-nowrap transition-all shadow-sm"
              >
                Read AI Marketing Tools Guide &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
