import type { ReactNode } from "react";
import Eyebrow from "../Eyebrow/Eyebrow";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  titleId: string;
  intro: ReactNode;
  layout?: "split" | "process";
};

export default function SectionHeading({
  eyebrow,
  title,
  titleId,
  intro,
  layout = "split",
}: SectionHeadingProps) {
  const layoutClass = layout === "process" ? styles.process : styles.split;

  return (
    <div className={`${styles.heading} ${layoutClass}`}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={titleId}>{title}</h2>
      </div>
      <p className={styles.intro}>{intro}</p>
    </div>
  );
}

