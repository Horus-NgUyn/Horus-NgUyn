import { BriefcaseBusiness } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "HUGvyn",
    role: "Front-End Dev",
    details: "Shopify, Liquid, tối ưu UI/UX",
  },
  {
    company: "Rainscales",
    role: "RPA Intern",
    details: "Web Scraping, tự động hóa với Python",
  },
];

export function ExperienceTimeline() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">
        Hành trình kinh nghiệm
      </h2>
      <div className="space-y-4">
        {experiences.map((item) => (
          <Card key={item.company}>
            <CardContent className="flex gap-4">
              <div className="mt-1 rounded-lg border border-cyan-400/30 bg-cyan-500/10 p-2">
                <BriefcaseBusiness className="h-4 w-4 text-cyan-300" />
              </div>
              <div>
                <p className="text-sm text-cyan-200">{item.company}</p>
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <p className="text-sm text-slate-400">{item.details}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
