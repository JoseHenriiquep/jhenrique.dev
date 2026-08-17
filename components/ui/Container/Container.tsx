import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div {...props} className={`${styles.container} ${className}`.trim()}>
      {children}
    </div>
  );
}
