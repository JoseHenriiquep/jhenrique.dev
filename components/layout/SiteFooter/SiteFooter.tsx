import Brand from "../../ui/Brand/Brand";
import Container from "../../ui/Container/Container";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerInner}>
        <Brand />
        <p>Desenvolvendo experiências digitais que geram resultados.</p>
        <span className={styles.footerCode}>&lt; build / with / purpose &gt;</span>
      </Container>
    </footer>
  );
}

