import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  Bookmark, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  BookOpen,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { ArticleMeta, BLOG_ARTICLES } from '../data/articlesData.ts';

interface TableOfContentItem {
  id: string;
  text: string;
  isQuestion?: boolean;
}

interface ArticleLayoutProps {
  article: ArticleMeta;
  tableOfContents: TableOfContentItem[];
  children: React.ReactNode;
  onOpenAudit?: () => void;
}

export const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  article,
  tableOfContents,
  children,
  onOpenAudit,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article]);

  const relatedArticles = BLOG_ARTICLES.filter((a) => a.slug !== article.slug);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-slate-100 bg-slate-50/60 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Digital Growth Lab
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-blue-600 font-semibold truncate max-w-xs sm:max-w-md">
              {article.category}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Digital Growth Lab Home</span>
          </Link>
        </div>

        {/* Category & Metadata Badge Row */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {article.readTime}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            {article.wordCount}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {article.publishDate}
          </span>
        </div>

        {/* Unique H1 Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.18] mb-6">
          {article.title}
        </h1>

        {/* Article Subtitle / Lead Paragraph */}
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8">
          {article.subtitle}
        </p>

        {/* Author Bio Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 py-4 px-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 mb-8">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={`Portrait of author ${article.author.name}, ${article.author.role}`}
              width={44}
              height={44}
              loading="lazy"
              className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-100"
            />
            <div>
              <div className="text-sm font-bold text-slate-900">{article.author.name}</div>
              <div className="text-xs text-slate-500">{article.author.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Article URL copied to clipboard!');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Hero Image with Optimized Alt Text and Explicit Dimensions */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 bg-slate-50">
          <img
            src={article.image}
            alt={article.imageAlt}
            width={1200}
            height={675}
            className="w-full h-auto object-cover max-h-[500px]"
            loading="eager"
          />
          <div className="p-3 bg-slate-50/90 border-t border-slate-100 text-center text-xs text-slate-500 italic">
            Visual Guide: {article.imageAlt}
          </div>
        </div>

        {/* Table of Contents Card */}
        <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 mb-12 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Table of Contents</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
            {tableOfContents.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                className="text-left py-1.5 px-2.5 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-start gap-2 cursor-pointer"
              >
                <span className="text-blue-600 font-mono text-[11px] shrink-0 mt-0.5">
                  0{index + 1}.
                </span>
                <span className={`line-clamp-1 ${item.isQuestion ? 'text-blue-900 font-bold' : ''}`}>
                  {item.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* The Full Content */}
        <div className="article-body font-normal text-slate-800 leading-relaxed text-base sm:text-lg space-y-8">
          {children}
        </div>

        {/* Internal Hub Bridge & Links Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span>Continue Your Learning with Digital Growth Lab</span>
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            Explore our foundational tools, frameworks, and related strategic breakdowns designed for performance teams and forward-thinking marketers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              to="/"
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div className="text-xs font-bold text-blue-600 uppercase mb-1">Interactive System</div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                Digital Growth Lab Homepage &rarr;
              </div>
              <div className="text-xs text-slate-500 mt-1">Test the interactive AI Growth &amp; ROI Simulator.</div>
            </Link>

            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                to={rel.url}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="text-xs font-bold text-blue-600 uppercase mb-1">{rel.category}</div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {rel.title} &rarr;
                </div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-2">{rel.excerpt}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Growth Audit CTA */}
        {onOpenAudit && (
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500 text-white shadow-xl shadow-blue-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-200 block mb-1">
                Take Action
              </span>
              <h3 className="text-2xl font-black text-white mb-2">
                Accelerate Your Growth with Algorithmic Marketing
              </h3>
              <p className="text-sm text-blue-100 max-w-xl">
                Ready to deploy predictive bidding, multi-armed bandit creative testing, and automated lead intelligence? Get your instant readiness score.
              </p>
            </div>
            <button
              onClick={onOpenAudit}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-blue-700 font-bold text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Get Free AI Audit
            </button>
          </div>
        )}

        {/* Related Articles Section */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Related Reading
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                More Guides from Digital Growth Lab
              </h3>
            </div>
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Back to Digital Growth Lab Home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                to={rel.url}
                aria-label={`Read full guide: ${rel.title}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-xl overflow-hidden mb-4 bg-slate-100 aspect-video">
                    <img
                      src={rel.image}
                      alt={rel.imageAlt}
                      width={600}
                      height={338}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-blue-600">{rel.category}</span>
                    <span>•</span>
                    <span>{rel.readTime}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
};
