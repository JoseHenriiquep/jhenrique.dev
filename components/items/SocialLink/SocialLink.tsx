import type { IconType } from "react-icons";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import type { Social } from "../../../content/site.types";
import styles from "./SocialLink.module.css";

const socialIcons: Record<string, IconType> = {
  Instagram: SiInstagram,
  LinkedIn: SiLinkedin,
  GitHub: SiGithub,
};

type SocialLinkProps = {
  social: Social;
};

export default function SocialLink({ social }: SocialLinkProps) {
  const SocialIcon = socialIcons[social.name];

  if (!SocialIcon) {
    return null;
  }

  return (
    <a
      className={styles.link}
      data-tone={social.tone}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialIcon aria-hidden="true" focusable="false" />
      <span>{social.name}</span>
      <small>{social.handle}</small>
    </a>
  );
}

