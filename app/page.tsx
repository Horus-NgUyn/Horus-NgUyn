import Script from "next/script";

import { AnimatedSection } from "@/components/animated-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { FeaturedProject } from "@/components/sections/featured-project";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { TechStackGrid } from "@/components/sections/tech-stack-grid";
import { TerminalWidget } from "@/components/sections/terminal-widget";

const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/";
const cvUrl = process.env.NEXT_PUBLIC_CV_URL ?? "#";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nguyễn Văn Uy",
  jobTitle: "Intern PHP / Aspiring Backend-Fullstack Developer",
  url: siteUrl,
  sameAs: [githubUrl],
  knowsAbout: [
    "PHP MVC",
    "Python FastAPI",
    "MySQL Optimization",
    "Microservices Architecture",
    "RAG Chatbot",
    "Shopify Liquid",
  ],
  worksFor: [
    { "@type": "Organization", name: "HUGvyn" },
    { "@type": "Organization", name: "Rainscales" },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="portfolio-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto w-full max-w-6xl space-y-14 px-4 py-10 md:px-8 md:py-14">
        <AnimatedSection>
          <HeroSection githubUrl={githubUrl} cvUrl={cvUrl} />
        </AnimatedSection>
        <AnimatedSection delay={0.03}>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection delay={0.06}>
          <TechStackGrid />
        </AnimatedSection>
        <AnimatedSection delay={0.09}>
          <FeaturedProject />
        </AnimatedSection>
        <AnimatedSection delay={0.12}>
          <ProjectGallery />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <ExperienceTimeline />
        </AnimatedSection>
        <AnimatedSection delay={0.18}>
          <TerminalWidget />
        </AnimatedSection>
        <AnimatedSection delay={0.21}>
          <ContactSection />
        </AnimatedSection>
      </main>
    </>
  );
}
