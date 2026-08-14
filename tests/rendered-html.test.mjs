import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the jhenrique.dev landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="pt-BR">/i);
  assert.match(html, /<title>jhenrique\.dev — Desenvolvimento web<\/title>/i);
  assert.match(html, /Landing pages e sites institucionais/i);
  assert.match(html, /id="servicos"/i);
  assert.match(html, /id="portfolio"/i);
  assert.match(html, /id="sobre"/i);
  assert.match(html, /id="processo"/i);
  assert.match(html, /id="faq"/i);
  assert.match(html, /id="contato"/i);
  assert.match(html, /José Henrique/i);
  assert.match(html, /aria-label="Navegação principal"/i);
  assert.match(html, /name="email"/i);
  assert.match(html, /disabled/gi);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/i);
});

test("keeps the editable content and brand assets available", async () => {
  const [content, page, layout] = await Promise.all([
    readFile(new URL("../content/site.json", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(content, /Landing pages/);
  assert.match(content, /Sites institucionais/);
  assert.match(content, /E-commerce/);
  assert.match(content, /Produtos SaaS/);
  assert.match(page, /content\/site\.json/);
  assert.match(page, /profile\.webp/);
  assert.match(page, /logo-mark\.webp/);
  assert.match(layout, /og\.png/);
  await access(new URL("../public/images/logo-mark.webp", import.meta.url));
  await access(new URL("../public/images/profile.webp", import.meta.url));
  await access(new URL("../public/og.png", import.meta.url));
});
