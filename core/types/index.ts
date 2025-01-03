export type GetCompaniesResponseType = {
  data: Company[] | null;
};

export type Company = {
  companyId: number;
  companyName: string;
  companyCountry: string;
  companyTicker: string;
  displayName: string;
  infoUrl: string;
  liveUrl: string;
  logoLightUrl: string;
  logoDarkUrl: string;
  iconUrl: string | null;
  description: string;
  reportingCurrency: string;
  colorSettings: {
    brandColor: string;
  };
  events: Event[];
  isins: string[];
};

type Event = {
  reportUrl: string;
  pdfUrl: string;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  qnaTimestamp: number;
  fiscalPeriod: string;
  fiscalYear: string;
};
