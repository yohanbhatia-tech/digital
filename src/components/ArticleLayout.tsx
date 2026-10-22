import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Share2, 
  ChevronRight, 
  Sparkles, 
  ArrowRight, 
  BookOpen,
  Check,
  ExternalLink
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
  const [copied, setCopied] = useState(false);

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

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-slate-100 bg-slate-50/50 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-none">
            <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <Link to="/articles/" className="hover:text-blue-600 transition-colors">
              Articles
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
              {article.category}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        
        {/* Top Navigation & Article Tabs (Opens each article in a new tab with unique URL) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
          <Link
            to="/articles/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>All Research Publications</span>
          </Link>

          {/* Dedicated Tab Switcher - Each Tab Opens on Its Unique URL */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none bg-slate-50 p-1.5 rounded-xl border border-slate-200/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 shrink-0">
              Article Tabs:
            </span>
            {BLOG_ARTICLES.map((tabArt) => {
              const isCurrent = tabArt.slug === article.slug;
              return isCurrent ? (
                <span
                  key={tabArt.slug}
                  className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-xs whitespace-nowrap flex items-center gap-1.5"
                >
                  <BookOpen className="w-3 h-3" />
                  <span>{tabArt.category.split(' ')[0]} (Current)</span>
                </span>
              ) : (
                <Link
                  key={tabArt.slug}
                  to={tabArt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200/80 text-xs font-semibold whitespace-nowrap flex items-center gap-1.5 transition-all"
                  title={`Open "${tabArt.title}" in new tab`}
                >
                  <span>{tabArt.category.split(' ')[0]}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Clean Editorial Category Kicker */}
        <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
          {article.category}
        </div>

        {/* Unique H1 Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.16] mb-5 text-balance">
          {article.title}
        </h1>

        {/* Unboxed Metadata with Typographic Separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <span>By {article.author.name}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishDate}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
          <span aria-hidden="true">·</span>
          <span>{article.wordCount}</span>
        </div>

        {/* Article Subtitle / Lead Paragraph */}
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 text-balance">
          {article.subtitle}
        </p>

        {/* Author Bio Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 py-4 px-5 rounded-2xl bg-slate-50/60 border border-slate-200/60 mb-8">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={`Portrait of author ${article.author.name}, ${article.author.role}`}
              width={40}
              height={40}
              loading="lazy"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
            />
            <div>
              <div className="text-sm font-bold text-slate-900">{article.author.name}</div>
              <div className="text-xs text-slate-500">{article.author.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Share Article</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Hero Image with Optimized Alt Text and Explicit Dimensions */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm bg-slate-50">
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
        <div className="p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 mb-12 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Table of Contents</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
            {tableOfContents.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                className="text-left py-1.5 px-2.5 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-start gap-2 cursor-pointer"
              >
                <span className="text-blue-600 font-mono text-[11px] shrink-0 mt-0.5">
                  0{index + 1}.
                </span>
                <span className={`line-clamp-1 ${item.isQuestion ? 'text-slate-900 font-semibold' : ''}`}>
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
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50/60 border border-slate-200/80 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span>Continue Your Learning with Digital Growth Lab</span>
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
            Explore our foundational tools, frameworks, and related strategic breakdowns designed for performance teams and forward-thinking marketers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              to="/roi-simulator/"
              target="_blank"
              rel="noopener noreferrer"
              title="Opens Growth ROI Simulator in a new tab"
              className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center justify-between text-xs font-bold text-blue-600 uppercase mb-1">
                <span>Growth Engine</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
              </div>
              <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                ROI Simulator &rarr;
              </div>
              <div className="text-xs text-slate-500 mt-1">Simulate algorithmic ad spend upside.</div>
            </Link>

            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                to={rel.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open "${rel.title}" in a new tab`}
                className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center justify-between text-xs font-bold text-blue-600 uppercase mb-1">
                  <span>{rel.category}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
                </div>
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
          <div className="mt-12 p-8 rounded-3xl bg-blue-600 text-white shadow-sm text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200 block mb-1">
                Take Action
              </span>
              <h3 className="text-2xl font-black text-white mb-2">
                Accelerate Your Growth with Algorithmic Marketing
              </h3>
              <p className="text-sm text-blue-100 max-w-xl font-normal">
                Ready to deploy predictive bidding, multi-armed bandit creative testing, and automated lead intelligence? Get your instant readiness score.
              </p>
            </div>
            <button
              onClick={onOpenAudit}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-blue-700 font-bold text-sm shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              Get Free AI Audit
            </button>
          </div>
        )}

        {/* Related Articles Section */}
        <div className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Related Reading
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-0.5">
                More Guides from Digital Growth Lab
              </h2>
            </div>
            <Link
              to="/articles/"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                to={rel.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read full guide: ${rel.title} (opens in new tab)`}
                className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-xl overflow-hidden mb-4 bg-slate-100 aspect-video relative">
                    <img
                      src={rel.image}
                      alt={rel.imageAlt}
                      width={600}
                      height={338}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-slate-700 flex items-center gap-1 shadow-xs border border-slate-200/60">
                      <span>New Tab</span>
                      <ExternalLink className="w-2.5 h-2.5 text-blue-600" />
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-medium">
                    <span className="font-semibold text-blue-600">{rel.category}</span>
                    <span>·</span>
                    <span>{rel.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span className="inline-flex items-center group-hover:translate-x-0.5 transition-transform">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 group-hover:text-blue-600">
                    <span>Unique URL</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
};
