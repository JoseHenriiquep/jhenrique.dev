import type { IconType } from "react-icons";
import {
  SiAngular,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import type { Skill } from "../../../content/site.types";
import styles from "./SkillLogo.module.css";

const skillIcons: Record<string, IconType> = {
  HTML5: SiHtml5,
  CSS3: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  "Node.js": SiNodedotjs,
};

type SkillLogoProps = {
  skill: Skill;
};

export default function SkillLogo({ skill }: SkillLogoProps) {
  const SkillIcon = skillIcons[skill.name];

  if (!SkillIcon) {
    return null;
  }

  return (
    <li
      className={styles.logo}
      data-skill={skill.name}
      data-tone={skill.tone}
      aria-label={skill.name}
    >
      <SkillIcon aria-hidden="true" focusable="false" />
    </li>
  );
}

