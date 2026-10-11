import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const blogDirectory = path.join(process.cwd(), "content", "blog");

const scriptureSchema = z.object({
  reference: z.string().min(1),
  text: z.string().optional(),
  translation: z.string().optional()
});

const galleryImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().optional()
});

const blogFrontMatterSchema = z.object({
  slug: z.string().min(1).optional(),
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD date format"),
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  category: z.string().min(1),
  tags: z.array(z.string()).default([]),
  author: z.string().optional(),
  location: z.string().optional(),
  cover: z.string().min(1),
  coverAlt: z.string().min(1),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  scripture: scriptureSchema.optional(),
  gallery: z.array(galleryImageSchema).optional()
});

export type BlogPostMeta = z.infer<typeof blogFrontMatterSchema> & {
  slug: string;
  readingTime: string;
};

export type BlogPost = {
  meta: BlogPostMeta;
  content: string;
};

function deriveSlug(filename: string) {
  return filename.replace(/\.md$/, "");
}

function readingTime(markdown: string) {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

async function getMarkdownFiles() {
  try {
    const entries = await fs.readdir(blogDirectory, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => entry.name);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function readPost(filename: string): Promise<BlogPost> {
  const filePath = path.join(blogDirectory, filename);
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = matter(raw);
  const result = blogFrontMatterSchema.safeParse(parsed.data);

  if (!result.success) {
    const issues = result.error.issues
      .map((issue) => `${issue.path.join(".") || "frontMatter"}: ${issue.message}`)
      .join("; ");
    throw new Error(`Invalid blog front matter in content/blog/${filename}: ${issues}`);
  }

  return {
    meta: {
      ...result.data,
      slug: result.data.slug ?? deriveSlug(filename),
      readingTime: readingTime(parsed.content)
    },
    content: parsed.content
  };
}

export async function getAllPosts(options: { includeDrafts?: boolean } = {}) {
  const files = await getMarkdownFiles();
  const posts = await Promise.all(files.map(readPost));
  const seen = new Set<string>();

  for (const post of posts) {
    if (seen.has(post.meta.slug)) {
      throw new Error(`Duplicate blog slug found: ${post.meta.slug}`);
    }
    seen.add(post.meta.slug);
  }

  return posts
    .filter((post) => options.includeDrafts || !post.meta.draft)
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}

export async function getFeaturedPost() {
  const posts = await getAllPosts();
  return posts.find((post) => post.meta.featured) ?? posts[0] ?? null;
}

export async function getPostBySlug(slug: string) {
  const posts = await getAllPosts();
  return posts.find((post) => post.meta.slug === slug) ?? null;
}