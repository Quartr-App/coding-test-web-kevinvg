import { logger } from "@core/logger";
import { GetCompaniesResponseType } from "@core/types";

export const getCompanies = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/companies`);

    if (!res.ok) {
      throw new Error("Failed to fetch companies");
    }

    const data = (await res.json()) as GetCompaniesResponseType;
    // Simulate a real API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data.data;
  } catch (error) {
    logger.error("Failed to fetch companies", error);
    return null;
  }
};
