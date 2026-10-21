import React, { useState } from 'react';
import { 
  Palette, 
  BarChart, 
  Target, 
  MessageSquareCode, 
  Search, 
  PieChart, 
  CheckCircle, 
  ChevronRight, 
  Zap,
  Sparkles
} from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  tagline: string;
  icon: any;
  tech: string;
  description: string;
  keyTactics: string[];
  impactStat: string;
  caseNote: string;
}

export const PillarsSection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('creative');

  const pillars: Pillar[] = [
    {
      id: 'creative',
      title: 'Autonomous Creative Synthesis',
      tagline: 'Infinite message variations tailored to emotional triggers',
      icon: Palette,
      tech: 'Multimodal LLMs & Computer Vision',
      description: 'AI analyzes top-performing competitor hooks and historical CTR data to generate dozens of tailored headlines, visual compositions, and video scripts matched to buyer personas.',
      keyTactics: [
        'Dynamic headline generation per traffic temperature (Cold/Warm/Hot)',
        'Automated hook variation testing for short-form video & reels',
        'Visual sentiment and emotional arousal scoring before spend'
      ],
      impactStat: '+48% higher creative engagement',
      caseNote: 'E-commerce fashion brand iterated 140 video hooks in 48 hours without extra design headcount.'
    },
    {
      id: 'bidding',
      title: 'Predictive Auction & Bid Pacing',
      tagline: 'Autonomous capital allocation to highest-margin buyers',
      icon: BarChart,
      tech: 'Reinforcement Learning & Bandit Models',
      description: 'Machine learning algorithms continuously assess auction density, device intent, and time-of-day conversion probabilities to dynamically bid higher only for prospects likely to convert at target CPA.',
      keyTactics: [
        'Real-time automated budget shifting across Google, Meta & TikTok',
        'Smart bid capping during low-conversion dwell windows',
        'Margin-conscious ROAS bidding tied to actual inventory availability'
      ],
      impactStat: '-28% lower blended CAC',
      caseNote: 'B2B software scale-up decreased customer acquisition cost from $420 to $302 in 6 weeks.'
    },
    {
      id: 'audience',
      title: 'Predictive Audience & LTV Modeling',
      tagline: 'Targeting future value, not just past demographics',
      icon: Target,
      tech: 'Survival Analysis & Neural Clustering',
      description: 'Rather than optimizing for cheap clicks, AI models identify patterns in early user behavior that correlate with high lifetime customer value (LTV) and low return/churn rates.',
      keyTactics: [
        'Predictive Value-Based Bidding (tROAS) integration',
        'Lookalike seeds generated exclusively from top 10% LTV cohorts',
        'Early churn propensity warnings for proactive intervention'
      ],
      impactStat: '3.1x higher 12-month customer LTV',
      caseNote: 'Subscription meal service weeded out discount hunters and tripled high-retention cohorts.'
    },
    {
      id: 'conversational',
      title: 'Conversational Lead Qualification',
      tagline: 'Zero-latency response and bespoke objection handling',
      icon: MessageSquareCode,
      tech: 'Contextual RAG & Agentic Workflows',
      description: 'Deploy AI sales engineers and concierge bots that answer complex technical questions, calculate custom quotes, and book qualified meetings on your sales team’s calendar within 30 seconds.',
      keyTactics: [
        'Real-time qualification based on budget, timeline, and need',
        'Autonomous calendar booking & CRM enrichment via Webhooks',
        'Multilingual 24/7 objection handling tailored to industry jargon'
      ],
      impactStat: '89% inbound lead engagement rate',
      caseNote: 'Financial advisory firm booked 4x more discovery calls from late-night mobile traffic.'
    },
    {
      id: 'geo',
      title: 'Generative Engine Optimization (GEO)',
      tagline: 'Ensuring your brand is cited inside AI search engines',
      icon: Search,
      tech: 'Semantic Graph Embeddings & Retrieval Prep',
      description: 'With search shifting towards Perplexity, ChatGPT, and Google AI Overviews, GEO structures your technical data, citations, and authority signals so AI models cite your products as the premier recommendation.',
      keyTactics: [
        'Knowledge graph entity mapping and Schema.org semantic tuning',
        'High-density informational corpus creation to win AI citations',
        'Direct brand sentiment monitoring inside LLM synthesized answers'
      ],
      impactStat: '+140% growth in AI-driven referral visits',
      caseNote: 'B2B logistics brand became the #1 cited vendor recommendation in ChatGPT business searches.'
    },
    {
      id: 'attribution',
      title: 'Marketing Mix Modeling (MMM)',
      tagline: 'True multi-touch attribution without privacy loss',
      icon: PieChart,
      tech: 'Bayesian Econometrics & Causal Inference',
      description: 'Modern cookieless measurement that uses advanced econometric regression to calculate the true incremental revenue generated by brand, PR, paid social, and organic channels.',
      keyTactics: [
        'Cookieless incremental lift measurement across offline and online',
        'Ad fatigue curve detection and saturation warnings',
        'Scenario forecasting to test $50k to $500k budget allocation scenarios'
      ],
      impactStat: '96% attribution accuracy post-cookie',
      caseNote: 'Omnichannel retailer shifted $80k from saturated search to under-indexed podcast sponsorships with direct ROI.'
    }
  ];

  const activePillar = pillars.find(p => p.id === selectedPillarId) || pillars[0];

  return (
    <section id="pillars" className="py-20 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            The 6 Pillars of the <span className="text-blue-600">AI Growth Lab</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every high-growth company in the modern era runs on these algorithmic pillars. Click any discipline to inspect tactical execution and verified benchmarks.
          </p>
        </div>

        {/* Interactive Pillars Grid + Detailed Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pillar Selector List (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = pillar.id === selectedPillarId;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-blue-600 shadow-md shadow-blue-500/10 ring-2 ring-blue-500/20'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-blue-700' : 'text-slate-900'}`}>
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-500 truncate max-w-[240px] sm:max-w-[280px]">
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    isSelected ? 'text-blue-600 translate-x-1' : 'text-slate-300 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Pillar Deep Dive Panel (Right 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xl shadow-slate-100/70">
            
            <div className="flex items-start justify-between flex-wrap gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Technology: {activePillar.tech}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {activePillar.title}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                {activePillar.impactStat}
              </div>
            </div>

            <p className="text-slate-700 text-base leading-relaxed my-6 font-normal">
              {activePillar.description}
            </p>

            {/* Tactical Checklist */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Tactical Playbook Execution
              </h4>
              <div className="space-y-2.5">
                {activePillar.keyTactics.map((tactic, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{tactic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini Case Study Note */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                Verified Application Note
              </div>
              <p className="text-xs sm:text-sm text-slate-600">
                "{activePillar.caseNote}"
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
