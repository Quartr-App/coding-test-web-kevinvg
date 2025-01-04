import { Company } from "@core/types";

export const getCompanyLogo = (company: Company) => {
  if (company.iconUrl) {
    return company.iconUrl;
  }
  return company.logoDarkUrl ?? company.logoLightUrl;
};
