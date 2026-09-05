import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ananda-muhuri.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://ananda-muhuri.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://ananda-muhuri.vercel.app/work",
      lastModified: new Date(),
    },
    {
      url: "https://ananda-muhuri.vercel.app/create",
      lastModified: new Date(),
    },
    {
      url: "https://ananda-muhuri.vercel.app/think",
      lastModified: new Date(),
    },
  ];
}
