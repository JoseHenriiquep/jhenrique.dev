import type { FaqItem as FaqItemContent } from "../../../content/site.types";
import styles from "./FaqItem.module.css";

type FaqItemProps = {
  item: FaqItemContent;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItem({ item, index, isOpen, onToggle }: FaqItemProps) {
  const answerId = `faq-answer-${index}`;

  return (
    <div className={`${styles.item} ${isOpen ? styles.active : ""}`.trim()}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span>{item.question}</span>
        <b className={styles.toggle} aria-hidden="true">
          <span />
          <span />
        </b>
      </button>
      <div className={styles.answer} id={answerId} aria-hidden={!isOpen}>
        <div className={styles.answerInner}>
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

