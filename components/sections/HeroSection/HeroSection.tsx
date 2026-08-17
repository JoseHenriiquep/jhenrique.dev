import type { HeroContent } from "../../../content/site.types";
import Container from "../../ui/Container/Container";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  content: HeroContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.heroGrid}>
        <div className={styles.copy}>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className={styles.title} id="hero-title">
            {content.title}
          </h1>
          <p className={styles.description}>{content.description}</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.primary}`} href="#contato">
              {content.primaryCta}
              <span className={styles.buttonArrow}>↗</span>
            </a>
            <a className={`${styles.button} ${styles.ghost}`} href="#servicos">
              {content.secondaryCta}
              <span className={styles.buttonArrow}>↓</span>
            </a>
          </div>
        </div>

        <div
          className={styles.visual}
          aria-label="José Henrique, desenvolvedor Full Stack"
        >
          <div className={`${styles.visualOrbit} ${styles.orbitOne}`} />
          <div className={`${styles.visualOrbit} ${styles.orbitTwo}`} />
          <div className={styles.visualGrid} />
          <div className={styles.portraitFrame}>
            <img
              src="/images/foto-lateral.png"
              alt="José Henrique usando camisa preta"
              loading="eager"
              sizes="(max-width: 900px) 80vw, 42vw"
            />
          </div>
          <div className={styles.codeCard} role="group" aria-label="Exemplo de HTML">
            <span className={styles.codeLights}>
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
          <span className={`${styles.visualPlus} ${styles.plusOne}`}>+</span>
          <span className={`${styles.visualPlus} ${styles.plusTwo}`}>+</span>
        </div>
      </Container>

      <Container className={styles.scrollHint} role="img" aria-label="Mais conteúdo abaixo">
        <span aria-hidden="true" />
      </Container>
    </section>
  );
}

