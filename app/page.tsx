"use client";

import Image from "next/image";
import { useState } from "react";
import {
  SiAngular,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import siteContent from "@/content/site.json";

const skillIcons = {
  HTML5: SiHtml5,
  CSS3: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  "Node.js": SiNodedotjs,
} as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell" id="inicio">
      <header className="site-header">
        <div className="shell header-inner">
          <a
            className="brand"
            href="#inicio"
            onClick={closeMenu}
            aria-label="jhenrique.dev — início"
          >
            <span className="brand-mark" aria-hidden="true">
              <Image
                src="/images/logo-JH.png"
                alt=""
                width={170}
                height={100}
                priority
              />
            </span>
            <span className="brand-name">
              jhenrique<span>.dev</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <nav
            className={`main-nav${menuOpen ? " is-open" : ""}`}
            id="main-navigation"
            aria-label="Navegação principal"
          >
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>
            <a href="#portfolio" onClick={closeMenu}>
              Portfólio
            </a>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
            <a href="#processo" onClick={closeMenu}>
              Processo
            </a>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
            <a className="nav-cta" href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </nav>
        </div>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {siteContent.hero.eyebrow}
            </p>
            <h1 id="hero-title">{siteContent.hero.title}</h1>
            <p className="hero-description">{siteContent.hero.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contato">
                {siteContent.hero.primaryCta}
                <span>↗</span>
              </a>
              <a className="button button-ghost" href="#servicos">
                {siteContent.hero.secondaryCta}
                <span>↓</span>
              </a>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="José Henrique, desenvolvedor Full Stack"
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-grid" />
            <div className="portrait-frame">
              <Image
                src="/images/foto-lateral.png"
                alt="José Henrique usando camisa preta"
                fill
                priority
                sizes="(max-width: 900px) 80vw, 42vw"
              />
            </div>
            <div className="code-card" role="group" aria-label="Exemplo de HTML">
              <span className="code-lights">
                <i />
                <i />
                <i />
              </span>
              <code>
                <em>&lt;div</em> <b>class</b>=
                <strong>&quot;hero-impacto&quot;</strong>
                <em>&gt;</em>
                <br />
                <span>presença digital</span>
                <br />
                <em>&lt;/div&gt;</em>
              </code>
            </div>
            <span className="visual-plus plus-one">+</span>
            <span className="visual-plus plus-two">+</span>
          </div>
        </div>
        <div className="shell scroll-hint" role="img" aria-label="Mais conteúdo abaixo">
          <span aria-hidden="true" />
        </div>
      </section>

      <section
        className="section services-section"
        id="servicos"
        aria-labelledby="services-title"
      >
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />O QUE EU FAÇO
              </p>
              <h2 id="services-title">
                Construção digital
                <br />
                <span>com direção.</span>
              </h2>
            </div>
            <p className="section-intro">
              Da primeira ideia à experiência publicada, cada detalhe precisa
              ter uma função: explicar, conectar e gerar confiança.
            </p>
          </div>
          <div className="services-grid">
            {siteContent.services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="card-topline">
                  <span>{service.eyebrow}</span>
                  <span className="card-symbol">{service.symbol}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="card-tag">
                  <span />
                  {service.tag}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="signal-section" aria-label="Diferenciais">
        <div className="shell signal-grid">
          <p>
            Uma presença digital consistente traduz o valor do seu negócio antes
            mesmo do primeiro contato.
          </p>
          <div className="signal-list">
            {siteContent.benefits.map((benefit, index) => (
              <span key={benefit}>
                <b>0{index + 1}</b>
                {benefit}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section portfolio-section"
        id="portfolio"
        aria-labelledby="portfolio-title"
      >
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                EM CONSTRUÇÃO
              </p>
              <h2 id="portfolio-title">
                Projetos que
                <br />
                <span>vêm por aí.</span>
              </h2>
            </div>
            <p className="section-intro">
              A vitrine está pronta para receber trabalhos reais, estudos e
              experiências digitais desenvolvidas ao longo do caminho.
            </p>
          </div>
          <div className="portfolio-grid">
            {siteContent.portfolio.map((item) => (
              <article className="portfolio-card" key={item.symbol}>
                <div className="portfolio-art">
                  <span>{item.symbol}</span>
                  <i />
                  <i />
                  <i />
                </div>
                <div className="portfolio-info">
                  <p className="card-eyebrow">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section about-section"
        id="sobre"
        aria-labelledby="about-title"
      >
        <div className="shell about-grid">

          <div className="about-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {siteContent.about.eyebrow}
            </p>
            <h2 id="about-title">{siteContent.about.title}</h2>
            <p>{siteContent.about.description}</p>
            <p className="about-note">
              <span />
              {siteContent.about.note}
            </p>
          </div>
          <aside className="stack-panel" aria-labelledby="skills-title">
            <div className="stack-panel-header">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-dot" /> SKILLS
                </p>
              </div>
              <span className="stack-index">08 / 08</span>
            </div>
            <ul className="stack-logo-grid" aria-label="Tecnologias utilizadas">
              {siteContent.skills.map((skill) => (
                <li
                  className="stack-logo"
                  data-skill={skill.name}
                  data-tone={skill.tone}
                  key={skill.name}
                  aria-label={skill.name}
                >
                  {(() => {
                    const SkillIcon = skillIcons[skill.name as keyof typeof skillIcons];
                    return <SkillIcon aria-hidden="true" focusable="false" />;
                  })()}
                </li>
              ))}
            </ul>
            <p className="stack-footer">
              <span /> desenvolvimento web / full stack
            </p>
          </aside>
        </div>
      </section>

      <section
        className="section process-section"
        id="processo"
        aria-labelledby="process-title"
      >
        <div className="shell">
          <div className="section-heading process-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                COMO FUNCIONA
              </p>
              <h2 id="process-title">
                Do briefing ao
                <br />
                <span>próximo passo.</span>
              </h2>
            </div>
            <p className="section-intro">
              Um processo direto para manter as decisões claras e o projeto em
              movimento.
            </p>
          </div>
          <div className="process-grid">
            {siteContent.process.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section faq-section"
        id="faq"
        aria-labelledby="faq-title"
      >
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              AINDA TEM DÚVIDAS?
            </p>
            <h2 id="faq-title">
              Perguntas
              <br />
              <span>frequentes.</span>
            </h2>
            <p className="section-intro">
              As respostas abaixo são um ponto de partida e podem ser ajustadas
              conforme cada projeto.
            </p>
          </div>
          <div className="faq-list">
            {siteContent.faq.map((item, index) => (
              <div
                className={`faq-item${activeFaq === index ? " is-active" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{item.question}</span>
                  <b className="faq-toggle" aria-hidden="true">
                    <span />
                    <span />
                  </b>
                </button>
                <div
                  className="faq-answer"
                  id={`faq-answer-${index}`}
                  aria-hidden={activeFaq !== index}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="contact-section"
        id="contato"
        aria-labelledby="contact-title"
      >
        <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {siteContent.contact.eyebrow}
            </p>
            <h2 id="contact-title">{siteContent.contact.title}</h2>
            <p>{siteContent.contact.description}</p>
            <div className="contact-status">
              <span className="status-dot" />
              Canais de contato em configuração
            </div>
          </div>
          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="form-header">
              <span>FORMULÁRIO DE CONTATO</span>
              <span className="form-lock">EM BREVE</span>
            </div>
            <label>
              Nome
              <input type="text" name="name" placeholder="Seu nome" disabled />
            </label>
            <label>
              E-mail
              <input
                type="email"
                name="email"
                placeholder="seu@email.com"
                disabled
              />
            </label>
            <label>
              Mensagem
              <textarea
                name="message"
                rows={4}
                placeholder="Conte um pouco sobre sua ideia"
                disabled
              />
            </label>
            <button className="button button-primary" type="submit" disabled>
              Enviar mensagem <span>↗</span>
            </button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/images/logo-JH.png" alt="" width={170} height={100} />
            </span>
            <span className="brand-name">
              jhenrique<span>.dev</span>
            </span>
          </a>
          <p>Desenvolvendo experiências digitais que geram resultados.</p>
          <span className="footer-code">&lt; build / with / purpose &gt;</span>
        </div>
      </footer>
    </main>
  );
}
