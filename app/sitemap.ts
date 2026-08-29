import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date("2026-08-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
