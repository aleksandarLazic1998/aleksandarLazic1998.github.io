"use client";

import Head from "next/head";
import { structuredData } from "@/lib/seo";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  noindex = false,
}: SEOHeadProps) {
  const baseUrl = "https://aleksandarlazic1998.github.io";
  const defaultTitle =
    "Aleksandar Lazić | Software Developer | React & Node.js Expert";
  const defaultDescription =
    "Experienced Software Developer specializing in React, Node.js, and modern web technologies. 4+ years building scalable applications across HR Tech, Security Tech, and Dev Tech industries. Available for work.";
  const defaultOgImage = `${baseUrl}/images/og-image.jpg`;

  const pageTitle = title ? `${title} | Aleksandar Lazić` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageCanonical = canonical || baseUrl;
  const pageOgImage = ogImage || defaultOgImage;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content="Aleksandar Lazić, Software Developer, React Developer, Node.js Developer, Full Stack Developer, JavaScript, TypeScript, Portfolio, Available for work"
      />
      <link rel="canonical" href={pageCanonical} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:site_name" content="Aleksandar Lazić Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />
      <meta name="twitter:creator" content="@aleksandarlazic1998" />
      <meta name="twitter:site" content="@aleksandarlazic1998" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Aleksandar Lazić" />
      <meta name="publisher" content="Aleksandar Lazić" />
      <meta name="copyright" content="Aleksandar Lazić" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="RS" />
      <meta name="geo.country" content="Serbia" />
      <meta name="geo.placename" content="Serbia" />

      {/* Mobile Optimization */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <meta name="theme-color" content="#8B5CF6" />
      <meta name="msapplication-TileColor" content="#8B5CF6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content="Aleksandar Lazić" />
      <meta name="format-detection" content="telephone=no" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.person),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.website),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.organization),
        }}
      />
    </Head>
  );
}
