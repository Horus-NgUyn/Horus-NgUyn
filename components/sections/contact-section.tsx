"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message: string };

      if (!response.ok) {
        setStatus(data.message || "Không thể gửi tin nhắn.");
        return;
      }

      setStatus("Đã gửi tin nhắn thành công. Cảm ơn bạn!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Lỗi mạng, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">Liên hệ</h2>
      <Card>
        <CardContent className="space-y-5">
          <div className="flex items-center gap-2 text-cyan-200">
            <Mail className="h-4 w-4" />
            <p className="text-sm">
              Bạn có thể gửi tin nhắn trực tiếp từ form này đến email của tôi.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              required
              value={form.name}
              onChange={(event) => setForm((v) => ({ ...v, name: event.target.value }))}
              placeholder="Họ và tên"
              className="h-11 rounded-lg border border-cyan-500/30 bg-slate-950 px-3 text-sm outline-none focus:border-cyan-300"
            />
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => setForm((v) => ({ ...v, email: event.target.value }))}
              placeholder="your@email.com"
              className="h-11 rounded-lg border border-cyan-500/30 bg-slate-950 px-3 text-sm outline-none focus:border-cyan-300"
            />
            <textarea
              required
              value={form.message}
              onChange={(event) =>
                setForm((v) => ({ ...v, message: event.target.value }))
              }
              placeholder="Nội dung trao đổi hợp tác..."
              rows={5}
              className="rounded-lg border border-cyan-500/30 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-cyan-300"
            />
            <div className="flex flex-wrap items-center gap-3">
              <Button type="submit" size="lg" disabled={loading}>
                {loading ? "Đang gửi..." : "Gửi tin nhắn"} <Send className="h-4 w-4" />
              </Button>
              {status ? <p className="text-sm text-slate-300">{status}</p> : null}
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
