import { Company } from "@core/types";

type CompanyListItemProps = {
  company: Company;
};

export const CompanyListItem = ({ company }: CompanyListItemProps) => {
  return (
    <div>
      <h3>{company.companyName}</h3>
      <p>{company.description}</p>
    </div>
  );
};
