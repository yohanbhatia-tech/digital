import React, { useState } from 'react';
import { Sparkles, Copy, Check, RefreshCw, Eye, ThumbsUp, Zap, Wand2 } from 'lucide-react';

interface AngleOption {
  id: string;
  name: string;
  badge: string;
  hook: string;
  headline: string;
  body: string;
  cta: string;
  predictedCtr: string;
  psychology: string;
}

export const AiCopySandbox: React.FC = () => {
  const [productType, setProductType] = useState<string>('ai_analytics');
  const [activeAngleIndex, setActiveAngleIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Preset campaigns to showcase AI copy synthesis
  const presets: Record<string, { label: string; angles: AngleOption[] }> = {
    ai_analytics: {
      label: 'B2B SaaS: Growth Analytics',
      angles: [
        {
          id: 'pain_point',
          name: 'Pain-Point Agitation',
          badge: 'High Conversion Angle',
          hook: 'Still manually pulling CSVs every Monday morning?',
          headline: 'Eliminate 14 Hours of Spreadsheet Hell Every Week',
          body: 'Stop guessing which ad campaigns drove real enterprise revenue. Digital Growth Lab synthesizes multi-touch attribution and live ad pacing across Google, Meta, and LinkedIn into one autonomous cockpit.',
          cta: 'Start Free 14-Day Pilot',
          predictedCtr: '4.8% (Top 5% Benchmark)',
          psychology: 'Addresses immediate operational fatigue and time anxiety for growth leaders.'
        },
        {
          id: 'social_proof',
          name: 'Authority & Social Proof',
          badge: 'High Trust Angle',
          hook: 'How 420+ hyper-growth brands replaced guessing with algorithms.',
          headline: 'The Secret Weapon Behind 3.4x Average ROAS in 2026',
          body: 'When ad auction algorithms shift hourly, manual adjustments are always too late. Leading marketing teams use autonomous predictive bidding to capture high-margin buyers before competitors bid up the cost.',
          cta: 'See Customer Case Studies',
          predictedCtr: '3.9% (Industry High)',
          psychology: 'Triggers FOMO and institutional validation for risk-averse marketing directors.'
        },
        {
          id: 'direct_benefit',
          name: 'Pure Value & ROI',
          badge: 'Bottom-Funnel Angle',
          hook: 'Cut your blended CAC by 28% without increasing ad budget.',
          headline: 'Algorithmic Marketing Intelligence Built for Pure Margin',
          body: 'Feed your first-party customer data into our self-optimizing engine. Watch real-time machine learning prune non-converting ad traffic while doubling down on 10x LTV buyers automatically.',
          cta: 'Calculate Your Growth Upside',
          predictedCtr: '4.3% (Strong Intent)',
          psychology: 'Direct mathematical value appeal for CFOs and performance marketers.'
        }
      ]
    },
    ecommerce_brand: {
      label: 'D2C Brand: Smart Coffee Maker',
      angles: [
        {
          id: 'lifestyle',
          name: 'Aspirational Lifestyle',
          badge: 'Top Engagement Angle',
          hook: 'Barista-grade micro-foam at the touch of a single button.',
          headline: 'Upgrade Your Morning Ritual to 5-Star Craft Quality',
          body: 'Engineered with precise thermal extraction and dual-boiler pressure, experience silky-smooth flat whites and velvety espresso in under 45 seconds right on your kitchen counter.',
          cta: 'Shop the Reserve Collection',
          predictedCtr: '5.2% (Viral Hook)',
          psychology: 'Appeals to self-identity, craft appreciation, and effortless luxury.'
        },
        {
          id: 'urgency_offer',
          name: 'Frictionless Offer',
          badge: 'Flash Conversion Angle',
          hook: 'Why 24,000 coffee enthusiasts ditched their $10 café runs.',
          headline: 'Save $1,800/Year and Drink Better Espresso at Home',
          body: 'Claim 20% off during our spring showcase, complete with a complimentary 12-month artisan bean subscription and our 60-day risk-free home trial.',
          cta: 'Claim Your 20% Off Bundle',
          predictedCtr: '4.7% (High Purchase Intent)',
          psychology: 'Logical cost-saving justification tied to an unmissable bundle value.'
        }
      ]
    },
    local_service: {
      label: 'Professional Service: Dental & Orthodontics',
      angles: [
        {
          id: 'confidence',
          name: 'Emotional Transformation',
          badge: 'High Intent Angle',
          hook: 'Tired of hiding your smile in family photographs?',
          headline: 'Clear, Discreet Aligners with Zero Metal and Zero Hassle',
          body: 'Get a 3D digital simulation of your new smile in 15 minutes. Custom-molded clear aligners delivered to your door with direct virtual doctor check-ins.',
          cta: 'Book Free 3D Smile Scan',
          predictedCtr: '5.6% (Exceptional Intent)',
          psychology: 'Focuses on emotional relief, self-esteem, and friction-free consultation.'
        },
        {
          id: 'convenience',
          name: 'Speed & Flexibility',
          badge: 'Convenience Angle',
          hook: 'Straight teeth in 6 months without monthly clinic waiting rooms.',
          headline: 'Orthodontics Redesigned Around Your Busy Schedule',
          body: 'Affordable payment plans from $79/month. 100% digital remote monitoring with certified orthodontists means fewer in-office visits and faster results.',
          cta: 'Check Eligibility in 60 Seconds',
          predictedCtr: '4.4% (Strong Lead Gen)',
          psychology: 'Removes traditional friction points: time, clinic visits, and upfront cost.'
        }
      ]
    }
  };

  const currentDataset = presets[productType] || presets.ai_analytics;
  const currentAngle = currentDataset.angles[activeAngleIndex] || currentDataset.angles[0];

  const handleCopy = () => {
    const textToCopy = `Headline: ${currentAngle.headline}\n\nHook: ${currentAngle.hook}\n\nBody: ${currentAngle.body}\n\nCTA: ${currentAngle.cta}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateRegen = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setActiveAngleIndex((prev) => (prev + 1) % currentDataset.angles.length);
    }, 450);
  };

  return (
    <section id="sandbox" className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
            Algorithmic Creative Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Interactive <span className="text-blue-600">AI Copy & Ad Lab</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            See how AI marketing models instantly formulate differentiated psychological hooks, headlines, and call-to-actions tailored to distinct audience stages.
          </p>
        </div>

        {/* Interactive Lab Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 overflow-hidden max-w-5xl mx-auto">
          
          {/* Top Controls */}
          <div className="border-b border-slate-100 bg-slate-50/90 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Category Selector */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">
                Sample Industry:
              </span>
              <select
                value={productType}
                onChange={(e) => {
                  setProductType(e.target.value);
                  setActiveAngleIndex(0);
                }}
                className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
              >
                {Object.entries(presets).map(([key, data]) => (
                  <option key={key} value={key}>
                    {data.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Angle Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {currentDataset.angles.map((angle, idx) => (
                <button
                  key={angle.id}
                  onClick={() => setActiveAngleIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeAngleIndex === idx
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {angle.name}
                </button>
              ))}
              
              <button
                onClick={handleSimulateRegen}
                disabled={isGenerating}
                className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-200/50 transition-colors ml-1 cursor-pointer"
                title="Synthesize next variant"
              >
                <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin text-blue-600' : ''}`} />
              </button>
            </div>

          </div>

          {/* Ad Canvas Display */}
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Live Ad Preview (Facebook/LinkedIn Mock) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
                  
                  {/* Mock Ad Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                        DGL
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                          Digital Growth Lab <span className="text-slate-400 font-normal">Sponsored</span>
                        </div>
                        <div className="text-[10px] text-slate-400">Optimized via Autonomous AI Engine</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
                      Variant #{activeAngleIndex + 1}
                    </span>
                  </div>

                  {/* Hook / Primary Text */}
                  <p className="text-sm font-semibold text-blue-900 mb-2">
                    {currentAngle.hook}
                  </p>
                  
                  {/* Body Copy */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    {currentAngle.body}
                  </p>

                  {/* Visual Creative Placeholder Card */}
                  <div className="rounded-xl bg-gradient-to-tr from-slate-900 via-blue-950 to-blue-900 p-6 text-white mb-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
                    
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block mb-1">
                      Dynamic Creative Layer
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-white leading-snug max-w-sm mb-3">
                      {currentAngle.headline}
                    </h4>
                    
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                      <Zap className="w-3.5 h-3.5 text-blue-400" />
                      Algorithmic Conversion Design
                    </div>
                  </div>

                  {/* Ad Footer & CTA Bar */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-[11px] text-slate-500">
                      digitalgrowthlab.io
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer">
                      {currentAngle.cta}
                    </button>
                  </div>

                </div>
              </div>

              {/* Right Column: AI Diagnostics & Copy Inspector */}
              <div className="lg:col-span-5 space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Engine Diagnostics
                  </span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy Ad Variant</span>
                      </>
                    )}
                  </button>
                </div>

                {/* CTR Prediction */}
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-700">Predicted Click-Through Rate</span>
                    <span className="text-xs font-black text-blue-700">High Confidence</span>
                  </div>
                  <div className="text-xl font-black text-blue-600">
                    {currentAngle.predictedCtr}
                  </div>
                  <div className="w-full h-1.5 bg-blue-200/60 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '82%' }} />
                  </div>
                </div>

                {/* Psychographic Driver */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <span className="text-xs font-bold text-slate-900 block mb-1">
                    Psychological Driver
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentAngle.psychology}
                  </p>
                </div>

                {/* Live Feature Note */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-xs text-slate-500 space-y-1.5">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    How AI Generates This
                  </div>
                  <p>
                    The language model parses customer reviews, Reddit community threads, and historical purchase data to pinpoint exact conversational language patterns that drive action.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
