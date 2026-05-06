"use client";

import { ArrowUpRight, BriefcaseBusiness, Sparkles } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { HeroAvatar } from "@/components/hero-avatar";
import { ThemeToggle } from "@/components/theme-toggle";

const experiences = [
  {
    company: "HUGvyn",
    period: "07/2025 - Hiện tại",
    role: "Front-End Dev",
    description:
      "Tối ưu UI/UX, tùy chỉnh theme Shopify bằng Liquid, HTML5, CSS3, JavaScript và xử lý triệt để xung đột CSS/JS.",
  },
  {
    company: "Rainscales",
    period: "03/2025 - 06/2025",
    role: "Intern RPA",
    description:
      "Xây pipeline Python cho web scraping, tự động hóa tải hóa đơn/dữ liệu và xử lý các luồng bypass bảo mật.",
  },
];

const projectMetrics = [
  "87% Accuracy & 90% Faithfulness cho AI Chatbot RAG",
  "Giảm 35% Latency nhờ tối ưu MySQL Composite Indexing",
  "Handle >50,000 chapters không gặp bottleneck",
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  const pageRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, prefersReducedMotion ? 0 : -36]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.78]);
  const progressScaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const magnetX = useMotionValue(0);
  const magnetY = useMotionValue(0);
  const smoothMagnetX = useSpring(magnetX, { stiffness: 220, damping: 18 });
  const smoothMagnetY = useSpring(magnetY, { stiffness: 220, damping: 18 });
  const projectRotateX = useMotionValue(0);
  const projectRotateY = useMotionValue(0);
  const smoothProjectRotateX = useSpring(projectRotateX, { stiffness: 160, damping: 18 });
  const smoothProjectRotateY = useSpring(projectRotateY, { stiffness: 160, damping: 18 });

  return (
    <main
      ref={pageRef}
      className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-5 py-8 md:px-10 md:py-12 lg:gap-28 lg:snap-y lg:snap-proximity"
    >
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-[var(--foreground)]"
        style={{ scaleX: progressScaleX }}
      />
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="grid gap-8 border-b border-[var(--line)] pb-14 lg:snap-start lg:grid-cols-[1fr_1.2fr] lg:items-end"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <HeroAvatar />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="space-y-7"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Portfolio 2026
            </p>
            <motion.div
              style={{ x: smoothMagnetX, y: smoothMagnetY }}
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                magnetX.set((event.clientX - (rect.left + rect.width / 2)) / 8);
                magnetY.set((event.clientY - (rect.top + rect.height / 2)) / 8);
              }}
              onMouseLeave={() => {
                magnetX.set(0);
                magnetY.set(0);
              }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Nguyễn Văn Uy
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-xl"
            >
              Backend/Fullstack Developer & Intern PHP
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-7 border-b border-[var(--line)] pb-14 lg:snap-start"
      >
        <div className="flex items-center gap-3">
          <BriefcaseBusiness className="h-5 w-5" />
          <h2 className="text-sm font-medium uppercase tracking-[0.24em]">Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((item) => (
            <motion.article
              key={item.company}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-semibold tracking-tight">{item.company}</h3>
                <p className="text-sm text-[var(--muted)]">{item.period}</p>
              </div>
              <p className="text-base font-medium">{item.role}</p>
              <p className="max-w-4xl text-[var(--muted)]">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="group relative overflow-hidden rounded-3xl border border-[var(--line)] px-5 py-8 md:px-9 md:py-11 lg:snap-start"
        style={{
          rotateX: smoothProjectRotateX,
          rotateY: smoothProjectRotateY,
          transformPerspective: 1200,
        }}
        onMouseMove={(event) => {
          if (prefersReducedMotion) return;
          const rect = event.currentTarget.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;
          projectRotateY.set((px - 0.5) * 4);
          projectRotateX.set((0.5 - py) * 4);
        }}
        onMouseLeave={() => {
          projectRotateX.set(0);
          projectRotateY.set(0);
        }}
      >
        <motion.div
          initial={false}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-transparent dark:from-zinc-700/30" />
          <Image
            src="/avatar-dark.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20 blur-sm dark:opacity-30"
          />
        </motion.div>

        <div className="relative z-10 space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            Featured Project
          </p>
          <motion.div
            className="flex flex-wrap items-center gap-3"
            whileHover={{ x: prefersReducedMotion ? 0 : 6 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <h2 className="text-4xl font-semibold leading-none tracking-tight md:text-6xl">
              TruyenZ
            </h2>
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowUpRight className="h-8 w-8" />
            </motion.span>
          </motion.div>
          <p className="max-w-3xl text-base text-[var(--muted)] md:text-lg">
            Nền tảng đọc truyện xây dựng theo hướng microservices, tích hợp AI Chatbot RAG và
            tập trung tối ưu hiệu năng dữ liệu.
          </p>
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">
            PHP (MVC) • Python (FastAPI) • MySQL • Microservices
          </p>
          <div className="space-y-2 pt-2">
            {projectMetrics.map((metric) => (
              <motion.p
                key={metric}
                className="flex items-start gap-2 text-sm md:text-base"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                {metric}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="border-b border-[var(--line)] pb-14 lg:snap-start"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Education</p>
            <h3 className="text-2xl font-semibold tracking-tight">Đại học Kiến Trúc Đà Nẵng</h3>
            <p className="text-[var(--muted)]">Công nghệ Thông tin (2021 - 2026) • GPA: 3.32</p>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">Core Skills</p>
            <p className="text-[var(--muted)]">
              PHP (MVC), Python (FastAPI), MySQL, RESTful API, Microservices, Web Scraping,
              Shopify Liquid, HTML5/CSS3/JavaScript.
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
