import { Metadata } from "next";

const og = {
  title: "Aleksandar Lazić | Software Developer | React & Node.js Expert",
  description:
    "Experienced Software Developer specializing in React, Node.js, and modern web technologies. 4+ years building scalable applications across HR Tech, Security Tech, and Dev Tech industries. Available for work.",
  type: "website",
  image: "/images/og-image.jpg",
};

const metaSetting: Metadata = {
  metadataBase: new URL("https://aleksandarlazic1998.github.io/"),
  title: "Aleksandar Lazić | Software Developer | React & Node.js Expert",
  description:
    "Experienced Software Developer specializing in React, Node.js, and modern web technologies. 4+ years building scalable applications across HR Tech, Security Tech, and Dev Tech industries. Available for work.",
  generator: "Next.js",
  applicationName: "Aleksandar Lazić Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://aleksandarlazic1998.github.io",
  },
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
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Front-end",
    "Back-end",
    "HTML",
    "CSS",
    "SASS",
    "Bootstrap",
    "Tailwind",
    "MySQL",
  ],
  creator: "Aleksandar Lazić",
  publisher: "Aleksandar Lazić",
  authors: [
    { name: "Aleksandar Lazić", url: "https://aleksandarlazic1998.github.io" },
  ],
  openGraph: {
    title: og.title,
    description: og.description,
    url: "https://aleksandarlazic1998.github.io",
    siteName: "Aleksandar Lazić Portfolio",
    images: [
      {
        url: og.image,
        alt: og.title,
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
    type: og.type as
      | "website"
      | "article"
      | "book"
      | "profile"
      | "music.song"
      | "music.album"
      | "music.playlist"
      | "music.radio_station"
      | "video.movie"
      | "video.episode"
      | "video.tv_show"
      | "video.other",
    emails: "aleksandar.lazic.d@gmail.com",
    phoneNumbers: "+381601662469",
    locale: "en_US",
    countryName: "Serbia",
  },
  twitter: {
    card: "summary_large_image",
    title: og.title,
    description: og.description,
    creator: "@aleksandarlazic1998",
    site: "@aleksandarlazic1998",
    images: [og.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ZcYFCgNEgvIVgyT6wblhJBuT42OGCRZ2wyB1e0SQ9e8",
  },
  category: "technology",
  classification: "Portfolio Website",
};

export { metaSetting };
