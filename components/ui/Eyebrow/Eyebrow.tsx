import type { ReactNode } from "react";
import styles from "./Eyebrow.module.css";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`${styles.eyebrow} ${className}`.trim()}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </p>
  );
}
