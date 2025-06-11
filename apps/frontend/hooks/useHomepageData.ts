// In apps/frontend/src/hooks/useHomepageData.ts
import {PageData} from "@/types/wordpress";
import {useQuery} from "@tanstack/react-query";

// Define the URL for wordpress
const url = "http://localhost:8080/wp-json/wp/v2/pages/77";

// The actual data fetching function
const fetchHomepageData = async (): Promise<PageData> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

// Custom hook that uses useQuery
export function useHomepageData() {
  return useQuery<PageData, Error>({
    queryKey: ["homepage"], // The unique key for this query
    queryFn: fetchHomepageData, // The function that will fetch the data
  });
}
