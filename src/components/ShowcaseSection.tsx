"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  name: string;
  description: string;
  image: string;
  additionalImage?: string;
  link?: string;
  background: string;
  imageClassName?: string;
};

const projects: Project[] = [
  {
    name: "EngSub: learn English on Tube",
    description:
      "基于 Flutter 和 Firebase 的英语学习应用，支持视频字幕学习和单词收藏。",
    image: "/images/tube-learning.png",
    link: "https://play.google.com/store/apps/details?id=com.shiming.tube_learning",
    background: "bg-[#E9C55D]",
    imageClassName: "object-contain",
  },
  {
    name: "生活 · Life Expense",
    description:
      "基于 Flutter 和 SQLite 的日常记账应用，支持收支记录、分类统计与预算管理。",
    image: "/images/life-expense.png",
    link: "https://play.google.com/store/apps/details?id=com.shiming.life_expense",
    background: "bg-[#212434]",
    imageClassName: "object-contain p-3",
  },
  {
    name: "My Ambience",
    description:
      "基于 Next.js 的音乐氛围网站，为工作、阅读和放松提供背景声音与场景。",
    image: "/images/atmosphere.webp",
    link: "https://atmosphere.maxilong.dev/",
    background: "bg-[#10143D]",
    imageClassName: "object-cover",
  },
  {
    name: "MosaGrid",
    description:
      "浏览器中的图片像素网格编辑器，支持色彩、对比度和网格调整，以及 PNG 导出。",
    image: "/images/mosagrid.jpg",
    link: "https://mosagrid.maxilong.dev/",
    background: "bg-[#F6F0E4]",
    imageClassName: "object-contain",
  },
  {
    name: "Random Wiki",
    description:
      "随机探索维基百科的阅读工具，支持多语言、收藏和历史记录，提供 Web 与 Flutter 版本。",
    image: "/images/random-wiki-home.png",
    additionalImage: "/images/random-wiki-article.png",
    link: "https://randomwiki.maxilong.dev/",
    background: "bg-[#EEE9DF]",
  },
  {
    name: "Pulse Metronome",
    description:
      "Chrome 节拍器扩展，支持 40–240 BPM、点击测速和摇滚节奏，关闭弹窗后仍可播放。",
    image: "/images/pulse-metronome.jpg",
    link: "https://chromewebstore.google.com/detail/pulse-metronome/fkjimkdceehdnaoadnchcnlnnadpamkc?hl=zh-CN",
    background: "bg-[#ECF1E9]",
    imageClassName: "object-contain",
  },
  {
    name: "NextStack",
    description:
      "基于 Next.js 搭建的个人博客，记录技术实践、开发过程与日常思考。",
    image: "/images/next-stack.png",
    link: "https://next-stack-ten.vercel.app/",
    background: "bg-[#E1E4E8]",
    imageClassName: "object-contain p-3",
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils
          .toArray<HTMLElement>("[data-project-card]")
          .forEach((card) => {
            gsap.fromTo(
              card,
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom-=40",
                  once: true,
                },
              },
            );
          });
      });
      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      aria-labelledby="projects-heading"
      className="w-full mt-16 px-5 py-10 md:px-20 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="flex flex-col items-center gap-4">
          <p className="rounded-full bg-gray-200 px-4 py-2 text-sm text-gray-600 dark:bg-[#1e1f21] dark:text-gray-400">
            💼 My Projects Overview
          </p>
          <h2
            id="projects-heading"
            className="text-center text-2xl md:text-3xl"
          >
            Personal Projects
          </h2>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const preview = (
              <div
                className={`relative aspect-video overflow-hidden rounded-xl ${project.background}`}
              >
                {project.additionalImage ? (
                  <div className="flex h-full items-center justify-center gap-3 p-3">
                    {[project.image, project.additionalImage].map(
                      (src, index) => (
                        <div
                          key={src}
                          className="relative aspect-[9/20] h-full"
                        >
                          <Image
                            fill
                            src={src}
                            alt={`${project.name} ${index === 0 ? "首页" : "文章页"}截图`}
                            sizes="(min-width: 768px) 110px, 160px"
                            className="object-contain"
                          />
                        </div>
                      ),
                    )}
                  </div>
                ) : (
                  <Image
                    fill
                    src={project.image}
                    alt={project.name}
                    sizes="(min-width: 1536px) 411px, (min-width: 1280px) calc((100vw - 288px) / 3), (min-width: 1024px) calc((100vw - 208px) / 3), (min-width: 768px) calc((100vw - 184px) / 2), calc(100vw - 40px)"
                    className={project.imageClassName ?? "object-contain"}
                  />
                )}
              </div>
            );

            return (
              <article key={project.name} data-project-card className="min-w-0">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="block rounded-xl outline-offset-4 focus-visible:outline-2 focus-visible:outline-orange-400"
                  >
                    {preview}
                  </a>
                ) : (
                  preview
                )}
                <div className="mt-3 flex items-start justify-between gap-3">
                  <h3 className="min-w-0 text-base font-semibold leading-7 md:text-lg">
                    {project.name}
                  </h3>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name}`}
                      className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-orange-400 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 dark:bg-[#1e1f21] dark:text-gray-400 dark:hover:bg-orange-400 dark:hover:text-gray-900"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : null}
                </div>
                <p className="mt-1.5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
