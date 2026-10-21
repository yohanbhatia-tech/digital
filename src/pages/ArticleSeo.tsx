import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleLayout } from '../components/ArticleLayout.tsx';
import { BLOG_ARTICLES } from '../data/articlesData.ts';
import { SeoManager } from '../components/SeoManager.tsx';
import { SEO_DATA } from '../config/seoConfig.ts';
import { 
  Sparkles, 
  CheckCircle, 
  HelpCircle, 
  Search, 
  TrendingUp, 
  Compass, 
  FileText, 
  Cpu, 
  Globe, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

interface ArticleSeoProps {
  onOpenAudit?: () => void;
}

export const ArticleSeo: React.FC<ArticleSeoProps> = ({ onOpenAudit }) => {
  const article = BLOG_ARTICLES[1];
  const seo = SEO_DATA.articleSeo;

  const tableOfContents = [
    { id: 'core-mechanics', text: 'How Search Engines Crawl, Index, and Rank Web Content' },
    { id: 'three-pillars', text: 'The Three Pillars of Organic Search Success' },
    { id: 'how-long-results', text: 'How Long Does It Actually Take for SEO to Show Tangible Results?', isQuestion: true },
    { id: 'keyword-research', text: 'Keyword Research for Beginners: Targeting High-Intent Queries' },
    { id: 'ai-search-shift', text: 'How Has AI Search Changed Modern SEO and Rankings?', isQuestion: true },
    { id: 'onpage-checklist', text: 'On-Page Optimization Checklist: Title Tags, Headers, and Architecture' },
    { id: 'technical-seo', text: 'Technical SEO Essentials You Can Fix in an Afternoon' },
    { id: 'holistic-growth', text: 'Unifying SEO with Your Broader Growth Engine' },
  ];

  return (
    <>
      <SeoManager seo={seo} />
      <ArticleLayout article={article} tableOfContents={tableOfContents} onOpenAudit={onOpenAudit}>
        
        {/* Intro */}
        <p className="text-lg text-slate-700 leading-relaxed font-normal">
          Understanding <strong>SEO for beginners</strong> remains the highest-leverage skill in digital acquisition. Unlike paid channels where traffic stops the instant you turn off ad spend, mastering modern <strong>on-page SEO techniques</strong> and rigorous <strong>keyword research</strong> creates an enduring digital moat: authoritative, high-ranking pages continue driving qualified buyers, newsletter subscribers, and enterprise leads for years after publication.
        </p>

        <p className="text-base text-slate-700 leading-relaxed font-normal">
          Yet for many newcomers, search optimization is made to sound like dark magic, filled with confusing acronyms, outdated forum hacks, and anxiety over recent search algorithm updates. The truth is straightforward: search engines exist to satisfy user curiosity with the most accurate, helpful, and easily navigable answer possible. With the rapid emergence of AI answer engines like ChatGPT and Perplexity, mastering both classic indexing and <strong>on-page SEO techniques</strong> ensures your brand remains visible across all discovery platforms. At <Link to="/" className="text-blue-600 font-semibold underline decoration-blue-300 hover:text-blue-800">Digital Growth Lab</Link>, our organic search architecture drives high-intent visitors through structured content pipelines. In this complete manual, you will learn the mechanics of search, how to conduct intent-driven <strong>keyword research</strong>, and how to execute on-page optimization.
        </p>

        {/* Section 1 */}
        <h2 id="core-mechanics" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-6 border-t border-slate-100">
          How Search Engines Crawl, Index, and Rank Web Content
        </h2>

        <p className="text-base text-slate-700 leading-relaxed">
          Before researching keywords or writing title tags, you must understand the basic technical lifecycle that every web page undergoes to appear in organic search results. Search engines perform three distinct operations:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs mb-2">
              01
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Crawling (Discovery)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated software programs called crawlers or spiders (like Googlebot) traverse the web by following hyperlinks from one page to another, discovering newly launched pages and updated assets.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs mb-2">
              02
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Indexing (Categorization)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Once crawled, the search engine parses the code, text, imagery, and structured schema to understand the page topic. If the content meets quality thresholds, it is stored in a massive digital library called the index.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-2">
              03
            </div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">Ranking (Ordering)</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              When a user types a search query, ranking algorithms evaluate hundreds of signals—including relevance, backlink authority, page speed, and user engagement—to present the most helpful results in order.
            </p>
          </div>
        </div>

        <p className="text-base text-slate-700 leading-relaxed">
          If a page cannot be crawled due to server errors or a misconfigured robots.txt file, it cannot be indexed. If it is not indexed, it cannot rank. Therefore, every successful <strong>organic search optimization</strong> strategy starts with a solid technical baseline.
        </p>

        {/* Section 2 */}
        <h2 id="three-pillars" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-6 border-t border-slate-100">
          The Three Pillars of Organic Search Success
        </h2>

        <p className="text-base text-slate-700 leading-relaxed">
          Modern SEO is commonly divided into three interdependent pillars. Neglecting any one of them creates a ceiling on your organic visibility:
        </p>

        <ul className="space-y-4 my-6 text-slate-700">
          <li className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <strong className="text-slate-900 font-bold block mb-1">1. Technical SEO (The Foundation):</strong>
            Ensures search engines can seamlessly crawl, render, and understand your website structure. This includes fast page loading speeds, HTTPS security, mobile responsiveness, XML sitemaps, and clean URL permalinks.
          </li>
          <li className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <strong className="text-slate-900 font-bold block mb-1">2. On-Page SEO (The Relevance):</strong>
            Involves optimizing the observable content on your page so search engines recognize exactly what questions you answer. This includes strategic title tags, logical H1/H2 header hierarchies, descriptive image alt text, and semantic keyword integration.
          </li>
          <li className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
            <strong className="text-slate-900 font-bold block mb-1">3. Off-Page Authority (The Reputation):</strong>
            Reflects how external websites perceive your brand. High-quality editorial backlinks from reputable industry publications, brand citations, podcast mentions, and digital PR serve as third-party votes of confidence in your domain.
          </li>
        </ul>

        {/* Section 3: Question Form Heading #1 with Direct Answer for AEO */}
        <div className="pt-6 border-t border-slate-100">
          <h2 id="how-long-results" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-start gap-2.5">
            <HelpCircle className="w-7 h-7 text-blue-600 shrink-0 mt-0.5" />
            <span>How Long Does It Actually Take for SEO to Show Tangible Results?</span>
          </h2>

          {/* Direct Answer Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/80 border-2 border-blue-200 my-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Direct Answer
            </div>
            <p className="text-base font-semibold text-slate-900 leading-relaxed">
              For a brand-new website with zero existing domain authority, noticeable SEO traffic typically takes 3 to 6 months to materialize, with significant compounding growth occurring between months 6 and 12. For an established website making technical optimizations or publishing high-intent articles within its existing topical authority, rankings can improve within 3 to 8 weeks.
            </p>
          </div>

          <p className="text-base text-slate-700 leading-relaxed">
            The reason for this timeline is algorithmic caution: Google places new domains into an observational period to ensure the site is not a fly-by-night spam operation. During the first 90 days, search crawlers test how real human visitors interact with your pages—evaluating bounce rates, dwell time, and whether users return to search results to click a competitor.
          </p>

          <p className="text-base text-slate-700 leading-relaxed">
            Beginners who abandon SEO after four weeks miss the compounding exponential curve. SEO behaves like compound interest: the work you invest today builds domain trust that makes every future article rank faster and easier. To accelerate early content production while maintaining high editorial standards, pair your keyword research with our guide on <Link to="/blog/ai-content-marketing-strategy/" className="text-blue-600 font-semibold underline hover:text-blue-800">AI Content Marketing Strategy</Link>.
          </p>
        </div>

        {/* Section 4 */}
        <h2 id="keyword-research" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-6 border-t border-slate-100">
          Keyword Research for Beginners: Targeting High-Intent Queries
        </h2>

        <p className="text-base text-slate-700 leading-relaxed">
          The most common trap in <strong>SEO for beginners</strong> is targeting massive, generic search terms like <em>"marketing," "insurance,"</em> or <em>"shoes."</em> These terms are fiercely defended by multi-billion-dollar corporations with decade-old backlink profiles. Instead, beginners should focus on long-tail, high-intent keywords.
        </p>

        {/* Search Intent Matrix */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 my-6 shadow-sm">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
            Understanding the 4 Types of Search Intent:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-blue-700 block mb-1">1. Informational Intent</span>
              <p className="text-slate-600">The user is seeking knowledge or troubleshooting an issue (e.g., <em>"how to calculate email unsubscribe rate"</em>). Ideal for beginner blog guides.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-blue-700 block mb-1">2. Navigational Intent</span>
              <p className="text-slate-600">The user is looking for a specific website or portal (e.g., <em>"Digital Growth Lab login"</em>). Dominated by branded queries.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-blue-700 block mb-1">3. Commercial Investigation</span>
              <p className="text-slate-600">The user is comparing solutions before buying (e.g., <em>"best email marketing software for small business"</em>). Extremely lucrative for comparison guides.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-blue-700 block mb-1">4. Transactional Intent</span>
              <p className="text-slate-600">The user is ready to purchase or book right now (e.g., <em>"hire AI marketing consultant"</em>). Highest conversion rate, essential for product and service pages.</p>
            </div>
          </div>
        </div>

        <p className="text-base text-slate-700 leading-relaxed">
          By targeting specific 3-to-5 word queries with low search difficulty but clear buying intent, a beginner website can claim page-one positions within weeks and generate high-converting leads.
        </p>

        {/* Section 5: Question Form Heading #2 with Direct Answer for AEO */}
        <div className="pt-6 border-t border-slate-100">
          <h2 id="ai-search-shift" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-start gap-2.5">
            <HelpCircle className="w-7 h-7 text-blue-600 shrink-0 mt-0.5" />
            <span>How Has AI Search Changed Modern SEO and Rankings?</span>
          </h2>

          {/* Direct Answer Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/80 border-2 border-blue-200 my-5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Direct Answer
            </div>
            <p className="text-base font-semibold text-slate-900 leading-relaxed">
              AI search platforms—such as Google AI Overviews, Perplexity AI, and ChatGPT Search—have expanded organic search optimization into Generative Engine Optimization (GEO). To win visibility today, websites must provide concise, definitive factual summaries that AI models can directly synthesize, maintain structured Schema.org markup, and establish verifiable topical authority through original data and expert citations.
            </p>
          </div>

          <p className="text-base text-slate-700 leading-relaxed">
            In traditional search, users scanned ten blue links and clicked into an article. In AI-powered search, the engine synthesizes answers directly on the search results page, citing three to five authoritative sources as footnotes. If your website provides dense, clearly labeled direct answers (just like the direct answer callout box above), the generative model cites your URL as a primary authority.
          </p>

          <p className="text-base text-slate-700 leading-relaxed">
            Furthermore, AI engines favor content exhibiting <strong>E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness)</strong>. Including firsthand practitioner screenshots, step-by-step methodologies, and verified author biographies signals to machine learning algorithms that your content represents authentic human intelligence. For beginner software recommendations to assist with content research, consult our overview of <Link to="/blog/ai-marketing-tools-for-beginners/" className="text-blue-600 font-semibold underline hover:text-blue-800">Best AI Marketing Tools for Beginners</Link>.
          </p>
        </div>

        {/* Section 6 */}
        <h2 id="onpage-checklist" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-6 border-t border-slate-100">
          On-Page SEO Techniques Checklist: Title Tags, Headers, and Architecture
        </h2>

        <p className="text-base text-slate-700 leading-relaxed">
          Whenever you draft a new article or landing page, ensure you execute these proven <strong>on-page SEO techniques</strong> to maximize search relevance:
        </p>

        <div className="space-y-3 my-6">
          <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 text-sm font-bold">Primary Keyword in Title Tag (&lt;title&gt;) and H1:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Position your target phrase as close to the beginning of the title as natural, keeping total length under 60 characters to avoid SERP truncation.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 text-sm font-bold">Logical Header Hierarchy (H1 &gt; H2 &gt; H3):</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Maintain a strict single H1 per page for the main topic, with H2s for major conceptual sections and H3s for supporting tactics. Include question-form H2s to target featured snippets.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 text-sm font-bold">Descriptive Image Alt Text:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Every image should include detailed descriptive alt text that explains the visual content for screen readers while naturally incorporating relevant context for Google Image search.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 text-sm font-bold">Descriptive Internal Linking:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Connect every article to at least two or three related pages across your site using contextual anchor text rather than generic <em>"click here"</em> links. This passes PageRank authority through your digital architecture.</p>
            </div>
          </div>
        </div>

        {/* Section 7 */}
        <h2 id="technical-seo" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-6 border-t border-slate-100">
          Technical SEO Essentials You Can Fix in an Afternoon
        </h2>

        <p className="text-base text-slate-700 leading-relaxed">
          You do not need a computer science degree to resolve 80% of technical SEO issues. Focus on these three high-impact optimizations:
        </p>

        <ul className="space-y-3 my-4 text-sm text-slate-700">
          <li className="flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2"></div>
            <span><strong>Install Google Search Console:</strong> This free tool from Google is non-negotiable. It shows your exact crawl status, submit XML sitemaps, view indexing errors, and reveal the real search queries bringing people to your site.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2"></div>
            <span><strong>Compress Images to Next-Gen WebP/AVIF Formats:</strong> Large PNG and JPEG files are the #1 cause of slow page load speeds. Compress your graphics below 150KB to pass Google’s Core Web Vitals thresholds.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2"></div>
            <span><strong>Ensure Mobile Responsiveness:</strong> Google operates on a 100% mobile-first indexing system. If your navigation breaks on smartphones or buttons overlap, your desktop rankings will plummet.</span>
          </li>
        </ul>

        {/* Section 8 */}
        <h2 id="holistic-growth" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-6 border-t border-slate-100">
          Unifying SEO with Your Broader Growth Engine
        </h2>

        <p className="text-base text-slate-700 leading-relaxed">
          SEO should never exist in a silo. The highest-performing growth engines blend organic search with paid advertising and automated customer retention. Organic traffic discovers your brand; paid retargeting keeps you top-of-mind; automated email sequences convert prospects into high-ticket clients.
        </p>

        <p className="text-base text-slate-700 leading-relaxed">
          To model how organic traffic efficiency boosts your blended acquisition costs, visit the <Link to="/" className="text-blue-600 font-semibold underline decoration-blue-300 hover:text-blue-800">Digital Growth Lab homepage</Link> and test our interactive <strong>Growth &amp; ROI Simulator</strong>. When you combine steady organic rankings with algorithmic conversion intelligence, your customer acquisition costs drop while customer lifetime value expands.
        </p>

      </ArticleLayout>
    </>
  );
};
