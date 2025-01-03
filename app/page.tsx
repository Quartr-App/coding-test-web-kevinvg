export default async function Home() {
  const res = await fetch(`${process.env.BASE_API_URL}/api/companies`);
  const companies = await res.json();

  return (
    <main>
      <h2>Quartr</h2>
      <p>Trending companies</p>
      <p>{JSON.stringify(companies)}</p>
    </main>
  );
}
