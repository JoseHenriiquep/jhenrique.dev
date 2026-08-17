import type { Skill } from "../../../content/site.types";
import SkillLogo from "../../items/SkillLogo/SkillLogo";
import Eyebrow from "../../ui/Eyebrow/Eyebrow";
import styles from "./SkillsPanel.module.css";

type SkillsPanelProps = {
  skills: Skill[];
};

export default function SkillsPanel({ skills }: SkillsPanelProps) {
  return (
    <aside className={styles.panel} aria-label="Minhas skills">
      <div className={styles.header}>
        <Eyebrow className={styles.panelEyebrow}>SKILLS</Eyebrow>
        <span className={styles.index}>{String(skills.length).padStart(2, "0")} / {String(skills.length).padStart(2, "0")}</span>
      </div>
      <ul className={styles.logoGrid} aria-label="Tecnologias utilizadas">
        {skills.map((skill) => (
          <SkillLogo skill={skill} key={skill.name} />
        ))}
      </ul>
      <p className={styles.footer}>
        <span aria-hidden="true" /> desenvolvimento web / full stack
      </p>
    </aside>
  );
}
