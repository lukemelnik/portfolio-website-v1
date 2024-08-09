"use client";

import { useSectionInView } from "@/lib/hooks";
import ProjectCard from "./project-card";
import Link from "next/link";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  return (
    <section
      ref={ref}
      id="projects"
      className="max-w-3xl scroll-mt-20 md:scroll-mt-0 md:py-44"
    >
      <h2 className="mb-6 text-center text-2xl font-bold">Projects</h2>
      <div className="space-y-10">
        <ProjectCard
          src="/forember-dashboard.png"
          alt="screenshot of the Forember App dashboard"
          title="Forember"
          description="A fullstack memory boosting app using spaced repetition and AI generated flashcards. Deployed on Vercel."
          tech="React, Next.js, Node.js, PostgreSQL, Supabase, TailwindCSS, Shadcn Components, Vercel, OpenAI"
          href="https://forember-9vyt.vercel.app/"
          githubLink="https://github.com/lukemelnik/forember"
        />
        <ProjectCard
          src="/personal.png"
          alt="screenshot of the personal app home page"
          title="Portfolio & Blog"
          description="You're on it! A site to showcase my work and host my blog. Deployed on a VPS using Coolify."
          tech="React, Next.js, Node.js, TailwindCSS, Shadcn Components, MDX, Resend Email, Coolify, Hetzner VPS, Docker, Cloudflare"
          href="https://lukemelnik.co"
          githubLink="https://github.com/lukemelnik/portfolio-v1"
        />
      </div>
    </section>
  );
}
