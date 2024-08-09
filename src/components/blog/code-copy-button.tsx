"use client";

import { useRef, useState } from "react";
import CopyIcon from "../icons/copy-icon";
import CheckIcon from "../icons/check-icon";
import { Button } from "../ui/button";

export default function CodeCopyButton({ text }: { text: string }) {
  const [clicked, setClicked] = useState(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  function handleClick() {
    navigator.clipboard.writeText(text);
    setClicked(true);
    // cancel concurrent timeouts from multiple clicks
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => setClicked(false), 2000);
  }
  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      className="group absolute right-3 top-2 font-medium hover:scale-105"
      aria-label="Copy code"
    >
      {clicked ? (
        <span className="text-pink-600">
          <CheckIcon />
        </span>
      ) : (
        <span className="duration-300 group-hover:text-pink-600">
          <CopyIcon />
        </span>
      )}
    </Button>
  );
}
