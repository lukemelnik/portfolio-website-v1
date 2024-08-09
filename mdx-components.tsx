import CodeCopyButton from "@/components/blog/code-copy-button";
import { getTextContent } from "@/lib/get-text-content";
import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // potentially add a custom component around the childen here that could be a client compoenent and interact with the active section context

    // remove the pre tag from code snippets
    pre: ({ children }) => <>{children}</>,
    code: ({ children }) => {
      const childrenText = getTextContent(children);
      return (
        // can't figure out why bg color stopped working all of a sudden
        <div className="not-prose relative rounded-xl border-[1px] border-zinc-300 bg-zinc-900 p-5 text-sm font-thin">
          <div className="absolute right-10 top-10 font-medium">
            <CodeCopyButton text={childrenText} />
          </div>
          <code className="flex flex-col gap-3">{children}</code>
        </div>
      );
    },
    ...components,
  };
}
