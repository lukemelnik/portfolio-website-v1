import BlogHeader from "@/components/blog/blog-header";
import BlogImage from "@/components/blog/blog-image";
import CodeCopyButton from "@/components/blog/code-copy-button";
import PostAuthor from "@/components/blog/post-author";
import PostDate from "@/components/blog/post-date";
import PostTags from "@/components/blog/post-tags";
import ArrowLeftIcon from "@/components/icons/arrow-left-icon";
import { getAllPostsMeta, getPostBySlug } from "@/lib/get-post-functions";
import { getTextContent } from "@/lib/get-text-content";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { highlight } from "sugar-high";

export async function generateMetadata({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return;
  }
  const { meta } = post;
  return { title: meta.title, description: meta.excerpt };
}

//Any components used in the mdx files have to be added here
const components = {
  // remove the pre default padding & bg
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <>
      <pre className="relative border-[1px] bg-black p-5 text-sm font-thin">
        {children}
      </pre>
    </>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const childrenText = getTextContent(children);
    // using sugar high for simple syntax highlighting. A little janky to cast it, but highlight is expecting a string
    let codeHTML = highlight(children as string);
    return (
      <div className="not-prose">
        <CodeCopyButton text={childrenText} />
        <code
          className="flex flex-col gap-3"
          dangerouslySetInnerHTML={{ __html: codeHTML }}
        />
      </div>
    );
  },
  PostTags,
  PostDate,
  PostAuthor,
  BlogHeader,
  BlogImage,
};

type Params = {
  params: {
    slug: string;
  };
};

// allow blog pages to be statically generated
export async function generateStaticParams() {
  const posts = await getAllPostsMeta();
  const params = posts.map((post) => ({
    slug: post.slug,
  }));
  return params;
}

export default async function PostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }
  const { content, meta } = post;

  return (
    <>
      <div>
        <Link
          href="/blog"
          className="group mb-3 flex items-center no-underline hover:text-pink-600"
        >
          <span className="mr-1 duration-300 group-hover:-translate-x-2">
            <ArrowLeftIcon />
          </span>
          <span className="font-thin">Back to all posts</span>
        </Link>
        <MDXRemote
          source={content}
          components={{ ...components }}
          // be aware that this automatically destuctures the meta object
          // ie the PostTags component is directly consuming 'tags' not meta.tags
          options={{ scope: meta }}
        />
      </div>
    </>
  );
}
