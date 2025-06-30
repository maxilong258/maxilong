import Hero from "@/components/Hero";
import ShowcaseSection from "@/components/ShowcaseSection";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"

export default async function Home() {
  return (
    <>
      <main className="xl:ml-20 min-h-screen">
        <Hero />
        <ShowcaseSection />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
