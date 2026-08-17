import Container from "../../ui/Container/Container";
import styles from "./SignalSection.module.css";

type SignalSectionProps = {
  benefits: string[];
};

export default function SignalSection({ benefits }: SignalSectionProps) {
  return (
    <section className={styles.section} aria-label="Diferenciais">
      <Container className={styles.grid}>
        <p>
          Uma presença digital consistente traduz o valor do seu negócio antes
          mesmo do primeiro contato.
        </p>
        <div className={styles.list}>
          {benefits.map((benefit, index) => (
            <span key={benefit}>
              <b>0{index + 1}</b>
              {benefit}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

