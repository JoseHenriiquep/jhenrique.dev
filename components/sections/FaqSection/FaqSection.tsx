import { useState } from "react";
import type { FaqItem as FaqItemContent } from "../../../content/site.types";
import FaqItem from "../../items/FaqItem/FaqItem";
import Container from "../../ui/Container/Container";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import Section from "../../ui/Section/Section";
import styles from "./FaqSection.module.css";

type FaqSectionProps = {
  faq: FaqItemContent[];
};

export default function FaqSection({ faq }: FaqSectionProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <Section
      className={styles.section}
      id="faq"
      ariaLabelledBy="faq-title"
    >
      <Container className={styles.grid}>
        <div>
          <Eyebrow>AINDA TEM DÚVIDAS?</Eyebrow>
          <h2 id="faq-title">
            Perguntas
            <br />
            <span>frequentes.</span>
          </h2>
          <p className={styles.intro}>
            As respostas abaixo são um ponto de partida e podem ser ajustadas
            conforme cada projeto.
          </p>
        </div>
        <div className={styles.list}>
          {faq.map((item, index) => (
            <FaqItem
              item={item}
              index={index}
              isOpen={activeFaq === index}
              onToggle={() =>
                setActiveFaq((current) => (current === index ? null : index))
              }
              key={item.question}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

