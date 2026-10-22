import React, { useState } from 'react';
import { CheckCircle2, Calendar, Rocket, ArrowRight } from 'lucide-react';

interface StrategyPlaybookProps {
  onOpenAudit: () => void;
}

export const StrategyPlaybook: React.FC<StrategyPlaybookProps> = ({ onOpenAudit }) => {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      step: 'Phase 01',
      timeframe: 'Days 1 – 30',
      title: 'Signal Cleanse & First-Party Data Ingestion',
      subtitle: 'Build the foundational data moat that powers all algorithmic models',
      description: 'AI is only as good as the underlying telemetry. Before deploying autonomous bidding, we clean conversion signals and ensure complete identity resolution.',
      deliverables: [
        'Server-Side Conversion API (CAPI) deployment across Meta, Google & TikTok',
        'Offline conversion feedback loop linking Stripe/CRM deals to ad click IDs',
        'High-LTV customer seed list extraction (top 15% revenue generating accounts)',
        'Suppression of low-margin zip codes and non-converting bot traffic'
      ],
      resultMetric: '100% Signal Match Quality'
    },
    {
      step: 'Phase 02',
      timeframe: 'Days 31 – 60',
      title: 'Autonomous Creative & Multi-Armed Bandit Testing',
      subtitle: 'Scale creative volume 10x without proportional headcounts',
      description: 'Replace subjective opinion with objective machine testing. Hundreds of micro-variations of hooks, scripts, and imagery are tested dynamically with capital flowing only to proven converters.',
      deliverables: [
        'Dynamic headline and value-prop generation for top search keywords',
        'Modular video hook permutations tested with statistical significance thresholds',
        'Automated creative fatigue warnings and replacement triggering',
        'Psychographic landing page personalization based on UTM parameters'
      ],
      resultMetric: '+38% Higher Creative Win Rate'
    },
    {
      step: 'Phase 03',
      timeframe: 'Days 61 – 90+',
      title: 'Predictive Pacing, GEO & Cookieless MMM',
      subtitle: 'Full closed-loop autonomy across acquisition, retention, and AI search',
      description: 'Transition from reactive budgeting to automated predictive pacing and Generative Engine Optimization (GEO) so your brand dominates AI summaries on ChatGPT, Perplexity, and Google.',
      deliverables: [
        'Value-Based tROAS bid pacing adjusting to peak purchasing hours in real-time',
        'Generative Engine Optimization (GEO) corpus optimization for LLM recommendations',
        'Bayesian Marketing Mix Modeling (MMM) across brand, paid, and organic channels',
        'Automated churn-risk intervention and win-back sequence activation'
      ],
      resultMetric: '3.4x Long-term ROAS Uplift'
    }
  ];

  return (
    <section id="playbook" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Execution Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            The 90-Day <span className="text-blue-600">AI Implementation</span> Playbook
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            How modern marketing leaders transition from manual guesswork to a self-learning growth engine in three structured sprints.
          </p>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 max-w-2xl mx-auto">
          {phases.map((phase, idx) => (
            <button
              key={phase.step}
              onClick={() => setActivePhase(idx)}
              className={`w-full sm:w-auto flex-1 px-5 py-3 rounded-xl text-left sm:text-center transition-all cursor-pointer flex items-center justify-between sm:justify-center gap-2.5 border ${
                activePhase === idx
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                activePhase === idx ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {phase.step}
              </span>
              <span className="text-xs sm:text-sm font-semibold">{phase.timeframe}</span>
            </button>
          ))}
        </div>

        {/* Selected Phase Detail Showcase */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{phases[activePhase].step} · {phases[activePhase].timeframe}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {phases[activePhase].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                {phases[activePhase].subtitle}
              </p>
            </div>
            <div className="text-xs font-semibold text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-lg border border-blue-100 whitespace-nowrap">
              Benchmark: {phases[activePhase].resultMetric}
            </div>
          </div>

          <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
            {phases[activePhase].description}
          </p>

          {/* Key Deliverables */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
              Core Technical Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {phases[activePhase].deliverables.map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-200/60 bg-slate-50/50 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Card Action */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <Rocket className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Want this roadmap executed for your brand?</h4>
                <p className="text-xs text-slate-500 font-normal">Get a tailored audit of your ad accounts, pixel telemetry, and creative gaps.</p>
              </div>
            </div>
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Request Roadmap Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
