import { getTranslations } from "next-intl/server";
import { Button } from "./ui/button";
import HeroCanvas from "./HeroCanvas";
import { ArrowDown } from "lucide-react";

export default async function Hero() {
  const t = await getTranslations("HomePage");
  return (
    <section id="hero" className="relative mt-4 overflow-hidden px-5 py-8 md:mt-8 md:px-20 md:py-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-2 lg:gap-8">
        <header className="relative z-1 min-w-0">
          <div className="flex max-w-xl flex-col gap-5">
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-[44px] xl:text-[52px] 2xl:text-6xl">
              {t("title")}
            </h1>
            <p className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg">
              {t("about")}
            </p>
            <a href="#work">
              <Button
                className="h-11 px-6 text-base bg-orange-400 hover:bg-orange-500"
                id="counter"
              >
                See My Work
                <ArrowDown className="!w-4 !h-4 ml-1" />
              </Button>
            </a>
          </div>
        </header>

        <figure className="h-72 min-w-0 w-full sm:h-80 lg:h-[480px] lg:max-w-[520px] lg:justify-self-end xl:h-[520px] hover:cursor-grab">
          <HeroCanvas />
        </figure>
      </div>
    </section>
  );
}
