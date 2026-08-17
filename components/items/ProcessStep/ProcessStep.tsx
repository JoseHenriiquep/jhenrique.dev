import type { ProcessStep as ProcessStepContent } from "../../../content/site.types";
import styles from "./ProcessStep.module.css";

type ProcessStepProps = {
  step: ProcessStepContent;
};

export default function ProcessStep({ step }: ProcessStepProps) {
  return (
    <article className={styles.step}>
      <span className={styles.number}>{step.number}</span>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </article>
  );
}

