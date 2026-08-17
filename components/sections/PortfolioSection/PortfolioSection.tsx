import type { PortfolioItem } from "../../../content/site.types";
import PortfolioCard from "../../items/PortfolioCard/PortfolioCard";
import Container from "../../ui/Container/Container";
import Section from "../../ui/Section/Section";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import styles from "./PortfolioSection.module.css";

type PortfolioSectionProps = {
  portfolio: PortfolioItem[];
};

export default function PortfolioSection({ portfolio }: PortfolioSectionProps) {
  return (
    <Section
      className={styles.section}
      id="portfolio"
      ariaLabelledBy="portfolio-title"
    >
      <Container>
        <SectionHeading
          eyebrow="EM CONSTRUÇÃO"
          title={
            <>
              Projetos que
              <br />
              <span>vêm por aí.</span>
            </>
          }
          titleId="portfolio-title"
          intro="A vitrine está pronta para receber trabalhos reais, estudos e experiências digitais desenvolvidas ao longo do caminho."
        />
        <div className={styles.grid}>
          {portfolio.map((item) => (
            <PortfolioCard item={item} key={item.symbol} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

