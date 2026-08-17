import type { Service } from "../../../content/site.types";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.topline}>
        <span>{service.eyebrow}</span>
        <span className={styles.symbol}>{service.symbol}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className={styles.tag}>
        <span aria-hidden="true" />
        {service.tag}
      </div>
    </article>
  );
}

