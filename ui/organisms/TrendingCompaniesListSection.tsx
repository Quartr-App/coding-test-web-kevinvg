import { getCompanies } from "@core/api";
import { CompanyListItem } from "@ui/molecules";

export const TrendingCompaniesListSection = async () => {
  const companies = await getCompanies();

  if (!companies) {
    return <p>No companies found...</p>;
  }

  return (
    <div>
      {companies.map((company) => (
        <CompanyListItem key={company.companyId} company={company} />
      ))}
    </div>
  );
};
