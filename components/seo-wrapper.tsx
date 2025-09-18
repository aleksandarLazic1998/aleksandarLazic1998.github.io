"use client";

import { NextSeo } from "next-seo";
import { seoConfig } from "@/lib/seo";

interface SEOWrapperProps {
  page: keyof typeof seoConfig;
  children: React.ReactNode;
  customSEO?: Partial<typeof seoConfig.home>;
}

export function SEOWrapper({ page, children, customSEO }: SEOWrapperProps) {
  const seoProps = customSEO
    ? { ...seoConfig[page], ...customSEO }
    : seoConfig[page];

  return (
    <>
      <NextSeo {...seoProps} />
      {children}
    </>
  );
}

// Individual page SEO components for easy use
export function HomeSEO({ children }: { children: React.ReactNode }) {
  return <SEOWrapper page="home">{children}</SEOWrapper>;
}

export function AboutSEO({ children }: { children: React.ReactNode }) {
  return <SEOWrapper page="about">{children}</SEOWrapper>;
}

export function ProjectsSEO({ children }: { children: React.ReactNode }) {
  return <SEOWrapper page="projects">{children}</SEOWrapper>;
}

export function SkillsSEO({ children }: { children: React.ReactNode }) {
  return <SEOWrapper page="skills">{children}</SEOWrapper>;
}

export function ContactSEO({ children }: { children: React.ReactNode }) {
  return <SEOWrapper page="contact">{children}</SEOWrapper>;
}
