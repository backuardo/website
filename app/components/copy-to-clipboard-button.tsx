"use client";

import { useState } from "react";
import { CopySimple, CheckSquare } from "@phosphor-icons/react";
import { classNames } from "app/utils/class-names";

export function CopyToClipboardButton({
  text,
  resetTime = 2000,
}: {
  text: string;
  resetTime?: number;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), resetTime);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="text-xs text-stone-300/60 hover:underline-offset-2 text-stone-400/60 hover:text-stone-300 px-1 transition-all"
    >
      <div
        className={classNames(
          copied ? "text-gruvbox-lime" : "",
          "flex space-x-2 items-center justify-center"
        )}
      >
        {copied ? <CheckSquare weight="bold" /> : <CopySimple weight="bold" />}
        <div>Copy</div>
      </div>
    </button>
  );
}
