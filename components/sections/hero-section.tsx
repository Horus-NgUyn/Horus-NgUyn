"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type HeroSectionProps = {
  githubUrl: string;
  cvUrl: string;
};

export function HeroSection({ githubUrl, cvUrl }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-8 md:p-12">
      <div className="pointer-events-none absolute -top-28 -right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-transparent"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative space-y-6"
      >
        <Badge>Intern PHP / Aspiring Backend-Fullstack Developer</Badge>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Nguyễn Văn Uy
          </h1>
          <p className="max-w-2xl text-base text-slate-300 md:text-lg">
            Tôi theo đuổi định hướng Backend-Fullstack với trọng tâm là kiến trúc
            hệ thống, khả năng mở rộng và tối ưu hiệu suất vận hành.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <Button size="lg">
              Xem GitHub <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href={cvUrl} target="_blank" rel="noreferrer">
            <Button variant="secondary" size="lg">
              Tải CV <Download className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
