"use client";

import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { Button } from "./ui/button";
import GitHubIcon from "./icons/github-icon";
import LinkedinIcon from "./icons/linkedin-icon";
import RightArrowIcon from "./icons/right-arrow-icon";
import DownloadIcon from "./icons/download-icon";
import Link from "next/link";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="intro"
      className="relative z-10 min-h-svh max-w-3xl scroll-mt-20 py-5 md:scroll-mt-64"
    >
      <h2 className="mb-5 pl-1 text-3xl font-bold">Hey, I'm Luke.</h2>
      <h2 className="mb-10 text-pretty bg-gradient-to-tl from-pink-400 to-pink-800 bg-clip-text text-[60px] font-bold leading-[50px] tracking-tight text-transparent md:text-[80px] md:leading-[70px] lg:text-[100px] lg:leading-[90px]">
        I'm a full-stack developer.
      </h2>
      <p className="max-w-2xl text-lg leading-relaxed">
        I'm relentlessly curious and I love to build. Currently, I'm focusing on
        JavaScript (TypeScript), Node.js, React (Next.js), and PostgreSQL.
      </p>
      <div className="mt-10 flex flex-wrap gap-5 md:justify-start">
        <Link href="#contact">
          <Button className="group rounded-xl px-5 py-2 hover:scale-105">
            <span className="text-md mr-1">Contact Me</span>
            <span className="duration-300 group-hover:translate-x-2">
              <RightArrowIcon />
            </span>
          </Button>
        </Link>
        {/* these ones are hidden on mobile */}
        <a href="/headshot.jpg" download className="hidden sm:block">
          <Button className="bg-background border-primary text-primary hover:bg-accent group rounded-xl border-2 px-5 py-2 hover:scale-105">
            <span className="mr-2">Download CV</span>
            <DownloadIcon />{" "}
          </Button>
        </a>
        <div className="hidden space-x-5 sm:block">
          {/* <a
            href="https://www.linkedin.com/in/luke-melnik-2a2b1823a/"
            target="_blank"
          >
            <Button className="bg-background border-primary text-primary hover:bg-accent group rounded-xl border-2 px-5 py-2 hover:scale-105">
              <span className="mr-2">LinkedIn</span> <LinkedinIcon />
            </Button>
          </a> */}
          <a href="https://github.com/lukemelnik" target="_blank">
            <Button className="bg-background border-primary text-primary hover:bg-accent group rounded-xl border-2 px-5 py-2 hover:scale-105">
              <span className="mr-2">GitHub</span>{" "}
              <GitHubIcon width="20" height="20" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
