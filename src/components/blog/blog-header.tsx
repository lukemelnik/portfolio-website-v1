import React from "react";
import PostAuthor from "./post-author";
import PostTags from "./post-tags";

export default function BlogHeader({
  author,
  date,
  title,
  tags,
}: {
  author: string;
  date: string;
  title: string;
  tags: string[];
}) {
  return (
    <div className="relative">
      <div className="px-5 py-5">
        <h1 className="text-primary/90">{title}</h1>
        <PostAuthor date={date} />
        <PostTags tags={tags} />
      </div>
      <div
        className="mask absolute inset-0 -z-20 h-full w-full"
        // style={{ maskImage: "linear-gradient(#000, transparent)" }}
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          // style={{ maskImage: "linear-gradient(to top, transparent, black)" }}
          className="fill-none stroke-pink-700/30"
        >
          <defs>
            <pattern
              id="grid"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <rect width="25" height="25" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}
