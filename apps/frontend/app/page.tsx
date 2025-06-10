// In apps/frontend/src/app/page.tsx
import Header from "@/components/Header";
import HeroSection from "../components/HeroSection";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Header />
      <HeroSection />
    </main>
  );
}
