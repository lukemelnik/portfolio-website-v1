"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";
import React from "react";

export default function NavLink({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  const { selected, setSelected, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <li
      className={`relative px-5 py-2 font-bold ${selected === name ? "text-pink-700" : ""}`}
      onClick={() => {
        setSelected(name);
        setTimeOfLastClick(Date.now());
      }}
    >
      <Link href={link}>{name}</Link>
    </li>
  );
}
