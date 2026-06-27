import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const navLinks = [
  { name: "Home", link: "#hero", icon: "ph:house-duotone" },
  { name: "Work", link: "#work", icon: "ph:briefcase-duotone" },
  { name: "Skills", link: "#skills", icon: "ph:code-duotone" },
  {
    name: "Contact",
    link: "#contact",
    icon: "ph:chat-circle-text-duotone",
  },
];

const SideBar = () => {
  return (
    <div className="hidden md:block">
      <aside className="fixed left-0 top-0 h-full w-20 xl:w-40 flex flex-col items-start pl-4 xl:pl-8 justify-center space-y-6 z-10">
        {navLinks.map((link, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <a
                href={link.link}
                className="flex items-center justify-center rounded-xl hover:bg-orange-400 transition-all duration-200 hover:scale-110 w-12 h-12 md:w-14 md:h-14 xl:w-14 xl:h-14"
              >
                <Icon icon={link.icon} className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </aside>
    </div>
  );
};

export default SideBar;
