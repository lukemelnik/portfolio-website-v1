"use client";

import { useState } from "react";

export default function CodeSnippet({
  children,
  language,
}: {
  children: React.ReactNode;
  language: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="rounded-xl relative">
      {/* <div className="absolute right-0  top-0 rounded-xl p-5">
        <button
          onClick={() => {
            navigator.clipboard.writeText(children.toString());
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
          }}
        >
          {isCopied ? "✅ Copied!" : "Copy"}
        </button>
      </div> */}
      {children}
    </div>
  );
}
