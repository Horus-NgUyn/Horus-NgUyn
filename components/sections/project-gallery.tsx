import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

const screenshots = [
  {
    src: "/truyenz-home.svg",
    title: "TruyenZ Service Dashboard",
  },
  {
    src: "/truyenz-rag.svg",
    title: "RAG Chatbot Flow",
  },
  {
    src: "/truyenz-db.svg",
    title: "Database Optimization Metrics",
  },
];

export function ProjectGallery() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">
        Project Screenshots
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {screenshots.map((item) => (
          <Card key={item.title}>
            <CardContent className="space-y-3">
              <Image
                src={item.src}
                alt={item.title}
                width={1200}
                height={700}
                className="h-auto w-full rounded-lg border border-cyan-500/20"
              />
              <p className="text-sm text-cyan-100">{item.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
