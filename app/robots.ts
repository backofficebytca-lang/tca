import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/mentions-legales", "/confidentialite", "/cgv"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
