export function createOrganizationSchema({
  name,
  url,
  logo,
  telephone,
  email,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    ...(logo && { logo }),
    ...(telephone && { telephone }),
    ...(email && { email }),
  };
}

export function createLegalServiceSchema({
  name,
  url,
  description,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name,
    url,
    description,
  };
}

export function createWebsiteSchema({
  name,
  url,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
  };
}

export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createArticleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    ...(image && { image }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
  };
}