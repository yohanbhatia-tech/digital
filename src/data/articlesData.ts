import toolsImage from '../assets/images/ai_marketing_tools_guide_1792525095014.jpg';
import seoImage from '../assets/images/seo_beginners_guide_1792525112113.jpg';
import contentStrategyImage from '../assets/images/ai_content_strategy_1792525129018.jpg';

export interface ArticleMeta {
  slug: string;
  url: string;
  title: string;
  subtitle: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  category: string;
  readTime: string;
  wordCount: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const BLOG_ARTICLES: ArticleMeta[] = [
  {
    slug: 'ai-marketing-tools-for-beginners',
    url: '/blog/ai-marketing-tools-for-beginners/',
    title: 'Best AI Marketing Tools for Beginners: The 2026 Practical Starter Guide',
    subtitle: 'Cut through the AI hype and discover the beginner-friendly platforms that actually save hours and increase campaign performance.',
    excerpt: 'Explore the essential AI marketing toolkit for newcomers in 2026. From conversational copy engines to predictive bidding and visual creation, learn which platforms to adopt, mistakes to avoid, and how to build a high-performance stack for under $100/month.',
    image: toolsImage,
    imageAlt: 'A digital marketing strategist in a modern office analyzing AI marketing automation tools, predictive analytics dashboards, and campaign performance metrics on a glowing monitor',
    category: 'AI Tools & Automation',
    readTime: '6 min read',
    wordCount: '~1,250 words',
    publishDate: 'October 18, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Head of Growth Systems, Digital Growth Lab',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80',
    },
  },
  {
    slug: 'seo-for-beginners',
    url: '/blog/seo-for-beginners/',
    title: 'SEO for Beginners: A Complete Guide to Dominating Organic Search in the AI Era',
    subtitle: 'Master the fundamental pillars of search engine optimization, generative engine visibility (GEO), and sustainable organic traffic growth.',
    excerpt: 'A comprehensive, beginner-friendly manual to modern search engine optimization. Learn technical foundations, high-intent keyword discovery, on-page architecture, and how to optimize for both traditional search and AI search engines like ChatGPT and Perplexity.',
    image: seoImage,
    imageAlt: 'A comprehensive SEO dashboard displaying organic traffic growth charts, technical audit checklists, keyword ranking badges, and website architecture diagrams',
    category: 'Organic Growth & SEO',
    readTime: '6 min read',
    wordCount: '~1,280 words',
    publishDate: 'October 15, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Principal Search Architect, Digital Growth Lab',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
    },
  },
  {
    slug: 'ai-content-marketing-strategy',
    url: '/blog/ai-content-marketing-strategy/',
    title: 'AI Content Marketing Strategy: How to Build a High-Velocity, High-Quality Content Engine',
    subtitle: 'Move past generic AI fluff. Learn how to architect topic clusters, maintain editorial rigor, and build an audience with informational depth.',
    excerpt: 'Step-by-step blueprints for engineering a modern AI content marketing engine. Discover how to create information-dense topic clusters, implement human-in-the-loop editorial workflows, protect your brand authority, and repurpose single assets into 12 high-performing distribution channels.',
    image: contentStrategyImage,
    imageAlt: 'A marketing team collaborating around an AI content marketing strategy board with multi-channel distribution arrows, editorial calendar, and content performance analytics',
    category: 'Content Strategy',
    readTime: '6 min read',
    wordCount: '~1,260 words',
    publishDate: 'October 12, 2026',
    author: {
      name: 'David Chen',
      role: 'Director of Content Operations, Digital Growth Lab',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    },
  },
];
