import type { MetadataRoute } from "next";

import { siteMeta } from "@/data/site";
import { getAllPosts } from "@/lib/content/blog";

const staticRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/our-work", changeFrequency: "monthly", priority: 0.9 },
  { path: "/our-work/health", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/our-work/education-youth",
    changeFrequency: "monthly",
    priority: 0.8
  },
  {
    path: "/our-work/community-welfare",
    changeFrequency: "monthly",
    priority: 0.8
  },
  { path: "/impact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
  { path: "/gallery", changeFrequency: "weekly", priority: 0.8 },
  { path: "/get-involved", changeFrequency: "monthly", priority: 0.7 },
  { path: "/donate", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 }
] as const satisfies ReadonlyArray<{
  path: string;
  changeFrequency: NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
  >;
  priority: number;
}>;

function absoluteUrl(pathname: string) {
  return new URL(pathname, siteMeta.url).toString();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));

  const stories: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.meta.slug}`),
    lastModified: post.meta.updated ?? post.meta.date,
    changeFrequency: "monthly",
    priority: post.meta.featured ? 0.8 : 0.7,
    images: [absoluteUrl(post.meta.cover)]
  }));

  return [...pages, ...stories];
}
