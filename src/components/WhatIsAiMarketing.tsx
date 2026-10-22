import React, { useState } from 'react';
import { Layers, Clock, TrendingUp, Users, Cpu, ShieldAlert, Sparkles, Check, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhatIsAiMarketing: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<number>(0);

  const comparisons = [
    {
      title: "Audience Segmentation",
      traditional: "Manual grouping based on broad demographics (age, city, generic job title). Segments take weeks to research and stay static.",
      aiPowered: "Real-time behavioral clustering using deep learning. Analyzes micro-interactions, buying intent signals, and predicts purchase propensity within seconds.",
      metric: "4.2x higher conversion affinity",
      badge: "Real-Time Intent"
    },
    {
      title: "Ad Creative & Copy Testing",
      traditional: "Human copywriters write 2-3 variants. Marketers wait 14 days for statistical significance, often burning budget on underperforming variants.",
      aiPowered: "Autonomous generative synthesis creates 50+ modular angles. Multi-armed bandit algorithms allocate ad spend dynamically to winners within hours.",
      metric: "73% faster creative win rates",
      badge: "Dynamic Synthesis"
    },
    {
      title: "Bid & Budget Optimization",
      traditional: "Weekly manual spreadsheet reviews. Rule-based triggers often overreact or miss sudden market demand surges during off-hours.",
      aiPowered: "Continuous predictive bidding analyzing millions of auction signals per minute. Capital flows fluidly to highest margin opportunities.",
      metric: "32% lower cost per acquisition (CPA)",
      badge: "Predictive Pacing"
    },
    {
      title: "Customer Lifecycle & Retention",
      traditional: "Generic scheduled email newsletters and drip campaigns sent to everyone on Tuesday at 9 AM regardless of actual need.",
      aiPowered: "Autonomous event-triggered interventions that predict churn risk 30 days ahead and dispatch personalized win-back offers dynamically.",
      metric: "45% reduction in customer churn",
      badge: "Predictive Retention"
    }
  ];

  const coreBenefits = [
    {
      icon: Clock,
      title: "Hyper-Velocity Experimentation",
      description: "Test dozens of value propositions, angles, and audience hypotheses in parallel without bloating agency retainers."
    },
    {
      icon: TrendingUp,
      title: "Compounding ROAS & Capital Efficiency",
      description: "Eliminate ad budget waste by suppressing ads for non-converting prospects and doubling down on high-propensity buyers."
    },
    {
      icon: Users,
      title: "1-to-1 Personalization at Massive Scale",
      description: "Deliver bespoke customer experiences where landing page copy, email sequences, and product recommendations adapt to every user."
    },
    {
      icon: Cpu,
      title: "Continuous Machine Learning Feedback",
      description: "Every impression, click, and purchase trains your brand's unique data moat, making your marketing smarter every single day."
    }
  ];

  return (
    <section id="about-ai" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Core Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance">
            Understanding <span className="text-blue-600">AI Digital Marketing</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            At its core, <strong>AI digital marketing</strong> represents the evolution of modern <strong>digital marketing strategies</strong> through machine intelligence. By staying ahead of emerging <strong>AI marketing trends</strong>, forward-thinking growth teams forecast consumer behavior, iterate creative assets at scale, and maximize acquisition return on investment.
          </p>
        </div>

        {/* Question-Form H2 #1 for AEO & Featured Snippets */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-start gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <span>How Does AI Digital Marketing Outperform Traditional Marketing?</span>
            </h2>

            {/* Direct Answer Box - Clean, Elegant, Restful on the eyes */}
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Direct Answer for Performance Marketers</span>
              </div>
              <p className="text-base font-semibold text-slate-900 leading-relaxed">
                AI digital marketing outperforms traditional digital marketing by replacing delayed manual guesswork with real-time predictive algorithms. Instead of waiting weeks to evaluate broad demographics and manual A/B tests, algorithmic digital marketing strategies autonomously test dozens of dynamic creative angles, reallocate auction bids in milliseconds, and capitalize on live AI marketing trends before ad budgets are wasted on non-converting traffic.
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Traditional marketing relies heavily on human bandwidth to draft ad copy, adjust keyword bid caps, and manually analyze spreadsheet reports every Monday morning. In contrast, modern <strong>digital marketing strategies</strong> powered by artificial intelligence operate continuously 24/7. Tracking contemporary <strong>AI marketing trends</strong> allows brands to dynamically suppress ads to fatigued audience segments and scale capital into top-performing creative variations across Meta, Google, and emerging AI search channels. For practical tools to build this capability, explore our guide to the <Link to="/blog/ai-marketing-tools-for-beginners/" className="text-blue-600 font-semibold underline decoration-blue-300 hover:text-blue-800">Best AI Marketing Tools for Beginners</Link>.
            </p>
          </div>
        </div>

        {/* Interactive Comparison Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden mb-16 max-w-5xl mx-auto">
          <div className="border-b border-slate-100 bg-slate-50/60 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Execution Paradigm: Manual vs. Algorithmic Growth Engine
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {comparisons.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => setSelectedTopic(index)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedTopic === index
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* Active Topic Banner */}
            <div className="flex items-center justify-between flex-wrap gap-2 mb-6 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Focus Discipline</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">{comparisons[selectedTopic].title}</h3>
              </div>
              <div className="text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
                Benchmark: <span className="text-blue-600 font-bold">{comparisons[selectedTopic].metric}</span>
              </div>
            </div>

            {/* Side-by-side comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Traditional Approach */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Traditional Manual Approach
                    </span>
                    <span className="text-xs text-slate-400">Manual &amp; Reactive</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {comparisons[selectedTopic].traditional}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-rose-600 font-medium">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>High operational drag, slow iteration cycles, ad spend leakage</span>
                </div>
              </div>

              {/* AI Powered Approach */}
              <div className="rounded-2xl border border-blue-200 bg-blue-50/20 p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>Digital Growth Lab Method</span>
                    </span>
                    <span className="text-xs font-semibold text-blue-600">
                      Autonomous
                    </span>
                  </div>
                  <p className="text-slate-800 text-sm leading-relaxed mb-6 font-medium">
                    {comparisons[selectedTopic].aiPowered}
                  </p>
                </div>
                <div className="pt-4 border-t border-blue-100 flex items-center gap-2 text-xs text-blue-700 font-semibold">
                  <Check className="w-4 h-4 shrink-0 text-blue-600" />
                  <span>Continuous self-training loops &amp; predictive capital efficiency</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Question-Form H2 #2 for AEO & Featured Snippets */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-start gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
              <span>What Is the Fastest Way to Implement Predictive Marketing Automation?</span>
            </h2>

            {/* Direct Answer Box */}
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Direct Answer for Growth Teams</span>
              </div>
              <p className="text-base font-semibold text-slate-900 leading-relaxed">
                The fastest way to implement predictive marketing automation is through a 3-step sequence: first, configure Server-Side Conversions API (CAPI) to supply ad networks with 100% clean purchase telemetry; second, implement a generative copywriting and creative pipeline to produce 30+ modular ad hooks weekly; and third, enable value-based automated bidding (tROAS) to let platform algorithms dynamically target high-LTV customer cohorts.
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Once this data infrastructure is established, marketing teams can scale organic search authority alongside paid acquisition. Combining an <strong>algorithmic growth engine</strong> with our structured <Link to="/blog/ai-content-marketing-strategy/" className="text-blue-600 font-semibold underline decoration-blue-300 hover:text-blue-800">AI Content Marketing Strategy</Link> ensures that your brand captures high-intent organic search queries while paid campaigns aggressively retarget interested prospects.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-medium text-slate-700">
                Want to calculate your brand's projected upside from predictive automation?
              </span>
              <Link 
                to="/roi-simulator/" 
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Launch Interactive ROI Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreBenefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.title}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 hover:border-blue-300 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
