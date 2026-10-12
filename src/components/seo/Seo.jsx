import { Helmet } from "react-helmet-async";

import seoConfig from "../../data/seoConfig";

function SEO({
  title,
  description,
  canonical,
  image,
  robots,
  type = "website",
  schema,
}) {
  const finalTitle = title
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;

  const finalDescription =
    description || seoConfig.defaultDescription;

  const finalCanonical = canonical
    ? `${seoConfig.siteUrl}${canonical}`
    : seoConfig.siteUrl;

  const finalImage =
    image || `${seoConfig.siteUrl}${seoConfig.defaultImage}`;

  const finalRobots = robots || seoConfig.robots;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{finalTitle}</title>

      <meta
        name="description"
        content={finalDescription}
      />

      <meta
        name="robots"
        content={finalRobots}
      />

      <link
        rel="canonical"
        href={finalCanonical}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:title"
        content={finalTitle}
      />

      <meta
        property="og:description"
        content={finalDescription}
      />

      <meta
        property="og:url"
        content={finalCanonical}
      />

      <meta
        property="og:site_name"
        content={seoConfig.siteName}
      />

      <meta
        property="og:locale"
        content={seoConfig.locale}
      />

      <meta
        property="og:image"
        content={finalImage}
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={finalTitle}
      />

      <meta
        name="twitter:description"
        content={finalDescription}
      />

      <meta
        name="twitter:image"
        content={finalImage}
      />

      {seoConfig.twitterHandle && (
        <meta
          name="twitter:site"
          content={seoConfig.twitterHandle}
        />
      )}

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export default SEO;