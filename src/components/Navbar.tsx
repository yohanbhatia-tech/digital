import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, ArrowRight, Menu, X, BarChart3, Cpu, BookOpen, ChevronDown, Rocket, Target, HelpCircle, ExternalLink } from 'lucide-react';
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

          {/* Desktop Nav - Every section opens on a unique URL in a new tab */}
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            <Link 
              to="/what-is-ai-marketing/" 
              target="_blank"
              rel="noopener noreferrer"
              title="Opens 'What is AI Marketing' in a new tab"
              className={`inline-flex items-center gap-1 transition-colors py-1 px-2.5 rounded-lg ${
                isActive('/what-is-ai-marketing') 
                  ? 'text-blue-600 font-semibold bg-blue-50/60' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <span>What is AI Marketing</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 shrink-0" />
            </Link>

            <Link 
              to="/core-pillars/" 
              target="_blank"
              rel="noopener noreferrer"
              title="Opens 'Core Pillars' in a new tab"
              className={`inline-flex items-center gap-1 transition-colors py-1 px-2.5 rounded-lg ${
                isActive('/core-pillars') 
                  ? 'text-blue-600 font-semibold bg-blue-50/60' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <span>Core Pillars</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 shrink-0" />
            </Link>

            <Link 
              to="/roi-simulator/" 
              target="_blank"
              rel="noopener noreferrer"
              title="Opens 'ROI Simulator' in a new tab"
              className={`inline-flex items-center gap-1.5 transition-colors py-1 px-2.5 rounded-lg ${
                isActive('/roi-simulator') 
                  ? 'text-blue-600 font-semibold bg-blue-50' 
                  : 'text-slate-700 font-semibold hover:text-blue-600'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span>ROI Simulator</span>
              <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
            </Link>
            
            {/* Articles Dropdown & Direct Link */}
            <div className="relative">
              <div className="flex items-center">
                <Link
                  to="/articles/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Opens 'Articles Index' in a new tab"
                  className={`transition-colors py-1 pl-2.5 pr-1 rounded-l-lg flex items-center gap-1.5 font-semibold ${
                    isActive('/articles') || location.pathname.startsWith('/blog')
                      ? 'text-blue-600 bg-blue-50/60' 
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span>Articles</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
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
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setArticlesDropdownOpen(false)}
                      className="text-blue-600 hover:underline normal-case text-[11px] inline-flex items-center gap-0.5"
                    >
                      <span>View Index</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                  {BLOG_ARTICLES.map((art) => (
                    <Link
                      key={art.slug}
                      to={art.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setArticlesDropdownOpen(false)}
                      className="block p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group"
                      title={`Open "${art.title}" in new tab`}
                    >
                      <div className="flex items-center justify-between gap-1 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        <span className="line-clamp-1">{art.title}</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 shrink-0" />
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                        <span>{art.category}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                        <span>•</span>
                        <span className="text-blue-600 font-semibold">New Tab</span>
                      </div>
                    </Link>
                  ))}
                  <div className="pt-1 border-t border-slate-100 mt-1">
                    <Link
                      to="/articles/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setArticlesDropdownOpen(false)}
                      className="w-full p-2 rounded-lg text-xs font-bold text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-between"
                    >
                      <span>All Publications &amp; Search</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/copy-lab/" 
              target="_blank"
              rel="noopener noreferrer"
              title="Opens 'Interactive Copy Lab' in a new tab"
              className={`inline-flex items-center gap-1.5 transition-colors py-1 px-2.5 rounded-lg ${
                isActive('/copy-lab') 
                  ? 'text-blue-600 font-semibold bg-blue-50/60' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <Cpu className="w-4 h-4 text-blue-500" />
              <span>Copy Lab</span>
              <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
            </Link>

            <Link 
              to="/playbook/" 
              target="_blank"
              rel="noopener noreferrer"
              title="Opens '90-Day Playbook' in a new tab"
              className={`inline-flex items-center gap-1 transition-colors py-1 px-2.5 rounded-lg ${
                isActive('/playbook') 
                  ? 'text-blue-600 font-semibold bg-blue-50/60' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <span>Playbook</span>
              <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
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
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg flex items-center justify-between font-medium text-sm ${
              isActive('/what-is-ai-marketing') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>What is AI Marketing</span>
            <span className="flex items-center gap-1 text-[10px] text-blue-600 font-semibold">
              <span>New Tab</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </Link>
          <Link
            to="/core-pillars/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg flex items-center justify-between font-medium text-sm ${
              isActive('/core-pillars') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>Core Pillars</span>
            <span className="flex items-center gap-1 text-[10px] text-blue-600 font-semibold">
              <span>New Tab</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </Link>
          <Link
            to="/roi-simulator/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg flex items-center justify-between font-medium text-sm ${
              isActive('/roi-simulator') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              <span>Growth &amp; ROI Simulator</span>
            </div>
            <span className="flex items-center gap-1 text-[10px] text-blue-600 font-semibold">
              <span>New Tab</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </Link>

          <Link
            to="/articles/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg flex items-center justify-between font-medium text-sm ${
              isActive('/articles') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>All Articles &amp; Guides</span>
            </div>
            <span className="flex items-center gap-1 text-[10px] text-blue-600 font-semibold">
              <span>New Tab</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </Link>

          {/* Sub-articles (Each opens in a new tab with its unique URL) */}
          <div className="pl-4 py-1 space-y-1 border-l-2 border-slate-100 ml-2">
            {BLOG_ARTICLES.map((art) => (
              <Link
                key={art.slug}
                to={art.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left py-1.5 px-2 rounded-lg text-xs font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-between"
                title={`Open ${art.title} in new tab`}
              >
                <span className="truncate">{art.title}</span>
                <span className="flex items-center gap-1 text-[10px] text-blue-600 shrink-0 ml-2 font-semibold">
                  <span>New Tab</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          <Link
            to="/copy-lab/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg flex items-center justify-between font-medium text-sm ${
              isActive('/copy-lab') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>Interactive Copy Lab</span>
            </div>
            <span className="flex items-center gap-1 text-[10px] text-blue-600 font-semibold">
              <span>New Tab</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </Link>

          <Link
            to="/playbook/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className={`w-full text-left py-2 px-3 rounded-lg flex items-center justify-between font-medium text-sm ${
              isActive('/playbook') ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>90-Day Implementation Playbook</span>
            <span className="flex items-center gap-1 text-[10px] text-blue-600 font-semibold">
              <span>New Tab</span>
              <ExternalLink className="w-3 h-3" />
            </span>
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
