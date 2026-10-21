import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, AlertCircle, BarChart3, ShieldCheck, Download, Copy, Check } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'loading' | 'results'>('form');
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [monthlySpend, setMonthlySpend] = useState('$10k - $50k');
  const [primaryBottleneck, setPrimaryBottleneck] = useState('High Customer Acquisition Cost (CAC)');
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    setTimeout(() => {
      setStep('results');
    }, 1200);
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  const handleCopyReport = () => {
    const report = `Digital Growth Lab - AI Marketing Diagnostic for ${companyName || 'Your Brand'}\n` +
      `Readiness Score: 78/100 (Strong High-Leverage Opportunity)\n` +
      `Identified Bottleneck: ${primaryBottleneck}\n` +
      `Estimated ROAS Expansion: +32% to +48%\n` +
      `Priority 1: Implement Server-Side Conversions API for 100% signal recovery.\n` +
      `Priority 2: Deploy Multi-Armed Bandit Dynamic Creative Testing.\n` +
      `Priority 3: Enable Value-Based Bidding on high-LTV cohorts.`;
    navigator.clipboard.writeText(report);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Form State */}
        {step === 'form' && (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant AI Growth Diagnostic</span>
            </div>
            
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              Get Your Brand’s <span className="text-blue-600">AI Readiness Score</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Answer 3 quick questions to simulate your algorithmic growth upside and identify your top ad account bottlenecks.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Health or Peak Wear"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Website / Store URL
                </label>
                <input
                  type="text"
                  placeholder="e.g. acmehealth.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Monthly Ad Spend
                  </label>
                  <select
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none cursor-pointer"
                  >
                    <option>&lt; $5,000 / mo</option>
                    <option>$5k - $10k / mo</option>
                    <option>$10k - $50k / mo</option>
                    <option>$50k - $150k / mo</option>
                    <option>$150k+ / mo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Work Email (For Report)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Primary Growth Challenge
                </label>
                <select
                  value={primaryBottleneck}
                  onChange={(e) => setPrimaryBottleneck(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none cursor-pointer"
                >
                  <option>High Customer Acquisition Cost (CAC)</option>
                  <option>Ad Creative Fatigue & Slow Production</option>
                  <option>Attribution & Cookieless Tracking Gaps</option>
                  <option>Inconsistent Lead Quality & Low Close Rates</option>
                  <option>Scaling Ad Spend Without Decreasing ROAS</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Generate AI Readiness Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Zero spam. Data processed strictly under standard privacy protocols.</span>
              </div>
            </form>
          </div>
        )}

        {/* Loading State */}
        {step === 'loading' && (
          <div className="p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 animate-pulse ring-8 ring-blue-50/50">
              <Sparkles className="w-8 h-8 animate-spin" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Analyzing Brand Growth Profile...</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              Evaluating ad spend tier, multi-armed bandit potential, and first-party conversion telemetry benchmarks.
            </p>
          </div>
        )}

        {/* Results State */}
        {step === 'results' && (
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                  Diagnostic Result For
                </span>
                <h4 className="text-xl font-black text-slate-900">
                  {companyName || 'Your Brand'}
                </h4>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-blue-600">78 / 100</span>
                <span className="block text-[10px] font-bold text-emerald-600 uppercase">
                  High Upside Tier
                </span>
              </div>
            </div>

            {/* Overview Box */}
            <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 mb-6">
              <div className="text-xs font-bold text-blue-900 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Executive Algorithmic Finding</span>
              </div>
              <p className="text-xs text-blue-800 leading-relaxed">
                Your current bottleneck (<strong>{primaryBottleneck}</strong>) at the <strong>{monthlySpend}</strong> tier indicates approximately <strong>26% to 38%</strong> ad spend inefficiency due to manual campaign pacing and delayed creative rotation.
              </p>
            </div>

            {/* Action Items */}
            <div className="space-y-3 mb-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Top 3 Algorithmic Priorities:
              </h5>
              
              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h6 className="text-xs font-bold text-slate-900">Deploy Server-Side CAPI + Offline Revenue Ingestion</h6>
                  <p className="text-[11px] text-slate-600">Feeds deep conversion margin signals back into ad networks to bid only for profit.</p>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h6 className="text-xs font-bold text-slate-900">Implement Modular Multi-Armed Bandit Creative Testing</h6>
                  <p className="text-[11px] text-slate-600">Dispatches 30+ hook variants weekly, automatically routing spend to top 5% performers.</p>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h6 className="text-xs font-bold text-slate-900">Activate Predictive Churn & Retention Triggers</h6>
                  <p className="text-[11px] text-slate-600">Intercepts high-value customers showing drop-off patterns before churn occurs.</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleCopyReport}
                className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Full Diagnostic'}</span>
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>Done & Return</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
