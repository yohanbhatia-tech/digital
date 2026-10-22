import React, { useState, useMemo } from 'react';
import { TrendingUp, ArrowRight, Sparkles, Sliders, RefreshCw } from 'lucide-react';

interface GrowthSimulatorProps {
  onOpenAudit: () => void;
}

export const GrowthSimulator: React.FC<GrowthSimulatorProps> = ({ onOpenAudit }) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(15000);
  const [conversionRate, setConversionRate] = useState<number>(2.2);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(120);
  const [industry, setIndustry] = useState<'ecommerce' | 'saas' | 'services'>('ecommerce');

  // Multipliers based on industry AI benchmarks
  const metrics = useMemo(() => {
    const estimatedCpc = industry === 'ecommerce' ? 1.4 : industry === 'saas' ? 4.8 : 2.9;
    const estimatedClicks = monthlySpend / estimatedCpc;
    const baselineConversions = Math.round(estimatedClicks * (conversionRate / 100));
    const baselineRevenue = baselineConversions * avgOrderValue;
    const baselineRoas = monthlySpend > 0 ? (baselineRevenue / monthlySpend).toFixed(2) : '0';

    const cvrUpliftPct = industry === 'ecommerce' ? 0.34 : industry === 'saas' ? 0.42 : 0.28;
    const newConversionRate = +(conversionRate * (1 + cvrUpliftPct)).toFixed(2);
    
    const newClicks = Math.round(estimatedClicks * 1.15);
    const aiConversions = Math.round(newClicks * (newConversionRate / 100));
    const aiRevenue = aiConversions * avgOrderValue;
    const additionalMonthlyRevenue = Math.max(0, aiRevenue - baselineRevenue);
    const additionalAnnualRevenue = additionalMonthlyRevenue * 12;
    const aiRoas = monthlySpend > 0 ? (aiRevenue / monthlySpend).toFixed(2) : '0';

    const hoursSavedPerMonth = Math.min(80, Math.round(18 + (monthlySpend / 3000) * 3));

    return {
      baselineRevenue,
      baselineRoas,
      baselineConversions,
      newConversionRate,
      aiRevenue,
      aiRoas,
      aiConversions,
      additionalMonthlyRevenue,
      additionalAnnualRevenue,
      hoursSavedPerMonth,
      cvrUpliftPct: Math.round(cvrUpliftPct * 100),
    };
  }, [monthlySpend, conversionRate, avgOrderValue, industry]);

  const resetDefaults = () => {
    setMonthlySpend(15000);
    setConversionRate(2.2);
    setAvgOrderValue(120);
    setIndustry('ecommerce');
  };

  return (
    <section id="simulator" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Interactive Modeling
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            AI Growth &amp; <span className="text-blue-600">ROI Simulator</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Calculate your projected revenue expansion and operational hours saved by switching from manual campaign management to algorithmic intelligence.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Input Controls (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-200/80 bg-slate-50/40">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/60">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                  <Sliders className="w-4 h-4 text-blue-600" />
                  <span>Input Parameters</span>
                </div>
                <button
                  onClick={resetDefaults}
                  className="text-xs text-slate-500 hover:text-blue-600 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Defaults</span>
                </button>
              </div>

              {/* Industry Switcher: Clean segmented control */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                  Business Model
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-200/50 rounded-xl">
                  {[
                    { id: 'ecommerce', label: 'E-commerce' },
                    { id: 'saas', label: 'B2B SaaS' },
                    { id: 'services', label: 'Services' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setIndustry(item.id as any)}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        industry === item.id
                          ? 'bg-white text-slate-900 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider 1: Monthly Ad Spend */}
              <div className="mb-7">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Monthly Ad Spend
                  </span>
                  <span className="text-base font-extrabold text-blue-600 font-mono tabular-nums">
                    ${monthlySpend.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono tabular-nums mt-1.5">
                  <span>$2,000</span>
                  <span>$50,000</span>
                  <span>$100,000+</span>
                </div>
              </div>

              {/* Slider 2: Current Conversion Rate */}
              <div className="mb-7">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Current Conversion Rate
                  </span>
                  <span className="text-base font-extrabold text-blue-600 font-mono tabular-nums">
                    {conversionRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="8.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono tabular-nums mt-1.5">
                  <span>0.5%</span>
                  <span>4.0%</span>
                  <span>8.0%</span>
                </div>
              </div>

              {/* Slider 3: Average Order / Contract Value */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Avg Order / Deal Value (AOV)
                  </span>
                  <span className="text-base font-extrabold text-blue-600 font-mono tabular-nums">
                    ${avgOrderValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="2500"
                  step="25"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono tabular-nums mt-1.5">
                  <span>$25</span>
                  <span>$1,250</span>
                  <span>$2,500</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-900 leading-relaxed font-normal">
                  Simulation is grounded in verified multi-armed bandit benchmark datasets across Google Ads, Meta Ads, and algorithmic creative optimization pipelines.
                </p>
              </div>

            </div>

            {/* Results Display (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Projected Growth Summary
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-0.5">Estimated Algorithmic Upside</h3>
                  </div>
                  <div className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200/60 font-mono tabular-nums">
                    +{metrics.cvrUpliftPct}% CVR Lift
                  </div>
                </div>

                {/* Big Metric Box: Crisp solid blue, easy on the eyes */}
                <div className="p-6 sm:p-8 rounded-2xl bg-blue-600 text-white mb-8 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-100 block mb-1">
                    Projected Extra Annual Revenue
                  </span>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 font-mono tabular-nums">
                    +${metrics.additionalAnnualRevenue.toLocaleString()}
                  </div>
                  <div className="text-xs sm:text-sm text-blue-100 flex items-center gap-1.5 font-medium">
                    <TrendingUp className="w-4 h-4" />
                    <span>+${metrics.additionalMonthlyRevenue.toLocaleString()} additional revenue generated per month</span>
                  </div>
                </div>

                {/* Metric Comparisons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  
                  {/* ROAS Comparison */}
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
                    <span className="text-xs font-medium text-slate-500 block mb-1">Projected ROAS</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-slate-900 font-mono tabular-nums">{metrics.aiRoas}x</span>
                      <span className="text-xs text-slate-400 line-through font-mono tabular-nums">{metrics.baselineRoas}x</span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-600 mt-1 block">
                      Efficiency boost
                    </span>
                  </div>

                  {/* Monthly Conversions */}
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
                    <span className="text-xs font-medium text-slate-500 block mb-1">Monthly Customers</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-slate-900 font-mono tabular-nums">{metrics.aiConversions}</span>
                      <span className="text-xs text-slate-400 font-mono tabular-nums">vs {metrics.baselineConversions}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-blue-600 mt-1 block">
                      +{metrics.aiConversions - metrics.baselineConversions} new conversions
                    </span>
                  </div>

                  {/* Operational Time Saved */}
                  <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50">
                    <span className="text-xs font-medium text-slate-500 block mb-1">Time Saved Monthly</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-blue-600 font-mono tabular-nums">{metrics.hoursSavedPerMonth} hrs</span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 mt-1 block">
                      Autonomous bidding &amp; copy
                    </span>
                  </div>

                </div>

                {/* Growth Levers Breakdown */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Attribution of Growth Gains
                  </h4>
                  
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                        <span>Dynamic Creative Multi-Armed Bandit Testing</span>
                        <span className="text-blue-600 font-bold font-mono tabular-nums">45% of lift</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                        <span>Predictive Bidding &amp; Waste Elimination</span>
                        <span className="text-blue-600 font-bold font-mono tabular-nums">35% of lift</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
                        <span>Intent Scoring &amp; Precision Audience Pruning</span>
                        <span className="text-blue-600 font-bold font-mono tabular-nums">20% of lift</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full bg-blue-400 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  Ready to deploy these benchmarks onto your ad accounts?
                </div>
                <button
                  onClick={onOpenAudit}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
                >
                  <span>Request Custom Growth Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
