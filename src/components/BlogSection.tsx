import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen, Sparkles, TrendingUp, Compass } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/articlesData.ts';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog-section" className="py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Digital Growth Lab Publications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Articles &amp; <span className="text-blue-600">Strategic Guides</span>
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Explore in-depth, original research and tactical playbooks on artificial intelligence tools, search engine dominance, and modern content architecture.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm self-start md:self-auto flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>3 Complete Research Guides • 1,200+ Words Each</span>
          </div>
        </div>

        {/* 3 Visible Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((article, index) => (
            <article
              key={article.slug}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md shadow-slate-100 hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              {/* Image Container with Link */}
              <div>
                <Link
                  to={article.url}
                  className="block relative aspect-video overflow-hidden bg-slate-100"
                  aria-label={`Read article: ${article.title}`}
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-blue-700 shadow-sm border border-slate-100">
                      {article.category}
                    </span>
                  </div>
                </Link>

                {/* Content Area */}
                <div className="p-6">
                  {/* Meta Details */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-medium">
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                      {article.wordCount}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                    <Link to={article.url} className="hover:underline">
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-auto">
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={article.author.avatar}
                      alt={`Portrait of author ${article.author.name}, ${article.author.role}`}
                      width={32}
                      height={32}
                      loading="lazy"
                      className="w-8 h-8 rounded-full object-cover ring-2 ring-slate-100"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{article.author.name}</div>
                      <div className="text-[10px] text-slate-400">{article.publishDate}</div>
                    </div>
                  </div>

                  <Link
                    to={article.url}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
                    aria-label={`Read full guide: ${article.title}`}
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner within Blog Section */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Want to publish and scale with modern search architectures?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                All Digital Growth Lab frameworks are calibrated for high information gain and Generative Engine Optimization (GEO).
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/blog/ai-content-marketing-strategy/"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center transition-all cursor-pointer whitespace-nowrap"
            >
              Read AI Content Marketing Strategy Guide &rarr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
