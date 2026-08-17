import { useState } from "react";
import Brand from "../../ui/Brand/Brand";
import Container from "../../ui/Container/Container";
import styles from "./SiteHeader.module.css";

const navigationItems = [
  ["Serviços", "#servicos"],
  ["Portfólio", "#portfolio"],
  ["Sobre", "#sobre"],
  ["Processo", "#processo"],
  ["FAQ", "#faq"],
] as const;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <Container className={styles.headerInner}>
        <Brand onClick={closeMenu} />

        <button
          className={styles.menuToggle}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`${styles.navigation} ${menuOpen ? styles.isOpen : ""}`.trim()}
          id="main-navigation"
          aria-label="Navegação principal"
        >
          {navigationItems.map(([label, href]) => (
            <a href={href} onClick={closeMenu} key={href}>
              {label}
            </a>
          ))}
          <a className={styles.navCta} href="#contato" onClick={closeMenu}>
            Contato
          </a>
        </nav>
      </Container>
    </header>
  );
}

