import React, { useEffect } from 'react';
import { SeoManager } from '../components/SeoManager.tsx';
import { SEO_DATA } from '../config/seoConfig.ts';
import { SectionPageHeader } from '../components/SectionPageHeader.tsx';
import { StrategyPlaybook } from '../components/StrategyPlaybook.tsx';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Target, Sparkles, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';

interface PlaybookPageProps {
  onOpenAudit: () => void;
}

export const PlaybookPage: React.FC<PlaybookPageProps> = ({ onOpenAudit }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <SeoManager seo={SEO_DATA.playbook} />

      <SectionPageHeader
        badge="Execution Framework"
        title="90-Day AI Marketing Implementation"
        titleAccent="Playbook"
        description="A structured, phased operational roadmap to transition growth teams from manual ad tweaking and guesswork into a high-leverage algorithmic acquisition engine."
        activePath="/playbook/"
      />

      <main>
        {/* Core Playbook Component */}
        <StrategyPlaybook onOpenAudit={onOpenAudit} />

        {/* Execution Governance & Risk Mitigation Section */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Operational Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                How to Prevent Algorithmic Budget Waste &amp; Ad Fatigue
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Autonomous marketing fails when teams hand over the budget without guardrails. Our 90-day protocol establishes programmatic circuit breakers to ensure high capital efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Automated Pacing Circuit Breakers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ad accounts automatically throttle spend if 3-day trailing ROAS drops 15% below target or if cost-per-acquisition (CPA) spikes beyond your break-even threshold.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Creative Refresh Cadence</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Never wait for ad fatigue to degrade margins. Our pipeline automatically generates 5 new visual hooks and 8 headline permutations whenever frequency exceeds 2.8 on Meta.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Clean Margin Feedback Loops</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Integrate ERP or payment margin data directly into ad pixels to train the algorithms on net gross profit rather than raw top-line revenue vanity metrics.
                </p>
              </div>
            </div>

            {/* AEO Direct Answer Q&A Section */}
            <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-blue-600 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions &amp; Direct Answers</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-2">
                    What is covered in the 90-day AI marketing roadmap?
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The 90-day AI marketing roadmap is structured into three consecutive 30-day phases: Phase 1 establishes the first-party signal moat through server-side Conversions API (CAPI) and high-LTV customer seed lists; Phase 2 introduces autonomous creative multi-armed bandit testing with dynamic headline synthesis; and Phase 3 activates predictive value-based bid pacing, Generative Engine Optimization (GEO), and cookieless Marketing Mix Modeling (MMM).
                  </p>
                </div>
                <hr className="border-slate-100" />
                <div>
                  <h2 className="text-lg font-bold text-slate-900 mb-2">
                    What is the most critical milestone in the first 30 days?
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The single most critical milestone in the first 30 days is deploying server-side conversion telemetry (CAPI) and creating an offline conversion feedback loop. Without clean server-to-server data feeding verified purchase margins and deal stages back into Meta and Google ad algorithms, any subsequent automated bidding will optimize for low-quality spam leads.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Navigation to Other Unique Sections */}
            <div className="mt-12 text-center">
              <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-4">
                Explore Corresponding Tools
              </p>
              <div className="inline-flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/roi-simulator/"
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all flex items-center gap-2"
                >
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                  <span>Simulate Your Growth ROI &rarr;</span>
                </Link>
                <Link
                  to="/core-pillars/"
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all flex items-center gap-2"
                >
                  <Target className="w-4 h-4 text-blue-600" />
                  <span>The 6 Core Pillars &rarr;</span>
                </Link>
                <Link
                  to="/articles/"
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Read In-Depth Guides &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
