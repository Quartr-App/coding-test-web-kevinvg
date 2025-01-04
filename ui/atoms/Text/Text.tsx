import { classNames } from "@core/utils";
import styles from "./styles.module.css";

type TextProps = {
  children: React.ReactNode;
  variant?: "caption" | "title";
  className?: HTMLDivElement["className"];
};

export const Text = ({ children, className, variant = "title" }: TextProps) => (
  <p className={classNames([className, styles[variant]])}>{children}</p>
);
