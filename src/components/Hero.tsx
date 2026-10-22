import React from 'react';
import { ArrowRight, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Subtle, ambient background lighting - soft on the eyes */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(219, 234, 254, 0.12) 40%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Clean Editorial Kicker (Zero-Pill discipline) */}
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
            Algorithmic Growth &amp; Intelligence
          </div>

          {/* Main Title - Single Clear H1 with Balanced Type */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6 text-balance">
            Digital Growth <span className="text-blue-600">Lab</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-700 mt-2">
              Next-Gen AI Digital Marketing Engine
            </span>
          </h1>

          {/* Short Introduction to AI Digital Marketing */}
          <div className="space-y-4 mb-10 text-balance">
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
              <strong className="text-slate-900 font-semibold">AI digital marketing</strong> leverages machine learning, predictive algorithms, and automated reasoning to decode customer intent, personalize campaigns in real-time, and scale acquisition at a fraction of traditional costs.
            </p>
            <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Moving beyond static demographics and guesswork, modern marketing algorithms continuously test thousands of creative variations, predict customer lifetime value, and dynamically optimize ad budgets 24/7.
            </p>
          </div>

          {/* Clean Primary & Secondary CTA Actions - Each Opens in a Different Tab */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/roi-simulator/"
              target="_blank"
              rel="noopener noreferrer"
              title="Opens Growth ROI Simulator in a new tab"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all cursor-pointer"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Simulate Growth ROI</span>
              <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
            </Link>
            <Link
              to="/what-is-ai-marketing/"
              target="_blank"
              rel="noopener noreferrer"
              title="Opens What is AI Marketing in a new tab"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base border border-slate-200/80 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer"
            >
              <span>Explore AI Capabilities</span>
              <ExternalLink className="w-4 h-4 ml-0.5 text-slate-400" />
            </Link>
          </div>

          {/* Trust Metrics Bar: Clean Typography with Tabular Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50/60 border border-slate-200/60 shadow-sm">
            <div className="p-2 text-center border-r border-slate-200/60 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-mono tabular-nums tracking-tight">3.4x</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Average ROAS Uplift</div>
            </div>
            <div className="p-2 text-center border-r border-slate-200/60 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">68%</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Faster Asset Iteration</div>
            </div>
            <div className="p-2 text-center border-r border-slate-200/60 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-mono tabular-nums tracking-tight">24/7</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Autonomous Bid Pacing</div>
            </div>
            <div className="p-2 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">&lt;300ms</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">Real-Time Intent Scoring</div>
            </div>
          </div>

        </div>

        {/* Visual Showcase: Clean 3-Stage Architecture Breakdown */}
        <div className="mt-16 max-w-5xl mx-auto rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-100 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Unified Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                How the AI Growth Engine Operates
              </h2>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Closed-Loop Feedback System
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 01 */}
            <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-200/60 hover:border-blue-200 hover:bg-blue-50/20 transition-all flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center font-bold text-xs mb-4">
                  01
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Predictive Ingestion
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aggregates first-party signals, clickstream events, and intent triggers to score buyer propensity before prospects bounce.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200/50 text-[11px] text-blue-600 font-semibold">
                Intent Scoring &amp; Audience Clustering
              </div>
            </div>

            {/* Step 02 */}
            <div className="p-6 rounded-2xl bg-blue-50/30 border border-blue-200/70 hover:border-blue-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs mb-4 shadow-sm">
                  02
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Generative Personalization
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Synthesizes hyper-targeted copy variants, dynamic value propositions, and personalized landing page elements on the fly.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-blue-200/50 text-[11px] text-blue-700 font-semibold">
                Multi-Armed Bandit Creative Testing
              </div>
            </div>

            {/* Step 03 */}
            <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-200/60 hover:border-blue-200 hover:bg-blue-50/20 transition-all flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-100/70 text-blue-700 flex items-center justify-center font-bold text-xs mb-4">
                  03
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  Autonomous Capital Pacing
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Shifts advertising budget towards top-converting placements and times of peak buyer demand automatically.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200/50 text-[11px] text-blue-600 font-semibold">
                Real-Time ROAS Maximization
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
