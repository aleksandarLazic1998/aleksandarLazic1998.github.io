import { NextSeoProps } from "next-seo";

// Base URL for your site
const baseUrl = "https://aleksandarlazic1998.github.io";

// Default SEO configuration
export const defaultSEO: NextSeoProps = {
  title: "Aleksandar Lazić | Software Developer | React & Node.js Expert",
  titleTemplate: "%s | Aleksandar Lazić",
  description:
    "Experienced Software Developer specializing in React, Node.js, and modern web technologies. 4+ years building scalable applications across HR Tech, Security Tech, and Dev Tech industries.",
  canonical: baseUrl,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Aleksandar Lazić Portfolio",
    title: "Aleksandar Lazić | Software Developer | React & Node.js Expert",
    description:
      "Experienced Software Developer specializing in React, Node.js, and modern web technologies. 4+ years building scalable applications across multiple industries.",
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Aleksandar Lazić - Software Developer Portfolio",
        type: "image/jpeg",
      },
      {
        url: `${baseUrl}/images/og-image-square.jpg`,
        width: 1200,
        height: 1200,
        alt: "Aleksandar Lazić - Software Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@aleksandarlazic1998",
    site: "@aleksandarlazic1998",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#8B5CF6",
    },
    {
      name: "msapplication-TileColor",
      content: "#8B5CF6",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
    {
      name: "format-detection",
      content: "telephone=no",
    },
    {
      name: "robots",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "googlebot",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "bingbot",
      content:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
    {
      rel: "canonical",
      href: baseUrl,
    },
  ],
};

// Page-specific SEO configurations
export const seoConfig = {
  home: {
    ...defaultSEO,
    title: "Aleksandar Lazić | Software Developer | React & Node.js Expert",
    description:
      "Experienced Software Developer specializing in React, Node.js, and modern web technologies. 4+ years building scalable applications across HR Tech, Security Tech, and Dev Tech industries. Available for work.",
    keywords: [
      "Aleksandar Lazić",
      "Software Developer",
      "React Developer",
      "Node.js Developer",
      "Full Stack Developer",
      "JavaScript Developer",
      "TypeScript Developer",
      "Frontend Developer",
      "Backend Developer",
      "Web Developer",
      "Portfolio",
      "React.js",
      "Next.js",
      "Nest.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "Supabase",
      "Tailwind CSS",
      "Sass",
      "Redux",
      "GraphQL",
      "REST API",
      "Microservices",
      "Clean Architecture",
      "Performance Optimization",
      "Code Refactoring",
      "Team Leadership",
      "Mentoring",
      "HR Tech",
      "Security Tech",
      "Dev Tech",
      "Available for work",
      "Hire React Developer",
      "Hire Node.js Developer",
      "Hire Full Stack Developer",
      "Serbia Developer",
      "European Developer",
      "Remote Developer",
    ],
    openGraph: {
      ...defaultSEO.openGraph,
      title: "Aleksandar Lazić | Software Developer | React & Node.js Expert",
      description:
        "Experienced Software Developer specializing in React, Node.js, and modern web technologies. 4+ years building scalable applications across multiple industries. Available for work.",
    },
  },
  about: {
    ...defaultSEO,
    title: "About Aleksandar Lazić | Software Developer Experience & Skills",
    description:
      "Learn about Aleksandar Lazić's journey as a Software Developer. 4+ years of experience in React, Node.js, and modern web technologies. Passionate about building scalable applications and mentoring developers.",
    canonical: `${baseUrl}/#about`,
    openGraph: {
      ...defaultSEO.openGraph,
      title: "About Aleksandar Lazić | Software Developer Experience & Skills",
      description:
        "Learn about Aleksandar Lazić's journey as a Software Developer. 4+ years of experience in React, Node.js, and modern web technologies.",
      url: `${baseUrl}/#about`,
    },
  },
  projects: {
    ...defaultSEO,
    title: "Projects | Aleksandar Lazić Portfolio | React & Node.js Work",
    description:
      "Explore Aleksandar Lazić's portfolio of projects including Benefiti HR platform, CMMC+ security compliance, eProtokol digital protocols, TapSpots beer management, and more. Built with React, Node.js, and modern technologies.",
    canonical: `${baseUrl}/#projects`,
    openGraph: {
      ...defaultSEO.openGraph,
      title: "Projects | Aleksandar Lazić Portfolio | React & Node.js Work",
      description:
        "Explore Aleksandar Lazić's portfolio of projects including Benefiti HR platform, CMMC+ security compliance, eProtokol digital protocols, and more.",
      url: `${baseUrl}/#projects`,
    },
  },
  skills: {
    ...defaultSEO,
    title: "Skills & Technologies | Aleksandar Lazić | React, Node.js, AWS",
    description:
      "Comprehensive list of Aleksandar Lazić's technical skills including React, Node.js, TypeScript, PostgreSQL, MongoDB, Redis, Docker, AWS, and more. 4+ years of hands-on experience.",
    canonical: `${baseUrl}/#skills`,
    openGraph: {
      ...defaultSEO.openGraph,
      title: "Skills & Technologies | Aleksandar Lazić | React, Node.js, AWS",
      description:
        "Comprehensive list of Aleksandar Lazić's technical skills including React, Node.js, TypeScript, PostgreSQL, MongoDB, Redis, Docker, AWS, and more.",
      url: `${baseUrl}/#skills`,
    },
  },
  contact: {
    ...defaultSEO,
    title: "Contact Aleksandar Lazić | Software Developer | Available for Work",
    description:
      "Get in touch with Aleksandar Lazić for software development opportunities. Available for React, Node.js, and full-stack development projects. Contact via email or social media.",
    canonical: `${baseUrl}/#contact`,
    openGraph: {
      ...defaultSEO.openGraph,
      title:
        "Contact Aleksandar Lazić | Software Developer | Available for Work",
      description:
        "Get in touch with Aleksandar Lazić for software development opportunities. Available for React, Node.js, and full-stack development projects.",
      url: `${baseUrl}/#contact`,
    },
  },
};

