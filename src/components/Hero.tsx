import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap, Target, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onSimulateClick: () => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onSimulateClick, onOpenAudit }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Subtle blue accent background glow - ultra clean */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(219, 234, 254, 0.18) 40%, transparent 75%)',
        }}
      />
      
      {/* Decorative subtle blue grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wide uppercase shadow-sm mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Next-Gen Marketing Intelligence
          </div>

          {/* Main Title - Single Clear H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
            Digital Growth <span className="text-blue-600">Lab</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-700 mt-2.5">
              Next-Gen AI Digital Marketing Engine
            </span>
          </h1>

          {/* Short Introduction to AI Digital Marketing */}
          <div className="space-y-4 mb-10">
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
              <strong className="text-slate-900 font-semibold">AI digital marketing</strong> leverages machine learning, predictive algorithms, and automated reasoning to decode customer intent, personalize campaigns in real-time, and scale acquisition at a fraction of traditional costs.
            </p>
            <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Moving beyond static demographics and guesswork, modern marketing algorithms continuously test thousands of creative variations, predict customer lifetime value, and dynamically optimize ad budgets 24/7.
            </p>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onSimulateClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Simulate Growth ROI</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm hover:border-blue-300 transition-all cursor-pointer"
            >
              <span>Explore AI Capabilities</span>
            </button>
          </div>

          {/* Trust Metrics Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-sm">
            <div className="p-3 text-center border-r border-slate-200/60 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight">3.4x</div>
              <div className="text-xs font-medium text-slate-500 mt-0.5">Average ROAS Uplift</div>
            </div>
            <div className="p-3 text-center border-r border-slate-200/60 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">68%</div>
              <div className="text-xs font-medium text-slate-500 mt-0.5">Faster Asset Iteration</div>
            </div>
            <div className="p-3 text-center border-r border-slate-200/60 last:border-r-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 tracking-tight">24/7</div>
              <div className="text-xs font-medium text-slate-500 mt-0.5">Autonomous Bid Pacing</div>
            </div>
            <div className="p-3 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">&lt; 300ms</div>
              <div className="text-xs font-medium text-slate-500 mt-0.5">Real-time Intent Scoring</div>
            </div>
          </div>

        </div>

        {/* Visual Preview Card: The AI Marketing Architecture Showcase */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50">
          <div className="flex flex-col md:flex-row items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Unified Architecture</span>
              <h3 className="text-xl font-bold text-slate-900">How the AI Growth Engine Operates</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Engine Active
              </span>
              <span className="text-xs text-slate-400">Algorithmic Closed Loop</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative p-5 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3 group-hover:scale-105 transition-transform">
                01
              </div>
              <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                Predictive Ingestion
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aggregates first-party signals, clickstream events, and intent triggers to score buyer propensity before they bounce.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-[11px] text-blue-600 font-medium">
                Intent Scoring & Audience Clustering
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative p-5 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-3 group-hover:scale-105 transition-transform shadow-md shadow-blue-500/20">
                02
              </div>
              <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                Generative Personalization
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Synthesizes hyper-targeted copy variants, dynamic value propositions, and personalized landing page elements on the fly.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-[11px] text-blue-600 font-medium">
                Multi-Armed Bandit Creative Testing
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative p-5 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3 group-hover:scale-105 transition-transform">
                03
              </div>
              <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                Autonomous Capital Pacing
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Shifts advertising budget towards top-converting placements and times of peak buyer demand automatically.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center text-[11px] text-blue-600 font-medium">
                Real-Time ROAS Maximization
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
