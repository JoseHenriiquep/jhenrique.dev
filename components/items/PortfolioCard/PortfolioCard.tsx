import type { PortfolioItem } from "../../../content/site.types";
import styles from "./PortfolioCard.module.css";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.art}>
        <span>{item.symbol}</span>
        <i />
        <i />
        <i />
      </div>
      <div className={styles.info}>
        <p className={styles.eyebrow}>{item.category}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

