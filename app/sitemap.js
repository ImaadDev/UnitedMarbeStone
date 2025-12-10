import { getServices } from "@/services/getServices";
import { getBlogs } from "@/services/getBlogs";

export default async function sitemap() {
  const siteUrl = "https://www.unitedmarblestones.com";

  const [services, blogs] = await Promise.all([
    getServices(),
    getBlogs(),
  ]);

  const locales = ["en", "ar"];

  const staticPages = [
    "/about",
    "/services",
    "/blogs",
    "/work",
    "/contact",
    "/privacy",
    "/terms",
  ];

  // Static Page URLs
  const staticUrls = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${page}/`,
      lastModified: new Date().toISOString(),
    }))
  );

  // Dynamic Service URLs
  const serviceUrls = services.flatMap((service) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}/services/${service.slug}/`,
      lastModified: new Date(
        service._updatedAt || service._createdAt || new Date()
      ).toISOString(),
    }))
  );

  // Dynamic Blog URLs
  const blogUrls = blogs.flatMap((blog) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}/blogs/${blog.slug}/`,
      lastModified: new Date(
        blog._updatedAt || blog._createdAt || blog.publishedAt || new Date()
      ).toISOString(),
    }))
  );

  // Homepages - AR is main language
  const homeUrls = [
    { url: `${siteUrl}/ar/`, lastModified: new Date().toISOString() },
    { url: `${siteUrl}/en/`, lastModified: new Date().toISOString() },
  ];

  return [
    ...homeUrls,
    ...staticUrls,
    ...serviceUrls,
    ...blogUrls,
  ];
}
