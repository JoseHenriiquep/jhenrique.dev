import type { Service } from "../../../content/site.types";
import ServiceCard from "../../items/ServiceCard/ServiceCard";
import Container from "../../ui/Container/Container";
import Section from "../../ui/Section/Section";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import styles from "./ServicesSection.module.css";

type ServicesSectionProps = {
  services: Service[];
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <Section
      className={styles.section}
      id="servicos"
      ariaLabelledBy="services-title"
    >
      <Container>
        <SectionHeading
          eyebrow="O QUE EU FAÇO"
          title={
            <>
              Construção digital
              <br />
              <span>com direção.</span>
            </>
          }
          titleId="services-title"
          intro="Da primeira ideia à experiência publicada, cada detalhe precisa ter uma função: explicar, conectar e gerar confiança."
        />
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard service={service} key={service.title} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

