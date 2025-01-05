import { Suspense } from "react";

import { TrendingCompaniesListSection } from "@ui/organisms";
import { Spacer, Page } from "@ui/atoms";
import Loading from "./loading";

export default function Home() {
  return (
    <Page>
      <main>
        <Spacer size={4} />
        <h2>Trending companies</h2>
        <Spacer />
        <Suspense fallback={<Loading />}>
          <TrendingCompaniesListSection />
        </Suspense>
      </main>
    </Page>
  );
}
