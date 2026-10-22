import React, { useEffect, useState } from 'react';
import { SeoManager } from '../components/SeoManager.tsx';
import { SEO_DATA } from '../config/seoConfig.ts';
import { SectionPageHeader } from '../components/SectionPageHeader.tsx';
import { BLOG_ARTICLES } from '../data/articlesData.ts';
import { Link } from 'react-router-dom';
import { ArrowRight, HelpCircle, Search, Filter } from 'lucide-react';

export const ArticlesIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'AI Tools', 'Search Engine Optimization', 'Content Marketing'];

  const filteredArticles = BLOG_ARTICLES.filter(article => {
    const matchesCategory =
      selectedCategory === 'All' ||
      article.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      (selectedCategory === 'AI Tools' && article.category.includes('Tools')) ||
      (selectedCategory === 'Search Engine Optimization' && article.category.includes('SEO')) ||
      (selectedCategory === 'Content Marketing' && article.category.includes('Content'));

    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      <SeoManager seo={SEO_DATA.articlesIndex} />

      <SectionPageHeader
        badge="Original Research &amp; Tactical Manuals"
        title="Articles &amp; Research"
        titleAccent="Publications"
        description="Comprehensive, battle-tested playbooks on artificial intelligence tooling, modern organic search engine optimization, and generative content workflows."
        activePath="/articles/"
      />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter and Search Bar: Clean Segmented Look */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 p-4 bg-slate-50/60 border border-slate-200/80 rounded-2xl">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-blue-600" /> Topic:
              </span>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search publications..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200/80 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
              />
            </div>
          </div>

          {/* Articles Grid: Clean Editorial Styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <article
                key={article.slug}
                className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
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
                  </Link>

                  <div className="p-6 sm:p-7">
                    {/* Unboxed category kicker */}
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                      {article.category}
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                      <Link to={article.url} className="hover:underline">
                        {article.title}
                      </Link>
                    </h2>

                    {/* Unboxed metadata with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 font-medium">
                      <span>{article.publishDate}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.wordCount}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-auto">
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
                        <div className="text-xs font-bold text-slate-900">
                          {article.author.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {article.author.role}
                        </div>
                      </div>
                    </div>

                    <Link
                      to={article.url}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
              <p className="text-sm font-semibold text-slate-600">No guides found matching your search.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* AEO Direct Answer Q&A Section: Restful on the eyes */}
          <div className="mt-20 bg-slate-50/60 rounded-3xl p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions &amp; Direct Answers</span>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  What research topics does Digital Growth Lab cover?
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Digital Growth Lab publishes comprehensive research and actionable guides on entry-level AI marketing software stacks, organic search engine optimization and generative engine optimization (GEO), and multi-channel generative content systems designed for rapid audience scaling.
                </p>
              </div>
              <hr className="border-slate-200/60" />
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-2">
                  How often are the Digital Growth Lab guides updated?
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Our research guides are reviewed and updated every quarter to reflect recent AI algorithm shifts, major Google core updates, and ad platform auction changes across Meta, Google Ads, and TikTok.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
