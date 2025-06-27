import Hero from "@/components/Hero";
import ShowcaseSection from "@/components/ShowcaseSection";

export default async function Home() {
  return (
    <>
      <main className="xl:ml-20 min-h-screen">
        <Hero />
        <ShowcaseSection />
      </main>
    </>
  );
}
