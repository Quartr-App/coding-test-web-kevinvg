import { Suspense } from "react";

import { TrendingCompaniesListSection } from "@ui/organisms";
import { Spacer } from "@ui/atoms";
import Loading from "./loading";

export default function Home() {
  return (
    <main>
      <h1>Quartr</h1>
      <h2>Trending companies</h2>
      <Spacer />
      <Suspense fallback={<Loading />}>
        <TrendingCompaniesListSection />
      </Suspense>
    </main>
  );
}
