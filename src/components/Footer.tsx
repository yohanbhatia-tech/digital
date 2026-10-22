import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/articlesData.ts';

interface FooterProps {
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  return (
    <footer className="bg-white border-t border-slate-200/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Brand Info (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                Digital Growth <span className="text-blue-600">Lab</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm font-normal">
              Empowering marketing leaders and performance teams to master the AI paradigm shift with predictive modeling, dynamic creative synthesis, and autonomous bid pacing.
            </p>

            <div className="text-xs text-slate-400">
              Clean white &amp; high-contrast blue design system.
            </div>
          </div>

          {/* Intelligence Sections Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Intelligence
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link 
                  to="/what-is-ai-marketing/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1.5 group"
                  title="Opens What is AI Marketing in a new tab"
                >
                  <span>What is AI Marketing</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/core-pillars/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1.5 group"
                  title="Opens Core Pillars in a new tab"
                >
                  <span>The 6 Core Pillars</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/roi-simulator/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1.5 group"
                  title="Opens ROI Simulator in a new tab"
                >
                  <span>Growth &amp; ROI Simulator</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/copy-lab/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1.5 group"
                  title="Opens Interactive Copy Lab in a new tab"
                >
                  <span>Interactive Copy Lab</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/playbook/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1.5 group"
                  title="Opens 90-Day Implementation Playbook in a new tab"
                >
                  <span>90-Day Implementation Playbook</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & Guides Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Research &amp; Guides
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link 
                  to="/articles/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 font-semibold text-blue-600 transition-colors inline-flex items-center gap-1"
                  title="Opens All Publications Index in a new tab"
                >
                  <span>All Publications Index</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              {BLOG_ARTICLES.map((article) => (
                <li key={article.slug}>
                  <Link 
                    to={article.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors line-clamp-1 inline-flex items-center gap-1 group"
                    title={`Open "${article.title}" in new tab`}
                  >
                    <span className="truncate">{article.title}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Diagnostic Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Growth Diagnostic
            </h4>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed font-normal">
              Request a rapid algorithmic readiness score and account structure breakdown.
            </p>
            <button
              onClick={onOpenAudit}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
            >
              <span>Get Free AI Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Digital Growth Lab. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link 
              to="/articles/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
              title="Opens Publications in a new tab"
            >
              <span>Publications</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
            </Link>
            <Link 
              to="/roi-simulator/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
              title="Opens ROI Calculator in a new tab"
            >
              <span>ROI Calculator</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
            </Link>
            <Link 
              to="/playbook/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
              title="Opens Roadmap in a new tab"
            >
              <span>Roadmap</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
