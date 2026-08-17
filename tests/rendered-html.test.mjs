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
  const [content, page, index, vite] = await Promise.all([
    readFile(new URL("../content/site.json", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../index.html", import.meta.url), "utf8"),
    readFile(new URL("../vite.config.ts", import.meta.url), "utf8"),
  ]);

  assert.match(content, /Landing pages/);
  assert.match(content, /Sites institucionais/);
  assert.match(content, /E-commerce/);
  assert.match(content, /Produtos SaaS/);
  assert.match(page, /siteContent\.contact\.email/);
  assert.match(page, /siteContent\.contact\.whatsapp/);
  assert.match(index, /og\.png/);
  assert.match(vite, /@vitejs\/plugin-react/);
  await access(new URL("../dist/images/logo-JH.png", import.meta.url));
  await access(new URL("../dist/images/foto-lateral.png", import.meta.url));
  await access(new URL("../dist/og.png", import.meta.url));
});
