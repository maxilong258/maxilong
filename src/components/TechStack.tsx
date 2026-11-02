"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  Bot,
  Cloud,
  Database,
  Layers3,
  Sparkles,
  Workflow,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type SkillGroup = {
  name: string;
  description: string;
  skills: string[];
} & (
  | { image: string; icon?: never }
  | { icon: typeof Database; image?: never }
);

// Based on the professional-skills and Neku experience sections of the resume.
const skillGroups: SkillGroup[] = [
  {
    name: "Frontend Development",
    description: "业务页面、组件封装与状态管理",
    image: "/images/logos/react.png",
    skills: ["React", "Vue", "Next.js", "JavaScript", "TypeScript"],
  },
  {
    name: "Backend APIs",
    description: "业务接口、身份认证与参数校验",
    image: "/images/logos/Nestjs.png",
    skills: ["Node.js", "NestJS", "REST API"],
  },
  {
    name: "Cross-platform Apps",
    description: "跨平台应用开发与 Google Play 上架",
    image: "/images/logos/Flutter.png",
    skills: ["Flutter", "Dart", "uni-app", "Firebase Auth"],
  },
  {
    name: "Visual Editors",
    description: "图层编辑、素材导入与动画预览",
    icon: Layers3,
    skills: ["Konva", "Spine", "Zustand"],
  },
  {
    name: "Interactive Web",
    description: "网页 3D 场景与 Canvas 图像处理",
    image: "/images/logos/threejs.png",
    skills: ["Three.js", "Canvas"],
  },
  {
    name: "Async Jobs & Queues",
    description: "异步任务调度与 API / Worker 拆分",
    icon: Workflow,
    skills: ["Redis", "BullMQ", "Worker", "Scheduler"],
  },
  {
    name: "Data & Search",
    description: "数据存储、缓存、榜单与内容搜索",
    icon: Database,
    skills: ["MySQL", "Firestore", "Elasticsearch", "SQLite", "Hive"],
  },
  {
    name: "Engineering & Delivery",
    description: "容器化、云部署与版本发布回滚",
    icon: Cloud,
    skills: ["Google Cloud", "Docker", "Git", "Linux", "Nginx"],
  },
  {
    name: "AI Integration",
    description: "将 AI 能力接入实际业务流程",
    icon: Sparkles,
    skills: ["辅助打标", "文案生成", "素材生成"],
  },
  {
    name: "AI-assisted Coding",
    description: "结合项目上下文辅助开发并验证结果",
    icon: Bot,
    skills: ["需求拆解", "重构排错", "代码审查"],
  },
];

const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-skill-card]").forEach((card) => {
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
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="mt-16 w-full px-5 py-10 md:px-20 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="flex flex-col items-center gap-4">
          <p className="rounded-full bg-gray-200 px-4 py-2 text-sm text-gray-600 dark:bg-[#1e1f21] dark:text-gray-400">
            🤝 What I Bring to the Table
          </p>
          <h2 id="skills-heading" className="text-center text-2xl md:text-3xl">
            How I Can Contribute &amp; My Key Skills
          </h2>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.name}
                data-skill-card
                className="rounded-lg border border-gray-200 bg-gray-200 p-4 transition-colors hover:border-orange-400 dark:border-gray-700 dark:bg-[#1e1f21] dark:hover:border-orange-400"
              >
                <div className="mb-3 flex h-10 items-center">
                  {group.image ? (
                    <Image
                      src={group.image}
                      width={40}
                      height={40}
                      alt=""
                      className="h-10 w-10 object-contain"
                    />
                  ) : Icon ? (
                    <Icon
                      aria-hidden="true"
                      className="h-8 w-8 text-orange-500 dark:text-orange-400"
                      strokeWidth={1.5}
                    />
                  ) : null}
                </div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  {group.name}
                </h3>
                <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">
                  {group.description}
                </p>
                <ul
                  aria-label={`${group.name} skills`}
                  className="mt-3 flex flex-wrap gap-1.5"
                >
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded bg-white/70 px-2 py-0.5 text-[11px] leading-5 text-gray-600 dark:bg-white/5 dark:text-gray-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
