interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Medical Procedure Schema
export function MedicalProcedureSchema({
  name,
  description,
  image,
  procedureType = 'Cosmetic',
  bodyLocation,
}: {
  name: string;
  description: string;
  image?: string;
  procedureType?: string;
  bodyLocation?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    procedureType,
    ...(image && { image }),
    ...(bodyLocation && { bodyLocation }),
  };

  return <JsonLd data={data} />;
}

// Medical Clinic Schema
export function MedicalClinicSchema({
  name,
  description,
  address,
  telephone,
  rating,
  reviewCount,
  image,
  priceRange,
}: {
  name: string;
  description: string;
  address: string;
  telephone?: string;
  rating?: number;
  reviewCount?: number;
  image?: string;
  priceRange?: string;
}) {
  const data: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name,
    description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressLocality: 'Seoul',
      addressCountry: 'KR',
    },
    ...(telephone && { telephone }),
    ...(image && { image }),
    ...(priceRange && { priceRange }),
  };

  if (rating && reviewCount) {
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return <JsonLd data={data} />;
}

// Article Schema
export function ArticleSchema({
  headline,
  description,
  image,
  authorName,
  publishedTime,
  modifiedTime,
  url,
}: {
  headline: string;
  description: string;
  image?: string;
  authorName: string;
  publishedTime: string;
  modifiedTime?: string;
  url: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    ...(image && { image }),
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Best Skincare in Korea',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bestskincareinkorea.com/logo.png',
      },
    },
    datePublished: publishedTime,
    ...(modifiedTime && { dateModified: modifiedTime }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return <JsonLd data={data} />;
}

// FAQ Schema
export function FAQSchema({
  questions,
}: {
  questions: Array<{ question: string; answer: string }>;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

// Breadcrumb Schema
export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}

// Organization Schema (for homepage)
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Best Skincare in Korea',
    url: 'https://bestskincareinkorea.com',
    logo: 'https://bestskincareinkorea.com/logo.png',
    description: 'Your trusted guide to skincare and plastic surgery in Korea.',
    sameAs: [
      'https://twitter.com/bestskincarekr',
      'https://instagram.com/bestskincareinkorea',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@bestskincareinkorea.com',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
  };

  return <JsonLd data={data} />;
}