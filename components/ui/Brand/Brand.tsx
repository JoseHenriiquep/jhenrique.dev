import type { MouseEventHandler } from "react";
import styles from "./Brand.module.css";

type BrandProps = {
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  ariaLabel?: string;
};

export default function Brand({
  href = "#inicio",
  onClick,
  ariaLabel = "jhenrique.dev — início",
}: BrandProps) {
  return (
    <a className={styles.brand} href={href} onClick={onClick} aria-label={ariaLabel}>
      <span className={styles.mark} aria-hidden="true">
        <img src="/images/logo-JH.png" alt="" width={170} height={100} />
      </span>
      <span className={styles.name}>
        jhenrique<span>.dev</span>
      </span>
    </a>
  );
}

