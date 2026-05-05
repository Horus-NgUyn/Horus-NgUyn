import { Braces, Database, Hammer } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const stacks = [
  {
    title: "Backend",
    icon: Database,
    items: ["PHP / MVC", "Python / FastAPI", "MySQL"],
  },
  {
    title: "Frontend",
    icon: Braces,
    items: ["ReactJS", "Liquid / Shopify"],
  },
  {
    title: "Tools",
    icon: Hammer,
    items: ["Web Scraping", "Microservices", "RAG"],
  },
];

export function TechStackGrid() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">
        Năng lực công nghệ
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {stacks.map((group) => (
          <Card key={group.title}>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <group.icon className="h-5 w-5 text-cyan-300" />
                <h3 className="text-lg font-semibold text-cyan-100">{group.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {group.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
