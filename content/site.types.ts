import siteContent from "./site.json";

export type SiteContent = typeof siteContent;
export type HeroContent = SiteContent["hero"];
export type Service = SiteContent["services"][number];
export type PortfolioItem = SiteContent["portfolio"][number];
export type AboutContent = SiteContent["about"];
export type Skill = SiteContent["skills"][number];
export type ProcessStep = SiteContent["process"][number];
export type FaqItem = SiteContent["faq"][number];
export type ContactContent = SiteContent["contact"];
export type Social = ContactContent["socials"][number];

