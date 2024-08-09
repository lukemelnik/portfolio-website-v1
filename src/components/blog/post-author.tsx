import React from "react";
import Image from "next/image";
import Link from "next/link";
import PostDate from "./post-date";

export default function PostAuthor({ date }: { date: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="my-0 flex items-center gap-2 py-0 text-sm">
        <Image
          className="border-primary my-0 rounded-full shadow-md"
          alt="author headshot"
          src={"/headshot.jpg"}
          width={45}
          height={45}
        />
        <div className="">
          <p className="m-0 ml-[2px] p-0">Luke Melnik</p>
          <Link
            className="-mt-4 p-0 no-underline hover:underline hover:after:content-['→'] dark:text-pink-700 dark:hover:text-pink-700"
            href="https://x.com/lukemelnik"
          >
            @lukemelnik
          </Link>
        </div>
      </div>
      <PostDate date={date} />
    </div>
  );
}
