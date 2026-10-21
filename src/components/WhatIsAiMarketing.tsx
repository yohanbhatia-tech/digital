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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
            Core Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Understanding <span className="text-blue-600">AI Digital Marketing</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At its core, <strong>AI digital marketing</strong> represents the evolution of modern <strong>digital marketing strategies</strong> through machine intelligence. By staying ahead of emerging <strong>AI marketing trends</strong>, forward-thinking growth teams forecast consumer behavior, iterate creative assets at scale, and maximize acquisition return on investment.
          </p>
        </div>

        {/* Question-Form H2 #1 for AEO & Featured Snippets */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-start gap-3 mb-4">
              <HelpCircle className="w-7 h-7 text-blue-600 shrink-0 mt-0.5" />
              <span>How Does AI Digital Marketing Outperform Traditional Marketing?</span>
            </h2>

            {/* Direct Answer Box */}
            <div className="p-5 rounded-2xl bg-blue-50/80 border-2 border-blue-200 mb-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Direct Answer for Performance Marketers
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
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 overflow-hidden mb-16">
          <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Execution Paradigm: Manual vs. Algorithmic Growth Engine
              </h3>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
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

          <div className="p-6 sm:p-10">
            {/* Active Topic Banner */}
            <div className="flex items-center justify-between flex-wrap gap-2 mb-8">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Focus Discipline</span>
                <h4 className="text-2xl font-bold text-slate-900">{comparisons[selectedTopic].title}</h4>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Benchmark: {comparisons[selectedTopic].metric}
              </div>
            </div>

            {/* Side-by-side comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Traditional Approach */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Traditional Manual Approach
                  </span>
                  <span className="text-xs font-medium text-slate-400">Manual &amp; Reactive</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-6">
                  {comparisons[selectedTopic].traditional}
                </p>
                <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-rose-600 font-medium">
                  <ShieldAlert className="w-4 h-4" />
                  High operational drag, slow iteration cycles, ad spend leakage
                </div>
              </div>

              {/* AI Powered Approach */}
              <div className="rounded-2xl border-2 border-blue-600/30 bg-blue-50/20 p-6 relative shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    Digital Growth Lab Method
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white uppercase">
                    Autonomous
                  </span>
                </div>
                <p className="text-slate-800 text-sm leading-relaxed mb-6 font-medium">
                  {comparisons[selectedTopic].aiPowered}
                </p>
                <div className="pt-4 border-t border-blue-200/60 flex items-center gap-2 text-xs text-blue-700 font-semibold">
                  <Check className="w-4 h-4 text-blue-600" />
                  Continuous self-training loops &amp; predictive capital efficiency
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Question-Form H2 #2 for AEO & Featured Snippets */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-start gap-3 mb-4">
              <HelpCircle className="w-7 h-7 text-blue-600 shrink-0 mt-0.5" />
              <span>What Is the Fastest Way to Implement Predictive Marketing Automation?</span>
            </h2>

            {/* Direct Answer Box */}
            <div className="p-5 rounded-2xl bg-blue-50/80 border-2 border-blue-200 mb-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600" />
                Direct Answer for Growth Teams
              </div>
              <p className="text-base font-semibold text-slate-900 leading-relaxed">
                The fastest way to implement predictive marketing automation is through a 3-step sequence: first, configure Server-Side Conversions API (CAPI) to supply ad networks with 100% clean purchase telemetry; second, implement a generative copywriting and creative pipeline to produce 30+ modular ad hooks weekly; and third, enable value-based automated bidding (tROAS) to let platform algorithms dynamically target high-LTV customer cohorts.
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Once this data infrastructure is established, marketing teams can scale organic search authority alongside paid acquisition. Combining an <strong>algorithmic growth engine</strong> with our structured <Link to="/blog/ai-content-marketing-strategy/" className="text-blue-600 font-semibold underline decoration-blue-300 hover:text-blue-800">AI Content Marketing Strategy</Link> ensures that your brand captures high-intent organic search queries while paid campaigns aggressively retarget interested prospects.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between flex-wrap gap-3">
              <span className="text-xs font-bold text-slate-700">
                Want to calculate your brand's projected upside from predictive automation?
              </span>
              <a 
                href="#simulator" 
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <span>Launch Interactive ROI Simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
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
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
