import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("emits the static jhenrique.dev Vite entrypoint", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");

  assert.match(html, /<html lang="pt-BR">/i);
  assert.match(html, /<title>jhenrique\.dev — Desenvolvimento web<\/title>/i);
  assert.match(html, /<div id="root"><\/div>/i);
  assert.match(html, /<script type="module" crossorigin src="\/assets\/.+\.js"><\/script>/i);
  assert.match(html, /favicon-jh\.png/i);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/i);
});

test("keeps the editable content and brand assets available", async () => {
  const [content, contact, index, vite] = await Promise.all([
    readFile(new URL("../content/site.json", import.meta.url), "utf8"),
    readFile(new URL("../components/sections/ContactSection/ContactSection.tsx", import.meta.url), "utf8"),
    readFile(new URL("../index.html", import.meta.url), "utf8"),
    readFile(new URL("../vite.config.ts", import.meta.url), "utf8"),
  ]);

  assert.match(content, /Landing pages/);
  assert.match(content, /Sites institucionais/);
  assert.match(content, /E-commerce/);
  assert.match(content, /Produtos SaaS/);
  assert.match(contact, /content\.email/);
  assert.match(contact, /content\.whatsapp/);
  assert.match(index, /og\.png/);
  assert.match(vite, /@vitejs\/plugin-react/);
  await access(new URL("../dist/images/logo-JH.png", import.meta.url));
  await access(new URL("../dist/images/foto-lateral.png", import.meta.url));
  await access(new URL("../dist/og.png", import.meta.url));
});

test("keeps component files and styles co-located", async () => {
  const componentFiles = [
    "components/layout/SiteHeader/SiteHeader.tsx",
    "components/layout/SiteHeader/SiteHeader.module.css",
    "components/layout/SiteFooter/SiteFooter.tsx",
    "components/layout/SiteFooter/SiteFooter.module.css",
    "components/sections/HeroSection/HeroSection.tsx",
    "components/sections/HeroSection/HeroSection.module.css",
    "components/sections/ServicesSection/ServicesSection.tsx",
    "components/sections/ServicesSection/ServicesSection.module.css",
    "components/sections/SignalSection/SignalSection.tsx",
    "components/sections/SignalSection/SignalSection.module.css",
    "components/sections/PortfolioSection/PortfolioSection.tsx",
    "components/sections/PortfolioSection/PortfolioSection.module.css",
    "components/sections/AboutSection/AboutSection.tsx",
    "components/sections/AboutSection/AboutSection.module.css",
    "components/sections/SkillsPanel/SkillsPanel.tsx",
    "components/sections/SkillsPanel/SkillsPanel.module.css",
    "components/sections/ProcessSection/ProcessSection.tsx",
    "components/sections/ProcessSection/ProcessSection.module.css",
    "components/sections/FaqSection/FaqSection.tsx",
    "components/sections/FaqSection/FaqSection.module.css",
    "components/sections/ContactSection/ContactSection.tsx",
    "components/sections/ContactSection/ContactSection.module.css",
    "components/items/ServiceCard/ServiceCard.tsx",
    "components/items/ServiceCard/ServiceCard.module.css",
    "components/items/PortfolioCard/PortfolioCard.tsx",
    "components/items/PortfolioCard/PortfolioCard.module.css",
    "components/items/ProcessStep/ProcessStep.tsx",
    "components/items/ProcessStep/ProcessStep.module.css",
    "components/items/FaqItem/FaqItem.tsx",
    "components/items/FaqItem/FaqItem.module.css",
    "components/items/SkillLogo/SkillLogo.tsx",
    "components/items/SkillLogo/SkillLogo.module.css",
    "components/items/SocialLink/SocialLink.tsx",
    "components/items/SocialLink/SocialLink.module.css",
  ];

  await Promise.all(
    componentFiles.map((file) => access(new URL(`../${file}`, import.meta.url))),
  );
});
