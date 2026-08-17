import type { AboutContent, Skill } from "../../../content/site.types";
import SkillsPanel from "../SkillsPanel/SkillsPanel";
import Container from "../../ui/Container/Container";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import Section from "../../ui/Section/Section";
import styles from "./AboutSection.module.css";

type AboutSectionProps = {
  content: AboutContent;
  skills: Skill[];
};

export default function AboutSection({ content, skills }: AboutSectionProps) {
  return (
    <Section
      className={styles.section}
      id="sobre"
      ariaLabelledBy="about-title"
    >
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 id="about-title">{content.title}</h2>
          <p>{content.description}</p>
          <p className={styles.note}>
            <span aria-hidden="true" />
            {content.note}
          </p>
        </div>
        <SkillsPanel skills={skills} />
      </Container>
    </Section>
  );
}

