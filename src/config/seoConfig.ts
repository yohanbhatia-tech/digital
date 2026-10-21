/**
 * Global SEO Configuration for Digital Growth Lab
 * Configure your production Vercel domain here in one single place.
 */

// Easy domain configuration: update this placeholder when your Vercel domain is live
export const SITE_URL = 
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) 
    ? import.meta.env.VITE_SITE_URL 
    : 'https://digitalgrowthlab.vercel.app';

export interface PageSeoMetadata {
  path: string;
  canonicalUrl: string;
  primaryKeyword: string;
  relatedKeywords: [string, string];
  searchIntent: string;
  title: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogType: 'website' | 'article';
  ogImage: string;
  twitterCard: 'summary_large_image';
  schemaType: 'WebSite' | 'Article';
  faqs?: Array<{ question: string; answer: string }>;
  articleDetails?: {
    publishDate: string;
    modifiedDate: string;
    authorName: string;
    section: string;
  };
}

export const SEO_DATA: Record<string, PageSeoMetadata> = {
  home: {
    path: '/',
    canonicalUrl: `${SITE_URL}/`,
    primaryKeyword: 'AI digital marketing',
    relatedKeywords: ['Digital marketing strategies', 'AI marketing trends'],
    searchIntent: 'Informational',
    title: 'Digital Growth Lab | Next-Gen AI Digital Marketing & Growth Engine',
    metaDescription: 'Scale customer acquisition with AI digital marketing. Master digital marketing strategies, explore latest AI marketing trends, and simulate algorithmic ROI.',
    ogTitle: 'Digital Growth Lab | AI Digital Marketing & Algorithmic Growth Engine',
    ogDescription: 'Explore modern AI digital marketing strategies, latest AI marketing trends, interactive ROI simulation, and predictive performance frameworks.',
    ogType: 'website',
    ogImage: `${SITE_URL}/og-cover.jpg`,
    twitterCard: 'summary_large_image',
    schemaType: 'WebSite',
    faqs: [
      {
        question: 'How does AI digital marketing outperform traditional marketing?',
        answer: 'AI digital marketing outperforms traditional digital marketing by replacing slow manual guesswork with real-time predictive algorithms. Instead of waiting weeks to evaluate static demographics and manual A/B tests, algorithmic growth engines autonomously test dozens of dynamic creative permutations, adjust auction bids across platforms in milliseconds, and predict customer lifetime value (LTV) before ad budgets are wasted.'
      },
      {
        question: 'What is the fastest way to implement predictive marketing automation?',
        answer: 'The fastest way to implement predictive marketing automation is to follow a 3-step foundation: first, install server-side conversion tracking (CAPI) to provide clean first-party purchase signals; second, deploy a high-tier conversational AI tool to draft multi-angle ad copy hooks; and third, enable algorithmic value-based bidding on Meta and Google Ads to dynamically route ad spend to high-intent buyer cohorts.'
      }
    ]
  },
  articleTools: {
    path: '/blog/ai-marketing-tools-for-beginners/',
    canonicalUrl: `${SITE_URL}/blog/ai-marketing-tools-for-beginners/`,
    primaryKeyword: 'AI marketing tools',
    relatedKeywords: ['AI tools for marketers', 'Marketing automation tools'],
    searchIntent: 'Informational / Commercial',
    title: 'Best AI Marketing Tools for Beginners (2026 Practical Guide)',
    metaDescription: 'Discover the best AI marketing tools for beginners. Compare essential AI tools for marketers and marketing automation tools to build a stack for under $100/mo.',
    ogTitle: 'Best AI Marketing Tools for Beginners: 2026 Practical Starter Guide',
    ogDescription: 'Cut through marketing hype. Compare essential AI marketing tools, top AI tools for marketers, and marketing automation tools under $100/month.',
    ogType: 'article',
    ogImage: `${SITE_URL}/src/assets/images/ai_marketing_tools_guide_1792525095014.jpg`,
    twitterCard: 'summary_large_image',
    schemaType: 'Article',
    articleDetails: {
      publishDate: '2026-10-18T08:00:00Z',
      modifiedDate: '2026-10-20T12:00:00Z',
      authorName: 'Elena Rostova',
      section: 'AI Tools & Automation'
    },
    faqs: [
      {
        question: 'What are the most common mistakes beginners make when using AI tools?',
        answer: 'The most common mistakes beginners make when using AI marketing tools are publishing unedited first-draft copy that lacks brand tone, failing to feed proprietary customer data into prompts, treating AI as a substitute for audience research, and oversubscribing to overlapping niche software.'
      },
      {
        question: 'Which AI marketing tool should a beginner learn first?',
        answer: 'A beginner should master a foundational large language model (specifically Claude 3.5 Sonnet or ChatGPT Plus) before investing in specialized niche tools. Mastering conversational prompting provides durable, transferable skills across copywriting, customer persona simulation, and campaign ideation.'
      }
    ]
  },
  articleSeo: {
    path: '/blog/seo-for-beginners/',
    canonicalUrl: `${SITE_URL}/blog/seo-for-beginners/`,
    primaryKeyword: 'SEO for beginners',
    relatedKeywords: ['On-page SEO techniques', 'Keyword research'],
    searchIntent: 'Informational',
    title: 'SEO for Beginners: The 2026 Complete Organic Search Guide',
    metaDescription: 'Master SEO for beginners with our 2026 blueprint. Learn on-page SEO techniques, high-intent keyword research, and technical search engine crawling essentials.',
    ogTitle: 'SEO for Beginners: A Complete Guide to Dominating Organic Search',
    ogDescription: 'Comprehensive guide to SEO for beginners. Master on-page SEO techniques, strategic keyword research, and generative engine optimization (GEO).',
    ogType: 'article',
    ogImage: `${SITE_URL}/src/assets/images/seo_beginners_guide_1792525112113.jpg`,
    twitterCard: 'summary_large_image',
    schemaType: 'Article',
    articleDetails: {
      publishDate: '2026-10-15T08:00:00Z',
      modifiedDate: '2026-10-20T12:00:00Z',
      authorName: 'Marcus Vance',
      section: 'Organic Growth & SEO'
    },
    faqs: [
      {
        question: 'How long does it actually take for SEO to show tangible results?',
        answer: 'For a new domain with zero established authority, noticeable organic search traffic takes 3 to 6 months to materialize, with compounding returns between months 6 and 12. Established websites making technical or topical optimizations can see ranking movement within 3 to 8 weeks.'
      },
      {
        question: 'How has AI search changed modern SEO and rankings?',
        answer: 'AI search platforms (Google AI Overviews, Perplexity, ChatGPT Search) have expanded SEO into Generative Engine Optimization (GEO). Websites must provide concise, definitive factual summaries for direct synthesis, structured Schema.org markup, and verified first-party E-E-A-T credentials.'
      }
    ]
  },
  articleContent: {
    path: '/blog/ai-content-marketing-strategy/',
    canonicalUrl: `${SITE_URL}/blog/ai-content-marketing-strategy/`,
    primaryKeyword: 'AI content marketing',
    relatedKeywords: ['AI content creation', 'Content marketing strategy'],
    searchIntent: 'Informational',
    title: 'AI Content Marketing Strategy: Build a High-Velocity Engine',
    metaDescription: 'Master AI content marketing in 2026. Discover how AI content creation transforms your content marketing strategy with human-in-the-loop editorial workflows.',
    ogTitle: 'AI Content Marketing Strategy: High-Velocity, High-Quality Content Engine',
    ogDescription: 'Move beyond generic AI fluff. Master AI content creation, architect an authoritative content marketing strategy, and measure true content ROI.',
    ogType: 'article',
    ogImage: `${SITE_URL}/src/assets/images/ai_content_strategy_1792525129018.jpg`,
    twitterCard: 'summary_large_image',
    schemaType: 'Article',
    articleDetails: {
      publishDate: '2026-10-12T08:00:00Z',
      modifiedDate: '2026-10-20T12:00:00Z',
      authorName: 'David Chen',
      section: 'Content Strategy'
    },
    faqs: [
      {
        question: 'Can AI-generated content rank high on Google without penalties?',
        answer: 'Yes, Google explicitly confirms it does not penalize content solely because it was generated with AI. Google ranks content on quality, originality, and demonstrated E-E-A-T. However, unedited, mass-produced low-quality AI copy will trigger scaled content abuse filters.'
      },
      {
        question: 'What metrics should you track to measure AI content marketing ROI?',
        answer: 'Track leading indicators (cost per published asset, editorial turnaround cycle, keyword footprint growth) alongside lagging business indicators (organic pipeline revenue, customer acquisition cost reduction, and assisted conversion value in Google Analytics).'
      }
    ]
  }
};
