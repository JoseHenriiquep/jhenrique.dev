import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import type { ContactContent } from "../../../content/site.types";
import SocialLink from "../../items/SocialLink/SocialLink";
import Container from "../../ui/Container/Container";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import Section from "../../ui/Section/Section";
import styles from "./ContactSection.module.css";

type ContactSectionProps = {
  content: ContactContent;
};

export default function ContactSection({ content }: ContactSectionProps) {
  const whatsappHref = `https://wa.me/${content.whatsapp}?text=${encodeURIComponent("Olá, José! Vi seu site e gostaria de conversar sobre um projeto.")}`;

  return (
    <Section
      className={styles.section}
      id="contato"
      ariaLabelledBy="contact-title"
    >
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 id="contact-title">{content.title}</h2>
          <p>{content.description}</p>
          <div className={styles.status}>
            <span aria-hidden="true" />
            {content.status}
          </div>
        </div>

        <div className={styles.links} aria-label="Canais de contato">
          <a
            className={styles.whatsapp}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.whatsappIcon} aria-hidden="true">
              <FaWhatsapp />
            </span>
            <span className={styles.whatsappCopy}>
              <small>CONVERSA DIRETA</small>
              <strong>Falar pelo WhatsApp</strong>
              <span>Responder pessoalmente por lá.</span>
            </span>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </a>

          <a className={styles.email} href={`mailto:${content.email}`}>
            <span className={styles.emailIcon} aria-hidden="true">
              <MdEmail />
            </span>
            <span className={styles.emailCopy}>
              <small>OU ENVIE UM E-MAIL</small>
              <strong>{content.email}</strong>
            </span>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </a>

          <div className={styles.socialLinks} aria-label="Redes sociais">
            {content.socials.map((social) => (
              <SocialLink social={social} key={social.name} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

