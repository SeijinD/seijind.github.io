import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const link = z.object({
  label: z.enum(["marketplace", "source", "article"]),
  href: z.url(),
});

const localizedText = z.object({ en: z.string(), el: z.string() });
const localizedList = z.object({ en: z.array(z.string()), el: z.array(z.string()) });

const projects = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      featured: z.boolean(),
      outcome: localizedText,
      contribution: localizedText,
      detail: localizedText,
      proof: localizedText.optional(),
      image: image().optional(),
      imageAlt: localizedText.optional(),
      demo: z.enum(["sandbox", "wasm"]).optional(),
      tech: z.array(z.string()),
      links: z.array(link),
    }),
});

const timelineEntry = z.object({
  id: z.string(),
  order: z.number(),
  period: localizedText,
  title: localizedText,
  place: localizedText,
  points: localizedList,
});

const experience = defineCollection({
  loader: file("src/data/experience.json"),
  schema: timelineEntry,
});

const education = defineCollection({
  loader: file("src/data/education.json"),
  schema: timelineEntry,
});

const certifications = defineCollection({
  loader: file("src/data/certifications.json"),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
  }),
});

const skills = defineCollection({
  loader: file("src/data/skills.json"),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    group: localizedText,
    items: z.array(z.string()),
  }),
});

const articles = defineCollection({
  loader: file("src/data/articles.json"),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    title: z.string(),
    summary: localizedText,
    href: z.url(),
  }),
});

const strengths = defineCollection({
  loader: file("src/data/strengths.json"),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    title: localizedText,
    proof: localizedText,
  }),
});

export const collections = { projects, experience, education, certifications, skills, articles, strengths };
