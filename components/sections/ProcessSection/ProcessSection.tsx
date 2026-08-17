import type { ProcessStep as ProcessStepContent } from "../../../content/site.types";
import ProcessStep from "../../items/ProcessStep/ProcessStep";
import Container from "../../ui/Container/Container";
import Section from "../../ui/Section/Section";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import styles from "./ProcessSection.module.css";

type ProcessSectionProps = {
  process: ProcessStepContent[];
};

export default function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <Section
      className={styles.section}
      id="processo"
      ariaLabelledBy="process-title"
    >
      <Container>
        <SectionHeading
          eyebrow="COMO FUNCIONA"
          title={
            <>
              Do briefing ao
              <br />
              <span>próximo passo.</span>
            </>
          }
          titleId="process-title"
          intro="Um processo direto para manter as decisões claras e o projeto em movimento."
          layout="process"
        />
        <div className={styles.grid}>
          {process.map((step) => (
            <ProcessStep step={step} key={step.number} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

