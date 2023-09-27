import { MainNavConfig } from "@/types";
import { SiteConfig } from "@/types";

export const mainConfig: MainNavConfig = {
  mainNav: [
    {
      title: "Options",
      href: "/options",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
}

export const siteConfig: SiteConfig = {
  name: "Options",
  description:
    "An open source application built using the new router, server components and everything new in Next.js 13.",
  url: "http://localhost:3000/",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/Flocqst/options",
  },
}
