import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowUp, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/articlesData.ts';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Info (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                Digital Growth <span className="text-blue-600">Lab</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Empowering marketing leaders and performance teams to conquer the AI paradigm shift with predictive modeling, dynamic creative synthesis, and autonomous bid pacing.
            </p>

            <div className="text-xs text-slate-400">
              Clean white &amp; high-contrast blue design system.
            </div>
          </div>

          {/* Nav Links Column 1 */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Intelligence
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <button onClick={() => handleNavClick('about-ai')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  What is AI Marketing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('pillars')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  The 6 Core Pillars
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('simulator')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Growth &amp; ROI Simulator
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('sandbox')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Interactive Copy Lab
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('blog-section')} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Featured Research
                </button>
              </li>
            </ul>
          </div>

          {/* Research Articles Column */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Research &amp; Guides
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {BLOG_ARTICLES.map((article) => (
                <li key={article.slug}>
                  <Link 
                    to={article.url} 
                    className="hover:text-blue-600 transition-colors line-clamp-1"
                    title={article.title}
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <button onClick={() => handleNavClick('playbook')} className="hover:text-blue-600 transition-colors cursor-pointer text-xs font-bold text-blue-600">
                  90-Day AI Roadmap &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Action Column */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Growth Diagnostic
            </h5>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Calculate the estimated performance lift of deploying autonomous algorithms to your ad accounts.
            </p>
            <button
              onClick={onOpenAudit}
              className="w-full py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200 transition-all cursor-pointer"
            >
              Launch Assessment
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Digital Growth Lab. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-slate-400">High-Velocity Algorithmic Marketing</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
