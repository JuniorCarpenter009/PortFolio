import type { MetadataRoute } from "next";
import { professionalProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://juniorcarpenter.dev";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: .7 },
    { url: `${baseUrl}/projects/jc-finance`, lastModified: new Date(), changeFrequency: "monthly", priority: .8 },
    ...professionalProjects.map(({ slug }) => ({ url: `${baseUrl}/work/${slug}`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: .6 })),
  ];
}
