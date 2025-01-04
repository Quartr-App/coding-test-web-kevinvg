import { Company } from "@core/types";
import { getCompanyLogo } from "@core/utils";
import Image from "next/image";
import styles from "./styles.module.css";

type CompanyListItemProps = {
  company: Company;
};

export const CompanyListItem = ({ company }: CompanyListItemProps) => {
  const logo = getCompanyLogo(company);

  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        {logo && (
          <Image
            src={logo}
            alt={company.companyName}
            height={40}
            width={40}
            className={styles.logo}
          />
        )}
      </div>
      <div className={styles.containerText}>
        <p className={styles.title}>{company.companyName}</p>
        <p className={styles.subtitle}>{company.description}</p>
      </div>
      <span>{">"}</span>
    </div>
  );
};
