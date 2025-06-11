"use client";

// In apps/frontend/src/app/page.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionForm from "@/components/SectionForm";
import SectionHero from "@/components/SectionHero";
import SectionOne from "@/components/SectionOne";
import {useHomepageData} from "@/hooks/useHomepageData";

export default function HomePage() {
  // Use our custom hook to get the data, loading, and error states
  const {data, isLoading, isError, error} = useHomepageData();

  // Handle the loading state
  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  // Handle the error state
  if (isError) {
    return (
      <section>
        <h1>Error: {error.message}</h1>
      </section>
    );
  }

  // Handle no data
  if (!data) {
    return (
      <section>
        <h1>No data</h1>
      </section>
    );
  }

  return (
    <main className="flex flex-col">
      <Header data={data.acf} />
      <SectionHero />
      <SectionOne />
      <SectionForm />
      <Footer />
    </main>
  );
}
