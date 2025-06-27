"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div
      id="work"
      ref={sectionRef}
      className="w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center"
    >
      <div className="w-full">
        <div className="flex xl:flex-row flex-col gap-10 justify-between">
          <div
            ref={rydeRef}
            className="h-full flex flex-col justify-between xl:w-[60%]"
          >
            <div className="xl:h-[70vh] md:h-[50vh] h-96 relative">
              <img
                className="w-full h-full object-cover rounded-xl absolute inset-0"
                src="/images/project1.png"
                alt="Ryde App Interface"
              />
            </div>
            <div className="space-y-5 mt-5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col xl:flex-col gap-10 xl:w-[40%] overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-5 2xl:px-12 py-0 bg-[#FFEFDB]">
                <img
                  className="w-full h-full object-contain rounded-xl"
                  src="/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                The Library Management Platform
              </h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-5 2xl:px-12 py-0 bg-[#FFE7EB]">
                <img
                  className="w-full h-full object-contain rounded-xl"
                  src="/images/project3.png"
                  alt="YC Directory App"
                />
              </div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                YC Directory - A Startup Showcase App
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
