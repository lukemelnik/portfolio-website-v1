"use client";
import MdxLayout from "@/components/blog/mdx-layout";

// using this layout to separate the client components from the mdx content

export default function MDXPage({ children }: { children: React.ReactNode }) {
  return <MdxLayout>{children}</MdxLayout>;
}
