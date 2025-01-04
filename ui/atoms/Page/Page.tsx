import styles from "./styles.module.scss";

export const Page = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>{children}</div>
);
