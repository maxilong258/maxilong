import { getTranslations } from "next-intl/server";
import { Button } from "./ui/button";
import HeroExperience from "./models/hero_models/HeroExperience";

export default async function Hero() {
  const t = await getTranslations("HomePage");
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="relative z-1 xl:mt-10 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col justify-center md:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none">
              <h1>{t("title")}</h1>
              <h1>{t("about")}</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Adrian, a developer based in Croatia with a passion for
              code.
            </p>

            <Button className="md:w-80 md:h-16 w-60 h-12" id="counter">
              See My Work
            </Button>
          </div>
        </header>

        <figure>
          <div className="xl:w-[70%] w-full h-full min-h-[50vh] absolute xl:-top-20 top-24 xl:-right-20 right-0">
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
}
