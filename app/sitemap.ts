import { getBlogPosts } from "app/workbench/utils";

export const baseUrl = "https://beneisner.io";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/workbench/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/workbench"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
