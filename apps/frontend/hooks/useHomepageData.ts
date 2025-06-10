// In apps/frontend/src/hooks/useHomepageData.ts
import {useQuery} from "@tanstack/react-query";

// Define the URL for wordpress
const url = "http://localhost:8080/wp-json/wp/v2/pages/77";

// Define the shape of the data for type safety
type HomePageData = {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    hero_headline: string;
  };
};

// The actual data fetching function
const fetchHomepageData = async (): Promise<HomePageData> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

// Custom hook that uses useQuery
export function useHomepageData() {
  return useQuery<HomePageData, Error>({
    queryKey: ["homepage"], // The unique key for this query
    queryFn: fetchHomepageData, // The function that will fetch the data
  });
}
