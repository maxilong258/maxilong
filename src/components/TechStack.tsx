"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Icon } from "@iconify/react";

import TitleHeader from "../components/TitleHeader";

type TechStackItem =
  | { name: string; imgPath: string }
  | {
      name: string;
      icons: { icon: string; label: string }[];
    };

const techStackImgs: TechStackItem[] = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Vue Developer",
    imgPath: "/images/logos/Vue.png",
  },
  {
    name: "Flutter Developer",
    imgPath: "/images/logos/Flutter.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/Nestjs.png",
  },
  {
    name: "Next Developer",
    imgPath: "/images/logos/nextjs.png",
  },
  {
    name: "Uniapp Developer",
    imgPath: "/images/logos/uni-app.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/threejs.png",
  },
  {
    name: "UI/UX Designer",
    imgPath: "/images/logos/Ui-Ux.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.png",
  },
  {
    name: "DevOps & Infrastructure",
    icons: [
      { icon: "simple-icons:docker", label: "Docker" },
      { icon: "simple-icons:linux", label: "Linux" },
      { icon: "simple-icons:redis", label: "Redis" },
      { icon: "simple-icons:mysql", label: "MySQL" },
      { icon: "simple-icons:nginx", label: "Nginx" },
    ],
  },
];


const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <div id="skills" className="flex justify-center items-center px-5 md:px-10 md:mt-40 mt-20">

      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 xl:gap-16 md:gap-10 gap-5 mt-16">
          {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="relative border border-gray-200 dark:border-gray-700 bg-gray-200 dark:bg-[#1e1f21] tech-card overflow-hidden group rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute left-0 bottom-[-100%] w-full h-full bg-gray-300 dark:bg-gray-900 group-hover:bottom-0 transition-all duration-700" />
              <div className="flex flex-col md:justify-center items-center xl:gap-5 xl:h-[50vh] overflow-hidden relative z-10 p-6">
                {"imgPath" in techStackIcon ? (
                  <div className="flex justify-center items-center w-52 h-60 relative">
                    <Image
                      fill
                      src={techStackIcon.imgPath}
                      alt={techStackIcon.name}
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex flex-wrap justify-center items-center gap-5 w-52 h-60 content-center">
                    {techStackIcon.icons.map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col items-center gap-2 w-16"
                        title={item.label}
                      >
                        <Icon icon={item.icon} className="w-10 h-10" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="w-full">
                  <p className="text-lg 2xl:text-2xl pb-5 xl:pb-0 font-semibold text-gray-900 dark:text-gray-100 text-center">
                    {techStackIcon.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
