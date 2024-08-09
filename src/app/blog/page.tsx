import { getAllPostsMeta } from "@/lib/get-post-functions";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import ArrowRightIcon from "@/components/icons/arrow-right-icon";
import PostTags from "@/components/blog/post-tags";

function readableDate(date: string) {
  return format(new Date(date), "MMMM dd, yyyy");
}

export default async function BlogPage() {
  const posts = await getAllPostsMeta();
  return (
    <div className="mx-auto mt-24 block max-w-3xl scroll-mt-36 p-5 md:mt-36">
      <div className="mt-10 flex flex-col gap-5">
        {posts.map((post) => (
          <Link key={post.slug} href={`blog/${post.slug}`}>
            <div className="group relative rounded-lg bg-pink-950/10 p-6 shadow-lg duration-300 hover:scale-[1.01] dark:border-2 dark:border-pink-950/50 dark:shadow-pink-700/50">
              <div className="sm:flex sm:justify-between">
                <h2 className="mb-3 max-w-lg text-2xl font-bold group-hover:text-pink-700 sm:text-3xl">
                  {post.title}
                </h2>
                <p className="no mb-3 whitespace-nowrap font-bold opacity-60">
                  {readableDate(post.date)}
                </p>
              </div>
              <p className="mb-1 max-w-lg">{post.excerpt}</p>
              <div className="my-2">
                <PostTags tags={post.tags} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
