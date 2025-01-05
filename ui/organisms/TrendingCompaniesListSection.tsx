import { getCompanies } from "@core/api";
import { Text } from "@ui/atoms";
import { CompanyListItem } from "@ui/molecules";

export const TrendingCompaniesListSection = async () => {
  const companies = await getCompanies();

  if (!companies) {
    return <Text>No companies found...</Text>;
  }

  return (
    <div>
      {companies.map((company) => (
        <CompanyListItem key={company.companyId} company={company} />
      ))}
    </div>
  );
};
