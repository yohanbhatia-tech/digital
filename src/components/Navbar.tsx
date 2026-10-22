import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, ArrowRight, Menu, X, BarChart3, Cpu, BookOpen, ChevronDown, Rocket, Target, HelpCircle } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/articlesData.ts';

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [articlesDropdownOpen, setArticlesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand - links to / */}
          <Link 
            to="/" 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 ring-4 ring-blue-50 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                Digital Growth <span className="text-blue-600">Lab</span>
              </span>
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 rounded-full border border-blue-100">
                AI Marketing
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Every section opens on a unique URL */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link 
              to="/what-is-ai-marketing/" 
              className={`transition-colors py-1 px-2 rounded-lg ${
                isActive('/what-is-ai-marketing') 
                  ? 'text-blue-600 font-semibold bg-blue-50/60' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              What is AI Marketing
            </Link>

            <Link 
              to="/core-pillars/" 
              className={`transition-colors py-1 px-2 rounded-lg ${
                isActive('/core-pillars') 
                  ? 'text-blue-600 font-semibold bg-blue-50/60' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Core Pillars
            </Link>

            <Link 
              to="/roi-simulator/" 
              className={`flex items-center gap-1.5 transition-colors py-1 px-2.5 rounded-lg ${
                isActive('/roi-simulator') 
                  ? 'text-blue-600 font-semibold bg-blue-50' 
                  : 'text-slate-700 font-semibold hover:text-blue-600'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span>ROI Simulator</span>
            </Link>
            
            {/* Articles Dropdown & Direct Link */}
            <div className="relative">
              <div className="flex items-center">
                <Link
                  to="/articles/"
                  className={`transition-colors py-1 pl-2 pr-1 rounded-l-lg flex items-center gap-1.5 font-semibold ${
                    isActive('/articles') || location.pathname.startsWith('/blog')
                      ? 'text-blue-600 bg-blue-50/60' 
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Articles</span>
                </Link>
                <button
                  onClick={() => setArticlesDropdownOpen(!articlesDropdownOpen)}
                  onMouseEnter={() => setArticlesDropdownOpen(true)}
                  className="p-1 hover:text-blue-600 text-slate-500 cursor-pointer"
                  aria-label="Toggle articles dropdown"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>

              {articlesDropdownOpen && (
                <div 
                  onMouseLeave={() => setArticlesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl p-2 z-50 animate-fade-in"
                >
                  <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span>Research Publications</span>
                    <Link 
                      to="/articles/" 
                      onClick={() => setArticlesDropdownOpen(false)}
                      className="text-blue-600 hover:underline normal-case text-[11px]"
                    >
                      View Index &rarr;
                    </Link>
                  </div>
                  {BLOG_ARTICLES.map((art) => (
                    <Link
                      key={art.slug}
                      to={art.url}
                      onClick={() => setArticlesDropdownOpen(false)}
                      className="block p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {art.title}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                        <span>{art.category}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>
                    </Link>
                  ))}
                  <div className="pt-1 border-t border-slate-100 mt-1">
                    <Link
                      to="/articles/"
                      onClick={() => setArticlesDropdownOpen(false)}
                      className="w-full p-2 rounded-lg text-xs font-bold text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-between"
                    >
                      <span>All Publications &amp; Search</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/copy-lab/" 
              className={`flex items-center gap-1.5 transition-colors py-1 px-2 rounded-lg ${
                isActive('/copy-lab') 
                  ? 'text-blue-600 font-semibold bg-blue-50/60' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <Cpu className="w-4 h-4 text-blue-500" />
              <span>Copy Lab</span>
            </Link>

            <Link 
              to="/playbook/" 
              className={`transition-colors py-1 px-2 rounded-lg ${
                isActive('/playbook') 
                  ? 'text-blue-600 font-semibold bg-blue-50/60' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Playbook
            </Link>
          </nav>

          {/* Desktop Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-all cursor-pointer"
            >
              <span>Get AI Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg block font-semibold text-sm ${
              isActive('/') && location.pathname === '/' ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Home
          </Link>
          <Link
            to="/what-is-ai-marketing/"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg block font-medium text-sm ${
              isActive('/what-is-ai-marketing') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            What is AI Marketing
          </Link>
          <Link
            to="/core-pillars/"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg block font-medium text-sm ${
              isActive('/core-pillars') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            Core Pillars
          </Link>
          <Link
            to="/roi-simulator/"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg flex items-center gap-2 font-medium text-sm ${
              isActive('/roi-simulator') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span>Growth &amp; ROI Simulator</span>
          </Link>

          <Link
            to="/articles/"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg flex items-center gap-2 font-medium text-sm ${
              isActive('/articles') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>All Articles &amp; Guides</span>
          </Link>

          {/* Sub-articles */}
          <div className="pl-4 py-1 space-y-1 border-l-2 border-slate-100 ml-2">
            {BLOG_ARTICLES.map((art) => (
              <Link
                key={art.slug}
                to={art.url}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left py-1.5 px-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-between"
              >
                <span className="truncate">{art.title}</span>
                <ArrowRight className="w-3 h-3 text-slate-400 shrink-0 ml-2" />
              </Link>
            ))}
          </div>

          <Link
            to="/copy-lab/"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg flex items-center gap-2 font-medium text-sm ${
              isActive('/copy-lab') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Cpu className="w-4 h-4 text-blue-600" />
            <span>Interactive Copy Lab</span>
          </Link>

          <Link
            to="/playbook/"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg block font-medium text-sm ${
              isActive('/playbook') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            90-Day Implementation Playbook
          </Link>
          
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Get Free AI Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
