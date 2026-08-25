"use client";

import { useEffect, useState } from "react";
import { currentFocus } from "@/lib/data";

const lines = [
  { prompt: "deniz@portfolio", cmd: "whoami" },
  { output: "AI & Data Engineering student · AI Engineering Intern @ ASEE · Antalya, TR" },
  { prompt: "deniz@portfolio", cmd: "cat focus.txt" },
  { output: currentFocus.map((f) => `  - ${f}`).join("\n") },
  { prompt: "deniz@portfolio", cmd: "status" },
  { output: "● available for internships & collaborations" },
];

export function Terminal() {
  const [visible, setVisible] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (visible >= lines.length) return;
    const line = lines[visible];
    if (!line) return;

    if (!line.cmd) {
      const t = setTimeout(() => setVisible((v) => v + 1), 350);
      return () => clearTimeout(t);
    }

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(line.cmd!.slice(0, i));
      if (i >= line.cmd!.length) {
        clearInterval(interval);
        setTimeout(() => {
          setVisible((v) => v + 1);
          setTyped("");
        }, 400);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div className="glass w-full max-w-md rounded-xl font-mono text-[13px] shadow-2xl shadow-primary/5">
      <div className="flex items-center gap-1.5 border-b border-ink/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-xs text-muted">terminal — zsh</span>
      </div>
      <div className="min-h-[220px] space-y-2 p-4">
        {lines.slice(0, visible).map((line, idx) =>
          line.cmd ? (
            <div key={idx} className="flex flex-wrap gap-1.5">
              <span className="text-accent">➜</span>
              <span className="text-primary">{line.prompt}</span>
              <span className="text-ink">{line.cmd}</span>
            </div>
          ) : (
            <pre key={idx} className="whitespace-pre-wrap text-muted">
              {line.output}
            </pre>
          )
        )}
        {visible < lines.length && lines[visible]?.cmd && (
          <div className="flex flex-wrap gap-1.5">
            <span className="text-accent">➜</span>
            <span className="text-primary">{lines[visible].prompt}</span>
            <span className="text-ink">
              {typed}
              <span className="animate-blink">▍</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
