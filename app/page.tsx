import { Suspense } from "react";

import { TrendingCompaniesSection } from "@ui/organisms";
import Loading from "./loading";

export default function Home() {
  return (
    <main>
      <h1>Quartr</h1>
      <h2>Trending companies</h2>
      <Suspense fallback={<Loading />}>
        <TrendingCompaniesSection />
      </Suspense>
    </main>
  );
}