// Structured Data (JSON-LD) for better SEO
export const structuredData = {
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aleksandar Lazić",
    alternateName: "Aleksandar Lazic",
    jobTitle: "Software Developer",
    description:
      "Experienced Software Developer specializing in React, Node.js, and modern web technologies. 4+ years building scalable applications across multiple industries.",
    url: baseUrl,
    image: `${baseUrl}/images/profile.jpg`,
    sameAs: [
      "https://github.com/aleksandarlazic1998",
      "https://linkedin.com/in/aleksandar-lazic-1998",
      "https://twitter.com/aleksandarlazic1998",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "RS",
      addressRegion: "Serbia",
    },
    email: "aleksandar.lazic.d@gmail.com",
    telephone: "+381601662469",
    knowsAbout: [
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Nest.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "AWS",
      "Supabase",
      "Tailwind CSS",
      "Sass",
      "Redux",
      "GraphQL",
      "REST API",
      "Microservices",
      "Clean Architecture",
      "Performance Optimization",
      "Code Refactoring",
      "Team Leadership",
      "Mentoring",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Developer",
      description:
        "Full-stack software developer specializing in React and Node.js ecosystem",
      occupationLocation: {
        "@type": "Country",
        name: "Serbia",
      },
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Available for Work",
    },
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aleksandar Lazić Portfolio",
    description:
      "Portfolio website of Aleksandar Lazić, Software Developer specializing in React and Node.js",
    url: baseUrl,
    author: {
      "@type": "Person",
      name: "Aleksandar Lazić",
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aleksandar Lazić Portfolio",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    description:
      "Portfolio website showcasing software development projects and skills",
    founder: {
      "@type": "Person",
      name: "Aleksandar Lazić",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+381601662469",
      contactType: "Business",
      email: "aleksandar.lazic.d@gmail.com",
    },
  },
};

// Generate sitemap data
export const sitemapData = [
  {
    url: baseUrl,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 1,
  },
  {
    url: `${baseUrl}/#about`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    url: `${baseUrl}/#projects`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/#skills`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/#contact`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  },
];
