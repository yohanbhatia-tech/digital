import React from 'react';
import { Link } from 'react-router-dom';
import { SeoManager } from '../components/SeoManager.tsx';
import { SEO_DATA } from '../config/seoConfig.ts';
import { Hero } from '../components/Hero.tsx';
import { BLOG_ARTICLES } from '../data/articlesData.ts';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Cpu,
  Layers,
  Rocket,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

interface HomePageProps {
  onOpenAudit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAudit }) => {
  const standaloneSections = [
    {
      title: 'What is AI Marketing',
      path: '/what-is-ai-marketing/',
      badge: 'Foundations',
      icon: Sparkles,
      description:
        'Understand the shift from manual advertising guesswork to autonomous algorithmic growth. Compare traditional campaign management with machine-learning feedback loops.',
      cta: 'Explore Foundations',
    },
    {
      title: '6 Core AI Marketing Pillars',
      path: '/core-pillars/',
      badge: 'Architecture',
      icon: Layers,
      description:
        'Inspect the six vital disciplines powering modern growth engines: dynamic creative synthesis, predictive bidding, pLTV modeling, conversational agents, GEO, and MMM attribution.',
      cta: 'View All 6 Pillars',
    },
    {
      title: 'Growth & ROI Simulator',
      path: '/roi-simulator/',
      badge: 'Interactive Model',
      icon: BarChart3,
      description:
        'Calculate projected revenue expansion, efficiency multipliers, and weekly hours saved when deploying algorithmic bid pacing and automated testing pipelines.',
      cta: 'Launch Simulator',
    },
    {
      title: 'Generative Copy Lab',
      path: '/copy-lab/',
      badge: 'Interactive Tool',
      icon: Cpu,
      description:
        'Generate and test multi-variant ad hooks, value propositions, and email angles built on direct-response conversion copywriting frameworks.',
      cta: 'Open Copy Sandbox',
    },
    {
      title: '90-Day Implementation Playbook',
      path: '/playbook/',
      badge: 'Action Blueprint',
      icon: Rocket,
      description:
        'A battle-tested 3-phase strategic roadmap to transition marketing teams from fragmented manual operations to autonomous algorithmic execution.',
      cta: 'View 90-Day Roadmap',
    },
    {
      title: 'Research Publications & Guides',
      path: '/articles/',
      badge: 'Knowledge Base',
      icon: BookOpen,
      description:
        'In-depth, peer-reviewed strategic publications on machine learning tools, technical search engine optimization, and generative content distribution.',
      cta: 'Browse All Guides',
    },
  ];

  return (
    <main className="flex-1 bg-white">
      {/* Dynamic SEO, Canonical & Schema Injection */}
      <SeoManager seo={SEO_DATA.home} />

      {/* Hero Section */}
      <Hero onOpenAudit={onOpenAudit} />

      {/* AEO Direct Answers & Core SEO Keyword Section */}
      <section className="py-16 bg-slate-50/60 border-y border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Answer Engine Optimization (AEO)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
              Foundational Principles of AI-Driven Growth
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Concise answers and structural analysis addressing core search queries in algorithmic marketing.
            </p>
          </div>

          <div className="space-y-8">
            {/* Question-Form H2 #1: Primary Keyword 'AI digital marketing' */}
            <article className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>Core Definition</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                What is AI digital marketing and how does it drive growth?
              </h2>

              {/* Direct Answer Box for AI Answer Engines */}
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 text-slate-800 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                  Direct Answer
                </span>
                <strong className="text-slate-900">AI digital marketing</strong> is the application of machine learning algorithms, natural language processing, and predictive analytics to autonomously optimize audience targeting, ad creative variations, and budget bidding across acquisition channels. By replacing manual guesswork with real-time feedback loops, it drives exponential revenue growth while cutting customer acquisition costs (CAC).
              </div>

              <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  Unlike legacy marketing campaigns that depend on static personas and manual weekly adjustments, modern algorithmic engines process millisecond-level telemetry from website visitors. Systems assess buyer propensity, predict conversion likelihood, and serve hyper-personalized ad creative tailored to each prospect's immediate intent.
                </p>
                <p>
                  To explore the deep theoretical foundations and compare manual workflows against automated systems, read our dedicated standalone guide on{' '}
                  <Link
                    to="/what-is-ai-marketing/"
                    className="text-blue-600 font-semibold underline decoration-blue-300 hover:text-blue-800"
                  >
                    What is AI Marketing
                  </Link>
                  .
                </p>
              </div>
            </article>

            {/* Question-Form H2 #2: Related Keywords 'Digital marketing strategies' & 'AI marketing trends' */}
            <article className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span>Strategic Alignment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                What digital marketing strategies benefit most from AI marketing trends?
              </h2>

              {/* Direct Answer Box */}
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 text-slate-800 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                  Direct Answer
                </span>
                The <strong className="text-slate-900">digital marketing strategies</strong> that benefit most from current <strong className="text-slate-900">AI marketing trends</strong> are predictive budget pacing (value-based bidding), autonomous creative synthesis, real-time intent clustering, and Generative Engine Optimization (GEO). These capabilities allow growth teams to scale campaign output 10x without proportional headcount increases.
              </div>

              <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
                <p>
                  Emerging trends reveal that high-performing teams combine automated algorithmic paid media with comprehensive organic search authority. Integrating predictive audience modeling with a verified{' '}
                  <Link
                    to="/blog/ai-content-marketing-strategy/"
                    className="text-blue-600 font-semibold underline decoration-blue-300 hover:text-blue-800"
                  >
                    AI content marketing strategy
                  </Link>{' '}
                  and solid{' '}
                  <Link
                    to="/blog/seo-for-beginners/"
                    className="text-blue-600 font-semibold underline decoration-blue-300 hover:text-blue-800"
                  >
                    SEO for beginners
                  </Link>{' '}
                  guarantees sustainable acquisition across both paid algorithms and AI answer engines like ChatGPT and Perplexity.
                </p>
                <div className="pt-2">
                  <Link
                    to="/core-pillars/"
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
                  >
                    <span>Inspect the 6 core pillars supporting these strategies</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Standalone Section Directory Hub - Every Section Opens on a Standalone URL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Standalone Learning Modules &amp; Tools
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
                Digital Growth Lab Modules
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Each section functions as a dedicated standalone tool and resource, reachable via its own persistent URL.
              </p>
            </div>
            <div className="text-xs font-semibold text-slate-400">
              6 Dedicated Standalone Routes
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standaloneSections.map((sec) => {
              const IconComp = sec.icon;
              return (
                <div
                  key={sec.path}
                  className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {sec.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                      {sec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {sec.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100">
                    <Link
                      to={sec.path}
                      className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-bold transition-all group/btn"
                    >
                      <span>{sec.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Research Articles Section */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Strategic Research
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
                Featured Guides &amp; Publications
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Field-tested methodologies on tooling, technical SEO, and generative workflows.
              </p>
            </div>
            <Link
              to="/articles/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-3">
                    <span className="text-blue-600 font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
                    <Link to={article.url}>{article.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    By {article.author.name}
                  </div>
                  <Link
                    to={article.url}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Free Growth Audit Invitation Banner */}
      <section className="py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Complimentary Architectural Review
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-4 tracking-tight">
              Ready to Upgrade to Autonomous Growth?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Request a free AI Growth Audit. Our technical analysts will benchmark your conversion tracking telemetry, ad creative fatigue rate, and algorithmic bidding efficiency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <span>Request AI Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/roi-simulator/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all cursor-pointer"
              >
                <span>Test ROI Simulator First</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
