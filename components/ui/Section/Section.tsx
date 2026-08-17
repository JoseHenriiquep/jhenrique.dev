import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactNode;
  id?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  className?: string;
};

export default function Section({
  children,
  id,
  ariaLabel,
  ariaLabelledBy,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`${styles.section} ${className}`.trim()}
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  );
}

