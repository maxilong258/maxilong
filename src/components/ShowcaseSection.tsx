"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleHeader from "./TitleHeader";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProjectLinkButton = ({ link }: { link: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-full w-8 h-8 md:w-9 md:h-9 bg-gray-200 text-gray-600 dark:bg-[#1e1f21] dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200 shrink-0"
    aria-label="Visit project"
  >
    <ArrowUpRight className="w-4 h-4" />
  </a>
);

const ProjectTitleRow = ({
  name,
  link,
  titleClassName,
  className,
}: {
  name: string;
  link?: string;
  titleClassName: string;
  className?: string;
}) => (
  <div className={`flex items-center gap-3 ${className ?? ""}`}>
    <h2 className={titleClassName}>{name}</h2>
    {link ? <ProjectLinkButton link={link} /> : null}
  </div>
);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const oceanbaseRef = useRef(null);
  const unicomRef = useRef(null);
  const huigeRef = useRef(null);
  const tubeLearningRef = useRef(null);
  const lifeExpenseRef = useRef(null);
  const atmosphereRef = useRef(null);
  const ionMsWebRef = useRef(null);
  const nextStackRef = useRef(null);

  const projects = {
    oceanbase: {
      name: "阿里云OceanBase控制台",
      description:
        "阿里云OceanBase控制台，一个基于React的云数据库用户控制台，包含资源管理、性能监控、数据备份等功能。",
      image: "/images/oceanbase-console.png",
      link: "https://oceanbase.com/",
    },
    unicom: {
      name: "中国联通手机营业厅",
      description:
        "中国联通手机营业厅，一个基于原生，Vue开发的移动端应用，提供联通用户各项业务办理等功能。",
      image: "/images/china-unicom-app.webp",
      link: "https://sj.qq.com/appdetail/com.sinovatech.unicom.ui",
    },
    huige: {
      name: "慧格大健康",
      description:
        "慧格大健康，一个基于uniapp的挂号问诊、健康管理小程序。（微信小程序搜索慧格大健康）",
      image: "/images/huige-health.png",
      link: "",
    },
    tubeLearning: {
      name: "EngSub: learn English on Tube",
      description:
        "一个基于Flutter和Firebase的英语学习平台，提供英语学习视频、单词收集等功能。",
      image: "/images/tube-learning.png",
      link: "https://engsub-offical.vercel.app/",
    },
    lifeExpense: {
      name: "生活",
      description: "一个基于Flutter和Sqlite的简单记账app",
      image: "/images/life-expense.png",
      link: "https://play.google.com/store/apps/details?id=com.shiming.life_expense",
    },
    atmosphere: {
      name: "My Ambience",
      description: "一个基于Next.js的音乐氛围创建网站。",
      image: "/images/atmosphere.webp",
      link: "https://myambience.vercel.app/",
    },
    ionMsWeb: {
      name: "阿姆河东部气田智能运维主站",
      description:
        "阿姆河东部气田智能运维主站工程，基于Vue3。(内部项目，暂无链接)",
      image: "/images/ion-ms-web.webp",
      link: "",
    },
    nextStack: {
      name: "NextStack",
      description: "我的博客，基于Next.js",
      image: "/images/next-stack.png",
      link: "https://blog.maxilong.top/",
    },
  };

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      oceanbaseRef.current,
      unicomRef.current,
      huigeRef.current,
      tubeLearningRef.current,
      lifeExpenseRef.current,
      atmosphereRef.current,
      ionMsWebRef.current,
      nextStackRef.current,
    ];

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
          delay: 0.2 * (index + 1),
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
      className="w-full mt-20 px-5 md:px-20 py-10 md:py-20"
    >
      <div className="w-full">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Projects Overview"
        />

        <div className="flex xl:flex-row flex-col gap-10 justify-between mt-16">
          <div
            ref={oceanbaseRef}
            className="h-full flex flex-col justify-between xl:w-[60%]"
          >
            <div className="flex flex-col h-full">
              <div className="xl:h-[70vh] md:h-[50vh] h-96 relative bg-[#2073FF] rounded-xl">
                <Image
                  fill
                  className="object-contain p-7"
                  src={projects.oceanbase.image}
                  alt="Oceanbase Console"
                />
              </div>
              <div className="space-y-5 mt-5">
                <ProjectTitleRow
                  name={projects.oceanbase.name}
                  link={projects.oceanbase.link}
                  titleClassName="text-2xl md:text-3xl lg:text-4xl font-bold"
                  className="py-5"
                />
                <p className="text-white-50 md:text-xl">
                  {projects.oceanbase.description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col xl:flex-col gap-10 xl:w-[40%] overflow-hidden">
            <div className="project" ref={unicomRef}>
              <div className="flex flex-col h-full">
                <div className="xl:h-[35vh] md:h-50 lg:h-68 h-60 relative rounded-xl py-0 bg-[#FFEFDB]">
                  <Image
                    fill
                    className="object-cover rounded-xl"
                    src={projects.unicom.image}
                    alt="China Unicom App"
                  />
                </div>
                <ProjectTitleRow
                  name={projects.unicom.name}
                  link={projects.unicom.link}
                  titleClassName="text-lg md:text-xl lg:text-2xl font-semibold"
                  className="mt-5"
                />
                <p className="text-white-50 md:text-xl mt-2">
                  {projects.unicom.description}
                </p>
              </div>
            </div>

            <div className="project" ref={huigeRef}>
              <div className="flex flex-col h-full">
                <div className="xl:h-[35vh] md:h-50 lg:h-68 h-60 relative rounded-xl bg-[#008F5D]">
                  <Image
                    fill
                    className="object-contain rounded-xl"
                    src={projects.huige.image}
                    alt="Huige Health"
                  />
                </div>
                <ProjectTitleRow
                  name={projects.huige.name}
                  link={projects.huige.link || undefined}
                  titleClassName="text-lg md:text-xl lg:text-2xl font-semibold"
                  className="mt-5"
                />
                <p className="text-white-50 md:text-xl mt-2">
                  {projects.huige.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col gap-10 justify-between mt-10">
          <div className="flex md:flex-row flex-col xl:flex-col gap-10 xl:w-[40%] overflow-hidden">
            <div className="project" ref={tubeLearningRef}>
              <div className="flex flex-col h-full">
                <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl py-0 bg-[#E9C55D]">
                  <Image
                    fill
                    className="object-contain rounded-xl"
                    src={projects.tubeLearning.image}
                    alt="Tube Learning"
                  />
                </div>
                <ProjectTitleRow
                  name={projects.tubeLearning.name}
                  link={projects.tubeLearning.link}
                  titleClassName="text-lg md:text-xl lg:text-2xl font-semibold"
                  className="mt-5"
                />
                <p className="text-white-50 md:text-xl mt-2">
                  {projects.tubeLearning.description}
                </p>
              </div>
            </div>

            <div className="project" ref={lifeExpenseRef}>
              <div className="flex flex-col h-full">
                <div className="xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-4 2xl:px-8 py-0 bg-[#212434]">
                  <Image
                    fill
                    className="object-contain rounded-xl p-4"
                    src={projects.lifeExpense.image}
                    alt="Life Expense"
                  />
                </div>
                <ProjectTitleRow
                  name={projects.lifeExpense.name}
                  link={projects.lifeExpense.link}
                  titleClassName="text-lg md:text-xl lg:text-2xl font-semibold"
                  className="mt-5"
                />
                <p className="text-white-50 md:text-xl mt-2">
                  {projects.lifeExpense.description}
                </p>
              </div>
            </div>
          </div>

          <div
            ref={atmosphereRef}
            className="h-full flex flex-col justify-between xl:w-[60%]"
          >
            <div className="flex flex-col h-full">
              <div className="xl:h-[70vh] md:h-[50vh] h-96 relative">
                <Image
                  fill
                  className="object-cover rounded-xl"
                  src={projects.atmosphere.image}
                  alt="Atmosphere"
                />
              </div>
              <div className="space-y-5 mt-5">
                <ProjectTitleRow
                  name={projects.atmosphere.name}
                  link={projects.atmosphere.link}
                  titleClassName="text-2xl md:text-3xl lg:text-4xl font-bold"
                  className="py-5"
                />
                <p className="text-white-50 md:text-xl">
                  {projects.atmosphere.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex xl:flex-row flex-col gap-10 justify-between mt-10">
          <div
            ref={ionMsWebRef}
            className="h-full flex flex-col justify-between xl:w-[60%]"
          >
            <div className="flex flex-col h-full">
              <div className="xl:h-[70vh] md:h-[50vh] h-96 relative  bg-[#4a65bf] rounded-xl">
                <Image
                  fill
                  className="object-contain rounded-xl p-7"
                  src={projects.ionMsWeb.image}
                  alt="ion-ms-web"
                />
              </div>
              <div className="space-y-5 mt-5">
                <ProjectTitleRow
                  name={projects.ionMsWeb.name}
                  link={projects.ionMsWeb.link || undefined}
                  titleClassName="text-2xl md:text-3xl lg:text-4xl font-bold"
                  className="py-5"
                />
                <p className="text-white-50 md:text-xl">
                  {projects.ionMsWeb.description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col xl:flex-col gap-10 xl:w-[40%] overflow-hidden">
            <div className="project" ref={nextStackRef}>
              <div className="flex flex-col h-full">
                <div className="xl:h-[35vh] md:h-50 lg:h-68 h-60 relative rounded-xl py-0 bg-[#E1E4E8]">
                  <Image
                    fill
                    className="object-contain rounded-xl p-5"
                    src={projects.nextStack.image}
                    alt="next-stack"
                  />
                </div>
                <ProjectTitleRow
                  name={projects.nextStack.name}
                  link={projects.nextStack.link}
                  titleClassName="text-lg md:text-xl lg:text-2xl font-semibold"
                  className="mt-5"
                />
                <p className="text-white-50 md:text-xl mt-2">
                  {projects.nextStack.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
