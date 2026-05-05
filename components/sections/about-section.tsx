import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Giới thiệu</h2>
      <Card>
        <CardContent className="grid gap-6 md:grid-cols-[180px_1fr] md:items-center">
          <Image
            src="/avatar.svg"
            alt="Ảnh đại diện Nguyễn Văn Uy"
            width={180}
            height={180}
            className="mx-auto rounded-2xl border border-cyan-500/30"
            priority
          />
          <div className="space-y-3">
            <p className="text-slate-300">
              Tôi là Nguyễn Văn Uy, hiện phát triển theo định hướng
              Backend-Fullstack với nền tảng chính là PHP, Python và MySQL. Tôi
              ưu tiên xây dựng hệ thống bền vững, dễ mở rộng và ổn định khi tải tăng.
            </p>
            <p className="text-slate-400">
              Kinh nghiệm thực tế của tôi bao gồm Shopify front-end, RPA scraping
              và phát triển module AI RAG. Tôi làm việc theo tư duy clean
              architecture, clean code và cải tiến dựa trên số liệu đo lường.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
