import { Bot, Database, Network } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturedProject() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">
          Dự án trọng tâm: TruyenZ
        </h2>
        <Badge>Phân tích chuyên sâu</Badge>
      </div>
      <Card>
        <CardContent className="space-y-5">
          <p className="text-slate-300">
            Nền tảng đọc truyện được thiết kế theo kiến trúc service-oriented nhằm
            tách biệt frontend, content service và AI service, giúp hệ thống dễ mở
            rộng và vận hành ổn định.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-cyan-500/20 bg-slate-950/60 p-4">
              <Network className="mb-2 h-5 w-5 text-cyan-300" />
              <h3 className="font-medium text-cyan-100">Microservices</h3>
              <p className="mt-2 text-sm text-slate-400">
                Tách module theo domain và giao tiếp qua REST API để giảm phụ
                thuộc chéo.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-500/20 bg-slate-950/60 p-4">
              <Bot className="mb-2 h-5 w-5 text-cyan-300" />
              <h3 className="font-medium text-cyan-100">AI RAG Chatbot</h3>
              <p className="mt-2 text-sm text-slate-400">
                Triển khai retrieval pipeline đạt độ chính xác 87% cho các truy vấn
                về nội dung truyện.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-500/20 bg-slate-950/60 p-4">
              <Database className="mb-2 h-5 w-5 text-cyan-300" />
              <h3 className="font-medium text-cyan-100">Tối ưu MySQL</h3>
              <p className="mt-2 text-sm text-slate-400">
                Tối ưu truy vấn và indexing giúp giảm 35% latency ở các endpoint dữ
                liệu chính.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
