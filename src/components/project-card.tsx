import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import GitHubIcon from "./icons/github-icon";

export default function ProjectCard({
  src,
  alt,
  title,
  description,
  tech,
  href,
  githubLink,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  tech: string;
  href: string;
  githubLink: string;
}) {
  return (
    <Card className="group relative flex flex-col items-center justify-center overflow-hidden bg-black/0 p-6 text-zinc-100 shadow-xl duration-300">
      <CardHeader>
        <CardTitle className="mb-1 border-b-[1px] border-zinc-800 pb-3 text-3xl">
          {title}
        </CardTitle>

        <CardDescription className="text-md text-zinc-100">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={href} target="_blank">
          <Image
            src={src}
            alt={alt}
            width={500}
            height={300}
            className="shadow-wide-pink mask-project my-8 rounded-lg border-[1px] border-zinc-100/50 duration-300 group-hover:scale-105"
          ></Image>
        </Link>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-5 md:flex-row">
          <p className="text-sm">
            <strong>Tech Stack: </strong>
            {tech}
          </p>
          <div className="flex gap-4">
            <Link href={githubLink} target="_blank">
              <Button className="bg-zinc-200 text-black hover:bg-zinc-500">
                GitHub
                <span className="ml-1">
                  <GitHubIcon width="20" height="20" />
                </span>
              </Button>
            </Link>
            <Link href={href} target="_blank">
              <Button className="bg-zinc-200 text-black hover:bg-zinc-500">
                Try It Out
              </Button>
            </Link>
          </div>
        </div>
      </CardFooter>
      <div className="absolute inset-0 -z-10 w-full bg-black">
        <div className="absolute left-0 right-0 mx-auto h-72 w-72 animate-pulse rounded-full bg-pink-600/40 blur-[100px]"></div>
        <div className="absolute bottom-0 right-10 h-72 w-72 animate-pulse rounded-full bg-purple-600/40 blur-[100px]"></div>
        <div className="absolute bottom-0 left-10 h-72 w-72 animate-pulse rounded-full bg-blue-600/40 blur-[100px]"></div>
      </div>
    </Card>
  );
}
