/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { AuditModal } from './components/AuditModal.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ArticleTools } from './pages/ArticleTools.tsx';
import { ArticleSeo } from './pages/ArticleSeo.tsx';
import { ArticleContentStrategy } from './pages/ArticleContentStrategy.tsx';

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
      <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
        {/* Navigation Bar */}
        <Navbar onOpenAudit={handleOpenAudit} />

        {/* Client Routes */}
        <div className="flex-1">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<HomePage onOpenAudit={handleOpenAudit} />} />

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
