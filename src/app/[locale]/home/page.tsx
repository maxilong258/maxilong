import AnimatedCounter from "@/components/AnimatedCounter";
import ShowcaseSection from "@/components/ShowcaseSection";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations('HomePage');
  return (
    <>
      <main className="xl:ml-20 min-h-screen">
        <section id="hero" className="relative overflow-hidden">
          <div className="relative z-1 xl:mt-10 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center">
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col justify-center md:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none">
                  <h1>{t('title')}</h1>
                  <h1>{t('about')}</h1>
                  <h1>that Deliver Results</h1>
                </div>

                <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                  Hi, I'm Adrian, a developer based in Croatia with a passion
                  for code.
                </p>
              </div>
            </header>
          </div>
          {/* <AnimatedCounter /> */}
        </section>
        <ShowcaseSection />
      </main>
    </>
  );
}
