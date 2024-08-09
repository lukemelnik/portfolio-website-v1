"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import RightArrowIcon from "../icons/right-arrow-icon";

export default function TableOfContents() {
  const [headings, setHeadings] =
    useState<({ text: string; id: string } | null)[]>();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // get all the headings in the div holding the blog content with id="content" - the div is in the mdx-layout component
    const docHeadings = Array.from(
      document.querySelectorAll(
        "#content h1, #content h2, #content h3, #content h4, #content h5, #content h6",
      ),
    );
    if (docHeadings.length === 0) return;
    // create id's for each heading and grab the heading text
    const headingsIds = docHeadings.map((heading) => {
      // replace spaces with hyphens and remove any special characters, make lowercase for consistent url
      if (heading.textContent) {
        const id = heading.textContent
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "")
          .toLowerCase();
        heading.id = id;
        // return object with both heading text and the id separately (for TOC list and for matching the id with the observer)
        return { text: heading.textContent, id: heading.id };
        // covers unlikely case that the heading has no text content
      } else return null;
    });
    setHeadings(headingsIds);

    // setup the intersection observer to watch for the headings in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 },
    );

    docHeadings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative col-span-1 hidden pt-10 md:block">
      <div className="sticky top-28 rounded-xl border-[1px] border-zinc-800 p-8">
        <h1 className="text-2xl font-bold">On This Page:</h1>
        <ul className="mt-3 flex flex-col gap-3">
          {headings &&
            headings.length > 0 &&
            headings.map((heading, index) => (
              // Creates clickable links that also highlight based on the section in view
              <Link
                href={`#${heading?.id}`}
                key={index}
                className={`${heading?.id === activeSection && "ml-2"}`}
              >
                <li
                  className={`group flex gap-2 duration-300 hover:translate-x-2 hover:text-pink-700 ${heading?.id === activeSection ? "font-normal text-pink-600" : "font-extralight"}`}
                  onClick={() => setActiveSection(heading?.id ?? null)}
                >
                  <span className="text-pink-700 duration-300 group-hover:translate-x-2">
                    <RightArrowIcon />
                  </span>
                  {heading?.text}
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
}
