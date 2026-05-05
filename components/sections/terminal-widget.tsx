"use client";

import { useMemo, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";

const commandMap: Record<string, string> = {
  help: "Lệnh hỗ trợ: help, cat about_me.txt, stack, clear",
  "cat about_me.txt":
    "Tôi là Nguyễn Văn Uy, tập trung vào backend engineering, kiến trúc hệ thống và tối ưu hiệu suất.",
  stack: "PHP/MVC | FastAPI | MySQL | ReactJS | Shopify Liquid | RAG",
};

export function TerminalWidget() {
  const [command, setCommand] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "portfolio-terminal v1.0",
    "Gõ 'help' để xem danh sách lệnh.",
  ]);

  const prompt = useMemo(() => "uy@portfolio:~$", []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedCommand = command.trim();

    if (!trimmedCommand) return;

    if (trimmedCommand === "clear") {
      setLogs([]);
      setCommand("");
      return;
    }

    const response = commandMap[trimmedCommand] ?? "Không tìm thấy lệnh. Gõ 'help'.";
    setLogs((previous) => [...previous, `${prompt} ${trimmedCommand}`, response]);
    setCommand("");
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">
        Terminal tương tác
      </h2>
      <Card className="overflow-hidden">
        <CardContent className="space-y-4 bg-slate-950">
          <div className="h-56 overflow-y-auto rounded-lg border border-cyan-500/20 bg-black/50 p-4 font-mono text-sm text-cyan-100">
            {logs.map((line, index) => (
              <p key={`${line}-${index}`} className="mb-1">
                {line}
              </p>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center gap-2 font-mono">
            <span className="text-cyan-300">{prompt}</span>
            <input
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              className="h-10 flex-1 rounded-md border border-cyan-500/30 bg-slate-900 px-3 text-sm text-cyan-50 outline-none focus:border-cyan-400"
              placeholder="Nhập lệnh..."
            />
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
