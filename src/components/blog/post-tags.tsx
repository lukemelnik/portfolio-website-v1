import { FrontMatter, Post } from "@/lib/get-post-functions";
import React from "react";

export default function PostTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap items-center gap-3">
      {/* <span>Tags:</span> */}
      {tags.map((tag) => (
        <div
          key={tag}
          className="rounded-lg border-2 border-pink-700 p-1 px-2 text-base text-pink-700"
        >
          #{tag}
        </div>
      ))}
    </div>
  );
}
