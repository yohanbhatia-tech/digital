import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface SectionPageHeaderProps {
  badge: string;
  title: string;
  titleAccent?: string;
  description: string;
  activePath: string;
}

export const SectionPageHeader: React.FC<SectionPageHeaderProps> = ({
  badge,
  title,
  titleAccent,
  description,
  activePath,
}) => {
  const sections = [
    { label: 'What is AI Marketing', path: '/what-is-ai-marketing/' },
    { label: 'Core Pillars', path: '/core-pillars/' },
    { label: 'ROI Simulator', path: '/roi-simulator/' },
    { label: 'Copy Lab', path: '/copy-lab/' },
    { label: '90-Day Playbook', path: '/playbook/' },
    { label: 'Research Articles', path: '/articles/' },
  ];

  return (
    <div className="bg-slate-50/50 border-b border-slate-200/60 pt-8 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-5">
          <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Digital Growth Lab</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-slate-800 font-semibold">{badge}</span>
        </nav>

        {/* Header Block */}
        <div className="max-w-3xl">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            {badge}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-4 text-balance">
            {title} {titleAccent && <span className="text-blue-600">{titleAccent}</span>}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Section Quick Navigator: Clean Segmented Menu */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          <span className="text-xs font-semibold text-slate-400 mr-2 shrink-0">
            Sections:
          </span>
          {sections.map((sec) => {
            const isActive = activePath === sec.path;
            return (
              <Link
                key={sec.path}
                to={sec.path}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200/80 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {sec.label}
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};
