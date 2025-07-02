import { LanguageSwitcher } from "./lang/language-switcher";
import { ThemeToggle } from "./theme/theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { GithubIcon, TwitterIcon } from "lucide-react";

const Footer = () => {

  const socialLinks = [
    {
      icon: 'github',
      link: 'https://github.com/maxilong258'
    },
    {
      icon: 'twitter',
      link: 'https://x.com/maxilong1234'
    },
  ]

  const iconMap = {
    github: GithubIcon,
    twitter: TwitterIcon,
  } as const;

  return (
    <footer className="my-10 md:mt-20 mt-10 text-white-50 px-5 md:px-20 xl:px-20 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 w-full">
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-start">
            © {new Date().getFullYear()} maxilong
          </p>
        </div>
        <div className="flex items-center justify-center gap-5">
          {socialLinks.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Button
                key={item.link}
                variant="ghost"
                size="icon"
                asChild
                className="rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 p-6
                      hover:text-gray-900 dark:bg-[#1e1f21] dark:text-gray-400 dark:hover:text-gray-200"
              >
                <Link key={item.link} href={item.link} target="_blank">
                  <IconComponent className="!w-6 !h-6" />
                </Link>
              </Button>
            );
          })}
        </div>
        <div className="flex items-center gap-4 justify-center md:justify-end">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
