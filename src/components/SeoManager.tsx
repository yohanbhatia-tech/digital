import { useEffect } from 'react';
import { PageSeoMetadata, SITE_URL } from '../config/seoConfig.ts';

interface SeoManagerProps {
  seo: PageSeoMetadata;
}

export const SeoManager: React.FC<SeoManagerProps> = ({ seo }) => {
  useEffect(() => {
    // 1. Set document title
    document.title = seo.title;

    // Helper to update or create a meta tag
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Helper to update or create link tag (canonical)
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 2. Standard Meta Description & Keywords
    setMetaTag('name', 'description', seo.metaDescription);
    setMetaTag('name', 'keywords', `${seo.primaryKeyword}, ${seo.relatedKeywords.join(', ')}`);

    // 3. Canonical Link Tag
    setLinkTag('canonical', seo.canonicalUrl);

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:title', seo.ogTitle);
    setMetaTag('property', 'og:description', seo.ogDescription);
    setMetaTag('property', 'og:url', seo.canonicalUrl);
    setMetaTag('property', 'og:type', seo.ogType);
    setMetaTag('property', 'og:site_name', 'Digital Growth Lab');
    setMetaTag('property', 'og:image', seo.ogImage);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', seo.twitterCard);
    setMetaTag('name', 'twitter:title', seo.ogTitle);
    setMetaTag('name', 'twitter:description', seo.ogDescription);
    setMetaTag('name', 'twitter:image', seo.ogImage);

    // 6. Inject Schema.org Structured Data (JSON-LD)
    const existingSchemaScript = document.getElementById('seo-jsonld-schema');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    const schemas: any[] = [];

    // Base Organization Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Digital Growth Lab',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
      description: 'The algorithmic growth and AI digital marketing intelligence laboratory.'
    });

    if (seo.schemaType === 'WebSite') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Digital Growth Lab',
        url: `${SITE_URL}/`,
        description: seo.metaDescription,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      });
    } else if (seo.schemaType === 'Article' && seo.articleDetails) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': seo.canonicalUrl
        },
        headline: seo.title,
        description: seo.metaDescription,
        image: [seo.ogImage],
        datePublished: seo.articleDetails.publishDate,
        dateModified: seo.articleDetails.modifiedDate,
        articleSection: seo.articleDetails.section,
        author: {
          '@type': 'Person',
          name: seo.articleDetails.authorName
        },
        publisher: {
          '@type': 'Organization',
          name: 'Digital Growth Lab',
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.png`
          }
        }
      });
    }

    // FAQPage Schema for question-form H2s (AEO optimization)
    if (seo.faqs && seo.faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: seo.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      });
    }

    const script = document.createElement('script');
    script.id = 'seo-jsonld-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemas);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('seo-jsonld-schema');
      if (el) el.remove();
    };
  }, [seo]);

  return null;
};
