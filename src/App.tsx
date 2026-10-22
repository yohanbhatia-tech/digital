/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { AuditModal } from './components/AuditModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { WhatIsAiPage } from './pages/WhatIsAiPage.tsx';
import { PillarsPage } from './pages/PillarsPage.tsx';
import { RoiSimulatorPage } from './pages/RoiSimulatorPage.tsx';
import { CopyLabPage } from './pages/CopyLabPage.tsx';
import { PlaybookPage } from './pages/PlaybookPage.tsx';
import { ArticlesIndexPage } from './pages/ArticlesIndexPage.tsx';
import { ArticleTools } from './pages/ArticleTools.tsx';
import { ArticleSeo } from './pages/ArticleSeo.tsx';
import { ArticleContentStrategy } from './pages/ArticleContentStrategy.tsx';

/**
 * ScrollToTop ensures every route change immediately resets the scroll position
 * so standalone section pages open cleanly at the very top.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState<boolean>(false);

  const handleOpenAudit = () => {
    setIsAuditModalOpen(true);
  };

  const handleCloseAudit = () => {
    setIsAuditModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
        {/* Navigation Bar with unique URL links */}
        <Navbar onOpenAudit={handleOpenAudit} />

        {/* Client Routes */}
        <div className="flex-1">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage onOpenAudit={handleOpenAudit} />} />

            {/* Dedicated Unique Section 1: What is AI Marketing */}
            <Route
              path="/what-is-ai-marketing/"
              element={<WhatIsAiPage onOpenAudit={handleOpenAudit} />}
            />
            <Route
              path="/what-is-ai-marketing"
              element={<Navigate to="/what-is-ai-marketing/" replace />}
            />

            {/* Dedicated Unique Section 2: Core Pillars */}
            <Route
              path="/core-pillars/"
              element={<PillarsPage onOpenAudit={handleOpenAudit} />}
            />
            <Route
              path="/core-pillars"
              element={<Navigate to="/core-pillars/" replace />}
            />

            {/* Dedicated Unique Section 3: Growth & ROI Simulator */}
            <Route
              path="/roi-simulator/"
              element={<RoiSimulatorPage onOpenAudit={handleOpenAudit} />}
            />
            <Route
              path="/roi-simulator"
              element={<Navigate to="/roi-simulator/" replace />}
            />

            {/* Dedicated Unique Section 4: Copy Lab */}
            <Route
              path="/copy-lab/"
              element={<CopyLabPage onOpenAudit={handleOpenAudit} />}
            />
            <Route
              path="/copy-lab"
              element={<Navigate to="/copy-lab/" replace />}
            />

            {/* Dedicated Unique Section 5: Playbook */}
            <Route
              path="/playbook/"
              element={<PlaybookPage onOpenAudit={handleOpenAudit} />}
            />
            <Route
              path="/playbook"
              element={<Navigate to="/playbook/" replace />}
            />

            {/* Dedicated Unique Section 6: Articles & Research Publications Index */}
            <Route
              path="/articles/"
              element={<ArticlesIndexPage />}
            />
            <Route
              path="/articles"
              element={<Navigate to="/articles/" replace />}
            />
            <Route
              path="/blog/"
              element={<Navigate to="/articles/" replace />}
            />
            <Route
              path="/blog"
              element={<Navigate to="/articles/" replace />}
            />

            {/* Article 1: Best AI Marketing Tools for Beginners */}
            <Route
              path="/blog/ai-marketing-tools-for-beginners/"
              element={<ArticleTools onOpenAudit={handleOpenAudit} />}
            />
            <Route
              path="/blog/ai-marketing-tools-for-beginners"
              element={<Navigate to="/blog/ai-marketing-tools-for-beginners/" replace />}
            />

            {/* Article 2: SEO for Beginners: A Complete Guide */}
            <Route
              path="/blog/seo-for-beginners/"
              element={<ArticleSeo onOpenAudit={handleOpenAudit} />}
            />
            <Route
              path="/blog/seo-for-beginners"
              element={<Navigate to="/blog/seo-for-beginners/" replace />}
            />

            {/* Article 3: AI Content Marketing Strategy */}
            <Route
              path="/blog/ai-content-marketing-strategy/"
              element={<ArticleContentStrategy onOpenAudit={handleOpenAudit} />}
            />
            <Route
              path="/blog/ai-content-marketing-strategy"
              element={<Navigate to="/blog/ai-content-marketing-strategy/" replace />}
            />

            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer onOpenAudit={handleOpenAudit} />

        {/* Growth Audit Modal */}
        <AuditModal
          isOpen={isAuditModalOpen}
          onClose={handleCloseAudit}
        />
      </div>
    </BrowserRouter>
  );
}
