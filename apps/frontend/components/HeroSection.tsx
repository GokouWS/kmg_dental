"use client";

import {useHomepageData} from "../hooks/useHomepageData";

export default function HeroSection() {
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

  // Render the data once it's successfully fetched
  return (
    <section>
      <h1>{data?.acf.hero_headline}</h1>
    </section>
  );
}
