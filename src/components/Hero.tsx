import { getTranslations } from "next-intl/server";
import { Button } from "./ui/button";
import HeroCanvas from "./HeroCanvas";
import { ArrowDown } from "lucide-react";

export default async function Hero() {
  const t = await getTranslations("HomePage");
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="relative z-1 xl:mt-10 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center">
        <header className="flex flex-col justify-center md:max-w-2xl w-screen md:px-16 px-5 ml-6 absolute left-0">
          <div className="flex flex-col gap-7 max-w-2xl">
            <div className="flex flex-col justify-center md:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none">
              <h1 className="mb-4">{t("title")}</h1>
              <p className="md:text-xl relative z-10 pointer-events-none mb-8">
                {t("about")}
              </p>
            </div>
            <a href="#work">
              <Button
                className="md:w-80 md:h-16 w-60 h-12 text-2xl bg-orange-400 hover:hover:bg-orange-500"
                id="counter"
                style={{zIndex: 1}}
              >
                See My Work
                <ArrowDown className="!w-6 !h-6 ml-2" />
              </Button>
            </a>
          </div>
        </header>

        <figure>
          <div className="xl:w-[70%] w-full h-full min-h-[50vh] absolute xl:-top-10 top-24 xl:-right-20 right-0 hover:cursor-grab" style={{zIndex: -1}}>
            <HeroCanvas />
          </div>
        </figure>
      </div>
    </section>
  );
}
