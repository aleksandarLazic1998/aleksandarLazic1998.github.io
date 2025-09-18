import { MetadataRoute } from "next";
import { sitemapData } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapData;
}
