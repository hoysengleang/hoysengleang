"use client";

import { useState } from "react";

import { Check, Copy } from "lucide-react";

export default function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard can be blocked (insecure origin, permissions); the text stays selectable.
    }
  };

  return (
    <div className="flex items-stretch overflow-hidden rounded border border-border bg-card font-mono text-[13px]">
      <code className="min-w-0 flex-1 break-words px-3 py-2.5">
        <span className="select-none text-muted-foreground">$ </span>
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        className="flex items-center gap-1.5 border-l border-border px-3 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label={`Copy command: ${command}`}
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
