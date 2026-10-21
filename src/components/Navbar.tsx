import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, Menu, X, BarChart3, Cpu, BookOpen, ChevronDown } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/articlesData.ts';

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [articlesDropdownOpen, setArticlesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setArticlesDropdownOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
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

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button 
              onClick={() => handleNavClick('about-ai')} 
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              What is AI Marketing
            </button>
            <button 
              onClick={() => handleNavClick('pillars')} 
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Core Pillars
            </button>
            <button 
              onClick={() => handleNavClick('simulator')} 
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-700 font-semibold"
            >
              <BarChart3 className="w-4 h-4 text-blue-600" />
              ROI Simulator
            </button>
            
            {/* Guides Dropdown */}
            <div className="relative">
              <button
                onClick={() => setArticlesDropdownOpen(!articlesDropdownOpen)}
                onMouseEnter={() => setArticlesDropdownOpen(true)}
                className="hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer font-semibold text-slate-700"
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Articles</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {articlesDropdownOpen && (
                <div 
                  onMouseLeave={() => setArticlesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl p-2 z-50 animate-fade-in"
                >
                  <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    Featured Research Guides
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
                    <button
                      onClick={() => handleNavClick('blog-section')}
                      className="w-full text-left p-2 rounded-lg text-xs font-bold text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-between"
                    >
                      <span>View All on Homepage</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick('sandbox')} 
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Cpu className="w-4 h-4 text-blue-500" />
              Copy Lab
            </button>
            <button 
              onClick={() => handleNavClick('playbook')} 
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Playbook
            </button>
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
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-900 font-bold hover:bg-blue-50 hover:text-blue-700 block"
          >
            Home
          </Link>
          <button
            onClick={() => handleNavClick('about-ai')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 block"
          >
            What is AI Marketing
          </button>
          <button
            onClick={() => handleNavClick('pillars')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 block"
          >
            Core Pillars
          </button>
          <button
            onClick={() => handleNavClick('simulator')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2"
          >
            <BarChart3 className="w-4 h-4 text-blue-600" />
            Growth &amp; ROI Simulator
          </button>

          <div className="py-2 border-t border-b border-slate-100 my-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 block mb-1">
              Articles &amp; Guides:
            </span>
            {BLOG_ARTICLES.map((art) => (
              <Link
                key={art.slug}
                to={art.url}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left py-2 px-3 rounded-lg text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-between"
              >
                <span className="truncate">{art.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
              </Link>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('sandbox')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 flex items-center gap-2"
          >
            <Cpu className="w-4 h-4 text-blue-600" />
            Interactive Copy Lab
          </button>
          <button
            onClick={() => handleNavClick('playbook')}
            className="w-full text-left py-2 px-3 rounded-lg text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-700 block"
          >
            Framework &amp; Playbook
          </button>
          
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 text-white font-semibold text-center flex items-center justify-center gap-2"
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
